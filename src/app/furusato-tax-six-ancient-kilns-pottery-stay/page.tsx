import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: '日本六古窯の里を巡る陶芸美と作家の器で味わう名旅館×ふるさと納税完全ガイド【2026年最新】備前・信楽・丹波立杭',
  description: '中世から窯の火が途絶えることなく続く日本屈指のやきものの里「日本六古窯」（岡山・備前焼、滋賀・信楽焼、兵庫・丹波焼）。登り窯のぬくもりと作家の器で味わう極上会席料理。楽天ふるさと納税宿泊クーポン完全活用。',
  keywords: ["日本六古窯","備前ホテル陶","信楽ホテルレイクヴィラ","丹波篠山近又","備前焼","信楽焼","丹波立杭焼","楽天ふるさと納税"],
  alternates: {
    canonical: 'https://croud-travel.pages.dev/furusato-tax-six-ancient-kilns-pottery-stay',
  },
  openGraph: {
    title: '日本六古窯の里を巡る陶芸美と作家の器で味わう名旅館×ふるさと納税完全ガイド【2026年最新】備前・信楽・丹波立杭',
    description: '中世から窯の火が途絶えることなく続く日本屈指のやきものの里「日本六古窯」（岡山・備前焼、滋賀・信楽焼、兵庫・丹波焼）。登り窯のぬくもりと作家の器で味わう極上会席料理。楽天ふるさと納税宿泊クーポン完全活用。',
    url: 'https://croud-travel.pages.dev/furusato-tax-six-ancient-kilns-pottery-stay',
    siteName: '旅宿クラウド',
    type: 'article',
    locale: 'ja_JP',
  },
};

