import { Metadata } from "next";
import Link from "next/link";
import fs from "fs";
import path from "path";

export const metadata: Metadata = {
  title: "【秋の連休】シルバーウィーク旅行・おすすめ人気ホテル＆リゾート ｜ 日本全国・旅宿クラウド",
  description: "秋の大型連休・シルバーウィーク旅行特集！軽井沢高原リゾート、富士山＆河口湖、熱海温泉、沖縄混雑回避ステイ、USJ秋イベントなど、家族旅行やカップル旅行にぴったりの厳選ホテル＆温泉宿を完全ガイド。",
  keywords: ["シルバーウィーク", "秋旅行", "連休旅行", "家族旅行", "軽井沢", "河口湖", "熱海", "沖縄", "USJ"],
};

function loadSilverWeekHotels() {
  try {
    const filePath = path.join(process.cwd(), "src", "data", "autumn_silverweek_rakuten_hotels.json");
    if (fs.existsSync(filePath)) {
      const data = JSON.parse(fs.readFileSync(filePath, "utf8"));
      return data["silverweek-family-couple"] || {};
    }
  } catch (e) {
    console.error("Failed to load silver week hotels data", e);
  }
  return {};
}

export default function SilverWeekPage() {
  const sections = loadSilverWeekHotels();

  const destinations = [
    {
      key: "karuizawa_resort",
      title: "1. 長野・軽井沢（高原リゾート＆アウトレット）",
      target: "おすすめ：カップル記念日・女子旅・ワンちゃんと一緒の旅行",
      desc: "秋風が吹き抜ける軽井沢は、旧軽井沢銀座の散策や軽井沢・プリンスショッピングプラザでの買い物が快適。雲場池の紅葉リフレクションやハルニレテラスでのカフェタイムを満喫できます。",
      spots: "雲場池、軽井沢プリンスショッピングプラザ、ハルニレテラス、白糸の滝、旧三笠ホテル",
      accessTime: "北陸新幹線で東京駅から軽井沢駅まで最速約65分。上信越自動車道碓氷軽井沢ICより約20分。",
      stayTip: "連休中の旧軽井沢周辺は渋滞しやすいため、レンタサイクルでの移動がおすすめ。夜は冷え込むため、暖炉や温泉のあるリゾートホテルが快適です。"
    },
    {
      key: "fujigoko_lakeview",
      title: "2. 山梨・富士五湖・河口湖（富士山絶景＆温泉）",
      target: "おすすめ：ファミリー旅行・ドライブデート・写真好き",
      desc: "澄んだ秋空の下、雪化粧を始めた富士山と湖畔の紅葉を同時に望む絶景ロケーション。河口湖北岸のもみじ回廊や富士急ハイランドなど、大人から子どもまで1日中楽しめます。",
      spots: "河口湖もみじ回廊、富士急ハイランド、新倉山浅間公園、忍野八海、大石公園",
      accessTime: "新宿からJR特急「富士回遊」で直通約1時間55分。中央自動車道河口湖ICより各湖畔へ直結。",
      stayTip: "客室や露天風呂から富士山が真正面に見えるホテルは連休中に即満室となります。早めの予約と朝の逆さ富士鑑賞がポイントです。"
    },
    {
      key: "atami_izu",
      title: "3. 静岡・熱海・伊東温泉（海鮮美食＆海露天風呂）",
      target: "おすすめ：夫婦・3世代ファミリー・温泉美食重視",
      desc: "新幹線ですぐのアクセス抜群な王道リゾート。相模湾を一望する絶景インフィニティ温泉や、金目鯛・伊勢海老・アワビなど秋の味覚を心ゆくまで味わう贅沢な温泉旅行が叶います。",
      spots: "熱海サンビーチ、ACAO FOREST、来宮神社、伊豆シャボテン動物公園、城ヶ崎海岸",
      accessTime: "東海道新幹線で東京駅から熱海駅までわずか約45分。伊豆急行線で伊東・下田方面へ接続。",
      stayTip: "秋の熱海海上花火大会（特定日開催）に合わせた宿泊が人気。海岸沿いのオーシャンビューホテルや客室露天風呂付き宿が特におすすめです。"
    },
    {
      key: "okinawa_autumn",
      title: "4. 沖縄・恩納村（秋の混雑回避ビーチリゾート）",
      target: "おすすめ：子連れファミリー・ゆったりリゾートステイ",
      desc: "真夏の猛暑や台風シーズンが落ち着き、過ごしやすい秋の沖縄。水温も高く10月まで海水浴やプールが楽しめる上、夏休みほどの混雑がなくホテル料金もリーズナブルになります。",
      spots: "万座毛、美ら海水族館、古宇利島、残波岬、アメリカンビレッジ",
      accessTime: "那覇空港から沖縄自動車道経由で恩納村リゾートエリアまで車で約50〜60分。",
      stayTip: "インフィニティプールや屋内温水プール、ビーチ直結の大型リゾートホテルを選べば、天候に左右されず贅沢な南国バカンスを過ごせます。"
    },
    {
      key: "usj_autumn",
      title: "5. 大阪・USJベイエリア（ハロウィンイベント＆グルメ）",
      target: "おすすめ：学生グループ・ファミリー・テーマパーク好き",
      desc: "秋のユニバーサル・スタジオ・ジャパン（USJ）は、年間最大級の盛り上がりを見せるハロウィンイベントを開催。パーク隣接のオフィシャルホテルに泊まれば、朝から晩まで全力で楽しめます。",
      spots: "USJ（ハロウィーン・ホラー・ナイト）、ユニバーサル・シティウォーク、海遊館、道頓堀",
      accessTime: "新大阪駅からJR京都線〜大阪環状線〜ゆめ咲線で約16分。関西空港・伊丹空港から直行バスあり。",
      stayTip: "朝一番のアトラクション入場や夜のホラーナイトを最後まで満喫するため、徒歩1〜3分圏内の駅近オフィシャルホテル宿泊が必須です。"
    }
  ];

  return (
    <div className="space-y-12 max-w-5xl mx-auto pb-16">
      {/* ヒーローセクション */}
      <div className="relative rounded-3xl overflow-hidden bg-gradient-to-r from-slate-900 via-indigo-950 to-teal-950 text-white p-8 md:p-14 shadow-xl border border-white/10">
        <div className="max-w-3xl space-y-4">
          <span className="text-[10px] md:text-xs font-black tracking-widest bg-teal-400 text-stone-950 px-3.5 py-1 rounded-full uppercase inline-block">
            SILVER WEEK SPECIAL
          </span>
          <h1 className="text-3xl md:text-5xl font-black font-journal-serif tracking-tight leading-tight text-white">
            【秋の連休】シルバーウィーク旅行・人気ホテル＆リゾート特集
          </h1>
          <p className="text-xs md:text-sm text-teal-100/90 leading-relaxed">
            爽快な秋晴れの下、家族やカップルで出かけたいシルバーウィーク。軽井沢や富士五湖の高原リゾートから、熱海温泉の美食、秋の沖縄・USJまで、満足度の高い厳選宿泊プランを徹底解説。
          </p>
        </div>
      </div>

      {/* デスティネーション別ガイド */}
      <div className="space-y-16">
        {destinations.map((dest) => {
          const sectionData = sections[dest.key];
          const hotels = sectionData?.hotels || [];

          return (
            <section
              key={dest.key}
              id={dest.key}
              className="bg-white border border-emerald-950/10 rounded-3xl p-6 md:p-10 shadow-sm space-y-8"
            >
              <div className="space-y-3 border-b border-emerald-950/10 pb-5">
                <span className="text-[10px] font-extrabold text-teal-800 bg-teal-50 border border-teal-200 px-3 py-0.5 rounded-full uppercase">
                  🎯 {dest.target}
                </span>
                <h2 className="text-2xl md:text-3xl font-black font-journal-serif text-emerald-950">
                  {dest.title}
                </h2>
                <p className="text-xs md:text-sm text-emerald-950/80 leading-relaxed font-medium">
                  {dest.desc}
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs">
                <div className="p-4 rounded-2xl bg-amber-50/50 border border-amber-200 space-y-1.5">
                  <span className="font-bold text-amber-950 block text-[11px]">📍 おすすめ観光スポット</span>
                  <p className="text-stone-700 leading-relaxed">{dest.spots}</p>
                </div>
                <div className="p-4 rounded-2xl bg-teal-50/50 border border-teal-200 space-y-1.5">
                  <span className="font-bold text-teal-950 block text-[11px]">🚅 交通アクセス目安</span>
                  <p className="text-stone-700 leading-relaxed">{dest.accessTime}</p>
                </div>
                <div className="p-4 rounded-2xl bg-indigo-50/50 border border-indigo-200 space-y-1.5">
                  <span className="font-bold text-indigo-950 block text-[11px]">💡 連休の快適ステイのコツ</span>
                  <p className="text-stone-700 leading-relaxed">{dest.stayTip}</p>
                </div>
              </div>

              {/* 🏨 厳選宿カード */}
              <div className="space-y-4 pt-4 border-t border-emerald-950/10">
                <div className="flex items-center justify-between">
                  <h3 className="text-base font-bold font-journal-serif text-emerald-950 flex items-center gap-2">
                    <span>🏨</span> <span>{dest.title}周辺のおすすめホテル・リゾート</span>
                  </h3>
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
