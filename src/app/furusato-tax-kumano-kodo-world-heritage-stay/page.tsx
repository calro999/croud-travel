import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: '世界遺産・熊野古道の祈りの巡礼路と名湯宿×ふるさと納税完全ガイド【2026年最新】湯の峰・那智勝浦・白浜',
  description: '千年の祈りが息づく世界遺産「紀伊山地の霊場と参詣道・熊野古道」。日本最古の湯の峰温泉つぼ湯、那智の滝と大門坂、大洞窟温泉を誇る勝浦温泉、太平洋を一望する白浜温泉。楽天ふるさと納税宿泊クーポン完全活用。',
  keywords: ["熊野古道","世界遺産","湯の峰温泉あづまや","ホテル浦島","浜千鳥の湯海舟","那智勝浦温泉","楽天ふるさと納税"],
  alternates: {
    canonical: 'https://croud-travel.pages.dev/furusato-tax-kumano-kodo-world-heritage-stay/',
  },
  openGraph: {
    title: '世界遺産・熊野古道の祈りの巡礼路と名湯宿×ふるさと納税完全ガイド【2026年最新】湯の峰・那智勝浦・白浜',
    description: '千年の祈りが息づく世界遺産「紀伊山地の霊場と参詣道・熊野古道」。日本最古の湯の峰温泉つぼ湯、那智の滝と大門坂、大洞窟温泉を誇る勝浦温泉、太平洋を一望する白浜温泉。楽天ふるさと納税宿泊クーポン完全活用。',
    url: 'https://croud-travel.pages.dev/furusato-tax-kumano-kodo-world-heritage-stay',
    siteName: '旅宿クラウド',
    type: 'article',
    locale: 'ja_JP',
  },
};

