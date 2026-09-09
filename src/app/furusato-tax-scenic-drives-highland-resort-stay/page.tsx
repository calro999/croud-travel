import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: '日本百名道の絶景ドライブルートと高原温泉宿×ふるさと納税完全ガイド【2026年最新】ビーナスライン・志賀草津・やまなみ',
  description: '日本屈指の絶景ロード（長野・ビーナスライン、群馬／長野・志賀草津高原ルート、大分／熊本・やまなみハイウェイ）。標高2,000m超の雲上パノラマと、白樺湖・草津温泉・由布院温泉の極上リゾートステイ。楽天ふるさと納税完全活用。',
  keywords: ["日本百名道","ビーナスライン池の平ホテル","草津温泉ホテル櫻井","由布院月燈庵","絶景ドライブ","楽天ふるさと納税"],
  alternates: {
    canonical: 'https://croud-travel.pages.dev/furusato-tax-scenic-drives-highland-resort-stay/',
  },
  openGraph: {
    title: '日本百名道の絶景ドライブルートと高原温泉宿×ふるさと納税完全ガイド【2026年最新】ビーナスライン・志賀草津・やまなみ',
    description: '日本屈指の絶景ロード（長野・ビーナスライン、群馬／長野・志賀草津高原ルート、大分／熊本・やまなみハイウェイ）。標高2,000m超の雲上パノラマと、白樺湖・草津温泉・由布院温泉の極上リゾートステイ。楽天ふるさと納税完全活用。',
    url: 'https://croud-travel.pages.dev/furusato-tax-scenic-drives-highland-resort-stay',
    siteName: '旅宿クラウド',
    type: 'article',
    locale: 'ja_JP',
  },
};

