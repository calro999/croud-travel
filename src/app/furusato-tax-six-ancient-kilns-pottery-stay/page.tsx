import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: '【日本六古窯】備前・信楽・丹波立杭を巡る千年の土と炎の陶芸美・名料亭旅館ステイ特集｜楽天ふるさと納税トラベルクーポン完全活用',
  description: '中世から現在まで窯の火が途絶えることなく続く日本屈指のやきものの里「日本六古窯」（岡山・備前焼、滋賀・信楽焼、兵庫・丹波焼）。登り窯のぬくもりと作家の器で味わう極上会席料理。楽天ふるさと納税の宿泊割引クーポンを活用して、日本の伝統工芸を味わい尽くす旅へ。',
  keywords: '日本六古窯, 備前焼, 信楽焼, 丹波立杭焼, 丹波篠山近又, ホテルレイクヴィラ, 備前ホテル陶, 陶芸温泉宿, 楽天ふるさと納税',
  openGraph: {
    title: '【日本六古窯】備前・信楽・丹波立杭を巡る千年の土と炎の陶芸美・名料亭旅館ステイ特集｜楽天ふるさと納税トラベルクーポン完全活用',
    description: '中世から現在まで窯の火が途絶えることなく続く日本屈指のやきものの里「日本六古窯」（岡山・備前焼、滋賀・信楽焼、兵庫・丹波焼）。登り窯のぬくもりと作家の器で味わう極上会席料理。楽天ふるさと納税の宿泊割引クーポンを活用して、日本の伝統工芸を味わい尽くす旅へ。',
    url: 'https://croud-travel.pages.dev/furusato-tax-six-ancient-kilns-pottery-stay',
    siteName: '楽天ふるさと納税×高級トラベルガイド',
    type: 'article',
    locale: 'ja_JP',
  },
  alternates: {
    canonical: 'https://croud-travel.pages.dev/furusato-tax-six-ancient-kilns-pottery-stay',
  },
};

const hotels = [
  {
    "key": "kiln_bizen",
    "hotelNo": 188209,
    "hotelName": "備前ホテル陶",
    "hotelImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/188209/188209.jpg",
    "hotelMinCharge": 6270,
    "reviewAverage": 3.5,
    "reviewCount": 5,
    "address": "岡山県備前市伊部1774-1",
    "access": "ＪＲ 赤穂線　伊部駅 から徒歩約５分、ＪＲ 岡山駅から車で約５０分",
    "userReview": "絶景のロケーションと心温まるおもてなし、旬の美食に大変満足いたしました。",
    "label": "岡山県備前市・瀬戸内市ふるさと納税・千年の土と炎の芸術「日本六古窯・備前焼」の里と瀬戸内オーシャンビュー「ホテルリマーニ」",
    "affiliateUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2Fspecial%2Ffurusato%2F"
  },
  {
    "key": "kiln_shigaraki",
    "hotelNo": 31159,
    "hotelName": "ホテル　レイクヴィラ",
    "hotelImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/31159/31159.jpg",
    "hotelMinCharge": 21450,
    "reviewAverage": 4.45,
    "reviewCount": 333,
    "address": "滋賀県甲賀市信楽町多羅尾1",
    "access": "ＪＲ伊賀上野駅から送迎有り（要事前予約3日前迄11:00～17：00  20分/新名神信楽ICより35分",
    "userReview": "もう20年近く毎年夏にロッジを利用しているが、室内は清潔で手入れが行き届いており、係りの皆さんのホスピタリティにも満足している。温泉、食事とも素晴らしく私はイチオシにしたい宿だと思っている。…　2026-08-31 15:33:39投稿 <a href=\"https://img.travel.rakuten.co.jp/image/tr/api/kw/HTX0u/?f_hotel_no=31159\" class=\"3click\">つづきはこちら</a>",
    "label": "滋賀県甲賀市ふるさと納税・登り窯のぬくもりとタヌキのふるさと「信楽焼」信楽温泉ホテルレイクヴィラ",
    "affiliateUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2Fspecial%2Ffurusato%2F"
  },
  {
    "key": "kiln_tanba",
    "hotelNo": 8534,
    "hotelName": "丹波篠山　近又",
    "hotelImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/8534/8534.jpg",
    "hotelMinCharge": 29000,
    "reviewAverage": 4.42,
    "reviewCount": 88,
    "address": "兵庫県丹波篠山市二階町81",
    "access": "舞鶴若狭自動車道「丹南篠山口I.C」より3km/JR福知山線「篠山口」駅よりバス約15分",
    "userReview": "篠山の由緒ある旅館400年の老舗旅館。篠山城に近く一番にぎやかな通りに位置しており、歴史ある街歩きを楽しめました。夕食のボタン鍋はしっ地元のお野菜たくさんで、しっかり味噌味でしたが胃にももたれずと…　2026-06-12 21:25:02投稿 <a href=\"https://img.travel.rakuten.co.jp/image/tr/api/kw/HTX0u/?f_hotel_no=8534\" class=\"3click\">つづきはこちら</a>",
    "label": "兵庫県丹波篠山市ふるさと納税・平安末期から続く丹波焼（立杭焼）の里と丹波篠山ぼたん鍋「料理旅館 近又」",
    "affiliateUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2Fspecial%2Ffurusato%2F"
  }
];

