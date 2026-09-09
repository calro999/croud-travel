import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: '日本三大名橋の歴史美と城下町名門宿×ふるさと納税完全ガイド【2026年最新】日本橋・錦帯橋・長崎眼鏡橋',
  description: '五街道の起点・東京「日本橋」、木造五連アーチが奇跡を描く山口「錦帯橋」、日本最古の石造りアーチ長崎「眼鏡橋」。日本の土木美と歴史情緒が凝縮された三大名橋を巡る旅。ラグジュアリーホテルや城下町老舗宿を楽天ふるさと納税完全活用。',
  keywords: ["日本三大名橋","マンダリンオリエンタル東京","岩国国際観光ホテル","にっしょうかん別邸紅葉亭","日本橋","錦帯橋","長崎眼鏡橋","楽天ふるさと納税"],
  alternates: {
    canonical: 'https://croud-travel.pages.dev/furusato-tax-three-great-bridges-heritage-stay/',
  },
  openGraph: {
    title: '日本三大名橋の歴史美と城下町名門宿×ふるさと納税完全ガイド【2026年最新】日本橋・錦帯橋・長崎眼鏡橋',
    description: '五街道の起点・東京「日本橋」、木造五連アーチが奇跡を描く山口「錦帯橋」、日本最古の石造りアーチ長崎「眼鏡橋」。日本の土木美と歴史情緒が凝縮された三大名橋を巡る旅。ラグジュアリーホテルや城下町老舗宿を楽天ふるさと納税完全活用。',
    url: 'https://croud-travel.pages.dev/furusato-tax-three-great-bridges-heritage-stay',
    siteName: '旅宿クラウド',
    type: 'article',
    locale: 'ja_JP',
  },
};

