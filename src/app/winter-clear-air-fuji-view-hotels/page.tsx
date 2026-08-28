import { Metadata } from "next";
import Link from "next/link";
import fs from "fs";
import path from "path";

export const metadata: Metadata = {
  title: "【白銀の霊峰】冠雪富士山を望む！冬の富士ビュー絶景ホテル 完全ガイド ｜ 日本全国・旅宿クラウド",
  description: "空気が澄み渡る冬こそ富士山鑑賞の最高峰！山梨・河口湖畔（逆さ富士）、神奈川・箱根仙石原芦ノ湖、静岡・日本平三保松原、山梨・山中湖（紅富士）など、客室や露天風呂から白銀の富士山を仰ぐ人気宿を徹底解説。",
  keywords: ["winter-clear-air-fuji-view-hotels", "宿泊予約", "温泉宿", "ホテル特集", "おすすめ旅行", "楽天トラベル"],
};

function loadSeasonalHotels() {
  try {
    const filePath = path.join(process.cwd(), "src", "data", "all_seasonal_rakuten_hotels.json");
    if (fs.existsSync(filePath)) {
      const data = JSON.parse(fs.readFileSync(filePath, "utf8"));
      return data["winter-clear-air-fuji-view-hotels"] || {};
    }
  } catch (e) {
    console.error("Failed to load seasonal hotels for winter-clear-air-fuji-view-hotels", e);
  }
  return {};
}

export default function SeasonalFeaturePage() {
  const sections = loadSeasonalHotels();

  const areaGuides = [
  {
    "key": "kawaguchiko_fuji_view",
    "title": "1. 山梨・河口湖畔（波静かな湖面に映る「逆さ富士」と展望露天風呂）",
    "timing": "ベストシーズン：11月〜3月（年間で最も富士山が見える確率が高い）",
    "desc": "河口湖北岸のホテル街からは、正面に雄大な富士山と河口湖のパノラマが広がります。全室富士山ビューの客室や、湯船に浸かりながら富士山を眺められる展望露天風呂が魅力。甲州ワインビーフディナーも。",
    "spots": "大石公園、河口湖もみじ回廊、河口湖〜富士山パノラマロープウェイ、新倉山浅間公園",
    "access": "中央自動車道河口湖ICより約10〜15分。新宿から直通バス・JR特急富士回遊で約100分。",
    "tip": "早朝の風がない時間帯に湖畔へ出ると、完全なリフレクションを描く奇跡の「逆さ富士」を撮影できます。"
  },
  {
    "key": "hakone_fuji_view",
    "title": "2. 神奈川・箱根仙石原＆芦ノ湖（芦ノ湖の青と白銀の富士山が織りなす大パノラマ）",
    "timing": "ベストシーズン：11月〜2月",
    "desc": "芦ノ湖畔や仙石原の高台に建つリゾートホテル。大涌谷の温泉と、遊覧船が行き交う芦ノ湖越しに望む雄大な富士山の共演。箱根ロープウェイの大涌谷空中散歩や美術館巡りと合わせて楽しめます。",
    "spots": "芦ノ湖（箱根海賊船）、箱根神社（平和の鳥居）、大涌谷、仙石原すすき草原",
    "access": "小田急ロマンスカー箱根湯本駅より箱根登山バスで芦ノ湖・仙石原方面へ約35〜45分。",
    "tip": "芦ノ湖畔の成川美術館展望ラウンジからの富士山パノラマは、日本画の巨匠たちも愛した絶景構図です。"
  },
  {
    "key": "nihondaira_fuji_view",
    "title": "3. 静岡・日本平＆三保松原（駿河湾と夜景越しに浮かび上がる霊峰富士）",
    "timing": "ベストシーズン：11月〜3月",
    "desc": "標高307mの日本平山頂。隈研吾設計の「日本平夢テラス」や日本平ホテルからは、駿河湾、清水港の夜景、三保松原、そして富士山を一望する「風景美術館」と称される圧倒的なパノラマが広がります。",
    "spots": "日本平夢テラス、三保松原（世界遺産富士山構成資産）、久能山東照宮（ロープウェイ接続）、エスパルスドリームプラザ",
    "access": "東海道新幹線「静岡駅」より路線バス・タクシーで約25〜30分。東名静岡IC・清水IC。",
    "tip": "日本平ホテルの芝生庭園から眺める夕暮れ時のグラデーションと、眼下に広がる清水の工場・港の夜景は息をのむ美しさです。"
  },
  {
    "key": "yamanakako_fuji_view",
    "title": "4. 山梨・山中湖畔（朝日に真っ赤に染まる「紅富士」と富士山溶岩温泉）",
    "timing": "ベストシーズン：12月〜2月（朝6時半〜7時頃の紅富士）",
    "desc": "富士五湖の中で最も富士山に近く、標高約1,000mに位置する山中湖。冬の晴れた早朝、雪をかぶった山肌が朝日で紅色に輝く「紅富士（べにふじ）」は圧巻。富士山溶岩を配した温泉露天風呂で温まります。",
    "spots": "山中湖パノラマ台、長池親水公園、忍野八海、花の都公園（冬のイルミネーション）",
    "access": "東富士五湖道路山中湖ICより車で約5〜10分。バスタ新宿より直行高速バス約120分。",
    "tip": "2月上旬〜中旬には山中湖で富士山頂に太陽が沈む「ダイヤモンド富士」の観測イベントが開催されます。"
  }
];

  return (
    <div className="space-y-12 max-w-5xl mx-auto pb-16">
      {/* ヒーローセクション */}
      <div className="relative rounded-3xl overflow-hidden bg-gradient-to-r from-stone-900 via-rose-950 to-amber-950 text-white p-8 md:p-14 shadow-xl border border-white/10">
        <div className="max-w-3xl space-y-4">
          <span className="text-[10px] md:text-xs font-black tracking-widest bg-amber-400 text-stone-950 px-3.5 py-1 rounded-full uppercase inline-block">
            CLEAR AIR FUJI VIEW
          </span>
          <h1 className="text-3xl md:text-5xl font-black font-journal-serif tracking-tight leading-tight text-white">
            【白銀の霊峰】冠雪富士山を望む！冬の富士ビュー絶景ホテル 完全ガイド
          </h1>
          <p className="text-xs md:text-sm text-amber-100/90 leading-relaxed">
            雪化粧をまとった神々しい富士山の姿。朝日に赤く染まる「紅富士」、湖面に映り込む「逆さ富士」、夜空に浮かぶシルエット。冬の澄み切った空気の中でしか出逢えない奇跡の富士山ビューホテルへ。
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
