import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: '重要伝統的建造物群保存地区（重伝建）の歴史町家宿×ふるさと納税完全ガイド【2026年最新】倉敷・萩・橿原今井町',
  description: '時を越えて受け継がれる日本の町並み遺産「重要伝統的建造物群保存地区（重伝建）」。白壁土蔵の倉敷美観地区、武家屋敷連なる萩城下町、五百棟の伝統町家残る大和今井町。歴史的建築を改装した極上宿を楽天ふるさと納税完全活用。',
  keywords: ["重要伝統的建造物群保存地区","重伝建","倉敷料理旅館鶴形","萩城三の丸北門屋敷","大和橿原シティホテル","町家ホテル","楽天ふるさと納税"],
  alternates: {
    canonical: 'https://croud-travel.pages.dev/furusato-tax-preservation-districts-heritage-stay/',
  },
  openGraph: {
    title: '重要伝統的建造物群保存地区（重伝建）の歴史町家宿×ふるさと納税完全ガイド【2026年最新】倉敷・萩・橿原今井町',
    description: '時を越えて受け継がれる日本の町並み遺産「重要伝統的建造物群保存地区（重伝建）」。白壁土蔵の倉敷美観地区、武家屋敷連なる萩城下町、五百棟の伝統町家残る大和今井町。歴史的建築を改装した極上宿を楽天ふるさと納税完全活用。',
    url: 'https://croud-travel.pages.dev/furusato-tax-preservation-districts-heritage-stay',
    siteName: '旅宿クラウド',
    type: 'article',
    locale: 'ja_JP',
  },
};