const hotels = [
  {
    "key": "bridge_nihonbashi",
    "hotelNo": 184009,
    "hotelName": "マンダリン　オリエンタル　東京",
    "hotelImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/184009/184009.jpg",
    "hotelMinCharge": 69733,
    "reviewAverage": "4.9",
    "reviewCount": 52,
    "address": "東京都中央区日本橋室町2-1-1",
    "access": "東京メトロ　銀座線・半蔵門線「三越前」駅地下通路直結 / JR　総武本線　「新日本橋」駅地下通路直結　徒歩3分",
    "userReview": "日本橋の絶景と細やかな気遣いに大満足妻の誕生日に利用しました。日本橋というロケーションと高層階からの視界は最高です。ディナーで利用したレストラン、バー、スパ、皆気遣いが行き届いていました。…",
    "label": "東京都中央区ふるさと納税・五街道の起点にして日本の道路元標「日本橋」ロイヤルパークホテル",
    "spotTitle": "東京都中央区ふるさと納税：五街道の起点・日本橋の空に浮かぶ最高峰の五つ星「マンダリン オリエンタル 東京」",
    "spotDesc": "歴史と伝統の街・日本橋室町に佇むラグジュアリーホテル。高層階の客室からは富士山や東京スカイツリーを一望でき、ミシュラン星付きレストランや世界水準のスパで至福の時間を過ごせます。",
    "affiliateUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2Fspecial%2Ffurusato%2F"
  },
  {
    "key": "bridge_kintaikyo",
    "hotelNo": 11295,
    "hotelName": "錦帯橋温泉　岩国国際観光ホテル",
    "hotelImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/11295/11295.jpg",
    "hotelMinCharge": 14300,
    "reviewAverage": "4.3",
    "reviewCount": 1298,
    "address": "山口県岩国市岩国1-1-7",
    "access": "JR山陽新幹線新岩国駅より車で10分 山陽自動車道岩国ICより車で8分 岩国錦帯橋空港より車で15分、宮島より車で40分",
    "userReview": "夏休みに13泊しましたが、他のホテルに比べて金額がちょっと高めだったかなぁと思います由緒あるホテルで内装やお風呂も素敵だったので、しょうがないのかなぁとは思いますが食事の金額もかなり上げないと、そ…",
    "label": "山口県岩国市ふるさと納税・五連の木造アーチが描く錦川の奇跡「錦帯橋」錦帯橋温泉岩国国際観光ホテル",
    "spotTitle": "山口県岩国市ふるさと納税：名橋・錦帯橋を眼下に望む露天風呂と岩国郷土料理「錦帯橋温泉 岩国国際観光ホテル」",
    "spotDesc": "錦川にかかる清流の奇跡・錦帯橋のすぐそばに佇む温泉ホテル。展望露天風呂「いつつばしの湯」からライトアップされた錦帯橋を眺め、名物・岩国寿司や瀬戸内の鮎・フグ料理を味わえます。",
    "affiliateUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2Fspecial%2Ffurusato%2F"
  },
  {
    "key": "bridge_megane",
    "hotelNo": 15449,
    "hotelName": "にっしょうかん別邸紅葉亭",
    "hotelImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/15449/15449.jpg",
    "hotelMinCharge": 7600,
    "reviewAverage": "4.4",
    "reviewCount": 449,
    "address": "長崎県長崎市立山5-13-65",
    "access": "ＪＲ長崎本線長崎駅から車で15分　＜ＪＲ長崎駅西口より定時無料送迎バスあり＞　長崎自動車道『多良見IC』より約20分",
    "userReview": "他の画像やクチコミの詳細はこちらから　https://review.travel.rakuten.co.jp/hotel/voice/15449?reviewId=33123479206188",
    "label": "長崎県長崎市ふるさと納税・日本最古のアーチ型石橋・中島川の歴史風情「長崎眼鏡橋」にっしょうかん別邸紅葉亭",
    "spotTitle": "長崎県長崎市ふるさと納税：長崎眼鏡橋散策と港を見渡す世界三大夜景の宿「にっしょうかん別邸 紅葉亭」",
    "spotDesc": "眼鏡橋が架かる中島川の石畳散策にも便利な長崎の高台に位置する料亭旅館。全室から長崎の美しい夜景をパノラマで眺められ、長崎伝統の卓袱料理や新鮮な地魚会席が特別な夜を彩ります。",
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
            <span>日本三大名橋・歴史浪漫水辺特集</span>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-amber-100 tracking-tight leading-tight sm:leading-snug mb-6">
            日本三大名橋の歴史美と城下町名門宿×ふるさと納税完全ガイド
          </h1>
          <p className="text-base sm:text-lg lg:text-xl text-stone-300 max-w-3xl mx-auto leading-relaxed mb-8">
            川を渡り、人と文化を結んできた日本の至宝「日本三大名橋」。日本の道路元標が鎮座する帝都の要所「日本橋」、錦川の清流に美しい木造アーチを描く「錦帯橋」、長崎の異国情緒と石畳の風情が薫る「眼鏡橋」。橋の袂に広がる城下町や水辺の歴史美を愛で、洗練されたホテルや風情ある湯宿で過ごす優雅なひととき。楽天ふるさと納税の宿泊割引クーポンを駆使して、日本の伝統と美意識に触れる橋巡りの旅をお楽しみください。
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
              世界に誇る木造・石造アーチの建築美と川面に映る逆さ橋の絶景
            </h3>
            <p className="text-xs sm:text-sm text-stone-400 leading-relaxed">
              錦帯橋の五連アーチや長崎眼鏡橋の二連アーチが水面に映り込む美しい景観を、朝夕の静かな時間帯に鑑賞できます。
            </p>
          </div>
          <div key="02" className="p-6 rounded-2xl bg-stone-950/60 border border-stone-800">
            <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400 font-bold mb-4">
              02
            </div>
            <h3 className="text-lg font-bold text-stone-200 mb-2">
              帝都の摩天楼パノラマから長崎の1000万ドルの夜景まで多彩な眺望ステイ
            </h3>
            <p className="text-xs sm:text-sm text-stone-400 leading-relaxed">
              日本橋の五つ星ラグジュアリーホテルや長崎港を一望する高台の別邸宿など、極上の展望客室で優雅に寛げます。
            </p>
          </div>
          <div key="03" className="p-6 rounded-2xl bg-stone-950/60 border border-stone-800">
            <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400 font-bold mb-4">
              03
            </div>
            <h3 className="text-lg font-bold text-stone-200 mb-2">
              江戸前寿司・岩国寿司・長崎卓袱料理など歴史ある水辺の郷土料理
            </h3>
            <p className="text-xs sm:text-sm text-stone-400 leading-relaxed">
              橋を通じて運ばれてきた豊かな食材と食文化。その土地ならではの伝統料理を名匠の技とともに堪能できます。
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
