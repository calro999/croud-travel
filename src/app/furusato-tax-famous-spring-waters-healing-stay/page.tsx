import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: '【日本名水百選】白川水源・安曇野わさび田・柿田川湧水群を巡る清冽な名水仕込み美食と美肌温泉宿特集｜楽天ふるさと納税ガイド',
  description: '大地が育んだ日本屈指の名水湧出地（熊本・南阿蘇白川水源、長野・安曇野わさび田湧水、静岡・富士山柿田川湧水群）。清冽な名水で仕込んだ地酒や信州蕎麦、名水豆腐に舌鼓を打ち、源泉名湯で癒やされる旅。楽天ふるさと納税の宿泊割引クーポンを活用した名水リトリート。',
  keywords: '日本名水百選, 白川水源, 安曇野わさび田, 柿田川湧水群, 南阿蘇夢しずく温泉別邸蘇庵, 安曇野穂高ビューホテル, 富士山三島東急ホテル, 楽天ふるさと納税',
  openGraph: {
    title: '【日本名水百選】白川水源・安曇野わさび田・柿田川湧水群を巡る清冽な名水仕込み美食と美肌温泉宿特集｜楽天ふるさと納税ガイド',
    description: '大地が育んだ日本屈指の名水湧出地（熊本・南阿蘇白川水源、長野・安曇野わさび田湧水、静岡・富士山柿田川湧水群）。清冽な名水で仕込んだ地酒や信州蕎麦、名水豆腐に舌鼓を打ち、源泉名湯で癒やされる旅。楽天ふるさと納税の宿泊割引クーポンを活用した名水リトリート。',
    url: 'https://croud-travel.pages.dev/furusato-tax-famous-spring-waters-healing-stay',
    siteName: '楽天ふるさと納税×高級トラベルガイド',
    type: 'article',
    locale: 'ja_JP',
  },
  alternates: {
    canonical: 'https://croud-travel.pages.dev/furusato-tax-famous-spring-waters-healing-stay',
  },
};

const hotels = [
  {
    "key": "spring_shirakawa",
    "hotelNo": 74601,
    "hotelName": "南阿蘇夢しずく温泉　別邸蘇庵",
    "hotelImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/74601/74601.jpg",
    "hotelMinCharge": 30500,
    "reviewAverage": 4.69,
    "reviewCount": 243,
    "address": "熊本県阿蘇郡南阿蘇村河陰5-56",
    "access": "【長陽大橋開通】熊本ICより57号線経由車で50分・【 俵山トンネル経由】 熊本空港より車で約30分",
    "userReview": "すき焼きと釜炊きご飯が絶品、接客も丁寧露天風呂付き客室。風呂場は広いが湯船は少し狭い。自動湯はりシステムは、1度に出るお湯の量が少なく何度も出さなければならないのが少し面倒。ロケー…　2026-09-04 22:00:01投稿 <a href=\"https://img.travel.rakuten.co.jp/image/tr/api/kw/HTX0u/?f_hotel_no=74601\" class=\"3click\">つづきはこちら</a>",
    "label": "熊本県南阿蘇村ふるさと納税・毎分60トンの名水を誇る白川水源と阿蘇五岳を望む美肌温泉「南阿蘇温泉ホテル夢しずく」",
    "affiliateUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2Fspecial%2Ffurusato%2F"
  },
  {
    "key": "spring_azumino",
    "hotelNo": 7149,
    "hotelName": "穂高温泉郷　安曇野穂高ビューホテル",
    "hotelImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/7149/7149.jpg",
    "hotelMinCharge": 13500,
    "reviewAverage": 4.3,
    "reviewCount": 1333,
    "address": "長野県安曇野市穂高牧2200-3",
    "access": "長野自動車道【安曇野IC】よりお車で約25分。【松本IC】よりお車で約40分／JR大糸線穂高駅よりバスで約15分　",
    "userReview": "ワインのコイン返却でリンゴジュースをゲットワインのコインを利用しなかったので、チェックアウトの時返したらリンゴジュース(缶)をもらいました。おいしかった。クチコミの詳細はこちらから　https…　2026-09-05 19:57:56投稿 <a href=\"https://img.travel.rakuten.co.jp/image/tr/api/kw/HTX0u/?f_hotel_no=7149\" class=\"3click\">つづきはこちら</a>",
    "label": "長野県安曇野市ふるさと納税・北アルプスの清冽な雪解け水湧くわさび田と山麓の名湯「穂高温泉郷 穂高ビューホテル」",
    "affiliateUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2Fspecial%2Ffurusato%2F"
  },
  {
    "key": "spring_kakitagawa",
    "hotelNo": 179020,
    "hotelName": "富士山三島東急ホテル",
    "hotelImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/179020/179020.jpg",
    "hotelMinCharge": 9800,
    "reviewAverage": 4.52,
    "reviewCount": 699,
    "address": "静岡県三島市一番町17-1",
    "access": "ＪＲ　三島駅（南口）／伊豆箱根鉄道　三島駅より徒歩にて約１分",
    "userReview": "三島駅を見下ろす眺望と豪華な朝食に満足いつも利用している三島駅を上空から眺める楽しい滞在を家族と過ごしました。朝食も豪華でとても良かった。クチコミの詳細はこちらから　https://revie…　2026-08-30 21:51:08投稿 <a href=\"https://img.travel.rakuten.co.jp/image/tr/api/kw/HTX0u/?f_hotel_no=179020\" class=\"3click\">つづきはこちら</a>",
    "label": "静岡県三島市・清水町ふるさと納税・富士山の伏流水が湧き出る東洋一の湧水群「柿田川湧水」富士山三島東急ホテル",
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
            <span>日本名水百選・清冽リトリートステイ特集</span>
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight mb-6 leading-tight">
            日本名水百選の湧水地と名水仕込みの地酒・美肌温泉ステイ
          </h1>
          <p className="text-lg sm:text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed mb-8">
            幾重もの地層をくぐり抜け、気の遠くなるような歳月を経て湧き出づる「日本名水百選」の奇跡の水。毎分60トンの清冽な水が砂を巻き上げて噴き出す「白川水源」、北アルプスの雪解け水が広大なわさび田を潤す「安曇野」、富士山の伏流水が青く輝く東洋一の湧水「柿田川」。名水が育む採れたての旬菜、銘酒、そして名水仕込みの美肌温泉。楽天ふるさと納税の宿泊割引クーポンを駆使して、心身を清らかに潤す名水巡礼の旅へ出かけましょう。
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
