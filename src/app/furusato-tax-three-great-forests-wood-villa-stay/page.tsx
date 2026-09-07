import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: '日本三大美林の木漏れ日と森林セラピー・ウッドヴィラ宿×ふるさと納税完全ガイド【2026年最新】青森ヒバ・秋田杉・木曽檜',
  description: '神仏の建築や式年遷宮を支えてきた日本の誇る銘木林「日本三大美林」（青森ヒバ・秋田スギ・木曽ヒノキ）。芳醇な木の香りに満ちた大浴場や客室、フィトンチッド溢れる森林浴で究極の深呼吸リラクゼーション。楽天ふるさと納税完全活用。',
  keywords: ["日本三大美林","大鰐温泉不二やホテル","男鹿温泉別邸つばき","木曽路の宿いわや","青森ヒバ","秋田杉","木曽檜","楽天ふるさと納税"],
  alternates: {
    canonical: 'https://croud-travel.pages.dev/furusato-tax-three-great-forests-wood-villa-stay',
  },
  openGraph: {
    title: '日本三大美林の木漏れ日と森林セラピー・ウッドヴィラ宿×ふるさと納税完全ガイド【2026年最新】青森ヒバ・秋田杉・木曽檜',
    description: '神仏の建築や式年遷宮を支えてきた日本の誇る銘木林「日本三大美林」（青森ヒバ・秋田スギ・木曽ヒノキ）。芳醇な木の香りに満ちた大浴場や客室、フィトンチッド溢れる森林浴で究極の深呼吸リラクゼーション。楽天ふるさと納税完全活用。',
    url: 'https://croud-travel.pages.dev/furusato-tax-three-great-forests-wood-villa-stay',
    siteName: '旅宿クラウド',
    type: 'article',
    locale: 'ja_JP',
  },
};

