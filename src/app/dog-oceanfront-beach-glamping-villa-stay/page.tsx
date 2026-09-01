import { Metadata } from "next";
import Link from "next/link";
import fs from "fs";
import path from "path";

export const metadata: Metadata = {
  title: "【海直結・愛犬とビーチフロントグランピング＆ヴィラ】砂浜ラン＆BBQ 完全ガイド ｜ 日本全国・旅宿クラウド",
  description: "目の前がすぐ海！愛犬と海遊び＆ビーチフロントステイ完全特化！千葉館山・白浜、淡路島、伊豆下田、沖縄、砂浜直結のプライベートヴィラ＆ドームテントグランピング、夕陽BBQ宿を徹底解説。",
  keywords: ["dog-oceanfront-beach-glamping-villa-stay", "ペットと泊まれる宿", "愛犬同伴", "ドッグリゾート", "プライベートドッグラン", "楽天トラベル"],
};

function loadSeasonalHotels() {
  try {
    const filePath = path.join(process.cwd(), "src", "data", "all_seasonal_rakuten_hotels.json");
    if (fs.existsSync(filePath)) {
      const data = JSON.parse(fs.readFileSync(filePath, "utf8"));
      return data["dog-oceanfront-beach-glamping-villa-stay"] || {};
    }
  } catch (e) {
    console.error("Failed to load hotels for dog-oceanfront-beach-glamping-villa-stay", e);
  }
  return {};
}

