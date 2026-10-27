import HubRelatedPosts from "@/app/components/HubRelatedPosts";
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: '日本三大鍾乳洞の神秘の地底美と山麓名湯宿×ふるさと納税厳選ガイド龍泉洞・秋芳洞・龍河洞',
  description: '何億年もの歳月が創り上げた日本三大鍾乳洞（岩手・龍泉洞、山口・秋芳洞、高知・龍河洞）。ドラゴンブルーの地底湖や百枚皿の造形美に息を呑み、山麓の名湯温泉で癒やされる旅。楽天ふるさと納税宿泊クーポン完全活用。',
  keywords: ["2026年最新", "龍泉洞", "秋芳洞", "龍河洞", "温泉宿", "宿泊予約", "楽天トラベル"],
  alternates: {
    canonical: "https://croud-travel.pages.dev/furusato-tax-three-great-caves-underground-stay/",
  },
  openGraph: {
    title: '日本三大鍾乳洞の神秘の地底美と山麓名湯宿×ふるさと納税厳選ガイド龍泉洞・秋芳洞・龍河洞',
    description: '何億年もの歳月が創り上げた日本三大鍾乳洞（岩手・龍泉洞、山口・秋芳洞、高知・龍河洞）。ドラゴンブルーの地底湖や百枚皿の造形美に息を呑み、山麓の名湯温泉で癒やされる旅。楽天ふるさと納税宿泊クーポン完全活用。',
    url: 'https://croud-travel.pages.dev/furusato-tax-three-great-caves-underground-stay/',
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
    "userReview": "ゆっくり食事ができ、岩泉ヨーグルトが絶品夕食、朝食ともバイキングではなくゆっくりと食事が出来ました。また、岩泉ヨーグルトは滑らかでとても美味しかったです!",
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
    "userReview": "丁寧なおもてなしでしたお部屋は、文化財ということで、趣きがありました。古いけど、必要な設備はきちんとあり、清潔にされてました。温泉も気持ちよかったです。肌もツルツルになりました。お抹茶と外。",
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
    "userReview": "プールと豪華なお子様ランチに大満足1994年開業ですので古い建物であることは当然で、十分だと思いました。30年以上たっていますからね。子どもたちはプールで泳げて大満足でしたし、部屋の入り口で靴を脱。",
    "label": "高知県香美市・香南市ふるさと納税・神の壺が眠る悠久の鍾乳洞「龍河洞」リゾートホテル海辺の果樹園",
    "spotTitle": "高知県香南市ふるさと納税：悠久の鍾乳洞・龍河洞観光の拠点・太平洋パノラマ「リゾートホテル海辺の果樹園」",
    "spotDesc": "土佐湾を見下ろす高台に建つ南欧風リゾートホテル。龍河洞へのアクセス至便で、黒潮がもたらすカツオの藁焼きタタキや土佐の山海の幸バイキングを満喫できます。",
    "affiliateUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2Fspecial%2Ffurusato%2F"
  }
];

