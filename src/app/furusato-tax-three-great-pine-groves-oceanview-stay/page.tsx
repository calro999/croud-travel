import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: '日本三大松原の白砂青松オーシャンビュー宿×ふるさと納税完全ガイド【2026年最新】三保の松原・虹の松原・気比の松原',
  description: '青い海と白い砂浜、幾万本もの黒松が美しく連なる日本三大松原（静岡・三保の松原、佐賀・唐津虹の松原、福井・敦賀気比の松原）。富士山を望む絶景宿や玄界灘・若狭湾の海の幸を味わう旅。楽天ふるさと納税完全活用。',
  keywords: ["日本三大松原","三保の松原","虹の松原","気比の松原","唐津シーサイドホテル","ホテルマイステイズ清水","楽天ふるさと納税"],
  alternates: {
    canonical: 'https://croud-travel.pages.dev/furusato-tax-three-great-pine-groves-oceanview-stay',
  },
  openGraph: {
    title: '日本三大松原の白砂青松オーシャンビュー宿×ふるさと納税完全ガイド【2026年最新】三保の松原・虹の松原・気比の松原',
    description: '青い海と白い砂浜、幾万本もの黒松が美しく連なる日本三大松原（静岡・三保の松原、佐賀・唐津虹の松原、福井・敦賀気比の松原）。富士山を望む絶景宿や玄界灘・若狭湾の海の幸を味わう旅。楽天ふるさと納税完全活用。',
    url: 'https://croud-travel.pages.dev/furusato-tax-three-great-pine-groves-oceanview-stay',
    siteName: '旅宿クラウド',
    type: 'article',
    locale: 'ja_JP',
  },
};

const hotels = [
  {
    "key": "pine_miho",
    "hotelNo": 56850,
    "hotelName": "ホテルマイステイズ清水",
    "hotelImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/56850/56850.jpg",
    "hotelMinCharge": 2610,
    "reviewAverage": "4.2",
    "reviewCount": 3295,
    "address": "静岡県静岡市清水区真砂町1-23",
    "access": "JR東海道線清水駅より信号無しで徒歩3分 東名清水インターよりお車で10分",
    "userReview": "フロントの親切な対応と便利な設備に感謝息子が鼻風邪でティッシュを使い切ってしまい、追加で貰いに行った時のフロントの方の対応が凄く良かったです。親切丁寧にありがとうございました。バス、トイレ…",
    "label": "静岡県静岡市ふるさと納税・世界文化遺産・富士山と三保の松原の絶景「ホテルクエスト清水」",
    "spotTitle": "静岡県静岡市ふるさと納税：三保の松原・清水港オーシャンフロント「ホテルマイステイズ清水」",
    "spotDesc": "富士山を望む三保の松原観光の拠点。駿河湾の新鮮なマグロや桜えび、地酒を楽しめるレストランや快適な客室が揃い、静岡の歴史と海の美を存分に満喫できます。",
    "affiliateUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2Fspecial%2Ffurusato%2F"
  },
  {
    "key": "pine_niji",
    "hotelNo": 52129,
    "hotelName": "唐津シーサイドホテル",
    "hotelImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/52129/52129.jpg",
    "hotelMinCharge": 10300,
    "reviewAverage": "4.6",
    "reviewCount": 2445,
    "address": "佐賀県唐津市東唐津4-182",
    "access": "ＪＲ　東唐津駅より車にて約３分",
    "userReview": "カブトムシカブトムシをオス・メスペアで頂き、息子が喜んで今も飼育しています。海は荒れていましたが、プールで沢山遊べました。ありがとう御座いました。クチコミの詳細はこちらから　https…",
    "label": "佐賀県唐津市ふるさと納税・百万本の黒松が描く緑の弧と玄界灘の絶景「虹の松原」唐津シーサイドホテル",
    "spotTitle": "佐賀県唐津市ふるさと納税：虹の松原と唐津湾を一望する極上リゾート「唐津シーサイドホテル」",
    "spotDesc": "虹の松原に隣接し、全室オーシャンビューを誇る名門リゾート。地下から湧き出る天然温泉大浴場や露天風呂、呼子のイカや佐賀牛を味わう豪華会席が特別な休日を約束します。",
    "affiliateUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2Fspecial%2Ffurusato%2F"
  },
  {
    "key": "pine_kehi",
    "hotelNo": 128494,
    "hotelName": "敦賀マンテンホテル駅前（マンテンホテルグループ）",
    "hotelImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/128494/128494.jpg",
    "hotelMinCharge": 4900,
    "reviewAverage": "4.2",
    "reviewCount": 1517,
    "address": "福井県敦賀市国広町401-4",
    "access": "ＪＲ敦賀駅西口より徒歩約１分　／　敦賀ＩＣより車で５分",
    "userReview": "駅近で便利、ビジネス利用には十分な環境旅の経由地として利用しました。当日までキャンセル無料ということで予約しました。駅から近くて良かったです。ビジネスで利用するには十分でしょうが、旅行者としては、…",
    "label": "福井県敦賀市ふるさと納税・万葉の白砂青松・気比の松原と越前若狭の海の幸「北陸福井・敦賀マンテンホテル駅前」",
    "spotTitle": "福井県敦賀市ふるさと納税：気比の松原と越前若狭の海の幸を味わう快適ステイ「敦賀マンテンホテル駅前」",
    "spotDesc": "白砂青松広がる気比の松原へアクセス良好なホテル。大浴場には高温サウナを完備し、名物越前ガニや若狭ふぐ、敦賀真鯛などの日本海グルメを存分に楽しめます。",
    "affiliateUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2Fspecial%2Ffurusato%2F"
  }
];

