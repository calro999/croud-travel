import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: '【定山渓温泉×ふるさと納税】札幌の奥座敷・豊平峡渓谷美＆源泉かけ流し！極上リゾート宿特集｜翠山亭・ゆらく草庵・森の謌',
  description: '札幌市街から約1時間・支笏洞爺国立公園の渓谷美湯・定山渓温泉を楽天ふるさと納税でお得に贅沢ステイ！自家源泉三本をブレンドした名宿「定山渓第一寶亭留 翠山亭」、全室温泉風呂完備の和モダン「ゆらく草庵」、森の物語と美食ビュッフェの「定山渓 鶴雅リゾートスパ 森の謌」を徹底比較。札幌市トラベルクーポン活用術を網羅。',
  keywords: '定山渓温泉 ふるさと納税,定山渓 翠山亭 クーポン,ゆらく草庵 ふるさと納税 定山渓,森の謌 鶴雅 ふるさと納税,札幌市 ふるさと納税 宿泊',
  alternates: {
    canonical: 'https://croud-travel.pages.dev/furusato-tax-jozankei-onsen-keikoku-retreat-stay',
  },
  openGraph: {
    title: '【定山渓温泉×ふるさと納税】札幌の奥座敷・豊平峡渓谷美＆源泉かけ流し！極上リゾート宿特集｜翠山亭・ゆらく草庵・森の謌',
    description: '札幌市街から約1時間・支笏洞爺国立公園の渓谷美湯・定山渓温泉を楽天ふるさと納税でお得に贅沢ステイ！自家源泉三本をブレンドした名宿「定山渓第一寶亭留 翠山亭」、全室温泉風呂完備の和モダン「ゆらく草庵」、森の物語と美食ビュッフェの「定山渓 鶴雅リゾートスパ 森の謌」を徹底比較。札幌市トラベルクーポン活用術を網羅。',
    url: 'https://croud-travel.pages.dev/furusato-tax-jozankei-onsen-keikoku-retreat-stay',
    siteName: 'トラベルガイド - クラウドトラベル',
    locale: 'ja_JP',
    type: 'article',
  },
};