export default function FurusatoUpgradedPage() {
  const officialFurusatoAffUrl = 'https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2Fspecial%2Ffurusato%2F';


  const jsonLdArticle = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "日本三大鍾乳洞の神秘の地底美と山麓名湯宿×ふるさと納税完全ガイド【2026年最新】龍泉洞・秋芳洞・龍河洞",
    "description": "何億年もの歳月が創り上げた日本三大鍾乳洞（岩手・龍泉洞、山口・秋芳洞、高知・龍河洞）。ドラゴンブルーの地底湖や百枚皿の造形美に息を呑み、山麓の名湯温泉で癒やされる旅。楽天ふるさと納税宿泊クーポン完全活用。",
    "url": "https://croud-travel.pages.dev/furusato-tax-three-great-caves-underground-stay/",
    "publisher": {
      "@type": "Organization",
      "name": "日本全国・旅宿クラウド",
      "logo": { "@type": "ImageObject", "url": "https://croud-travel.pages.dev/icon.png" }
    }
  };
  const jsonLdBreadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "ホーム", "item": "https://croud-travel.pages.dev" },
      { "@type": "ListItem", "position": 2, "name": "日本三大鍾乳洞の神秘の地底美と山麓名湯宿×ふるさと納税完全ガイド【2026年最新】龍泉洞・秋芳洞・龍河洞", "item": "https://croud-travel.pages.dev/furusato-tax-three-great-caves-underground-stay/" }
    ]
  };

  return (
    <div className="min-h-screen bg-stone-900 text-stone-100 selection:bg-amber-500 selection:text-stone-950">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdArticle) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdBreadcrumb) }} />
      {/* ヒーローヘッダー */}
      <section className="relative py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-stone-950 via-stone-900 to-stone-900 border-b border-stone-800">
        <div className="max-w-5xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs sm:text-sm font-semibold mb-6">
            <span>✨</span>
            <span>日本三大鍾乳洞・地底美名湯特集</span>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-amber-100 tracking-tight leading-tight sm:leading-snug mb-6">日本三大鍾乳洞の神秘の地底美と山麓名湯宿×ふるさと納税厳選ガイド</h1>
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
                <div className="flex flex-col">
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
                        <a href={h.affiliateUrl} target="_blank" rel="sponsored noopener noreferrer">
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
                        rel="sponsored noopener noreferrer"
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
            href="/furusato-tax-three-great-scenic-coasts-stay/"
            className="p-5 rounded-2xl bg-stone-950/60 border border-stone-800 hover:border-amber-500/40 transition block"
          >
            <span className="text-xs font-bold text-amber-400 block mb-1">三大絶景海岸</span>
            <span className="font-bold text-white text-sm">【日本三大名勝海岸】東尋坊・浄土ヶ浜・白良浜ステイ特集</span>
          </Link>
          <Link
            href="/furusato-tax-three-famous-waterfalls-healing-stay/"
            className="p-5 rounded-2xl bg-stone-950/60 border border-stone-800 hover:border-amber-500/40 transition block"
          >
            <span className="text-xs font-bold text-amber-400 block mb-1">三大名瀑ヒーリング</span>
            <span className="font-bold text-white text-sm">【日本三大名瀑】白糸・吹割・鮎帰りの滝の癒やし湯宿特集</span>
          </Link>
          <Link
            href="/furusato-tax-three-great-hotsprings-luxury-villas-stay/"
            className="p-5 rounded-2xl bg-stone-950/60 border border-stone-800 hover:border-amber-500/40 transition block"
          >
            <span className="text-xs font-bold text-amber-400 block mb-1">三大名湯の離れ</span>
            <span className="font-bold text-white text-sm">【日本三大名湯】草津・有馬・下呂の極上別邸ステイ特集</span>
          </Link>
          <Link
            href="/furusato-tax-three-great-tea-plantations-stay/"
            className="p-5 rounded-2xl bg-stone-950/60 border border-stone-800 hover:border-amber-500/40 transition block"
          >
            <span className="text-xs font-bold text-amber-400 block mb-1">三大茶園テロワール</span>
            <span className="font-bold text-white text-sm">【日本三大茶園】牧之原・宇治・八女の茶香美食ステイ特集</span>
          </Link>
        </div>
      </section>
    
      
        <section data-enriched-rakuten-wiki="true" className="bg-white rounded-2xl p-6 md:p-10 shadow-sm border border-stone-200 space-y-6 my-10 max-w-5xl mx-auto">
          <h2 className="text-xl md:text-2xl font-bold text-stone-900">📊 日本三大鍾乳洞の神秘の地底美と山麓名湯宿×ふるさと納税厳選ガイド龍泉洞・秋芳洞・龍河洞：楽天トラベル高評価宿スペック比較表＆クチコミ徹底解説</h2>
          <p className="text-xs md:text-sm text-stone-600 leading-relaxed">
            楽天トラベル公式APIから取得した全国の高評価宿データ（所在地・最寄り駅・駐車場・総合評価・参考最安料金）と実際の宿泊者レビューを整理しました。ふるさと納税の旅行クーポンや早期割引プランと併用することで、ワンランク上の滞在をお得に実現できます。
          </p>
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs border-collapse bg-white rounded-xl overflow-hidden border border-stone-200">
              <thead>
                <tr className="bg-stone-900 text-white font-bold">
                  <th className="p-3">宿名</th><th className="p-3">所在地</th><th className="p-3">アクセス</th><th className="p-3">駐車場</th><th className="p-3">評価</th><th className="p-3">最安目安</th><th className="p-3">予約</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-stone-200">
              <tr className="hover:bg-amber-50/40 transition">
                <td className="p-3 font-bold text-stone-900">1. 札幌グランドホテル</td>
                <td className="p-3 text-stone-600">北海道札幌市中央区北1条西4丁目</td>
                <td className="p-3 text-stone-600">札幌</td>
                <td className="p-3 text-stone-600">立体/屋外180台、立体：1泊2500円/台(先着順)、屋外：1泊3500円/台</td>
                <td className="p-3 font-bold text-amber-600">★4.45（6671件）</td>
                <td className="p-3 font-bold text-rose-600">¥5,780〜</td>
                <td className="p-3"><a href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F762%2F762.html" target="_blank" rel="sponsored noopener noreferrer" className="text-teal-700 font-bold underline">プラン確認</a></td>
              </tr>
              <tr className="hover:bg-amber-50/40 transition">
                <td className="p-3 font-bold text-stone-900">2. グリーンヒルホテル尾道</td>
                <td className="p-3 text-stone-600">広島県尾道市東御所町9-1</td>
                <td className="p-3 text-stone-600">尾道</td>
                <td className="p-3 text-stone-600">専用駐車場無し。駅前港湾駐車場 2000円/1日 1000円の割引券あり。＊満車の場合有</td>
                <td className="p-3 font-bold text-amber-600">★4.4（1503件）</td>
                <td className="p-3 font-bold text-rose-600">¥5,486〜</td>
                <td className="p-3"><a href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F783%2F783.html" target="_blank" rel="sponsored noopener noreferrer" className="text-teal-700 font-bold underline">プラン確認</a></td>
              </tr>
              <tr className="hover:bg-amber-50/40 transition">
                <td className="p-3 font-bold text-stone-900">3. ホテルグランヴィア岡山</td>
                <td className="p-3 text-stone-600">岡山県岡山市北区駅元町1-5</td>
                <td className="p-3 text-stone-600">岡山</td>
                <td className="p-3 text-stone-600">ホテル地下に有り　171台　24時間1,300円　事前予約不要</td>
                <td className="p-3 font-bold text-amber-600">★4.44（6596件）</td>
                <td className="p-3 font-bold text-rose-600">¥8,450〜</td>
                <td className="p-3"><a href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F822%2F822.html" target="_blank" rel="sponsored noopener noreferrer" className="text-teal-700 font-bold underline">プラン確認</a></td>
              </tr>
              <tr className="hover:bg-amber-50/40 transition">
                <td className="p-3 font-bold text-stone-900">4. 熱海温泉　月の栖　熱海聚楽ホテル</td>
                <td className="p-3 text-stone-600">静岡県熱海市田原本町2-19</td>
                <td className="p-3 text-stone-600">熱海</td>
                <td className="p-3 text-stone-600">有り（有料）１泊　1760円（税込）　お車は当館の玄関前に直接お寄せください。</td>
                <td className="p-3 font-bold text-amber-600">★4.4（2598件）</td>
                <td className="p-3 font-bold text-rose-600">¥17,600〜</td>
                <td className="p-3"><a href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F859%2F859.html" target="_blank" rel="sponsored noopener noreferrer" className="text-teal-700 font-bold underline">プラン確認</a></td>
              </tr>
              <tr className="hover:bg-amber-50/40 transition">
                <td className="p-3 font-bold text-stone-900">5. 紋別セントラルホテル</td>
                <td className="p-3 text-stone-600">北海道紋別市港町7丁目1-58</td>
                <td className="p-3 text-stone-600">オホーツク紋別空港</td>
                <td className="p-3 text-stone-600">有り　150台　無料</td>
                <td className="p-3 font-bold text-amber-600">★4.44（1887件）</td>
                <td className="p-3 font-bold text-rose-600">¥6,600〜</td>
                <td className="p-3"><a href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F863%2F863.html" target="_blank" rel="sponsored noopener noreferrer" className="text-teal-700 font-bold underline">プラン確認</a></td>
              </tr>
              </tbody>
            </table>
          </div>
          <div className="space-y-3">
            <h3 className="text-base font-bold text-stone-900">🏨 注目宿のクチコミ・アクセス詳細</h3>
            <div className="bg-stone-50 rounded-2xl p-5 border border-stone-200 space-y-2 text-xs text-stone-700 leading-relaxed">
              <h4 className="text-sm font-bold text-stone-900">1. 札幌グランドホテル（北海道・★4.45）</h4>
              <p><strong>【特徴】</strong>2025年7月、本館客室がリニューアル！札幌駅地下歩行空間直結♪</p>
              <p><strong>【交通・駐車場】</strong>★地下歩行空間8番出口横にてホテル直結★JR札幌駅南口より徒歩10分、地下鉄大通駅より徒歩5分 ／ 駐車場：立体/屋外180台、立体：1泊2500円/台(先着順)、屋外：1泊3500円/台</p>
              <p className="italic text-stone-600">💬 宿泊者レビュー：「広めの部屋と朝食は満足、朝食会場は混雑少し広めのスーペリアツインに夫婦で宿泊、いつも出張でシングルのビジホに泊まっていたのでそれに比べると快適でした。ホテルスタッフも親切でプロの仕事ぶりで良かった…　2026-08-21 07:00:23投稿 &lt;a href=&quot;https://img.travel.rakuten.co.jp/image/tr/api/kw/HTX0u/?f_hotel_no=76」</p>
            </div>
            <div className="bg-stone-50 rounded-2xl p-5 border border-stone-200 space-y-2 text-xs text-stone-700 leading-relaxed">
              <h4 className="text-sm font-bold text-stone-900">2. グリーンヒルホテル尾道（広島県・★4.4）</h4>
              <p><strong>【特徴】</strong>ＪＲ尾道駅から徒歩２分に位置し、尾道観光やしまなみ海道サイクリングの拠点に最適！</p>
              <p><strong>【交通・駐車場】</strong>山陽本線尾道駅駅前　山陽新幹線新尾道駅より車で７分 山陽自動車道福山西・尾道ＩＣより約２０分 ／ 駐車場：専用駐車場無し。駅前港湾駐車場 2000円/1日 1000円の割引券あり。＊満車の場合有</p>
              <p className="italic text-stone-600">💬 宿泊者レビュー：「クチコミの詳細はこちらから　https://review.travel.rakuten.co.jp/hotel/voice/783?reviewId=33123478319389　2026-08-02 16:31:29投稿」</p>
            </div>
            <div className="bg-stone-50 rounded-2xl p-5 border border-stone-200 space-y-2 text-xs text-stone-700 leading-relaxed">
              <h4 className="text-sm font-bold text-stone-900">3. ホテルグランヴィア岡山（岡山県・★4.44）</h4>
              <p><strong>【特徴】</strong>JR岡山駅２階から連絡通路で直結。全室無線LAN（WI-FI）接続が無料でご利用いただけます。</p>
              <p><strong>【交通・駐車場】</strong>JR岡山駅直結（徒歩1分）／山陽自動車道　岡山ICより車で20分／岡山空港より車で30分 ／ 駐車場：ホテル地下に有り　171台　24時間1,300円　事前予約不要</p>
              <p className="italic text-stone-600">💬 宿泊者レビュー：「2度目の利用も大満足、また必ず来ます2度目の宿泊です。ホスピタリティ、立地、清潔さ全てとても良かったです。また、岡山に行く際は宿泊したいと思いますクチコミの詳細はこちらから　https://r…　2026-10-05 15:54:46投稿」</p>
            </div>
            <div className="bg-stone-50 rounded-2xl p-5 border border-stone-200 space-y-2 text-xs text-stone-700 leading-relaxed">
              <h4 className="text-sm font-bold text-stone-900">4. 熱海温泉　月の栖　熱海聚楽ホテル（静岡県・★4.4）</h4>
              <p><strong>【特徴】</strong>【熱海温泉】楽天トラベルマイスター＆アワード受賞！お部屋へご用意する会席料理がクチコミ高評価！</p>
              <p><strong>【交通・駐車場】</strong>ＪＲ東海道線「熱海駅」～仲見世通り商店街を抜けて徒歩３分。高台に建つ和風旅館。海と街の景色が人気。露天風呂付客室3室有り ／ 駐車場：有り（有料）１泊　1760円（税込）　お車は当館の玄関前に直接お寄せください。</p>
              <p className="italic text-stone-600">💬 宿泊者レビュー：「ご飯が美味しくボリューム満点で大満足今回2回目の宿泊です。とてもご飯が美味しく、ボリューム満点で大満足です。ここより美味しく満足できるご飯は、なかなかないと思います。商店街からも近く、立地も最…　2026-08-22 20:09:30投稿 &lt;a href=&quot;https://img.travel.rakuten.co.jp/image/tr/api/kw/HTX0u/?f_hotel_no=859&quot;」</p>
            </div>
            <div className="bg-stone-50 rounded-2xl p-5 border border-stone-200 space-y-2 text-xs text-stone-700 leading-relaxed">
              <h4 className="text-sm font-bold text-stone-900">5. 紋別セントラルホテル（北海道・★4.44）</h4>
              <p><strong>【特徴】</strong>◆無料無線ＬＡＮ（Ｗｉ-Ｆi)◆駐車場無料◆光明石温泉大浴場◆シャワートイレ◆空気清浄機◆</p>
              <p><strong>【交通・駐車場】</strong>オホーツク紋別空港から車で約10分。旭川紋別自動車道・丸瀬布（まるせっぷ）ＩＣから約60分。 ／ 駐車場：有り　150台　無料</p>
              <p className="italic text-stone-600">💬 宿泊者レビュー：「建物は古めだが清潔感があり快適ちょっと古めですが清潔感があるので普通に良い感じです。素泊まりです。クチコミの詳細はこちらから　https://review.travel.rakuten…　2026-10-09 17:52:06投稿 &lt;a href=&quot;https://img.travel.rakuten.co.jp/image/tr/api/hs/RmfmX/?f_hotel_no=863&quot; cla」</p>
            </div>
          </div>
          <div className="space-y-3 pt-4 border-t border-stone-200">
            <h3 className="text-base font-bold text-stone-900">🗺️ 合わせて訪れたい日本の代表的観光名所ガイド</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-stone-50 p-4 rounded-xl border border-stone-200 space-y-1">
              <h4 className="text-sm font-bold text-stone-900">📍 清水寺</h4>
              <p className="text-xs text-stone-600 leading-relaxed">「清水の舞台」で世界的に有名な古都京都の象徴。「清水の舞台から飛び下りる」の語源となった木造大舞台からの京都市街の眺望と音羽の滝が名高いです。</p>
            </div>
            <div className="bg-stone-50 p-4 rounded-xl border border-stone-200 space-y-1">
              <h4 className="text-sm font-bold text-stone-900">📍 函館山（夜景）</h4>
              <p className="text-xs text-stone-600 leading-relaxed">世界三大夜景の一つに数えられる絶景スポット。津軽海峡と函館湾に挟まれたくびれが生み出す、宝石をちりばめたような眩い夜景は一生に一度は見たい感動のロケーションです。</p>
            </div>
            <div className="bg-stone-50 p-4 rounded-xl border border-stone-200 space-y-1">
              <h4 className="text-sm font-bold text-stone-900">📍 横浜みなとみらい21</h4>
              <p className="text-xs text-stone-600 leading-relaxed">ランドマークタワーや大観覧車「コスモクロック21」、赤レンガ倉庫が立ち並ぶ近代都市リゾート。港町の海風を感じながらショッピングや夜景を楽しめます。</p>
            </div>
            <div className="bg-stone-50 p-4 rounded-xl border border-stone-200 space-y-1">
              <h4 className="text-sm font-bold text-stone-900">📍 国宝 姫路城（白鷺城）</h4>
              <p className="text-xs text-stone-600 leading-relaxed">鮮やかな白漆喰の城壁が羽ばたく白鷺のように美しい日本初のユネスコ世界文化遺産。大天守をはじめ保存状態が完璧な城郭建築の最高峰です。</p>
            </div>
            </div>
          </div>
        </section>

<HubRelatedPosts currentSlug="furusato-tax-three-great-caves-underground-stay" />
</div>
  );
}