export default function FurusatoRound56Page() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-800">
      {/* Hero Header */}
      <header className="relative bg-gradient-to-r from-stone-950 via-emerald-950 to-teal-950 text-white py-20 px-4 sm:px-6 lg:px-8 shadow-2xl">
        <div className="max-w-5xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-emerald-500/20 border border-emerald-400/40 px-4 py-1.5 rounded-full text-emerald-300 text-sm font-semibold mb-6">
            <span>✨</span>
            <span>日本六古窯・陶芸美食ステイ特集</span>
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight mb-6 leading-tight">
            日本六古窯の里を巡る陶芸美と作家の器で味わう名旅館ステイ
          </h1>
          <p className="text-lg sm:text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed mb-8">
            日本古来の陶磁器文化を今に伝える「日本六古窯」。釉薬を使わず土と炎の力だけで焼き締める素朴で力強い「備前焼」、温かみのある緋色とタヌキの置物で知られる「信楽焼」、八百余年の歴史と灰釉の美しさを誇る「丹波焼（立杭焼）」。陶芸作家の器に美しく盛り付けられた旬の美食をいただき、登り窯の煙がたなびく里山温泉宿で過ごすひととき。楽天ふるさと納税の宿泊クーポンを活用して、日本のものづくり文化に浸る贅沢な旅をお楽しみください。
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
            <span className="text-emerald-600">🌿</span>
            <span>なぜ今、ふるさと納税で巡る日本の伝統美・名水旅なのか？</span>
          </h2>
          <p className="text-slate-700 leading-relaxed mb-4">
            全国各地の自治体が発行する「楽天トラベルクーポン返礼品」は、寄付額の最大30%相当が旅行代金から割引される極めて還元率の高い返礼品です。翌年の住民税・所得税の控除対象となるため、実質2,000円の自己負担で憧れの伝統建築ホテルや名工の器を味わう名旅館に宿泊することができます。
          </p>
          <p className="text-slate-700 leading-relaxed">
            寄付後即座にマイクーポンへ付与され、予約時に1クリックで適用可能。本特集で厳選した名宿はいずれも各地域の歴史遺産・自然美とおもてなしを極めた名所ばかりであり、五感を解き放つ特別な休日を約束してくれます。
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
                  <div className="absolute top-4 left-4 bg-emerald-950/80 backdrop-blur-md text-emerald-300 font-bold px-3 py-1 rounded-lg text-sm border border-emerald-500/30">
                    STAGE 0{idx + 1}
                  </div>
                </div>
                <div className="md:col-span-7 p-6 sm:p-8 flex flex-col justify-between">
                  <div>
                    <div className="text-xs font-bold text-emerald-700 mb-1 tracking-wider uppercase">
                      {h.label}
                    </div>
                    <h3 className="text-2xl font-black text-slate-900 mb-3 hover:text-emerald-700 transition">
                      <a href={h.affiliateUrl} target="_blank" rel="noopener noreferrer">
                        {h.hotelName}
                      </a>
                    </h3>
                    <div className="flex items-center gap-3 mb-4 text-sm text-slate-600">
                      <span className="flex items-center text-amber-500 font-bold">
                        ★ {h.reviewAverage.toFixed(1)}
                      </span>
                      <span className="text-slate-400">({h.reviewCount}件の評価)</span>
                      <span className="text-emerald-700 font-semibold">・ 参考目安: ¥{h.hotelMinCharge.toLocaleString()}〜</span>
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
                      className="flex-1 text-center bg-gradient-to-r from-emerald-600 to-teal-700 hover:from-emerald-700 hover:to-teal-800 text-white font-bold py-3 px-6 rounded-xl shadow-md transition duration-150 text-sm"
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
        <section className="bg-gradient-to-br from-slate-900 to-emerald-950 text-white rounded-3xl p-8 shadow-xl mb-12">
          <h2 className="text-2xl font-bold mb-6 text-center text-emerald-300">
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
              href="/furusato-tax-scenic-drives-highland-resort-stay"
              className="block p-4 rounded-xl bg-slate-50 hover:bg-emerald-50 border border-slate-200 transition"
            >
              <span className="text-xs font-bold text-emerald-700 block mb-1">日本百名道ドライブ</span>
              <span className="font-semibold text-slate-900 text-sm">【日本百名道】ビーナスライン・志賀草津・やまなみハイウェイ特集</span>
            </Link>
            <Link
              href="/furusato-tax-three-great-bridges-heritage-stay"
              className="block p-4 rounded-xl bg-slate-50 hover:bg-emerald-50 border border-slate-200 transition"
            >
              <span className="text-xs font-bold text-emerald-700 block mb-1">三大名橋歴史美</span>
              <span className="font-semibold text-slate-900 text-sm">【日本三大名橋】日本橋・錦帯橋・長崎眼鏡橋ステイ特集</span>
            </Link>
            <Link
              href="/furusato-tax-three-great-water-towns-canal-stay"
              className="block p-4 rounded-xl bg-slate-50 hover:bg-emerald-50 border border-slate-200 transition"
            >
              <span className="text-xs font-bold text-emerald-700 block mb-1">三大水郷舟運川下り</span>
              <span className="font-semibold text-slate-900 text-sm">【日本三大水郷】近江八幡・柳川・潮来の水辺名湯特集</span>
            </Link>
            <Link
              href="/furusato-tax-kumano-kodo-world-heritage-stay"
              className="block p-4 rounded-xl bg-slate-50 hover:bg-emerald-50 border border-slate-200 transition"
            >
              <span className="text-xs font-bold text-emerald-700 block mb-1">世界遺産熊野古道</span>
              <span className="font-semibold text-slate-900 text-sm">【熊野古道】祈りの巡礼路と湯の峰・那智勝浦・白浜特集</span>
            </Link>
          </div>
        </section>
      </main>
    </div>
  );
}
