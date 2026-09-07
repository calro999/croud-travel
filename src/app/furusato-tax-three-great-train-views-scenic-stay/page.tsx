import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: '日本三大車窓を望む絶景鉄道旅と名湯リゾート宿×ふるさと納税完全ガイド【2026年最新】姨捨・肥薩線・旧狩勝峠',
  description: '鉄道ファンのみならず旅情をそそる日本三大車窓（長野・篠ノ井線姨捨の善光寺平、熊本・肥薩線矢岳越えの霧島連峰、北海道・旧狩勝峠の十勝平野）。車窓から望む絶景パノラマと名湯ステイ。楽天ふるさと納税宿泊クーポン完全活用。',
  keywords: ["日本三大車窓","姨捨リバーサイド上田館","肥薩線人吉旅館","サホロリゾートホテル","鉄道旅行","戸倉上山田温泉","楽天ふるさと納税"],
  alternates: {
    canonical: 'https://croud-travel.pages.dev/furusato-tax-three-great-train-views-scenic-stay',
  },
  openGraph: {
    title: '日本三大車窓を望む絶景鉄道旅と名湯リゾート宿×ふるさと納税完全ガイド【2026年最新】姨捨・肥薩線・旧狩勝峠',
    description: '鉄道ファンのみならず旅情をそそる日本三大車窓（長野・篠ノ井線姨捨の善光寺平、熊本・肥薩線矢岳越えの霧島連峰、北海道・旧狩勝峠の十勝平野）。車窓から望む絶景パノラマと名湯ステイ。楽天ふるさと納税宿泊クーポン完全活用。',
    url: 'https://croud-travel.pages.dev/furusato-tax-three-great-train-views-scenic-stay',
    siteName: '旅宿クラウド',
    type: 'article',
    locale: 'ja_JP',
  },
};

