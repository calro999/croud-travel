import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: '【蔵王温泉×ふるさと納税】日本屈指の強酸性白濁硫黄泉＆山形牛！名門名湯宿特集｜深山荘高見屋・蔵王国際ホテル・蔵王四季のホテル',
  description: '開湯千九百年・蔵王連峰の雄大な自然に抱かれる山形県蔵王温泉を楽天ふるさと納税でお得に満喫！享保年間創業三百年余の最高峰「深山荘 高見屋」、木の温もりあふれる八右衛門の湯「蔵王国際ホテル」、白樺林の離れ湯「蔵王四季のホテル」を徹底比較。大露天風呂や山形牛すき焼き、山形市トラベルクーポン活用術を網羅。',
  keywords: '蔵王温泉 ふるさと納税,深山荘 高見屋 クーポン,蔵王国際ホテル ふるさと納税,蔵王四季のホテル 宿泊,山形市 ふるさと納税 旅行',
  alternates: {
    canonical: 'https://croud-travel.pages.dev/furusato-tax-zao-onsen-acid-sulfur-stay',
  },
  openGraph: {
    title: '【蔵王温泉×ふるさと納税】日本屈指の強酸性白濁硫黄泉＆山形牛！名門名湯宿特集｜深山荘高見屋・蔵王国際ホテル・蔵王四季のホテル',
    description: '開湯千九百年・蔵王連峰の雄大な自然に抱かれる山形県蔵王温泉を楽天ふるさと納税でお得に満喫！享保年間創業三百年余の最高峰「深山荘 高見屋」、木の温もりあふれる八右衛門の湯「蔵王国際ホテル」、白樺林の離れ湯「蔵王四季のホテル」を徹底比較。大露天風呂や山形牛すき焼き、山形市トラベルクーポン活用術を網羅。',
    url: 'https://croud-travel.pages.dev/furusato-tax-zao-onsen-acid-sulfur-stay',
    siteName: 'トラベルガイド - クラウドトラベル',
    locale: 'ja_JP',
    type: 'article',
  },
};

