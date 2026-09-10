import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: '【四万温泉×ふるさと納税】昭和レトロな重要文化財「元禄の湯」＆清流四万川！渓谷美湯宿ガイド｜積善館・やまぐち館・四万たむら',
  description: '「四万の病を癒やす」と伝わる群馬県四万温泉を楽天ふるさと納税でお得に贅沢ステイ！日本最古の木造湯治宿・登録有形文化財の「積善館 佳松亭・山荘」、四万川沿いの巨大露天風呂「四万やまぐち館」、創業五百年の源泉宿「四万たむら」を徹底比較。上州牛会席や中之条町トラベルクーポン活用術を網羅。',
  keywords: '四万温泉 ふるさと納税,積善館 クーポン ふるさと納税,四万やまぐち館 宿泊,四万たむら ふるさと納税,中之条町 ふるさと納税 宿泊',
  alternates: {
    canonical: 'https://croud-travel.pages.dev/furusato-tax-shima-onsen-retro-sekizenkan-stay',
  },
  openGraph: {
    title: '【四万温泉×ふるさと納税】昭和レトロな重要文化財「元禄の湯」＆清流四万川！渓谷美湯宿ガイド｜積善館・やまぐち館・四万たむら',
    description: '「四万の病を癒やす」と伝わる群馬県四万温泉を楽天ふるさと納税でお得に贅沢ステイ！日本最古の木造湯治宿・登録有形文化財の「積善館 佳松亭・山荘」、四万川沿いの巨大露天風呂「四万やまぐち館」、創業五百年の源泉宿「四万たむら」を徹底比較。上州牛会席や中之条町トラベルクーポン活用術を網羅。',
    url: 'https://croud-travel.pages.dev/furusato-tax-shima-onsen-retro-sekizenkan-stay',
    siteName: 'トラベルガイド - クラウドトラベル',
    locale: 'ja_JP',
    type: 'article',
  },
};