const hotels = [
  {
    "key": "heritage_kurashiki",
    "hotelNo": 108991,
    "hotelName": "料理旅館　鶴形",
    "hotelImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/108991/108991.jpg",
    "hotelMinCharge": 23050,
    "reviewAverage": "4.9",
    "reviewCount": 162,
    "address": "岡山県倉敷市中央1-3-15",
    "access": "倉敷駅から徒歩で約15分／お車で約5分",
    "userReview": "全ての料理が美味しく大満足料理が全て美味しかったです他の画像やクチコミの詳細はこちらから　https://review.travel.rakuten.co.jp/hotel/voice/108…",
    "label": "岡山県倉敷市ふるさと納税・白壁土蔵と柳並木・江戸中期の町家を改装した老舗「倉敷美観地区 料理旅館鶴形」",
    "spotTitle": "岡山県倉敷市ふるさと納税：倉敷美観地区の心臓部・江戸中期の町家を改装した老舗「料理旅館 鶴形」",
    "spotDesc": "倉敷美観地区の中心、倉敷川の畔に佇む創業約280年の町家旅館。樹齢四百年の巨松がそびえる中庭を眺めながら、瀬戸内海の旬魚や備前焼の器に美しく盛られた会席料理を楽しめます。",
    "affiliateUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2Fspecial%2Ffurusato%2F"
  },
  {
    "key": "heritage_hagi",
    "hotelNo": 28353,
    "hotelName": "萩温泉郷　萩城三の丸　北門屋敷",
    "hotelImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/28353/28353.jpg",
    "hotelMinCharge": 24310,
    "reviewAverage": "4.5",
    "reviewCount": 606,
    "address": "山口県萩市堀内210-12",
    "access": "JR東萩駅から車で約8分／世界遺産「萩城下町」の立地。城下町、萩城跡までも徒歩圏内／小郡萩道路絵堂ICから車で約25分",
    "userReview": "掃除が行き届いていて心からくつろげた娘と宿泊しました。私は若干の潔癖症があり、ホテルや旅館ではくつろげないのですが、北門屋敷さんは掃除が行き届いていて、畳の上でも、ベッドの中でも、なんの心配も…",
    "label": "山口県萩市ふるさと納税・白壁となまこ壁が連なる維新胎動の城下町・武家屋敷街「萩城三の丸 北門屋敷」",
    "spotTitle": "山口県萩市ふるさと納税：世界遺産萩城下町・武家屋敷通りに佇む格調高き名門「萩城三の丸 北門屋敷」",
    "spotDesc": "萩城の三の丸跡、白壁となまこ壁に囲まれた武家屋敷街に位置する格式ある宿。萩温泉の露天風呂やイングリッシュガーデンを備え、山口名物のふぐや見蘭牛を味わう極上の休日を約束します。",
    "affiliateUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2Fspecial%2Ffurusato%2F"
  },
  {
    "key": "heritage_imai",
    "hotelNo": 5407,
    "hotelName": "大和橿原シティホテル",
    "hotelImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/5407/5407.jpg",
    "hotelMinCharge": 5500,
    "reviewAverage": "3.0",
    "reviewCount": 716,
    "address": "奈良県橿原市八木町1-8-16",
    "access": "★大和八木駅より徒歩４分★八木西口駅より徒歩３分★ＪＲ畝傍駅より徒歩４分★南阪奈道路葛城ICより約１５分★",
    "userReview": "素泊まりには便利だが清掃と備品に難あり素泊まりには十分。駅周辺でもあり、飲食店は多いので困らない。無料駐車場は限られてて、若干狭い、少し歩く必要あり。有料も周辺にあるので困る事はない。部屋…",
    "label": "奈良県橿原市ふるさと納税・五百棟の伝統町家が残る大和の自治都市「重要伝統的建造物群保存地区・今井町」カンデオホテルズ奈良橿原",
    "spotTitle": "奈良県橿原市ふるさと納税：重伝建・今井町の江戸情緒散策に便利な拠点「大和橿原シティホテル」",
    "spotDesc": "重要伝統的建造物群保存地区・今井町へ好アクセス。江戸時代の町並みがほぼそのまま残る町家カフェや歴史館の散策に最適で、飛鳥路観光の拠点としても快適に利用できます。",
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
            <span>重要伝統的建造物群・歴史町家特集</span>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-amber-100 tracking-tight leading-tight sm:leading-snug mb-6">
            重要伝統的建造物群保存地区（重伝建）の歴史町家宿×ふるさと納税完全ガイド
          </h1>
          <p className="text-base sm:text-lg lg:text-xl text-stone-300 max-w-3xl mx-auto leading-relaxed mb-8">
            江戸・明治の風情を今に留め、国の重要伝統的建造物群保存地区に選定される美しい町並み。倉敷川沿いの白壁土蔵が美しい「倉敷美観地区」、維新の志士たちが駆け抜けた武家屋敷が残る「萩城下町」、そして中世の自治都市の面影を残す「橿原今井町」。夕暮れのガス灯や格子戸から漏れる灯りに包まれ、歴史ある町家や風情ある湯宿で過ごす大人の休日。楽天ふるさと納税の宿泊割引クーポンを活用して、実質2,000円の自己負担で叶える歴史浪漫ステイへご案内します。
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
              昼の賑わいが去った早朝や夕暮れの静寂に包まれる歴史的な町並み散策
            </h3>
            <p className="text-xs sm:text-sm text-stone-400 leading-relaxed">
              観光客が少ない朝一番、石畳や白壁に朝日が差し込む幻想的な光景を宿泊者だけの特権として独占できます。
            </p>
          </div>
          <div key="02" className="p-6 rounded-2xl bg-stone-950/60 border border-stone-800">
            <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400 font-bold mb-4">
              02
            </div>
            <h3 className="text-lg font-bold text-stone-200 mb-2">
              築数百年の古民家や武家屋敷を現代の快適性とともに再生した上質空間
            </h3>
            <p className="text-xs sm:text-sm text-stone-400 leading-relaxed">
              歴史ある太い梁や格子戸の美しさをそのままに、最新のベッドや浴室を備えた心地よいステイを満喫。
            </p>
          </div>
          <div key="03" className="p-6 rounded-2xl bg-stone-950/60 border border-stone-800">
            <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400 font-bold mb-4">
              03
            </div>
            <h3 className="text-lg font-bold text-stone-200 mb-2">
              瀬戸内の旬魚・長州見蘭牛・大和野菜など地域の歴史が育んだ美味会席
            </h3>
            <p className="text-xs sm:text-sm text-stone-400 leading-relaxed">
              城下町や商人町として栄えた土地ならではの洗練された料理文化。銘酒とともに至福の夕食を味わえます。
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
