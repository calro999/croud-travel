import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: '日本三大鍾乳洞の神秘の地底美と山麓名湯宿×ふるさと納税完全ガイド【2026年最新】龍泉洞・秋芳洞・龍河洞',
  description: '何億年もの歳月が創り上げた日本三大鍾乳洞（岩手・龍泉洞、山口・秋芳洞、高知・龍河洞）。ドラゴンブルーの地底湖や百枚皿の造形美に息を呑み、山麓の名湯温泉で癒やされる旅。楽天ふるさと納税宿泊クーポン完全活用。',
  keywords: ["日本三大鍾乳洞","龍泉洞温泉ホテル","秋芳洞名勝山水園","龍河洞海辺の果樹園","地底湖","楽天ふるさと納税"],
  alternates: {
    canonical: 'https://croud-travel.pages.dev/furusato-tax-three-great-caves-underground-stay/',
  },
  openGraph: {
    title: '日本三大鍾乳洞の神秘の地底美と山麓名湯宿×ふるさと納税完全ガイド【2026年最新】龍泉洞・秋芳洞・龍河洞',
    description: '何億年もの歳月が創り上げた日本三大鍾乳洞（岩手・龍泉洞、山口・秋芳洞、高知・龍河洞）。ドラゴンブルーの地底湖や百枚皿の造形美に息を呑み、山麓の名湯温泉で癒やされる旅。楽天ふるさと納税宿泊クーポン完全活用。',
    url: 'https://croud-travel.pages.dev/furusato-tax-three-great-caves-underground-stay',
    siteName: '旅宿クラウド',
    type: 'article',
    locale: 'ja_JP',
  },
};

