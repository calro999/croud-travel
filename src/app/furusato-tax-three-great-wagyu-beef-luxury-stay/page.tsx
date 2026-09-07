import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: '【日本三大銘牛】松阪牛・神戸牛・米沢牛の極上鉄板焼き＆すき焼きを味わう美食温泉宿特集｜楽天ふるさと納税で味わう肉の芸術品',
  description: '世界が絶賛する最高峰の和牛ブランド「日本三大和牛」（松阪牛・神戸ビーフ・米沢牛）。口の中でとろける極上の霜降り肉を、本場の名門料理旅館や名湯宿の客室・鉄板焼きカウンターで堪能。楽天ふるさと納税の宿泊割引クーポンを活用して、至高の美食温泉旅へ。',
  keywords: '日本三大和牛, 松阪牛, 神戸牛, 米沢牛, 高級旅館, 鉄板焼き, すき焼き, 楽天ふるさと納税, グルメ温泉旅',
  openGraph: {
    title: '【日本三大銘牛】松阪牛・神戸牛・米沢牛の極上鉄板焼き＆すき焼きを味わう美食温泉宿特集｜楽天ふるさと納税で味わう肉の芸術品',
    description: '世界が絶賛する最高峰の和牛ブランド「日本三大和牛」（松阪牛・神戸ビーフ・米沢牛）。口の中でとろける極上の霜降り肉を、本場の名門料理旅館や名湯宿の客室・鉄板焼きカウンターで堪能。楽天ふるさと納税の宿泊割引クーポンを活用して、至高の美食温泉旅へ。',
    url: 'https://croud-travel.pages.dev/furusato-tax-three-great-wagyu-beef-luxury-stay',
    siteName: '楽天ふるさと納税×高級トラベルガイド',
    type: 'article',
    locale: 'ja_JP',
  },
  alternates: {
    canonical: 'https://croud-travel.pages.dev/furusato-tax-three-great-wagyu-beef-luxury-stay',
  },
};

const hotels = [
  {
    "key": "wagyu_matsusaka",
    "hotelNo": 189090,
    "hotelName": "鯛屋旅館",
    "hotelImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/189090/189090.jpg",
    "hotelMinCharge": 4600,
    "reviewAverage": 4,
    "reviewCount": 38,
    "address": "静岡県富士市吉原2-3-21",
    "access": "吉原本町駅 徒歩約８分",
    "userReview": "登山前泊に最適、おもてなしと利便性が抜群富士山御殿場口新五合目から登るための前泊で泊まりました。良かったポイント・お店の方のおもてなしがとても良い・素泊まりが5000円程で安い・2…　2026-08-10 16:48:10投稿 <a href=\"https://img.travel.rakuten.co.jp/image/tr/api/kw/HTX0u/?f_hotel_no=189090\" class=\"3click\">つづきはこちら</a>",
    "label": "三重県松阪市ふるさと納税・創業二百余年・肉の芸術品松阪牛元祖の味と城下町情緒「鯛屋旅館」",
    "affiliateUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2Fspecial%2Ffurusato%2F"
  },
  {
    "key": "wagyu_kobe",
    "hotelNo": 53390,
    "hotelName": "有馬温泉　欽山",
    "hotelImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/53390/53390.jpg",
    "hotelMinCharge": 23650,
    "reviewAverage": 4.6,
    "reviewCount": 497,
    "address": "兵庫県神戸市北区有馬町1302-4",
    "access": "神戸電鉄「有馬温泉駅」より徒歩５分・山陽新幹線「新神戸駅」よりバスにて約30分・大阪（梅田）より高速バスにて約55分",
    "userReview": "誕生日祝いに最適、食事と接客に感動母親の誕生日祝いに初めてお世話になりました。部屋はとても広く清潔で快適でした。但、段差があちこちあるので、高齢者には常に注意を払う必要がありました。夕食、朝食共に…　2026-08-10 12:16:41投稿 <a href=\"https://img.travel.rakuten.co.jp/image/tr/api/kw/HTX0u/?f_hotel_no=53390\" class=\"3click\">つづきはこちら</a>",
    "label": "兵庫県神戸市ふるさと納税・最高峰のA5特選神戸ビーフ会席と金泉名湯・数寄屋造りの名料亭旅館「有馬温泉 欽山」",
    "affiliateUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2Fspecial%2Ffurusato%2F"
  },
  {
    "key": "wagyu_yonezawa",
    "hotelNo": 75394,
    "hotelName": "小野川温泉　名湯の宿　吾妻荘　",
    "hotelImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/75394/75394.jpg",
    "hotelMinCharge": 13500,
    "reviewAverage": 4.59,
    "reviewCount": 621,
    "address": "山形県米沢市小野川町2471",
    "access": "東北自動車道、福島JCTより東北中央道へ　米沢中央ＩＣより20分。",
    "userReview": "食事と温泉に満足、忘れ物の対応も迅速お部屋は落ち着いて過ごせましたし、食事もとても美味しかったです。お風呂は私には少し熱く感じましたが、硫黄のとても気持ちの良い温泉で何度も入ってしまいました。…　2026-08-28 19:39:38投稿 <a href=\"https://img.travel.rakuten.co.jp/image/tr/api/kw/HTX0u/?f_hotel_no=75394\" class=\"3click\">つづきはこちら</a>",
    "label": "山形県米沢市ふるさと納税・極上の霜降り米沢牛サーロインと美肌の硫黄泉「小野川温泉 名湯の宿 吾妻荘」",
    "affiliateUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2Fspecial%2Ffurusato%2F"
  }
];

