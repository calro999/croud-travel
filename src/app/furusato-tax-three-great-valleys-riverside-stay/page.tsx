import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: '日本三大渓流の清澄を愛でる渓谷美露天風呂宿×ふるさと納税完全ガイド【2026年最新】奥入瀬・三段峡・御岳の絶景宿',
  description: 'エメラルドグリーンに輝く清流と幾重にも重なる奇岩美！青森「奥入瀬渓流」、広島「三段峡」、東京「御岳渓谷」の日本三大渓流を巡る旅。清流のせせらぎを間近に感じる露天風呂と山川の旬グルメを楽天ふるさと納税宿泊割引クーポンでお得に楽しむ完全ガイド。',
  keywords: ["日本三大渓流","奥入瀬渓流ホテル","三段峡温泉","おくたま路","渓流露天風呂","楽天ふるさと納税","清流リゾート"],
  alternates: {
    canonical: 'https://croud-travel.pages.dev/furusato-tax-three-great-valleys-riverside-stay/',
  },
  openGraph: {
    title: '日本三大渓流の清澄を愛でる渓谷美露天風呂宿×ふるさと納税完全ガイド【2026年最新】奥入瀬・三段峡・御岳の絶景宿',
    description: 'エメラルドグリーンに輝く清流と幾重にも重なる奇岩美！青森「奥入瀬渓流」、広島「三段峡」、東京「御岳渓谷」の日本三大渓流を巡る旅。清流のせせらぎを間近に感じる露天風呂と山川の旬グルメを楽天ふるさと納税宿泊割引クーポンでお得に楽しむ完全ガイド。',
    url: 'https://croud-travel.pages.dev/furusato-tax-three-great-valleys-riverside-stay',
    siteName: '旅宿クラウド',
    type: 'article',
    locale: 'ja_JP',
  },
};

