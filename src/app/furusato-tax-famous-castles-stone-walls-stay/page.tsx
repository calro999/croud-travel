import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: '日本百名城の石垣美と天守を望む城下町名門ホテル×ふるさと納税完全ガイド【2026年最新】松本城・姫路城・熊本城',
  description: '武士たちの誇りと築城技術の極致「日本屈指の名城」（長野・国宝松本城、兵庫・世界遺産姫路城、熊本・難攻不落の武者返し熊本城）。漆黒と白亜の対比、そびえ立つ天守閣を望む優雅な滞在。楽天ふるさと納税完全活用。',
  keywords: ["日本百名城","松本ホテル花月","ホテルモントレ姫路","熊本ホテルキャッスル","国宝松本城","世界遺産姫路城","熊本城","楽天ふるさと納税"],
  alternates: {
    canonical: 'https://croud-travel.pages.dev/furusato-tax-famous-castles-stone-walls-stay',
  },
  openGraph: {
    title: '日本百名城の石垣美と天守を望む城下町名門ホテル×ふるさと納税完全ガイド【2026年最新】松本城・姫路城・熊本城',
    description: '武士たちの誇りと築城技術の極致「日本屈指の名城」（長野・国宝松本城、兵庫・世界遺産姫路城、熊本・難攻不落の武者返し熊本城）。漆黒と白亜の対比、そびえ立つ天守閣を望む優雅な滞在。楽天ふるさと納税完全活用。',
    url: 'https://croud-travel.pages.dev/furusato-tax-famous-castles-stone-walls-stay',
    siteName: '旅宿クラウド',
    type: 'article',
    locale: 'ja_JP',
  },
};

