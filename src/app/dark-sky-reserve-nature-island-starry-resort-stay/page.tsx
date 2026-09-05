import { Metadata } from "next";
import Link from "next/link";
import fs from "fs";
import path from "path";

export const metadata: Metadata = {
  title: "【国際星空保護区＆離島ネイチャーステイ】石垣島・西表島・神津島 完全ガイド ｜ 日本全国・旅宿クラウド",
  description: "世界が認めた奇跡の暗闇と星空！国際ダークスカイ協会認定「星空保護区」＆離島リゾート宿完全特化！沖縄「西表石垣国立公園（全天88星座中84星座）」、東京「神津島」、岡山「美星町」、南十字星観察・ビーチ星空ナイトツアーを徹底解説。",
  keywords: ["dark-sky-reserve-nature-island-starry-resort-stay", "星空旅行", "天体観測", "夜景ホテル", "温泉宿", "楽天トラベル"],
};

function loadSeasonalHotels() {
  try {
    const filePath = path.join(process.cwd(), "src", "data", "all_seasonal_rakuten_hotels.json");
    if (fs.existsSync(filePath)) {
      const data = JSON.parse(fs.readFileSync(filePath, "utf8"));
      return data["dark-sky-reserve-nature-island-starry-resort-stay"] || {};
    }
  } catch (e) {
    console.error("Failed to load hotels for dark-sky-reserve-nature-island-starry-resort-stay", e);
  }
  return {};
}

