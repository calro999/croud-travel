import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: '日本三大夜桜の名所と春の宵を彩る名門ホテル×ふるさと納税完全ガイド【2026年最新】弘前・高田城・上野',
  description: '春の夜空を桜色に染め上げる日本屈指の夜桜名所「日本三大夜桜」（青森・弘前城の花筏と夜桜、新潟・高田城の四千本ぼんぼり、東京・上野恩賜公園の風情）。幻想的なライトアップと名門ホテルステイ。楽天ふるさと納税完全活用。',
  keywords: ["日本三大夜桜","弘前パークホテル","アートホテル上越","三井ガーデンホテル上野","夜桜ライトアップ","弘前公園","高田城址公園","楽天ふるさと納税"],
  alternates: {
    canonical: 'https://croud-travel.pages.dev/furusato-tax-three-great-night-cherry-blossoms-stay',
  },
  openGraph: {
    title: '日本三大夜桜の名所と春の宵を彩る名門ホテル×ふるさと納税完全ガイド【2026年最新】弘前・高田城・上野',
    description: '春の夜空を桜色に染め上げる日本屈指の夜桜名所「日本三大夜桜」（青森・弘前城の花筏と夜桜、新潟・高田城の四千本ぼんぼり、東京・上野恩賜公園の風情）。幻想的なライトアップと名門ホテルステイ。楽天ふるさと納税完全活用。',
    url: 'https://croud-travel.pages.dev/furusato-tax-three-great-night-cherry-blossoms-stay',
    siteName: '旅宿クラウド',
    type: 'article',
    locale: 'ja_JP',
  },
};

