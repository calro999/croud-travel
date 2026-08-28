import { Metadata } from "next";
import Link from "next/link";
import fs from "fs";
import path from "path";

export const metadata: Metadata = {
  title: "【山梨・富士五湖＆河口湖】逆さ富士・富士急ハイランド＆ほうとう極上宿 完全ガイド ｜ 日本全国・旅宿クラウド",
  description: "山梨・富士五湖（河口湖・山中湖）エリア完全特化！湖面に映る奇跡の「逆さ富士」、富士急ハイランド、富士山パノラマロープウェイ、名物ほうとう鍋と全室富士山ビュー温泉ホテルを徹底解説。",
  keywords: ["yamanashi-fujigoko-kawaguchiko-stay", "宿泊予約", "温泉宿", "観光ガイド", "おすすめ旅行", "楽天トラベル"],
};

function loadSeasonalHotels() {
  try {
    const filePath = path.join(process.cwd(), "src", "data", "all_seasonal_rakuten_hotels.json");
    if (fs.existsSync(filePath)) {
      const data = JSON.parse(fs.readFileSync(filePath, "utf8"));
      return data["yamanashi-fujigoko-kawaguchiko-stay"] || {};
    }
  } catch (e) {
    console.error("Failed to load hotels for yamanashi-fujigoko-kawaguchiko-stay", e);
  }
  return {};
}

export default function MicroTouristHubPage() {
  const sections = loadSeasonalHotels();

  const areaGuides = [
  {
    "key": "kawaguchiko_fuji_view",
    "title": "1. 河口湖北岸・大石公園周辺（湖と富士山が織りなす「逆さ富士」の特等席）",
    "timing": "通年（春の桜・初夏のラベンダー・秋の紅葉回廊・冬の雪化粧富士）",
    "desc": "河口湖の北岸エリアに立ち並ぶ絶景リゾートホテル。波のない早朝、湖面に映る完璧な「逆さ富士」を客室テラスや露天風呂から鑑賞。秋の「もみじ回廊」ライトアップや大石公園のコキアなど見どころ満載。",
    "spots": "大石公園（ラベンダー・コキア・河口湖自然生活館）、もみじ回廊（紅葉まつり）、河口湖音楽と森の美術館、河口湖遊覧船「天晴」",
    "access": "富士急行線「河口湖駅」より河口湖周遊レトロバス（レッドライン）で約15〜25分。新宿から直通高速バスあり。",
    "tip": "逆さ富士を綺麗に見るなら、風が止む早朝6時〜7時頃が最大のチャンスです。北岸の宿に泊まれば客室からすぐに見られます。"
  },
  {
    "key": "kawaguchiko_station_walk",
    "title": "2. 河口湖駅〜富士山パノラマロープウェイ・富士急（名物ほうとうと爽快絶景）",
    "timing": "通年（世界最高クラスのアトラクションと絶景ブランコ）",
    "desc": "富士五湖観光の拠点・河口湖駅周辺。太宰治ゆかりの天上山へ登る「富士山パノラマロープウェイ」や、絶叫マシンが揃う「富士急ハイランド」。熱々の鉄鍋で提供される名物「甲州ほうとう」を満喫。",
    "spots": "〜河口湖〜 富士山パノラマロープウェイ（絶景やぐら・カチカチ山）、富士急ハイランド、ほうとう不動、小作河口湖店",
    "access": "JR中央線直通特急「富士回遊」で新宿から河口湖駅まで直通約1時間55分。",
    "tip": "パノラマロープウェイ山頂展望台にある「カチカチ山絶景ブランコ」は、富士山に向かって飛び出すような大迫力写真が撮れます。"
  },
  {
    "key": "yamanakako_onsen_stay",
    "title": "3. 山中湖・忍野八海（富士山の湧水群と朝日に輝く「紅富士」ステイ）",
    "timing": "通年（冬のダイヤモンド富士・忍野八海の透明度）",
    "desc": "富士五湖の中で最も標高が高い「山中湖」。朝日に赤く染まる「紅富士」や、夕日が山頂に沈む「ダイヤモンド富士」。富士山の雪解け水が湧き出す国の天然記念物「忍野八海」の神秘的な透明度。",
    "spots": "忍野八海（湧池・鏡池・名水百選）、山中湖パノラマ台、山中湖花の都公園、紅富士の湯",
    "access": "東富士五湖道路山中湖ICより車約10分。河口湖駅・御殿場駅より路線バス運行。",
    "tip": "忍野八海でいただく「草餅（栃餅）」や名水仕込みの蕎麦・豆腐は、富士山の清らかな水ならではの絶品です。"
  }
];

  return (
    <div className="space-y-12 max-w-5xl mx-auto pb-16">
      {/* ヒーローセクション */}
      <div className="relative rounded-3xl overflow-hidden bg-gradient-to-r from-stone-900 via-rose-950 to-amber-950 text-white p-8 md:p-14 shadow-xl border border-white/10">
        <div className="max-w-3xl space-y-4">
          <span className="text-[10px] md:text-xs font-black tracking-widest bg-amber-400 text-stone-950 px-3.5 py-1 rounded-full uppercase inline-block">
            FUJI FIVE LAKES MICRO GUIDE
          </span>
          <h1 className="text-3xl md:text-5xl font-black font-journal-serif tracking-tight leading-tight text-white">
            【山梨・富士五湖＆河口湖】逆さ富士・富士急ハイランド＆ほうとう極上宿 完全ガイド
          </h1>
          <p className="text-xs md:text-sm text-amber-100/90 leading-relaxed">
            波静かな湖面に鏡のように映り込む霊峰富士の「逆さ富士」。四季折々の花々と青い湖水が織りなす圧倒的な美景。客室露天風呂から雪化粧した富士山を独占し、名物ほうとうと甲州牛に舌鼓を打つ休日。
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
