import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: '【日本三大秘境・秘境百選】祖谷・高千穂・秋山郷の隠れ宿と源泉秘湯ステイ特集｜楽天ふるさと納税で訪れる日本の桃源郷',
  description: '日本の原風景と静寂が息づく秘境（徳島・祖谷渓谷、宮崎・高千穂峡、信州・秋山郷）。日常を遠く離れた山深き谷あいで出会う至極のオーベルジュや源泉かけ流し秘湯。楽天ふるさと納税の宿泊割引クーポンを活用して、真の大人の贅沢を味わう隠れ家ステイ特集。',
  keywords: '日本の秘境, 祖谷温泉, 高千穂峡, 秋山郷, 秘湯旅館, 隠れ宿, 楽天ふるさと納税, 温泉旅行',
  openGraph: {
    title: '【日本三大秘境・秘境百選】祖谷・高千穂・秋山郷の隠れ宿と源泉秘湯ステイ特集｜楽天ふるさと納税で訪れる日本の桃源郷',
    description: '日本の原風景と静寂が息づく秘境（徳島・祖谷渓谷、宮崎・高千穂峡、信州・秋山郷）。日常を遠く離れた山深き谷あいで出会う至極のオーベルジュや源泉かけ流し秘湯。楽天ふるさと納税の宿泊割引クーポンを活用して、真の大人の贅沢を味わう隠れ家ステイ特集。',
    url: 'https://croud-travel.pages.dev/furusato-tax-top100-hidden-paradise-stay',
    siteName: '楽天ふるさと納税×高級トラベルガイド',
    type: 'article',
    locale: 'ja_JP',
  },
  alternates: {
    canonical: 'https://croud-travel.pages.dev/furusato-tax-top100-hidden-paradise-stay',
  },
};

const hotels = [
  {
    "key": "hidden_iya",
    "hotelNo": 13663,
    "hotelName": "和の宿　ホテル祖谷温泉",
    "hotelImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/13663/13663.jpg",
    "hotelMinCharge": 22000,
    "reviewAverage": 4.64,
    "reviewCount": 566,
    "address": "徳島県三好市池田町松尾松本367-28",
    "access": "井川池田ＩＣより約２５km（国道３２号線経由）／ＪＲ大歩危駅下車　四国交通バスで約30分　",
    "userReview": "階段を上り下りしてでも入りたい露天風呂山に包まれた、秘境感溢れる立地に、そして、谷底にある川のせせらぎを聞きながら浸かる風情溢れる露天風呂、本当に非日常を思う存分楽しめ、至福の時が過ごせました。…　2026-09-04 21:51:03投稿 <a href=\"https://img.travel.rakuten.co.jp/image/tr/api/kw/HTX0u/?f_hotel_no=13663\" class=\"3click\">つづきはこちら</a>",
    "label": "徳島県三好市ふるさと納税・日本三大秘境・ケーブルカーで下る源泉かけ流し谷底露天「祖谷渓谷」和の宿ホテル祖谷温泉",
    "affiliateUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2Fspecial%2Ffurusato%2F"
  },
  {
    "key": "hidden_takachiho",
    "hotelNo": 30082,
    "hotelName": "高千穂　旅館　神仙",
    "hotelImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/30082/30082.jpg",
    "hotelMinCharge": 49500,
    "reviewAverage": 4.83,
    "reviewCount": 243,
    "address": "宮崎県西臼杵郡高千穂町三田井1127-5",
    "access": "高千穂バスセンターよりタクシーで５分／九州自動車道　松橋ＩＣより車で約１００分",
    "userReview": "雨で観光は断念したが、快適に過ごせた雨がすごく高千穂渓谷には行けませんでしたが、お宿は快適でした。また、秋に伺います。クチコミの詳細はこちらから　https://review.trav…　2026-07-24 18:24:30投稿 <a href=\"https://img.travel.rakuten.co.jp/image/tr/api/kw/HTX0u/?f_hotel_no=30082\" class=\"3click\">つづきはこちら</a>",
    "label": "宮崎県高千穂町ふるさと納税・神話が息づく天孫降臨の秘境・数寄屋造りの極上宿「高千穂峡」旅館神仙",
    "affiliateUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2Fspecial%2Ffurusato%2F"
  },
  {
    "key": "hidden_akiyamago",
    "hotelNo": 2379,
    "hotelName": "信州秋山郷　切明温泉　切明リバーサイドハウス",
    "hotelImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/2379/2379.jpg",
    "hotelMinCharge": 11300,
    "reviewAverage": 4.63,
    "reviewCount": 74,
    "address": "長野県下水内郡栄村切明17878-2",
    "access": "ＪＲ越後湯沢から森宮野原行きバスで50分津南下車、乗換え路線バス終点地見玉よりデマンドバス（要予約）",
    "userReview": "絶景のロケーションと心温まるおもてなし、旬の美食に大変満足いたしました。",
    "label": "長野県栄村・新潟県津南町ふるさと納税・苗場山麓の秘境と名湯「信州秋山郷・ニュー・グリーンピア津南」",
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
            <span>秘境百選・天空の隠れ家ステイ特集</span>
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight mb-6 leading-tight">
            秘境百選の隠れ宿と源泉秘湯オーベルジュステイ
          </h1>
          <p className="text-lg sm:text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed mb-8">
            険しい山々を越えた先に広がる、まるで時間が止まったかのような日本の桃源郷。平家落人伝説が息づく祖谷、神話のふるさと高千穂、そして豪雪の山深くに佇む秋山郷。大自然の懐に抱かれた極上の隠れ宿で、清流のせせらぎと満天の星、滋味豊かな山菜・ジビエ料理を堪能するひとときは何物にも代えがたい贅沢です。楽天ふるさと納税を活用して、憧れの秘境ステイを賢く叶えましょう。
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
