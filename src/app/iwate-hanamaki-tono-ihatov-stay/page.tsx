import { Metadata } from "next";
import Link from "next/link";
import fs from "fs";
import path from "path";

export const metadata: Metadata = {
  title: "【岩手・花巻温泉郷＆遠野】宮沢賢治イーハトーブ・カッパ淵＆大沢・台温泉宿 完全ガイド ｜ 日本全国・旅宿クラウド",
  description: "宮沢賢治の故郷と民話の里・岩手花巻＆遠野エリア完全特化！花巻温泉郷（大沢温泉・鉛温泉・台温泉）の名湯、宮沢賢治童話村、遠野カッパ淵、伝承園のオシラサマ、前沢牛・白金豚・手打ちわんこそば宿を徹底解説。",
  keywords: ["iwate-hanamaki-tono-ihatov-stay", "宿泊予約", "温泉宿", "観光ガイド", "おすすめ旅行", "楽天トラベル"],
};

function loadSeasonalHotels() {
  try {
    const filePath = path.join(process.cwd(), "src", "data", "all_seasonal_rakuten_hotels.json");
    if (fs.existsSync(filePath)) {
      const data = JSON.parse(fs.readFileSync(filePath, "utf8"));
      return data["iwate-hanamaki-tono-ihatov-stay"] || {};
    }
  } catch (e) {
    console.error("Failed to load hotels for iwate-hanamaki-tono-ihatov-stay", e);
  }
  return {};
}

export default function MicroTouristHubPage() {
  const sections = loadSeasonalHotels();

  const areaGuides = [
  {
    "key": "hanamaki_osawa_namari_onsen",
    "title": "1. 花巻温泉郷〜大沢温泉・鉛温泉（宮沢賢治ゆかりの湯治宿と自噴立ち湯）",
    "timing": "通年（新緑の春・秋の豊沢川紅葉・冬の雪見露天風呂）",
    "desc": "花巻南温泉峡に点在する名湯群。豊沢川のせせらぎを聞く「大沢温泉」の混浴露天「大沢の湯」や木造水車小屋。立って入る日本一深い天然温泉（深さ1.25m）として知られる「鉛温泉・藤三旅館」の白猿の湯。",
    "spots": "大沢温泉（菊水館・山水閣・自炊部）、鉛温泉（白猿の湯・桂の湯）、台温泉、花巻温泉バラ園",
    "access": "東北新幹線「新花巻駅」またはJR東北本線「花巻駅」より無料送迎バス・路線バス運行。",
    "tip": "「鉛温泉・白猿の湯」は足元からポコポコと自噴する源泉100%完全かけ流しで、立ったまま湯船に浸かる独特の浮遊感を味わえます。"
  },
  {
    "key": "tono_folklore_nature_stay",
    "title": "2. 遠野〜カッパ淵・伝承園（柳田國男『遠野物語』と日本の原風景）",
    "timing": "通年（日本の原風景が広がる里山と茅葺き曲り家）",
    "desc": "カッパが住んでいたという伝説が残る「カッパ淵（常堅寺裏）」。千体のオシラサマが祀られる「伝承園」や、馬と人間が一つ屋根の下で暮らした南部曲り家が並ぶ「遠野ふるさと村」。「宮沢賢治童話村」の幻想空間。",
    "spots": "カッパ淵（キュウリの釣り竿・カッパ捕獲許可証）、伝承園（オシラ堂）、遠野ふるさと村、宮沢賢治童話村",
    "access": "JR釜石線「遠野駅」下車。花巻温泉郷より車で約50分。",
    "tip": "カッパ淵では「カッパ捕獲許可証」を道の駅等で購入して記念撮影するのが定番の楽しみ方です。"
  },
  {
    "key": "hanamaki_platina_pork_gourmet",
    "title": "3. 花巻名物「白金豚」＆前沢牛（キメ細やかなプラチナポークと極上牛肉）",
    "timing": "通年（ジューシーな甘みのある脂身と極上出汁）",
    "desc": "奥羽山脈の澄んだ地下水とトウモロコシで育てられる花巻の極上銘柄豚「白金豚（プラチナポーク）」。肉汁あふれるしゃぶしゃぶやステーキ。岩手県が誇る最高峰黒毛和牛「前沢牛」、花巻名物「わんこそば」。",
    "spots": "やぶ屋総本店（宮沢賢治が通ったそば店）、白金豚料理指定店、花巻農産物直売所",
    "access": "花巻市街地・花巻温泉郷。",
    "tip": "「白金豚のしゃぶしゃぶ」は、アクがほとんど出ず、脂身が驚くほど甘くサラッとしているのが最大の特徴です。"
  }
];

  return (
    <div className="space-y-12 max-w-5xl mx-auto pb-16">
      {/* ヒーローセクション */}
      <div className="relative rounded-3xl overflow-hidden bg-gradient-to-r from-stone-900 via-rose-950 to-amber-950 text-white p-8 md:p-14 shadow-xl border border-white/10">
        <div className="max-w-3xl space-y-4">
          <span className="text-[10px] md:text-xs font-black tracking-widest bg-amber-400 text-stone-950 px-3.5 py-1 rounded-full uppercase inline-block">
            HANAMAKI & TONO GUIDE
          </span>
          <h1 className="text-3xl md:text-5xl font-black font-journal-serif tracking-tight leading-tight text-white">
            【岩手・花巻温泉郷＆遠野】宮沢賢治イーハトーブ・カッパ淵＆大沢・台温泉宿 完全ガイド
          </h1>
          <p className="text-xs md:text-sm text-amber-100/90 leading-relaxed">
            宮沢賢治が愛した理想郷「イーハトーブ花巻」と、柳田國男『遠野物語』の世界が息づく民話の里「遠野」。渓流沿いの湯治場風情残る大沢温泉や鉛温泉の日本一深い自噴立ち湯。カッパ淵の静寂と極上の白金豚に癒やされる旅。
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
