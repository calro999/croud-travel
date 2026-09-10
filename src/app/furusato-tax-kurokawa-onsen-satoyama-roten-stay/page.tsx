import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: '【黒川温泉×ふるさと納税】渓谷の秘湯・入湯手形で巡る露天風呂＆あか牛会席！風情名宿特集｜お宿のし湯・旅館山河・黒川荘',
  description: 'ミシュラン二つ星の里山秘湯・熊本県黒川温泉を楽天ふるさと納税でお得に贅沢ステイ！雑木林に佇む大人の隠れ家「お宿 のし湯」、三千坪の森に二つの自家源泉を誇る「旅館 山河」、びょうぶ岩望むエメラルドグリーンの湯「黒川荘」を徹底比較。入湯手形やあか牛料理、南小国町トラベルクーポン活用術を網羅。',
  keywords: '黒川温泉 ふるさと納税,黒川温泉 露天風呂 ふるさと納税,お宿のし湯 クーポン,旅館山河 ふるさと納税,南小国町 ふるさと納税 宿泊',
  alternates: {
    canonical: 'https://croud-travel.pages.dev/furusato-tax-kurokawa-onsen-satoyama-roten-stay',
  },
  openGraph: {
    title: '【黒川温泉×ふるさと納税】渓谷の秘湯・入湯手形で巡る露天風呂＆あか牛会席！風情名宿特集｜お宿のし湯・旅館山河・黒川荘',
    description: 'ミシュラン二つ星の里山秘湯・熊本県黒川温泉を楽天ふるさと納税でお得に贅沢ステイ！雑木林に佇む大人の隠れ家「お宿 のし湯」、三千坪の森に二つの自家源泉を誇る「旅館 山河」、びょうぶ岩望むエメラルドグリーンの湯「黒川荘」を徹底比較。入湯手形やあか牛料理、南小国町トラベルクーポン活用術を網羅。',
    url: 'https://croud-travel.pages.dev/furusato-tax-kurokawa-onsen-satoyama-roten-stay',
    siteName: 'トラベルガイド - クラウドトラベル',
    locale: 'ja_JP',
    type: 'article',
  },
};