const hotels = [
  {
    "key": "cave_ryusendo",
    "hotelNo": 14560,
    "hotelName": "岩泉龍泉洞ホテル　龍のすみか（旧龍泉洞温泉ホテル）",
    "hotelImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/14560/14560.jpg",
    "hotelMinCharge": 6719,
    "reviewAverage": "4.0",
    "reviewCount": 377,
    "address": "岩手県下閉伊郡岩泉町岩泉府金48",
    "access": "お車：三陸道路　岩泉龍泉洞IC下車20分　　　　JR早坂高原線　龍泉洞温泉ホテル前下車1分",
    "userReview": "ゆっくり食事ができ、岩泉ヨーグルトが絶品夕食、朝食ともバイキングではなくゆっくりと食事が出来ました。また、岩泉ヨーグルトは滑らかでとても美味しかったです!クチコミの詳細はこちらから　h…",
    "label": "岩手県岩泉町ふるさと納税・世界屈指の透明度を誇るドラゴンブルーの地底湖「龍泉洞」龍泉洞温泉ホテル",
    "spotTitle": "岩手県岩泉町ふるさと納税：世界屈指のドラゴンブルー地底湖「龍泉洞」の麓に佇む温泉ホテル「岩泉龍泉洞ホテル 龍のすみか」",
    "spotDesc": "神秘の青き地底湖・龍泉洞まで徒歩数分の一軒宿。ミネラル豊富な岩泉の天然水を用いた大浴場や露天風呂、三陸直送の海の幸や短角牛を味わう会席料理が好評です。",
    "affiliateUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2Fspecial%2Ffurusato%2F"
  },
  {
    "key": "cave_akiyoshido",
    "hotelNo": 129984,
    "hotelName": "湯田温泉　名勝　山水園",
    "hotelImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/129984/129984.jpg",
    "hotelMinCharge": 19800,
    "reviewAverage": "4.3",
    "reviewCount": 188,
    "address": "山口県山口市緑町4-60",
    "access": "湯田温泉駅よりお車にて5分／中国自動車道：山口ICより約20分／中国自動車道：小郡ICより約15分",
    "userReview": "丁寧なおもてなしでしたお部屋は、文化財ということで、趣きがありました。古いけど、必要な設備はきちんとあり、清潔にされてました。温泉も気持ちよかったです。肌もツルツルになりました。お抹茶と外…",
    "label": "山口県美祢市・山口市ふるさと納税・東洋最大の鍾乳洞と百枚皿「秋芳洞」湯田温泉名勝山水園",
    "spotTitle": "山口県山口市ふるさと納税：秋芳洞と百枚皿を巡る旅・回遊式日本庭園と名湯「湯田温泉 名勝 山水園」",
    "spotDesc": "国の登録有形文化財に指定された数寄屋造りの名門旅館。広大な回遊式日本庭園と、三本の自家源泉から湧き出る毎分千リットルの名湯が、秋芳洞散策の疲れを優しく癒やします。",
    "affiliateUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2Fspecial%2Ffurusato%2F"
  },
  {
    "key": "cave_ryugado",
    "hotelNo": 13721,
    "hotelName": "リゾートホテル海辺の果樹園",
    "hotelImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/13721/13721.jpg",
    "hotelMinCharge": 6400,
    "reviewAverage": "4.1",
    "reviewCount": 662,
    "address": "高知県香南市夜須町手結山506-1",
    "access": "高知空港より車１５分／高知東部自動車道高知龍馬空港ICから１５分／夜須駅より車で3分",
    "userReview": "プールと豪華なお子様ランチに大満足1994年開業ですので古い建物であることは当然で、十分だと思いました。30年以上たっていますからね。子どもたちはプールで泳げて大満足でしたし、部屋の入り口で靴を脱…",
    "label": "高知県香美市・香南市ふるさと納税・神の壺が眠る悠久の鍾乳洞「龍河洞」リゾートホテル海辺の果樹園",
    "spotTitle": "高知県香南市ふるさと納税：悠久の鍾乳洞・龍河洞観光の拠点・太平洋パノラマ「リゾートホテル海辺の果樹園」",
    "spotDesc": "土佐湾を見下ろす高台に建つ南欧風リゾートホテル。龍河洞へのアクセス至便で、黒潮がもたらすカツオの藁焼きタタキや土佐の山海の幸バイキングを満喫できます。",
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
            <span>日本三大鍾乳洞・地底美名湯特集</span>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-amber-100 tracking-tight leading-tight sm:leading-snug mb-6">
            日本三大鍾乳洞の神秘の地底美と山麓名湯宿×ふるさと納税完全ガイド
          </h1>
          <p className="text-base sm:text-lg lg:text-xl text-stone-300 max-w-3xl mx-auto leading-relaxed mb-8">
            地上とは隔絶された静寂と、無数の鍾乳石が織りなす神秘の世界「日本三大鍾乳洞」。世界有数の透明度を誇るドラゴンブルーの地底湖「龍泉洞」、東洋屈指のスケールを誇る千畳敷と百枚皿「秋芳洞」、神の壺が悠久の時を刻む「龍河洞」。大自然のアートを体感した後は、山麓の名湯温泉に浸かり地元の旬魚・美酒に酔いしれる贅沢。楽天ふるさと納税のトラベルクーポンを利用して、実質2,000円の自己負担で実現する地下探検＆名湯ステイへご案内します。
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
              世界有数の透明度を誇るドラゴンブルー地底湖の幻想的なイルミネーション
            </h3>
            <p className="text-xs sm:text-sm text-stone-400 leading-relaxed">
              地底深く湧き出る透明度抜群の地底湖が青くライトアップされ、息を呑むほど美しい神秘の空間を体感できます。
            </p>
          </div>
          <div key="02" className="p-6 rounded-2xl bg-stone-950/60 border border-stone-800">
            <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400 font-bold mb-4">
              02
            </div>
            <h3 className="text-lg font-bold text-stone-200 mb-2">
              年間を通じて快適な洞窟探検の後に楽しむ自家源泉かけ流しの名湯
            </h3>
            <p className="text-xs sm:text-sm text-stone-400 leading-relaxed">
              夏は涼しく冬は暖かい鍾乳洞を歩いた後は、湯田温泉や三陸の天然温泉でじんわりと身体を温められます。
            </p>
          </div>
          <div key="03" className="p-6 rounded-2xl bg-stone-950/60 border border-stone-800">
            <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400 font-bold mb-4">
              03
            </div>
            <h3 className="text-lg font-bold text-stone-200 mb-2">
              三陸のアワビ・毛ガニや山口の天然とらふぐ、土佐のカツオ藁焼き会席
            </h3>
            <p className="text-xs sm:text-sm text-stone-400 leading-relaxed">
              洞窟の山麓から少し足を延ばせば豊かな漁場。獲れたての高級魚介と銘酒を心ゆくまで味わえます。
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
