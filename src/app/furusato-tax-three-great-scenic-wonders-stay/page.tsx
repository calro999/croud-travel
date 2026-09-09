import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: '日本三大奇勝の壮麗な岩壁美と秘湯宿×ふるさと納税完全ガイド【2026年最新】妙義山・耶馬渓・小豆島寒霞渓',
  description: '何百万年もの地殻変動が創り出した大地の彫刻！群馬「妙義山」、大分「耶馬渓」、香川「小豆島寒霞渓」の日本三大奇勝。天を衝く岩峰パノラマを望む展望露天風呂と美食を楽天ふるさと納税宿泊クーポンでお得に楽しむ完全ガイド。',
  keywords: ["日本三大奇勝","妙義グリーンホテル","耶馬渓えぼしや","小豆島国際ホテル","寒霞渓","絶景温泉","楽天ふるさと納税"],
  alternates: {
    canonical: 'https://croud-travel.pages.dev/furusato-tax-three-great-scenic-wonders-stay/',
  },
  openGraph: {
    title: '日本三大奇勝の壮麗な岩壁美と秘湯宿×ふるさと納税完全ガイド【2026年最新】妙義山・耶馬渓・小豆島寒霞渓',
    description: '何百万年もの地殻変動が創り出した大地の彫刻！群馬「妙義山」、大分「耶馬渓」、香川「小豆島寒霞渓」の日本三大奇勝。天を衝く岩峰パノラマを望む展望露天風呂と美食を楽天ふるさと納税宿泊クーポンでお得に楽しむ完全ガイド。',
    url: 'https://croud-travel.pages.dev/furusato-tax-three-great-scenic-wonders-stay',
    siteName: '旅宿クラウド',
    type: 'article',
    locale: 'ja_JP',
  },
};

