import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: '【日本三大美林】青森ヒバ・秋田スギ・木曽ヒノキの香りに包まれる森林セラピー＆ウッドヴィラ温泉宿特集｜楽天ふるさと納税完全ガイド',
  description: '神仏の建築や式年遷宮を支えてきた日本の誇る銘木林「日本三大美林」（青森ヒバ・秋田スギ・木曽ヒノキ）。芳醇な木の香りに満ちた大浴場や客室、フィトンチッド溢れる森林浴で究極の深呼吸リラクゼーション。楽天ふるさと納税の宿泊割引クーポンを活用した極上ウェルネス旅。',
  keywords: '日本三大美林, 青森ヒバ, 秋田杉, 木曽檜, 森林セラピー, 不二やホテル, 男鹿温泉別邸つばき, 木曽路の宿いわや, 楽天ふるさと納税, トラベルクーポン',
  openGraph: {
    title: '【日本三大美林】青森ヒバ・秋田スギ・木曽ヒノキの香りに包まれる森林セラピー＆ウッドヴィラ温泉宿特集｜楽天ふるさと納税完全ガイド',
    description: '神仏の建築や式年遷宮を支えてきた日本の誇る銘木林「日本三大美林」（青森ヒバ・秋田スギ・木曽ヒノキ）。芳醇な木の香りに満ちた大浴場や客室、フィトンチッド溢れる森林浴で究極の深呼吸リラクゼーション。楽天ふるさと納税の宿泊割引クーポンを活用した極上ウェルネス旅。',
    url: 'https://croud-travel.pages.dev/furusato-tax-three-great-forests-wood-villa-stay',
    siteName: '楽天ふるさと納税×高級トラベルガイド',
    type: 'article',
    locale: 'ja_JP',
  },
  alternates: {
    canonical: 'https://croud-travel.pages.dev/furusato-tax-three-great-forests-wood-villa-stay',
  },
};

const hotels = [
  {
    "key": "forest_hiba",
    "hotelNo": 10728,
    "hotelName": "大鰐温泉　不二やホテル",
    "hotelImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/10728/10728.jpg",
    "hotelMinCharge": 10450,
    "reviewAverage": 4.5,
    "reviewCount": 920,
    "address": "青森県南津軽郡大鰐町蔵館川原田63",
    "access": "東北自動車道　大鰐・弘前ＩＣより約10分。　JR奥羽本線大鰐温泉駅下車　徒歩１５分",
    "userReview": "スタッフの接客と丁寧な料理に大満足!フロント、食事会場等どのスタッフさんも気持ちのよい接客でお部屋も広々として掃除が行き届き和やかな時間を過ごせましたそして、夕飯が美味しかったです!!派手…　2026-09-05 08:23:39投稿 <a href=\"https://img.travel.rakuten.co.jp/image/tr/api/kw/HTX0u/?f_hotel_no=10728\" class=\"3click\">つづきはこちら</a>",
    "label": "青森県大鰐町ふるさと納税・日本三大美林「青森ヒバ」の香りと大湯船・津軽三味線ライブ「大鰐温泉 不二やホテル」",
    "affiliateUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2Fspecial%2Ffurusato%2F"
  },
  {
    "key": "forest_sugi",
    "hotelNo": 20504,
    "hotelName": "男鹿温泉　結いの宿　別邸　つばき",
    "hotelImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/20504/20504.jpg",
    "hotelMinCharge": 17160,
    "reviewAverage": 4.58,
    "reviewCount": 484,
    "address": "秋田県男鹿市北浦湯本中里81",
    "access": "JR男鹿線「羽立駅」～お車で20分／秋田道昭和男鹿半島ＩＣ～お車で40分／秋田空港より～エアポートライナーで2時間",
    "userReview": "実演付きの夕食とスタッフの対応に満足夕飯は、鯛めしや石焼き鍋の実演があってなかなか良かったです。又、スタッフのサービスは満足出来ました。クチコミの詳細はこちらから　https://review…　2026-09-05 22:22:29投稿 <a href=\"https://img.travel.rakuten.co.jp/image/tr/api/kw/HTX0u/?f_hotel_no=20504\" class=\"3click\">つづきはこちら</a>",
    "label": "秋田県男鹿市ふるさと納税・日本三大美林「秋田杉」の美と日本海の旬魚石焼料理「男鹿温泉 結いの宿 別邸つばき」",
    "affiliateUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2Fspecial%2Ffurusato%2F"
  },
  {
    "key": "forest_hinoki",
    "hotelNo": 16778,
    "hotelName": "木曽路の宿　いわや",
    "hotelImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/16778/16778.jpg",
    "hotelMinCharge": 7700,
    "reviewAverage": 3.96,
    "reviewCount": 99,
    "address": "長野県木曽郡木曽町福島5169",
    "access": "JR木曽福島駅より徒歩10分／中央自動車道：塩尻ICより60分、中津川ICより60分",
    "userReview": "スタッフの心遣いに感謝。食事も大満足子供の体調がいまいちでレストランで夕食を食べられず...「お部屋に運んで後で食べることもできますよ」と教えていただき、お部屋に持っていくことに。娘はお風呂に入る…　2026-08-25 12:13:45投稿 <a href=\"https://img.travel.rakuten.co.jp/image/tr/api/kw/HTX0u/?f_hotel_no=16778\" class=\"3click\">つづきはこちら</a>",
    "label": "長野県木曽町ふるさと納税・伊勢神宮の式年遷宮を支える日本三大美林「木曽檜」と中山道歴史宿「木曽路の宿 いわや」",
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
            <span>日本三大美林・森林セラピーステイ特集</span>
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight mb-6 leading-tight">
            日本三大美林の木漏れ日と森林セラピー・ウッドヴィラステイ
          </h1>
          <p className="text-lg sm:text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed mb-8">
            悠久の森が育んだ生命の息吹と、圧倒的な癒やしをもたらす「日本三大美林」。抗菌力と芳醇な香気を放つ黄金の木「青森ヒバ」、美しく均整のとれた木目が薫る「秋田スギ」、伊勢神宮の御用木として尊ばれる最高峰の「木曽ヒノキ」。木肌の温もりに包まれた総ヒノキ・ヒバ風呂に浸かり、森林セラピーの澄んだ空気を胸いっぱいに吸い込む休日。楽天ふるさと納税を活用して、五感すべてが解き放たれる美林温泉ステイへご案内します。
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
