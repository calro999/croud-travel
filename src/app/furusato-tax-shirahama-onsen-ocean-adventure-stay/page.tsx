import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: '【南紀白浜温泉×ふるさと納税】白良浜オーシャンビュー＆名門リゾート特集！アドベンチャーワールド観光宿ガイド｜ホテル川久・むさし・白良荘グランドホテル',
  description: '日本三古湯・白砂青松の白良浜が美しい和歌山県南紀白浜温泉を楽天ふるさと納税でお得に満喫！全室スイートの夢の城「ホテル川久」、白良浜徒歩1分・二つの自家源泉を持つ「紀州・白浜温泉 むさし」、オーシャンビュー展望露天風呂の「白良荘グランドホテル」を徹底比較。白浜町トラベルクーポン活用術を網羅。',
  keywords: '南紀白浜温泉 ふるさと納税,ホテル川久 クーポン ふるさと納税,白浜温泉 むさし 宿泊,白良荘グランドホテル ふるさと納税,白浜町 ふるさと納税 旅行',
  alternates: {
    canonical: 'https://croud-travel.pages.dev/furusato-tax-shirahama-onsen-ocean-adventure-stay',
  },
  openGraph: {
    title: '【南紀白浜温泉×ふるさと納税】白良浜オーシャンビュー＆名門リゾート特集！アドベンチャーワールド観光宿ガイド｜ホテル川久・むさし・白良荘グランドホテル',
    description: '日本三古湯・白砂青松の白良浜が美しい和歌山県南紀白浜温泉を楽天ふるさと納税でお得に満喫！全室スイートの夢の城「ホテル川久」、白良浜徒歩1分・二つの自家源泉を持つ「紀州・白浜温泉 むさし」、オーシャンビュー展望露天風呂の「白良荘グランドホテル」を徹底比較。白浜町トラベルクーポン活用術を網羅。',
    url: 'https://croud-travel.pages.dev/furusato-tax-shirahama-onsen-ocean-adventure-stay',
    siteName: 'トラベルガイド - クラウドトラベル',
    locale: 'ja_JP',
    type: 'article',
  },
};

