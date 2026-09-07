import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: '【日本三大花火大会】大曲の花火・長岡まつり・土浦全国花火の圧倒的スケールと眺望ホテルステイ特集｜楽天ふるさと納税トラベルクーポン',
  description: '夜空を揺るがす光と音の饗宴「日本三大花火大会」（秋田・大曲の花火、新潟・長岡まつり大花火大会、茨城・土浦全国花火競技大会）。内閣総理大臣賞を競う最高峰の煙火芸術や復興祈願フェニックス花火。楽天ふるさと納税の宿泊割引クーポンを活用して、感動の特等席と快適ステイを両立する完全ガイド。',
  keywords: '日本三大花火大会, 大曲の花火, 長岡花火, 土浦花火大会, ホテルルートイン大曲駅前, ホテルニューオータニ長岡, ホテルマロウド筑波, 楽天ふるさと納税',
  openGraph: {
    title: '【日本三大花火大会】大曲の花火・長岡まつり・土浦全国花火の圧倒的スケールと眺望ホテルステイ特集｜楽天ふるさと納税トラベルクーポン',
    description: '夜空を揺るがす光と音の饗宴「日本三大花火大会」（秋田・大曲の花火、新潟・長岡まつり大花火大会、茨城・土浦全国花火競技大会）。内閣総理大臣賞を競う最高峰の煙火芸術や復興祈願フェニックス花火。楽天ふるさと納税の宿泊割引クーポンを活用して、感動の特等席と快適ステイを両立する完全ガイド。',
    url: 'https://croud-travel.pages.dev/furusato-tax-three-great-fireworks-resort-stay',
    siteName: '楽天ふるさと納税×高級トラベルガイド',
    type: 'article',
    locale: 'ja_JP',
  },
  alternates: {
    canonical: 'https://croud-travel.pages.dev/furusato-tax-three-great-fireworks-resort-stay',
  },
};

const hotels = [
  {
    "key": "fireworks_omagari",
    "hotelNo": 70699,
    "hotelName": "ホテルルートイン　大曲駅前",
    "hotelImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/70699/70699.jpg",
    "hotelMinCharge": 6650,
    "reviewAverage": 4.28,
    "reviewCount": 1512,
    "address": "秋田県大仙市大曲通町3-14",
    "access": "ＪＲ秋田新幹線大曲駅より徒歩３分/大曲I.Cより車で約10分/秋田市より秋田自動車道利用で約40分",
    "userReview": "駐車場が不便で精算の手間が惜しい提携駐車場の場所がホテル横に2軒あり、奥側とすぐには気づけなかった。一泊しただけで1500円程度手持ちキャッシュが無いと駐車場から出られず、両替が必要かつ、…　2026-08-29 20:32:59投稿 <a href=\"https://img.travel.rakuten.co.jp/image/tr/api/kw/HTX0u/?f_hotel_no=70699\" class=\"3click\">つづきはこちら</a>",
    "label": "秋田県大仙市ふるさと納税・全国花火競技大会・内閣総理大臣賞を競う日本最高峰の花火芸術「大曲の花火」大曲ステイ",
    "affiliateUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2Fspecial%2Ffurusato%2F"
  },
  {
    "key": "fireworks_nagaoka",
    "hotelNo": 2104,
    "hotelName": "ホテルニューオータニ長岡",
    "hotelImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/2104/2104.jpg",
    "hotelMinCharge": 8700,
    "reviewAverage": 4.3,
    "reviewCount": 2599,
    "address": "新潟県長岡市台町2丁目8番35号",
    "access": "上越新幹線・信越本線の長岡駅東口より徒歩２分／長岡ICから車で長岡駅方面約２０分／１泊１台１，０００円の駐車場あり",
    "userReview": "長岡駅に近くビジネス利用に便利でした。朝食が美味しかったです。クチコミの詳細はこちらから　https://review.travel.rakuten.co.jp/hotel/voice/2104?…　2026-09-05 13:52:24投稿 <a href=\"https://img.travel.rakuten.co.jp/image/tr/api/kw/HTX0u/?f_hotel_no=2104\" class=\"3click\">つづきはこちら</a>",
    "label": "新潟県長岡市ふるさと納税・復興の祈りを捧げる正三尺玉とフェニックス花火「長岡まつり大花火大会」ホテルニューオータニ長岡",
    "affiliateUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2Fspecial%2Ffurusato%2F"
  },
  {
    "key": "fireworks_tsuchiura",
    "hotelNo": 1812,
    "hotelName": "ホテルマロウド筑波",
    "hotelImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/1812/1812.jpg",
    "hotelMinCharge": 5200,
    "reviewAverage": 4.03,
    "reviewCount": 1566,
    "address": "茨城県土浦市城北町2-24",
    "access": "JR常磐線 土浦駅西口から徒歩１2分 お車でＴＸつくば駅から２５分 常磐道桜土浦ＩＣから１５分 土浦北ＩＣから１０分",
    "userReview": "急な予約にも快く対応、また利用したい急な予約でしたが、ご対応いただきましてありがとうございました。また茨城へ行く際には、金額もお手頃なので利用したいと思います。クチコミの詳細はこちらから　…　2026-09-05 10:01:11投稿 <a href=\"https://img.travel.rakuten.co.jp/image/tr/api/kw/HTX0u/?f_hotel_no=1812\" class=\"3click\">つづきはこちら</a>",
    "label": "茨城県土浦市ふるさと納税・秋の夜空を彩る煙火芸術の頂上決戦「土浦全国花火競技大会」ホテルマロウド筑波",
    "affiliateUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2Fspecial%2Ffurusato%2F"
  }
];