const hotels = [
  {
    "key": "castle_matsumoto",
    "hotelNo": 15154,
    "hotelName": "松本ホテル花月",
    "hotelImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/15154/15154.jpg",
    "hotelMinCharge": 10098,
    "reviewAverage": "4.5",
    "reviewCount": 3704,
    "address": "長野県松本市大手4-8-9",
    "access": "松本駅送迎あり◆要予約／松本ＢＴより「信州大学行バス」で約８分上土下車／ＪＲ松本駅より徒歩１５分／松本ＩＣより車で１０分",
    "userReview": "アップグレードに感謝、食事とワインも最高一泊2食付ひとり旅で利用しました民藝の気を感じたくて、本当は別館の民藝感濃いお部屋をチョイスしたかったのですが、お財布と相談して本館シングルを選びました…",
    "label": "長野県松本市ふるさと納税・国宝五重天守と北アルプスを望む城下町の名門クラシックホテル「松本ホテル花月」",
    "spotTitle": "長野県松本市ふるさと納税：国宝松本城へ徒歩圏内・明治創業のクラシックホテル「松本ホテル花月」",
    "spotDesc": "国宝松本城まで徒歩約5分の好立地。松本民芸家具に囲まれたノスタルジックな館内と、名水で沸かした大浴場、信州の恵みを味わう「ながのテロワール会席」が旅人を魅了します。",
    "affiliateUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2Fspecial%2Ffurusato%2F"
  },
  {
    "key": "castle_himeji",
    "hotelNo": 163181,
    "hotelName": "ホテルモントレ姫路",
    "hotelImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/163181/163181.jpg",
    "hotelMinCharge": 5400,
    "reviewAverage": "4.5",
    "reviewCount": 2611,
    "address": "兵庫県姫路市駅前町60",
    "access": "ＪＲ姫路駅より直結",
    "userReview": "トレインビューに子供が大喜びトレインビューのお部屋に宿泊しました。新幹線や在来線、貨物列車まで見られて子供がとても喜んで、朝も夜もずっと電車に夢中でした。ホテルもとても綺麗で、清掃も行き届いており…",
    "label": "兵庫県姫路市ふるさと納税・世界遺産・白鷺が羽を広げたような美しき国宝天守「姫路城」ホテルモントレ姫路",
    "spotTitle": "兵庫県姫路市ふるさと納税：世界遺産姫路城を望むアールデコ調の上質ホテル「ホテルモントレ姫路」",
    "spotDesc": "姫路駅直結、世界遺産・白鷺城（姫路城）観光の拠点ホテル。サウナ付き温浴施設「トリニテ」を備え、アールデコ様式の優美な空間と播磨の旬魚・神戸牛を取り入れた美食を楽しめます。",
    "affiliateUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2Fspecial%2Ffurusato%2F"
  },
  {
    "key": "castle_kumamoto",
    "hotelNo": 841,
    "hotelName": "熊本ホテルキャッスル",
    "hotelImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/841/841.jpg",
    "hotelMinCharge": 4000,
    "reviewAverage": "4.4",
    "reviewCount": 1709,
    "address": "熊本県熊本市中央区城東町4-2",
    "access": "JR鹿児島本線『熊本駅』から車で約10分／市電『通町筋』下車徒歩約3分／九州自動車道『熊本IC』より車で約40分",
    "userReview": "部屋から熊本城のライトアップと朝日を堪能部屋から熊本城が眺められ、夜はライトアップ、朝は朝日に照らされ、雄大なお城を間近で見ることができました。クチコミの詳細はこちらから　https://re…",
    "label": "熊本県熊本市ふるさと納税・武者返しの壮大な石垣と復興の天守閣を一望する迎賓館「熊本ホテルキャッスル」",
    "spotTitle": "熊本県熊本市ふるさと納税：熊本城天守と壮大な石垣を正面に仰ぐ迎賓館「熊本ホテルキャッスル」",
    "spotDesc": "熊本城を間近に望む老舗シティホテル。皇室やVIPを迎えてきた格式高いサービスと、名城天守を望む客室、伝統の四川料理や熊本郷土料理が特別なステイを約束します。",
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
            <span>名城天守・城下町クラシック特集</span>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-amber-100 tracking-tight leading-tight sm:leading-snug mb-6">
            日本百名城の石垣美と天守を望む城下町名門ホテル×ふるさと納税完全ガイド
          </h1>
          <p className="text-base sm:text-lg lg:text-xl text-stone-300 max-w-3xl mx-auto leading-relaxed mb-8">
            威風堂々とそびえ立つ天守閣と、何段にも積み上げられた壮大な武者返しの石垣。戦国から泰平の世へと移り変わる歴史を見届けてきた名城たち。北アルプスを借景とする漆黒の国宝「松本城」、白鷺が羽を広げたような優美さを誇る世界遺産「姫路城」、そして見事な復興を遂げた不落の巨城「熊本城」。城下町の歴史ある町並みを散策し、格式高い名門ホテルで贅沢な美食を味わうひととき。楽天ふるさと納税を活用して、日本の城郭美を愛でる極上の旅へ出かけましょう。
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
              現存天守の木造建築や国宝・世界遺産に指定された圧倒的な美の鑑賞
            </h3>
            <p className="text-xs sm:text-sm text-stone-400 leading-relaxed">
              戦火や天災を逃れて現存する天守の急階段を登り、武士たちの息遣いや緻密な築城技術を間近で体感できます。
            </p>
          </div>
          <div key="02" className="p-6 rounded-2xl bg-stone-950/60 border border-stone-800">
            <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400 font-bold mb-4">
              02
            </div>
            <h3 className="text-lg font-bold text-stone-200 mb-2">
              ライトアップされた天守閣を客室や展望レストランから望む優雅な夜
            </h3>
            <p className="text-xs sm:text-sm text-stone-400 leading-relaxed">
              夜の闇に浮かび上がる白い姫路城や漆黒の松本城。ライトアップされた名城をプライベートに鑑賞する贅沢。
            </p>
          </div>
          <div key="03" className="p-6 rounded-2xl bg-stone-950/60 border border-stone-800">
            <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400 font-bold mb-4">
              03
            </div>
            <h3 className="text-lg font-bold text-stone-200 mb-2">
              城下町に受け継がれる老舗料亭の伝統料理やブランド和牛会席
            </h3>
            <p className="text-xs sm:text-sm text-stone-400 leading-relaxed">
              信州牛・神戸ビーフ・あか牛など、城下町の名門ホテルで味わう極上のグルメが旅を華やかに演出します。
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
