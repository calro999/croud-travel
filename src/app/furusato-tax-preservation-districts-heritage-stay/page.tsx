import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: '【重要伝統的建造物群保存地区】倉敷美観地区・萩城下町・橿原今井町の歴史町家・古民家宿特集｜楽天ふるさと納税完全活用',
  description: '時を越えて受け継がれる日本の町並み遺産「重要伝統的建造物群保存地区（重伝建）」。白壁土蔵と柳並木の倉敷美観地区、なまこ壁と維新胎動の萩城下町、五百棟の伝統町家が残る大和今井町。歴史的建築を改装した極上宿を楽天ふるさと納税でお得に楽しむ完全ガイド。',
  keywords: '重要伝統的建造物群保存地区, 重伝建, 倉敷美観地区, 料理旅館鶴形, 萩城三の丸北門屋敷, 橿原今井町, 楽天ふるさと納税, 古民家ホテル',
  openGraph: {
    title: '【重要伝統的建造物群保存地区】倉敷美観地区・萩城下町・橿原今井町の歴史町家・古民家宿特集｜楽天ふるさと納税完全活用',
    description: '時を越えて受け継がれる日本の町並み遺産「重要伝統的建造物群保存地区（重伝建）」。白壁土蔵と柳並木の倉敷美観地区、なまこ壁と維新胎動の萩城下町、五百棟の伝統町家が残る大和今井町。歴史的建築を改装した極上宿を楽天ふるさと納税でお得に楽しむ完全ガイド。',
    url: 'https://croud-travel.pages.dev/furusato-tax-preservation-districts-heritage-stay',
    siteName: '楽天ふるさと納税×高級トラベルガイド',
    type: 'article',
    locale: 'ja_JP',
  },
  alternates: {
    canonical: 'https://croud-travel.pages.dev/furusato-tax-preservation-districts-heritage-stay',
  },
};

const hotels = [
  {
    "key": "heritage_kurashiki",
    "hotelNo": 108991,
    "hotelName": "料理旅館　鶴形",
    "hotelImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/108991/108991.jpg",
    "hotelMinCharge": 23050,
    "reviewAverage": 4.9,
    "reviewCount": 162,
    "address": "岡山県倉敷市中央1-3-15",
    "access": "倉敷駅から徒歩で約15分／お車で約5分",
    "userReview": "全ての料理が美味しく大満足料理が全て美味しかったです他の画像やクチコミの詳細はこちらから　https://review.travel.rakuten.co.jp/hotel/voice/108…　2026-08-20 14:59:46投稿 <a href=\"https://img.travel.rakuten.co.jp/image/tr/api/kw/HTX0u/?f_hotel_no=108991\" class=\"3click\">つづきはこちら</a>",
    "label": "岡山県倉敷市ふるさと納税・白壁土蔵と柳並木・江戸中期の町家を改装した老舗「倉敷美観地区 料理旅館鶴形」",
    "affiliateUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2Fspecial%2Ffurusato%2F"
  },
  {
    "key": "heritage_hagi",
    "hotelNo": 28353,
    "hotelName": "萩温泉郷　萩城三の丸　北門屋敷",
    "hotelImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/28353/28353.jpg",
    "hotelMinCharge": 24310,
    "reviewAverage": 4.53,
    "reviewCount": 606,
    "address": "山口県萩市堀内210-12",
    "access": "JR東萩駅から車で約8分／世界遺産「萩城下町」の立地。城下町、萩城跡までも徒歩圏内／小郡萩道路絵堂ICから車で約25分",
    "userReview": "掃除が行き届いていて心からくつろげた娘と宿泊しました。私は若干の潔癖症があり、ホテルや旅館ではくつろげないのですが、北門屋敷さんは掃除が行き届いていて、畳の上でも、ベッドの中でも、なんの心配も…　2026-09-01 23:01:32投稿 <a href=\"https://img.travel.rakuten.co.jp/image/tr/api/kw/HTX0u/?f_hotel_no=28353\" class=\"3click\">つづきはこちら</a>",
    "label": "山口県萩市ふるさと納税・白壁となまこ壁が連なる維新胎動の城下町・武家屋敷街「萩城三の丸 北門屋敷」",
    "affiliateUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2Fspecial%2Ffurusato%2F"
  },
  {
    "key": "heritage_imai",
    "hotelNo": 5407,
    "hotelName": "大和橿原シティホテル",
    "hotelImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/5407/5407.jpg",
    "hotelMinCharge": 5500,
    "reviewAverage": 3,
    "reviewCount": 716,
    "address": "奈良県橿原市八木町1-8-16",
    "access": "★大和八木駅より徒歩４分★八木西口駅より徒歩３分★ＪＲ畝傍駅より徒歩４分★南阪奈道路葛城ICより約１５分★",
    "userReview": "素泊まりには便利だが清掃と備品に難あり素泊まりには十分。駅周辺でもあり、飲食店は多いので困らない。無料駐車場は限られてて、若干狭い、少し歩く必要あり。有料も周辺にあるので困る事はない。部屋…　2026-07-13 20:43:47投稿 <a href=\"https://img.travel.rakuten.co.jp/image/tr/api/kw/HTX0u/?f_hotel_no=5407\" class=\"3click\">つづきはこちら</a>",
    "label": "奈良県橿原市ふるさと納税・五百棟の伝統町家が残る大和の自治都市「重要伝統的建造物群保存地区・今井町」カンデオホテルズ奈良橿原",
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
            <span>重伝建・歴史町家ステイ特集</span>
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight mb-6 leading-tight">
            重要伝統的建造物群保存地区（重伝建）の白壁・蔵元宿ステイ
          </h1>
          <p className="text-lg sm:text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed mb-8">
            江戸・明治の風情を今に留め、国の重要伝統的建造物群保存地区に選定される美しい町並み。倉敷川沿いの白壁土蔵が美しい「倉敷美観地区」、維新の志士たちが駆け抜けた武家屋敷が残る「萩城下町」、そして中世の自治都市の面影を残す「橿原今井町」。夕暮れのガス灯や格子戸から漏れる灯りに包まれ、歴史ある町家や風情ある湯宿で過ごす大人の休日。楽天ふるさと納税の宿泊割引クーポンを活用して、実質2,000円の自己負担で叶える歴史浪漫ステイへご案内します。
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
