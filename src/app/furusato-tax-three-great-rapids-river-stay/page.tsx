import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: '【日本三大急流】最上川・富士川・球磨川の豪快な川下りと大自然リバーサイド温泉宿特集｜楽天ふるさと納税完全活用',
  description: '轟く水飛沫とダイナミックな渓谷美を誇る「日本三大急流」（山形・最上川、山梨・富士川、熊本・球磨川）。芭蕉ゆかりの舟下り、信玄の隠し湯・下部温泉、清流アユと天然露天風呂。楽天ふるさと納税の宿泊割引クーポンを活用して、大自然の躍動感を五感で味わうリバーサイド温泉旅へ。',
  keywords: '日本三大急流, 最上川舟下り, 富士川, 球磨川, 高見屋最上川別邸紅, 下部ホテル, あゆの里, 楽天ふるさと納税, リバーサイド温泉',
  openGraph: {
    title: '【日本三大急流】最上川・富士川・球磨川の豪快な川下りと大自然リバーサイド温泉宿特集｜楽天ふるさと納税完全活用',
    description: '轟く水飛沫とダイナミックな渓谷美を誇る「日本三大急流」（山形・最上川、山梨・富士川、熊本・球磨川）。芭蕉ゆかりの舟下り、信玄の隠し湯・下部温泉、清流アユと天然露天風呂。楽天ふるさと納税の宿泊割引クーポンを活用して、大自然の躍動感を五感で味わうリバーサイド温泉旅へ。',
    url: 'https://croud-travel.pages.dev/furusato-tax-three-great-rapids-river-stay',
    siteName: '楽天ふるさと納税×高級トラベルガイド',
    type: 'article',
    locale: 'ja_JP',
  },
  alternates: {
    canonical: 'https://croud-travel.pages.dev/furusato-tax-three-great-rapids-river-stay',
  },
};

const hotels = [
  {
    "key": "rapid_mogami",
    "hotelNo": 147592,
    "hotelName": "高見屋　最上川別邸　紅",
    "hotelImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/147592/147592.jpg",
    "hotelMinCharge": 10450,
    "reviewAverage": 4.25,
    "reviewCount": 405,
    "address": "山形県最上郡戸沢村古口3058",
    "access": "東京・仙台方面→東北自動車道→村田JCT→山形自動車道→山形北IC→国道13号→国道47号→宿",
    "userReview": "川の眺めは良いが工事の視線が気になったお風呂が残念部屋から目の前の川がよく見える所でよかったが反対側で工事をしている作業員が10名ほどこれ以上言わなくてもわかると思いますがチェックイン…　2026-08-23 12:39:31投稿 <a href=\"https://img.travel.rakuten.co.jp/image/tr/api/kw/HTX0u/?f_hotel_no=147592\" class=\"3click\">つづきはこちら</a>",
    "label": "山形県戸沢村ふるさと納税・五月雨をあつめて早し最上川・芭蕉ゆかりの舟下りと清流露天「最上川別邸 紅」",
    "affiliateUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2Fspecial%2Ffurusato%2F"
  },
  {
    "key": "rapid_fuji",
    "hotelNo": 40916,
    "hotelName": "山梨県の温泉旅館　下部温泉郷　下部ホテル",
    "hotelImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/40916/40916.jpg",
    "hotelMinCharge": 15400,
    "reviewAverage": 4.39,
    "reviewCount": 1273,
    "address": "山梨県南巨摩郡身延町上之平1900",
    "access": "ＪＲ身延線下部温泉駅徒歩１分／車：中部横断道下部温泉早川ＩＣより５分",
    "userReview": "温泉と接客は最高だが夕食が期待外れ温泉はぬる湯とあつ湯で楽しめ、泉質も良かった。接客も質が高くここち良い。夕食のみ期待していた分、とても残念。一品一品をもっとおいしくしてほしい。お寿司はねっとりし…　2026-09-05 21:56:07投稿 <a href=\"https://img.travel.rakuten.co.jp/image/tr/api/kw/HTX0u/?f_hotel_no=40916\" class=\"3click\">つづきはこちら</a>",
    "label": "山梨県身延町ふるさと納税・富士山の懐を貫く急流富士川と信玄の隠し湯「下部温泉 下部ホテル」",
    "affiliateUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2Fspecial%2Ffurusato%2F"
  },
  {
    "key": "rapid_kuma",
    "hotelNo": 19539,
    "hotelName": "人吉温泉　あゆの里",
    "hotelImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/19539/19539.jpg",
    "hotelMinCharge": 9350,
    "reviewAverage": 4.55,
    "reviewCount": 968,
    "address": "熊本県人吉市九日町30",
    "access": "九州新幹線新八代駅から高速バスで約30分。周辺観光：青井阿蘇神社へ徒歩約10分。",
    "userReview": "毎年恒例の美味しい料理と景色に大満足ここ数年、あゆの里を利用させてもらっています。去年と一緒でお料理も美味しく、のんびり過ごさせて頂きました。お部屋からの景色も良かったです。また、来年…　2026-09-05 15:45:01投稿 <a href=\"https://img.travel.rakuten.co.jp/image/tr/api/kw/HTX0u/?f_hotel_no=19539\" class=\"3click\">つづきはこちら</a>",
    "label": "熊本県人吉市ふるさと納税・日本三大急流球磨川のラフティングと木炭・アユの美食「清流山水花 あゆの里」",
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
            <span>日本三大急流・水辺の躍動ステイ特集</span>
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight mb-6 leading-tight">
            日本三大急流の豪快な舟下りと大自然リバーサイド温泉ステイ
          </h1>
          <p className="text-lg sm:text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed mb-8">
            山々を切り裂き、轟音とともに流れる圧倒的な水量とダイナミックな渓谷景観「日本三大急流」。「五月雨をあつめて早し」と詠まれた最上川の舟下り、甲州から駿河へと注ぐ急流富士川と名湯下部温泉、そして九州山地を潤す清流球磨川のラフティングとアユ美食。川のせせらぎとマイナスイオンに包まれ、贅沢な源泉かけ流し露天風呂に身を委ねる時間。楽天ふるさと納税の宿泊割引クーポンを利用して、実質2,000円の自己負担で叶える迫力満点のリバーサイドステイへご案内します。
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