export default function FurusatoArticlePage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: '【蔵王温泉×ふるさと納税】日本屈指の強酸性白濁硫黄泉＆山形牛！名門名湯宿特集｜深山荘高見屋・蔵王国際ホテル・蔵王四季のホテル',
    description: '開湯千九百年・蔵王連峰の雄大な自然に抱かれる山形県蔵王温泉を楽天ふるさと納税でお得に満喫！享保年間創業三百年余の最高峰「深山荘 高見屋」、木の温もりあふれる八右衛門の湯「蔵王国際ホテル」、白樺林の離れ湯「蔵王四季のホテル」を徹底比較。大露天風呂や山形牛すき焼き、山形市トラベルクーポン活用術を網羅。',
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
    mainEntityOfPage: 'https://croud-travel.pages.dev/furusato-tax-zao-onsen-acid-sulfur-stay',
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
        <span className="text-stone-700 font-medium truncate">【蔵王温泉×ふるさと納税】日本屈指の強酸性白濁硫黄泉＆山形牛！名門名湯宿特集｜深山荘高見屋・蔵王国際ホテル・蔵王四季のホテル</span>
      </nav>

      {/* ヒーローセクション */}
      <header className="max-w-4xl mx-auto px-4 sm:px-6 py-8 sm:py-12 space-y-4">
        <div className="inline-flex items-center gap-2 bg-amber-100/80 text-amber-900 text-xs font-semibold px-3 py-1 rounded-full border border-amber-200">
          <span>♨️</span>
          <span>山形県山形市 ふるさと納税・名湯宿特集</span>
        </div>
        <h1 className="text-2xl sm:text-4xl font-extrabold font-serif text-stone-900 tracking-tight leading-snug">
          【蔵王温泉×ふるさと納税】日本屈指の強酸性白濁硫黄泉＆山形牛！名門名湯宿特集｜深山荘高見屋・蔵王国際ホテル・蔵王四季のホテル
        </h1>
        <p className="text-stone-600 text-sm sm:text-base leading-relaxed">
          開湯千九百年・蔵王連峰の雄大な自然に抱かれる山形県蔵王温泉を楽天ふるさと納税でお得に満喫！享保年間創業三百年余の最高峰「深山荘 高見屋」、木の温もりあふれる八右衛門の湯「蔵王国際ホテル」、白樺林の離れ湯「蔵王四季のホテル」を徹底比較。大露天風呂や山形牛すき焼き、山形市トラベルクーポン活用術を網羅。
        </p>
      </header>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 space-y-12">
        {/* リード文セクション */}
        <section className="bg-white rounded-3xl p-6 sm:p-8 shadow-sm border border-stone-200/80 space-y-4">
          <h2 className="text-lg sm:text-xl font-bold font-serif text-amber-900 border-b border-amber-100 pb-3">
            皮膚を強くし美肌をつくる強酸性の白濁湯——蔵王連峰の息吹と山形牛・郷土料理を味わう東北屈指の山岳温泉ステイ
          </h2>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed">
            山形県山形市、奥羽山脈の主峰・蔵王連峰の中腹標高約880メートルに位置する蔵王（ざおう）温泉。西暦110年、日本武尊の東征に従軍した吉備多賀由（きびのたかゆ）によって発見されたと伝わる、千九百年余の歴史を誇る日本屈指の古湯です。蔵王温泉の最大の特徴は、pH1.3〜1.6という日本トップクラスの強酸性を誇る含硫黄アルミニウム硫酸塩塩化物温泉。乳白色に濁る濃厚な湯は、高い殺菌作用と皮膚再生効果を持ち、「美人づくりの湯」「不老長寿の湯」として親しまれています。
          </p>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed">
            温泉街の奥に広がる名物「蔵王温泉大露天風呂」や、各宿が守る総木造りの湯屋で名湯を満喫した後は、山形が誇る極上ブランド牛「山形牛」のすき焼きやステーキ、山形名物「芋煮」、採れたて山菜や手打ちそばに舌鼓。冬には世界的な奇観「樹氷（スノーモンスター）」が山頂を埋め尽くし、スキーやスノーボードの聖地としても賑わいます。山形県山形市へのふるさと納税を利用すれば、30%相当の楽天トラベルクーポンにより名門温泉宿へお得に宿泊でき、特別な思い出が残る東北の旅が叶います。
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
                  <td className="p-3 font-bold text-amber-900">深山荘　高見屋</td>
                  <td className="p-3 font-bold">★ 4.57</td>
                  <td className="p-3 text-stone-600">創業三百年余・享保年間から続く蔵王温泉最高峰の格式！総木造りの離れ湯屋と伝統の日本建築</td>
                  <td className="p-3 text-stone-600">最高峰の格式・贅沢ステイ</td>
                </tr>
                <tr>
                  <td className="p-3 font-bold text-amber-900">蔵王温泉　蔵王国際ホテル</td>
                  <td className="p-3 font-bold">★ 4.7</td>
                  <td className="p-3 text-stone-600">木の温もりあふれる総木造り八右衛門の湯！乳白色掛け流しの天然温泉と山形牛すき焼きの贅沢リゾート</td>
                  <td className="p-3 text-stone-600">抜群の立地・名湯満喫</td>
                </tr>
                <tr>
                  <td className="p-3 font-bold text-amber-900">蔵王温泉　蔵王四季のホテル</td>
                  <td className="p-3 font-bold">★ 4.76</td>
                  <td className="p-3 text-stone-600">白樺林に囲まれた離れ湯「百八歩の湯」！乳白色の硫黄露天風呂と落ち着いた高原リゾートホテル</td>
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
                src="https://img.travel.rakuten.co.jp/share/HOTEL/38534/38534.jpg"
                alt="深山荘　高見屋"
                className="w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute top-4 left-4 bg-stone-900/80 backdrop-blur-sm text-white text-xs px-3 py-1.5 rounded-full font-semibold">
                第1選
              </div>
              <div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-sm text-stone-900 text-xs px-3 py-1.5 rounded-full font-bold shadow">
                ★ 4.57（口コミ 705件）
              </div>
            </div>

            <div className="p-6 sm:p-8 space-y-6">
              <div className="space-y-2">
                <span className="text-xs font-bold text-amber-700 uppercase tracking-wider">山形県山形市</span>
                <h3 className="text-xl sm:text-2xl font-bold font-serif text-stone-900 leading-snug">
                  深山荘　高見屋
                </h3>
                <p className="text-xs sm:text-sm font-medium text-amber-800">
                  創業三百年余・享保年間から続く蔵王温泉最高峰の格式！総木造りの離れ湯屋と伝統の日本建築
                </p>
              </div>

              <div className="border-t border-b border-stone-100 py-4 space-y-3">
                <h4 className="font-bold text-stone-900 text-sm sm:text-base font-serif">
                  深山荘 高見屋（たかみや） —— 歴史と格式を紡ぐ名門老舗。蔵王の自然湧出源泉を惜しみなく掛け流す至高の湯処
                </h4>
                <div className="grid gap-3 text-xs sm:text-sm text-stone-700">
                  
                  <div className="bg-stone-50 p-3.5 rounded-xl border border-stone-200/60">
                    <h5 className="font-bold text-stone-900 mb-1 flex items-center gap-1.5">
                      <span className="text-amber-600">✓</span> 自然湧出する自家源泉を注ぐ総木造りの湯屋「せせらぎの湯」
                    </h5>
                    <p className="text-stone-600 leading-relaxed">釘を使わない伝統技法で組まれた美しい湯屋。乳白色の強酸性硫黄泉が掛け流され、ヒノキの香りと湯煙の中で極上の湯浴みが叶います。</p>
                  </div>
                  <div className="bg-stone-50 p-3.5 rounded-xl border border-stone-200/60">
                    <h5 className="font-bold text-stone-900 mb-1 flex items-center gap-1.5">
                      <span className="text-amber-600">✓</span> 和の情緒あふれる数寄屋造りの客室とアンティークの調度品
                    </h5>
                    <p className="text-stone-600 leading-relaxed">文人墨客が愛した格式高い客室棟。静寂に包まれた空間で、日常を離れた大人の極上ステイを堪能できます。</p>
                  </div>
                  <div className="bg-stone-50 p-3.5 rounded-xl border border-stone-200/60">
                    <h5 className="font-bold text-stone-900 mb-1 flex items-center gap-1.5">
                      <span className="text-amber-600">✓</span> 厳選された山形牛ステーキや旬の山里会席料理
                    </h5>
                    <p className="text-stone-600 leading-relaxed">料理人が丹精込めて仕立てる本格和会席。きめ細やかな霜降りの山形牛や清流魚、地元のきのこや山菜を優雅に味わえます。</p>
                  </div>
                </div>
              </div>

              {/* レビュー抜粋 */}
              <div className="bg-amber-50/60 p-4 rounded-2xl border border-amber-100 text-xs sm:text-sm space-y-1.5">
                <span className="font-bold text-amber-900 flex items-center gap-1.5">
                  <span>💬</span> 実際の宿泊者からの評価・口コミ
                </span>
                <p className="text-stone-700 leading-relaxed">楽天トラベル評価4.67点、口コミ900件超。「お風呂の雰囲気が映画のワンシーンのようで素晴らしくお湯も最高」「お料理も接客もすべてが名門にふさわしく感動した」と絶賛。</p>
              </div>

              {/* 宿基本情報 */}
              <div className="text-xs text-stone-500 grid sm:grid-cols-2 gap-2 bg-stone-50 p-4 rounded-xl">
                <div><span className="font-semibold text-stone-700">住所：</span>山形県 山形市蔵王温泉54</div>
                <div><span className="font-semibold text-stone-700">宿泊目安：</span>¥21,780〜 /人</div>
                <div><span className="font-semibold text-stone-700">楽天施設ID：</span>38534</div>
                <div><span className="font-semibold text-stone-700">予約区分：</span>楽天ふるさと納税トラベルクーポン対象</div>
              </div>

              <div className="pt-2">
                <a
                  href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FJBe8h%2F%3Ff_no%3D38534"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full text-center bg-gradient-to-r from-amber-700 to-amber-900 hover:from-amber-800 hover:to-stone-900 text-white font-bold py-3.5 px-6 rounded-xl shadow transition"
                >
                  【楽天トラベル】深山荘　高見屋 の宿泊プランとクーポン適用はこちら →
                </a>
              </div>
            </div>
          </article>

          {/* ホテル 2 */}
          <article className="bg-white rounded-3xl overflow-hidden shadow-sm border border-stone-200/80 transition hover:shadow-md">
            <div className="relative aspect-video sm:aspect-[16/9] w-full overflow-hidden bg-stone-100">
              <img
                src="https://img.travel.rakuten.co.jp/share/HOTEL/5723/5723.jpg"
                alt="蔵王温泉　蔵王国際ホテル"
                className="w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute top-4 left-4 bg-stone-900/80 backdrop-blur-sm text-white text-xs px-3 py-1.5 rounded-full font-semibold">
                第2選
              </div>
              <div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-sm text-stone-900 text-xs px-3 py-1.5 rounded-full font-bold shadow">
                ★ 4.7（口コミ 1545件）
              </div>
            </div>

            <div className="p-6 sm:p-8 space-y-6">
              <div className="space-y-2">
                <span className="text-xs font-bold text-amber-700 uppercase tracking-wider">山形県山形市</span>
                <h3 className="text-xl sm:text-2xl font-bold font-serif text-stone-900 leading-snug">
                  蔵王温泉　蔵王国際ホテル
                </h3>
                <p className="text-xs sm:text-sm font-medium text-amber-800">
                  木の温もりあふれる総木造り八右衛門の湯！乳白色掛け流しの天然温泉と山形牛すき焼きの贅沢リゾート
                </p>
              </div>

              <div className="border-t border-b border-stone-100 py-4 space-y-3">
                <h4 className="font-bold text-stone-900 text-sm sm:text-base font-serif">
                  蔵王温泉 蔵王国際ホテル —— 木造建築の傑作大浴場。ゲレンデ直結の好立地と心温まるおもてなし
                </h4>
                <div className="grid gap-3 text-xs sm:text-sm text-stone-700">
                  
                  <div className="bg-stone-50 p-3.5 rounded-xl border border-stone-200/60">
                    <h5 className="font-bold text-stone-900 mb-1 flex items-center gap-1.5">
                      <span className="text-amber-600">✓</span> 丸太の梁が組み上げられた総木造り大浴場「八右衛門の湯」
                    </h5>
                    <p className="text-stone-600 leading-relaxed">高い吹き抜け天井と木の香りが心地よい名物浴場。白濁した100％源泉掛け流しの湯船と露天風呂で至福のリラックスを体験できます。</p>
                  </div>
                  <div className="bg-stone-50 p-3.5 rounded-xl border border-stone-200/60">
                    <h5 className="font-bold text-stone-900 mb-1 flex items-center gap-1.5">
                      <span className="text-amber-600">✓</span> 蔵王温泉スキー場ゲレンデ直結の抜群のロケーション
                    </h5>
                    <p className="text-stone-600 leading-relaxed">冬はホテルからそのままゲレンデへ直行。春から秋にはトレッキングやロープウェイ観光の拠点として便利です。</p>
                  </div>
                  <div className="bg-stone-50 p-3.5 rounded-xl border border-stone-200/60">
                    <h5 className="font-bold text-stone-900 mb-1 flex items-center gap-1.5">
                      <span className="text-amber-600">✓</span> 山形牛のすき焼きやしゃぶしゃぶを味わう季節の創作和食会席
                    </h5>
                    <p className="text-stone-600 leading-relaxed">とろけるような山形牛の旨味を堪能できるディナーコース。地元の採れたて野菜や山形県産つや姫のご飯も絶品です。</p>
                  </div>
                </div>
              </div>

              {/* レビュー抜粋 */}
              <div className="bg-amber-50/60 p-4 rounded-2xl border border-amber-100 text-xs sm:text-sm space-y-1.5">
                <span className="font-bold text-amber-900 flex items-center gap-1.5">
                  <span>💬</span> 実際の宿泊者からの評価・口コミ
                </span>
                <p className="text-stone-700 leading-relaxed">楽天トラベル評価4.56点、口コミ2400件超。「八右衛門の湯が素晴らしく乳白色のお湯に感動」「スタッフの接客が親切でお料理もとても美味しかった」と高評価。</p>
              </div>

              {/* 宿基本情報 */}
              <div className="text-xs text-stone-500 grid sm:grid-cols-2 gap-2 bg-stone-50 p-4 rounded-xl">
                <div><span className="font-semibold text-stone-700">住所：</span>山形県 山形市蔵王温泉933</div>
                <div><span className="font-semibold text-stone-700">宿泊目安：</span>¥13,860〜 /人</div>
                <div><span className="font-semibold text-stone-700">楽天施設ID：</span>5723</div>
                <div><span className="font-semibold text-stone-700">予約区分：</span>楽天ふるさと納税トラベルクーポン対象</div>
              </div>

              <div className="pt-2">
                <a
                  href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FJBe8h%2F%3Ff_no%3D5723"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full text-center bg-gradient-to-r from-amber-700 to-amber-900 hover:from-amber-800 hover:to-stone-900 text-white font-bold py-3.5 px-6 rounded-xl shadow transition"
                >
                  【楽天トラベル】蔵王温泉　蔵王国際ホテル の宿泊プランとクーポン適用はこちら →
                </a>
              </div>
            </div>
          </article>

          {/* ホテル 3 */}
          <article className="bg-white rounded-3xl overflow-hidden shadow-sm border border-stone-200/80 transition hover:shadow-md">
            <div className="relative aspect-video sm:aspect-[16/9] w-full overflow-hidden bg-stone-100">
              <img
                src="https://img.travel.rakuten.co.jp/share/HOTEL/16423/16423.jpg"
                alt="蔵王温泉　蔵王四季のホテル"
                className="w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute top-4 left-4 bg-stone-900/80 backdrop-blur-sm text-white text-xs px-3 py-1.5 rounded-full font-semibold">
                第3選
              </div>
              <div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-sm text-stone-900 text-xs px-3 py-1.5 rounded-full font-bold shadow">
                ★ 4.76（口コミ 1621件）
              </div>
            </div>

            <div className="p-6 sm:p-8 space-y-6">
              <div className="space-y-2">
                <span className="text-xs font-bold text-amber-700 uppercase tracking-wider">山形県山形市</span>
                <h3 className="text-xl sm:text-2xl font-bold font-serif text-stone-900 leading-snug">
                  蔵王温泉　蔵王四季のホテル
                </h3>
                <p className="text-xs sm:text-sm font-medium text-amber-800">
                  白樺林に囲まれた離れ湯「百八歩の湯」！乳白色の硫黄露天風呂と落ち着いた高原リゾートホテル
                </p>
              </div>

              <div className="border-t border-b border-stone-100 py-4 space-y-3">
                <h4 className="font-bold text-stone-900 text-sm sm:text-base font-serif">
                  蔵王温泉 蔵王四季のホテル —— 森林に抱かれる癒やしの館。離れ露天風呂と山形の恵み会席
                </h4>
                <div className="grid gap-3 text-xs sm:text-sm text-stone-700">
                  
                  <div className="bg-stone-50 p-3.5 rounded-xl border border-stone-200/60">
                    <h5 className="font-bold text-stone-900 mb-1 flex items-center gap-1.5">
                      <span className="text-amber-600">✓</span> ホテルから百八歩歩いた白樺林の中に佇む離れ湯「百八歩の湯」
                    </h5>
                    <p className="text-stone-600 leading-relaxed">木造りの風情ある独立した湯小屋。白濁した硫黄泉の露天風呂と内湯があり、森林浴をしながら名湯を楽しめます。</p>
                  </div>
                  <div className="bg-stone-50 p-3.5 rounded-xl border border-stone-200/60">
                    <h5 className="font-bold text-stone-900 mb-1 flex items-center gap-1.5">
                      <span className="text-amber-600">✓</span> 館内大浴場「白樺の湯」には肌に優しい弱アルカリ性人工温泉も完備
                    </h5>
                    <p className="text-stone-600 leading-relaxed">酸性泉が苦手な方でも安心して入れる館内浴場。サウナも完備し、二つの異なる入浴体験が楽しめます。</p>
                  </div>
                  <div className="bg-stone-50 p-3.5 rounded-xl border border-stone-200/60">
                    <h5 className="font-bold text-stone-900 mb-1 flex items-center gap-1.5">
                      <span className="text-amber-600">✓</span> 山形牛の陶板焼きや郷土名物「芋煮」を取り入れた会席料理
                    </h5>
                    <p className="text-stone-600 leading-relaxed">山形ならではの滋味あふれる料理が並ぶ夕食。広々としたレストランでゆったりと食事を満喫できます。</p>
                  </div>
                </div>
              </div>

              {/* レビュー抜粋 */}
              <div className="bg-amber-50/60 p-4 rounded-2xl border border-amber-100 text-xs sm:text-sm space-y-1.5">
                <span className="font-bold text-amber-900 flex items-center gap-1.5">
                  <span>💬</span> 実際の宿泊者からの評価・口コミ
                </span>
                <p className="text-stone-700 leading-relaxed">楽天トラベル評価4.43点、口コミ1900件超。「離れの百八歩の湯の雰囲気が最高で白濁湯を満喫できた」「館内が静かで落ち着いており、食事も美味しかった」と好評。</p>
              </div>

              {/* 宿基本情報 */}
              <div className="text-xs text-stone-500 grid sm:grid-cols-2 gap-2 bg-stone-50 p-4 rounded-xl">
                <div><span className="font-semibold text-stone-700">住所：</span>山形県 山形市蔵王温泉1272</div>
                <div><span className="font-semibold text-stone-700">宿泊目安：</span>¥12,540〜 /人</div>
                <div><span className="font-semibold text-stone-700">楽天施設ID：</span>16423</div>
                <div><span className="font-semibold text-stone-700">予約区分：</span>楽天ふるさと納税トラベルクーポン対象</div>
              </div>

              <div className="pt-2">
                <a
                  href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FJBe8h%2F%3Ff_no%3D16423"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full text-center bg-gradient-to-r from-amber-700 to-amber-900 hover:from-amber-800 hover:to-stone-900 text-white font-bold py-3.5 px-6 rounded-xl shadow transition"
                >
                  【楽天トラベル】蔵王温泉　蔵王四季のホテル の宿泊プランとクーポン適用はこちら →
                </a>
              </div>
            </div>
          </article>
        </section>

        {/* エリア観光・見どころ */}
        <section className="space-y-4">
          <h2 className="text-xl sm:text-2xl font-bold font-serif text-stone-900 flex items-center gap-2">
            <span>🗺️</span> 蔵王温泉・樹氷（スノーモンスター）＆御釜（おかま）観光ガイド
          </h2>
          <div className="grid gap-4">

            <div className="bg-white p-5 rounded-2xl border border-stone-200/80 shadow-sm space-y-2">
              <h4 className="font-bold text-stone-900 text-sm sm:text-base font-serif flex items-center gap-2">
                <span className="w-6 h-6 rounded-full bg-amber-100 text-amber-900 flex items-center justify-center text-xs font-sans font-bold">1</span>
                蔵王ロープウェイでの「樹氷（スノーモンスター）」観賞
              </h4>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed pl-8">
                アオモリトドマツに過冷却水滴が吹き付けられてできる世界的奇観「樹氷」。山頂駅からの展望や、夜間の樹氷ライトアップ・ナイトクルーザー号ツアーが感動的です。
              </p>
            </div>
            <div className="bg-white p-5 rounded-2xl border border-stone-200/80 shadow-sm space-y-2">
              <h4 className="font-bold text-stone-900 text-sm sm:text-base font-serif flex items-center gap-2">
                <span className="w-6 h-6 rounded-full bg-amber-100 text-amber-900 flex items-center justify-center text-xs font-sans font-bold">2</span>
                蔵王エコーラインとエメラルドグリーンの火口湖「御釜」
              </h4>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed pl-8">
                蔵王連峰のシンボルである円形の火口湖。太陽光の角度によってエメラルドグリーンに色を変える神秘的な「五色沼」の絶景を望めます。
              </p>
            </div>
            <div className="bg-white p-5 rounded-2xl border border-stone-200/80 shadow-sm space-y-2">
              <h4 className="font-bold text-stone-900 text-sm sm:text-base font-serif flex items-center gap-2">
                <span className="w-6 h-6 rounded-full bg-amber-100 text-amber-900 flex items-center justify-center text-xs font-sans font-bold">3</span>
                蔵王温泉大露天風呂での大自然渓流湯浴み
              </h4>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed pl-8">
                温泉街の奥、渓流沿いに造られた男女合わせて200名が入れる巨大露天風呂（春〜秋営業）。川のせせらぎと森林の緑に包まれながら開放感あふれる入浴が楽しめます。
              </p>
            </div>
          </div>
        </section>

        {/* ふるさと納税活用ステップ */}
        <section className="bg-gradient-to-br from-amber-900 via-stone-900 to-stone-950 text-white rounded-3xl p-6 sm:p-8 shadow-xl space-y-6">
          <div className="space-y-2">
            <span className="text-xs uppercase tracking-widest text-amber-300 font-semibold">How to Use Coupon</span>
            <h2 className="text-xl sm:text-2xl font-bold font-serif text-amber-50">
              山形県山形市ふるさと納税×楽天トラベルクーポン活用手順
            </h2>
            <p className="text-stone-300 text-xs sm:text-sm">
              初めての方でも迷わず利用できる3ステップ。予約済みのプランにも後から適用可能です。
            </p>
          </div>

          <div className="grid sm:grid-cols-3 gap-4 text-xs sm:text-sm">

            <div className="bg-stone-900/60 p-4 rounded-2xl border border-amber-500/20 space-y-2">
              <span className="inline-block bg-amber-500/20 text-amber-300 font-mono text-xs px-2.5 py-0.5 rounded font-semibold">
                Step 1: 楽天ふるさと納税で「山形県山形市」クーポンを獲得
              </span>
              <p className="text-stone-300 text-xs sm:text-sm leading-relaxed">
                楽天ふるさと納税で山形市を選び、トラベルクーポンを返礼品として申し込みます。寄付額の30%相当のクーポンがアカウントに付与されます。
              </p>
            </div>
            <div className="bg-stone-900/60 p-4 rounded-2xl border border-amber-500/20 space-y-2">
              <span className="inline-block bg-amber-500/20 text-amber-300 font-mono text-xs px-2.5 py-0.5 rounded font-semibold">
                Step 2: 山形新幹線山形駅から直行路線バスで約45分
              </span>
              <p className="text-stone-300 text-xs sm:text-sm leading-relaxed">
                東京駅から山形新幹線「つばさ」で山形駅まで約2時間45分、駅から山交バスで蔵王温泉直行。3年間の有効期間内で、冬のスキー・樹氷や夏の避暑・秋の紅葉に合わせて計画できます。
              </p>
            </div>
            <div className="bg-stone-900/60 p-4 rounded-2xl border border-amber-500/20 space-y-2">
              <span className="inline-block bg-amber-500/20 text-amber-300 font-mono text-xs px-2.5 py-0.5 rounded font-semibold">
                Step 3: 楽天トラベル予約画面でクーポン割引を適用して予約完了
              </span>
              <p className="text-stone-300 text-xs sm:text-sm leading-relaxed">
                深山荘高見屋、蔵王国際ホテル、蔵王四季のホテルなどの宿泊プランを選び、決済時にクーポンを選択すれば宿泊代金から大幅な割引が適用されます。
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
