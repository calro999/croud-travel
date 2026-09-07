import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: '【日本三大河川】利根川・筑後川・吉野川の雄大な流れを望むリバーサイド名湯宿特集｜楽天ふるさと納税で叶える清流温泉旅',
  description: '坂東太郎（利根川）・筑紫次郎（筑後川）・四国三郎（吉野川）と称される日本三大河川の雄大な流域美とせせらぎに癒やされる旅。水上温泉、筑後川温泉、大歩危峡の絶景露天風呂を厳選。楽天ふるさと納税の宿泊割引クーポンを活用して賢く贅沢に巡る完全ガイド。',
  keywords: '日本三大河川, 利根川, 筑後川, 吉野川, リバーサイド温泉, 水上温泉, 大歩危峡, 楽天ふるさと納税, トラベルクーポン',
  openGraph: {
    title: '【日本三大河川】利根川・筑後川・吉野川の雄大な流れを望むリバーサイド名湯宿特集｜楽天ふるさと納税で叶える清流温泉旅',
    description: '坂東太郎（利根川）・筑紫次郎（筑後川）・四国三郎（吉野川）と称される日本三大河川の雄大な流域美とせせらぎに癒やされる旅。水上温泉、筑後川温泉、大歩危峡の絶景露天風呂を厳選。楽天ふるさと納税の宿泊割引クーポンを活用して賢く贅沢に巡る完全ガイド。',
    url: 'https://croud-travel.pages.dev/furusato-tax-three-great-rivers-riverside-stay',
    siteName: '楽天ふるさと納税×高級トラベルガイド',
    type: 'article',
    locale: 'ja_JP',
  },
  alternates: {
    canonical: 'https://croud-travel.pages.dev/furusato-tax-three-great-rivers-riverside-stay',
  },
};

const hotels = [
  {
    "key": "river_tone",
    "hotelNo": 9290,
    "hotelName": "大江戸温泉物語Ｐｒｅｍｉｕｍ　松乃井（旧：水上温泉　源泉湯の宿　松乃井）（２０２６年８月７日開業）",
    "hotelImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/9290/9290.jpg",
    "hotelMinCharge": 14500,
    "reviewAverage": 4.09,
    "reviewCount": 3774,
    "address": "群馬県利根郡みなかみ町湯原551",
    "access": "関越道水上ＩＣより車５分、ＪＲ上越線水上駅より徒歩１５分。",
    "userReview": "プレミアム化で以前より質が低下し残念松乃井は3度目の利用ですが、プレミアムになってガッカリです。チェックインの行列がいつになってもなくならない。部屋には、15時にならないと入れなく、待合のラウ…　2026-09-05 14:37:41投稿 <a href=\"https://img.travel.rakuten.co.jp/image/tr/api/kw/HTX0u/?f_hotel_no=9290\" class=\"3click\">つづきはこちら</a>",
    "label": "群馬県みなかみ町ふるさと納税・坂東太郎「利根川」源流のせせらぎと四つの源泉巡り「水上温泉 源泉湯の宿松乃井」",
    "affiliateUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2Fspecial%2Ffurusato%2F"
  },
  {
    "key": "river_chikugo",
    "hotelNo": 78128,
    "hotelName": "筑後川温泉　清乃屋",
    "hotelImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/78128/78128.jpg",
    "hotelMinCharge": 7150,
    "reviewAverage": 4.35,
    "reviewCount": 721,
    "address": "福岡県うきは市浮羽町古川1099-3",
    "access": "大分自動車道　杷木ICより車で5分　久大本線　筑後大石駅よりお車にて５分",
    "userReview": "夕食は絶品だが朝食や設備に改善の余地あり久しぶりのリピ。リノベーションしてあった。外国の方が案内から配膳親切に接客。部屋は、露天風呂付きだったが源泉が熱いのかすぐ入れず温度調整は、セルフな…　2026-09-03 23:33:07投稿 <a href=\"https://img.travel.rakuten.co.jp/image/tr/api/kw/HTX0u/?f_hotel_no=78128\" class=\"3click\">つづきはこちら</a>",
    "label": "福岡県うきは市ふるさと納税・筑紫次郎「筑後川」の優美な流れと美肌の自噴温泉「筑後川温泉 清乃屋」",
    "affiliateUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2Fspecial%2Ffurusato%2F"
  },
  {
    "key": "river_yoshino",
    "hotelNo": 53066,
    "hotelName": "峡谷の湯宿　大歩危峡まんなか",
    "hotelImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/53066/53066.jpg",
    "hotelMinCharge": 7500,
    "reviewAverage": 4.59,
    "reviewCount": 1884,
    "address": "徳島県三好市山城町西宇1644-1",
    "access": "大歩危駅より車で5分(徒歩20分)ご宿泊のお客様は送迎有（要予約）井川池田IC・大豊ICより各約30分　高知空港が最寄り",
    "userReview": "予想以上こういった立地のお宿は、実際行ってみると古さを感じるところが多くありますが、こちらは清潔感もあり、アメニティも豊富だったので、予想以上でした。お料理も美味しく、とても満足です。クチコミ…　2026-09-02 08:31:41投稿 <a href=\"https://img.travel.rakuten.co.jp/image/tr/api/kw/HTX0u/?f_hotel_no=53066\" class=\"3click\">つづきはこちら</a>",
    "label": "徳島県三好市ふるさと納税・四国三郎「吉野川」激流の渓谷美を眼下に望む露天風呂「大歩危峡まんなか」",
    "affiliateUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2Fspecial%2Ffurusato%2F"
  }
];

