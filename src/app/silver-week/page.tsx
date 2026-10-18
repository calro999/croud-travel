import HubRelatedPosts from "@/app/components/HubRelatedPosts";
import { Metadata } from "next";
import Link from "next/link";
import fs from "fs";
import path from "path";

export const metadata: Metadata = {
  alternates: { canonical: "https://croud-travel.pages.dev/silver-week/" },
  title: "秋の連休：シルバーウィーク旅行・おすすめ人気ホテル＆リゾート",
  description: "秋の大型連休・シルバーウィーク旅行特集！軽井沢高原リゾート、富士山＆河口湖、熱海温泉、沖縄混雑回避ステイ、USJ秋イベントなど、家族旅行やカップル旅行にぴったりの厳選ホテル＆温泉宿を完全ガイド。",
  keywords: ["秋の連休", "シルバーウィーク旅行", "おすすめ人気ホテル", "リゾート", "温泉宿", "宿泊予約", "楽天トラベル"],
  openGraph: {
    title: "秋の連休：シルバーウィーク旅行・おすすめ人気ホテル＆リゾート",
    description: "秋の大型連休・シルバーウィーク旅行特集！軽井沢高原リゾート、富士山＆河口湖、熱海温泉、沖縄混雑回避ステイ、USJ秋イベントなど、家族旅行やカップル旅行にぴったりの厳選ホテル＆温泉宿を完全ガイド。",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "秋の連休：シルバーウィーク旅行・おすすめ人気ホテル＆リゾート",
    description: "秋の大型連休・シルバーウィーク旅行特集！軽井沢高原リゾート、富士山＆河口湖、熱海温泉、沖縄混雑回避ステイ、USJ秋イベントなど、家族旅行やカップル旅行にぴったりの厳選ホテル＆温泉宿を完全ガイド。",
  }
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


  const jsonLdArticle = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "【秋の連休】シルバーウィーク旅行・おすすめ人気ホテル＆リゾート ｜ 日本全国・旅宿クラウド",
    "description": "秋の大型連休・シルバーウィーク旅行特集！軽井沢高原リゾート、富士山＆河口湖、熱海温泉、沖縄混雑回避ステイ、USJ秋イベントなど、家族旅行やカップル旅行にぴったりの厳選ホテル＆温泉宿を完全ガイド。",
    "url": "https://croud-travel.pages.dev/silver-week/",
    "publisher": {
      "@type": "Organization",
      "name": "日本全国・旅宿クラウド",
      "logo": { "@type": "ImageObject", "url": "https://croud-travel.pages.dev/icon.png" }
    }
  };
  const jsonLdBreadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "ホーム", "item": "https://croud-travel.pages.dev" },
      { "@type": "ListItem", "position": 2, "name": "【秋の連休】シルバーウィーク旅行・おすすめ人気ホテル＆リゾート ｜ 日本全国・旅宿クラウド", "item": "https://croud-travel.pages.dev/silver-week/" }
    ]
  };

  return (
    <div className="space-y-12 max-w-5xl mx-auto pb-16">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdArticle) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdBreadcrumb) }} />
      {/* ヒーローセクション */}
      <div className="relative rounded-3xl overflow-hidden bg-gradient-to-r from-slate-900 via-indigo-950 to-teal-950 text-white p-8 md:p-14 shadow-xl border border-white/10">
        <div className="max-w-3xl space-y-4">
          <span className="text-[10px] md:text-xs font-black tracking-widest bg-teal-400 text-stone-950 px-3.5 py-1 rounded-full uppercase inline-block">
            SILVER WEEK SPECIAL
          </span>
          <h1 className="text-3xl md:text-5xl font-black font-journal-serif tracking-tight leading-tight text-white">「秋の連休」シルバーウィーク旅行・人気ホテル＆リゾート特集</h1>
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
                          rel="sponsored noopener noreferrer"
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
    
      
        <section data-enriched-rakuten-wiki="true" className="bg-white rounded-2xl p-6 md:p-10 shadow-sm border border-stone-200 space-y-6 my-10 max-w-5xl mx-auto">
          <h2 className="text-xl md:text-2xl font-bold text-stone-900">📊 秋の連休：シルバーウィーク旅行・おすすめ人気ホテル＆リゾート：楽天トラベル高評価宿スペック比較表＆クチコミ徹底解説</h2>
          <p className="text-xs md:text-sm text-stone-600 leading-relaxed">
            楽天トラベル公式APIから取得した全国の高評価宿データ（所在地・最寄り駅・駐車場・総合評価・参考最安料金）と実際の宿泊者レビューを整理しました。ふるさと納税の旅行クーポンや早期割引プランと併用することで、ワンランク上の滞在をお得に実現できます。
          </p>
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs border-collapse bg-white rounded-xl overflow-hidden border border-stone-200">
              <thead>
                <tr className="bg-stone-900 text-white font-bold">
                  <th className="p-3">宿名</th><th className="p-3">所在地</th><th className="p-3">アクセス</th><th className="p-3">駐車場</th><th className="p-3">評価</th><th className="p-3">最安目安</th><th className="p-3">予約</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-stone-200">
              <tr className="hover:bg-amber-50/40 transition">
                <td className="p-3 font-bold text-stone-900">1. ＡＮＡクラウンプラザホテルグランコート名古屋　ｂｙ　ＩＨＧ</td>
                <td className="p-3 text-stone-600">愛知県名古屋市中区金山町1-1-1</td>
                <td className="p-3 text-stone-600">金山（愛知）</td>
                <td className="p-3 text-stone-600">有り(車高2.1Ｍ以下) 1泊 2,500円 入庫から24時間</td>
                <td className="p-3 font-bold text-amber-600">★4.46（4555件）</td>
                <td className="p-3 font-bold text-rose-600">¥8,730〜</td>
                <td className="p-3"><a href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F1659%2F1659.html" target="_blank" rel="sponsored noopener noreferrer" className="text-teal-700 font-bold underline">プラン確認</a></td>
              </tr>
              <tr className="hover:bg-amber-50/40 transition">
                <td className="p-3 font-bold text-stone-900">2. 富士屋ホテル</td>
                <td className="p-3 text-stone-600">神奈川県足柄下郡箱根町宮ノ下359</td>
                <td className="p-3 text-stone-600">宮ノ下</td>
                <td className="p-3 text-stone-600">有り(無料)</td>
                <td className="p-3 font-bold text-amber-600">★4.78（2257件）</td>
                <td className="p-3 font-bold text-rose-600">¥22,220〜</td>
                <td className="p-3"><a href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F1727%2F1727.html" target="_blank" rel="sponsored noopener noreferrer" className="text-teal-700 font-bold underline">プラン確認</a></td>
              </tr>
              <tr className="hover:bg-amber-50/40 transition">
                <td className="p-3 font-bold text-stone-900">3. 富士ビューホテル</td>
                <td className="p-3 text-stone-600">山梨県南都留郡富士河口湖町勝山511</td>
                <td className="p-3 text-stone-600">河口湖</td>
                <td className="p-3 text-stone-600">有り ８０台 無料</td>
                <td className="p-3 font-bold text-amber-600">★4.56（560件）</td>
                <td className="p-3 font-bold text-rose-600">¥29,600〜</td>
                <td className="p-3"><a href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F1730%2F1730.html" target="_blank" rel="sponsored noopener noreferrer" className="text-teal-700 font-bold underline">プラン確認</a></td>
              </tr>
              <tr className="hover:bg-amber-50/40 transition">
                <td className="p-3 font-bold text-stone-900">4. 運河の宿　おたる　ふる川</td>
                <td className="p-3 text-stone-600">北海道小樽市色内1-2-15</td>
                <td className="p-3 text-stone-600"></td>
                <td className="p-3 text-stone-600">有り</td>
                <td className="p-3 font-bold text-amber-600">★4.76（1104件）</td>
                <td className="p-3 font-bold text-rose-600">¥11,500〜</td>
                <td className="p-3"><a href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F1734%2F1734.html" target="_blank" rel="sponsored noopener noreferrer" className="text-teal-700 font-bold underline">プラン確認</a></td>
              </tr>
              <tr className="hover:bg-amber-50/40 transition">
                <td className="p-3 font-bold text-stone-900">5. ホテル日航ハウステンボス</td>
                <td className="p-3 text-stone-600">長崎県佐世保市ハウステンボス町6番地</td>
                <td className="p-3 text-stone-600">ハウステンボス</td>
                <td className="p-3 text-stone-600">ホテル敷地内駐車場は有料となります。（1泊1台あたり1,000円）</td>
                <td className="p-3 font-bold text-amber-600">★4.43（2998件）</td>
                <td className="p-3 font-bold text-rose-600">¥4,500〜</td>
                <td className="p-3"><a href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F1793%2F1793.html" target="_blank" rel="sponsored noopener noreferrer" className="text-teal-700 font-bold underline">プラン確認</a></td>
              </tr>
              </tbody>
            </table>
          </div>
          <div className="space-y-3">
            <h3 className="text-base font-bold text-stone-900">🏨 注目宿のクチコミ・アクセス詳細</h3>
            <div className="bg-stone-50 rounded-2xl p-5 border border-stone-200 space-y-2 text-xs text-stone-700 leading-relaxed">
              <h4 className="text-sm font-bold text-stone-900">1. ＡＮＡクラウンプラザホテルグランコート名古屋　ｂｙ　ＩＨＧ（愛知県・★4.46）</h4>
              <p><strong>【特徴】</strong>「金山総合駅」から雨にぬれない徒歩1分。名古屋国際会議場まで車で5分。全客室無料Wi-Fi完備。</p>
              <p><strong>【交通・駐車場】</strong>名古屋駅から電車で3分「金山総合駅」下車。南口より徒歩1分。中部国際空港からは名鉄快速特急ミュースカイで最速２３分。 ／ 駐車場：有り(車高2.1Ｍ以下) 1泊 2,500円 入庫から24時間</p>
              <p className="italic text-stone-600">💬 宿泊者レビュー：「高層階の夜景と名古屋めし、立地も最高高層階の部屋でとても夜景が綺麗でした。30階のラウンジでウェルカムドリンクもいただけてとてもびっくりしましたが美味しかったです。朝食ビュッフェも名古屋め…　2026-08-20 07:26:47投稿 &lt;a href=&quot;https://img.travel.rakuten.co.jp/image/tr/api/kw/HTX0u/?f_hotel_no=1659&quot;」</p>
            </div>
            <div className="bg-stone-50 rounded-2xl p-5 border border-stone-200 space-y-2 text-xs text-stone-700 leading-relaxed">
              <h4 className="text-sm font-bold text-stone-900">2. 富士屋ホテル（神奈川県・★4.78）</h4>
              <p><strong>【特徴】</strong>◇おかげさまで創業148周年◇明治11年創業の箱根のクラシックホテル</p>
              <p><strong>【交通・駐車場】</strong>箱根登山鉄道「宮ノ下駅」より 徒歩７分 / 小田原厚木道路「箱根口IC」より国道1号線経由20分 （11㎞） ／ 駐車場：有り(無料)</p>
              <p className="italic text-stone-600">💬 宿泊者レビュー：「憧れのホテルで過ごす快適な箱根旅憧れのホテルに宿泊できて嬉しいです。交通手段は箱根登山鉄道の宮ノ下駅や、箱根登山バスのホテル前が最寄りです。荷物を預かっていただき、日中は箱根湯本を…　2026-08-29 10:49:56投稿 &lt;a href=&quot;https://img.travel.rakuten.co.jp/image/tr/api/kw/HTX0u/?f_hotel_no=1727&quot; clas」</p>
            </div>
            <div className="bg-stone-50 rounded-2xl p-5 border border-stone-200 space-y-2 text-xs text-stone-700 leading-relaxed">
              <h4 className="text-sm font-bold text-stone-900">3. 富士ビューホテル（山梨県・★4.56）</h4>
              <p><strong>【特徴】</strong>富士屋ホテルチェーン.眼前に広がる富士山の景観、三万坪の庭園が自慢のリゾートホテル</p>
              <p><strong>【交通・駐車場】</strong>河口湖駅よりタクシーで10分 ／ 駐車場：有り ８０台 無料</p>
              <p className="italic text-stone-600">💬 宿泊者レビュー：「」</p>
            </div>
            <div className="bg-stone-50 rounded-2xl p-5 border border-stone-200 space-y-2 text-xs text-stone-700 leading-relaxed">
              <h4 className="text-sm font-bold text-stone-900">4. 運河の宿　おたる　ふる川（北海道・★4.76）</h4>
              <p><strong>【特徴】</strong>天然温泉『小樽運河前の温泉宿』　明治時代の商家を再現。おもてなし溢れる空間で寛ぎの一日を。</p>
              <p><strong>【交通・駐車場】</strong> ／ 駐車場：有り</p>
              <p className="italic text-stone-600">💬 宿泊者レビュー：「毎年恒例の宿、朝食時間の配慮に感謝毎年北海道旅行の最終日に宿泊する宿です。去年から部屋をグレードアップし満足度がよりあがりました。今年は午前中の飛行機を予約したのでチェックアウトが速くなったのが残…　2026-09-04 20:54:27投稿 &lt;a href=&quot;https://img.travel.rakuten.co.jp/image/tr/api/kw/HTX0u/?f_hotel_no=17」</p>
            </div>
            <div className="bg-stone-50 rounded-2xl p-5 border border-stone-200 space-y-2 text-xs text-stone-700 leading-relaxed">
              <h4 className="text-sm font-bold text-stone-900">5. ホテル日航ハウステンボス（長崎県・★4.43）</h4>
              <p><strong>【特徴】</strong>ハウステンボスまでは徒歩３分♪花と緑に囲まれたリゾートホテル</p>
              <p><strong>【交通・駐車場】</strong>●ＪＲハウステンボス駅から徒歩で10分●長崎市内から車で９０分●佐世保駅より車で30分 ／ 駐車場：ホテル敷地内駐車場は有料となります。（1泊1台あたり1,000円）</p>
              <p className="italic text-stone-600">💬 宿泊者レビュー：「清潔な部屋とハウステンボス直結の利便性お部屋はコンパクトでしたが、清潔で気持ちよく滞在できました。ハウステンボスの専用出入り口がとても便利。お風呂も朝食も満足しています!クチコミの詳細はこ…　2026-08-21 21:13:00投稿 &lt;a href=&quot;https://img.travel.rakuten.co.jp/image/tr/api/kw/HTX0u/?f_hotel_no=1793&quot;」</p>
            </div>
          </div>
          <div className="space-y-3 pt-4 border-t border-stone-200">
            <h3 className="text-base font-bold text-stone-900">🗺️ 合わせて訪れたい日本の代表的観光名所ガイド</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-stone-50 p-4 rounded-xl border border-stone-200 space-y-1">
              <h4 className="text-sm font-bold text-stone-900">📍 清水寺</h4>
              <p className="text-xs text-stone-600 leading-relaxed">「清水の舞台」で世界的に有名な古都京都の象徴。「清水の舞台から飛び下りる」の語源となった木造大舞台からの京都市街の眺望と音羽の滝が名高いです。</p>
            </div>
            <div className="bg-stone-50 p-4 rounded-xl border border-stone-200 space-y-1">
              <h4 className="text-sm font-bold text-stone-900">📍 函館山（夜景）</h4>
              <p className="text-xs text-stone-600 leading-relaxed">世界三大夜景の一つに数えられる絶景スポット。津軽海峡と函館湾に挟まれたくびれが生み出す、宝石をちりばめたような眩い夜景は一生に一度は見たい感動のロケーションです。</p>
            </div>
            <div className="bg-stone-50 p-4 rounded-xl border border-stone-200 space-y-1">
              <h4 className="text-sm font-bold text-stone-900">📍 横浜みなとみらい21</h4>
              <p className="text-xs text-stone-600 leading-relaxed">ランドマークタワーや大観覧車「コスモクロック21」、赤レンガ倉庫が立ち並ぶ近代都市リゾート。港町の海風を感じながらショッピングや夜景を楽しめます。</p>
            </div>
            <div className="bg-stone-50 p-4 rounded-xl border border-stone-200 space-y-1">
              <h4 className="text-sm font-bold text-stone-900">📍 国宝 姫路城（白鷺城）</h4>
              <p className="text-xs text-stone-600 leading-relaxed">鮮やかな白漆喰の城壁が羽ばたく白鷺のように美しい日本初のユネスコ世界文化遺産。大天守をはじめ保存状態が完璧な城郭建築の最高峰です。</p>
            </div>
            </div>
          </div>
        </section>

<HubRelatedPosts currentSlug="silver-week" />
</div>
  );
}
