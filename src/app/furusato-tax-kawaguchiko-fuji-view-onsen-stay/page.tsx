import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: '【富士河口湖温泉×ふるさと納税】富士山一望露天風呂＆逆さ富士ステイ！絶景客室で癒やされる宿特集｜秀峰閣湖月・若草の宿丸栄・富士レークホテル',
  description: '世界遺産・霊峰富士と湖が織りなす絶景温泉地・山梨県富士河口湖温泉を楽天ふるさと納税でお得に旅する！全室富士山＆河口湖ビューを誇る「秀峰閣 湖月」、最上階展望風呂と本格会席の名宿「若草の宿 丸栄」、創業昭和七年・バリアフリーと歴史の「富士レークホテル」を徹底比較。富士河口湖町トラベルクーポン活用術を解説。',
  keywords: '河口湖 富士山 露天風呂 ふるさと納税,富士河口湖町 ふるさと納税 宿泊,秀峰閣湖月 ふるさと納税,若草の宿丸栄 クーポン,富士レークホテル ふるさと納税',
  alternates: {
    canonical: 'https://croud-travel.pages.dev/furusato-tax-kawaguchiko-fuji-view-onsen-stay',
  },
  openGraph: {
    title: '【富士河口湖温泉×ふるさと納税】富士山一望露天風呂＆逆さ富士ステイ！絶景客室で癒やされる宿特集｜秀峰閣湖月・若草の宿丸栄・富士レークホテル',
    description: '世界遺産・霊峰富士と湖が織りなす絶景温泉地・山梨県富士河口湖温泉を楽天ふるさと納税でお得に旅する！全室富士山＆河口湖ビューを誇る「秀峰閣 湖月」、最上階展望風呂と本格会席の名宿「若草の宿 丸栄」、創業昭和七年・バリアフリーと歴史の「富士レークホテル」を徹底比較。富士河口湖町トラベルクーポン活用術を解説。',
    url: 'https://croud-travel.pages.dev/furusato-tax-kawaguchiko-fuji-view-onsen-stay',
    siteName: 'トラベルガイド - クラウドトラベル',
    locale: 'ja_JP',
    type: 'article',
  },
};