const hotels = [
  {
    "key": "sakura_hirosaki",
    "hotelNo": 14932,
    "hotelName": "弘前パークホテル",
    "hotelImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/14932/14932.jpg",
    "hotelMinCharge": 3690,
    "reviewAverage": "3.9",
    "reviewCount": 2677,
    "address": "青森県弘前市土手町126",
    "access": "JR『弘前駅』より徒歩約12分。青森空港より車で約50分",
    "userReview": "ホテルスタッフの方々に癒されました弘前駅から徒歩約15分、弘前城のある公園とJR弘前駅の中間地点にあり、ホテルの目の前が循環バスの停留所だった為、とても便利でした。ネット予約の時に和室を選んで…",
    "label": "青森県弘前市ふるさと納税・二千六百本の夜桜と濠を埋め尽くす花筏パノラマ「弘前公園」アートホテル弘前シティ",
    "spotTitle": "青森県弘前市ふるさと納税：弘前公園の夜桜と岩木山パノラマを望むシティホテル「弘前パークホテル」",
    "spotDesc": "日本屈指の桜の名所・弘前公園へアクセス至便。最上階の展望レストランからは津軽富士・岩木山を一望でき、青森の郷土料理や地酒を味わいながら夜桜散策を楽しめます。",
    "affiliateUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2Fspecial%2Ffurusato%2F"
  },
  {
    "key": "sakura_takada",
    "hotelNo": 1033,
    "hotelName": "アートホテル上越",
    "hotelImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/1033/1033.jpg",
    "hotelMinCharge": 3500,
    "reviewAverage": "4.2",
    "reviewCount": 3745,
    "address": "新潟県上越市本町5丁目1-11",
    "access": "えちごトキめき鉄道「高田駅」より徒歩3分。北陸新幹線「上越妙高駅」より2駅。上信越自動車道「上越高田IC」より15分。",
    "userReview": "新潟名物グルメが豊富で朝から大満足!朝食バイキング、新潟県の名物グルメがたくさんあって、新潟県人ですが楽しめました。おかげで朝からお腹いっぱいです~(笑)クチコミの詳細はこちらから　htt…",
    "label": "新潟県上越市ふるさと納税・四千本のぼんぼりに照らされる高田城三重櫓と夜桜「日本三大夜桜・高田城址公園」アートホテル上越",
    "spotTitle": "新潟県上越市ふるさと納税：日本三大夜桜・高田城址公園桜まつり観光の拠点「アートホテル上越」",
    "spotDesc": "高田城址公園の四千本夜桜まつり会場へ好アクセス。シティホテルの快適性と、上越の旬の日本海の魚介や新潟県産コシヒカリを味わう本格ディナーが人気を集めています。",
    "affiliateUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2Fspecial%2Ffurusato%2F"
  },
  {
    "key": "sakura_ueno",
    "hotelNo": 107870,
    "hotelName": "三井ガーデンホテル上野",
    "hotelImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/107870/107870.jpg",
    "hotelMinCharge": 9135,
    "reviewAverage": "4.1",
    "reviewCount": 1588,
    "address": "東京都台東区　東上野3-19-7",
    "access": "JR上野駅浅草口より徒歩2分／東京メトロ銀座線・日比谷線1番口より徒歩1分／京成上野駅より徒歩6分",
    "userReview": "上野駅近で観光に便利、パンダフロアも可愛いJR上野駅から近く都内観光にとても便利でした。部屋は清潔でベッドサイドに物が置けるのも良かったです。シャワーの水圧が弱めだったけど、込み合う時間帯…",
    "label": "東京都台東区ふるさと納税・寛永寺の昔から江戸庶民に愛され続ける桜の名所「上野恩賜公園」三井ガーデンホテル上野",
    "spotTitle": "東京都台東区ふるさと納税：江戸庶民が愛した桜の名所・上野恩賜公園至近の洗練ホテル「三井ガーデンホテル上野」",
    "spotDesc": "上野恩賜公園や不忍池の桜並木まで徒歩圏内。上野駅前の便利なロケーションにあり、パンダをモチーフにした客室や東京の下町散策・美術館巡りの拠点として最適です。",
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
            <span>日本三大夜桜・春宵絶景ステイ特集</span>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-amber-100 tracking-tight leading-tight sm:leading-snug mb-6">
            日本三大夜桜の名所と春の宵を彩る名門ホテル×ふるさと納税完全ガイド
          </h1>
          <p className="text-base sm:text-lg lg:text-xl text-stone-300 max-w-3xl mx-auto leading-relaxed mb-8">
            闇夜に浮かび上がる幾千本もの桜と、水面に映り込む淡紅色の光のコントラスト。「日本三大夜桜」と称される弘前公園、高田城址公園、上野恩賜公園は、息をのむほど幽玄でドラマティックな春の絶景を誇ります。濠を埋め尽くす桜の花筏、ぼんぼりに照らされた三重櫓、そして江戸情緒漂う上野の桜並木。夜風に舞う花吹雪を堪能した後は、洗練されたホテルで美酒とともに余韻に浸る贅沢。楽天ふるさと納税の宿泊クーポンを活用して、一生の思い出に残る夜桜旅行へ出かけましょう。
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
              水面に映る三重櫓と四千本のぼんぼりが織りなす幻想的なライトアップ
            </h3>
            <p className="text-xs sm:text-sm text-stone-400 leading-relaxed">
              夜の濠や池に映り込む満開の桜並木。息をのむほど優美な春宵のパノラマを心ゆくまで散策できます。
            </p>
          </div>
          <div key="02" className="p-6 rounded-2xl bg-stone-950/60 border border-stone-800">
            <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400 font-bold mb-4">
              02
            </div>
            <h3 className="text-lg font-bold text-stone-200 mb-2">
              濠をピンク色に染め上げる圧巻の花筏（はないかだ）パノラマ鑑賞
            </h3>
            <p className="text-xs sm:text-sm text-stone-400 leading-relaxed">
              散り初めの時期にしか見られない、桜の花びらで埋め尽くされたピンクの絨毯は感動的な美しさです。
            </p>
          </div>
          <div key="03" className="p-6 rounded-2xl bg-stone-950/60 border border-stone-800">
            <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400 font-bold mb-4">
              03
            </div>
            <h3 className="text-lg font-bold text-stone-200 mb-2">
              夜桜散策の拠点に最適な名門ホテルで味わう春の味覚ディナー
            </h3>
            <p className="text-xs sm:text-sm text-stone-400 leading-relaxed">
              夜の冷え込みを気にせず夜桜を楽しめる好立地ホテル。地元の春の旬菜を取り入れた美食が旅を彩ります。
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