export default function PetDogResortHubPage() {
  const sections = loadSeasonalHotels();

  const areaGuides = [
  {
    "key": "tateyama_dog_beach_villa_stay",
    "title": "1. 千葉・館山＆白浜（平砂浦ビーチ直結！夕陽と富士山を望むドッグヴィラ）",
    "timing": "通年（冬でも温暖な南房総・夕暮れのダイヤモンド富士）",
    "desc": "南房総・平砂浦海岸や白浜のオーシャンフロントヴィラ。テラスから直接砂浜へ出られる抜群のロケーション。海水浴後の温水足洗いシャワー完備。海に沈む夕陽を眺めながら味わう房総アワビや伊勢海老の炭火BBQ。",
    "spots": "平砂浦海岸、房総フラワーライン、野島埼灯台、館山夕日桟橋",
    "access": "富津館山道路「富浦IC」より車約20分。",
    "tip": "平砂浦海岸は日本の道百選「房総フラワーライン」沿いにあり、愛犬と一緒にどこまでも続く白砂の海岸線をのんびりお散歩できます。"
  },
  {
    "key": "awaji_dog_ocean_glamping_stay",
    "title": "2. 兵庫・淡路島（瀬戸内海のサンセット＆ドームテントグランピング）",
    "timing": "通年（海に沈む夕陽が絶景の西海岸サンセットライン）",
    "desc": "淡路島西海岸の海沿いに並ぶラグジュアリードームテント。専用の天然芝ドッグラン付き。愛犬用アメニティやベッド完備。波の音をBGMにプライベートデッキで味わう淡路牛ステーキBBQ。夜の満天の星空と焚き火ナイト。",
    "spots": "淡路島サンセットライン、クラフトサーカス（愛犬OKオーシャンレストラン）、多賀の浜海水浴場",
    "access": "神戸淡路鳴門自動車道「北淡IC」または「津名一宮IC」より車。",
    "tip": "淡路島西海岸の「CRAFT CIRCUS」には巨大な愛犬専用テラス席とドッグランがあり、海を眺めながら淡路島バーガーやピザを一緒に食べられます。"
  },
  {
    "key": "okinawa_izu_dog_beach_resort",
    "title": "3. 静岡・伊豆下田＆沖縄（透き通る青い海と愛犬とのマリンリゾート）",
    "timing": "通年（下田の白浜海岸・沖縄の通年リゾート）",
    "desc": "本州屈指の透明度を誇る下田の吉佐美大浜や沖縄本島のプライベートビーチ至近リゾート。愛犬用ライフジャケット貸出、ドッグSUP体験。南国の心地よい風が吹き抜けるテラス席でのブレックファスト。",
    "spots": "吉佐美大浜海岸（サンドスキー場・竜宮窟）、白浜大浜海岸、沖縄恩納村ビーチ",
    "access": "伊豆急下田駅より車約10分、または那覇空港よりレンタカー。",
    "tip": "下田の吉佐美大浜は海外のような開放的な雰囲気があり、愛犬同伴OKのビーチカフェが点在する人気のドッグビーチです。"
  }
];

  return (
    <div className="space-y-12 max-w-5xl mx-auto pb-16">
      {/* ヒーローセクション */}
      <div className="relative rounded-3xl overflow-hidden bg-gradient-to-r from-amber-950 via-emerald-950 to-stone-900 text-white p-8 md:p-14 shadow-xl border border-amber-400/20">
        <div className="max-w-3xl space-y-4">
          <span className="text-[10px] md:text-xs font-black tracking-widest bg-gradient-to-r from-amber-300 to-yellow-400 text-stone-950 px-3.5 py-1 rounded-full uppercase inline-block shadow">
            DOG BEACH & GLAMPING GUIDE
          </span>
          <h1 className="text-3xl md:text-5xl font-black font-journal-serif tracking-tight leading-tight text-white">
            【海直結・愛犬とビーチフロントグランピング＆ヴィラ】砂浜ラン＆BBQ 完全ガイド
          </h1>
          <p className="text-xs md:text-sm text-amber-100/90 leading-relaxed">
            朝起きてゲートを開ければ、そこはどこまでも広がるプライベートビーチ！「愛犬とビーチフロントグランピング＆ヴィラ」。波打ち際を全力でダッシュし、海風を感じながらの焚き火とテラスBBQ。波音を聞きながら愛犬と眠るオーシャンステイへ。
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
              className="bg-white border border-emerald-950/10 rounded-3xl p-6 md:p-10 shadow-sm space-y-8"
            >
              {/* テーマ見出し */}
              <div className="space-y-3 border-b border-emerald-950/10 pb-5">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <span className="text-[10px] font-extrabold text-amber-800 bg-amber-50 border border-amber-200 px-3 py-0.5 rounded-full uppercase">
                    🐾 {guide.timing}
                  </span>
                </div>
                <h2 className="text-2xl md:text-3xl font-black font-journal-serif text-emerald-950">
                  {guide.title}
                </h2>
                <p className="text-xs md:text-sm text-stone-700 leading-relaxed font-medium">
                  {guide.desc}
                </p>
              </div>

              {/* 特徴・アクセス・滞在ポイント */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs">
                <div className="p-4 rounded-2xl bg-amber-50/60 border border-amber-200 space-y-1.5">
                  <span className="font-bold text-amber-950 block text-[11px]">📍 おすすめスポット＆お散歩エリア</span>
                  <p className="text-stone-700 leading-relaxed">{guide.spots}</p>
                </div>
                <div className="p-4 rounded-2xl bg-emerald-50/60 border border-emerald-200 space-y-1.5">
                  <span className="font-bold text-emerald-950 block text-[11px]">🚅 アクセス＆移動ポイント</span>
                  <p className="text-stone-700 leading-relaxed">{guide.access}</p>
                </div>
                <div className="p-4 rounded-2xl bg-orange-50/60 border border-orange-200 space-y-1.5">
                  <span className="font-bold text-orange-950 block text-[11px]">💡 愛犬と快適に過ごすコツ</span>
                  <p className="text-stone-700 leading-relaxed">{guide.tip}</p>
                </div>
              </div>

              {/* 🏨 厳選ドッグフレンドリー宿カード */}
              <div className="space-y-4 pt-4 border-t border-emerald-950/10">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-base font-bold font-journal-serif text-emerald-950 flex items-center gap-2">
                      <span>🏨</span> <span>{guide.title}におすすめの愛犬同伴厳選宿</span>
                    </h3>
                  </div>
                  <span className="text-xs font-bold text-emerald-800 bg-emerald-50 border border-emerald-200 px-3 py-1 rounded-full">
                    愛犬歓迎宿
                  </span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                  {hotels.map((hotel: any) => (
                    <article
                      key={hotel.hotelNo}
                      className="flex flex-col justify-between border border-emerald-950/10 bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition duration-200"
                    >
                      <div>
                        <div className="aspect-video relative overflow-hidden bg-emerald-50 border-b border-emerald-100">
                          {hotel.hotelImageUrl ? (
                            <img
                              src={hotel.hotelImageUrl}
                              alt={hotel.hotelName}
                              className="w-full h-full object-cover"
                              loading="lazy"
                            />
                          ) : (
                            <div className="w-full h-full flex items-center justify-center text-emerald-300 text-xs font-bold">
                              {hotel.hotelName}
                            </div>
                          )}
                          {hotel.hotelMinCharge > 0 && (
                            <span className="absolute bottom-2 right-2 text-[9px] font-black bg-slate-900/90 text-amber-300 px-2 py-0.5 rounded border border-amber-400/30">
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
                          className="block w-full text-center py-2.5 text-xs font-black text-white bg-gradient-to-r from-amber-600 to-emerald-700 hover:from-amber-500 hover:to-emerald-600 rounded-xl shadow transition"
                        >
                          ✈️ 楽天トラベルで愛犬同伴プランを見る
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
          className="inline-flex items-center gap-2 text-xs font-bold text-emerald-950 bg-white hover:bg-emerald-50 border border-emerald-200 px-8 py-3.5 rounded-2xl transition shadow-sm"
        >
          <span>🗾</span>
          <span>全国47都道府県の観光＆宿泊ガイド一覧へ</span>
          <span>→</span>
        </Link>
      </div>
    </div>
  );
}
