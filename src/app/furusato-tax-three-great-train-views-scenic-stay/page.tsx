import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: '【日本三大車窓】篠ノ井線姨捨・肥薩線矢岳越え・旧狩勝峠の絶景パノラマと名湯ステイ特集｜楽天ふるさと納税で旅する鉄道紀行',
  description: '鉄道ファンのみならず旅情をそそる日本三大車窓（長野・篠ノ井線姨捨の善光寺平、熊本・宮崎肥薩線矢岳越えの霧島連峰、北海道・旧狩勝峠の十勝平野）。車窓から望む絶景パノラマと、戸倉上山田温泉・人吉温泉・サホロリゾートの名湯。楽天ふるさと納税を活用した至高の鉄道ステイ。',
  keywords: '日本三大車窓, 姨捨駅, 肥薩線矢岳越え, 狩勝峠, 戸倉上山田温泉, 人吉温泉, サホロリゾート, 楽天ふるさと納税, 鉄道温泉旅',
  openGraph: {
    title: '【日本三大車窓】篠ノ井線姨捨・肥薩線矢岳越え・旧狩勝峠の絶景パノラマと名湯ステイ特集｜楽天ふるさと納税で旅する鉄道紀行',
    description: '鉄道ファンのみならず旅情をそそる日本三大車窓（長野・篠ノ井線姨捨の善光寺平、熊本・宮崎肥薩線矢岳越えの霧島連峰、北海道・旧狩勝峠の十勝平野）。車窓から望む絶景パノラマと、戸倉上山田温泉・人吉温泉・サホロリゾートの名湯。楽天ふるさと納税を活用した至高の鉄道ステイ。',
    url: 'https://croud-travel.pages.dev/furusato-tax-three-great-train-views-scenic-stay',
    siteName: '楽天ふるさと納税×高級トラベルガイド',
    type: 'article',
    locale: 'ja_JP',
  },
  alternates: {
    canonical: 'https://croud-travel.pages.dev/furusato-tax-three-great-train-views-scenic-stay',
  },
};

const hotels = [
  {
    "key": "train_obasute",
    "hotelNo": 37465,
    "hotelName": "戸倉上山田温泉　リバーサイド上田館（伊東園ホテルズ）",
    "hotelImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/37465/37465.jpg",
    "hotelMinCharge": 6248,
    "reviewAverage": 3.94,
    "reviewCount": 980,
    "address": "長野県千曲市戸倉温泉3055",
    "access": "北陸新幹線上田駅乗換しなの鉄道　戸倉駅よりタクシーで５分、上信越自動車道坂城ＩＣよりＲ１８号線経由１５分",
    "userReview": "ゆったり過ごせてバイキングも快適絶妙な希望で、想像以上にゆったりできました。バイキングも品数と通路等の距離が確保されており、ストレスを感じずにいただけました。クチコミの詳細はこちらから　htt…　2026-09-04 07:14:51投稿 <a href=\"https://img.travel.rakuten.co.jp/image/tr/api/kw/HTX0u/?f_hotel_no=37465\" class=\"3click\">つづきはこちら</a>",
    "label": "長野県千曲市ふるさと納税・善光寺平と千曲川を一望する日本三大車窓「篠ノ井線・姨捨」戸倉上山田温泉ホテル亀屋本店",
    "affiliateUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2Fspecial%2Ffurusato%2F"
  },
  {
    "key": "train_hisatsu",
    "hotelNo": 14764,
    "hotelName": "人吉温泉　人吉旅館",
    "hotelImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/14764/14764.jpg",
    "hotelMinCharge": 19100,
    "reviewAverage": 4.38,
    "reviewCount": 373,
    "address": "熊本県人吉市上青井町160",
    "access": "ＪＲ人吉駅より徒歩５分／九州自動車道人吉ＩＣより１０分 ※「カーナビ」目的地を「青井阿蘇神社」に設定してお越しください。",
    "userReview": "歴史ある建物と温泉、おもてなしに大満足!歴史ある建物目当で宿泊しました。眼にも舌にも美味しいお料理、トロトロの温泉、ステキなおもてなしとあげればキリがないほど大満足!!!地震で大変なタイミングでし…　2026-08-11 21:21:45投稿 <a href=\"https://img.travel.rakuten.co.jp/image/tr/api/kw/HTX0u/?f_hotel_no=14764\" class=\"3click\">つづきはこちら</a>",
    "label": "熊本県人吉市ふるさと納税・霧島連峰のパノラマを越える矢岳越え「肥薩線」登録有形文化財・人吉温泉人吉旅館",
    "affiliateUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2Fspecial%2Ffurusato%2F"
  },
  {
    "key": "train_karikachi",
    "hotelNo": 10773,
    "hotelName": "サホロリゾートホテル",
    "hotelImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/10773/10773.jpg",
    "hotelMinCharge": 9900,
    "reviewAverage": 3.4,
    "reviewCount": 293,
    "address": "北海道上川郡新得町字新内西5線148番地5",
    "access": "ＪＲ石勝線新得駅から車で約１５分",
    "userReview": "絶景のロケーションと心温まるおもてなし、旬の美食に大変満足いたしました。",
    "label": "北海道新得町ふるさと納税・十勝平野の大パノラマを見渡す旧狩勝峠「日本三大車窓」十勝サホロリゾート",
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
            <span>日本三大車窓・絶景パノラマ鉄道ステイ特集</span>
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight mb-6 leading-tight">
            日本三大車窓を望む絶景パノラマと名湯ステイ
          </h1>
          <p className="text-lg sm:text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed mb-8">
            列車が峠を越えた瞬間、目の前に突如として広がる息をのむ大パノラマ。「日本三大車窓」と称賛される千曲川と棚田の夜景が広がる「姨捨」、えびの高原と霧島連峰を望む「矢岳越え」、どこまでも続く地平線「狩勝峠」。鉄道の旅情と四季折々の雄大なランドスケープに酔いしれ、名湯に浸かる休日は大人の至福そのもの。楽天ふるさと納税を活用して、記憶に刻まれる絶景車窓と温泉リゾートの旅へ出かけましょう。
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