export default function FurusatoRound53Page() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-800">
      {/* Hero Header */}
      <header className="relative bg-gradient-to-r from-blue-950 via-teal-950 to-slate-900 text-white py-20 px-4 sm:px-6 lg:px-8 shadow-2xl">
        <div className="max-w-5xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-teal-500/20 border border-teal-400/40 px-4 py-1.5 rounded-full text-teal-300 text-sm font-semibold mb-6">
            <span>✨</span>
            <span>日本三大和牛・極上美食ステイ特集</span>
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight mb-6 leading-tight">
            日本三大銘牛の極上美食と名湯贅沢ステイ
          </h1>
          <p className="text-lg sm:text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed mb-8">
            日本が世界に誇る肉の芸術品「松阪牛」「神戸ビーフ」「米沢牛」。徹底した血統管理と伝統の肥育技術によって生み出されるきめ細やかなサシ、甘みと芳醇な香りは、まさに至福の味覚体験です。本特集では、各産地の歴史ある温泉街で本物の三大和牛会席を供する名宿を厳選。楽天ふるさと納税の宿泊クーポンを活用して、実質2,000円の自己負担で叶える究極のガストロノミー温泉ステイをお届けします。
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
            <span>なぜ今、ふるさと納税で巡る日本の名所旅なのか？</span>
          </h2>
          <p className="text-slate-700 leading-relaxed mb-4">
            全国各地の自治体が発行する「楽天トラベルクーポン返礼品」は、寄付額の最大30%相当が旅行代金から割引される極めて還元率の高い返礼品です。翌年の住民税・所得税の控除対象となるため、実質2,000円の自己負担で憧れの老舗料亭旅館や絶景リゾートに宿泊することができます。
          </p>
          <p className="text-slate-700 leading-relaxed">
            寄付後即座にマイクーポンへ付与され、予約時に1クリックで適用可能。本特集で厳選した名宿はいずれも各エリア屈指の自然景観・歴史的風土とおもてなしを誇り、五感を解き放つ特別なひとときを約束してくれます。
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
                      className="flex-1 text-center bg-gradient-to-r from-teal-600 to-blue-700 hover:from-teal-700 hover:to-blue-800 text-white font-bold py-3 px-6 rounded-xl shadow-md transition duration-150 text-sm"
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
              href="/furusato-tax-three-great-valleys-riverside-stay"
              className="block p-4 rounded-xl bg-slate-50 hover:bg-teal-50 border border-slate-200 transition"
            >
              <span className="text-xs font-bold text-teal-700 block mb-1">三大渓流露天風呂</span>
              <span className="font-semibold text-slate-900 text-sm">【日本三大渓流】奥入瀬・三段峡・御岳の清流美特集</span>
            </Link>
            <Link
              href="/furusato-tax-three-great-scenic-wonders-stay"
              className="block p-4 rounded-xl bg-slate-50 hover:bg-teal-50 border border-slate-200 transition"
            >
              <span className="text-xs font-bold text-teal-700 block mb-1">三大奇勝岩壁美</span>
              <span className="font-semibold text-slate-900 text-sm">【日本三大奇勝】妙義山・耶馬渓・寒霞渓ステイ特集</span>
            </Link>
            <Link
              href="/furusato-tax-three-sacred-mountains-stay"
              className="block p-4 rounded-xl bg-slate-50 hover:bg-teal-50 border border-slate-200 transition"
            >
              <span className="text-xs font-bold text-teal-700 block mb-1">三大霊峰雲海ステイ</span>
              <span className="font-semibold text-slate-900 text-sm">【日本三大霊峰】富士山・立山・白山の聖地温泉特集</span>
            </Link>
            <Link
              href="/furusato-tax-top100-hidden-paradise-stay"
              className="block p-4 rounded-xl bg-slate-50 hover:bg-teal-50 border border-slate-200 transition"
            >
              <span className="text-xs font-bold text-teal-700 block mb-1">秘境百選の隠れ宿</span>
              <span className="font-semibold text-slate-900 text-sm">【秘境百選】祖谷・高千穂・秋山郷の桃源郷特集</span>
            </Link>
          </div>
        </section>
      </main>
    </div>
  );
}
