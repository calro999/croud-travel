import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: '【日本三大砂丘】鳥取砂丘・遠州大砂丘・吹上浜の壮大な風紋と夕日オーシャンビュー宿特集｜楽天ふるさと納税で訪れる海の砂漠リゾート',
  description: '海風が織りなす神秘的な風紋と、見渡す限りの砂と海のコントラスト「日本三大砂丘」（鳥取砂丘・遠州砂丘・吹上浜）。東シナ海や日本海に沈む夕日を望むオーシャンビュー露天風呂と新鮮な海の幸。楽天ふるさと納税の宿泊割引クーポンを利用して巡る絶景沿岸ステイ。',
  keywords: '日本三大砂丘, 鳥取砂丘, 遠州大砂丘, 吹上浜, オーシャンビュー温泉, 夕日絶景宿, 楽天ふるさと納税, 温泉旅行',
  openGraph: {
    title: '【日本三大砂丘】鳥取砂丘・遠州大砂丘・吹上浜の壮大な風紋と夕日オーシャンビュー宿特集｜楽天ふるさと納税で訪れる海の砂漠リゾート',
    description: '海風が織りなす神秘的な風紋と、見渡す限りの砂と海のコントラスト「日本三大砂丘」（鳥取砂丘・遠州砂丘・吹上浜）。東シナ海や日本海に沈む夕日を望むオーシャンビュー露天風呂と新鮮な海の幸。楽天ふるさと納税の宿泊割引クーポンを利用して巡る絶景沿岸ステイ。',
    url: 'https://croud-travel.pages.dev/furusato-tax-three-great-dunes-oceanview-stay',
    siteName: '楽天ふるさと納税×高級トラベルガイド',
    type: 'article',
    locale: 'ja_JP',
  },
  alternates: {
    canonical: 'https://croud-travel.pages.dev/furusato-tax-three-great-dunes-oceanview-stay',
  },
};

const hotels = [
  {
    "key": "dune_tottori",
    "hotelNo": 68150,
    "hotelName": "岩井温泉　岩井屋",
    "hotelImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/68150/68150.jpg",
    "hotelMinCharge": 13200,
    "reviewAverage": 4.52,
    "reviewCount": 191,
    "address": "鳥取県岩美郡岩美町岩井544",
    "access": "岩美駅より日交バス≪岩井温泉行き≫約１０分、岩井温泉下車後徒歩すぐ",
    "userReview": "民藝の温かみと居心地の良さに大満足とにかく雰囲気が素敵すぎます。ロビー、お部屋、温泉、どこにいても居心地がいいです。民藝品の家具や小物、食器等が、ひとつひとつあたたかみがあってとてもお洒落。夕飯は…　2026-08-10 21:09:40投稿 <a href=\"https://img.travel.rakuten.co.jp/image/tr/api/kw/HTX0u/?f_hotel_no=68150\" class=\"3click\">つづきはこちら</a>",
    "label": "鳥取県鳥取市・岩美町ふるさと納税・日本屈指の風紋パノラマ・鳥取砂丘と山陰最古の秘湯「岩井温泉 岩井屋」",
    "affiliateUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2Fspecial%2Ffurusato%2F"
  },
  {
    "key": "dune_enshu",
    "hotelNo": 181060,
    "hotelName": "御前崎グランドホテル",
    "hotelImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/181060/181060.jpg",
    "hotelMinCharge": 6000,
    "reviewAverage": 2,
    "reviewCount": 16,
    "address": "静岡県御前崎市御前崎1412-1",
    "access": "掛川駅／静岡空港よりお車にて約４５分",
    "userReview": "絶景のロケーションと心温まるおもてなし、旬の美食に大変満足いたしました。",
    "label": "静岡県御前崎市ふるさと納税・遠州灘の雄大な波と風紋の丘・オーシャンフロント絶景「御前崎グランドホテル」",
    "affiliateUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2Fspecial%2Ffurusato%2F"
  },
  {
    "key": "dune_fukiage",
    "hotelNo": 54146,
    "hotelName": "いせえび荘",
    "hotelImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/54146/54146.jpg",
    "hotelMinCharge": 8800,
    "reviewAverage": 4.72,
    "reviewCount": 239,
    "address": "鹿児島県南九州市頴娃町別府5202",
    "access": "JR水成川駅より徒歩約20分（車で約2分）、南薩縦貫道・南九州知覧ICより車で約20分／水成川駅より送迎有（事前要予約）",
    "userReview": "波の音に癒やされ、食事と接客も最高波の音がしてほっとゆっくり出来る宿でした。食事は最高でした。接客も丁寧で皆さん感じの良い方々でした。クチコミの詳細はこちらから　https://revie…　2026-09-03 16:41:35投稿 <a href=\"https://img.travel.rakuten.co.jp/image/tr/api/kw/HTX0u/?f_hotel_no=54146\" class=\"3click\">つづきはこちら</a>",
    "label": "鹿児島県南さつま市・南九州市ふるさと納税・東シナ海に沈む夕日と日本三大砂丘吹上浜・開聞岳「いせえび荘」",
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
            <span>日本三大砂丘・風紋絶景ステイ特集</span>
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight mb-6 leading-tight">
            日本三大砂丘の壮大な風紋と夕日オーシャンビュー宿ステイ
          </h1>
          <p className="text-lg sm:text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed mb-8">
            日本にいながらにして砂漠のような神秘的な情景と、どこまでも続く水平線が融合する「日本三大砂丘」。風が砂地に描き出す一瞬の芸術「風紋」、黄金色に輝く夕暮れ時のマジックアワー。砂丘散策の後は、海辺の温泉宿で波音を聞きながら名湯に浸かり、獲れたての伊勢海老や旬魚を味わう贅沢。楽天ふるさと納税を活用して、記憶に深く刻まれる砂丘と海のリゾートへ出かけましょう。
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