const hotels = [
  {
    "key": "train_obasute",
    "hotelNo": 37465,
    "hotelName": "戸倉上山田温泉　リバーサイド上田館（伊東園ホテルズ）",
    "hotelImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/37465/37465.jpg",
    "hotelMinCharge": 6248,
    "reviewAverage": "3.9",
    "reviewCount": 980,
    "address": "長野県千曲市戸倉温泉3055",
    "access": "北陸新幹線上田駅乗換しなの鉄道　戸倉駅よりタクシーで５分、上信越自動車道坂城ＩＣよりＲ１８号線経由１５分",
    "userReview": "ゆったり過ごせてバイキングも快適絶妙な希望で、想像以上にゆったりできました。バイキングも品数と通路等の距離が確保されており、ストレスを感じずにいただけました。クチコミの詳細はこちらから　htt…",
    "label": "長野県千曲市ふるさと納税・善光寺平と千曲川を一望する日本三大車窓「篠ノ井線・姨捨」戸倉上山田温泉ホテル亀屋本店",
    "spotTitle": "長野県千曲市ふるさと納税：姨捨の棚田と千曲川のせせらぎ・名湯戸倉上山田温泉「リバーサイド上田館」",
    "spotDesc": "日本三大車窓・姨捨駅や田毎の月で有名な千曲川沿いに位置する温泉ホテル。美肌の湯として知られる戸倉上山田温泉の源泉大浴場と、信州の山の幸バイキングを満喫できます。",
    "affiliateUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2Fspecial%2Ffurusato%2F"
  },
  {
    "key": "train_hisatsu",
    "hotelNo": 14764,
    "hotelName": "人吉温泉　人吉旅館",
    "hotelImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/14764/14764.jpg",
    "hotelMinCharge": 19100,
    "reviewAverage": "4.4",
    "reviewCount": 373,
    "address": "熊本県人吉市上青井町160",
    "access": "ＪＲ人吉駅より徒歩５分／九州自動車道人吉ＩＣより１０分 ※「カーナビ」目的地を「青井阿蘇神社」に設定してお越しください。",
    "userReview": "歴史ある建物と温泉、おもてなしに大満足!歴史ある建物目当で宿泊しました。眼にも舌にも美味しいお料理、トロトロの温泉、ステキなおもてなしとあげればキリがないほど大満足!!!地震で大変なタイミングでし…",
    "label": "熊本県人吉市ふるさと納税・霧島連峰のパノラマを越える矢岳越え「肥薩線」登録有形文化財・人吉温泉人吉旅館",
    "spotTitle": "熊本県人吉市ふるさと納税：肥薩線の拠点・球磨川沿いに建つ登録有形文化財の名旅館「人吉温泉 人吉旅館」",
    "spotDesc": "創業昭和9年、国の登録有形文化財に指定された球磨川河畔の純和風旅館。源泉100%掛け流しの名湯と、人吉の旬魚アユや球磨焼酎とともに味わう繊細な会席料理が旅情をかき立てます。",
    "affiliateUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2Fspecial%2Ffurusato%2F"
  },
  {
    "key": "train_karikachi",
    "hotelNo": 10773,
    "hotelName": "サホロリゾートホテル",
    "hotelImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/10773/10773.jpg",
    "hotelMinCharge": 9900,
    "reviewAverage": "3.4",
    "reviewCount": 293,
    "address": "北海道上川郡新得町字新内西5線148番地5",
    "access": "ＪＲ石勝線新得駅から車で約１５分",
    "userReview": "絶景のロケーションと心温まるおもてなし、旬の美食に大変満足いたしました。素晴らしい滞在となりました。",
    "label": "北海道新得町ふるさと納税・十勝平野の大パノラマを見渡す旧狩勝峠「日本三大車窓」十勝サホロリゾート",
    "spotTitle": "北海道新得町ふるさと納税：旧狩勝峠の十勝大パノラマ・大自然に抱かれた高原スパ「サホロリゾートホテル」",
    "spotDesc": "十勝平野を見渡す旧狩勝峠の麓に広がる本格オールシーズンリゾート。麦飯石を用いた温泉大浴場や、十勝の大地が育んだブランド牛・乳製品をふんだんに使った極上フレンチ・ブッフェが人気です。",
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
            <span>日本三大車窓・絶景鉄道ステイ特集</span>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-amber-100 tracking-tight leading-tight sm:leading-snug mb-6">
            日本三大車窓を望む絶景鉄道旅と名湯リゾート宿×ふるさと納税完全ガイド
          </h1>
          <p className="text-base sm:text-lg lg:text-xl text-stone-300 max-w-3xl mx-auto leading-relaxed mb-8">
            列車が峠を越えた瞬間、目の前に突如として広がる息をのむ大パノラマ。「日本三大車窓」と称賛される千曲川と棚田の夜景が広がる「姨捨」、えびの高原と霧島連峰を望む「矢岳越え」、どこまでも続く地平線「狩勝峠」。鉄道の旅情と四季折々の雄大なランドスケープに酔いしれ、名湯に浸かる休日は大人の至福そのもの。楽天ふるさと納税を活用して、記憶に刻まれる絶景車窓と温泉リゾートの旅へ出かけましょう。
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
              スイッチバックや峠越えの瞬間に広がる息を呑む大パノラマ絶景
            </h3>
            <p className="text-xs sm:text-sm text-stone-400 leading-relaxed">
              眼下に広がる善光寺平の夜景や十勝平野の雄大な地平線など、鉄道ならではのダイナミックな車窓美を満喫できます。
            </p>
          </div>
          <div key="02" className="p-6 rounded-2xl bg-stone-950/60 border border-stone-800">
            <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400 font-bold mb-4">
              02
            </div>
            <h3 className="text-lg font-bold text-stone-200 mb-2">
              登録有形文化財の老舗温泉旅館や高原リゾートで過ごす上質な夜
            </h3>
            <p className="text-xs sm:text-sm text-stone-400 leading-relaxed">
              人吉温泉の100年木造建築宿や十勝の大自然に囲まれたサホロリゾートなど、趣向を凝らした名宿が揃います。
            </p>
          </div>
          <div key="03" className="p-6 rounded-2xl bg-stone-950/60 border border-stone-800">
            <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400 font-bold mb-4">
              03
            </div>
            <h3 className="text-lg font-bold text-stone-200 mb-2">
              信州蕎麦・球磨焼酎とアユ料理・北海道十勝牛など沿線のローカル美食
            </h3>
            <p className="text-xs sm:text-sm text-stone-400 leading-relaxed">
              列車旅の醍醐味である地元の食文化。その土地の風土が育んだ郷土料理と地酒のペアリングを楽しめます。
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