export default function FurusatoArticlePage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: '【富士河口湖温泉×ふるさと納税】富士山一望露天風呂＆逆さ富士ステイ！絶景客室で癒やされる宿特集｜秀峰閣湖月・若草の宿丸栄・富士レークホテル',
    description: '世界遺産・霊峰富士と湖が織りなす絶景温泉地・山梨県富士河口湖温泉を楽天ふるさと納税でお得に旅する！全室富士山＆河口湖ビューを誇る「秀峰閣 湖月」、最上階展望風呂と本格会席の名宿「若草の宿 丸栄」、創業昭和七年・バリアフリーと歴史の「富士レークホテル」を徹底比較。富士河口湖町トラベルクーポン活用術を解説。',
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
    datePublished: '2026-09-10T16:25:00+09:00',
    dateModified: '2026-09-10T16:25:00+09:00',
    mainEntityOfPage: 'https://croud-travel.pages.dev/furusato-tax-kawaguchiko-fuji-view-onsen-stay',
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
        <span className="text-stone-700 font-medium truncate">【富士河口湖温泉×ふるさと納税】富士山一望露天風呂＆逆さ富士ステイ！絶景客室で癒やされる宿特集｜秀峰閣湖月・若草の宿丸栄・富士レークホテル</span>
      </nav>

      {/* ヒーローセクション */}
      <header className="max-w-4xl mx-auto px-4 sm:px-6 py-8 sm:py-12 space-y-4">
        <div className="inline-flex items-center gap-2 bg-amber-100/80 text-amber-900 text-xs font-semibold px-3 py-1 rounded-full border border-amber-200">
          <span>♨️</span>
          <span>山梨県富士河口湖町 ふるさと納税・名湯宿特集</span>
        </div>
        <h1 className="text-2xl sm:text-4xl font-extrabold font-serif text-stone-900 tracking-tight leading-snug">
          【富士河口湖温泉×ふるさと納税】富士山一望露天風呂＆逆さ富士ステイ！絶景客室で癒やされる宿特集｜秀峰閣湖月・若草の宿丸栄・富士レークホテル
        </h1>
        <p className="text-stone-600 text-sm sm:text-base leading-relaxed">
          世界遺産・霊峰富士と湖が織りなす絶景温泉地・山梨県富士河口湖温泉を楽天ふるさと納税でお得に旅する！全室富士山＆河口湖ビューを誇る「秀峰閣 湖月」、最上階展望風呂と本格会席の名宿「若草の宿 丸栄」、創業昭和七年・バリアフリーと歴史の「富士レークホテル」を徹底比較。富士河口湖町トラベルクーポン活用術を解説。
        </p>
      </header>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 space-y-12">
        {/* リード文セクション */}
        <section className="bg-white rounded-3xl p-6 sm:p-8 shadow-sm border border-stone-200/80 space-y-4">
          <h2 className="text-lg sm:text-xl font-bold font-serif text-amber-900 border-b border-amber-100 pb-3">
            朝日に染まる紅富士、静寂の湖面に映る逆さ富士——名湯に浸かりながら霊峰の雄姿を仰ぐ至高のひととき
          </h2>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed">
            山梨県南都留郡富士河口湖町、富士五湖の中心に位置する河口湖温泉郷。四季折々に表情を変える霊峰富士の圧倒的な美しさと、穏やかな湖面が織りなす絵画のような風景は、古くから多くの旅人を魅了してきました。春の湖畔を彩る桜並木、初夏のラベンダー、秋の燃えるような紅葉トンネル、そして冬の澄み渡る青空と白雪を纏う富士の頂。どの季節に訪れても息を呑む絶景が待っています。
          </p>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed">
            河口湖温泉の最大の魅力は、何と言っても湯船から遮るものなく富士山を眺められる展望露天風呂です。湯煙の向こうにそびえる神々しい富士を眺めながらの入浴は、日常のストレスを一瞬で吹き飛ばしてくれる特別な体験。夕食には甲州名物の甲州牛や富士桜ポーク、山梨県産ワインと楽しむ創作会席が贅沢な夜を彩ります。山梨県富士河口湖町へのふるさと納税で手に入る楽天トラベルクーポンを使えば、寄付額の30%相当の支援を受けられ、憧れの富士ビュー温泉旅館へお得に宿泊できます。
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
                  <td className="p-3 font-bold text-amber-900">富士河口湖温泉　秀峰閣　湖月</td>
                  <td className="p-3 font-bold">★ 4.7</td>
                  <td className="p-3 text-stone-600">全客室＆露天風呂から富士山と河口湖を一望！真正面に逆さ富士を望む河口湖北岸の特等席</td>
                  <td className="p-3 text-stone-600">贅沢な記念日・ご褒美ステイ</td>
                </tr>
                <tr>
                  <td className="p-3 font-bold text-amber-900">富士河口湖温泉　若草の宿　丸栄</td>
                  <td className="p-3 font-bold">★ 4.48</td>
                  <td className="p-3 text-stone-600">最上階の見晴らし展望風呂「富士の湯」！心温まる日本の情緒と匠の技が光る本格季節会席料理</td>
                  <td className="p-3 text-stone-600">落ち着いた大人の癒やし旅</td>
                </tr>
                <tr>
                  <td className="p-3 font-bold text-amber-900">河口湖温泉　富士レークホテル</td>
                  <td className="p-3 font-bold">★ 4.55</td>
                  <td className="p-3 text-stone-600">昭和七年創業・湖畔の歴史を紡ぐクラシックホテル！富士山ビュー客室と安心のバリアフリー対応</td>
                  <td className="p-3 text-stone-600">家族・グループでの満足旅行</td>
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
                src="https://img.travel.rakuten.co.jp/share/HOTEL/43939/43939.jpg"
                alt="富士河口湖温泉　秀峰閣　湖月"
                className="w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute top-4 left-4 bg-stone-900/80 backdrop-blur-sm text-white text-xs px-3 py-1.5 rounded-full font-semibold">
                第1選
              </div>
              <div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-sm text-stone-900 text-xs px-3 py-1.5 rounded-full font-bold shadow">
                ★ 4.7（口コミ 584件）
              </div>
            </div>

            <div className="p-6 sm:p-8 space-y-6">
              <div className="space-y-2">
                <span className="text-xs font-bold text-amber-700 uppercase tracking-wider">山梨県富士河口湖町</span>
                <h3 className="text-xl sm:text-2xl font-bold font-serif text-stone-900 leading-snug">
                  富士河口湖温泉　秀峰閣　湖月
                </h3>
                <p className="text-xs sm:text-sm font-medium text-amber-800">
                  全客室＆露天風呂から富士山と河口湖を一望！真正面に逆さ富士を望む河口湖北岸の特等席
                </p>
              </div>

              <div className="border-t border-b border-stone-100 py-4 space-y-3">
                <h4 className="font-bold text-stone-900 text-sm sm:text-base font-serif">
                  富士河口湖温泉 秀峰閣 湖月（こげつ） —— 遮るもののない大パノラマ。湯上がりのビールサービスと至高の富士山ビュー
                </h4>
                <div className="grid gap-3 text-xs sm:text-sm text-stone-700">
                  
                  <div className="bg-stone-50 p-3.5 rounded-xl border border-stone-200/60">
                    <h5 className="font-bold text-stone-900 mb-1 flex items-center gap-1.5">
                      <span className="text-amber-600">✓</span> 全客室が富士山と河口湖に面した絶好のロケーション
                    </h5>
                    <p className="text-stone-600 leading-relaxed">河口湖北岸の湖畔に建ち、すべての客室の窓から雄大な富士山と湖を一望。天候に恵まれ風のない日には、湖面に美しく映り込む「逆さ富士」を部屋にいながら拝むことができます。</p>
                  </div>
                  <div className="bg-stone-50 p-3.5 rounded-xl border border-stone-200/60">
                    <h5 className="font-bold text-stone-900 mb-1 flex items-center gap-1.5">
                      <span className="text-amber-600">✓</span> 富士山と湖が一体化するインフィニティ風の庭園露天風呂
                    </h5>
                    <p className="text-stone-600 leading-relaxed">天然温泉が溢れる露天風呂からは、遮るもののない富士の絶景。湯上がり処では富士山を眺めながら無料の生ビールや名水サービスが提供される心憎いおもてなしも魅力です。</p>
                  </div>
                  <div className="bg-stone-50 p-3.5 rounded-xl border border-stone-200/60">
                    <h5 className="font-bold text-stone-900 mb-1 flex items-center gap-1.5">
                      <span className="text-amber-600">✓</span> 甲州の恵みを盛り込んだ目にも鮮やかな月替わり創作会席
                    </h5>
                    <p className="text-stone-600 leading-relaxed">山梨の旬魚や山菜、厳選された肉料理を組み合わせた料理長自慢の会席。ゆったりとした個室食事処やお部屋で贅沢な美食時間を過ごせます。</p>
                  </div>
                </div>
              </div>

              {/* レビュー抜粋 */}
              <div className="bg-amber-50/60 p-4 rounded-2xl border border-amber-100 text-xs sm:text-sm space-y-1.5">
                <span className="font-bold text-amber-900 flex items-center gap-1.5">
                  <span>💬</span> 実際の宿泊者からの評価・口コミ
                </span>
                <p className="text-stone-700 leading-relaxed">楽天トラベル評価4.76点の超高評価。「部屋からもお風呂からも富士山が目の前にドーンと見えて感動した」「スタッフの接客、湯上がりビール、料理すべてが満点」と圧倒的なリピート率。</p>
              </div>

              {/* 宿基本情報 */}
              <div className="text-xs text-stone-500 grid sm:grid-cols-2 gap-2 bg-stone-50 p-4 rounded-xl">
                <div><span className="font-semibold text-stone-700">住所：</span>山梨県 南都留郡富士河口湖町河口2312</div>
                <div><span className="font-semibold text-stone-700">宿泊目安：</span>¥26,400〜 /人</div>
                <div><span className="font-semibold text-stone-700">楽天施設ID：</span>43939</div>
                <div><span className="font-semibold text-stone-700">予約区分：</span>楽天ふるさと納税トラベルクーポン対象</div>
              </div>

              <div className="pt-2">
                <a
                  href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FJBe8h%2F%3Ff_no%3D43939"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full text-center bg-gradient-to-r from-amber-700 to-amber-900 hover:from-amber-800 hover:to-stone-900 text-white font-bold py-3.5 px-6 rounded-xl shadow transition"
                >
                  【楽天トラベル】富士河口湖温泉　秀峰閣　湖月 の宿泊プランとクーポン適用はこちら →
                </a>
              </div>
            </div>
          </article>

          {/* ホテル 2 */}
          <article className="bg-white rounded-3xl overflow-hidden shadow-sm border border-stone-200/80 transition hover:shadow-md">
            <div className="relative aspect-video sm:aspect-[16/9] w-full overflow-hidden bg-stone-100">
              <img
                src="https://img.travel.rakuten.co.jp/share/HOTEL/61663/61663.jpg"
                alt="富士河口湖温泉　若草の宿　丸栄"
                className="w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute top-4 left-4 bg-stone-900/80 backdrop-blur-sm text-white text-xs px-3 py-1.5 rounded-full font-semibold">
                第2選
              </div>
              <div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-sm text-stone-900 text-xs px-3 py-1.5 rounded-full font-bold shadow">
                ★ 4.48（口コミ 623件）
              </div>
            </div>

            <div className="p-6 sm:p-8 space-y-6">
              <div className="space-y-2">
                <span className="text-xs font-bold text-amber-700 uppercase tracking-wider">山梨県富士河口湖町</span>
                <h3 className="text-xl sm:text-2xl font-bold font-serif text-stone-900 leading-snug">
                  富士河口湖温泉　若草の宿　丸栄
                </h3>
                <p className="text-xs sm:text-sm font-medium text-amber-800">
                  最上階の見晴らし展望風呂「富士の湯」！心温まる日本の情緒と匠の技が光る本格季節会席料理
                </p>
              </div>

              <div className="border-t border-b border-stone-100 py-4 space-y-3">
                <h4 className="font-bold text-stone-900 text-sm sm:text-base font-serif">
                  富士河口湖温泉 若草の宿 丸栄（まるえい） —— 湖畔に佇む純和風のやすらぎ。富士と湖を望む二つの展望風呂とお部屋食
                </h4>
                <div className="grid gap-3 text-xs sm:text-sm text-stone-700">
                  
                  <div className="bg-stone-50 p-3.5 rounded-xl border border-stone-200/60">
                    <h5 className="font-bold text-stone-900 mb-1 flex items-center gap-1.5">
                      <span className="text-amber-600">✓</span> 最上階から富士山を仰ぐ「富士の湯」と河口湖を望む「湖の湯」
                    </h5>
                    <p className="text-stone-600 leading-relaxed">屋上に設けられた展望風呂からは、雄大にそびえる霊峰富士と穏やかな河口湖の二つの異なる絶景を堪能。朝夕で男女入れ替えとなり両方の景色を楽しめます。</p>
                  </div>
                  <div className="bg-stone-50 p-3.5 rounded-xl border border-stone-200/60">
                    <h5 className="font-bold text-stone-900 mb-1 flex items-center gap-1.5">
                      <span className="text-amber-600">✓</span> 日本旅館の伝統を守るお部屋食スタイルの本格会席料理
                    </h5>
                    <p className="text-stone-600 leading-relaxed">旬の食材を吟味し、出汁の引き方から盛り付けまで細心のこだわりを注いだ本格和食会席。周囲を気にせずお部屋でゆっくりと味わうことができます。</p>
                  </div>
                  <div className="bg-stone-50 p-3.5 rounded-xl border border-stone-200/60">
                    <h5 className="font-bold text-stone-900 mb-1 flex items-center gap-1.5">
                      <span className="text-amber-600">✓</span> 畳敷きの温もりと風情ある数寄屋造りの贅沢な空間
                    </h5>
                    <p className="text-stone-600 leading-relaxed">館内随所に生花が飾られ、落ち着いた和の美意識が漂う純和風旅館。細やかな仲居さんの心遣いが旅の疲れを優しく解きほぐしてくれます。</p>
                  </div>
                </div>
              </div>

              {/* レビュー抜粋 */}
              <div className="bg-amber-50/60 p-4 rounded-2xl border border-amber-100 text-xs sm:text-sm space-y-1.5">
                <span className="font-bold text-amber-900 flex items-center gap-1.5">
                  <span>💬</span> 実際の宿泊者からの評価・口コミ
                </span>
                <p className="text-stone-700 leading-relaxed">楽天トラベル評価4.68点、口コミ1300件超。「最上階のお風呂から見た朝日に輝く富士山が忘れられない」「夕食がお部屋食でとても美味しく、接客も丁寧で素晴らしかった」と高い満足度。</p>
              </div>

              {/* 宿基本情報 */}
              <div className="text-xs text-stone-500 grid sm:grid-cols-2 gap-2 bg-stone-50 p-4 rounded-xl">
                <div><span className="font-semibold text-stone-700">住所：</span>山梨県 南都留郡富士河口湖町小立498</div>
                <div><span className="font-semibold text-stone-700">宿泊目安：</span>¥23,100〜 /人</div>
                <div><span className="font-semibold text-stone-700">楽天施設ID：</span>61663</div>
                <div><span className="font-semibold text-stone-700">予約区分：</span>楽天ふるさと納税トラベルクーポン対象</div>
              </div>

              <div className="pt-2">
                <a
                  href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FJBe8h%2F%3Ff_no%3D61663"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full text-center bg-gradient-to-r from-amber-700 to-amber-900 hover:from-amber-800 hover:to-stone-900 text-white font-bold py-3.5 px-6 rounded-xl shadow transition"
                >
                  【楽天トラベル】富士河口湖温泉　若草の宿　丸栄 の宿泊プランとクーポン適用はこちら →
                </a>
              </div>
            </div>
          </article>

          {/* ホテル 3 */}
          <article className="bg-white rounded-3xl overflow-hidden shadow-sm border border-stone-200/80 transition hover:shadow-md">
            <div className="relative aspect-video sm:aspect-[16/9] w-full overflow-hidden bg-stone-100">
              <img
                src="https://img.travel.rakuten.co.jp/share/HOTEL/7298/7298.jpg"
                alt="河口湖温泉　富士レークホテル"
                className="w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute top-4 left-4 bg-stone-900/80 backdrop-blur-sm text-white text-xs px-3 py-1.5 rounded-full font-semibold">
                第3選
              </div>
              <div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-sm text-stone-900 text-xs px-3 py-1.5 rounded-full font-bold shadow">
                ★ 4.55（口コミ 1305件）
              </div>
            </div>

            <div className="p-6 sm:p-8 space-y-6">
              <div className="space-y-2">
                <span className="text-xs font-bold text-amber-700 uppercase tracking-wider">山梨県富士河口湖町</span>
                <h3 className="text-xl sm:text-2xl font-bold font-serif text-stone-900 leading-snug">
                  河口湖温泉　富士レークホテル
                </h3>
                <p className="text-xs sm:text-sm font-medium text-amber-800">
                  昭和七年創業・湖畔の歴史を紡ぐクラシックホテル！富士山ビュー客室と安心のバリアフリー対応
                </p>
              </div>

              <div className="border-t border-b border-stone-100 py-4 space-y-3">
                <h4 className="font-bold text-stone-900 text-sm sm:text-base font-serif">
                  河口湖温泉 富士レークホテル —— 伝統と近代性の融合。富士山と湖を望む展望ラウンジと河口湖畔の絶好アクセス
                </h4>
                <div className="grid gap-3 text-xs sm:text-sm text-stone-700">
                  
                  <div className="bg-stone-50 p-3.5 rounded-xl border border-stone-200/60">
                    <h5 className="font-bold text-stone-900 mb-1 flex items-center gap-1.5">
                      <span className="text-amber-600">✓</span> 昭和初期の面影を残すクラシカルな建築美と現代の快適性
                    </h5>
                    <p className="text-stone-600 leading-relaxed">1932年創業の伝統を誇り、国内外の賓客を迎えてきた名門。ユニバーサルデザインを取り入れ、車椅子利用の方や三世代家族でも安心して快適に過ごせます。</p>
                  </div>
                  <div className="bg-stone-50 p-3.5 rounded-xl border border-stone-200/60">
                    <h5 className="font-bold text-stone-900 mb-1 flex items-center gap-1.5">
                      <span className="text-amber-600">✓</span> 富士山温泉を引き込んだ大浴場と富士山展望露天風呂
                    </h5>
                    <p className="text-stone-600 leading-relaxed">河口湖の豊かな温泉を満喫できる大浴場。天気の良い日には富士山を望む露天風呂や貸切風呂でプライベートな癒やしの時間を楽しめます。</p>
                  </div>
                  <div className="bg-stone-50 p-3.5 rounded-xl border border-stone-200/60">
                    <h5 className="font-bold text-stone-900 mb-1 flex items-center gap-1.5">
                      <span className="text-amber-600">✓</span> 伝統のフランス料理または旬の和食会席から選べる極上ディナー
                    </h5>
                    <p className="text-stone-600 leading-relaxed">伝統を受け継ぐ本格フレンチフルコースと、山梨の恵みを活かした日本料理。旅のスタイルに合わせて選べる贅沢なディナーが旅を彩ります。</p>
                  </div>
                </div>
              </div>

              {/* レビュー抜粋 */}
              <div className="bg-amber-50/60 p-4 rounded-2xl border border-amber-100 text-xs sm:text-sm space-y-1.5">
                <span className="font-bold text-amber-900 flex items-center gap-1.5">
                  <span>💬</span> 実際の宿泊者からの評価・口コミ
                </span>
                <p className="text-stone-700 leading-relaxed">楽天トラベル評価4.60点、口コミ1100件超。「スタッフ全員の気配りが素晴らしく、車椅子でも快適に過ごせた」「湖畔の立地が良く、富士山の眺望と料理も大満足」と高評価を得ています。</p>
              </div>

              {/* 宿基本情報 */}
              <div className="text-xs text-stone-500 grid sm:grid-cols-2 gap-2 bg-stone-50 p-4 rounded-xl">
                <div><span className="font-semibold text-stone-700">住所：</span>山梨県 南都留郡富士河口湖町船津1</div>
                <div><span className="font-semibold text-stone-700">宿泊目安：</span>¥14,300〜 /人</div>
                <div><span className="font-semibold text-stone-700">楽天施設ID：</span>7298</div>
                <div><span className="font-semibold text-stone-700">予約区分：</span>楽天ふるさと納税トラベルクーポン対象</div>
              </div>

              <div className="pt-2">
                <a
                  href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FJBe8h%2F%3Ff_no%3D7298"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full text-center bg-gradient-to-r from-amber-700 to-amber-900 hover:from-amber-800 hover:to-stone-900 text-white font-bold py-3.5 px-6 rounded-xl shadow transition"
                >
                  【楽天トラベル】河口湖温泉　富士レークホテル の宿泊プランとクーポン適用はこちら →
                </a>
              </div>
            </div>
          </article>
        </section>

        {/* エリア観光・見どころ */}
        <section className="space-y-4">
          <h2 className="text-xl sm:text-2xl font-bold font-serif text-stone-900 flex items-center gap-2">
            <span>🗺️</span> 富士河口湖・富士山絶景スポット＆湖畔アクティビティガイド
          </h2>
          <div className="grid gap-4">

            <div className="bg-white p-5 rounded-2xl border border-stone-200/80 shadow-sm space-y-2">
              <h4 className="font-bold text-stone-900 text-sm sm:text-base font-serif flex items-center gap-2">
                <span className="w-6 h-6 rounded-full bg-amber-100 text-amber-900 flex items-center justify-center text-xs font-sans font-bold">1</span>
                河口湖畔の桜並木・紅葉回廊の散策
              </h4>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed pl-8">
                北岸沿いには春にソメイヨシノが咲き乱れる湖畔遊歩道、秋には約60本の巨木モミジが鮮やかに色づく「もみじ回廊」があり、富士山を背景にした絶好の写真撮影スポットです。
              </p>
            </div>
            <div className="bg-white p-5 rounded-2xl border border-stone-200/80 shadow-sm space-y-2">
              <h4 className="font-bold text-stone-900 text-sm sm:text-base font-serif flex items-center gap-2">
                <span className="w-6 h-6 rounded-full bg-amber-100 text-amber-900 flex items-center justify-center text-xs font-sans font-bold">2</span>
                富士山パノラマロープウェイでの天上山展望
              </h4>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed pl-8">
                太宰治の小説『カチカチ山』の舞台となった天上山へ。山頂の展望台からは、裾野まで広がる雄大な富士山と河口湖の全景を360度の大パノラマで見渡せます。
              </p>
            </div>
            <div className="bg-white p-5 rounded-2xl border border-stone-200/80 shadow-sm space-y-2">
              <h4 className="font-bold text-stone-900 text-sm sm:text-base font-serif flex items-center gap-2">
                <span className="w-6 h-6 rounded-full bg-amber-100 text-amber-900 flex items-center justify-center text-xs font-sans font-bold">3</span>
                大石公園とハーブフェスティバル
              </h4>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed pl-8">
                湖越しに富士山を望む花の名所。初夏には紫色のラベンダーが咲き誇り、秋には真っ赤に染まるコキアの群生が見事な景観を作り出します。
              </p>
            </div>
          </div>
        </section>

        {/* ふるさと納税活用ステップ */}
        <section className="bg-gradient-to-br from-amber-900 via-stone-900 to-stone-950 text-white rounded-3xl p-6 sm:p-8 shadow-xl space-y-6">
          <div className="space-y-2">
            <span className="text-xs uppercase tracking-widest text-amber-300 font-semibold">How to Use Coupon</span>
            <h2 className="text-xl sm:text-2xl font-bold font-serif text-amber-50">
              山梨県富士河口湖町ふるさと納税×楽天トラベルクーポン活用手順
            </h2>
            <p className="text-stone-300 text-xs sm:text-sm">
              初めての方でも迷わず利用できる3ステップ。予約済みのプランにも後から適用可能です。
            </p>
          </div>

          <div className="grid sm:grid-cols-3 gap-4 text-xs sm:text-sm">

            <div className="bg-stone-900/60 p-4 rounded-2xl border border-amber-500/20 space-y-2">
              <span className="inline-block bg-amber-500/20 text-amber-300 font-mono text-xs px-2.5 py-0.5 rounded font-semibold">
                Step 1: 楽天ふるさと納税で「山梨県富士河口湖町」クーポンを獲得
              </span>
              <p className="text-stone-300 text-xs sm:text-sm leading-relaxed">
                楽天ふるさと納税で富士河口湖町を寄付先に選び、トラベルクーポンを申し込みます。寄付額の30%相当のクーポンがアカウントに付与されます。
              </p>
            </div>
            <div className="bg-stone-900/60 p-4 rounded-2xl border border-amber-500/20 space-y-2">
              <span className="inline-block bg-amber-500/20 text-amber-300 font-mono text-xs px-2.5 py-0.5 rounded font-semibold">
                Step 2: 中央道や高速バス、富士回遊号で都心から快適アクセス
              </span>
              <p className="text-stone-300 text-xs sm:text-sm leading-relaxed">
                新宿から直通特急「富士回遊」で約1時間50分と好アクセス。3年間の有効期間内で、季節のイベントや紅葉シーズンに合わせてゆったり旅行を計画できます。
              </p>
            </div>
            <div className="bg-stone-900/60 p-4 rounded-2xl border border-amber-500/20 space-y-2">
              <span className="inline-block bg-amber-500/20 text-amber-300 font-mono text-xs px-2.5 py-0.5 rounded font-semibold">
                Step 3: 楽天トラベル予約画面でクーポン割引を適用して予約完了
              </span>
              <p className="text-stone-300 text-xs sm:text-sm leading-relaxed">
                秀峰閣湖月、若草の宿丸栄、富士レークホテルなどの富士山ビュー客室プランを選び、決済時にクーポンを選択すれば宿泊費が大幅に割引されます。
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
              <Link href="/furusato-tax-travel-beginners-complete-guide" className="hover:text-amber-800 underline flex items-center gap-1.5 py-1">
                <span>▸</span> 超初心者向け ふるさと納税で旅行に安く泊まるマニュアル
              </Link>
            </li>
            <li>
              <Link href="/furusato-tax-hakone-sengokuhara-pampas-luxury-stay" className="hover:text-amber-800 underline flex items-center gap-1.5 py-1">
                <span>▸</span> 箱根仙石原温泉 すすき草原＆美肌にごり湯特集
              </Link>
            </li>
          </ul>
        </section>
      </div>
    </main>
  );
}
