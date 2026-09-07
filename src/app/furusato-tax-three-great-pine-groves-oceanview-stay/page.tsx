import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: '【日本三大松原】三保の松原・虹の松原・気比の松原の白砂青松オーシャンビュー宿特集｜楽天ふるさと納税トラベルクーポン完全活用',
  description: '青い海と白い砂浜、幾万本もの黒松が美しく連なる日本三大松原（静岡・三保の松原、佐賀・唐津虹の松原、福井・敦賀気比の松原）。富士山を望む絶景宿や玄界灘・若狭湾の海の幸を味わい尽くす旅。楽天ふるさと納税を活用したお得で心洗われる沿岸旅行術を徹底解説。',
  keywords: '日本三大松原, 三保の松原, 虹の松原, 気比の松原, オーシャンビューホテル, 唐津シーサイドホテル, 楽天ふるさと納税, トラベルクーポン',
  openGraph: {
    title: '【日本三大松原】三保の松原・虹の松原・気比の松原の白砂青松オーシャンビュー宿特集｜楽天ふるさと納税トラベルクーポン完全活用',
    description: '青い海と白い砂浜、幾万本もの黒松が美しく連なる日本三大松原（静岡・三保の松原、佐賀・唐津虹の松原、福井・敦賀気比の松原）。富士山を望む絶景宿や玄界灘・若狭湾の海の幸を味わい尽くす旅。楽天ふるさと納税を活用したお得で心洗われる沿岸旅行術を徹底解説。',
    url: 'https://croud-travel.pages.dev/furusato-tax-three-great-pine-groves-oceanview-stay',
    siteName: '楽天ふるさと納税×高級トラベルガイド',
    type: 'article',
    locale: 'ja_JP',
  },
  alternates: {
    canonical: 'https://croud-travel.pages.dev/furusato-tax-three-great-pine-groves-oceanview-stay',
  },
};

const hotels = [
  {
    "key": "pine_miho",
    "hotelNo": 56850,
    "hotelName": "ホテルマイステイズ清水",
    "hotelImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/56850/56850.jpg",
    "hotelMinCharge": 2610,
    "reviewAverage": 4.15,
    "reviewCount": 3295,
    "address": "静岡県静岡市清水区真砂町1-23",
    "access": "JR東海道線清水駅より信号無しで徒歩3分 東名清水インターよりお車で10分",
    "userReview": "フロントの親切な対応と便利な設備に感謝息子が鼻風邪でティッシュを使い切ってしまい、追加で貰いに行った時のフロントの方の対応が凄く良かったです。親切丁寧にありがとうございました。バス、トイレ…　2026-08-31 12:35:32投稿 <a href=\"https://img.travel.rakuten.co.jp/image/tr/api/kw/HTX0u/?f_hotel_no=56850\" class=\"3click\">つづきはこちら</a>",
    "label": "静岡県静岡市ふるさと納税・世界文化遺産・富士山と三保の松原の絶景「ホテルクエスト清水」",
    "affiliateUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2Fspecial%2Ffurusato%2F"
  },
  {
    "key": "pine_niji",
    "hotelNo": 52129,
    "hotelName": "唐津シーサイドホテル",
    "hotelImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/52129/52129.jpg",
    "hotelMinCharge": 10300,
    "reviewAverage": 4.6,
    "reviewCount": 2445,
    "address": "佐賀県唐津市東唐津4-182",
    "access": "ＪＲ　東唐津駅より車にて約３分",
    "userReview": "カブトムシカブトムシをオス・メスペアで頂き、息子が喜んで今も飼育しています。海は荒れていましたが、プールで沢山遊べました。ありがとう御座いました。クチコミの詳細はこちらから　https…　2026-09-05 17:07:23投稿 <a href=\"https://img.travel.rakuten.co.jp/image/tr/api/kw/HTX0u/?f_hotel_no=52129\" class=\"3click\">つづきはこちら</a>",
    "label": "佐賀県唐津市ふるさと納税・百万本の黒松が描く緑の弧と玄界灘の絶景「虹の松原」唐津シーサイドホテル",
    "affiliateUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2Fspecial%2Ffurusato%2F"
  },
  {
    "key": "pine_kehi",
    "hotelNo": 128494,
    "hotelName": "敦賀マンテンホテル駅前（マンテンホテルグループ）",
    "hotelImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/128494/128494.jpg",
    "hotelMinCharge": 4900,
    "reviewAverage": 4.2,
    "reviewCount": 1517,
    "address": "福井県敦賀市国広町401-4",
    "access": "ＪＲ敦賀駅西口より徒歩約１分　／　敦賀ＩＣより車で５分",
    "userReview": "駅近で便利、ビジネス利用には十分な環境旅の経由地として利用しました。当日までキャンセル無料ということで予約しました。駅から近くて良かったです。ビジネスで利用するには十分でしょうが、旅行者としては、…　2026-08-31 10:31:24投稿 <a href=\"https://img.travel.rakuten.co.jp/image/tr/api/kw/HTX0u/?f_hotel_no=128494\" class=\"3click\">つづきはこちら</a>",
    "label": "福井県敦賀市ふるさと納税・万葉の白砂青松・気比の松原と越前若狭の海の幸「北陸福井・敦賀マンテンホテル駅前」",
    "affiliateUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2Fspecial%2Ffurusato%2F"
  }
];