const hotels = [
  {
    "key": "wonder_myogi",
    "hotelNo": 29835,
    "hotelName": "妙義温泉　妙義グリーンホテル＆テラス",
    "hotelImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/29835/29835.jpg",
    "hotelMinCharge": 9070,
    "reviewAverage": "4.3",
    "reviewCount": 1894,
    "address": "群馬県富岡市妙義町菅原2678",
    "access": "JR松井田駅よりタクシー12分／磯部駅よりタクシー17分／松井田妙義IC（上信越自動車道）より１２分",
    "userReview": "食事のクオリティが高く妙義山の絶景に満足炭酸水素塩泉の温泉と飲み放題を楽しみに予約しました。温泉は期待した程のとろみは無く、若干塩素が強く感じました。ゴルフ帰りの大勢の人たちが利用する日帰り温泉で…",
    "label": "群馬県富岡市ふるさと納税・天を衝く奇岩怪石のパノラマと自家源泉「上毛三山・妙義山」妙義グリーンホテル＆テラス",
    "spotTitle": "群馬県富岡市ふるさと納税：妙義山の険しい岩峰を一望する自家源泉リゾート「妙義温泉 妙義グリーンホテル＆テラス」",
    "spotDesc": "上毛三山のひとつ妙義山のダイナミックな岩肌を正面に望む絶景ロケーション。地下2000mから湧き出る炭酸水素塩泉の露天風呂は「美肌の湯」として名高く、上州牛を味わう会席料理も格別です。",
    "affiliateUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2Fspecial%2Ffurusato%2F"
  },
  {
    "key": "wonder_yabakei",
    "hotelNo": 43951,
    "hotelName": "耶馬渓山荘　えぼしや",
    "hotelImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/43951/43951.jpg",
    "hotelMinCharge": 2000,
    "reviewAverage": "3.4",
    "reviewCount": 108,
    "address": "大分県中津市耶馬溪町深耶馬3155-16",
    "access": "ＪＲ　豊後森駅から車で１５分（バスで３０分）／中津駅より５０分（バスで１時間３０分）",
    "userReview": "貸切風呂は良かったが衛生面と臭いが気になるすみませんが衛生面がなんともいいがたし、部屋はかび臭いのできになりました。風呂は貸し切りで良かったですねクチコミの詳細はこちらから　https://r…",
    "label": "大分県中津市ふるさと納税・日本新三景・奇岩と紅葉の渓谷美「耶馬渓」中津温泉ステイ",
    "spotTitle": "大分県中津市ふるさと納税：日本新三景・奇岩怪石の耶馬渓に抱かれた静寂の宿「耶馬渓山荘 えぼしや」",
    "spotDesc": "名勝・耶馬渓の渓谷沿いにひっそりと佇む山荘宿。奇岩怪石が織りなす絶景の自然美を愛でながら、滋味あふれる郷土会席料理とアットホームな温泉ステイを堪能できます。",
    "affiliateUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2Fspecial%2Ffurusato%2F"
  },
  {
    "key": "wonder_kankakei",
    "hotelNo": 17990,
    "hotelName": "小豆島国際ホテル　＜小豆島＞",
    "hotelImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/17990/17990.jpg",
    "hotelMinCharge": 8800,
    "reviewAverage": "4.4",
    "reviewCount": 2087,
    "address": "香川県小豆郡土庄町　甲　24-67",
    "access": "土庄港よりお車にて約７分",
    "userReview": "エンジェルロードを望む絶景と美味しいご飯エンジェルロード真横で部屋から状況が見れるのがとても良かったです!晩御飯のお魚もとっても美味しくて、醤油の名産地ということもあり3種類準備されていて色ん…",
    "label": "香川県土庄町ふるさと納税・日本三大渓谷美・寒霞渓とエンジェルロード「小豆島国際ホテル」",
    "spotTitle": "香川県土庄町ふるさと納税：寒霞渓の渓谷美とエンジェルロードを望む海辺の名門「小豆島国際ホテル」",
    "spotDesc": "日本三大渓谷美として名高い寒霞渓へのアクセス至便なシーサイドリゾート。小豆島温泉の露天風呂からは潮の満ち引きで道が現れるエンジェルロードを一望でき、瀬戸内海の海の幸やオリーブ牛を楽しめます。",
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
            <span>日本三大奇勝・絶景岩壁ステイ特集</span>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-amber-100 tracking-tight leading-tight sm:leading-snug mb-6">
            日本三大奇勝の壮麗な岩壁美と秘湯宿×ふるさと納税完全ガイド
          </h1>
          <p className="text-base sm:text-lg lg:text-xl text-stone-300 max-w-3xl mx-auto leading-relaxed mb-8">
            何万年、何百万年もの風雨と地殻変動が彫り出したダイナミックな造形美。「日本三大奇勝」と称される妙義山、耶馬渓、寒霞渓は、見る者を圧倒する孤高の絶景を誇ります。奇岩の稜線を一望する展望露天風呂や、地元食材を活かした滋味深い料理、そして心地よい静寂。楽天ふるさと納税の宿泊割引クーポンを駆使して、圧倒的なスケールを誇る奇勝の旅を賢くスマートにお楽しみください。
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
              天を衝く巨岩怪石の稜線が夕日に染まる感動的なマジックアワー
            </h3>
            <p className="text-xs sm:text-sm text-stone-400 leading-relaxed">
              幾重にも連なる奇岩のシルエットが茜色から紫色のグラデーションに染まる瞬間を、展望露天風呂やテラスから独占できます。
            </p>
          </div>
          <div key="02" className="p-6 rounded-2xl bg-stone-950/60 border border-stone-800">
            <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400 font-bold mb-4">
              02
            </div>
            <h3 className="text-lg font-bold text-stone-200 mb-2">
              悠久の歴史が息づく霊峰の懐で自家源泉に身を委ねる秘湯体験
            </h3>
            <p className="text-xs sm:text-sm text-stone-400 leading-relaxed">
              奇勝の麓から湧き出るミネラル豊富な天然温泉は、古くから旅人や修験者の疲れを癒やしてきた名湯。美肌効果も抜群です。
            </p>
          </div>
          <div key="03" className="p-6 rounded-2xl bg-stone-950/60 border border-stone-800">
            <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400 font-bold mb-4">
              03
            </div>
            <h3 className="text-lg font-bold text-stone-200 mb-2">
              瀬戸内の旬魚や上州牛、九州豊後牛を味わうテロワール会席
            </h3>
            <p className="text-xs sm:text-sm text-stone-400 leading-relaxed">
              海と山が隣接する豊かな大地ならではの旬の幸。小豆島のオリーブ牛や耶馬渓の地鶏、上州の山の幸を贅沢に味わい尽くせます。
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
