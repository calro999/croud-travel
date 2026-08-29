import { Metadata } from "next";
import Link from "next/link";
import fs from "fs";
import path from "path";

export const metadata: Metadata = {
  title: "【岩手・平泉中尊寺＆厳美渓】世界遺産金色堂・空飛ぶだんご＆前沢牛極上宿 完全ガイド ｜ 日本全国・旅宿クラウド",
  description: "世界遺産・岩手平泉エリア完全特化！奥州藤原氏の極楽浄土「中尊寺金色堂」、毛越寺の浄土庭園、厳美渓の空飛ぶ「郭公だんご」、日本最高峰のブランド牛「前沢牛」と平泉周辺の温泉旅館を徹底解説。",
  keywords: ["iwate-hiraizumi-chusonji-heritage-stay", "宿泊予約", "温泉宿", "観光ガイド", "おすすめ旅行", "楽天トラベル"],
};

function loadSeasonalHotels() {
  try {
    const filePath = path.join(process.cwd(), "src", "data", "all_seasonal_rakuten_hotels.json");
    if (fs.existsSync(filePath)) {
      const data = JSON.parse(fs.readFileSync(filePath, "utf8"));
      return data["iwate-hiraizumi-chusonji-heritage-stay"] || {};
    }
  } catch (e) {
    console.error("Failed to load hotels for iwate-hiraizumi-chusonji-heritage-stay", e);
  }
  return {};
}

export default function MicroTouristHubPage() {
  const sections = loadSeasonalHotels();

  const areaGuides = [
  {
    "key": "hiraizumi_chusonji_walk",
    "title": "1. 中尊寺〜毛越寺（金色堂に輝く極楽浄土の世界と平安の浄土庭園）",
    "timing": "通年（春の桜・初夏の中尊寺ハス・秋の月見坂紅葉・冬の雪化粧）",
    "desc": "天治元年（1124年）建立、皆金色の国宝「中尊寺金色堂」。樹齢300年以上の杉並木が続く「月見坂」。平安時代の庭園様式を完全な形で残す特別名勝「毛越寺（もうつうじ）」の大泉が池を巡る平安浪漫の散策。",
    "spots": "中尊寺（金色堂・讃衡蔵・本堂・能舞台・月見坂）、毛越寺（大泉が池・開山堂・あやめ園）、平泉世界遺産ガイダンスセンター",
    "access": "JR東北本線「平泉駅」下車。中尊寺まで巡回バス「るんるん」で約10分。東北新幹線一ノ関駅から車約15分。",
    "tip": "中尊寺の「讃衡蔵（さんこうぞう）」には金色堂内陣の仏像群や国宝の経典が展示されており、必見の宝物館です。"
  },
  {
    "key": "genbikei_gembikei_stay",
    "title": "2. 厳美渓〜猊鼻渓（空飛ぶ「郭公だんご」と舟下りアドベンチャー）",
    "timing": "通年（新緑・夏の清涼・秋の紅葉舟下り）",
    "desc": "磐井川の奇岩とエメラルドグリーンの急流が織りなす名勝「厳美渓」。東屋からロープウェイ式のカゴで渓谷を渡る名物「郭公だんご（かっこうだんご）」。船頭の舟唄が響く「猊鼻渓（げいびけい）舟下り」。",
    "spots": "厳美渓（天工橋・郭公だんご・ガラスパーク）、猊鼻渓（舟下り・運玉投げ）、達谷窟毘沙門堂（岩窟寺院）",
    "access": "JR一ノ関駅より厳美渓行きバスで約20分。",
    "tip": "厳美渓の「郭公だんご」は、木槌で板を叩くと対岸の店舗から籠に乗って熱々のお茶とお団子がスーッと飛んでくる体験型名物です。"
  },
  {
    "key": "maesawagyu_gourmet_stay",
    "title": "3. 日本最高峰「前沢牛」＆平泉わんこそば（とろける極上霜降り肉の饗宴）",
    "timing": "通年（名峰早池峰山と北上川の恵み）",
    "desc": "鮮やかな霜降りととろけるような肉質で全国にその名を知られる「前沢牛」。老舗宿でいただく前沢牛のサーロインステーキやしゃぶしゃぶ。平泉伝統の「盛り出しわんこそば」や名物ずんだ餅を堪能。",
    "spots": "前沢牛専門店（味心うし政など）、平泉レストハウス、道の駅平泉（黄金かわらけかりんとう）",
    "access": "平泉・奥州前沢エリア。",
    "tip": "平泉のわんこそばは、椀を重ねるスタイルではなく、朱塗りの器に小分けされた薬味とともにゆっくり味わう「平泉スタイル」が主流です。"
  }
];

  return (
    <div className="space-y-12 max-w-5xl mx-auto pb-16">
      {/* ヒーローセクション */}
      <div className="relative rounded-3xl overflow-hidden bg-gradient-to-r from-stone-900 via-rose-950 to-amber-950 text-white p-8 md:p-14 shadow-xl border border-white/10">
        <div className="max-w-3xl space-y-4">
          <span className="text-[10px] md:text-xs font-black tracking-widest bg-amber-400 text-stone-950 px-3.5 py-1 rounded-full uppercase inline-block">
            HIRAIZUMI WORLD HERITAGE GUIDE
          </span>
          <h1 className="text-3xl md:text-5xl font-black font-journal-serif tracking-tight leading-tight text-white">
            【岩手・平泉中尊寺＆厳美渓】世界遺産金色堂・空飛ぶだんご＆前沢牛極上宿 完全ガイド
          </h1>
          <p className="text-xs md:text-sm text-amber-100/90 leading-relaxed">
            奥州藤原氏が築いた黄金郷「平泉」。金箔で覆われた国宝「中尊寺金色堂」と、平安の雅を今に伝える毛越寺の浄土庭園。名勝・厳美渓の渓谷美を眺め、極上の前沢牛とわんこそばに舌鼓を打つ歴史浪漫の旅。
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
