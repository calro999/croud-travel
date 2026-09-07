import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: '【日本百名道・絶景ドライブ】ビーナスライン・志賀草津・やまなみハイウェイを巡る高原温泉リゾート特集｜楽天ふるさと納税完全ガイド',
  description: '日本屈指の絶景ドライブルート（長野・ビーナスライン、群馬／長野・志賀草津高原ルート、大分／熊本・やまなみハイウェイ）。標高2000m超の雲上パノラマと、白樺湖・草津温泉・由布院温泉の極上リゾートステイ。楽天ふるさと納税の宿泊割引クーポンを活用した爽快ドライブ旅。',
  keywords: '日本百名道, ビーナスライン, 志賀草津高原ルート, やまなみハイウェイ, ドライブ旅行, 草津温泉ホテル櫻井, 由布院月燈庵, 楽天ふるさと納税, トラベルクーポン',
  openGraph: {
    title: '【日本百名道・絶景ドライブ】ビーナスライン・志賀草津・やまなみハイウェイを巡る高原温泉リゾート特集｜楽天ふるさと納税完全ガイド',
    description: '日本屈指の絶景ドライブルート（長野・ビーナスライン、群馬／長野・志賀草津高原ルート、大分／熊本・やまなみハイウェイ）。標高2000m超の雲上パノラマと、白樺湖・草津温泉・由布院温泉の極上リゾートステイ。楽天ふるさと納税の宿泊割引クーポンを活用した爽快ドライブ旅。',
    url: 'https://croud-travel.pages.dev/furusato-tax-scenic-drives-highland-resort-stay',
    siteName: '楽天ふるさと納税×高級トラベルガイド',
    type: 'article',
    locale: 'ja_JP',
  },
  alternates: {
    canonical: 'https://croud-travel.pages.dev/furusato-tax-scenic-drives-highland-resort-stay',
  },
};

const hotels = [
  {
    "key": "drive_venus",
    "hotelNo": 29350,
    "hotelName": "白樺リゾート　池の平ホテル",
    "hotelImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/29350/29350.jpg",
    "hotelMinCharge": 13750,
    "reviewAverage": 4.37,
    "reviewCount": 5215,
    "address": "長野県北佐久郡立科町大字芦田八ケ野1596",
    "access": "中央本線茅野駅／長野新幹線佐久平駅／中央道 諏訪ICより車で40分／諏訪南IC35分／上信越道佐久ICより車で50分",
    "userReview": "部屋と食事は満足だが一部の接客が不快部屋と食事、ホテルの接客にはとても満足しています。が、インドアパーク受付とコンドウアキ展、プリキュアの受付の接客が不快でした。こちらが何かしたわけではな…　2026-09-05 20:59:23投稿 <a href=\"https://img.travel.rakuten.co.jp/image/tr/api/kw/HTX0u/?f_hotel_no=29350\" class=\"3click\">つづきはこちら</a>",
    "label": "長野県立科町・茅野市ふるさと納税・ビーナスラインの拠点・白樺湖畔の高原スパリゾート「白樺リゾート 池の平ホテル」",
    "affiliateUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2Fspecial%2Ffurusato%2F"
  },
  {
    "key": "drive_shiga",
    "hotelNo": 56137,
    "hotelName": "草津温泉　ホテル櫻井",
    "hotelImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/56137/56137.jpg",
    "hotelMinCharge": 14300,
    "reviewAverage": 4.52,
    "reviewCount": 5001,
    "address": "群馬県吾妻郡草津町大字草津465-4",
    "access": "ＪＲ吾妻線長野原草津口駅からバスで約28分／関越道渋川伊香保ＩＣ又は上信越道碓井軽井沢IC経由／ＪＲ高速バスゆめぐり号",
    "userReview": "ファミリー向けバイキングバイキングを楽しみにして行きました。もっと肉肉なのかなーと思ってましたが、そんなに肉の種類が多いとは感じませんでした。ステーキはとてもおいしかったです。それ以外も全世代が満…　2026-09-05 08:43:15投稿 <a href=\"https://img.travel.rakuten.co.jp/image/tr/api/kw/HTX0u/?f_hotel_no=56137\" class=\"3click\">つづきはこちら</a>",
    "label": "群馬県草津町ふるさと納税・標高2172m日本国道最高地点・志賀草津高原ルート「草津温泉 ホテル櫻井」",
    "affiliateUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2Fspecial%2Ffurusato%2F"
  },
  {
    "key": "drive_yamanami",
    "hotelNo": 54519,
    "hotelName": "由布院温泉　ゆふいん月燈庵",
    "hotelImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/54519/54519.jpg",
    "hotelMinCharge": 17000,
    "reviewAverage": 3.88,
    "reviewCount": 171,
    "address": "大分県由布市湯布院町川上295-2",
    "access": "湯布院ICより車で１５分。由布院駅より車で７分。大分自動車道～湯布院ICを出て2つ目の信号を右折。50号線に乗り約4分。",
    "userReview": "絶景のロケーションと心温まるおもてなし、旬の美食に大変満足いたしました。",
    "label": "大分県由布市・竹田市ふるさと納税・阿蘇くじゅう連山を望む九州屈指のスカイライン「やまなみハイウェイ」ゆふいん月燈庵",
    "affiliateUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2Fspecial%2Ffurusato%2F"
  }
];