const hotels = [
  {
    "key": "stream_oirase",
    "hotelNo": 40434,
    "hotelName": "奥入瀬渓流ホテル　ｂｙ　星野リゾート",
    "hotelImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/40434/40434.jpg",
    "hotelMinCharge": 27500,
    "reviewAverage": "4.4",
    "reviewCount": 1267,
    "address": "青森県十和田市奥瀬栃久保231",
    "access": "東北新幹線　八戸駅／無料送迎バス（要予約）、青森駅／有料送迎バス（要予約）、ＪＲバス　十和田湖行き、焼山下車",
    "userReview": "期待していた分、全体的に普通で残念な印象初めて星野リゾートのホテルを利用するので楽しみにしていましたが、案外普通だったなという印象です。大浴場も特にこれといった特色もなく、1日目は露天風呂に枯…",
    "label": "青森県十和田市ふるさと納税・原生林と無数の滝が織りなす清冽な渓流美「奥入瀬渓流」星野リゾート奥入瀬渓流ホテル",
    "spotTitle": "青森県十和田市ふるさと納税：奥入瀬渓流のほとりに唯一建つリゾート「星野リゾート 奥入瀬渓流ホテル」",
    "spotDesc": "奥入瀬渓流沿いに佇む唯一のリゾートホテル。岡本太郎作の大暖炉が印象的なラウンジや、渓流のせせらぎを間近に感じる露天風呂「渓流露天風呂」など、大自然と調和した贅沢な滞在が叶います。",
    "affiliateUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2Fspecial%2Ffurusato%2F"
  },
  {
    "key": "stream_sandankyo",
    "hotelNo": 141106,
    "hotelName": "筒賀温泉　グリーンスパつつが",
    "hotelImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/141106/141106.jpg",
    "hotelMinCharge": 5830,
    "reviewAverage": "4.1",
    "reviewCount": 80,
    "address": "広島県山県郡安芸太田町中筒賀才之峠280",
    "access": "中国自動車道戸河内ＩＣから約５分",
    "userReview": "年季とノスタルジー、高台からの絶景少し年季が入っていますが、その分ノスタルジーを感じられました。掃除は行き届いていましたし、高台にあるので部屋や大浴場からの景色はとても良かったです。クチコミの…",
    "label": "広島県安芸太田町ふるさと納税・国の特別名勝・三段峡の玄関口「温井温泉 温井スプリングス」",
    "spotTitle": "広島県安芸太田町ふるさと納税：国の特別名勝・三段峡観光の拠点「筒賀温泉 グリーンスパつつが」",
    "spotDesc": "西中国山地国定公園の特別名勝・三段峡の豊かな自然に囲まれた温泉宿。四季折々の山菜料理や地元食材を使用した和食会席とともに、肌に優しい天然ラドン温泉で心ゆくまで癒やされます。",
    "affiliateUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2Fspecial%2Ffurusato%2F"
  },
  {
    "key": "stream_mitake",
    "hotelNo": 134902,
    "hotelName": "東京　奥多摩温泉　おくたま路　（２０２６年７月リニューアルオープン）",
    "hotelImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/134902/134902.jpg",
    "hotelMinCharge": 19950,
    "reviewAverage": "4.4",
    "reviewCount": 411,
    "address": "東京都青梅市二俣尾2-371",
    "access": "JR青梅線 石神前駅より徒歩にて10分（二俣尾駅下車 徒歩約15分）　送迎：送りのみ定期便運行（チェックイン時要予約）",
    "userReview": "リニューアルで綺麗、オールインクルーシブを満喫リニューアルしたてで、とても綺麗でした。ロビー近くのお部屋でしたので、オールインクルーシブを満喫できました。朝食時、ご飯、お味噌汁の列に並んだ時間…",
    "label": "東京都青梅市ふるさと納税・御岳渓谷の清流と奥多摩の山並みを望む「亀の井ホテル 青梅」",
    "spotTitle": "東京都青梅市ふるさと納税：多摩川の清流と巨岩を望むリバーサイド名宿「東京 奥多摩温泉 おくたま路」",
    "spotDesc": "御岳渓谷の清流を見下ろす静寂のロケーション。2026年夏のリニューアルによりさらに快適性を高めた客室と、多摩川のせせらぎを聴く温泉大浴場、奥多摩の恵みを味わう会席料理が好評です。",
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
            <span>日本三大渓流・清流美露天特集</span>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-amber-100 tracking-tight leading-tight sm:leading-snug mb-6">
            日本三大渓流の清澄を愛でる渓谷美露天風呂宿×ふるさと納税完全ガイド
          </h1>
          <p className="text-base sm:text-lg lg:text-xl text-stone-300 max-w-3xl mx-auto leading-relaxed mb-8">
            エメラルドグリーンに輝く清流、木々の隙間から差し込む木漏れ日、そして幾重にも重なる奇岩と水飛沫。日本を代表する三大渓流（奥入瀬渓流・三段峡・御岳渓谷）は、日常の喧騒を忘れさせ、心身を根底から浄化してくれる至高のネイチャーリゾートです。本特集では、各渓流の魅力を間近で体感できる厳選の名宿を特集。楽天ふるさと納税のトラベルクーポンを利用して、実質2,000円の自己負担で実現する清流ラグジュアリーステイへ出かけましょう。
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
              清冽なせせらぎと水飛沫が運ぶ天然マイナスイオンで心身を深層浄化
            </h3>
            <p className="text-xs sm:text-sm text-stone-400 leading-relaxed">
              朝の散策では木漏れ日と苔むした岩肌、清流の囁きに包まれ、深呼吸するだけで日々の疲労やストレスがすっと溶け出します。
            </p>
          </div>
          <div key="02" className="p-6 rounded-2xl bg-stone-950/60 border border-stone-800">
            <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400 font-bold mb-4">
              02
            </div>
            <h3 className="text-lg font-bold text-stone-200 mb-2">
              渓谷美を一望する露天風呂で川の音を聴きながら湯浴みする贅沢
            </h3>
            <p className="text-xs sm:text-sm text-stone-400 leading-relaxed">
              清流のすぐそばに設えられた客室露天風呂や大浴場から、時間とともに表情を変えるダイナミックな渓谷パノラマを堪能できます。
            </p>
          </div>
          <div key="03" className="p-6 rounded-2xl bg-stone-950/60 border border-stone-800">
            <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400 font-bold mb-4">
              03
            </div>
            <h3 className="text-lg font-bold text-stone-200 mb-2">
              岩魚・山女魚や旬の山菜、極上ブランド和牛を味わう山川の美食会席
            </h3>
            <p className="text-xs sm:text-sm text-stone-400 leading-relaxed">
              清らかな源流水で育まれた川魚の塩焼きや地元契約農家の朝採れ野菜、滋味あふれる郷土会席料理を美酒とともに味わえます。
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