const hotels = [
  {
    "key": "kiln_bizen",
    "hotelNo": 188209,
    "hotelName": "備前ホテル陶",
    "hotelImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/188209/188209.jpg",
    "hotelMinCharge": 6270,
    "reviewAverage": "3.5",
    "reviewCount": 5,
    "address": "岡山県備前市伊部1774-1",
    "access": "ＪＲ 赤穂線　伊部駅 から徒歩約５分、ＪＲ 岡山駅から車で約５０分",
    "userReview": "絶景のロケーションと心温まるおもてなし、旬の美食に大変満足いたしました。素晴らしい滞在となりました。",
    "label": "岡山県備前市・瀬戸内市ふるさと納税・千年の土と炎の芸術「日本六古窯・備前焼」の里と瀬戸内オーシャンビュー「ホテルリマーニ」",
    "spotTitle": "岡山県備前市ふるさと納税：千年の土と炎・備前焼の街伊部に佇むアートホテル「備前ホテル 陶（TOU）」",
    "spotDesc": "備前焼作家の作品が館内随所に飾られたデザインホテル。客室のカップや調度品にも備前焼が贅沢に使われ、伊部の窯元巡りや瀬戸内の美味を楽しむ拠点として人気を集めています。",
    "affiliateUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2Fspecial%2Ffurusato%2F"
  },
  {
    "key": "kiln_shigaraki",
    "hotelNo": 31159,
    "hotelName": "ホテル　レイクヴィラ",
    "hotelImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/31159/31159.jpg",
    "hotelMinCharge": 21450,
    "reviewAverage": "4.5",
    "reviewCount": 333,
    "address": "滋賀県甲賀市信楽町多羅尾1",
    "access": "ＪＲ伊賀上野駅から送迎有り（要事前予約3日前迄11:00～17：00  20分/新名神信楽ICより35分",
    "userReview": "もう20年近く毎年夏にロッジを利用しているが、室内は清潔で手入れが行き届いており、係りの皆さんのホスピタリティにも満足している。温泉、食事とも素晴らしく私はイチオシにしたい宿だと思っている。…",
    "label": "滋賀県甲賀市ふるさと納税・登り窯のぬくもりとタヌキのふるさと「信楽焼」信楽温泉ホテルレイクヴィラ",
    "spotTitle": "滋賀県甲賀市ふるさと納税：信楽焼の里・緑豊かな高原スパリゾート「信楽温泉 ホテル レイクヴィラ」",
    "spotDesc": "信楽の広大な丘陵地に位置するスパリゾート。天然ラドン温泉の大浴場や露天風呂、信楽焼のタヌキやアート作品に囲まれながら、近江牛や地元の旬菜を取り入れた会席を満喫できます。",
    "affiliateUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2Fspecial%2Ffurusato%2F"
  },
  {
    "key": "kiln_tanba",
    "hotelNo": 8534,
    "hotelName": "丹波篠山　近又",
    "hotelImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/8534/8534.jpg",
    "hotelMinCharge": 29000,
    "reviewAverage": "4.4",
    "reviewCount": 88,
    "address": "兵庫県丹波篠山市二階町81",
    "access": "舞鶴若狭自動車道「丹南篠山口I.C」より3km/JR福知山線「篠山口」駅よりバス約15分",
    "userReview": "篠山の由緒ある旅館400年の老舗旅館。篠山城に近く一番にぎやかな通りに位置しており、歴史ある街歩きを楽しめました。夕食のボタン鍋はしっ地元のお野菜たくさんで、しっかり味噌味でしたが胃にももたれずと…",
    "label": "兵庫県丹波篠山市ふるさと納税・平安末期から続く丹波焼（立杭焼）の里と丹波篠山ぼたん鍋「料理旅館 近又」",
    "spotTitle": "兵庫県丹波篠山市ふるさと納税：丹波立杭焼の器で味わう元祖ぼたん鍋の老舗料亭「丹波篠山 料理旅館 近又」",
    "spotDesc": "創業四百余年、国の登録有形文化財に指定された丹波篠山屈指の名舗料亭。丹波焼の器に美しく盛られた特選ぼたん鍋や丹波黒豆、松茸など、丹波篠山が誇る至高の味覚を堪能できます。",
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
            <span>日本六古窯・陶芸美食ステイ特集</span>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-amber-100 tracking-tight leading-tight sm:leading-snug mb-6">
            日本六古窯の里を巡る陶芸美と作家の器で味わう名旅館×ふるさと納税完全ガイド
          </h1>
          <p className="text-base sm:text-lg lg:text-xl text-stone-300 max-w-3xl mx-auto leading-relaxed mb-8">
            日本古来の陶磁器文化を今に伝える「日本六古窯」。釉薬を使わず土と炎の力だけで焼き締める素朴で力強い「備前焼」、温かみのある緋色とタヌキの置物で知られる「信楽焼」、八百余年の歴史と灰釉の美しさを誇る「丹波焼（立杭焼）」。陶芸作家の器に美しく盛り付けられた旬の美食をいただき、登り窯の煙がたなびく里山温泉宿で過ごすひととき。楽天ふるさと納税の宿泊クーポンを活用して、日本のものづくり文化に浸る贅沢な旅をお楽しみください。
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
              陶芸作家の一点ものの器でいただく目にも鮮やかな旬の日本料理
            </h3>
            <p className="text-xs sm:text-sm text-stone-400 leading-relaxed">
              料理と器の調和を楽しむ日本の美意識。素朴ながら力強い焼き締めの器が、素材本来の旨味を引き立てます。
            </p>
          </div>
          <div key="02" className="p-6 rounded-2xl bg-stone-950/60 border border-stone-800">
            <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400 font-bold mb-4">
              02
            </div>
            <h3 className="text-lg font-bold text-stone-200 mb-2">
              登り窯の煙突が立ち並ぶノスタルジックな窯元通りの散策と陶芸体験
            </h3>
            <p className="text-xs sm:text-sm text-stone-400 leading-relaxed">
              歴史ある工房を訪ねて作家と語り合い、自分だけのオリジナル器を作る体験プログラムも充実しています。
            </p>
          </div>
          <div key="03" className="p-6 rounded-2xl bg-stone-950/60 border border-stone-800">
            <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400 font-bold mb-4">
              03
            </div>
            <h3 className="text-lg font-bold text-stone-200 mb-2">
              里山の自然に抱かれた静かな温泉宿で心穏やかに過ごすおこもり時間
            </h3>
            <p className="text-xs sm:text-sm text-stone-400 leading-relaxed">
              都会の喧騒から離れたやきものの里。鳥のさえずりと澄んだ空気に包まれ、心豊かな休息が得られます。
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