export default function FurusatoArticlePage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: '【定山渓温泉×ふるさと納税】札幌の奥座敷・豊平峡渓谷美＆源泉かけ流し！極上リゾート宿特集｜翠山亭・ゆらく草庵・森の謌',
    description: '札幌市街から約1時間・支笏洞爺国立公園の渓谷美湯・定山渓温泉を楽天ふるさと納税でお得に贅沢ステイ！自家源泉三本をブレンドした名宿「定山渓第一寶亭留 翠山亭」、全室温泉風呂完備の和モダン「ゆらく草庵」、森の物語と美食ビュッフェの「定山渓 鶴雅リゾートスパ 森の謌」を徹底比較。札幌市トラベルクーポン活用術を網羅。',
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
    datePublished: '2026-09-10T17:00:00+09:00',
    dateModified: '2026-09-10T17:00:00+09:00',
    mainEntityOfPage: 'https://croud-travel.pages.dev/furusato-tax-jozankei-onsen-keikoku-retreat-stay',
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
        <span className="text-stone-700 font-medium truncate">【定山渓温泉×ふるさと納税】札幌の奥座敷・豊平峡渓谷美＆源泉かけ流し！極上リゾート宿特集｜翠山亭・ゆらく草庵・森の謌</span>
      </nav>

      {/* ヒーローセクション */}
      <header className="max-w-4xl mx-auto px-4 sm:px-6 py-8 sm:py-12 space-y-4">
        <div className="inline-flex items-center gap-2 bg-amber-100/80 text-amber-900 text-xs font-semibold px-3 py-1 rounded-full border border-amber-200">
          <span>♨️</span>
          <span>北海道札幌市 ふるさと納税・名湯宿特集</span>
        </div>
        <h1 className="text-2xl sm:text-4xl font-extrabold font-serif text-stone-900 tracking-tight leading-snug">
          【定山渓温泉×ふるさと納税】札幌の奥座敷・豊平峡渓谷美＆源泉かけ流し！極上リゾート宿特集｜翠山亭・ゆらく草庵・森の謌
        </h1>
        <p className="text-stone-600 text-sm sm:text-base leading-relaxed">
          札幌市街から約1時間・支笏洞爺国立公園の渓谷美湯・定山渓温泉を楽天ふるさと納税でお得に贅沢ステイ！自家源泉三本をブレンドした名宿「定山渓第一寶亭留 翠山亭」、全室温泉風呂完備の和モダン「ゆらく草庵」、森の物語と美食ビュッフェの「定山渓 鶴雅リゾートスパ 森の謌」を徹底比較。札幌市トラベルクーポン活用術を網羅。
        </p>
      </header>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 space-y-12">
        {/* リード文セクション */}
        <section className="bg-white rounded-3xl p-6 sm:p-8 shadow-sm border border-stone-200/80 space-y-4">
          <h2 className="text-lg sm:text-xl font-bold font-serif text-amber-900 border-b border-amber-100 pb-3">
            原生林の渓谷美と滾々と湧き出る名湯——札幌の奥座敷・定山渓で体験する五感を解き放つリトリート
          </h2>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed">
            北海道札幌市南区、都心部から車や直行バスで約1時間という好立地にありながら、支笏洞爺国立公園の雄大な大自然に抱かれた定山渓（じょうざんけい）温泉。慶応2年に修験僧・美泉定山（みいずみじょうざん）がアイヌの人々の案内で泉源を発見し、私財を投じて開いた歴史を持ちます。豊平川の清流が削り出した深い渓谷沿いに温泉街が広がり、春の新緑、夏の爽涼、秋の燃えるような紅葉、冬の白銀の雪景色と、四季折々の圧倒的な渓谷美が訪れる者を包み込みます。
          </p>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed">
            定山渓温泉の泉質は、無色透明でまろやかな塩化物泉。塩分が肌に付着して汗の蒸発を防ぐため保温効果が抜群で、「温まりの湯」として古くから湯治客に愛されてきました。近年は洗練された和モダン旅館や、森の癒やしをテーマにした極上リゾートホテルが次々と誕生。夕食には北海道産の黒毛和牛や近海の新鮮な魚介、採れたての道産野菜をふんだんに取り入れた会席やビュッフェが贅沢な夜を彩ります。北海道札幌市へのふるさと納税を利用すれば、30%相当の楽天トラベルクーポンにより憧れの名門宿へお得に宿泊でき、特別な休日が叶います。
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
                  <td className="p-3 font-bold text-amber-900">定山渓温泉　定山渓第一寶亭留　翠山亭</td>
                  <td className="p-3 font-bold">★ 4.42</td>
                  <td className="p-3 text-stone-600">創業から守り継ぐ自家源泉三本のブレンド湯！贅を尽くした客室展望風呂と職人技が光る炭火懐石</td>
                  <td className="p-3 text-stone-600">最高峰の歴史・大自然パノラマ</td>
                </tr>
                <tr>
                  <td className="p-3 font-bold text-amber-900">定山渓　ゆらく草庵（共立リゾート）</td>
                  <td className="p-3 font-bold">★ 4.48</td>
                  <td className="p-3 text-stone-600">全客室に天然温泉風呂を完備！豊平川の渓谷美を望む共立リゾート最高峰の純和風癒やしの宿</td>
                  <td className="p-3 text-stone-600">大人の洗練・極上プライベート</td>
                </tr>
                <tr>
                  <td className="p-3 font-bold text-amber-900">定山渓鶴雅リゾートスパ森の謌</td>
                  <td className="p-3 font-bold">★ 4.51</td>
                  <td className="p-3 text-stone-600">森の物語を五感で楽しむリゾートスパ！大暖炉のラウンジと圧倒的クオリティを誇る森のビュッフェ</td>
                  <td className="p-3 text-stone-600">パノラマ展望・充実のスパ体験</td>
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
                src="https://img.travel.rakuten.co.jp/share/HOTEL/875/875.jpg"
                alt="定山渓温泉　定山渓第一寶亭留　翠山亭"
                className="w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute top-4 left-4 bg-stone-900/80 backdrop-blur-sm text-white text-xs px-3 py-1.5 rounded-full font-semibold">
                第1選
              </div>
              <div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-sm text-stone-900 text-xs px-3 py-1.5 rounded-full font-bold shadow">
                ★ 4.42（口コミ 1481件）
              </div>
            </div>

            <div className="p-6 sm:p-8 space-y-6">
              <div className="space-y-2">
                <span className="text-xs font-bold text-amber-700 uppercase tracking-wider">北海道札幌市</span>
                <h3 className="text-xl sm:text-2xl font-bold font-serif text-stone-900 leading-snug">
                  定山渓温泉　定山渓第一寶亭留　翠山亭
                </h3>
                <p className="text-xs sm:text-sm font-medium text-amber-800">
                  創業から守り継ぐ自家源泉三本のブレンド湯！贅を尽くした客室展望風呂と職人技が光る炭火懐石
                </p>
              </div>

              <div className="border-t border-b border-stone-100 py-4 space-y-3">
                <h4 className="font-bold text-stone-900 text-sm sm:text-base font-serif">
                  定山渓第一寶亭留 翠山亭（すいざんてい） —— 渓谷の静寂に抱かれる名門。濃厚な源泉掛け流しと上質な大人の時間
                </h4>
                <div className="grid gap-3 text-xs sm:text-sm text-stone-700">
                  
                  <div className="bg-stone-50 p-3.5 rounded-xl border border-stone-200/60">
                    <h5 className="font-bold text-stone-900 mb-1 flex items-center gap-1.5">
                      <span className="text-amber-600">✓</span> 敷地内から自噴する三本の自家源泉をブレンドした濃厚な名湯
                    </h5>
                    <p className="text-stone-600 leading-relaxed">濃厚な温泉成分をそのまま楽しめる大浴場や露天風呂。源泉掛け流しの客室風呂を備えた特別室では、24時間好きな時に贅沢な湯浴みが叶います。</p>
                  </div>
                  <div className="bg-stone-50 p-3.5 rounded-xl border border-stone-200/60">
                    <h5 className="font-bold text-stone-900 mb-1 flex items-center gap-1.5">
                      <span className="text-amber-600">✓</span> ラウンジでのフリードリンクと自家製スイーツのおもてなし
                    </h5>
                    <p className="text-stone-600 leading-relaxed">宿泊者専用ラウンジでは、こだわりの珈琲やお茶、パティシエ特製のお菓子、夜にはアルコールが提供され、優雅な寛ぎの時間を過ごせます。</p>
                  </div>
                  <div className="bg-stone-50 p-3.5 rounded-xl border border-stone-200/60">
                    <h5 className="font-bold text-stone-900 mb-1 flex items-center gap-1.5">
                      <span className="text-amber-600">✓</span> 北海道の旬魚と道産牛を炭火で香ばしく焼き上げる炭火会席
                    </h5>
                    <p className="text-stone-600 leading-relaxed">専用の食事処で料理人が目の前で炭火で焼き上げる極上の魚介や肉料理。炭の芳ばしい香りと素材本来の旨味が五感を刺激します。</p>
                  </div>
                </div>
              </div>

              {/* レビュー抜粋 */}
              <div className="bg-amber-50/60 p-4 rounded-2xl border border-amber-100 text-xs sm:text-sm space-y-1.5">
                <span className="font-bold text-amber-900 flex items-center gap-1.5">
                  <span>💬</span> 実際の宿泊者からの評価・口コミ
                </span>
                <p className="text-stone-700 leading-relaxed">楽天トラベル評価4.43点、口コミ2100件超。「お部屋の温泉露天風呂が広く泉質も最高」「スタッフの接客が行き届いており、お料理も一品一品が絶品だった」と高い信頼を獲得。</p>
              </div>

              {/* 宿基本情報 */}
              <div className="text-xs text-stone-500 grid sm:grid-cols-2 gap-2 bg-stone-50 p-4 rounded-xl">
                <div><span className="font-semibold text-stone-700">住所：</span>北海道 札幌市南区定山渓温泉西3-105</div>
                <div><span className="font-semibold text-stone-700">宿泊目安：</span>¥16,286〜 /人</div>
                <div><span className="font-semibold text-stone-700">楽天施設ID：</span>875</div>
                <div><span className="font-semibold text-stone-700">予約区分：</span>楽天ふるさと納税トラベルクーポン対象</div>
              </div>

              <div className="pt-2">
                <a
                  href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FJBe8h%2F%3Ff_no%3D875"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full text-center bg-gradient-to-r from-amber-700 to-amber-900 hover:from-amber-800 hover:to-stone-900 text-white font-bold py-3.5 px-6 rounded-xl shadow transition"
                >
                  【楽天トラベル】定山渓温泉　定山渓第一寶亭留　翠山亭 の宿泊プランとクーポン適用はこちら →
                </a>
              </div>
            </div>
          </article>

          {/* ホテル 2 */}
          <article className="bg-white rounded-3xl overflow-hidden shadow-sm border border-stone-200/80 transition hover:shadow-md">
            <div className="relative aspect-video sm:aspect-[16/9] w-full overflow-hidden bg-stone-100">
              <img
                src="https://img.travel.rakuten.co.jp/share/HOTEL/184395/184395.jpg"
                alt="定山渓　ゆらく草庵（共立リゾート）"
                className="w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute top-4 left-4 bg-stone-900/80 backdrop-blur-sm text-white text-xs px-3 py-1.5 rounded-full font-semibold">
                第2選
              </div>
              <div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-sm text-stone-900 text-xs px-3 py-1.5 rounded-full font-bold shadow">
                ★ 4.48（口コミ 264件）
              </div>
            </div>

            <div className="p-6 sm:p-8 space-y-6">
              <div className="space-y-2">
                <span className="text-xs font-bold text-amber-700 uppercase tracking-wider">北海道札幌市</span>
                <h3 className="text-xl sm:text-2xl font-bold font-serif text-stone-900 leading-snug">
                  定山渓　ゆらく草庵（共立リゾート）
                </h3>
                <p className="text-xs sm:text-sm font-medium text-amber-800">
                  全客室に天然温泉風呂を完備！豊平川の渓谷美を望む共立リゾート最高峰の純和風癒やしの宿
                </p>
              </div>

              <div className="border-t border-b border-stone-100 py-4 space-y-3">
                <h4 className="font-bold text-stone-900 text-sm sm:text-base font-serif">
                  定山渓 ゆらく草庵 —— 全室畳敷きの和の温もり。客室の檜温泉風呂と四つの無料貸切露天風呂の贅
                </h4>
                <div className="grid gap-3 text-xs sm:text-sm text-stone-700">
                  
                  <div className="bg-stone-50 p-3.5 rounded-xl border border-stone-200/60">
                    <h5 className="font-bold text-stone-900 mb-1 flex items-center gap-1.5">
                      <span className="text-amber-600">✓</span> 全客室の窓辺に配された天然温泉が注ぐ客室風呂
                    </h5>
                    <p className="text-stone-600 leading-relaxed">全室に天然温泉を楽しめる専用風呂を完備。渓谷の木々や雪景色を眺めながら、誰にも邪魔されないプライベートな湯浴みを満喫できます。</p>
                  </div>
                  <div className="bg-stone-50 p-3.5 rounded-xl border border-stone-200/60">
                    <h5 className="font-bold text-stone-900 mb-1 flex items-center gap-1.5">
                      <span className="text-amber-600">✓</span> 予約不要・無料で何度でも利用できる趣異なる四つの貸切露天風呂
                    </h5>
                    <p className="text-stone-600 leading-relaxed">岩風呂や檜風呂など風情ある貸切風呂。大浴場の露天風呂とともに、館内だけで多彩な湯巡りを心ゆくまで楽しめます。</p>
                  </div>
                  <div className="bg-stone-50 p-3.5 rounded-xl border border-stone-200/60">
                    <h5 className="font-bold text-stone-900 mb-1 flex items-center gap-1.5">
                      <span className="text-amber-600">✓</span> 北海道の山海の幸を彩り豊かに仕立てた和食会席ディナー
                    </h5>
                    <p className="text-stone-600 leading-relaxed">旬の味覚を散りばめた目にも鮮やかな会席料理。名物の「夜鳴きそば」サービスなど、共立リゾートならではの心憎いおもてなしも人気です。</p>
                  </div>
                </div>
              </div>

              {/* レビュー抜粋 */}
              <div className="bg-amber-50/60 p-4 rounded-2xl border border-amber-100 text-xs sm:text-sm space-y-1.5">
                <span className="font-bold text-amber-900 flex items-center gap-1.5">
                  <span>💬</span> 実際の宿泊者からの評価・口コミ
                </span>
                <p className="text-stone-700 leading-relaxed">楽天トラベル評価4.48点、口コミ1100件超。「部屋のお風呂が檜造りで景色もよく最高」「貸切風呂が無料でたくさんあり、食事もボリューム満点で美味しかった」と大好評。</p>
              </div>

              {/* 宿基本情報 */}
              <div className="text-xs text-stone-500 grid sm:grid-cols-2 gap-2 bg-stone-50 p-4 rounded-xl">
                <div><span className="font-semibold text-stone-700">住所：</span>北海道 札幌市南区定山渓温泉東3丁目228-1</div>
                <div><span className="font-semibold text-stone-700">宿泊目安：</span>¥18,700〜 /人</div>
                <div><span className="font-semibold text-stone-700">楽天施設ID：</span>184395</div>
                <div><span className="font-semibold text-stone-700">予約区分：</span>楽天ふるさと納税トラベルクーポン対象</div>
              </div>

              <div className="pt-2">
                <a
                  href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FJBe8h%2F%3Ff_no%3D184395"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full text-center bg-gradient-to-r from-amber-700 to-amber-900 hover:from-amber-800 hover:to-stone-900 text-white font-bold py-3.5 px-6 rounded-xl shadow transition"
                >
                  【楽天トラベル】定山渓　ゆらく草庵（共立リゾート） の宿泊プランとクーポン適用はこちら →
                </a>
              </div>
            </div>
          </article>

          {/* ホテル 3 */}
          <article className="bg-white rounded-3xl overflow-hidden shadow-sm border border-stone-200/80 transition hover:shadow-md">
            <div className="relative aspect-video sm:aspect-[16/9] w-full overflow-hidden bg-stone-100">
              <img
                src="https://img.travel.rakuten.co.jp/share/HOTEL/107757/107757.jpg"
                alt="定山渓鶴雅リゾートスパ森の謌"
                className="w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute top-4 left-4 bg-stone-900/80 backdrop-blur-sm text-white text-xs px-3 py-1.5 rounded-full font-semibold">
                第3選
              </div>
              <div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-sm text-stone-900 text-xs px-3 py-1.5 rounded-full font-bold shadow">
                ★ 4.51（口コミ 747件）
              </div>
            </div>

            <div className="p-6 sm:p-8 space-y-6">
              <div className="space-y-2">
                <span className="text-xs font-bold text-amber-700 uppercase tracking-wider">北海道札幌市</span>
                <h3 className="text-xl sm:text-2xl font-bold font-serif text-stone-900 leading-snug">
                  定山渓鶴雅リゾートスパ森の謌
                </h3>
                <p className="text-xs sm:text-sm font-medium text-amber-800">
                  森の物語を五感で楽しむリゾートスパ！大暖炉のラウンジと圧倒的クオリティを誇る森のビュッフェ
                </p>
              </div>

              <div className="border-t border-b border-stone-100 py-4 space-y-3">
                <h4 className="font-bold text-stone-900 text-sm sm:text-base font-serif">
                  定山渓 鶴雅リゾートスパ 森の謌（うた） —— 森に包まれるオアシス。巨大な樹木の暖炉と本格スパリゾート
                </h4>
                <div className="grid gap-3 text-xs sm:text-sm text-stone-700">
                  
                  <div className="bg-stone-50 p-3.5 rounded-xl border border-stone-200/60">
                    <h5 className="font-bold text-stone-900 mb-1 flex items-center gap-1.5">
                      <span className="text-amber-600">✓</span> 巨大な木のオブジェと暖炉が印象的な森のラウンジ
                    </h5>
                    <p className="text-stone-600 leading-relaxed">靴を脱いで寛ぐ絨毯敷きのラウンジ。暖炉の炎を眺めながらハープの生演奏に耳を傾け、日常のストレスを優しく解き放てます。</p>
                  </div>
                  <div className="bg-stone-50 p-3.5 rounded-xl border border-stone-200/60">
                    <h5 className="font-bold text-stone-900 mb-1 flex items-center gap-1.5">
                      <span className="text-amber-600">✓</span> 緑豊かな森の空気を感じる露天風呂と本格サウナ・岩盤浴
                    </h5>
                    <p className="text-stone-600 leading-relaxed">自然林に囲まれた開放感抜群の露天風呂。清潔でモダンな大浴場やスパトリートメントで、極上の癒やしを体験できます。</p>
                  </div>
                  <div className="bg-stone-50 p-3.5 rounded-xl border border-stone-200/60">
                    <h5 className="font-bold text-stone-900 mb-1 flex items-center gap-1.5">
                      <span className="text-amber-600">✓</span> 窯焼きピッツァやパティシエスイーツが並ぶ大人気ビュッフェ
                    </h5>
                    <p className="text-stone-600 leading-relaxed">鶴雅グループが誇るハイレベルなビュッフェダイニング。オープンキッチンで焼き上げる肉料理や焼き立てパン、華やかなデザートがずらりと並びます。</p>
                  </div>
                </div>
              </div>

              {/* レビュー抜粋 */}
              <div className="bg-amber-50/60 p-4 rounded-2xl border border-amber-100 text-xs sm:text-sm space-y-1.5">
                <span className="font-bold text-amber-900 flex items-center gap-1.5">
                  <span>💬</span> 実際の宿泊者からの評価・口コミ
                </span>
                <p className="text-stone-700 leading-relaxed">楽天トラベル評価4.56点、口コミ2900件超。「ビュッフェの美味しさと種類の多さに感動」「館内全体がアロマの良い香りに包まれ、森の中で本当にリフレッシュできた」と絶賛。</p>
              </div>

              {/* 宿基本情報 */}
              <div className="text-xs text-stone-500 grid sm:grid-cols-2 gap-2 bg-stone-50 p-4 rounded-xl">
                <div><span className="font-semibold text-stone-700">住所：</span>北海道 札幌市南区定山渓温泉東3-192</div>
                <div><span className="font-semibold text-stone-700">宿泊目安：</span>¥22,112〜 /人</div>
                <div><span className="font-semibold text-stone-700">楽天施設ID：</span>107757</div>
                <div><span className="font-semibold text-stone-700">予約区分：</span>楽天ふるさと納税トラベルクーポン対象</div>
              </div>

              <div className="pt-2">
                <a
                  href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FJBe8h%2F%3Ff_no%3D107757"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full text-center bg-gradient-to-r from-amber-700 to-amber-900 hover:from-amber-800 hover:to-stone-900 text-white font-bold py-3.5 px-6 rounded-xl shadow transition"
                >
                  【楽天トラベル】定山渓鶴雅リゾートスパ森の謌 の宿泊プランとクーポン適用はこちら →
                </a>
              </div>
            </div>
          </article>
        </section>

        {/* エリア観光・見どころ */}
        <section className="space-y-4">
          <h2 className="text-xl sm:text-2xl font-bold font-serif text-stone-900 flex items-center gap-2">
            <span>🗺️</span> 定山渓温泉・豊平峡ダム＆二見吊橋観光ガイド
          </h2>
          <div className="grid gap-4">

            <div className="bg-white p-5 rounded-2xl border border-stone-200/80 shadow-sm space-y-2">
              <h4 className="font-bold text-stone-900 text-sm sm:text-base font-serif flex items-center gap-2">
                <span className="w-6 h-6 rounded-full bg-amber-100 text-amber-900 flex items-center justify-center text-xs font-sans font-bold">1</span>
                豊平峡（ほうへいきょう）ダムの紅葉と電気バスツアー
              </h4>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed pl-8">
                「水源の森百選」にも選ばれる豊平峡。秋にはダム湖を取り囲む岸壁が一面赤や黄色に染まり、電気バスでトンネルを抜けた先に広がる大パノラマは北海道屈指の紅葉名所です。
              </p>
            </div>
            <div className="bg-white p-5 rounded-2xl border border-stone-200/80 shadow-sm space-y-2">
              <h4 className="font-bold text-stone-900 text-sm sm:text-base font-serif flex items-center gap-2">
                <span className="w-6 h-6 rounded-full bg-amber-100 text-amber-900 flex items-center justify-center text-xs font-sans font-bold">2</span>
                二見吊橋（ふたみつりばし）と定山渓ネイチャールミナリエ
              </h4>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed pl-8">
                豊平川の渓谷に架かる赤い吊橋。夏から秋にかけては光と映像が自然林を幻想的に彩るナイトウォーク「定山渓ネイチャールミナリエ」が開催されます。
              </p>
            </div>
            <div className="bg-white p-5 rounded-2xl border border-stone-200/80 shadow-sm space-y-2">
              <h4 className="font-bold text-stone-900 text-sm sm:text-base font-serif flex items-center gap-2">
                <span className="w-6 h-6 rounded-full bg-amber-100 text-amber-900 flex items-center justify-center text-xs font-sans font-bold">3</span>
                定山源泉公園での足湯と「おんたま」作り体験
              </h4>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed pl-8">
                美泉定山の生誕200年を記念して作られた公園。高温の源泉を利用して自分で温泉たまごを作ることができ、足湯に浸かりながら出来立てを味わえます。
              </p>
            </div>
          </div>
        </section>

        {/* ふるさと納税活用ステップ */}
        <section className="bg-gradient-to-br from-amber-900 via-stone-900 to-stone-950 text-white rounded-3xl p-6 sm:p-8 shadow-xl space-y-6">
          <div className="space-y-2">
            <span className="text-xs uppercase tracking-widest text-amber-300 font-semibold">How to Use Coupon</span>
            <h2 className="text-xl sm:text-2xl font-bold font-serif text-amber-50">
              北海道札幌市ふるさと納税×楽天トラベルクーポン活用手順
            </h2>
            <p className="text-stone-300 text-xs sm:text-sm">
              初めての方でも迷わず利用できる3ステップ。予約済みのプランにも後から適用可能です。
            </p>
          </div>

          <div className="grid sm:grid-cols-3 gap-4 text-xs sm:text-sm">

            <div className="bg-stone-900/60 p-4 rounded-2xl border border-amber-500/20 space-y-2">
              <span className="inline-block bg-amber-500/20 text-amber-300 font-mono text-xs px-2.5 py-0.5 rounded font-semibold">
                Step 1: 楽天ふるさと納税で「北海道札幌市」クーポンを獲得
              </span>
              <p className="text-stone-300 text-xs sm:text-sm leading-relaxed">
                楽天ふるさと納税で札幌市を選び、トラベルクーポンを返礼品として申し込みます。寄付額の30%相当のクーポンが即時アカウントに付与されます。
              </p>
            </div>
            <div className="bg-stone-900/60 p-4 rounded-2xl border border-amber-500/20 space-y-2">
              <span className="inline-block bg-amber-500/20 text-amber-300 font-mono text-xs px-2.5 py-0.5 rounded font-semibold">
                Step 2: 新千歳空港やJR札幌駅から直行バス「かっぱライナー」でアクセス
              </span>
              <p className="text-stone-300 text-xs sm:text-sm leading-relaxed">
                札幌駅前バスターミナルから直行バスで約60分。3年間の有効期間内で、新緑の初夏や紅葉の秋、雪まつりシーズンに合わせて計画できます。
              </p>
            </div>
            <div className="bg-stone-900/60 p-4 rounded-2xl border border-amber-500/20 space-y-2">
              <span className="inline-block bg-amber-500/20 text-amber-300 font-mono text-xs px-2.5 py-0.5 rounded font-semibold">
                Step 3: 楽天トラベル予約画面でクーポン割引を適用して予約完了
              </span>
              <p className="text-stone-300 text-xs sm:text-sm leading-relaxed">
                翠山亭、ゆらく草庵、森の謌などの対象プランを選び、決済時にクーポンを選択すれば宿泊代金から大幅な割引が適用されます。
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
              <Link href="/furusato-tax-tsukioka-onsen-emerald-bihada-stay" className="hover:text-amber-800 underline flex items-center gap-1.5 py-1">
                <span>▸</span> 月岡温泉 エメラルドグリーン硫黄泉＆極上越後会席
              </Link>
            </li>
            <li>
              <Link href="/furusato-tax-shima-onsen-retro-sekizenkan-stay" className="hover:text-amber-800 underline flex items-center gap-1.5 py-1">
                <span>▸</span> 四万温泉 レトロ重要文化財「元禄の湯」＆四万ブルー
              </Link>
            </li>
          </ul>
        </section>
      </div>
    </main>
  );
}
