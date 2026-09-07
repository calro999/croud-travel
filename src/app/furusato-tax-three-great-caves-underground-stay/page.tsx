import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: '【日本三大鍾乳洞】龍泉洞・秋芳洞・龍河洞の神秘の地底美と山麓名湯宿特集｜楽天ふるさと納税で叶える地下ワンダーランド旅',
  description: '何億年もの歳月が創り上げた日本三大鍾乳洞（岩手・龍泉洞、山口・秋芳洞、高知・龍河洞）。ドラゴンブルーの地底湖や壮大な石灰華の造形美に息を呑み、山麓の名湯温泉で癒やされる旅。楽天ふるさと納税の宿泊割引クーポンを活用して賢く贅沢に巡る完全ガイド。',
  keywords: '日本三大鍾乳洞, 龍泉洞, 秋芳洞, 龍河洞, 地底湖温泉, 湯田温泉, 楽天ふるさと納税, トラベルクーポン',
  openGraph: {
    title: '【日本三大鍾乳洞】龍泉洞・秋芳洞・龍河洞の神秘の地底美と山麓名湯宿特集｜楽天ふるさと納税で叶える地下ワンダーランド旅',
    description: '何億年もの歳月が創り上げた日本三大鍾乳洞（岩手・龍泉洞、山口・秋芳洞、高知・龍河洞）。ドラゴンブルーの地底湖や壮大な石灰華の造形美に息を呑み、山麓の名湯温泉で癒やされる旅。楽天ふるさと納税の宿泊割引クーポンを活用して賢く贅沢に巡る完全ガイド。',
    url: 'https://croud-travel.pages.dev/furusato-tax-three-great-caves-underground-stay',
    siteName: '楽天ふるさと納税×高級トラベルガイド',
    type: 'article',
    locale: 'ja_JP',
  },
  alternates: {
    canonical: 'https://croud-travel.pages.dev/furusato-tax-three-great-caves-underground-stay',
  },
};

const hotels = [
  {
    "key": "cave_ryusendo",
    "hotelNo": 14560,
    "hotelName": "岩泉龍泉洞ホテル　龍のすみか（旧龍泉洞温泉ホテル）",
    "hotelImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/14560/14560.jpg",
    "hotelMinCharge": 6719,
    "reviewAverage": 4.02,
    "reviewCount": 377,
    "address": "岩手県下閉伊郡岩泉町岩泉府金48",
    "access": "お車：三陸道路　岩泉龍泉洞IC下車20分　　　　JR早坂高原線　龍泉洞温泉ホテル前下車1分",
    "userReview": "ゆっくり食事ができ、岩泉ヨーグルトが絶品夕食、朝食ともバイキングではなくゆっくりと食事が出来ました。また、岩泉ヨーグルトは滑らかでとても美味しかったです!クチコミの詳細はこちらから　h…　2026-09-02 17:08:25投稿 <a href=\"https://img.travel.rakuten.co.jp/image/tr/api/kw/HTX0u/?f_hotel_no=14560\" class=\"3click\">つづきはこちら</a>",
    "label": "岩手県岩泉町ふるさと納税・世界屈指の透明度を誇るドラゴンブルーの地底湖「龍泉洞」龍泉洞温泉ホテル",
    "affiliateUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2Fspecial%2Ffurusato%2F"
  },
  {
    "key": "cave_akiyoshido",
    "hotelNo": 129984,
    "hotelName": "湯田温泉　名勝　山水園",
    "hotelImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/129984/129984.jpg",
    "hotelMinCharge": 19800,
    "reviewAverage": 4.31,
    "reviewCount": 188,
    "address": "山口県山口市緑町4-60",
    "access": "湯田温泉駅よりお車にて5分／中国自動車道：山口ICより約20分／中国自動車道：小郡ICより約15分",
    "userReview": "丁寧なおもてなしでしたお部屋は、文化財ということで、趣きがありました。古いけど、必要な設備はきちんとあり、清潔にされてました。温泉も気持ちよかったです。肌もツルツルになりました。お抹茶と外…　2026-08-14 23:27:15投稿 <a href=\"https://img.travel.rakuten.co.jp/image/tr/api/kw/HTX0u/?f_hotel_no=129984\" class=\"3click\">つづきはこちら</a>",
    "label": "山口県美祢市・山口市ふるさと納税・東洋最大の鍾乳洞と百枚皿「秋芳洞」湯田温泉名勝山水園",
    "affiliateUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2Fspecial%2Ffurusato%2F"
  },
  {
    "key": "cave_ryugado",
    "hotelNo": 13721,
    "hotelName": "リゾートホテル海辺の果樹園",
    "hotelImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/13721/13721.jpg",
    "hotelMinCharge": 6400,
    "reviewAverage": 4.07,
    "reviewCount": 662,
    "address": "高知県香南市夜須町手結山506-1",
    "access": "高知空港より車１５分／高知東部自動車道高知龍馬空港ICから１５分／夜須駅より車で3分",
    "userReview": "プールと豪華なお子様ランチに大満足1994年開業ですので古い建物であることは当然で、十分だと思いました。30年以上たっていますからね。子どもたちはプールで泳げて大満足でしたし、部屋の入り口で靴を脱…　2026-09-04 20:45:51投稿 <a href=\"https://img.travel.rakuten.co.jp/image/tr/api/kw/HTX0u/?f_hotel_no=13721\" class=\"3click\">つづきはこちら</a>",
    "label": "高知県香美市・香南市ふるさと納税・神の壺が眠る悠久の鍾乳洞「龍河洞」リゾートホテル海辺の果樹園",
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
            <span>日本三大鍾乳洞・地底美名湯ステイ特集</span>
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight mb-6 leading-tight">
            日本三大鍾乳洞の神秘の地底美と山麓名湯ステイ
          </h1>
          <p className="text-lg sm:text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed mb-8">
            地上とは隔絶された静寂と、無数の鍾乳石が織りなす神秘の世界「日本三大鍾乳洞」。世界有数の透明度を誇るドラゴンブルーの地底湖「龍泉洞」、東洋屈指のスケールを誇る千畳敷と百枚皿「秋芳洞」、神の壺が悠久の時を刻む「龍河洞」。大自然のアートを体感した後は、山麓の名湯温泉に浸かり地元の旬魚・美酒に酔いしれる贅沢。楽天ふるさと納税のトラベルクーポンを利用して、実質2,000円の自己負担で実現する地下探検＆名湯ステイへご案内します。
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