export default function FurusatoRound54Page() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-800">
      {/* Hero Header */}
      <header className="relative bg-gradient-to-r from-slate-950 via-indigo-950 to-blue-950 text-white py-20 px-4 sm:px-6 lg:px-8 shadow-2xl">
        <div className="max-w-5xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-indigo-500/20 border border-indigo-400/40 px-4 py-1.5 rounded-full text-indigo-300 text-sm font-semibold mb-6">
            <span>✨</span>
            <span>日本三大松原・白砂青松オーシャンステイ特集</span>
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight mb-6 leading-tight">
            日本三大松原の白砂青松オーシャンビュー宿ステイ
          </h1>
          <p className="text-lg sm:text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed mb-8">
            古来より数多の歌人や絵師を魅了し、日本の美の象徴とされてきた「日本三大松原」。駿河湾越しに霊峰富士を仰ぐ「三保の松原」、唐津湾沿いに虹の弧を描く百年の松林「虹の松原」、万葉の息吹を今に伝える敦賀湾の「気比の松原」。心地よい潮風と松の香りに包まれ、夕暮れに染まる水平線を望む至福の時間。楽天ふるさと納税の宿泊割引クーポンを駆使して、日本の伝統美薫る名松原オーシャンリゾートへお出かけください。
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
            <span className="text-indigo-600">🌿</span>
            <span>なぜ今、ふるさと納税で巡る日本の歴史景観・鉄道旅なのか？</span>
          </h2>
          <p className="text-slate-700 leading-relaxed mb-4">
            全国各地の自治体が発行する「楽天トラベルクーポン返礼品」は、寄付額の最大30%相当が旅行代金から割引される極めて還元率の高い返礼品です。翌年の住民税・所得税の控除対象となるため、実質2,000円の自己負担で憧れの城下町老舗宿や絶景パノラマリゾートに宿泊することができます。
          </p>
          <p className="text-slate-700 leading-relaxed">
            寄付後即座にマイクーポンへ付与され、予約時に1クリックで適用可能。本特集で厳選した名宿はいずれも各エリア屈指の自然遺産・歴史浪漫とおもてなしを誇り、五感を解き放つ特別な休日を約束してくれます。
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
                  <div className="absolute top-4 left-4 bg-indigo-950/80 backdrop-blur-md text-indigo-300 font-bold px-3 py-1 rounded-lg text-sm border border-indigo-500/30">
                    STAGE 0{idx + 1}
                  </div>
                </div>
                <div className="md:col-span-7 p-6 sm:p-8 flex flex-col justify-between">
                  <div>
                    <div className="text-xs font-bold text-indigo-700 mb-1 tracking-wider uppercase">
                      {h.label}
                    </div>
                    <h3 className="text-2xl font-black text-slate-900 mb-3 hover:text-indigo-700 transition">
                      <a href={h.affiliateUrl} target="_blank" rel="noopener noreferrer">
                        {h.hotelName}
                      </a>
                    </h3>
                    <div className="flex items-center gap-3 mb-4 text-sm text-slate-600">
                      <span className="flex items-center text-amber-500 font-bold">
                        ★ {h.reviewAverage.toFixed(1)}
                      </span>
                      <span className="text-slate-400">({h.reviewCount}件の評価)</span>
                      <span className="text-indigo-700 font-semibold">・ 参考目安: ¥{h.hotelMinCharge.toLocaleString()}〜</span>
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
                      className="flex-1 text-center bg-gradient-to-r from-indigo-600 to-blue-700 hover:from-indigo-700 hover:to-blue-800 text-white font-bold py-3 px-6 rounded-xl shadow-md transition duration-150 text-sm"
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
        <section className="bg-gradient-to-br from-slate-900 to-indigo-950 text-white rounded-3xl p-8 shadow-xl mb-12">
          <h2 className="text-2xl font-bold mb-6 text-center text-indigo-300">
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
              href="/furusato-tax-three-great-rivers-riverside-stay"
              className="block p-4 rounded-xl bg-slate-50 hover:bg-indigo-50 border border-slate-200 transition"
            >
              <span className="text-xs font-bold text-indigo-700 block mb-1">三大河川名湯</span>
              <span className="font-semibold text-slate-900 text-sm">【日本三大河川】利根川・筑後川・吉野川のせせらぎ宿特集</span>
            </Link>
            <Link
              href="/furusato-tax-three-great-karsts-highland-stay"
              className="block p-4 rounded-xl bg-slate-50 hover:bg-indigo-50 border border-slate-200 transition"
            >
              <span className="text-xs font-bold text-indigo-700 block mb-1">三大カルスト天空リゾート</span>
              <span className="font-semibold text-slate-900 text-sm">【日本三大カルスト】秋吉台・四国カルスト・平尾台特集</span>
            </Link>
            <Link
              href="/furusato-tax-three-great-wagyu-beef-luxury-stay"
              className="block p-4 rounded-xl bg-slate-50 hover:bg-indigo-50 border border-slate-200 transition"
            >
              <span className="text-xs font-bold text-indigo-700 block mb-1">三大和牛ガストロノミー</span>
              <span className="font-semibold text-slate-900 text-sm">【日本三大銘牛】松阪牛・神戸牛・米沢牛の名湯贅沢ステイ</span>
            </Link>
            <Link
              href="/furusato-tax-three-great-dunes-oceanview-stay"
              className="block p-4 rounded-xl bg-slate-50 hover:bg-indigo-50 border border-slate-200 transition"
            >
              <span className="text-xs font-bold text-indigo-700 block mb-1">三大砂丘風紋絶景</span>
              <span className="font-semibold text-slate-900 text-sm">【日本三大砂丘】鳥取砂丘・遠州砂丘・吹上浜ステイ特集</span>
            </Link>
          </div>
        </section>
      </main>
    </div>
  );
}