export default function FurusatoArticlePage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: '【黒川温泉×ふるさと納税】渓谷の秘湯・入湯手形で巡る露天風呂＆あか牛会席！風情名宿特集｜お宿のし湯・旅館山河・黒川荘',
    description: 'ミシュラン二つ星の里山秘湯・熊本県黒川温泉を楽天ふるさと納税でお得に贅沢ステイ！雑木林に佇む大人の隠れ家「お宿 のし湯」、三千坪の森に二つの自家源泉を誇る「旅館 山河」、びょうぶ岩望むエメラルドグリーンの湯「黒川荘」を徹底比較。入湯手形やあか牛料理、南小国町トラベルクーポン活用術を網羅。',
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
    datePublished: '2026-09-10T17:10:00+09:00',
    dateModified: '2026-09-10T17:10:00+09:00',
    mainEntityOfPage: 'https://croud-travel.pages.dev/furusato-tax-kurokawa-onsen-satoyama-roten-stay',
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
        <span className="text-stone-700 font-medium truncate">【黒川温泉×ふるさと納税】渓谷の秘湯・入湯手形で巡る露天風呂＆あか牛会席！風情名宿特集｜お宿のし湯・旅館山河・黒川荘</span>
      </nav>

      {/* ヒーローセクション */}
      <header className="max-w-4xl mx-auto px-4 sm:px-6 py-8 sm:py-12 space-y-4">
        <div className="inline-flex items-center gap-2 bg-amber-100/80 text-amber-900 text-xs font-semibold px-3 py-1 rounded-full border border-amber-200">
          <span>♨️</span>
          <span>熊本県南小国町 ふるさと納税・名湯宿特集</span>
        </div>
        <h1 className="text-2xl sm:text-4xl font-extrabold font-serif text-stone-900 tracking-tight leading-snug">
          【黒川温泉×ふるさと納税】渓谷の秘湯・入湯手形で巡る露天風呂＆あか牛会席！風情名宿特集｜お宿のし湯・旅館山河・黒川荘
        </h1>
        <p className="text-stone-600 text-sm sm:text-base leading-relaxed">
          ミシュラン二つ星の里山秘湯・熊本県黒川温泉を楽天ふるさと納税でお得に贅沢ステイ！雑木林に佇む大人の隠れ家「お宿 のし湯」、三千坪の森に二つの自家源泉を誇る「旅館 山河」、びょうぶ岩望むエメラルドグリーンの湯「黒川荘」を徹底比較。入湯手形やあか牛料理、南小国町トラベルクーポン活用術を網羅。
        </p>
      </header>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 space-y-12">
        {/* リード文セクション */}
        <section className="bg-white rounded-3xl p-6 sm:p-8 shadow-sm border border-stone-200/80 space-y-4">
          <h2 className="text-lg sm:text-xl font-bold font-serif text-amber-900 border-b border-amber-100 pb-3">
            田の原川のせせらぎと茅葺き屋根の情緒——杉木立の小径を入湯手形で巡る至高の里山リトリート
          </h2>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed">
            熊本県阿蘇郡南小国町、阿蘇カルデラの北側、標高約700メートルの山間に湧き出る黒川（くろかわ）温泉。「街全体が一つの宿、通りは廊下、旅館は客室」という景観づくりの哲学のもと、派手な看板を排し、黒を基調とした木造建築と豊かな雑木林が調和した日本屈指の美しい里山温泉地です。ミシュラン・グリーンガイド・ジャポンでも二つ星を獲得し、国内外の温泉ファンから「一度は訪れたい憧れの秘湯」として熱狂的な支持を集めています。
          </p>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed">
            黒川温泉の名物といえば、地元産小国杉で作られた木製の「入湯手形」。加盟旅館の多彩な露天風呂の中から好きな3箇所を自由にめぐることができ、川沿いの野天風呂や竹林風呂、洞窟風呂など、大自然と一体化する湯浴みを楽しめます。夕食には阿蘇の雄大な草原で育ったヘルシーで旨味豊かなブランド牛「あか牛」のステーキや炭火焼き、山菜や川魚を取り入れた山里会席を堪能。熊本県南小国町へのふるさと納税を利用すれば、30%相当の楽天トラベルクーポンにより憧れの隠れ宿へお得に宿泊でき、心洗われる休日が叶います。
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
                  <td className="p-3 font-bold text-amber-900">黒川温泉　お宿のし湯</td>
                  <td className="p-3 font-bold">★ 4.79</td>
                  <td className="p-3 text-stone-600">雑木林の中に点在する離れと野趣あふれる大野天風呂！木々のぬくもりと静寂に包まれる全十一室の隠れ家</td>
                  <td className="p-3 text-stone-600">最高峰の絶景・憧れのステイ</td>
                </tr>
                <tr>
                  <td className="p-3 font-bold text-amber-900">黒川温泉　旅館　山河</td>
                  <td className="p-3 font-bold">★ 4.7</td>
                  <td className="p-3 text-stone-600">三千坪の原生林に佇む秘湯の一軒宿！「薬師の湯」と「美肌の湯」の二つの自家源泉を引く名門</td>
                  <td className="p-3 text-stone-600">充実の施設・アクティブ寛ぎ</td>
                </tr>
                <tr>
                  <td className="p-3 font-bold text-amber-900">黒川温泉　黒川荘</td>
                  <td className="p-3 font-bold">★ 4.76</td>
                  <td className="p-3 text-stone-600">田の原川の巨岩「びょうぶ岩」を望む名物露天風呂！淡いエメラルドグリーンの名湯と離れ客室の贅</td>
                  <td className="p-3 text-stone-600">落ち着いた風情・アットホーム旅</td>
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
                src="https://img.travel.rakuten.co.jp/share/HOTEL/78187/78187.jpg"
                alt="黒川温泉　お宿のし湯"
                className="w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute top-4 left-4 bg-stone-900/80 backdrop-blur-sm text-white text-xs px-3 py-1.5 rounded-full font-semibold">
                第1選
              </div>
              <div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-sm text-stone-900 text-xs px-3 py-1.5 rounded-full font-bold shadow">
                ★ 4.79（口コミ 461件）
              </div>
            </div>

            <div className="p-6 sm:p-8 space-y-6">
              <div className="space-y-2">
                <span className="text-xs font-bold text-amber-700 uppercase tracking-wider">熊本県南小国町</span>
                <h3 className="text-xl sm:text-2xl font-bold font-serif text-stone-900 leading-snug">
                  黒川温泉　お宿のし湯
                </h3>
                <p className="text-xs sm:text-sm font-medium text-amber-800">
                  雑木林の中に点在する離れと野趣あふれる大野天風呂！木々のぬくもりと静寂に包まれる全十一室の隠れ家
                </p>
              </div>

              <div className="border-t border-b border-stone-100 py-4 space-y-3">
                <h4 className="font-bold text-stone-900 text-sm sm:text-base font-serif">
                  黒川温泉 お宿 のし湯 —— 木立の中に佇む大人の隠れ宿。茅葺き門をくぐると広がる安らぎの異空間
                </h4>
                <div className="grid gap-3 text-xs sm:text-sm text-stone-700">
                  
                  <div className="bg-stone-50 p-3.5 rounded-xl border border-stone-200/60">
                    <h5 className="font-bold text-stone-900 mb-1 flex items-center gap-1.5">
                      <span className="text-amber-600">✓</span> 木漏れ日が揺れる大野天風呂「野天風呂」と趣異なる貸切風呂
                    </h5>
                    <p className="text-stone-600 leading-relaxed">雑木林に囲まれた開放感抜群の野天風呂。自然石を配した湯船に浸かりながら、鳥のさえずりと風の音に包まれる至福の湯浴みを体験できます。</p>
                  </div>
                  <div className="bg-stone-50 p-3.5 rounded-xl border border-stone-200/60">
                    <h5 className="font-bold text-stone-900 mb-1 flex items-center gap-1.5">
                      <span className="text-amber-600">✓</span> 古木や自然素材を活かした温もりあふれる離れ客室
                    </h5>
                    <p className="text-stone-600 leading-relaxed">過度な装飾のない落ち着いた和モダン空間。日常の喧騒を離れ、静かに読書をしたりお茶を楽しんだり、大人のプライベート時間を満喫できます。</p>
                  </div>
                  <div className="bg-stone-50 p-3.5 rounded-xl border border-stone-200/60">
                    <h5 className="font-bold text-stone-900 mb-1 flex items-center gap-1.5">
                      <span className="text-amber-600">✓</span> 阿蘇あか牛や地元の旬野菜を取り入れた素朴で上質な会席料理
                    </h5>
                    <p className="text-stone-600 leading-relaxed">手作りの温かみが伝わる創作山里料理。素材本来の甘みと旨味を引き出した料理が旅情を心地よく深めてくれます。</p>
                  </div>
                </div>
              </div>

              {/* レビュー抜粋 */}
              <div className="bg-amber-50/60 p-4 rounded-2xl border border-amber-100 text-xs sm:text-sm space-y-1.5">
                <span className="font-bold text-amber-900 flex items-center gap-1.5">
                  <span>💬</span> 実際の宿泊者からの評価・口コミ
                </span>
                <p className="text-stone-700 leading-relaxed">楽天トラベル評価4.66点、口コミ800件超。「雑木林の雰囲気が素晴らしくお風呂も最高」「接客が親切で料理も美味しく、本当にリラックスできた」と熱烈な支持。</p>
              </div>

              {/* 宿基本情報 */}
              <div className="text-xs text-stone-500 grid sm:grid-cols-2 gap-2 bg-stone-50 p-4 rounded-xl">
                <div><span className="font-semibold text-stone-700">住所：</span>熊本県 阿蘇郡南小国町満願寺6591-1　</div>
                <div><span className="font-semibold text-stone-700">宿泊目安：</span>¥23,100〜 /人</div>
                <div><span className="font-semibold text-stone-700">楽天施設ID：</span>78187</div>
                <div><span className="font-semibold text-stone-700">予約区分：</span>楽天ふるさと納税トラベルクーポン対象</div>
              </div>

              <div className="pt-2">
                <a
                  href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FJBe8h%2F%3Ff_no%3D78187"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full text-center bg-gradient-to-r from-amber-700 to-amber-900 hover:from-amber-800 hover:to-stone-900 text-white font-bold py-3.5 px-6 rounded-xl shadow transition"
                >
                  【楽天トラベル】黒川温泉　お宿のし湯 の宿泊プランとクーポン適用はこちら →
                </a>
              </div>
            </div>
          </article>

          {/* ホテル 2 */}
          <article className="bg-white rounded-3xl overflow-hidden shadow-sm border border-stone-200/80 transition hover:shadow-md">
            <div className="relative aspect-video sm:aspect-[16/9] w-full overflow-hidden bg-stone-100">
              <img
                src="https://img.travel.rakuten.co.jp/share/HOTEL/138061/138061.jpg"
                alt="黒川温泉　旅館　山河"
                className="w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute top-4 left-4 bg-stone-900/80 backdrop-blur-sm text-white text-xs px-3 py-1.5 rounded-full font-semibold">
                第2選
              </div>
              <div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-sm text-stone-900 text-xs px-3 py-1.5 rounded-full font-bold shadow">
                ★ 4.7（口コミ 149件）
              </div>
            </div>

            <div className="p-6 sm:p-8 space-y-6">
              <div className="space-y-2">
                <span className="text-xs font-bold text-amber-700 uppercase tracking-wider">熊本県南小国町</span>
                <h3 className="text-xl sm:text-2xl font-bold font-serif text-stone-900 leading-snug">
                  黒川温泉　旅館　山河
                </h3>
                <p className="text-xs sm:text-sm font-medium text-amber-800">
                  三千坪の原生林に佇む秘湯の一軒宿！「薬師の湯」と「美肌の湯」の二つの自家源泉を引く名門
                </p>
              </div>

              <div className="border-t border-b border-stone-100 py-4 space-y-3">
                <h4 className="font-bold text-stone-900 text-sm sm:text-base font-serif">
                  黒川温泉 旅館 山河（さんが） —— 渓流のほとりに佇む静寂の宿。二大自家源泉と四季折々の自然美
                </h4>
                <div className="grid gap-3 text-xs sm:text-sm text-stone-700">
                  
                  <div className="bg-stone-50 p-3.5 rounded-xl border border-stone-200/60">
                    <h5 className="font-bold text-stone-900 mb-1 flex items-center gap-1.5">
                      <span className="text-amber-600">✓</span> 性質の異なる二本の自家源泉（単純硫黄泉と炭酸水素塩泉）
                    </h5>
                    <p className="text-stone-600 leading-relaxed">飲泉もできる胃腸に良い「薬師の湯」と、肌をしっとり整える「美肌の湯」。露天風呂「もやいの湯」や貸切風呂で贅沢な掛け流しの湯巡りが叶います。</p>
                  </div>
                  <div className="bg-stone-50 p-3.5 rounded-xl border border-stone-200/60">
                    <h5 className="font-bold text-stone-900 mb-1 flex items-center gap-1.5">
                      <span className="text-amber-600">✓</span> 三千坪の広大な森に囲まれた木造旅館の落ち着き
                    </h5>
                    <p className="text-stone-600 leading-relaxed">田の原川の支流沿いに建ち、春の新緑、夏のホタル、秋の紅葉、冬の雪景色と、手つかずの自然の中で静かに寛ぐことができます。</p>
                  </div>
                  <div className="bg-stone-50 p-3.5 rounded-xl border border-stone-200/60">
                    <h5 className="font-bold text-stone-900 mb-1 flex items-center gap-1.5">
                      <span className="text-amber-600">✓</span> 肥後あか牛や山菜、ヤマメを炭火や会席で味わう山里料理
                    </h5>
                    <p className="text-stone-600 leading-relaxed">料理長が自ら吟味した地元熊本の食材。個室の食事処で、温かいものは温かいうちに一品一品丁寧に運ばれます。</p>
                  </div>
                </div>
              </div>

              {/* レビュー抜粋 */}
              <div className="bg-amber-50/60 p-4 rounded-2xl border border-amber-100 text-xs sm:text-sm space-y-1.5">
                <span className="font-bold text-amber-900 flex items-center gap-1.5">
                  <span>💬</span> 実際の宿泊者からの評価・口コミ
                </span>
                <p className="text-stone-700 leading-relaxed">楽天トラベル評価4.68点、口コミ1300件超。「二種類の源泉がどちらも素晴らしく森の中の露天風呂が最高」「スタッフの温かさと美味しいあか牛に大満足」と絶賛。</p>
              </div>

              {/* 宿基本情報 */}
              <div className="text-xs text-stone-500 grid sm:grid-cols-2 gap-2 bg-stone-50 p-4 rounded-xl">
                <div><span className="font-semibold text-stone-700">住所：</span>熊本県 阿蘇郡南小国町</div>
                <div><span className="font-semibold text-stone-700">宿泊目安：</span>¥23,100〜 /人</div>
                <div><span className="font-semibold text-stone-700">楽天施設ID：</span>138061</div>
                <div><span className="font-semibold text-stone-700">予約区分：</span>楽天ふるさと納税トラベルクーポン対象</div>
              </div>

              <div className="pt-2">
                <a
                  href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FJBe8h%2F%3Ff_no%3D138061"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full text-center bg-gradient-to-r from-amber-700 to-amber-900 hover:from-amber-800 hover:to-stone-900 text-white font-bold py-3.5 px-6 rounded-xl shadow transition"
                >
                  【楽天トラベル】黒川温泉　旅館　山河 の宿泊プランとクーポン適用はこちら →
                </a>
              </div>
            </div>
          </article>

          {/* ホテル 3 */}
          <article className="bg-white rounded-3xl overflow-hidden shadow-sm border border-stone-200/80 transition hover:shadow-md">
            <div className="relative aspect-video sm:aspect-[16/9] w-full overflow-hidden bg-stone-100">
              <img
                src="https://img.travel.rakuten.co.jp/share/HOTEL/56843/56843.jpg"
                alt="黒川温泉　黒川荘"
                className="w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute top-4 left-4 bg-stone-900/80 backdrop-blur-sm text-white text-xs px-3 py-1.5 rounded-full font-semibold">
                第3選
              </div>
              <div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-sm text-stone-900 text-xs px-3 py-1.5 rounded-full font-bold shadow">
                ★ 4.76（口コミ 297件）
              </div>
            </div>

            <div className="p-6 sm:p-8 space-y-6">
              <div className="space-y-2">
                <span className="text-xs font-bold text-amber-700 uppercase tracking-wider">熊本県南小国町</span>
                <h3 className="text-xl sm:text-2xl font-bold font-serif text-stone-900 leading-snug">
                  黒川温泉　黒川荘
                </h3>
                <p className="text-xs sm:text-sm font-medium text-amber-800">
                  田の原川の巨岩「びょうぶ岩」を望む名物露天風呂！淡いエメラルドグリーンの名湯と離れ客室の贅
                </p>
              </div>

              <div className="border-t border-b border-stone-100 py-4 space-y-3">
                <h4 className="font-bold text-stone-900 text-sm sm:text-base font-serif">
                  黒川温泉 黒川荘 —— 巨岩の渓谷美を仰ぐ特等席。びょうぶ岩露天風呂と茅葺きの歴史空間
                </h4>
                <div className="grid gap-3 text-xs sm:text-sm text-stone-700">
                  
                  <div className="bg-stone-50 p-3.5 rounded-xl border border-stone-200/60">
                    <h5 className="font-bold text-stone-900 mb-1 flex items-center gap-1.5">
                      <span className="text-amber-600">✓</span> そそり立つ「びょうぶ岩」を真正面に望む大露天風呂
                    </h5>
                    <p className="text-stone-600 leading-relaxed">自然のダイナミズムを間近に感じる大露天風呂。白濁から淡いグリーンへと色を変える良質な弱酸性温泉に浸かりながら、迫力の渓谷美を仰げます。</p>
                  </div>
                  <div className="bg-stone-50 p-3.5 rounded-xl border border-stone-200/60">
                    <h5 className="font-bold text-stone-900 mb-1 flex items-center gap-1.5">
                      <span className="text-amber-600">✓</span> 茅葺き屋根の古民家を移築した重厚な離れ「温飩芽（うどんめ）」
                    </h5>
                    <p className="text-stone-600 leading-relaxed">歴史の風格が漂う専用風呂付きの離れ客室。プライベートな空間で、家族や大切な人とゆったりとした時間を過ごせます。</p>
                  </div>
                  <div className="bg-stone-50 p-3.5 rounded-xl border border-stone-200/60">
                    <h5 className="font-bold text-stone-900 mb-1 flex items-center gap-1.5">
                      <span className="text-amber-600">✓</span> 肥後あか牛の溶岩焼きや馬刺しなど熊本の名物を極めた会席
                    </h5>
                    <p className="text-stone-600 leading-relaxed">新鮮な特選馬刺しや柔らかいあか牛のステーキ、地元野菜の煮物など、熊本の豊かな山海の幸を存分に堪能できます。</p>
                  </div>
                </div>
              </div>

              {/* レビュー抜粋 */}
              <div className="bg-amber-50/60 p-4 rounded-2xl border border-amber-100 text-xs sm:text-sm space-y-1.5">
                <span className="font-bold text-amber-900 flex items-center gap-1.5">
                  <span>💬</span> 実際の宿泊者からの評価・口コミ
                </span>
                <p className="text-stone-700 leading-relaxed">楽天トラベル評価4.63点、口コミ1100件超。「びょうぶ岩を眺めながら入る露天風呂が圧巻」「お部屋の雰囲気も食事も素晴らしく黒川で最高の宿」と高評価。</p>
              </div>

              {/* 宿基本情報 */}
              <div className="text-xs text-stone-500 grid sm:grid-cols-2 gap-2 bg-stone-50 p-4 rounded-xl">
                <div><span className="font-semibold text-stone-700">住所：</span>熊本県 阿蘇郡南小国町満願寺6755-1</div>
                <div><span className="font-semibold text-stone-700">宿泊目安：</span>¥14,000〜 /人</div>
                <div><span className="font-semibold text-stone-700">楽天施設ID：</span>56843</div>
                <div><span className="font-semibold text-stone-700">予約区分：</span>楽天ふるさと納税トラベルクーポン対象</div>
              </div>

              <div className="pt-2">
                <a
                  href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FJBe8h%2F%3Ff_no%3D56843"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full text-center bg-gradient-to-r from-amber-700 to-amber-900 hover:from-amber-800 hover:to-stone-900 text-white font-bold py-3.5 px-6 rounded-xl shadow transition"
                >
                  【楽天トラベル】黒川温泉　黒川荘 の宿泊プランとクーポン適用はこちら →
                </a>
              </div>
            </div>
          </article>
        </section>

        {/* エリア観光・見どころ */}
        <section className="space-y-4">
          <h2 className="text-xl sm:text-2xl font-bold font-serif text-stone-900 flex items-center gap-2">
            <span>🗺️</span> 黒川温泉・入湯手形散策＆平野台展望所ガイド
          </h2>
          <div className="grid gap-4">

            <div className="bg-white p-5 rounded-2xl border border-stone-200/80 shadow-sm space-y-2">
              <h4 className="font-bold text-stone-900 text-sm sm:text-base font-serif flex items-center gap-2">
                <span className="w-6 h-6 rounded-full bg-amber-100 text-amber-900 flex items-center justify-center text-xs font-sans font-bold">1</span>
                入湯手形での温泉街露天風呂めぐりと足湯散歩
              </h4>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed pl-8">
                1枚で3カ所の露天風呂に入れる名物「入湯手形」。川沿いの風情ある小径を浴衣姿で歩き、個性豊かな露天風呂や「顔湯」「足湯」を楽しむのが定番です。
              </p>
            </div>
            <div className="bg-white p-5 rounded-2xl border border-stone-200/80 shadow-sm space-y-2">
              <h4 className="font-bold text-stone-900 text-sm sm:text-base font-serif flex items-center gap-2">
                <span className="w-6 h-6 rounded-full bg-amber-100 text-amber-900 flex items-center justify-center text-xs font-sans font-bold">2</span>
                平野台高原展望所（恋人の聖地）からの阿蘇パノラマビュー
              </h4>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed pl-8">
                黒川温泉街から車で約5分。阿蘇五岳や祖母連山を一望する大展望台。夕暮れどきには茜色に染まる阿蘇の大草原が息を呑む絶景を作り出します。
              </p>
            </div>
            <div className="bg-white p-5 rounded-2xl border border-stone-200/80 shadow-sm space-y-2">
              <h4 className="font-bold text-stone-900 text-sm sm:text-base font-serif flex items-center gap-2">
                <span className="w-6 h-6 rounded-full bg-amber-100 text-amber-900 flex items-center justify-center text-xs font-sans font-bold">3</span>
                温泉街の食べ歩きスイーツ（どらどらバーガー・シュークリーム）
              </h4>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed pl-8">
                「どら焼き家 どらどら」の名物どらドラバーガーや、「パティスリー麓」のサクサク極上シュークリームなど、湯上がりに食べたい絶品スイーツが満載です。
              </p>
            </div>
          </div>
        </section>

        {/* ふるさと納税活用ステップ */}
        <section className="bg-gradient-to-br from-amber-900 via-stone-900 to-stone-950 text-white rounded-3xl p-6 sm:p-8 shadow-xl space-y-6">
          <div className="space-y-2">
            <span className="text-xs uppercase tracking-widest text-amber-300 font-semibold">How to Use Coupon</span>
            <h2 className="text-xl sm:text-2xl font-bold font-serif text-amber-50">
              熊本県南小国町ふるさと納税×楽天トラベルクーポン活用手順
            </h2>
            <p className="text-stone-300 text-xs sm:text-sm">
              初めての方でも迷わず利用できる3ステップ。予約済みのプランにも後から適用可能です。
            </p>
          </div>

          <div className="grid sm:grid-cols-3 gap-4 text-xs sm:text-sm">

            <div className="bg-stone-900/60 p-4 rounded-2xl border border-amber-500/20 space-y-2">
              <span className="inline-block bg-amber-500/20 text-amber-300 font-mono text-xs px-2.5 py-0.5 rounded font-semibold">
                Step 1: 楽天ふるさと納税で「熊本県南小国町」クーポンを獲得
              </span>
              <p className="text-stone-300 text-xs sm:text-sm leading-relaxed">
                楽天ふるさと納税で南小国町を選び、トラベルクーポンを返礼品として申し込みます。寄付額の30%相当のクーポンがアカウントに付与されます。
              </p>
            </div>
            <div className="bg-stone-900/60 p-4 rounded-2xl border border-amber-500/20 space-y-2">
              <span className="inline-block bg-amber-500/20 text-amber-300 font-mono text-xs px-2.5 py-0.5 rounded font-semibold">
                Step 2: 阿蘇くまもと空港や福岡・博多からの直行高速バスでアクセス
              </span>
              <p className="text-stone-300 text-xs sm:text-sm leading-relaxed">
                阿蘇くまもと空港から特急バス「やまびこ号」または熊本・博多からの直行バスでアクセス。3年間の有効期間内で、新緑や紅葉、冬の「湯あかり」に合わせて計画できます。
              </p>
            </div>
            <div className="bg-stone-900/60 p-4 rounded-2xl border border-amber-500/20 space-y-2">
              <span className="inline-block bg-amber-500/20 text-amber-300 font-mono text-xs px-2.5 py-0.5 rounded font-semibold">
                Step 3: 楽天トラベル予約画面でクーポン割引を適用して予約完了
              </span>
              <p className="text-stone-300 text-xs sm:text-sm leading-relaxed">
                お宿のし湯、旅館山河、黒川荘などの対象宿泊プランを選び、決済時にクーポンを選択すれば宿泊代金から大幅な割引が適用されます。
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
              <Link href="/furusato-tax-jozankei-onsen-keikoku-retreat-stay" className="hover:text-amber-800 underline flex items-center gap-1.5 py-1">
                <span>▸</span> 定山渓温泉 豊平峡渓谷美＆源泉かけ流しリゾート特集
              </Link>
            </li>
            <li>
              <Link href="/furusato-tax-shuzenji-onsen-bamboo-heritage-stay" className="hover:text-amber-800 underline flex items-center gap-1.5 py-1">
                <span>▸</span> 修善寺温泉 伊豆最古の名湯・竹林の小径＆文化財宿特集
              </Link>
            </li>
          </ul>
        </section>
      </div>
    </main>
  );
}
