import { Metadata } from "next";
import Link from "next/link";
import fs from "fs";
import path from "path";

export const metadata: Metadata = {
  title: "【宮崎・高千穂峡】真名井の滝・高千穂神楽＆天安河原・宮崎牛極上宿 完全ガイド ｜ 日本全国・旅宿クラウド",
  description: "神話のふるさと宮崎・高千穂エリア完全特化！柱状節理の断崖絶壁と「真名井の滝」手漕ぎボート、夜毎奉納される「高千穂夜神楽」、天岩戸神社・天安河原、極上宮崎牛炭火焼きと隠れ家温泉宿を徹底解説。",
  keywords: ["miyazaki-takachiho-gorge-myth-stay", "宿泊予約", "温泉宿", "観光ガイド", "おすすめ旅行", "楽天トラベル"],
};

function loadSeasonalHotels() {
  try {
    const filePath = path.join(process.cwd(), "src", "data", "all_seasonal_rakuten_hotels.json");
    if (fs.existsSync(filePath)) {
      const data = JSON.parse(fs.readFileSync(filePath, "utf8"));
      return data["miyazaki-takachiho-gorge-myth-stay"] || {};
    }
  } catch (e) {
    console.error("Failed to load hotels for miyazaki-takachiho-gorge-myth-stay", e);
  }
  return {};
}

export default function MicroTouristHubPage() {
  const sections = loadSeasonalHotels();

  const areaGuides = [
  {
    "key": "takachiho_gorge_boat",
    "title": "1. 高千穂峡〜真名井の滝（阿蘇溶岩の柱状節理と手漕ぎ貸ボートアドベンチャー）",
    "timing": "通年（新緑の5月・秋の紅葉11月・夏のライトアップ）",
    "desc": "高さ80m〜100mの切り立った断崖が約7kmにわたって続く国の名勝・天然記念物「高千穂峡」。日本の滝百選「真名井の滝」のすぐそばまで手漕ぎ貸ボートで近づき、降り注ぐマイナスイオンを全身で体感。",
    "spots": "真名井の滝、高千穂峡貸ボート、仙人の屏風岩、槍飛橋、高千穂峡淡水魚水族館",
    "access": "熊本空港より特急バス「たかちほ号」で約2時間。延岡駅より路線バス約80分。",
    "tip": "高千穂峡の貸ボートは完全事前予約制（公式サイト）です。特に午前中の時間帯は数週間前から満席になるため早めの予約が必須です。"
  },
  {
    "key": "takachiho_shrine_kagura",
    "title": "2. 高千穂神社〜天岩戸神社・天安河原（毎夜行われる高千穂神楽と無数の積石）",
    "timing": "通年（毎夜20時から高千穂神社神楽殿で「観光夜神楽」奉納）",
    "desc": "天照大神がお隠れになった天岩戸を祀る「天岩戸神社」。八百万の神々が集まって相談したと伝わる大洞窟「天安河原」に広がる無数の願いの積石。夜は高千穂神社の神楽殿で三十三番の代表的な四番の神楽を鑑賞。",
    "spots": "高千穂神社（夫婦杉・神楽殿）、天岩戸神社（西本宮・東本宮）、天安河原（仰慕窟・積石祈願）、槵觸神社（くしふるじんじゃ）",
    "access": "高千穂バスセンターより車で約10〜15分。",
    "tip": "高千穂神社の境内にある樹齢800年の「夫婦杉」は、大切な人と手をつないで時計回りに3周回ると縁結び・家内安全が叶うとされます。"
  },
  {
    "key": "takachiho_wagyu_luxury",
    "title": "3. 高千穂牛ステーキ＆雲海テラス（和牛オリンピック日本一と国見ヶ丘の雲海）",
    "timing": "秋〜冬期：9月中旬〜11月下旬の早朝（国見ヶ丘の雲海シーズン）",
    "desc": "内閣総理大臣賞を連続受賞した最高峰の黒毛和牛「高千穂牛（宮崎牛）」。肉汁あふれる炭火焼きステーキや朴葉味噌焼き。標高513mの「国見ヶ丘」から望む、高千穂盆地を覆い尽くす幻想的な大雲海。",
    "spots": "国見ヶ丘展望台（雲海・阿蘇五岳パノラマ・ミシュラン一ツ星）、高千穂あまてらす鉄道（グランドスーパーカート）",
    "access": "高千穂中心街より国見ヶ丘まで車で約15分。",
    "tip": "「高千穂あまてらす鉄道」のグランドスーパーカートは、高さ105mの高千穂橋梁の上でシャボン玉を飛ばす大迫力のアトラクションです。"
  }
];

  return (
    <div className="space-y-12 max-w-5xl mx-auto pb-16">
      {/* ヒーローセクション */}
      <div className="relative rounded-3xl overflow-hidden bg-gradient-to-r from-stone-900 via-rose-950 to-amber-950 text-white p-8 md:p-14 shadow-xl border border-white/10">
        <div className="max-w-3xl space-y-4">
          <span className="text-[10px] md:text-xs font-black tracking-widest bg-amber-400 text-stone-950 px-3.5 py-1 rounded-full uppercase inline-block">
            TAKACHIHO MYTH & NATURE GUIDE
          </span>
          <h1 className="text-3xl md:text-5xl font-black font-journal-serif tracking-tight leading-tight text-white">
            【宮崎・高千穂峡】真名井の滝・高千穂神楽＆天安河原・宮崎牛極上宿 完全ガイド
          </h1>
          <p className="text-xs md:text-sm text-amber-100/90 leading-relaxed">
            阿蘇の火山活動が創り出した奇跡の峡谷「高千穂峡」。エメラルドグリーンの水面に流れ落ちる「真名井の滝」。天孫降臨の神話が息づく天安河原と、毎夜響く神楽の音。神秘のパワースポットと宮崎牛に癒やされる旅。
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