export default function FurusatoArticlePage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: '【南紀白浜温泉×ふるさと納税】白良浜オーシャンビュー＆名門リゾート特集！アドベンチャーワールド観光宿ガイド｜ホテル川久・むさし・白良荘グランドホテル',
    description: '日本三古湯・白砂青松の白良浜が美しい和歌山県南紀白浜温泉を楽天ふるさと納税でお得に満喫！全室スイートの夢の城「ホテル川久」、白良浜徒歩1分・二つの自家源泉を持つ「紀州・白浜温泉 むさし」、オーシャンビュー展望露天風呂の「白良荘グランドホテル」を徹底比較。白浜町トラベルクーポン活用術を網羅。',
    author: {
      '@type': 'Organization',
      name: 'クラウドトラベル 観光・ふるさと納税調査班',
      url: 'https://croud-travel.pages.dev/',
    },
    publisher: {
      '@type': 'Organization',
      name: 'クラウドトラベル',
      logo: {
        '@type': 'ImageObject',
        url: 'https://croud-travel.pages.dev/logo.png',
      },
    },
    datePublished: '2026-09-10T17:25:00+09:00',
    dateModified: '2026-09-10T17:25:00+09:00',
    mainEntityOfPage: 'https://croud-travel.pages.dev/furusato-tax-shirahama-onsen-ocean-adventure-stay',
  };

  return (
    <main className="min-h-screen bg-stone-50 text-stone-800 antialiased font-sans pb-20">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* パンくずリスト */}
      <nav className="max-w-4xl mx-auto px-4 sm:px-6 pt-6 pb-2 text-xs text-stone-500 flex items-center gap-1.5">
        <Link href="/" className="hover:underline">ホーム</Link>
        <span>/</span>
        <Link href="/travel-savings-guide" className="hover:underline">ふるさと納税旅行ガイド</Link>
        <span>/</span>
        <span className="text-stone-700 font-medium truncate">【南紀白浜温泉×ふるさと納税】白良浜オーシャンビュー＆名門リゾート特集！アドベンチャーワールド観光宿ガイド｜ホテル川久・むさし・白良荘グランドホテル</span>
      </nav>

      {/* ヒーローセクション */}
      <header className="max-w-4xl mx-auto px-4 sm:px-6 py-8 sm:py-12 space-y-4">
        <div className="inline-flex items-center gap-2 bg-amber-100/80 text-amber-900 text-xs font-semibold px-3 py-1 rounded-full border border-amber-200">
          <span>♨️</span>
          <span>和歌山県白浜町 ふるさと納税・名湯宿特集</span>
        </div>
        <h1 className="text-2xl sm:text-4xl font-extrabold font-serif text-stone-900 tracking-tight leading-snug">
          【南紀白浜温泉×ふるさと納税】白良浜オーシャンビュー＆名門リゾート特集！アドベンチャーワールド観光宿ガイド｜ホテル川久・むさし・白良荘グランドホテル
        </h1>
        <p className="text-stone-600 text-sm sm:text-base leading-relaxed">
          日本三古湯・白砂青松の白良浜が美しい和歌山県南紀白浜温泉を楽天ふるさと納税でお得に満喫！全室スイートの夢の城「ホテル川久」、白良浜徒歩1分・二つの自家源泉を持つ「紀州・白浜温泉 むさし」、オーシャンビュー展望露天風呂の「白良荘グランドホテル」を徹底比較。白浜町トラベルクーポン活用術を網羅。
        </p>
      </header>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 space-y-12">
        {/* リード文セクション */}
        <section className="bg-white rounded-3xl p-6 sm:p-8 shadow-sm border border-stone-200/80 space-y-4">
          <h2 className="text-lg sm:text-xl font-bold font-serif text-amber-900 border-b border-amber-100 pb-3">
            エメラルドグリーンの海と真っ白な砂浜——波打ち際に湧く日本三古湯と紀州の海の幸を味わう南国リゾートステイ
          </h2>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed">
            和歌山県西牟婁郡白浜町、紀伊半島の南西部に位置する南紀白浜温泉。飛鳥・奈良時代の「日本書紀」や「万葉集」にも牟婁の温湯（むろのゆ）として記され、有馬・道後とともに「日本三古湯」の一つに数えられる千四百余年の歴史を誇る名湯です。温泉街の目の前に広がる「白良浜（しららはま）」は、オーストラリアから運ばれた珪砂が敷き詰められた白砂のビーチ。青い海とヤシの並木が織りなす南国情緒は、本州屈指のビーチリゾートとして世代を超えて愛されています。
          </p>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed">
            白浜温泉の大きな魅力は、海を眺めながら入る開放的な塩化物温泉と、家族みんなで楽しめる「アドベンチャーワールド」などのテーマパーク。夕食には幻の高級魚「クエ」の鍋や刺身、勝浦港直送の生マグロ、伊勢海老、アワビ、紀州和歌山牛など、黒潮の恵みが満載です。和歌山県白浜町へのふるさと納税を利用すれば、30%相当の楽天トラベルクーポンにより憧れのラグジュアリーホテルへお得に宿泊でき、特別な記念日や家族旅行が最高の思い出になります。
          </p>
        </section>

        {/* 比較サマリー表 */}
        <section className="bg-amber-50/50 rounded-3xl p-6 sm:p-8 border border-amber-100/80 space-y-4">
          <h3 className="text-base sm:text-lg font-bold font-serif text-stone-900">
            今回ご紹介する厳選3名宿の比較サマリー
          </h3>
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs sm:text-sm border-collapse bg-white rounded-xl shadow-xs">
              <thead>
                <tr className="border-b border-stone-200 bg-stone-100/70 text-stone-700">
                  <th className="p-3 font-bold">宿名</th>
                  <th className="p-3 font-bold">評価</th>
                  <th className="p-3 font-bold">最大の特徴</th>
                  <th className="p-3 font-bold">おすすめの過ごし方</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-stone-100">
                
                <tr>
                  <td className="p-3 font-bold text-amber-900">白浜温泉　ホテル川久</td>
                  <td className="p-3 font-bold">★ 4.56</td>
                  <td className="p-3 text-stone-600">総工費四百億円・世界の一流職人が創り上げた宮殿ホテル！全室スイートと「王様のビュッフェ」</td>
                  <td className="p-3 text-stone-600">最高峰の格式・贅沢ステイ</td>
                </tr>
                <tr>
                  <td className="p-3 font-bold text-amber-900">紀州・白浜温泉　むさし</td>
                  <td className="p-3 font-bold">★ 4.3</td>
                  <td className="p-3 text-stone-600">白良浜まで徒歩1分！二つの異なる自家源泉「斉明湯」と「白良湯」を湛える本格和風旅館</td>
                  <td className="p-3 text-stone-600">抜群の立地・名湯満喫</td>
                </tr>
                <tr>
                  <td className="p-3 font-bold text-amber-900">白浜温泉　白良荘グランドホテル</td>
                  <td className="p-3 font-bold">★ 4.48</td>
                  <td className="p-3 text-stone-600">白良浜のパノラマが目の前に広がる全室オーシャンビュー！浜辺の露天風呂と名物クエ会席</td>
                  <td className="p-3 text-stone-600">温もり空間・アットホーム旅</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* ホテル詳細カード一覧 */}
        <section className="space-y-8">
          <h2 className="text-xl sm:text-2xl font-bold font-serif text-stone-900 flex items-center gap-2">
            <span>🏆</span> 厳選3宿の詳細レビュー＆ふるさと納税活用ガイド
          </h2>

          {/* ホテル 1 */}
          <article className="bg-white rounded-3xl overflow-hidden shadow-sm border border-stone-200/80 transition hover:shadow-md">
            <div className="relative aspect-video sm:aspect-[16/9] w-full overflow-hidden bg-stone-100">
              <img
                src="https://img.travel.rakuten.co.jp/share/HOTEL/14111/14111.jpg"
                alt="白浜温泉　ホテル川久"
                className="w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute top-4 left-4 bg-stone-900/80 backdrop-blur-sm text-white text-xs px-3 py-1.5 rounded-full font-semibold">
                第1選
              </div>
              <div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-sm text-stone-900 text-xs px-3 py-1.5 rounded-full font-bold shadow">
                ★ 4.56（口コミ 3703件）
              </div>
            </div>

            <div className="p-6 sm:p-8 space-y-6">
              <div className="space-y-2">
                <span className="text-xs font-bold text-amber-700 uppercase tracking-wider">和歌山県白浜町</span>
                <h3 className="text-xl sm:text-2xl font-bold font-serif text-stone-900 leading-snug">
                  白浜温泉　ホテル川久
                </h3>
                <p className="text-xs sm:text-sm font-medium text-amber-800">
                  総工費四百億円・世界の一流職人が創り上げた宮殿ホテル！全室スイートと「王様のビュッフェ」
                </p>
              </div>

              <div className="border-t border-b border-stone-100 py-4 space-y-3">
                <h4 className="font-bold text-stone-900 text-sm sm:text-base font-serif">
                  白浜温泉 ホテル川久 —— 圧倒的な建築美とアートの迷宮。田辺湾を一望するスパと美食のエンターテインメント
                </h4>
                <div className="grid gap-3 text-xs sm:text-sm text-stone-700">
                  
                  <div className="bg-stone-50 p-3.5 rounded-xl border border-stone-200/60">
                    <h5 className="font-bold text-stone-900 mb-1 flex items-center gap-1.5">
                      <span className="text-amber-600">✓</span> 金箔天井やロマネスク調の柱が並ぶ世界最高峰の建築美
                    </h5>
                    <p className="text-stone-600 leading-relaxed">村野藤吾賞を受賞した美術館のような宮殿ホテル。シュトックマー社の金箔天井やダリの作品など、贅を尽くしたアート空間が非日常を演出します。</p>
                  </div>
                  <div className="bg-stone-50 p-3.5 rounded-xl border border-stone-200/60">
                    <h5 className="font-bold text-stone-900 mb-1 flex items-center gap-1.5">
                      <span className="text-amber-600">✓</span> 田辺湾の海面と一体化するインフィニティスパ「ロイヤルスパ」
                    </h5>
                    <p className="text-stone-600 leading-relaxed">海を一望する広大な露天風呂やシルクバス、サウナ。波の音と潮風に包まれながら、極上のリラクゼーションを体験できます。</p>
                  </div>
                  <div className="bg-stone-50 p-3.5 rounded-xl border border-stone-200/60">
                    <h5 className="font-bold text-stone-900 mb-1 flex items-center gap-1.5">
                      <span className="text-amber-600">✓</span> 最高峰の贅沢食材が並ぶ伝説のディナー「王様のビュッフェ」
                    </h5>
                    <p className="text-stone-600 leading-relaxed">黒毛和牛ステーキや活鮑、十数種類のスイーツなど、一流シェフが目の前で仕上げる豪華ディナー。贅沢の限りを尽くした美食体験です。</p>
                  </div>
                </div>
              </div>

              {/* レビュー抜粋 */}
              <div className="bg-amber-50/60 p-4 rounded-2xl border border-amber-100 text-xs sm:text-sm space-y-1.5">
                <span className="font-bold text-amber-900 flex items-center gap-1.5">
                  <span>💬</span> 実際の宿泊者からの評価・口コミ
                </span>
                <p className="text-stone-700 leading-relaxed">楽天トラベル評価4.60点、口コミ3400件超。「王様のビュッフェが圧巻のクオリティで建物もまさに宮殿」「お部屋が広すぎて別世界、一生の思い出になった」と大絶賛。</p>
              </div>

              {/* 宿基本情報 */}
              <div className="text-xs text-stone-500 grid sm:grid-cols-2 gap-2 bg-stone-50 p-4 rounded-xl">
                <div><span className="font-semibold text-stone-700">住所：</span>和歌山県 西牟婁郡白浜町3745</div>
                <div><span className="font-semibold text-stone-700">宿泊目安：</span>¥27,000〜 /人</div>
                <div><span className="font-semibold text-stone-700">楽天施設ID：</span>14111</div>
                <div><span className="font-semibold text-stone-700">予約区分：</span>楽天ふるさと納税トラベルクーポン対象</div>
              </div>

              <div className="pt-2">
                <a
                  href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FJBe8h%2F%3Ff_no%3D14111"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full text-center bg-gradient-to-r from-amber-700 to-amber-900 hover:from-amber-800 hover:to-stone-900 text-white font-bold py-3.5 px-6 rounded-xl shadow transition"
                >
                  【楽天トラベル】白浜温泉　ホテル川久 の宿泊プランとクーポン適用はこちら →
                </a>
              </div>
            </div>
          </article>

          {/* ホテル 2 */}
          <article className="bg-white rounded-3xl overflow-hidden shadow-sm border border-stone-200/80 transition hover:shadow-md">
            <div className="relative aspect-video sm:aspect-[16/9] w-full overflow-hidden bg-stone-100">
              <img
                src="https://img.travel.rakuten.co.jp/share/HOTEL/19739/19739.jpg"
                alt="紀州・白浜温泉　むさし"
                className="w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute top-4 left-4 bg-stone-900/80 backdrop-blur-sm text-white text-xs px-3 py-1.5 rounded-full font-semibold">
                第2選
              </div>
              <div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-sm text-stone-900 text-xs px-3 py-1.5 rounded-full font-bold shadow">
                ★ 4.3（口コミ 2594件）
              </div>
            </div>

            <div className="p-6 sm:p-8 space-y-6">
              <div className="space-y-2">
                <span className="text-xs font-bold text-amber-700 uppercase tracking-wider">和歌山県白浜町</span>
                <h3 className="text-xl sm:text-2xl font-bold font-serif text-stone-900 leading-snug">
                  紀州・白浜温泉　むさし
                </h3>
                <p className="text-xs sm:text-sm font-medium text-amber-800">
                  白良浜まで徒歩1分！二つの異なる自家源泉「斉明湯」と「白良湯」を湛える本格和風旅館
                </p>
              </div>

              <div className="border-t border-b border-stone-100 py-4 space-y-3">
                <h4 className="font-bold text-stone-900 text-sm sm:text-base font-serif">
                  紀州・白浜温泉 むさし —— 白良浜のすぐそばに佇む老舗。本格日本庭園露天風呂と紀州バイキング
                </h4>
                <div className="grid gap-3 text-xs sm:text-sm text-stone-700">
                  
                  <div className="bg-stone-50 p-3.5 rounded-xl border border-stone-200/60">
                    <h5 className="font-bold text-stone-900 mb-1 flex items-center gap-1.5">
                      <span className="text-amber-600">✓</span> 歴史ある二つの自家源泉を引き込んだ大浴場と庭園露天風呂
                    </h5>
                    <p className="text-stone-600 leading-relaxed">中大浴場と露天風呂で異なる源泉を引く贅沢。体の芯までぽかぽかに温まる良質なナトリウム塩化物泉をじっくり堪能できます。</p>
                  </div>
                  <div className="bg-stone-50 p-3.5 rounded-xl border border-stone-200/60">
                    <h5 className="font-bold text-stone-900 mb-1 flex items-center gap-1.5">
                      <span className="text-amber-600">✓</span> 白良浜まで水着のまま直行できる抜群のロケーション
                    </h5>
                    <p className="text-stone-600 leading-relaxed">白砂のビーチまで徒歩わずか1分。海水浴や夕暮れの海辺散策、朝のビーチウォーキングに最高の立地です。</p>
                  </div>
                  <div className="bg-stone-50 p-3.5 rounded-xl border border-stone-200/60">
                    <h5 className="font-bold text-stone-900 mb-1 flex items-center gap-1.5">
                      <span className="text-amber-600">✓</span> 紀州の海の幸や熊野牛が並ぶ豪華和洋バイキング＆会席料理
                    </h5>
                    <p className="text-stone-600 leading-relaxed">旬魚のお造りや揚げたて天ぷら、和歌山ラーメンなど郷土の味が充実。家族みんなで気兼ねなく楽しめる料理が揃っています。</p>
                  </div>
                </div>
              </div>

              {/* レビュー抜粋 */}
              <div className="bg-amber-50/60 p-4 rounded-2xl border border-amber-100 text-xs sm:text-sm space-y-1.5">
                <span className="font-bold text-amber-900 flex items-center gap-1.5">
                  <span>💬</span> 実際の宿泊者からの評価・口コミ
                </span>
                <p className="text-stone-700 leading-relaxed">楽天トラベル評価4.33点、口コミ5200件超。「白良浜が目の前で海遊びに最高」「お風呂のお湯が良く、バイキングも種類豊富で美味しかった」とファミリーに大人気。</p>
              </div>

              {/* 宿基本情報 */}
              <div className="text-xs text-stone-500 grid sm:grid-cols-2 gap-2 bg-stone-50 p-4 rounded-xl">
                <div><span className="font-semibold text-stone-700">住所：</span>和歌山県 西牟婁郡白浜町868</div>
                <div><span className="font-semibold text-stone-700">宿泊目安：</span>¥8,800〜 /人</div>
                <div><span className="font-semibold text-stone-700">楽天施設ID：</span>19739</div>
                <div><span className="font-semibold text-stone-700">予約区分：</span>楽天ふるさと納税トラベルクーポン対象</div>
              </div>

              <div className="pt-2">
                <a
                  href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FJBe8h%2F%3Ff_no%3D19739"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full text-center bg-gradient-to-r from-amber-700 to-amber-900 hover:from-amber-800 hover:to-stone-900 text-white font-bold py-3.5 px-6 rounded-xl shadow transition"
                >
                  【楽天トラベル】紀州・白浜温泉　むさし の宿泊プランとクーポン適用はこちら →
                </a>
              </div>
            </div>
          </article>

          {/* ホテル 3 */}
          <article className="bg-white rounded-3xl overflow-hidden shadow-sm border border-stone-200/80 transition hover:shadow-md">
            <div className="relative aspect-video sm:aspect-[16/9] w-full overflow-hidden bg-stone-100">
              <img
                src="https://img.travel.rakuten.co.jp/share/HOTEL/2909/2909.jpg"
                alt="白浜温泉　白良荘グランドホテル"
                className="w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute top-4 left-4 bg-stone-900/80 backdrop-blur-sm text-white text-xs px-3 py-1.5 rounded-full font-semibold">
                第3選
              </div>
              <div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-sm text-stone-900 text-xs px-3 py-1.5 rounded-full font-bold shadow">
                ★ 4.48（口コミ 2489件）
              </div>
            </div>

            <div className="p-6 sm:p-8 space-y-6">
              <div className="space-y-2">
                <span className="text-xs font-bold text-amber-700 uppercase tracking-wider">和歌山県白浜町</span>
                <h3 className="text-xl sm:text-2xl font-bold font-serif text-stone-900 leading-snug">
                  白浜温泉　白良荘グランドホテル
                </h3>
                <p className="text-xs sm:text-sm font-medium text-amber-800">
                  白良浜のパノラマが目の前に広がる全室オーシャンビュー！浜辺の露天風呂と名物クエ会席
                </p>
              </div>

              <div className="border-t border-b border-stone-100 py-4 space-y-3">
                <h4 className="font-bold text-stone-900 text-sm sm:text-base font-serif">
                  白浜温泉 白良荘グランドホテル —— 窓一面に広がる白砂青松。海と繋がる絶景温泉と紀州の味覚
                </h4>
                <div className="grid gap-3 text-xs sm:text-sm text-stone-700">
                  
                  <div className="bg-stone-50 p-3.5 rounded-xl border border-stone-200/60">
                    <h5 className="font-bold text-stone-900 mb-1 flex items-center gap-1.5">
                      <span className="text-amber-600">✓</span> 白良浜を眼下に見下ろす展望露天風呂「潮風」と「眺望の湯」
                    </h5>
                    <p className="text-stone-600 leading-relaxed">青い海と白い砂浜を一望する絶景露天風呂。波の音を間近に聞きながら名湯に浸かる至福のひとときを味わえます。</p>
                  </div>
                  <div className="bg-stone-50 p-3.5 rounded-xl border border-stone-200/60">
                    <h5 className="font-bold text-stone-900 mb-1 flex items-center gap-1.5">
                      <span className="text-amber-600">✓</span> 全客室が海に面した開放感あふれるシーサイドロケーション
                    </h5>
                    <p className="text-stone-600 leading-relaxed">お部屋にいながらエメラルドグリーンの海と夕日を独り占め。夜には静かな波音が心地よい眠りを誘います。</p>
                  </div>
                  <div className="bg-stone-50 p-3.5 rounded-xl border border-stone-200/60">
                    <h5 className="font-bold text-stone-900 mb-1 flex items-center gap-1.5">
                      <span className="text-amber-600">✓</span> 紀州名物「天然本クエ」や伊勢海老・熊野牛を味わう会席ディナー
                    </h5>
                    <p className="text-stone-600 leading-relaxed">脂の乗った白身の王様・クエの鍋や薄造り。料理人が丹精込めて仕立てる和歌山ならではの美食会席を堪能できます。</p>
                  </div>
                </div>
              </div>

              {/* レビュー抜粋 */}
              <div className="bg-amber-50/60 p-4 rounded-2xl border border-amber-100 text-xs sm:text-sm space-y-1.5">
                <span className="font-bold text-amber-900 flex items-center gap-1.5">
                  <span>💬</span> 実際の宿泊者からの評価・口コミ
                </span>
                <p className="text-stone-700 leading-relaxed">楽天トラベル評価4.45点、口コミ3100件超。「部屋とお風呂からの白良浜の眺めが最高」「お料理のクエがとても美味しく、接客も丁寧で大満足」と高評価。</p>
              </div>

              {/* 宿基本情報 */}
              <div className="text-xs text-stone-500 grid sm:grid-cols-2 gap-2 bg-stone-50 p-4 rounded-xl">
                <div><span className="font-semibold text-stone-700">住所：</span>和歌山県 西牟婁郡白浜町868</div>
                <div><span className="font-semibold text-stone-700">宿泊目安：</span>¥8,910〜 /人</div>
                <div><span className="font-semibold text-stone-700">楽天施設ID：</span>2909</div>
                <div><span className="font-semibold text-stone-700">予約区分：</span>楽天ふるさと納税トラベルクーポン対象</div>
              </div>

              <div className="pt-2">
                <a
                  href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FJBe8h%2F%3Ff_no%3D2909"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full text-center bg-gradient-to-r from-amber-700 to-amber-900 hover:from-amber-800 hover:to-stone-900 text-white font-bold py-3.5 px-6 rounded-xl shadow transition"
                >
                  【楽天トラベル】白浜温泉　白良荘グランドホテル の宿泊プランとクーポン適用はこちら →
                </a>
              </div>
            </div>
          </article>
        </section>

        {/* エリア観光・見どころ */}
        <section className="space-y-4">
          <h2 className="text-xl sm:text-2xl font-bold font-serif text-stone-900 flex items-center gap-2">
            <span>🗺️</span> 南紀白浜温泉・アドベンチャーワールド＆千畳敷・三段壁ガイド
          </h2>
          <div className="grid gap-4">

            <div className="bg-white p-5 rounded-2xl border border-stone-200/80 shadow-sm space-y-2">
              <h4 className="font-bold text-stone-900 text-sm sm:text-base font-serif flex items-center gap-2">
                <span className="w-6 h-6 rounded-full bg-amber-100 text-amber-900 flex items-center justify-center text-xs font-sans font-bold">1</span>
                アドベンチャーワールドでの動物ふれあい＆サファリツアー
              </h4>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed pl-8">
                パンダファミリーやイルカショー、放し飼いのサファリゾーンが人気のテーマパーク。大人から子供まで一日中感動体験を楽しめます。
              </p>
            </div>
            <div className="bg-white p-5 rounded-2xl border border-stone-200/80 shadow-sm space-y-2">
              <h4 className="font-bold text-stone-900 text-sm sm:text-base font-serif flex items-center gap-2">
                <span className="w-6 h-6 rounded-full bg-amber-100 text-amber-900 flex items-center justify-center text-xs font-sans font-bold">2</span>
                名勝「千畳敷」と「三段壁・三段壁洞窟」のダイナミック景観
              </h4>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed pl-8">
                太平洋の荒波が削り出した広大な岩畳「千畳敷」と、高さ50mの断崖絶壁「三段壁」。地下の洞窟では迫力ある波の飛沫を間近に体感できます。
              </p>
            </div>
            <div className="bg-white p-5 rounded-2xl border border-stone-200/80 shadow-sm space-y-2">
              <h4 className="font-bold text-stone-900 text-sm sm:text-base font-serif flex items-center gap-2">
                <span className="w-6 h-6 rounded-full bg-amber-100 text-amber-900 flex items-center justify-center text-xs font-sans font-bold">3</span>
                白良浜のサンセットと湯崎七湯「崎の湯」露天風呂
              </h4>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed pl-8">
                日本の夕陽百選に選ばれる白良浜の夕暮れ。岩礁に打ち寄せる波を直接浴びるような日本最古の野天風呂「崎の湯」も必見です。
              </p>
            </div>
          </div>
        </section>

        {/* ふるさと納税活用ステップ */}
        <section className="bg-gradient-to-br from-amber-900 via-stone-900 to-stone-950 text-white rounded-3xl p-6 sm:p-8 shadow-xl space-y-6">
          <div className="space-y-2">
            <span className="text-xs uppercase tracking-widest text-amber-300 font-semibold">How to Use Coupon</span>
            <h2 className="text-xl sm:text-2xl font-bold font-serif text-amber-50">
              和歌山県白浜町ふるさと納税×楽天トラベルクーポン活用手順
            </h2>
            <p className="text-stone-300 text-xs sm:text-sm">
              初めての方でも迷わず利用できる3ステップ。予約済みのプランにも後から適用可能です。
            </p>
          </div>

          <div className="grid sm:grid-cols-3 gap-4 text-xs sm:text-sm">

            <div className="bg-stone-900/60 p-4 rounded-2xl border border-amber-500/20 space-y-2">
              <span className="inline-block bg-amber-500/20 text-amber-300 font-mono text-xs px-2.5 py-0.5 rounded font-semibold">
                Step 1: 楽天ふるさと納税で「和歌山県白浜町」クーポンを獲得
              </span>
              <p className="text-stone-300 text-xs sm:text-sm leading-relaxed">
                楽天ふるさと納税で白浜町を選び、トラベルクーポンを返礼品として申し込みます。寄付額の30%相当のクーポンがアカウントに付与されます。
              </p>
            </div>
            <div className="bg-stone-900/60 p-4 rounded-2xl border border-amber-500/20 space-y-2">
              <span className="inline-block bg-amber-500/20 text-amber-300 font-mono text-xs px-2.5 py-0.5 rounded font-semibold">
                Step 2: 南紀白浜空港やJR特急くろしお号でアクセス
              </span>
              <p className="text-stone-300 text-xs sm:text-sm leading-relaxed">
                羽田空港から南紀白浜空港まで直行便でわずか約70分、新大阪駅から特急くろしおで約2時間15分。3年間の有効期間内で、夏休みや冬のクエシーズンに合わせて計画できます。
              </p>
            </div>
            <div className="bg-stone-900/60 p-4 rounded-2xl border border-amber-500/20 space-y-2">
              <span className="inline-block bg-amber-500/20 text-amber-300 font-mono text-xs px-2.5 py-0.5 rounded font-semibold">
                Step 3: 楽天トラベル予約画面でクーポン割引を適用して予約完了
              </span>
              <p className="text-stone-300 text-xs sm:text-sm leading-relaxed">
                ホテル川久、紀州・白浜温泉むさし、白良荘グランドホテルなどの宿泊プランを選び、決済時にクーポンを選択すれば宿泊代金から大幅な割引が適用されます。
              </p>
            </div>
          </div>

          <div className="text-center pt-2">
            <a
              href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2Fspecial%2Ffurusato%2F"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-red-500 to-amber-500 text-white font-extrabold px-8 py-3.5 rounded-xl shadow-lg hover:opacity-95 transition"
            >
              <span>楽天ふるさと納税トラベルクーポンを獲得する</span>
              <span>→</span>
            </a>
          </div>
        </section>

        {/* 内部リンク・ハブ導線 */}
        <section className="border-t border-stone-200 pt-8 space-y-4">
          <h3 className="text-base sm:text-lg font-bold font-serif text-stone-900">
            関連するふるさと納税トラベル特集
          </h3>
          <ul className="grid sm:grid-cols-2 gap-3 text-xs sm:text-sm text-stone-600">
            <li>
              <Link href="/travel-savings-guide" className="hover:text-amber-800 underline flex items-center gap-1.5 py-1">
                <span>▸</span> ふるさと納税×旅行 完全攻略ハブページトップ
              </Link>
            </li>
            <li>
              <Link href="/furusato-tax-travel-after-booking-discount-guide" className="hover:text-amber-800 underline flex items-center gap-1.5 py-1">
                <span>▸</span> 予約済みでも間に合う！楽天トラベル「あとから適用」ガイド
              </Link>
            </li>
            <li>
              <Link href="/furusato-tax-ibusuki-onsen-sand-bath-ocean-stay" className="hover:text-amber-800 underline flex items-center gap-1.5 py-1">
                <span>▸</span> 指宿温泉 天然砂むし温泉＆錦江湾オーシャンビュー特集
              </Link>
            </li>
            <li>
              <Link href="/furusato-tax-nyuto-onsen-secret-milky-stay" className="hover:text-amber-800 underline flex items-center gap-1.5 py-1">
                <span>▸</span> 乳頭温泉郷 日本屈指の乳白色秘湯＆田沢湖畔特集
              </Link>
            </li>
          </ul>
        </section>
      </div>
    </main>
  );
}