const hotels = [
  {
    "key": "forest_hiba",
    "hotelNo": 10728,
    "hotelName": "大鰐温泉　不二やホテル",
    "hotelImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/10728/10728.jpg",
    "hotelMinCharge": 10450,
    "reviewAverage": "4.5",
    "reviewCount": 920,
    "address": "青森県南津軽郡大鰐町蔵館川原田63",
    "access": "東北自動車道　大鰐・弘前ＩＣより約10分。　JR奥羽本線大鰐温泉駅下車　徒歩１５分",
    "userReview": "スタッフの接客と丁寧な料理に大満足!フロント、食事会場等どのスタッフさんも気持ちのよい接客でお部屋も広々として掃除が行き届き和やかな時間を過ごせましたそして、夕飯が美味しかったです!!派手…",
    "label": "青森県大鰐町ふるさと納税・日本三大美林「青森ヒバ」の香りと大湯船・津軽三味線ライブ「大鰐温泉 不二やホテル」",
    "spotTitle": "青森県大鰐町ふるさと納税：青森ヒバの香る大浴場と津軽三味線生ライブ「大鰐温泉 不二やホテル」",
    "spotDesc": "開湯800年の歴史を誇る大鰐温泉の名宿。青森ヒバを贅沢に使用した大浴場で天然アロマの湯浴みを満喫でき、津軽の郷土料理や毎晩開催される津軽三味線の生演奏が旅情を盛り上げます。",
    "affiliateUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2Fspecial%2Ffurusato%2F"
  },
  {
    "key": "forest_sugi",
    "hotelNo": 20504,
    "hotelName": "男鹿温泉　結いの宿　別邸　つばき",
    "hotelImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/20504/20504.jpg",
    "hotelMinCharge": 17160,
    "reviewAverage": "4.6",
    "reviewCount": 484,
    "address": "秋田県男鹿市北浦湯本中里81",
    "access": "JR男鹿線「羽立駅」～お車で20分／秋田道昭和男鹿半島ＩＣ～お車で40分／秋田空港より～エアポートライナーで2時間",
    "userReview": "実演付きの夕食とスタッフの対応に満足夕飯は、鯛めしや石焼き鍋の実演があってなかなか良かったです。又、スタッフのサービスは満足出来ました。クチコミの詳細はこちらから　https://review…",
    "label": "秋田県男鹿市ふるさと納税・日本三大美林「秋田杉」の美と日本海の旬魚石焼料理「男鹿温泉 結いの宿 別邸つばき」",
    "spotTitle": "秋田県男鹿市ふるさと納税：秋田杉の温もりと日本海の海鮮石焼料理「男鹿温泉 結いの宿 別邸 つばき」",
    "spotDesc": "男鹿半島の高台に位置し、秋田杉の美しい格子や調度品に彩られた上質な和風旅館。男鹿名物「石焼料理」の実演や、日本海を一望する展望露天風呂で心洗われるひとときを過ごせます。",
    "affiliateUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2Fspecial%2Ffurusato%2F"
  },
  {
    "key": "forest_hinoki",
    "hotelNo": 16778,
    "hotelName": "木曽路の宿　いわや",
    "hotelImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/16778/16778.jpg",
    "hotelMinCharge": 7700,
    "reviewAverage": "4.0",
    "reviewCount": 99,
    "address": "長野県木曽郡木曽町福島5169",
    "access": "JR木曽福島駅より徒歩10分／中央自動車道：塩尻ICより60分、中津川ICより60分",
    "userReview": "スタッフの心遣いに感謝。食事も大満足子供の体調がいまいちでレストランで夕食を食べられず...「お部屋に運んで後で食べることもできますよ」と教えていただき、お部屋に持っていくことに。娘はお風呂に入る…",
    "label": "長野県木曽町ふるさと納税・伊勢神宮の式年遷宮を支える日本三大美林「木曽檜」と中山道歴史宿「木曽路の宿 いわや」",
    "spotTitle": "長野県木曽町ふるさと納税：木曽檜の香る庭園露天風呂と中山道歴史街道の宿「木曽路の宿 いわや」",
    "spotDesc": "中山道福島宿の崖屋造りの風情を残す老舗温泉旅館。木曽檜をふんだんに用いた露天風呂や内湯に浸かり、信州牛や清流イワナ、木曽の山菜を取り入れた滋味深い会席料理を味わえます。",
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
            <span>日本三大美林・森林セラピーステイ特集</span>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-amber-100 tracking-tight leading-tight sm:leading-snug mb-6">
            日本三大美林の木漏れ日と森林セラピー・ウッドヴィラ宿×ふるさと納税完全ガイド
          </h1>
          <p className="text-base sm:text-lg lg:text-xl text-stone-300 max-w-3xl mx-auto leading-relaxed mb-8">
            悠久の森が育んだ生命の息吹と、圧倒的な癒やしをもたらす「日本三大美林」。抗菌力と芳醇な香気を放つ黄金の木「青森ヒバ」、美しく均整のとれた木目が薫る「秋田スギ」、伊勢神宮の御用木として尊ばれる最高峰の「木曽ヒノキ」。木肌の温もりに包まれた総ヒノキ・ヒバ風呂に浸かり、森林セラピーの澄んだ空気を胸いっぱいに吸い込む休日。楽天ふるさと納税を活用して、五感すべてが解き放たれる美林温泉ステイへご案内します。
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
              総ヒノキ・総ヒバ造りの湯船から立ちのぼる天然アロマの極上リラックス
            </h3>
            <p className="text-xs sm:text-sm text-stone-400 leading-relaxed">
              銘木が放つ芳醇な香りと温泉の湯気が融合。浴室全体が天然のアロマテラピー空間となり、深い安らぎへ導かれます。
            </p>
          </div>
          <div key="02" className="p-6 rounded-2xl bg-stone-950/60 border border-stone-800">
            <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400 font-bold mb-4">
              02
            </div>
            <h3 className="text-lg font-bold text-stone-200 mb-2">
              樹齢数百年の巨木が連なる原生林を歩く森林セラピー体験
            </h3>
            <p className="text-xs sm:text-sm text-stone-400 leading-relaxed">
              木漏れ日とフィトンチッドに満たされた美林トレッキング。深呼吸するたびに全身の細胞がリフレッシュされます。
            </p>
          </div>
          <div key="03" className="p-6 rounded-2xl bg-stone-950/60 border border-stone-800">
            <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400 font-bold mb-4">
              03
            </div>
            <h3 className="text-lg font-bold text-stone-200 mb-2">
              木の器や曲げわっぱに彩られた滋味あふれる山の恵みと郷土会席
            </h3>
            <p className="text-xs sm:text-sm text-stone-400 leading-relaxed">
              木曽牛や比内地鶏、青森りんごなど、大自然の懐に抱かれた土地ならではの郷土の味覚を優雅に楽しめます。
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
