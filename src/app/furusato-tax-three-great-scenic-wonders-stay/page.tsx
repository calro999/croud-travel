import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: '【日本三大奇勝】妙義山・耶馬渓・寒霞渓の壮麗な奇岩絶景と極上湯宿ステイ特集｜楽天ふるさと納税トラベルクーポン完全活用',
  description: '大自然の悠久の営みが創り出した日本三大奇勝（群馬・妙義山、大分・耶馬渓、香川・小豆島寒霞渓）。天を突く奇岩怪石のパノラマと、滋味あふれる名湯・島美食を味わい尽くす贅沢な休日。楽天ふるさと納税を活用したお得で記憶に残る絶景旅行術を徹底解説。',
  keywords: '日本三大奇勝, 妙義山, 耶馬渓, 寒霞渓, 小豆島, 絶景温泉, 楽天ふるさと納税, トラベルクーポン',
  openGraph: {
    title: '【日本三大奇勝】妙義山・耶馬渓・寒霞渓の壮麗な奇岩絶景と極上湯宿ステイ特集｜楽天ふるさと納税トラベルクーポン完全活用',
    description: '大自然の悠久の営みが創り出した日本三大奇勝（群馬・妙義山、大分・耶馬渓、香川・小豆島寒霞渓）。天を突く奇岩怪石のパノラマと、滋味あふれる名湯・島美食を味わい尽くす贅沢な休日。楽天ふるさと納税を活用したお得で記憶に残る絶景旅行術を徹底解説。',
    url: 'https://croud-travel.pages.dev/furusato-tax-three-great-scenic-wonders-stay',
    siteName: '楽天ふるさと納税×高級トラベルガイド',
    type: 'article',
    locale: 'ja_JP',
  },
  alternates: {
    canonical: 'https://croud-travel.pages.dev/furusato-tax-three-great-scenic-wonders-stay',
  },
};

const hotels = [
  {
    "key": "wonder_myogi",
    "hotelNo": 29835,
    "hotelName": "妙義温泉　妙義グリーンホテル＆テラス",
    "hotelImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/29835/29835.jpg",
    "hotelMinCharge": 9070,
    "reviewAverage": 4.28,
    "reviewCount": 1894,
    "address": "群馬県富岡市妙義町菅原2678",
    "access": "JR松井田駅よりタクシー12分／磯部駅よりタクシー17分／松井田妙義IC（上信越自動車道）より１２分",
    "userReview": "食事のクオリティが高く妙義山の絶景に満足炭酸水素塩泉の温泉と飲み放題を楽しみに予約しました。温泉は期待した程のとろみは無く、若干塩素が強く感じました。ゴルフ帰りの大勢の人たちが利用する日帰り温泉で…　2026-09-04 16:39:12投稿 <a href=\"https://img.travel.rakuten.co.jp/image/tr/api/kw/HTX0u/?f_hotel_no=29835\" class=\"3click\">つづきはこちら</a>",
    "label": "群馬県富岡市ふるさと納税・天を衝く奇岩怪石のパノラマと自家源泉「上毛三山・妙義山」妙義グリーンホテル＆テラス",
    "affiliateUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2Fspecial%2Ffurusato%2F"
  },
  {
    "key": "wonder_yabakei",
    "hotelNo": 43951,
    "hotelName": "耶馬渓山荘　えぼしや",
    "hotelImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/43951/43951.jpg",
    "hotelMinCharge": 2000,
    "reviewAverage": 3.39,
    "reviewCount": 108,
    "address": "大分県中津市耶馬溪町深耶馬3155-16",
    "access": "ＪＲ　豊後森駅から車で１５分（バスで３０分）／中津駅より５０分（バスで１時間３０分）",
    "userReview": "貸切風呂は良かったが衛生面と臭いが気になるすみませんが衛生面がなんともいいがたし、部屋はかび臭いのできになりました。風呂は貸し切りで良かったですねクチコミの詳細はこちらから　https://r…　2026-07-25 06:04:30投稿 <a href=\"https://img.travel.rakuten.co.jp/image/tr/api/kw/HTX0u/?f_hotel_no=43951\" class=\"3click\">つづきはこちら</a>",
    "label": "大分県中津市ふるさと納税・日本新三景・奇岩と紅葉の渓谷美「耶馬渓」中津温泉ステイ",
    "affiliateUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2Fspecial%2Ffurusato%2F"
  },
  {
    "key": "wonder_kankakei",
    "hotelNo": 17990,
    "hotelName": "小豆島国際ホテル　＜小豆島＞",
    "hotelImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/17990/17990.jpg",
    "hotelMinCharge": 8800,
    "reviewAverage": 4.38,
    "reviewCount": 2087,
    "address": "香川県小豆郡土庄町　甲　24-67",
    "access": "土庄港よりお車にて約７分",
    "userReview": "エンジェルロードを望む絶景と美味しいご飯エンジェルロード真横で部屋から状況が見れるのがとても良かったです!晩御飯のお魚もとっても美味しくて、醤油の名産地ということもあり3種類準備されていて色ん…　2026-09-02 19:35:56投稿 <a href=\"https://img.travel.rakuten.co.jp/image/tr/api/kw/HTX0u/?f_hotel_no=17990\" class=\"3click\">つづきはこちら</a>",
    "label": "香川県土庄町ふるさと納税・日本三大渓谷美・寒霞渓とエンジェルロード「小豆島国際ホテル」",
    "affiliateUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2Fspecial%2Ffurusato%2F"
  }
];