export default function FurusatoRound57Page() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-800">
      {/* Hero Header */}
      <header className="relative bg-gradient-to-r from-slate-950 via-rose-950 to-indigo-950 text-white py-20 px-4 sm:px-6 lg:px-8 shadow-2xl">
        <div className="max-w-5xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-rose-500/20 border border-rose-400/40 px-4 py-1.5 rounded-full text-rose-300 text-sm font-semibold mb-6">
            <span>✨</span>
            <span>日本三大花火・光と音の饗宴ステイ特集</span>
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight mb-6 leading-tight">
            日本三大花火大会の特等席と快適眺望ホテルステイ
          </h1>
          <p className="text-lg sm:text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed mb-8">
            一瞬の輝きに魂を込める花火師たちの技術の粋と、夜空いっぱいに広がる大輪の火の華「日本三大花火大会」。全国の精鋭が覇を競う「大曲の花火」、信濃川の夜空に打ち上がる大迫力の正三尺玉とフェニックス「長岡花火」、秋風の中で繰り広げられる煙火競技の最高峰「土浦花火」。胸の奥まで響く重低音と煌めく光のシャワーに心を奪われる至福の夜。楽天ふるさと納税の宿泊クーポンを駆使して、日本の夏の風物詩を快適に味わうプレミアムステイをお楽しみください。
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
            <span className="text-rose-600">🌿</span>
            <span>なぜ今、ふるさと納税で巡る日本の名所・文化遺産旅なのか？</span>
          </h2>
          <p className="text-slate-700 leading-relaxed mb-4">
            全国各地の自治体が発行する「楽天トラベルクーポン返礼品」は、寄付額の最大30%相当が旅行代金から割引される極めて還元率の高い返礼品です。翌年の住民税・所得税の控除対象となるため、実質2,000円の自己負担で憧れの名門ホテルや城下町の老舗宿に宿泊することができます。
          </p>
          <p className="text-slate-700 leading-relaxed">
            寄付後即座にマイクーポンへ付与され、予約時に1クリックで適用可能。本特集で厳選したホテル・旅館はいずれも各地の自然景観・祭礼文化や歴史遺産を満喫できる特等席のロケーションを誇り、五感を解き放つ特別な休日を約束してくれます。
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
                  <div className="absolute top-4 left-4 bg-rose-950/80 backdrop-blur-md text-rose-300 font-bold px-3 py-1 rounded-lg text-sm border border-rose-500/30">
                    STAGE 0{idx + 1}
                  </div>
                </div>
                <div className="md:col-span-7 p-6 sm:p-8 flex flex-col justify-between">
                  <div>
                    <div className="text-xs font-bold text-rose-700 mb-1 tracking-wider uppercase">
                      {h.label}
                    </div>
                    <h3 className="text-2xl font-black text-slate-900 mb-3 hover:text-rose-700 transition">
                      <a href={h.affiliateUrl} target="_blank" rel="noopener noreferrer">
                        {h.hotelName}
                      </a>
                    </h3>
                    <div className="flex items-center gap-3 mb-4 text-sm text-slate-600">
                      <span className="flex items-center text-amber-500 font-bold">
                        ★ {h.reviewAverage.toFixed(1)}
                      </span>
                      <span className="text-slate-400">({h.reviewCount}件の評価)</span>
                      <span className="text-rose-700 font-semibold">・ 参考目安: ¥{h.hotelMinCharge.toLocaleString()}〜</span>
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
                      className="flex-1 text-center bg-gradient-to-r from-rose-600 to-indigo-700 hover:from-rose-700 hover:to-indigo-800 text-white font-bold py-3 px-6 rounded-xl shadow-md transition duration-150 text-sm"
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
        <section className="bg-gradient-to-br from-slate-900 to-rose-950 text-white rounded-3xl p-8 shadow-xl mb-12">
          <h2 className="text-2xl font-bold mb-6 text-center text-rose-300">
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
              href="/furusato-tax-preservation-districts-heritage-stay"
              className="block p-4 rounded-xl bg-slate-50 hover:bg-rose-50 border border-slate-200 transition"
            >
              <span className="text-xs font-bold text-rose-700 block mb-1">重要伝統的建造物群</span>
              <span className="font-semibold text-slate-900 text-sm">【重伝建の町並み】倉敷・萩・今井町の歴史町家宿特集</span>
            </Link>
            <Link
              href="/furusato-tax-famous-spring-waters-healing-stay"
              className="block p-4 rounded-xl bg-slate-50 hover:bg-rose-50 border border-slate-200 transition"
            >
              <span className="text-xs font-bold text-rose-700 block mb-1">名水百選リトリート</span>
              <span className="font-semibold text-slate-900 text-sm">【日本名水百選】白川水源・安曇野・柿田川の美食名湯特集</span>
            </Link>
            <Link
              href="/furusato-tax-six-ancient-kilns-pottery-stay"
              className="block p-4 rounded-xl bg-slate-50 hover:bg-rose-50 border border-slate-200 transition"
            >
              <span className="text-xs font-bold text-rose-700 block mb-1">日本六古窯の里</span>
              <span className="font-semibold text-slate-900 text-sm">【日本六古窯】備前・信楽・丹波立杭の陶芸名料亭特集</span>
            </Link>
            <Link
              href="/furusato-tax-three-great-forests-wood-villa-stay"
              className="block p-4 rounded-xl bg-slate-50 hover:bg-rose-50 border border-slate-200 transition"
            >
              <span className="text-xs font-bold text-rose-700 block mb-1">日本三大美林セラピー</span>
              <span className="font-semibold text-slate-900 text-sm">【日本三大美林】青森ヒバ・秋田杉・木曽檜ウッドヴィラ特集</span>
            </Link>
          </div>
        </section>
      </main>
    </div>
  );
}