const hotels = [
  {
    "key": "kumano_yunomine",
    "hotelNo": 129554,
    "hotelName": "旅館あづまや　＜和歌山県＞",
    "hotelImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/129554/129554.jpg",
    "hotelMinCharge": 10890,
    "reviewAverage": "4.5",
    "reviewCount": 151,
    "address": "和歌山県田辺市本宮町湯峰122",
    "access": "紀伊田辺駅よりバス・タクシーで約９０分/新宮駅よりバス、タクシーで６０分「湯峰温泉」下車すぐ/南紀田辺ＩＣから車で70分",
    "userReview": "温泉街の中心で料理も温泉も素晴らしい車での利用でしたが、温泉街のほぼ中心でバス停や公衆浴場の真ん前の立地(ただし駐車場からは徒歩3分程度かかる)。温泉や料理も素晴らしく、古い建物ながら清潔に手入れ…",
    "label": "和歌山県田辺市ふるさと納税・世界遺産「つぼ湯」湧く日本最古の温泉地・熊野古道中辺路「湯の峰温泉 旅館あづまや」",
    "spotTitle": "和歌山県田辺市ふるさと納税：世界遺産つぼ湯至近・創業江戸時代の木造名門旅館「湯の峰温泉 旅館あづまや」",
    "spotDesc": "開湯1800年を誇る日本最古の温泉地・湯の峰温泉の老舗旅館。槙風呂や露天風呂、温泉蒸気を利用した蒸し風呂など、源泉の恵みを存分に生かした湯殿と紀州の郷土料理が魅力です。",
    "affiliateUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2Fspecial%2Ffurusato%2F"
  },
  {
    "key": "kumano_katsuura",
    "hotelNo": 54556,
    "hotelName": "南紀勝浦温泉　ホテル浦島",
    "hotelImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/54556/54556.jpg",
    "hotelMinCharge": 8250,
    "reviewAverage": "4.2",
    "reviewCount": 6326,
    "address": "和歌山県東牟婁郡那智勝浦町勝浦1165-2",
    "access": "ＪＲ紀勢線　紀伊勝浦駅から徒歩6分で桟橋へ。更に専用ボート又は、シャトルバスで５分　詳しくは交通案内ページをご覧ください",
    "userReview": "リニューアルで一新、来年もまた訪れたい浦島さんへは十数年前くらいから、毎年訪問しております。今年は特に、70周年でリニューアル���れているという事で楽しみにしておりました。感想は、結構落ち着…",
    "label": "和歌山県那智勝浦町ふるさと納税・大門坂と那智の滝・絶景洞窟露天風呂「南紀勝浦温泉 ホテル浦島」",
    "spotTitle": "和歌山県那智勝浦町ふるさと納税：大門坂・那智の滝巡礼拠点・天然洞窟温泉忘帰洞「南紀勝浦温泉 ホテル浦島」",
    "spotDesc": "勝浦港から専用船で渡る巨大リゾートホテル。波が打ち寄せる大洞窟温泉「忘帰洞」をはじめ、館内で多彩な温泉湯巡りが楽しめ、勝浦名物のマグロ解体ショーやバイキングが人気を集めています。",
    "affiliateUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2Fspecial%2Ffurusato%2F"
  },
  {
    "key": "kumano_kaishu",
    "hotelNo": 68224,
    "hotelName": "浜千鳥の湯　海舟（共立リゾート）",
    "hotelImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/68224/68224.jpg",
    "hotelMinCharge": 14300,
    "reviewAverage": "4.4",
    "reviewCount": 3629,
    "address": "和歌山県西牟婁郡白浜町1698-1",
    "access": "JR白浜駅より車で約15分／バスで約25分　最寄りのバス停「草原の湯」／「南紀白浜空港」より車で約7分",
    "userReview": "すべてのサービスが最高でした全サービス最高クチコミの詳細はこちらから　https://review.travel.rakuten.co.jp/hotel/voice/68224?revie…",
    "label": "和歌山県白浜町ふるさと納税・紀伊山地の霊場と参詣道巡礼の拠点・海景混浴露天「浜千鳥の湯 海舟」",
    "spotTitle": "和歌山県白浜町ふるさと納税：熊野古道紀伊路のゴール・海辺の岬に佇む絶景混浴露天「浜千鳥の湯 海舟」",
    "spotDesc": "白浜の海に突き出た岬の先端に位置する高級和風リゾート。海と一体化する混浴露天風呂「浜千鳥の湯」や客室露天風呂から沈みゆく夕日を眺め、紀州のクエや熊野牛会席を堪能できます。",
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
            <span>世界遺産熊野古道・祈りの名湯特集</span>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-amber-100 tracking-tight leading-tight sm:leading-snug mb-6">
            世界遺産・熊野古道の祈りの巡礼路と名湯宿×ふるさと納税完全ガイド
          </h1>
          <p className="text-base sm:text-lg lg:text-xl text-stone-300 max-w-3xl mx-auto leading-relaxed mb-8">
            杉木立が連なる苔むした石畳、山々を包み込む神聖な霧、そして熊野三山へと続く「熊野古道」。古より貴族から庶民まで、多くの人々が再生と救いを求めて歩んできた祈りの道です。巡礼の旅人を癒やしてきた日本最古の温泉地「湯の峰温泉」、太平洋の荒波が打ち寄せる大洞窟露天「勝浦温泉」、そして絶景オーシャンビューの「白浜温泉」。楽天ふるさと納税を活用して、心身を根底から解き放つ世界遺産の聖地巡礼温泉旅をお楽しみください。
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
              世界遺産に登録された日本最古の公衆浴場「つぼ湯」と薬湯巡り
            </h3>
            <p className="text-xs sm:text-sm text-stone-400 leading-relaxed">
              日に七回湯の色が変わると伝わる湯の峰温泉の源泉。古の巡礼者たちが身を清めた神聖な名湯に浸かれます。
            </p>
          </div>
          <div key="02" className="p-6 rounded-2xl bg-stone-950/60 border border-stone-800">
            <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400 font-bold mb-4">
              02
            </div>
            <h3 className="text-lg font-bold text-stone-200 mb-2">
              太平洋の荒波が眼前に迫る天然大洞窟露天風呂「忘帰洞」の迫力
            </h3>
            <p className="text-xs sm:text-sm text-stone-400 leading-relaxed">
              押し寄せる波の音を聞きながら、自然の洞窟の中に湧き出る硫黄泉に浸かる唯一無二の絶景入浴体験。
            </p>
          </div>
          <div key="03" className="p-6 rounded-2xl bg-stone-950/60 border border-stone-800">
            <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400 font-bold mb-4">
              03
            </div>
            <h3 className="text-lg font-bold text-stone-200 mb-2">
              勝浦港水揚げの生マグロ・熊野牛・紀州名産の梅とクエ料理
            </h3>
            <p className="text-xs sm:text-sm text-stone-400 leading-relaxed">
              日本一の生マグロ水揚げ港から届くモチモチの生本マグロや高級和牛・幻の高級魚クエを心ゆくまで味わえます。
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