export default function FurusatoThreeGreatPage() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-800">
      {/* Hero Header */}
      <header className="relative bg-gradient-to-r from-emerald-900 via-teal-950 to-slate-900 text-white py-20 px-4 sm:px-6 lg:px-8 shadow-2xl">
        <div className="max-w-5xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-emerald-500/20 border border-emerald-400/40 px-4 py-1.5 rounded-full text-emerald-300 text-sm font-semibold mb-6">
            <span>✨</span>
            <span>日本三大奇勝・絶景岩壁ステイ特集</span>
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight mb-6 leading-tight">
            日本三大奇勝の壮麗な岩壁美と秘湯ステイ
          </h1>
          <p className="text-lg sm:text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed mb-8">
            何万年、何百万年もの風雨と地殻変動が彫り出したダイナミックな造形美。「日本三大奇勝」と称される妙義山、耶馬渓、寒霞渓は、見る者を圧倒する孤高の絶景を誇ります。奇岩の稜線を一望する展望露天風呂や、地元食材を活かした滋味深い料理、そして心地よい静寂。楽天ふるさと納税の宿泊割引クーポンを駆使して、圧倒的なスケールを誇る奇勝の旅を賢くスマートにお楽しみください。
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
            <span>なぜ今、ふるさと納税で巡る日本の絶景旅なのか？</span>
          </h2>
          <p className="text-slate-700 leading-relaxed mb-4">
            全国各地の自治体が発行する「楽天トラベルクーポン返礼品」は、寄付額の最大30%相当が旅行代金から割引される極めて還元率の高い返礼品です。翌年の住民税・所得税の控除対象となるため、実質2,000円の自己負担で憧れの高級リゾートや秘境の名旅館に宿泊することができます。
          </p>
          <p className="text-slate-700 leading-relaxed">
            寄付後即座にマイクーポンへ付与され、予約時に1クリックで適用可能。本特集で厳選した名宿はいずれも各エリアを代表する屈指のロケーションとホスピタリティを誇り、五感を解き放つ特別な休日を約束してくれます。
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
        <section className="bg-gradient-to-br from-slate-900 to-teal-950 text-white rounded-3xl p-8 shadow-xl mb-12">
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
              href="/furusato-tax-three-great-scenic-coasts-stay"
              className="block p-4 rounded-xl bg-slate-50 hover:bg-emerald-50 border border-slate-200 transition"
            >
              <span className="text-xs font-bold text-emerald-700 block mb-1">三大絶景海岸</span>
              <span className="font-semibold text-slate-900 text-sm">【日本三大名勝海岸】東尋坊・浄土ヶ浜・白良浜ステイ特集</span>
            </Link>
            <Link
              href="/furusato-tax-three-famous-waterfalls-healing-stay"
              className="block p-4 rounded-xl bg-slate-50 hover:bg-emerald-50 border border-slate-200 transition"
            >
              <span className="text-xs font-bold text-emerald-700 block mb-1">三大名瀑ヒーリング</span>
              <span className="font-semibold text-slate-900 text-sm">【日本三大名瀑】白糸・吹割・原不動滝の癒やし湯宿特集</span>
            </Link>
            <Link
              href="/furusato-tax-three-great-hotsprings-luxury-villas-stay"
              className="block p-4 rounded-xl bg-slate-50 hover:bg-emerald-50 border border-slate-200 transition"
            >
              <span className="text-xs font-bold text-emerald-700 block mb-1">三大名湯の離れ</span>
              <span className="font-semibold text-slate-900 text-sm">【日本三大名湯】草津・有馬・下呂の極上別邸ステイ特集</span>
            </Link>
            <Link
              href="/furusato-tax-three-great-tea-plantations-stay"
              className="block p-4 rounded-xl bg-slate-50 hover:bg-emerald-50 border border-slate-200 transition"
            >
              <span className="text-xs font-bold text-emerald-700 block mb-1">三大茶園テロワール</span>
              <span className="font-semibold text-slate-900 text-sm">【日本三大茶園】牧之原・宇治・八女の茶香美食ステイ特集</span>
            </Link>
          </div>
        </section>
      </main>
    </div>
  );
}
