import { Metadata } from "next";
import Link from "next/link";
import fs from "fs";
import path from "path";

export const metadata: Metadata = {
  title: "【富士山ビュー客室露天風呂の宿】河口湖・箱根・日本平＆霊峰パノラマ 完全ガイド ｜ 日本全国・旅宿クラウド",
  description: "客室の湯船から富士山を独り占め！河口湖畔の逆さ富士、箱根芦ノ湖畔の富士山ビュー露天、静岡日本平の駿河湾＆富士山大パノラマ、記念日・特別な日に泊まりたい絶景温泉旅館を徹底解説。",
  keywords: ["japan-fuji-view-private-open-air-bath-stay", "宿泊予約", "温泉宿", "観光ガイド", "おすすめ旅行", "楽天トラベル"],
};

function loadSeasonalHotels() {
  try {
    const filePath = path.join(process.cwd(), "src", "data", "all_seasonal_rakuten_hotels.json");
    if (fs.existsSync(filePath)) {
      const data = JSON.parse(fs.readFileSync(filePath, "utf8"));
      return data["japan-fuji-view-private-open-air-bath-stay"] || {};
    }
  } catch (e) {
    console.error("Failed to load hotels for japan-fuji-view-private-open-air-bath-stay", e);
  }
  return {};
}

export default function ScenicViewHubPage() {
  const sections = loadSeasonalHotels();

  const areaGuides = [
  {
    "key": "kawaguchiko_fuji_private_onsen",
    "title": "1. 河口湖北岸〜産屋ヶ崎（湖面に映る「逆さ富士」と客室専用露天風呂）",
    "timing": "通年（冬期11月〜2月は雪化粧した富士山と澄んだ青空のベストシーズン）",
    "desc": "富士五湖の中で最も富士山の眺望に優れた「河口湖北岸」。客室のテラスに設えられた温泉露天風呂から、遮るもののない富士山と湖を一望。波のない晴れた早朝に見られる奇跡の「逆さ富士」と、夕日に染まる「赤富士」。",
    "spots": "産屋ヶ崎（逆さ富士の名所）、大石公園（ラベンダー・コキア）、河口湖音楽と森の美術館、新倉山浅間公園（五重塔と富士山）",
    "access": "富士急行線「河口湖駅」より各ホテル無料送迎バス運行。",
    "tip": "冬の早朝（日の出直後）は風が止まり湖面が鏡のようになるため、最も美しい逆さ富士を部屋の露天風呂から鑑賞できます。"
  },
  {
    "key": "hakone_fuji_view_luxury_ryokan",
    "title": "2. 箱根・芦ノ湖畔〜大涌谷（海賊船・赤い水中鳥居と富士山の共演）",
    "timing": "通年（空気が澄む早朝と夕暮れ時）",
    "desc": "芦ノ湖の南岸・元箱根周辺から望む、箱根神社の平和の鳥居と芦ノ湖、その奥にそびえる富士山の黄金アングル。箱根駒ヶ岳ロープウェイ山頂展望台からの360度パノラマ。白濁の硫黄泉や美肌温泉の客室風呂ステイ。",
    "spots": "箱根神社（平和の鳥居）、箱根駒ヶ岳ロープウェイ、大涌谷、芦ノ湖遊覧船・箱根海賊船",
    "access": "小田急ロマンスカー「箱根湯本駅」より箱根登山バス「元箱根港」方面へ。",
    "tip": "芦ノ湖の海賊船の展望デッキからは、湖上を進みながら富士山が徐々に大きく迫り来るダイナミックな景観を楽しめます。"
  },
  {
    "key": "nihondaira_suruga_fuji_resort",
    "title": "3. 静岡・日本平〜駿河湾・伊豆西海岸（青い海と茶畑越しに仰ぐ世界遺産の富士）",
    "timing": "通年（夕暮れ時にピンク色に染まる紅富士）",
    "desc": "国名勝・日本観光地百選第1位に輝いた「日本平」。日本平夢テラスの展望回廊から望む駿河湾・三保松原越しの富士山。伊豆西海岸（土肥・戸田）の海辺露天風呂から、駿河湾の水平線の向こうに浮かぶ富士山を望む絶景。",
    "spots": "日本平夢テラス（隈研吾建築都市設計事務所）、日本平ロープウェイ（久能山東照宮）、三保松原（羽衣の松）、土肥温泉",
    "access": "JR静岡駅より日本平行きバス約35分。東名高速「静岡IC」より約25分。",
    "tip": "日本平ホテルなどの全面ガラス張りのアトリウムラウンジは「風景美術館」と称され、一枚の巨大な絵画のような富士山を鑑賞できます。"
  }
];

  return (
    <div className="space-y-12 max-w-5xl mx-auto pb-16">
      {/* ヒーローセクション */}
      <div className="relative rounded-3xl overflow-hidden bg-gradient-to-r from-stone-900 via-rose-950 to-amber-950 text-white p-8 md:p-14 shadow-xl border border-white/10">
        <div className="max-w-3xl space-y-4">
          <span className="text-[10px] md:text-xs font-black tracking-widest bg-amber-400 text-stone-950 px-3.5 py-1 rounded-full uppercase inline-block">
            FUJI VIEW & PRIVATE ONSEN GUIDE
          </span>
          <h1 className="text-3xl md:text-5xl font-black font-journal-serif tracking-tight leading-tight text-white">
            【富士山ビュー客室露天風呂の宿】河口湖・箱根・日本平＆霊峰パノラマ 完全ガイド
          </h1>
          <p className="text-xs md:text-sm text-amber-100/90 leading-relaxed">
            湯船に身を沈め、湯けむりの向こうにそびえる雄大な霊峰「富士山」。河口湖の水面に映る「逆さ富士」、芦ノ湖の青い水越しに仰ぐ雪化粧の富士、駿河湾の彼方に浮かぶ夕暮れの富士。日本一の絶景を独占する至福の客室露天風呂へ。
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

              {/* 絶景ポイント・アクセス・撮影のコツ */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs">
                <div className="p-4 rounded-2xl bg-amber-50/50 border border-amber-200 space-y-1.5">
                  <span className="font-bold text-amber-950 block text-[11px]">📍 絶景ビュースポット</span>
                  <p className="text-stone-700 leading-relaxed">{guide.spots}</p>
                </div>
                <div className="p-4 rounded-2xl bg-teal-50/50 border border-teal-200 space-y-1.5">
                  <span className="font-bold text-teal-950 block text-[11px]">🚅 アクセス＆移動目安</span>
                  <p className="text-stone-700 leading-relaxed">{guide.access}</p>
                </div>
                <div className="p-4 rounded-2xl bg-rose-50/50 border border-rose-200 space-y-1.5">
                  <span className="font-bold text-rose-950 block text-[11px]">💡 最高の景色を楽しむコツ</span>
                  <p className="text-stone-700 leading-relaxed">{guide.tip}</p>
                </div>
              </div>

              {/* 🏨 厳選宿カード */}
              <div className="space-y-4 pt-4 border-t border-emerald-950/10">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-base font-bold font-journal-serif text-emerald-950 flex items-center gap-2">
                      <span>🏨</span> <span>{guide.title}におすすめの絶景展望宿</span>
                    </h3>
                  </div>
                  <span className="text-xs font-bold text-teal-800 bg-teal-50 border border-teal-200 px-3 py-1 rounded-full">
                    絶景プラン
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
