import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: '【日本三大渓流】奥入瀬・三段峡・御岳の清冽な自然を愛でる渓谷美露天風呂ステイ特集｜楽天ふるさと納税で叶える清流リゾート旅',
  description: '日本三大渓流（青森・奥入瀬渓流、広島・三段峡、東京・御岳渓谷）の息をのむ大自然美を五感で堪能する旅。清流のせせらぎに癒やされる露天風呂や旬の渓流美食を満喫できる名宿を厳選。楽天ふるさと納税の宿泊割引クーポンを活用して賢く贅沢に巡る完全ガイド。',
  keywords: '日本三大渓流, 奥入瀬渓流, 三段峡, 御岳渓谷, 渓流露天風呂, 楽天ふるさと納税, 温泉旅行, 清流リゾート',
  openGraph: {
    title: '【日本三大渓流】奥入瀬・三段峡・御岳の清冽な自然を愛でる渓谷美露天風呂ステイ特集｜楽天ふるさと納税で叶える清流リゾート旅',
    description: '日本三大渓流（青森・奥入瀬渓流、広島・三段峡、東京・御岳渓谷）の息をのむ大自然美を五感で堪能する旅。清流のせせらぎに癒やされる露天風呂や旬の渓流美食を満喫できる名宿を厳選。楽天ふるさと納税の宿泊割引クーポンを活用して賢く贅沢に巡る完全ガイド。',
    url: 'https://croud-travel.pages.dev/furusato-tax-three-great-valleys-riverside-stay',
    siteName: '楽天ふるさと納税×高級トラベルガイド',
    type: 'article',
    locale: 'ja_JP',
  },
  alternates: {
    canonical: 'https://croud-travel.pages.dev/furusato-tax-three-great-valleys-riverside-stay',
  },
};

const hotels = [
  {
    "key": "stream_oirase",
    "hotelNo": 40434,
    "hotelName": "奥入瀬渓流ホテル　ｂｙ　星野リゾート",
    "hotelImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/40434/40434.jpg",
    "hotelMinCharge": 27500,
    "reviewAverage": 4.36,
    "reviewCount": 1267,
    "address": "青森県十和田市奥瀬栃久保231",
    "access": "東北新幹線　八戸駅／無料送迎バス（要予約）、青森駅／有料送迎バス（要予約）、ＪＲバス　十和田湖行き、焼山下車",
    "userReview": "期待していた分、全体的に普通で残念な印象初めて星野リゾートのホテルを利用するので楽しみにしていましたが、案外普通だったなという印象です。大浴場も特にこれといった特色もなく、1日目は露天風呂に枯…　2026-08-26 08:10:07投稿 <a href=\"https://img.travel.rakuten.co.jp/image/tr/api/kw/HTX0u/?f_hotel_no=40434\" class=\"3click\">つづきはこちら</a>",
    "label": "青森県十和田市ふるさと納税・原生林と無数の滝が織りなす清冽な渓流美「奥入瀬渓流」星野リゾート奥入瀬渓流ホテル",
    "affiliateUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2Fspecial%2Ffurusato%2F"
  },
  {
    "key": "stream_sandankyo",
    "hotelNo": 141106,
    "hotelName": "筒賀温泉　グリーンスパつつが",
    "hotelImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/141106/141106.jpg",
    "hotelMinCharge": 5830,
    "reviewAverage": 4.06,
    "reviewCount": 80,
    "address": "広島県山県郡安芸太田町中筒賀才之峠280",
    "access": "中国自動車道戸河内ＩＣから約５分",
    "userReview": "年季とノスタルジー、高台からの絶景少し年季が入っていますが、その分ノスタルジーを感じられました。掃除は行き届いていましたし、高台にあるので部屋や大浴場からの景色はとても良かったです。クチコミの…　2026-04-01 09:47:57投稿 <a href=\"https://img.travel.rakuten.co.jp/image/tr/api/kw/HTX0u/?f_hotel_no=141106\" class=\"3click\">つづきはこちら</a>",
    "label": "広島県安芸太田町ふるさと納税・国の特別名勝・三段峡の玄関口「温井温泉 温井スプリングス」",
    "affiliateUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2Fspecial%2Ffurusato%2F"
  },
  {
    "key": "stream_mitake",
    "hotelNo": 134902,
    "hotelName": "東京　奥多摩温泉　おくたま路　（２０２６年７月リニューアルオープン）",
    "hotelImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/134902/134902.jpg",
    "hotelMinCharge": 19950,
    "reviewAverage": 4.42,
    "reviewCount": 411,
    "address": "東京都青梅市二俣尾2-371",
    "access": "JR青梅線 石神前駅より徒歩にて10分（二俣尾駅下車 徒歩約15分）　送迎：送りのみ定期便運行（チェックイン時要予約）",
    "userReview": "リニューアルで綺麗、オールインクルーシブを満喫リニューアルしたてで、とても綺麗でした。ロビー近くのお部屋でしたので、オールインクルーシブを満喫できました。朝食時、ご飯、お味噌汁の列に並んだ時間…　2026-09-05 05:48:57投稿 <a href=\"https://img.travel.rakuten.co.jp/image/tr/api/kw/HTX0u/?f_hotel_no=134902\" class=\"3click\">つづきはこちら</a>",
    "label": "東京都青梅市ふるさと納税・御岳渓谷の清流と奥多摩の山並みを望む「亀の井ホテル 青梅」",
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
            <span>日本三大渓流・清流美露天特集</span>
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight mb-6 leading-tight">
            日本三大渓流の清澄を愛でる渓谷美露天風呂ステイ
          </h1>
          <p className="text-lg sm:text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed mb-8">
            エメラルドグリーンに輝く清流、木々の隙間から差し込む木漏れ日、そして幾重にも重なる奇岩と水飛沫。日本を代表する三大渓流（奥入瀬渓流・三段峡・御岳渓谷）は、日常の喧騒を忘れさせ、心身を根底から浄化してくれる至高のネイチャーリゾートです。本特集では、各渓流の魅力を間近で体感できる厳選の宿をご紹介。楽天ふるさと納税のトラベルクーポンを利用して、実質2,000円の自己負担で実現する清流ラグジュアリーステイへ出かけましょう。
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