export default function StargazingHubPage() {
  const sections = loadSeasonalHotels();

  const areaGuides = [
  {
    "key": "ishigaki_iriomote_dark_sky_stay",
    "title": "1. 沖縄・西表石垣国立公園〜石垣島・西表島（日本初の国際星空保護区）",
    "timing": "通年（南十字星：12月下旬〜6月中旬・夏の天の川：7月〜10月）",
    "desc": "全天88星座のうち実に84星座、21個ある一等星のすべてを観測できる奇跡の島々。日本で初めて国際ダークスカイ協会により「星空保護区（ダークスカイ・パーク）」に認定。水平線すれすれに南十字星が輝く夜。ビーチに寝転がって仰ぐ満天の星。",
    "spots": "石垣島天文台、フサキビーチ、川平湾、西表島ピナイサーラの滝、星空ナイトツアー",
    "access": "南ぬ島石垣空港直行便。石垣港離島ターミナルより西表島へ高速船で約45分。",
    "tip": "石垣島の「フサキビーチ」などのリゾートホテルでは、ビーチにリクライニングチェアが並べられ、波のせせらぎを聞きながらカクテル片手に星空を眺められます。"
  },
  {
    "key": "kouzushima_tokyo_dark_sky_stay",
    "title": "2. 東京・神津島〜ダークスカイ・アイランド（東京都心から行ける奇跡の星空島）",
    "timing": "通年（夏の天の川・冬のオリオン座と澄み切った大気）",
    "desc": "東京都の伊豆諸島に位置し、アジアで2番目・日本で2番目に国際星空保護区（ダークスカイ・アイランド）に認定された「神津島（こうづしま）」。島民が一丸となって光害対策を実施し、夜になると街全体が本物の暗闇に。赤崎遊歩道での星空ガイドツアー。",
    "spots": "赤崎遊歩道、天上山（花の百名山・ハートの砂地）、前浜海岸、神津島温泉保養センター",
    "access": "東京・竹芝桟橋より高速ジェット船で約3時間45分、または調布飛行場より飛行機で約45分。",
    "tip": "神津島では地元認定ガイド「星空案内人」によるナイトツアーが人気で、レジャーシートに寝転がりながらレーザーポインターを使った星座解説を聞くことができます。"
  },
  {
    "key": "bisei_okayama_astronomy_stay",
    "title": "3. 岡山・井原市美星町〜星空を守る光害防止条例の街（アジア初のダークスカイ・コミュニティ）",
    "timing": "通年（秋〜冬の澄んだ夜空・美星天文台公開観測会）",
    "desc": "日本で初めて自治体として「光害防止条例」を制定した星の街「美星町（びせいちょう）」。アジア初の「ダークスカイ・コミュニティ」認定。口径101cmの巨大反射望遠鏡を備えた「美星天文台」。星空を見上げるペンションや古民家宿での滞在。",
    "spots": "美星天文台、中世夢が原、星の郷青空市、美星スペースガードセンター",
    "access": "JR伯備線「備中高梁駅」より車約30分。山陽道「笠岡IC」より約40分。",
    "tip": "美星天文台は夜間一般公開を行っており、口径101cmの望遠鏡で遠い銀河や星雲、惑星の細部までリアルタイムで観察することができます。"
  }
];

  return (
    <div className="space-y-12 max-w-5xl mx-auto pb-16">
      {/* ヒーローセクション */}
      <div className="relative rounded-3xl overflow-hidden bg-gradient-to-r from-slate-950 via-indigo-950 to-purple-950 text-white p-8 md:p-14 shadow-xl border border-indigo-400/30">
        <div className="max-w-3xl space-y-4">
          <span className="text-[10px] md:text-xs font-black tracking-widest bg-gradient-to-r from-cyan-400 to-indigo-300 text-stone-950 px-3.5 py-1 rounded-full uppercase inline-block shadow">
            DARK SKY RESERVE & ISLAND GUIDE
          </span>
          <h1 className="text-3xl md:text-5xl font-black font-journal-serif tracking-tight leading-tight text-white">
            【国際星空保護区＆離島ネイチャーステイ】石垣島・西表島・神津島 完全ガイド
          </h1>
          <p className="text-xs md:text-sm text-indigo-100/90 leading-relaxed">
            街明かりの影響を極限まで抑えた、世界基準の美しい夜空「国際星空保護区（ダークスカイ・プレイス）」。全天88星座のうち84星座が見られる八重山諸島（石垣島・西表島）や、東京都心から行ける神津島。波の音をBGMにビーチで眺める本物の天の川と南十字星の旅へ。
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
              className="bg-white border border-indigo-950/10 rounded-3xl p-6 md:p-10 shadow-sm space-y-8"
            >
              {/* テーマ見出し */}
              <div className="space-y-3 border-b border-indigo-950/10 pb-5">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <span className="text-[10px] font-extrabold text-indigo-800 bg-indigo-50 border border-indigo-200 px-3 py-0.5 rounded-full uppercase">
                    🌌 {guide.timing}
                  </span>
                </div>
                <h2 className="text-2xl md:text-3xl font-black font-journal-serif text-indigo-950">
                  {guide.title}
                </h2>
                <p className="text-xs md:text-sm text-stone-700 leading-relaxed font-medium">
                  {guide.desc}
                </p>
              </div>

              {/* 特徴・アクセス・滞在ポイント */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs">
                <div className="p-4 rounded-2xl bg-indigo-50/60 border border-indigo-200 space-y-1.5">
                  <span className="font-bold text-indigo-950 block text-[11px]">📍 おすすめスポット＆見どころ</span>
                  <p className="text-stone-700 leading-relaxed">{guide.spots}</p>
                </div>
                <div className="p-4 rounded-2xl bg-purple-50/60 border border-purple-200 space-y-1.5">
                  <span className="font-bold text-purple-950 block text-[11px]">🚅 アクセス＆移動ポイント</span>
                  <p className="text-stone-700 leading-relaxed">{guide.access}</p>
                </div>
                <div className="p-4 rounded-2xl bg-cyan-50/60 border border-cyan-200 space-y-1.5">
                  <span className="font-bold text-cyan-950 block text-[11px]">💡 星空鑑賞を満喫するコツ</span>
                  <p className="text-stone-700 leading-relaxed">{guide.tip}</p>
                </div>
              </div>

              {/* 🏨 厳選宿カード */}
              <div className="space-y-4 pt-4 border-t border-indigo-950/10">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-base font-bold font-journal-serif text-indigo-950 flex items-center gap-2">
                      <span>🏨</span> <span>{guide.title}におすすめの厳選宿</span>
                    </h3>
                  </div>
                  <span className="text-xs font-bold text-indigo-800 bg-indigo-50 border border-indigo-200 px-3 py-1 rounded-full">
                    星空展望宿
                  </span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                  {hotels.map((hotel: any) => (
                    <article
                      key={hotel.hotelNo}
                      className="flex flex-col justify-between border border-indigo-950/10 bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition duration-200"
                    >
                      <div>
                        <div className="aspect-video relative overflow-hidden bg-indigo-50/50 border-b border-indigo-100">
                          {hotel.hotelImageUrl ? (
                            <img
                              src={hotel.hotelImageUrl}
                              alt={hotel.hotelName}
                              className="w-full h-full object-cover"
                              loading="lazy"
                            />
                          ) : (
                            <div className="w-full h-full flex items-center justify-center text-indigo-800/40 text-xs font-bold">
                              {hotel.hotelName}
                            </div>
                          )}
                          {hotel.hotelMinCharge > 0 && (
                            <span className="absolute bottom-2 right-2 text-[9px] font-black bg-slate-900/90 text-cyan-300 px-2 py-0.5 rounded border border-cyan-400/30">
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
                          <h4 className="text-xs md:text-sm font-black font-journal-serif text-stone-900 line-clamp-2">
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
                          className="block w-full text-center py-2.5 text-xs font-black text-white bg-gradient-to-r from-indigo-700 to-purple-800 hover:from-indigo-600 hover:to-purple-700 rounded-xl shadow transition"
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
          className="inline-flex items-center gap-2 text-xs font-bold text-indigo-950 bg-white hover:bg-indigo-50 border border-indigo-300 px-8 py-3.5 rounded-2xl transition shadow-sm"
        >
          <span>🗾</span>
          <span>全国47都道府県の観光＆宿泊ガイド一覧へ</span>
          <span>→</span>
        </Link>
      </div>
    </div>
  );
}