export default function FurusatoRound53Page() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-800">
      {/* Hero Header */}
      <header className="relative bg-gradient-to-r from-blue-950 via-teal-950 to-slate-900 text-white py-20 px-4 sm:px-6 lg:px-8 shadow-2xl">
        <div className="max-w-5xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-teal-500/20 border border-teal-400/40 px-4 py-1.5 rounded-full text-teal-300 text-sm font-semibold mb-6">
            <span>✨</span>
            <span>日本三大河川・水辺の名湯ステイ特集</span>
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight mb-6 leading-tight">
            日本三大河川の雄大な流れを望むリバーサイド名湯ステイ
          </h1>
          <p className="text-lg sm:text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed mb-8">
            古来より日本の風土と文化を育んできた三大河川「坂東太郎・利根川」「筑紫次郎・筑後川」「四国三郎・吉野川」。滔々と流れる大河のせせらぎやダイナミックな峡谷を望む露天風呂は、日々の喧騒を洗い流してくれる格別の癒やし空間です。本特集では、大河のほとりに佇む屈指の名旅館・リゾートを厳選。楽天ふるさと納税のトラベルクーポンを利用して、実質2,000円の自己負担で実現する極上リバーサイドステイへご案内します。
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
            <span>なぜ今、ふるさと納税で巡る日本の名所旅なのか？</span>
          </h2>
          <p className="text-slate-700 leading-relaxed mb-4">
            全国各地の自治体が発行する「楽天トラベルクーポン返礼品」は、寄付額の最大30%相当が旅行代金から割引される極めて還元率の高い返礼品です。翌年の住民税・所得税の控除対象となるため、実質2,000円の自己負担で憧れの老舗料亭旅館や絶景リゾートに宿泊することができます。
          </p>
          <p className="text-slate-700 leading-relaxed">
            寄付後即座にマイクーポンへ付与され、予約時に1クリックで適用可能。本特集で厳選した名宿はいずれも各エリア屈指の自然景観・歴史的風土とおもてなしを誇り、五感を解き放つ特別なひとときを約束してくれます。
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
                      className="flex-1 text-center bg-gradient-to-r from-teal-600 to-blue-700 hover:from-teal-700 hover:to-blue-800 text-white font-bold py-3 px-6 rounded-xl shadow-md transition duration-150 text-sm"
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
              href="/furusato-tax-three-great-valleys-riverside-stay"
              className="block p-4 rounded-xl bg-slate-50 hover:bg-teal-50 border border-slate-200 transition"
            >
              <span className="text-xs font-bold text-teal-700 block mb-1">三大渓流露天風呂</span>
              <span className="font-semibold text-slate-900 text-sm">【日本三大渓流】奥入瀬・三段峡・御岳の清流美特集</span>
            </Link>
            <Link
              href="/furusato-tax-three-great-scenic-wonders-stay"
              className="block p-4 rounded-xl bg-slate-50 hover:bg-teal-50 border border-slate-200 transition"
            >
              <span className="text-xs font-bold text-teal-700 block mb-1">三大奇勝岩壁美</span>
              <span className="font-semibold text-slate-900 text-sm">【日本三大奇勝】妙義山・耶馬渓・寒霞渓ステイ特集</span>
            </Link>
            <Link
              href="/furusato-tax-three-sacred-mountains-stay"
              className="block p-4 rounded-xl bg-slate-50 hover:bg-teal-50 border border-slate-200 transition"
            >
              <span className="text-xs font-bold text-teal-700 block mb-1">三大霊峰雲海ステイ</span>
              <span className="font-semibold text-slate-900 text-sm">【日本三大霊峰】富士山・立山・白山の聖地温泉特集</span>
            </Link>
            <Link
              href="/furusato-tax-top100-hidden-paradise-stay"
              className="block p-4 rounded-xl bg-slate-50 hover:bg-teal-50 border border-slate-200 transition"
            >
              <span className="text-xs font-bold text-teal-700 block mb-1">秘境百選の隠れ宿</span>
              <span className="font-semibold text-slate-900 text-sm">【秘境百選】祖谷・高千穂・秋山郷の桃源郷特集</span>
            </Link>
          </div>
        </section>
      </main>
    </div>
  );
}