export default function FurusatoUpgradedPage() {
  const officialFurusatoAffUrl = 'https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2Fspecial%2Ffurusato%2F';

  return (
    <div className="min-h-screen bg-stone-900 text-stone-100 selection:bg-amber-500 selection:text-stone-950">
      {/* ヒーローヘッダー */}
      <section className="relative py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-stone-950 via-stone-900 to-stone-900 border-b border-stone-800">
        <div className="max-w-5xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs sm:text-sm font-semibold mb-6">
            <span>✨</span>
            <span>日本三大松原・白砂青松オーシャン特集</span>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-amber-100 tracking-tight leading-tight sm:leading-snug mb-6">
            日本三大松原の白砂青松オーシャンビュー宿×ふるさと納税完全ガイド
          </h1>
          <p className="text-base sm:text-lg lg:text-xl text-stone-300 max-w-3xl mx-auto leading-relaxed mb-8">
            古来より数多の歌人や絵師を魅了し、日本の美の象徴とされてきた「日本三大松原」。駿河湾越しに霊峰富士を仰ぐ「三保の松原」、唐津湾沿いに虹の弧を描く百年の松林「虹の松原」、万葉の息吹を今に伝える敦賀湾の「気比の松原」。心地よい潮風と松の香りに包まれ、夕暮れに染まる水平線を望む至福の時間。楽天ふるさと納税の宿泊割引クーポンを駆使して、日本の伝統美薫る名松原オーシャンリゾートへお出かけください。
          </p>

          {/* 公式キャンペーンCTA */}
          <div className="p-6 rounded-3xl bg-gradient-to-br from-amber-500/20 via-amber-600/10 to-transparent border border-amber-500/30 backdrop-blur max-w-2xl mx-auto shadow-2xl">
            <h2 className="text-lg sm:text-xl font-bold text-amber-200 mb-2">
              楽天ふるさと納税なら寄附額の最大30%が宿泊クーポンに！
            </h2>
            <p className="text-xs sm:text-sm text-stone-300 mb-4 leading-relaxed">
              寄附翌日には楽天トラベルで使えるクーポンが付与。有効期限はたっぷり3年間あるため、次の大型連休や記念日旅行にも安心してご活用いただけます。
            </p>
            <a
              href={officialFurusatoAffUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-2xl bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-400 hover:to-orange-400 text-stone-950 font-black text-base shadow-xl shadow-amber-500/20 hover:scale-[1.02] active:scale-[0.98] transition-all"
            >
              <span>楽天ふるさと納税 宿泊クーポンを獲得する</span>
              <span>→</span>
            </a>
          </div>
        </div>
      </section>

      {/* メリット3選 */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto border-b border-stone-800">
        <h2 className="text-2xl sm:text-3xl font-black text-amber-100 text-center mb-10">
          この特集で出会える極上の滞在体験と3つの魅力
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          <div key="01" className="p-6 rounded-2xl bg-stone-950/60 border border-stone-800">
            <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400 font-bold mb-4">
              01
            </div>
            <h3 className="text-lg font-bold text-stone-200 mb-2">
              世界遺産・富士山と白砂青松が織りなす絵画のような絶景ビュー
            </h3>
            <p className="text-xs sm:text-sm text-stone-400 leading-relaxed">
              羽衣伝説の舞台・三保の松原から望む海越しの富士山など、日本人の心の原風景を心ゆくまで眺められます。
            </p>
          </div>
          <div key="02" className="p-6 rounded-2xl bg-stone-950/60 border border-stone-800">
            <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400 font-bold mb-4">
              02
            </div>
            <h3 className="text-lg font-bold text-stone-200 mb-2">
              波静かな入江と緑豊かな松林に包まれる海辺のリゾートホテル滞在
            </h3>
            <p className="text-xs sm:text-sm text-stone-400 leading-relaxed">
              松林の散策路を歩けば潮騒と松の香りが漂い、オーシャンビュー客室から水平線を眺める優雅なひととき。
            </p>
          </div>
          <div key="03" className="p-6 rounded-2xl bg-stone-950/60 border border-stone-800">
            <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400 font-bold mb-4">
              03
            </div>
            <h3 className="text-lg font-bold text-stone-200 mb-2">
              駿河湾の生桜えび・玄界灘の呼子イカ・若狭湾の越前ガニなど最高峰の海の幸
            </h3>
            <p className="text-xs sm:text-sm text-stone-400 leading-relaxed">
              日本を代表する豊穣な海に面した松原だからこそ味わえる、水揚げされたばかりの鮮度抜群の海鮮料理を堪能できます。
            </p>
          </div>
        </div>
      </section>

      {/* 厳選ホテルリスト */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
        <div className="space-y-16">
          {hotels.map((h, idx) => (
            <div key={h.key} className="space-y-6">
              <div className="border-l-4 border-amber-500 pl-4">
                <h2 className="text-2xl sm:text-3xl font-black text-amber-200 mb-2">
                  {h.spotTitle}
                </h2>
                <p className="text-sm sm:text-base text-stone-300 leading-relaxed">
                  {h.spotDesc}
                </p>
              </div>

              <div className="rounded-3xl bg-stone-950/80 border border-stone-800 overflow-hidden shadow-2xl">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-0">
                  <div className="md:col-span-5 relative min-h-[300px] md:min-h-full bg-stone-900">
                    <Image
                      src={h.hotelImageUrl}
                      alt={h.hotelName}
                      fill
                      sizes="(max-width: 768px) 100vw, 40vw"
                      className="object-cover"
                      unoptimized
                    />
                    <div className="absolute top-3 left-3 bg-stone-900/80 backdrop-blur border border-stone-700 text-amber-400 text-xs font-bold px-3 py-1 rounded-lg">
                      厳選名宿 #{idx + 1}
                    </div>
                  </div>

                  <div className="md:col-span-7 p-6 sm:p-8 flex flex-col justify-between">
                    <div>
                      <div className="text-xs font-bold text-amber-500/90 mb-1 tracking-wider uppercase">
                        {h.label}
                      </div>
                      <h3 className="text-2xl font-black text-white mb-3 hover:text-amber-400 transition">
                        <a href={h.affiliateUrl} target="_blank" rel="noopener noreferrer">
                          {h.hotelName}
                        </a>
                      </h3>
                      <div className="flex items-center gap-3 mb-4 text-sm text-stone-400">
                        <span className="flex items-center text-amber-400 font-bold">
                          ★ {h.reviewAverage}
                        </span>
                        <span>({h.reviewCount}件の評価)</span>
                        <span className="text-amber-400 font-semibold">・ 参考最安目安: ¥{Number(h.hotelMinCharge).toLocaleString()}〜</span>
                      </div>
                      <p className="text-stone-300 text-sm mb-4 leading-relaxed bg-stone-900/80 p-4 rounded-xl border border-stone-800/80 italic">
                        「{h.userReview}」
                      </p>
                      <div className="text-xs text-stone-400 space-y-1 mb-6">
                        <p>📍 所在地: {h.address}</p>
                        <p>🚗 アクセス: {h.access}</p>
                      </div>
                    </div>

                    <div className="pt-4 border-t border-stone-800/80 flex flex-col sm:flex-row gap-3">
                      <a
                        href={h.affiliateUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 text-center bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-400 hover:to-orange-400 text-stone-950 font-black py-3 px-6 rounded-xl shadow-lg transition duration-150 text-sm"
                      >
                        楽天ふるさと納税で宿を予約する
                      </a>
                      <a
                        href={officialFurusatoAffUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 text-center bg-stone-800 hover:bg-stone-700 text-amber-200 font-bold py-3 px-6 rounded-xl border border-stone-700 transition duration-150 text-sm"
                      >
                        自治体返礼品クーポン一覧
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 利用ステップ */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto border-t border-stone-800">
        <div className="rounded-3xl bg-gradient-to-br from-amber-500/10 via-stone-900 to-stone-950 border border-amber-500/20 p-8 sm:p-12 text-center">
          <h2 className="text-2xl sm:text-3xl font-black text-amber-200 mb-4">
            ふるさと納税トラベルクーポンの簡単3ステップ
          </h2>
          <p className="text-stone-300 text-sm sm:text-base max-w-2xl mx-auto mb-10 leading-relaxed">
            寄附から割引適用まで全てオンラインで完結。実質2,000円の負担で憧れの名旅館や絶景リゾートをお得に楽しめます。
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left mb-10">
            <div className="p-6 rounded-2xl bg-stone-950/80 border border-stone-800">
              <div className="text-2xl font-black text-amber-400 mb-2">STEP 01</div>
              <h3 className="font-bold text-white mb-2">自治体に寄附する</h3>
              <p className="text-xs sm:text-sm text-stone-400 leading-relaxed">
                宿泊したい施設がある自治体を選び、楽天ふるさと納税で寄附を申し込みます。楽天ポイントも通常通り進呈されます。
              </p>
            </div>
            <div className="p-6 rounded-2xl bg-stone-950/80 border border-stone-800">
              <div className="text-2xl font-black text-amber-400 mb-2">STEP 02</div>
              <h3 className="font-bold text-white mb-2">クーポンが自動付与</h3>
              <p className="text-xs sm:text-sm text-stone-400 leading-relaxed">
                寄附完了の翌日、楽天アカウントの「マイクーポン」に寄附額に応じた宿泊割引クーポンが自動的に追加されます。
              </p>
            </div>
            <div className="p-6 rounded-2xl bg-stone-950/80 border border-stone-800">
              <div className="text-2xl font-black text-amber-400 mb-2">STEP 03</div>
              <h3 className="font-bold text-white mb-2">楽天トラベルで予約</h3>
              <p className="text-xs sm:text-sm text-stone-400 leading-relaxed">
                対象のホテル・旅館を予約する際、決済画面でクーポンを選択するだけで宿泊代金から最大30%が即座に割引されます。
              </p>
            </div>
          </div>
          <a
            href={officialFurusatoAffUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-10 py-5 rounded-2xl bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-400 hover:to-orange-400 text-stone-950 font-black text-lg shadow-xl shadow-amber-500/20 hover:scale-[1.02] active:scale-[0.98] transition-all"
          >
            <span>対象の宿泊割引クーポンを探す</span>
            <span>→</span>
          </a>
        </div>
      </section>

      {/* 相互リンク */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
        <h2 className="text-xl font-black text-amber-200 mb-6">あわせて読みたい極上ふるさと納税旅特集</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <Link
            href="/furusato-tax-three-great-scenic-coasts-stay"
            className="p-5 rounded-2xl bg-stone-950/60 border border-stone-800 hover:border-amber-500/40 transition block"
          >
            <span className="text-xs font-bold text-amber-400 block mb-1">三大絶景海岸</span>
            <span className="font-bold text-white text-sm">【日本三大名勝海岸】東尋坊・浄土ヶ浜・白良浜ステイ特集</span>
          </Link>
          <Link
            href="/furusato-tax-three-famous-waterfalls-healing-stay"
            className="p-5 rounded-2xl bg-stone-950/60 border border-stone-800 hover:border-amber-500/40 transition block"
          >
            <span className="text-xs font-bold text-amber-400 block mb-1">三大名瀑ヒーリング</span>
            <span className="font-bold text-white text-sm">【日本三大名瀑】白糸・吹割・鮎帰りの滝の癒やし湯宿特集</span>
          </Link>
          <Link
            href="/furusato-tax-three-great-hotsprings-luxury-villas-stay"
            className="p-5 rounded-2xl bg-stone-950/60 border border-stone-800 hover:border-amber-500/40 transition block"
          >
            <span className="text-xs font-bold text-amber-400 block mb-1">三大名湯の離れ</span>
            <span className="font-bold text-white text-sm">【日本三大名湯】草津・有馬・下呂の極上別邸ステイ特集</span>
          </Link>
          <Link
            href="/furusato-tax-three-great-tea-plantations-stay"
            className="p-5 rounded-2xl bg-stone-950/60 border border-stone-800 hover:border-amber-500/40 transition block"
          >
            <span className="text-xs font-bold text-amber-400 block mb-1">三大茶園テロワール</span>
            <span className="font-bold text-white text-sm">【日本三大茶園】牧之原・宇治・八女の茶香美食ステイ特集</span>
          </Link>
        </div>
      </section>
    </div>
  );
}