const hotels = [
  {
    "key": "drive_venus",
    "hotelNo": 29350,
    "hotelName": "白樺リゾート　池の平ホテル",
    "hotelImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/29350/29350.jpg",
    "hotelMinCharge": 13750,
    "reviewAverage": "4.4",
    "reviewCount": 5215,
    "address": "長野県北佐久郡立科町大字芦田八ケ野1596",
    "access": "中央本線茅野駅／長野新幹線佐久平駅／中央道 諏訪ICより車で40分／諏訪南IC35分／上信越道佐久ICより車で50分",
    "userReview": "部屋と食事は満足だが一部の接客が不快部屋と食事、ホテルの接客にはとても満足しています。が、インドアパーク受付とコンドウアキ展、プリキュアの受付の接客が不快でした。こちらが何かしたわけではな…",
    "label": "長野県立科町・茅野市ふるさと納税・ビーナスラインの拠点・白樺湖畔の高原スパリゾート「白樺リゾート 池の平ホテル」",
    "spotTitle": "長野県立科町ふるさと納税：ビーナスラインの特等席・白樺湖畔の総合高原リゾート「白樺リゾート 池の平ホテル」",
    "spotDesc": "白樺湖を望む新本館グランドオープンで話題の高原リゾート。湖と一体化する展望露天風呂やインフィニティスパ、信州の旬の味覚が並ぶ豪華ビュッフェで極上の休日を満喫できます。",
    "affiliateUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2Fspecial%2Ffurusato%2F"
  },
  {
    "key": "drive_shiga",
    "hotelNo": 56137,
    "hotelName": "草津温泉　ホテル櫻井",
    "hotelImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/56137/56137.jpg",
    "hotelMinCharge": 14300,
    "reviewAverage": "4.5",
    "reviewCount": 5001,
    "address": "群馬県吾妻郡草津町大字草津465-4",
    "access": "ＪＲ吾妻線長野原草津口駅からバスで約28分／関越道渋川伊香保ＩＣ又は上信越道碓井軽井沢IC経由／ＪＲ高速バスゆめぐり号",
    "userReview": "ファミリー向けバイキングバイキングを楽しみにして行きました。もっと肉肉なのかなーと思ってましたが、そんなに肉の種類が多いとは感じませんでした。ステーキはとてもおいしかったです。それ以外も全世代が満…",
    "label": "群馬県草津町ふるさと納税・標高2172m日本国道最高地点・志賀草津高原ルート「草津温泉 ホテル櫻井」",
    "spotTitle": "群馬県草津町ふるさと納税：志賀草津高原ルートの起点・草津最大級の大浴場を誇る名門「草津温泉 ホテル櫻井」",
    "spotDesc": "天下の名湯・草津温泉の万代鉱源泉と西の河原源泉を引く約30mの大浴場が圧巻。毎夜開催される湯もみショーや和太鼓演奏、上州牛を味わう会席料理が旅を華やかに彩ります。",
    "affiliateUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2Fspecial%2Ffurusato%2F"
  },
  {
    "key": "drive_yamanami",
    "hotelNo": 54519,
    "hotelName": "由布院温泉　ゆふいん月燈庵",
    "hotelImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/54519/54519.jpg",
    "hotelMinCharge": 17000,
    "reviewAverage": "3.9",
    "reviewCount": 171,
    "address": "大分県由布市湯布院町川上295-2",
    "access": "湯布院ICより車で１５分。由布院駅より車で７分。大分自動車道～湯布院ICを出て2つ目の信号を右折。50号線に乗り約4分。",
    "userReview": "絶景のロケーションと心温まるおもてなし、旬の美食に大変満足いたしました。素晴らしい滞在となりました。",
    "label": "大分県由布市・竹田市ふるさと納税・阿蘇くじゅう連山を望む九州屈指のスカイライン「やまなみハイウェイ」ゆふいん月燈庵",
    "spotTitle": "大分県由布市ふるさと納税：やまなみハイウェイの終着点・由布岳の麓に佇む離れの極上宿「由布院温泉 ゆふいん月燈庵」",
    "spotDesc": "約1万坪の広大な自然林の中にわずか18室の露天風呂付き離れが点在する大人の隠れ宿。母屋から渡り橋を渡って客室へ向かうアプローチの風情、月と星を望む温泉露天が格別です。",
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
            <span>日本百名道・絶景高原ドライブ特集</span>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-amber-100 tracking-tight leading-tight sm:leading-snug mb-6">
            日本百名道の絶景ドライブルートと高原温泉宿×ふるさと納税完全ガイド
          </h1>
          <p className="text-base sm:text-lg lg:text-xl text-stone-300 max-w-3xl mx-auto leading-relaxed mb-8">
            四季折々の美しい稜線、澄み切った高原の風、そしてどこまでも続くワインディングロード。「日本百名道」に選ばれるビーナスライン、志賀草津高原ルート、やまなみハイウェイは、車やバイクを走らせるだけで心が解き放たれる極上のステージです。走破した後は、名湯に浸かり、地元の山の幸やテロワール料理に舌鼓を打つ至福の夜。楽天ふるさと納税の宿泊割引クーポンを活用して、実質2,000円の自己負担で叶える絶景ドライブ＆高原温泉リゾートへ出かけましょう。
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
              標高2,000m超の稜線を駆け抜ける爽快なワインディングと雲海
            </h3>
            <p className="text-xs sm:text-sm text-stone-400 leading-relaxed">
              日本国道最高地点（渋峠）や阿蘇くじゅう連山のパノラマなど、窓を開けて風を感じる最高のドライブが楽しめます。
            </p>
          </div>
          <div key="02" className="p-6 rounded-2xl bg-stone-950/60 border border-stone-800">
            <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400 font-bold mb-4">
              02
            </div>
            <h3 className="text-lg font-bold text-stone-200 mb-2">
              ドライブの疲れを芯から癒やす日本屈指の強酸性泉・美肌名湯
            </h3>
            <p className="text-xs sm:text-sm text-stone-400 leading-relaxed">
              草津温泉の圧倒的な湯量や由布院温泉の滑らかな湯ざわり、白樺湖の展望露天風呂で至極の湯浴みを堪能できます。
            </p>
          </div>
          <div key="03" className="p-6 rounded-2xl bg-stone-950/60 border border-stone-800">
            <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400 font-bold mb-4">
              03
            </div>
            <h3 className="text-lg font-bold text-stone-200 mb-2">
              信州牛・上州もち豚・豊後牛など高原が育むブランド肉と新鮮野菜
            </h3>
            <p className="text-xs sm:text-sm text-stone-400 leading-relaxed">
              爽快な走りの後は、料理長自慢の会席やビュッフェで地元の特産品を味わい尽くす贅沢なディナータイム。
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
