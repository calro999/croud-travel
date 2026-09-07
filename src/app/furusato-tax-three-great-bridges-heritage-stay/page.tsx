import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: '【日本三大名橋】日本橋・錦帯橋・長崎眼鏡橋の歴史美と水辺の風情宿特集｜楽天ふるさと納税トラベルクーポン完全活用',
  description: '五街道の起点・東京「日本橋」、木造五連アーチが奇跡を描く山口「錦帯橋」、日本最古の石造りアーチ長崎「眼鏡橋」。日本の土木美と歴史情緒が凝縮された三大名橋を巡る旅。ラグジュアリーホテルや城下町の老舗宿を楽天ふるさと納税でお得に楽しむ完全ガイド。',
  keywords: '日本三大名橋, 日本橋, 錦帯橋, 長崎眼鏡橋, マンダリンオリエンタル東京, 錦帯橋温泉岩国国際観光ホテル, 楽天ふるさと納税, トラベルクーポン',
  openGraph: {
    title: '【日本三大名橋】日本橋・錦帯橋・長崎眼鏡橋の歴史美と水辺の風情宿特集｜楽天ふるさと納税トラベルクーポン完全活用',
    description: '五街道の起点・東京「日本橋」、木造五連アーチが奇跡を描く山口「錦帯橋」、日本最古の石造りアーチ長崎「眼鏡橋」。日本の土木美と歴史情緒が凝縮された三大名橋を巡る旅。ラグジュアリーホテルや城下町の老舗宿を楽天ふるさと納税でお得に楽しむ完全ガイド。',
    url: 'https://croud-travel.pages.dev/furusato-tax-three-great-bridges-heritage-stay',
    siteName: '楽天ふるさと納税×高級トラベルガイド',
    type: 'article',
    locale: 'ja_JP',
  },
  alternates: {
    canonical: 'https://croud-travel.pages.dev/furusato-tax-three-great-bridges-heritage-stay',
  },
};

const hotels = [
  {
    "key": "bridge_nihonbashi",
    "hotelNo": 184009,
    "hotelName": "マンダリン　オリエンタル　東京",
    "hotelImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/184009/184009.jpg",
    "hotelMinCharge": 69733,
    "reviewAverage": 4.88,
    "reviewCount": 52,
    "address": "東京都中央区日本橋室町2-1-1",
    "access": "東京メトロ　銀座線・半蔵門線「三越前」駅地下通路直結 / JR　総武本線　「新日本橋」駅地下通路直結　徒歩3分",
    "userReview": "日本橋の絶景と細やかな気遣いに大満足妻の誕生日に利用しました。日本橋というロケーションと高層階からの視界は最高です。ディナーで利用したレストラン、バー、スパ、皆気遣いが行き届いていました。…　2026-08-24 10:05:50投稿 <a href=\"https://img.travel.rakuten.co.jp/image/tr/api/kw/HTX0u/?f_hotel_no=184009\" class=\"3click\">つづきはこちら</a>",
    "label": "東京都中央区ふるさと納税・五街道の起点にして日本の道路元標「日本橋」ロイヤルパークホテル",
    "affiliateUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2Fspecial%2Ffurusato%2F"
  },
  {
    "key": "bridge_kintaikyo",
    "hotelNo": 11295,
    "hotelName": "錦帯橋温泉　岩国国際観光ホテル",
    "hotelImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/11295/11295.jpg",
    "hotelMinCharge": 14300,
    "reviewAverage": 4.28,
    "reviewCount": 1298,
    "address": "山口県岩国市岩国1-1-7",
    "access": "JR山陽新幹線新岩国駅より車で10分 山陽自動車道岩国ICより車で8分 岩国錦帯橋空港より車で15分、宮島より車で40分",
    "userReview": "夏休みに13泊しましたが、他のホテルに比べて金額がちょっと高めだったかなぁと思います由緒あるホテルで内装やお風呂も素敵だったので、しょうがないのかなぁとは思いますが食事の金額もかなり上げないと、そ…　2026-08-29 21:29:07投稿 <a href=\"https://img.travel.rakuten.co.jp/image/tr/api/kw/HTX0u/?f_hotel_no=11295\" class=\"3click\">つづきはこちら</a>",
    "label": "山口県岩国市ふるさと納税・五連の木造アーチが描く錦川の奇跡「錦帯橋」錦帯橋温泉岩国国際観光ホテル",
    "affiliateUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2Fspecial%2Ffurusato%2F"
  },
  {
    "key": "bridge_megane",
    "hotelNo": 15449,
    "hotelName": "にっしょうかん別邸紅葉亭",
    "hotelImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/15449/15449.jpg",
    "hotelMinCharge": 7600,
    "reviewAverage": 4.4,
    "reviewCount": 449,
    "address": "長崎県長崎市立山5-13-65",
    "access": "ＪＲ長崎本線長崎駅から車で15分　＜ＪＲ長崎駅西口より定時無料送迎バスあり＞　長崎自動車道『多良見IC』より約20分",
    "userReview": "他の画像やクチコミの詳細はこちらから　https://review.travel.rakuten.co.jp/hotel/voice/15449?reviewId=33123479206188　2026-08-30 17:56:22投稿",
    "label": "長崎県長崎市ふるさと納税・日本最古のアーチ型石橋・中島川の歴史風情「長崎眼鏡橋」にっしょうかん別邸紅葉亭",
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
            <span>日本三大名橋・歴史浪漫水辺ステイ特集</span>
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight mb-6 leading-tight">
            日本三大名橋の歴史美と城下町・水辺の風情宿ステイ
          </h1>
          <p className="text-lg sm:text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed mb-8">
            川を渡り、人と文化を結んできた日本の至宝「日本三大名橋」。日本の道路元標が鎮座する帝都の要所「日本橋」、錦川の清流に美しい木造アーチを描く「錦帯橋」、長崎の異国情緒と石畳の風情が薫る「眼鏡橋」。橋の袂に広がる城下町や水辺の歴史美を愛で、洗練されたホテルや風情ある湯宿で過ごす優雅なひととき。楽天ふるさと納税の宿泊割引クーポンを駆使して、日本の伝統と美意識に触れる橋巡りの旅をお楽しみください。
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