export default function FurusatoArticlePage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: '【四万温泉×ふるさと納税】昭和レトロな重要文化財「元禄の湯」＆清流四万川！渓谷美湯宿ガイド｜積善館・やまぐち館・四万たむら',
    description: '「四万の病を癒やす」と伝わる群馬県四万温泉を楽天ふるさと納税でお得に贅沢ステイ！日本最古の木造湯治宿・登録有形文化財の「積善館 佳松亭・山荘」、四万川沿いの巨大露天風呂「四万やまぐち館」、創業五百年の源泉宿「四万たむら」を徹底比較。上州牛会席や中之条町トラベルクーポン活用術を網羅。',
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
    datePublished: '2026-09-10T16:48:00+09:00',
    dateModified: '2026-09-10T16:48:00+09:00',
    mainEntityOfPage: 'https://croud-travel.pages.dev/furusato-tax-shima-onsen-retro-sekizenkan-stay',
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
        <span className="text-stone-700 font-medium truncate">【四万温泉×ふるさと納税】昭和レトロな重要文化財「元禄の湯」＆清流四万川！渓谷美湯宿ガイド｜積善館・やまぐち館・四万たむら</span>
      </nav>

      {/* ヒーローセクション */}
      <header className="max-w-4xl mx-auto px-4 sm:px-6 py-8 sm:py-12 space-y-4">
        <div className="inline-flex items-center gap-2 bg-amber-100/80 text-amber-900 text-xs font-semibold px-3 py-1 rounded-full border border-amber-200">
          <span>♨️</span>
          <span>群馬県中之条町 ふるさと納税・名湯宿特集</span>
        </div>
        <h1 className="text-2xl sm:text-4xl font-extrabold font-serif text-stone-900 tracking-tight leading-snug">
          【四万温泉×ふるさと納税】昭和レトロな重要文化財「元禄の湯」＆清流四万川！渓谷美湯宿ガイド｜積善館・やまぐち館・四万たむら
        </h1>
        <p className="text-stone-600 text-sm sm:text-base leading-relaxed">
          「四万の病を癒やす」と伝わる群馬県四万温泉を楽天ふるさと納税でお得に贅沢ステイ！日本最古の木造湯治宿・登録有形文化財の「積善館 佳松亭・山荘」、四万川沿いの巨大露天風呂「四万やまぐち館」、創業五百年の源泉宿「四万たむら」を徹底比較。上州牛会席や中之条町トラベルクーポン活用術を網羅。
        </p>
      </header>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 space-y-12">
        {/* リード文セクション */}
        <section className="bg-white rounded-3xl p-6 sm:p-8 shadow-sm border border-stone-200/80 space-y-4">
          <h2 className="text-lg sm:text-xl font-bold font-serif text-amber-900 border-b border-amber-100 pb-3">
            四万の病を癒やす伝説の霊泉——清流四万川のエメラルドブルーと歴史ある木造建築が誘うタイムトリップ
          </h2>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed">
            群馬県吾妻郡中之条町、上信越高原国立公園の山あいにひっそりと佇む四万（しま）温泉。「四万（よんまん）の病を治す霊泉」という伝説からその名が付けられ、昭和29年には青森の酸ヶ湯、栃木の日光湯元とともに「国民保養温泉地」の第1号指定を受けた名湯です。温泉街の傍らを流れる四万川は、光の加減によって神秘的なエメラルドグリーンからコバルトブルーに輝く「四万ブルー」として知られ、せせらぎの音とともに深い安らぎを与えてくれます。
          </p>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed">
            四万温泉の大きな特徴は、飲めば胃腸に良く、浸かれば肌が潤うナトリウム・カルシウム塩化物硫酸塩泉のまろやかな湯。そして、現存する日本最古の木造湯治建築として国の登録有形文化財に指定された「積善館」をはじめ、古き良き日本の湯治文化を今に伝える宿が数多く残されている点です。群馬県中之条町へのふるさと納税を利用すれば、30%相当の楽天トラベルクーポンにより名門温泉旅館へお得に宿泊でき、喧騒を離れて心身をリセットする最高の休日が叶います。
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
                  <td className="p-3 font-bold text-amber-900">四万温泉　積善館　佳松亭・山荘</td>
                  <td className="p-3 font-bold">★ 4.68</td>
                  <td className="p-3 text-stone-600">元禄四年創業・日本最古の木造湯治宿！大正ロマンあふれる登録有形文化財「元禄の湯」と山荘の贅</td>
                  <td className="p-3 text-stone-600">最高峰の歴史・名庭園ステイ</td>
                </tr>
                <tr>
                  <td className="p-3 font-bold text-amber-900">渓谷に佇む源泉湯宿　四万やまぐち館</td>
                  <td className="p-3 font-bold">★ 4.41</td>
                  <td className="p-3 text-stone-600">四万川の清流を真下に見下ろす源泉湯宿！三十帖の巨大露天風呂「お題目大露天風呂」と名物女将の紙芝居</td>
                  <td className="p-3 text-stone-600">絶景の眺望・美食の饗宴</td>
                </tr>
                <tr>
                  <td className="p-3 font-bold text-amber-900">四万温泉　温泉三昧の宿　四万たむら</td>
                  <td className="p-3 font-bold">★ 4.37</td>
                  <td className="p-3 text-stone-600">室町時代創業・五百年の歴史を誇る老舗！七つの自家源泉から湧く毎分千六百リットルの湯巡り</td>
                  <td className="p-3 text-stone-600">アットホーム・快適な温泉街散歩</td>
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
                src="https://img.travel.rakuten.co.jp/share/HOTEL/76361/76361.jpg"
                alt="四万温泉　積善館　佳松亭・山荘"
                className="w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute top-4 left-4 bg-stone-900/80 backdrop-blur-sm text-white text-xs px-3 py-1.5 rounded-full font-semibold">
                第1選
              </div>
              <div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-sm text-stone-900 text-xs px-3 py-1.5 rounded-full font-bold shadow">
                ★ 4.68（口コミ 1209件）
              </div>
            </div>

            <div className="p-6 sm:p-8 space-y-6">
              <div className="space-y-2">
                <span className="text-xs font-bold text-amber-700 uppercase tracking-wider">群馬県中之条町</span>
                <h3 className="text-xl sm:text-2xl font-bold font-serif text-stone-900 leading-snug">
                  四万温泉　積善館　佳松亭・山荘
                </h3>
                <p className="text-xs sm:text-sm font-medium text-amber-800">
                  元禄四年創業・日本最古の木造湯治宿！大正ロマンあふれる登録有形文化財「元禄の湯」と山荘の贅
                </p>
              </div>

              <div className="border-t border-b border-stone-100 py-4 space-y-3">
                <h4 className="font-bold text-stone-900 text-sm sm:text-base font-serif">
                  四万温泉 積善館 佳松亭・山荘 —— アニメ映画の舞台としても名高い歴史の聖地。自然林に囲まれた大人の隠れ家
                </h4>
                <div className="grid gap-3 text-xs sm:text-sm text-stone-700">
                  
                  <div className="bg-stone-50 p-3.5 rounded-xl border border-stone-200/60">
                    <h5 className="font-bold text-stone-900 mb-1 flex items-center gap-1.5">
                      <span className="text-amber-600">✓</span> アーチ窓から光が差し込む大正モダン建築の傑作「元禄の湯」
                    </h5>
                    <p className="text-stone-600 leading-relaxed">昭和5年に建てられた登録有形文化財の浴室。タイル張りの床に五つの湯船が並び、蒸し風呂や自然光が織りなす空間で奇跡の湯浴みを体験できます。</p>
                  </div>
                  <div className="bg-stone-50 p-3.5 rounded-xl border border-stone-200/60">
                    <h5 className="font-bold text-stone-900 mb-1 flex items-center gap-1.5">
                      <span className="text-amber-600">✓</span> 国の登録有形文化財「山荘」と松林を見下ろす高台の「佳松亭」
                    </h5>
                    <p className="text-stone-600 leading-relaxed">歴史ある宮大工の組子障子が見事な山荘客室や、専用露天風呂を備えた佳松亭。静寂な森に包まれながら上質な時間を過ごせます。</p>
                  </div>
                  <div className="bg-stone-50 p-3.5 rounded-xl border border-stone-200/60">
                    <h5 className="font-bold text-stone-900 mb-1 flex items-center gap-1.5">
                      <span className="text-amber-600">✓</span> 二十四節気を表現した滋味豊かな季節の懐石料理
                    </h5>
                    <p className="text-stone-600 leading-relaxed">上州牛や群馬の清流魚、旬の高原野菜をふんだんに取り入れ、目と舌で季節の移ろいを感じられる洗練された夕食を味わえます。</p>
                  </div>
                </div>
              </div>

              {/* レビュー抜粋 */}
              <div className="bg-amber-50/60 p-4 rounded-2xl border border-amber-100 text-xs sm:text-sm space-y-1.5">
                <span className="font-bold text-amber-900 flex items-center gap-1.5">
                  <span>💬</span> 実際の宿泊者からの評価・口コミ
                </span>
                <p className="text-stone-700 leading-relaxed">楽天トラベル評価4.62点、口コミ1100件超。「元禄の湯の雰囲気が素晴らしくタイムスリップした感動」「歴史ある建物と佳松亭の静かなお部屋、お料理の美味しさに大満足」と絶賛。</p>
              </div>

              {/* 宿基本情報 */}
              <div className="text-xs text-stone-500 grid sm:grid-cols-2 gap-2 bg-stone-50 p-4 rounded-xl">
                <div><span className="font-semibold text-stone-700">住所：</span>群馬県 吾妻郡中之条町四万甲4236</div>
                <div><span className="font-semibold text-stone-700">宿泊目安：</span>¥22,330〜 /人</div>
                <div><span className="font-semibold text-stone-700">楽天施設ID：</span>76361</div>
                <div><span className="font-semibold text-stone-700">予約区分：</span>楽天ふるさと納税トラベルクーポン対象</div>
              </div>

              <div className="pt-2">
                <a
                  href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FJBe8h%2F%3Ff_no%3D76361"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full text-center bg-gradient-to-r from-amber-700 to-amber-900 hover:from-amber-800 hover:to-stone-900 text-white font-bold py-3.5 px-6 rounded-xl shadow transition"
                >
                  【楽天トラベル】四万温泉　積善館　佳松亭・山荘 の宿泊プランとクーポン適用はこちら →
                </a>
              </div>
            </div>
          </article>

          {/* ホテル 2 */}
          <article className="bg-white rounded-3xl overflow-hidden shadow-sm border border-stone-200/80 transition hover:shadow-md">
            <div className="relative aspect-video sm:aspect-[16/9] w-full overflow-hidden bg-stone-100">
              <img
                src="https://img.travel.rakuten.co.jp/share/HOTEL/5948/5948.jpg"
                alt="渓谷に佇む源泉湯宿　四万やまぐち館"
                className="w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute top-4 left-4 bg-stone-900/80 backdrop-blur-sm text-white text-xs px-3 py-1.5 rounded-full font-semibold">
                第2選
              </div>
              <div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-sm text-stone-900 text-xs px-3 py-1.5 rounded-full font-bold shadow">
                ★ 4.41（口コミ 2070件）
              </div>
            </div>

            <div className="p-6 sm:p-8 space-y-6">
              <div className="space-y-2">
                <span className="text-xs font-bold text-amber-700 uppercase tracking-wider">群馬県中之条町</span>
                <h3 className="text-xl sm:text-2xl font-bold font-serif text-stone-900 leading-snug">
                  渓谷に佇む源泉湯宿　四万やまぐち館
                </h3>
                <p className="text-xs sm:text-sm font-medium text-amber-800">
                  四万川の清流を真下に見下ろす源泉湯宿！三十帖の巨大露天風呂「お題目大露天風呂」と名物女将の紙芝居
                </p>
              </div>

              <div className="border-t border-b border-stone-100 py-4 space-y-3">
                <h4 className="font-bold text-stone-900 text-sm sm:text-base font-serif">
                  渓谷に佇む源泉湯宿 四万やまぐち館 —— 渓流のせせらぎがBGM。川風を感じる野趣あふれる二大露天風呂
                </h4>
                <div className="grid gap-3 text-xs sm:text-sm text-stone-700">
                  
                  <div className="bg-stone-50 p-3.5 rounded-xl border border-stone-200/60">
                    <h5 className="font-bold text-stone-900 mb-1 flex items-center gap-1.5">
                      <span className="text-amber-600">✓</span> 四万川の渓流にせり出す大迫力の「お題目大露天風呂」と「四万川の湯」
                    </h5>
                    <p className="text-stone-600 leading-relaxed">川のせせらぎを間近に聞きながら入る広大な露天風呂。毎分自然湧出する良質な源泉が惜しみなく注がれ、自然との一体感を味わえます。</p>
                  </div>
                  <div className="bg-stone-50 p-3.5 rounded-xl border border-stone-200/60">
                    <h5 className="font-bold text-stone-900 mb-1 flex items-center gap-1.5">
                      <span className="text-amber-600">✓</span> 毎日開催される名物女将による紙芝居と心温まるおもてなし
                    </h5>
                    <p className="text-stone-600 leading-relaxed">四万温泉の民話や歴史を伝える名物イベント。アットホームで温かい接客が、家族連れや年配の方まで幅広い世代に愛されています。</p>
                  </div>
                  <div className="bg-stone-50 p-3.5 rounded-xl border border-stone-200/60">
                    <h5 className="font-bold text-stone-900 mb-1 flex items-center gap-1.5">
                      <span className="text-amber-600">✓</span> 上州麦豚や地元採れたての清流食材を使った彩り会席
                    </h5>
                    <p className="text-stone-600 leading-relaxed">柔らかい上州豚の陶板焼きや手作りこんにゃく、岩魚の塩焼きなど、群馬の自然の恵みをぎゅっと詰め込んだ料理を楽しめます。</p>
                  </div>
                </div>
              </div>

              {/* レビュー抜粋 */}
              <div className="bg-amber-50/60 p-4 rounded-2xl border border-amber-100 text-xs sm:text-sm space-y-1.5">
                <span className="font-bold text-amber-900 flex items-center gap-1.5">
                  <span>💬</span> 実際の宿泊者からの評価・口コミ
                </span>
                <p className="text-stone-700 leading-relaxed">楽天トラベル評価4.43点、口コミ2400件超。「川沿いのお風呂がとにかく最高でずっと入っていたかった」「女将さんの紙芝居も楽しく、お料理も美味しかった」と高評価。</p>
              </div>

              {/* 宿基本情報 */}
              <div className="text-xs text-stone-500 grid sm:grid-cols-2 gap-2 bg-stone-50 p-4 rounded-xl">
                <div><span className="font-semibold text-stone-700">住所：</span>群馬県 吾妻郡中之条町四万3876-1</div>
                <div><span className="font-semibold text-stone-700">宿泊目安：</span>¥8,800〜 /人</div>
                <div><span className="font-semibold text-stone-700">楽天施設ID：</span>5948</div>
                <div><span className="font-semibold text-stone-700">予約区分：</span>楽天ふるさと納税トラベルクーポン対象</div>
              </div>

              <div className="pt-2">
                <a
                  href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FJBe8h%2F%3Ff_no%3D5948"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full text-center bg-gradient-to-r from-amber-700 to-amber-900 hover:from-amber-800 hover:to-stone-900 text-white font-bold py-3.5 px-6 rounded-xl shadow transition"
                >
                  【楽天トラベル】渓谷に佇む源泉湯宿　四万やまぐち館 の宿泊プランとクーポン適用はこちら →
                </a>
              </div>
            </div>
          </article>

          {/* ホテル 3 */}
          <article className="bg-white rounded-3xl overflow-hidden shadow-sm border border-stone-200/80 transition hover:shadow-md">
            <div className="relative aspect-video sm:aspect-[16/9] w-full overflow-hidden bg-stone-100">
              <img
                src="https://img.travel.rakuten.co.jp/share/HOTEL/32127/32127.jpg"
                alt="四万温泉　温泉三昧の宿　四万たむら"
                className="w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute top-4 left-4 bg-stone-900/80 backdrop-blur-sm text-white text-xs px-3 py-1.5 rounded-full font-semibold">
                第3選
              </div>
              <div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-sm text-stone-900 text-xs px-3 py-1.5 rounded-full font-bold shadow">
                ★ 4.37（口コミ 2267件）
              </div>
            </div>

            <div className="p-6 sm:p-8 space-y-6">
              <div className="space-y-2">
                <span className="text-xs font-bold text-amber-700 uppercase tracking-wider">群馬県中之条町</span>
                <h3 className="text-xl sm:text-2xl font-bold font-serif text-stone-900 leading-snug">
                  四万温泉　温泉三昧の宿　四万たむら
                </h3>
                <p className="text-xs sm:text-sm font-medium text-amber-800">
                  室町時代創業・五百年の歴史を誇る老舗！七つの自家源泉から湧く毎分千六百リットルの湯巡り
                </p>
              </div>

              <div className="border-t border-b border-stone-100 py-4 space-y-3">
                <h4 className="font-bold text-stone-900 text-sm sm:text-base font-serif">
                  四万温泉 温泉三昧の宿 四万たむら —— 広大な敷地に点在する七つの温泉。森の野天風呂と本格会席料理
                </h4>
                <div className="grid gap-3 text-xs sm:text-sm text-stone-700">
                  
                  <div className="bg-stone-50 p-3.5 rounded-xl border border-stone-200/60">
                    <h5 className="font-bold text-stone-900 mb-1 flex items-center gap-1.5">
                      <span className="text-amber-600">✓</span> 敷地内から自噴する七つの自家源泉を引く多彩な湯船
                    </h5>
                    <p className="text-stone-600 leading-relaxed">森の中に佇む野天風呂「森のこだま」、茅葺き屋根の風情ある露天風呂、檜風呂など、館内だけで贅沢な湯巡りを心ゆくまで満喫できます。</p>
                  </div>
                  <div className="bg-stone-50 p-3.5 rounded-xl border border-stone-200/60">
                    <h5 className="font-bold text-stone-900 mb-1 flex items-center gap-1.5">
                      <span className="text-amber-600">✓</span> 数寄屋造りの気品ある佇まいと広大な敷地の散策路
                    </h5>
                    <p className="text-stone-600 leading-relaxed">創業五百年の歴史を物語る格式高い建築と、清流が流れる緑豊かな庭園。四季折々の自然の息吹を感じながら静かに寛げます。</p>
                  </div>
                  <div className="bg-stone-50 p-3.5 rounded-xl border border-stone-200/60">
                    <h5 className="font-bold text-stone-900 mb-1 flex items-center gap-1.5">
                      <span className="text-amber-600">✓</span> 伝統の出汁と旬の素材が織りなす山里会席ディナー
                    </h5>
                    <p className="text-stone-600 leading-relaxed">料理人が手間ひまかけて仕立てる月替わりの本格会席。上州牛やすき焼きなど、厳選された素材本来の美味しさを堪能できます。</p>
                  </div>
                </div>
              </div>

              {/* レビュー抜粋 */}
              <div className="bg-amber-50/60 p-4 rounded-2xl border border-amber-100 text-xs sm:text-sm space-y-1.5">
                <span className="font-bold text-amber-900 flex items-center gap-1.5">
                  <span>💬</span> 実際の宿泊者からの評価・口コミ
                </span>
                <p className="text-stone-700 leading-relaxed">楽天トラベル評価4.34点、口コミ2100件超。「七つのお風呂がどれも個性的で温泉好きにはたまらない」「森の中の露天風呂が静かで最高に癒やされた」と評判です。</p>
              </div>

              {/* 宿基本情報 */}
              <div className="text-xs text-stone-500 grid sm:grid-cols-2 gap-2 bg-stone-50 p-4 rounded-xl">
                <div><span className="font-semibold text-stone-700">住所：</span>群馬県 吾妻郡中之条町四万4180</div>
                <div><span className="font-semibold text-stone-700">宿泊目安：</span>¥15,400〜 /人</div>
                <div><span className="font-semibold text-stone-700">楽天施設ID：</span>32127</div>
                <div><span className="font-semibold text-stone-700">予約区分：</span>楽天ふるさと納税トラベルクーポン対象</div>
              </div>

              <div className="pt-2">
                <a
                  href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FJBe8h%2F%3Ff_no%3D32127"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full text-center bg-gradient-to-r from-amber-700 to-amber-900 hover:from-amber-800 hover:to-stone-900 text-white font-bold py-3.5 px-6 rounded-xl shadow transition"
                >
                  【楽天トラベル】四万温泉　温泉三昧の宿　四万たむら の宿泊プランとクーポン適用はこちら →
                </a>
              </div>
            </div>
          </article>
        </section>

        {/* エリア観光・見どころ */}
        <section className="space-y-4">
          <h2 className="text-xl sm:text-2xl font-bold font-serif text-stone-900 flex items-center gap-2">
            <span>🗺️</span> 四万温泉・四万ブルーと奥四万湖アクティビティガイド
          </h2>
          <div className="grid gap-4">

            <div className="bg-white p-5 rounded-2xl border border-stone-200/80 shadow-sm space-y-2">
              <h4 className="font-bold text-stone-900 text-sm sm:text-base font-serif flex items-center gap-2">
                <span className="w-6 h-6 rounded-full bg-amber-100 text-amber-900 flex items-center justify-center text-xs font-sans font-bold">1</span>
                奥四万湖（四万川ダム）の「四万ブルー」カヌー体験
              </h4>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed pl-8">
                四万温泉の最奥部にある奥四万湖。吸い込まれそうなエメラルドグリーンの湖面をカヌーやSUPで進むアクティビティは、息を呑む絶景体験として大人気です。
              </p>
            </div>
            <div className="bg-white p-5 rounded-2xl border border-stone-200/80 shadow-sm space-y-2">
              <h4 className="font-bold text-stone-900 text-sm sm:text-base font-serif flex items-center gap-2">
                <span className="w-6 h-6 rounded-full bg-amber-100 text-amber-900 flex items-center justify-center text-xs font-sans font-bold">2</span>
                四万の甌穴（おうけつ）群の自然散策
              </h4>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed pl-8">
                四万川の清流が数万年の歳月をかけて川底の岩を削り出して作った巨大な穴（ポットホール）。群馬県の天然記念物に指定されており、青く澄んだ水流の迫力を間近に観察できます。
              </p>
            </div>
            <div className="bg-white p-5 rounded-2xl border border-stone-200/80 shadow-sm space-y-2">
              <h4 className="font-bold text-stone-900 text-sm sm:text-base font-serif flex items-center gap-2">
                <span className="w-6 h-6 rounded-full bg-amber-100 text-amber-900 flex items-center justify-center text-xs font-sans font-bold">3</span>
                落合通りと昭和レトロなスマートボール「柳屋遊技場」
              </h4>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed pl-8">
                昔ながらの温泉街の風情が残る落合通り。手動で玉を弾く木製のスマートボールや射的が楽しめる遊技場があり、湯上がりのノスタルジックなひとときを過ごせます。
              </p>
            </div>
          </div>
        </section>

        {/* ふるさと納税活用ステップ */}
        <section className="bg-gradient-to-br from-amber-900 via-stone-900 to-stone-950 text-white rounded-3xl p-6 sm:p-8 shadow-xl space-y-6">
          <div className="space-y-2">
            <span className="text-xs uppercase tracking-widest text-amber-300 font-semibold">How to Use Coupon</span>
            <h2 className="text-xl sm:text-2xl font-bold font-serif text-amber-50">
              群馬県中之条町ふるさと納税×楽天トラベルクーポン活用手順
            </h2>
            <p className="text-stone-300 text-xs sm:text-sm">
              初めての方でも迷わず利用できる3ステップ。予約済みのプランにも後から適用可能です。
            </p>
          </div>

          <div className="grid sm:grid-cols-3 gap-4 text-xs sm:text-sm">

            <div className="bg-stone-900/60 p-4 rounded-2xl border border-amber-500/20 space-y-2">
              <span className="inline-block bg-amber-500/20 text-amber-300 font-mono text-xs px-2.5 py-0.5 rounded font-semibold">
                Step 1: 楽天ふるさと納税で「群馬県中之条町」クーポンを獲得
              </span>
              <p className="text-stone-300 text-xs sm:text-sm leading-relaxed">
                楽天ふるさと納税で中之条町を選び、トラベルクーポンを返礼品として申し込みます。寄付額の30%相当のクーポンがアカウントに付与されます。
              </p>
            </div>
            <div className="bg-stone-900/60 p-4 rounded-2xl border border-amber-500/20 space-y-2">
              <span className="inline-block bg-amber-500/20 text-amber-300 font-mono text-xs px-2.5 py-0.5 rounded font-semibold">
                Step 2: 東京駅から直通高速バス「四万温泉号」または特急草津でアクセス
              </span>
              <p className="text-stone-300 text-xs sm:text-sm leading-relaxed">
                東京駅八重洲口から四万温泉直通の高速バスで約3時間半、またはJR特急で中之条駅経由。3年間の有効期間内で、新緑や紅葉、雪景色に合わせて計画できます。
              </p>
            </div>
            <div className="bg-stone-900/60 p-4 rounded-2xl border border-amber-500/20 space-y-2">
              <span className="inline-block bg-amber-500/20 text-amber-300 font-mono text-xs px-2.5 py-0.5 rounded font-semibold">
                Step 3: 楽天トラベル予約画面でクーポン割引を適用して予約完了
              </span>
              <p className="text-stone-300 text-xs sm:text-sm leading-relaxed">
                積善館、やまぐち館、四万たむらなどの宿泊プランを選び、決済時にクーポンを選択すれば宿泊代金から大幅な割引が適用されます。
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
              <Link href="/furusato-tax-kusatsu-onsen-yubatake-heritage-stay" className="hover:text-amber-800 underline flex items-center gap-1.5 py-1">
                <span>▸</span> 草津温泉 湯畑徒歩圏内の老舗名宿特集
              </Link>
            </li>
            <li>
              <Link href="/furusato-tax-arima-onsen-gold-silver-kobe-beef-stay" className="hover:text-amber-800 underline flex items-center gap-1.5 py-1">
                <span>▸</span> 有馬温泉 金泉・銀泉＆極上神戸牛ステイ特集
              </Link>
            </li>
          </ul>
        </section>
      </div>
    </main>
  );
}
