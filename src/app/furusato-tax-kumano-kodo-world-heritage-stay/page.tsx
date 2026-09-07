import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: '【熊野古道・世界遺産】祈りの巡礼路と湯の峰・那智勝浦・白浜の極上温泉宿特集｜楽天ふるさと納税で巡る紀伊山地の聖地',
  description: '千年の祈りが息づく世界遺産「紀伊山地の霊場と参詣道・熊野古道」。日本最古の湯の峰温泉つぼ湯、那智の滝と大門坂、大洞窟温泉を誇る勝浦温泉、太平洋を一望する白浜温泉。楽天ふるさと納税のトラベルクーポンを利用して、魂を浄化する極上の巡礼温泉ステイへ。',
  keywords: '熊野古道, 世界遺産, 湯の峰温泉, 那智勝浦温泉, ホテル浦島, 浜千鳥の湯海舟, 旅館あづまや, 楽天ふるさと納税, 巡礼温泉宿',
  openGraph: {
    title: '【熊野古道・世界遺産】祈りの巡礼路と湯の峰・那智勝浦・白浜の極上温泉宿特集｜楽天ふるさと納税で巡る紀伊山地の聖地',
    description: '千年の祈りが息づく世界遺産「紀伊山地の霊場と参詣道・熊野古道」。日本最古の湯の峰温泉つぼ湯、那智の滝と大門坂、大洞窟温泉を誇る勝浦温泉、太平洋を一望する白浜温泉。楽天ふるさと納税のトラベルクーポンを利用して、魂を浄化する極上の巡礼温泉ステイへ。',
    url: 'https://croud-travel.pages.dev/furusato-tax-kumano-kodo-world-heritage-stay',
    siteName: '楽天ふるさと納税×高級トラベルガイド',
    type: 'article',
    locale: 'ja_JP',
  },
  alternates: {
    canonical: 'https://croud-travel.pages.dev/furusato-tax-kumano-kodo-world-heritage-stay',
  },
};

const hotels = [
  {
    "key": "kumano_yunomine",
    "hotelNo": 129554,
    "hotelName": "旅館あづまや　＜和歌山県＞",
    "hotelImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/129554/129554.jpg",
    "hotelMinCharge": 10890,
    "reviewAverage": 4.47,
    "reviewCount": 151,
    "address": "和歌山県田辺市本宮町湯峰122",
    "access": "紀伊田辺駅よりバス・タクシーで約９０分/新宮駅よりバス、タクシーで６０分「湯峰温泉」下車すぐ/南紀田辺ＩＣから車で70分",
    "userReview": "温泉街の中心で料理も温泉も素晴らしい車での利用でしたが、温泉街のほぼ中心でバス停や公衆浴場の真ん前の立地(ただし駐車場からは徒歩3分程度かかる)。温泉や料理も素晴らしく、古い建物ながら清潔に手入れ…　2026-09-02 18:34:13投稿 <a href=\"https://img.travel.rakuten.co.jp/image/tr/api/kw/HTX0u/?f_hotel_no=129554\" class=\"3click\">つづきはこちら</a>",
    "label": "和歌山県田辺市ふるさと納税・世界遺産「つぼ湯」湧く日本最古の温泉地・熊野古道中辺路「湯の峰温泉 旅館あづまや」",
    "affiliateUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2Fspecial%2Ffurusato%2F"
  },
  {
    "key": "kumano_katsuura",
    "hotelNo": 54556,
    "hotelName": "南紀勝浦温泉　ホテル浦島",
    "hotelImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/54556/54556.jpg",
    "hotelMinCharge": 8250,
    "reviewAverage": 4.22,
    "reviewCount": 6326,
    "address": "和歌山県東牟婁郡那智勝浦町勝浦1165-2",
    "access": "ＪＲ紀勢線　紀伊勝浦駅から徒歩6分で桟橋へ。更に専用ボート又は、シャトルバスで５分　詳しくは交通案内ページをご覧ください",
    "userReview": "リニューアルで一新、来年もまた訪れたい浦島さんへは十数年前くらいから、毎年訪問しております。今年は特に、70周年でリニューアル���れているという事で楽しみにしておりました。感想は、結構落ち着…　2026-09-03 19:36:10投稿 <a href=\"https://img.travel.rakuten.co.jp/image/tr/api/kw/HTX0u/?f_hotel_no=54556\" class=\"3click\">つづきはこちら</a>",
    "label": "和歌山県那智勝浦町ふるさと納税・大門坂と那智の滝・絶景洞窟露天風呂「南紀勝浦温泉 ホテル浦島」",
    "affiliateUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2Fspecial%2Ffurusato%2F"
  },
  {
    "key": "kumano_kaishu",
    "hotelNo": 68224,
    "hotelName": "浜千鳥の湯　海舟（共立リゾート）",
    "hotelImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/68224/68224.jpg",
    "hotelMinCharge": 14300,
    "reviewAverage": 4.37,
    "reviewCount": 3629,
    "address": "和歌山県西牟婁郡白浜町1698-1",
    "access": "JR白浜駅より車で約15分／バスで約25分　最寄りのバス停「草原の湯」／「南紀白浜空港」より車で約7分",
    "userReview": "すべてのサービスが最高でした全サービス最高クチコミの詳細はこちらから　https://review.travel.rakuten.co.jp/hotel/voice/68224?revie…　2026-09-05 22:48:38投稿 <a href=\"https://img.travel.rakuten.co.jp/image/tr/api/kw/HTX0u/?f_hotel_no=68224\" class=\"3click\">つづきはこちら</a>",
    "label": "和歌山県白浜町ふるさと納税・紀伊山地の霊場と参詣道巡礼の拠点・海景混浴露天「浜千鳥の湯 海舟」",
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
            <span>世界遺産熊野古道・祈りの名湯ステイ特集</span>
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight mb-6 leading-tight">
            世界遺産・熊野古道の祈りの巡礼路と名湯ステイ
          </h1>
          <p className="text-lg sm:text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed mb-8">
            杉木立が連なる苔むした石畳、山々を包み込む神聖な霧、そして熊野三山へと続く「熊野古道」。古より貴族から庶民まで、多くの人々が再生と救いを求めて歩んできた祈りの道です。巡礼の旅人を癒やしてきた日本最古の温泉地「湯の峰温泉」、太平洋の荒波が打ち寄せる大洞窟露天「勝浦温泉」、そして絶景オーシャンビューの「白浜温泉」。楽天ふるさと納税を活用して、心身を根底から解き放つ世界遺産の聖地巡礼温泉旅をお楽しみください。
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