export default function FurusatoRound55Page() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-800">
      {/* Hero Header */}
      <header className="relative bg-gradient-to-r from-teal-950 via-emerald-950 to-slate-900 text-white py-20 px-4 sm:px-6 lg:px-8 shadow-2xl">
        <div className="max-w-5xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-teal-500/20 border border-teal-400/40 px-4 py-1.5 rounded-full text-teal-300 text-sm font-semibold mb-6">
            <span>✨</span>
            <span>日本百名道・絶景高原ドライブステイ特集</span>
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight mb-6 leading-tight">
            日本百名道の絶景ドライブルートと高原・海沿いリゾートステイ
          </h1>
          <p className="text-lg sm:text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed mb-8">
            四季折々の美しい稜線、澄み切った高原の風、そしてどこまでも続くワインディングロード。「日本百名道」に選ばれるビーナスライン、志賀草津高原ルート、やまなみハイウェイは、車やバイクを走らせるだけで心が解き放たれる極上のステージです。走破した後は、名湯に浸かり、地元の山の幸やテロワール料理に舌鼓を打つ至福の夜。楽天ふるさと納税の宿泊割引クーポンを活用して、実質2,000円の自己負担で叶える絶景ドライブ＆高原温泉リゾートへ出かけましょう。
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2Fspecial%2Ffurusato%2F"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-600 hover:to-orange-700 text-white font-bold px-8 py-4 rounded-xl shadow-lg transform hover:-translate-y-0.5 transition duration-200"
            >
              <span>♨️</span>
              <span>楽天ふるさと納税で対象クーポンを探す</span>
            </a>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Intro Box */}
        <section className="bg-white rounded-2xl p-6 sm:p-8 shadow-md border border-slate-100 mb-12">
          <h2 className="text-2xl font-bold text-slate-900 mb-4 flex items-center gap-3">
            <span className="text-teal-600">🌿</span>
            <span>なぜ今、ふるさと納税で巡る日本の街道・水辺・巡礼旅なのか？</span>
          </h2>
          <p className="text-slate-700 leading-relaxed mb-4">
            全国各地の自治体が発行する「楽天トラベルクーポン返礼品」は、寄付額の最大30%相当が旅行代金から割引される極めて還元率の高い返礼品です。翌年の住民税・所得税の控除対象となるため、実質2,000円の自己負担で憧れの高級リゾートや歴史ある老舗宿に宿泊することができます。
          </p>
          <p className="text-slate-700 leading-relaxed">
            寄付後即座にマイクーポンへ付与され、予約時に1クリックで適用可能。本特集で厳選した名宿はいずれも各エリア屈指の自然美・歴史的風土とおもてなしを誇り、五感を解き放つ特別な休日を約束してくれます。
          </p>
        </section>

        {/* Hotel Cards */}
        <div className="space-y-12 mb-16">
          {hotels.map((h, idx) => (
            <article key={h.key} className="bg-white rounded-3xl overflow-hidden shadow-xl border border-slate-100 transition-all hover:shadow-2xl">
              <div className="grid grid-cols-1 md:grid-cols-12 gap-0">
                <div className="md:col-span-5 relative min-h-[280px] md:min-h-full">
                  <Image
                    src={h.hotelImageUrl}
                    alt={h.hotelName}
                    fill
                    sizes="(max-width: 768px) 100vw, 40vw"
                    className="object-cover"
                    unoptimized
                  />
                  <div className="absolute top-4 left-4 bg-teal-950/80 backdrop-blur-md text-teal-300 font-bold px-3 py-1 rounded-lg text-sm border border-teal-500/30">
                    STAGE 0{idx + 1}
                  </div>
                </div>
                <div className="md:col-span-7 p-6 sm:p-8 flex flex-col justify-between">
                  <div>
                    <div className="text-xs font-bold text-teal-700 mb-1 tracking-wider uppercase">
                      {h.label}
                    </div>
                    <h3 className="text-2xl font-black text-slate-900 mb-3 hover:text-teal-700 transition">
                      <a href={h.affiliateUrl} target="_blank" rel="noopener noreferrer">
                        {h.hotelName}
                      </a>
                    </h3>
                    <div className="flex items-center gap-3 mb-4 text-sm text-slate-600">
                      <span className="flex items-center text-amber-500 font-bold">
                        ★ {h.reviewAverage.toFixed(1)}
                      </span>
                      <span className="text-slate-400">({h.reviewCount}件の評価)</span>
                      <span className="text-teal-700 font-semibold">・ 参考目安: ¥{h.hotelMinCharge.toLocaleString()}〜</span>
                    </div>
                    <p className="text-slate-600 text-sm mb-4 leading-relaxed bg-slate-50 p-4 rounded-xl border border-slate-100 italic">
                      「{h.userReview}」
                    </p>
                    <div className="text-xs text-slate-500 space-y-1 mb-6">
                      <p>📍 所在地: {h.address}</p>
                      <p>🚗 アクセス: {h.access}</p>
                    </div>
                  </div>
                  <div className="pt-4 border-t border-slate-100 flex flex-col sm:flex-row gap-3">
                    <a
                      href={h.affiliateUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 text-center bg-gradient-to-r from-teal-600 to-emerald-700 hover:from-teal-700 hover:to-emerald-800 text-white font-bold py-3 px-6 rounded-xl shadow-md transition duration-150 text-sm"
                    >
                      楽天ふるさと納税で宿を予約する
                    </a>
                    <a
                      href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2Fspecial%2Ffurusato%2F"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 text-center bg-amber-500 hover:bg-amber-600 text-white font-bold py-3 px-6 rounded-xl shadow-md transition duration-150 text-sm"
                    >
                      自治体返礼品クーポン一覧
                    </a>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Step Guide */}
        <section className="bg-gradient-to-br from-slate-900 to-teal-950 text-white rounded-3xl p-8 shadow-xl mb-12">
          <h2 className="text-2xl font-bold mb-6 text-center text-teal-300">
            楽天ふるさと納税トラベルクーポンの簡単3ステップ
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white/10 rounded-2xl p-6 border border-white/10">
              <div className="text-3xl font-black text-amber-400 mb-2">01</div>
              <h3 className="font-bold text-lg mb-2">自治体に寄付</h3>
              <p className="text-sm text-slate-300">
                希望する宿がある自治体を選び、楽天ふるさと納税で寄付を実行します。楽天ポイントも通常通り貯まります。
              </p>
            </div>
            <div className="bg-white/10 rounded-2xl p-6 border border-white/10">
              <div className="text-3xl font-black text-amber-400 mb-2">02</div>
              <h3 className="font-bold text-lg mb-2">クーポン自動付与</h3>
              <p className="text-sm text-slate-300">
                寄付完了後、数日以内にお客様の楽天アカウント（マイクーポン）へ宿泊割引クーポンが自動的に付与されます。
              </p>
            </div>
            <div className="bg-white/10 rounded-2xl p-6 border border-white/10">
              <div className="text-3xl font-black text-amber-400 mb-2">03</div>
              <h3 className="font-bold text-lg mb-2">楽天トラベルで予約</h3>
              <p className="text-sm text-slate-300">
                対象の宿泊施設を予約する際、支払い画面でクーポンを選択するだけで最大30%割引が即時適用されます。
              </p>
            </div>
          </div>
          <div className="mt-8 text-center">
            <a
              href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2Fspecial%2Ffurusato%2F"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-amber-500 to-orange-600 text-white font-extrabold px-8 py-4 rounded-xl shadow-lg hover:brightness-110 transition"
            >
              今すぐ使える自治体クーポンを探す
            </a>
          </div>
        </section>

        {/* Cross Interlinks */}
        <section className="bg-white rounded-2xl p-6 sm:p-8 shadow-md border border-slate-100">
          <h2 className="text-xl font-bold text-slate-900 mb-4">あわせて読みたい極上ふるさと納税旅特集</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <Link
              href="/furusato-tax-three-great-caves-underground-stay"
              className="block p-4 rounded-xl bg-slate-50 hover:bg-teal-50 border border-slate-200 transition"
            >
              <span className="text-xs font-bold text-teal-700 block mb-1">三大鍾乳洞地底美</span>
              <span className="font-semibold text-slate-900 text-sm">【日本三大鍾乳洞】龍泉洞・秋芳洞・龍河洞ステイ特集</span>
            </Link>
            <Link
              href="/furusato-tax-three-great-pine-groves-oceanview-stay"
              className="block p-4 rounded-xl bg-slate-50 hover:bg-teal-50 border border-slate-200 transition"
            >
              <span className="text-xs font-bold text-teal-700 block mb-1">三大松原オーシャンビュー</span>
              <span className="font-semibold text-slate-900 text-sm">【日本三大松原】三保・虹の松原・気比の松原特集</span>
            </Link>
            <Link
              href="/furusato-tax-three-great-mountain-castles-history-stay"
              className="block p-4 rounded-xl bg-slate-50 hover:bg-teal-50 border border-slate-200 transition"
            >
              <span className="text-xs font-bold text-teal-700 block mb-1">天空の山城雲海</span>
              <span className="font-semibold text-slate-900 text-sm">【日本三大山城】竹田城・備中松山城・岩村城特集</span>
            </Link>
            <Link
              href="/furusato-tax-three-great-train-views-scenic-stay"
              className="block p-4 rounded-xl bg-slate-50 hover:bg-teal-50 border border-slate-200 transition"
            >
              <span className="text-xs font-bold text-teal-700 block mb-1">三大車窓パノラマ</span>
              <span className="font-semibold text-slate-900 text-sm">【日本三大車窓】姨捨・肥薩線・狩勝峠鉄道旅特集</span>
            </Link>
          </div>
        </section>
      </main>
    </div>
  );
}
