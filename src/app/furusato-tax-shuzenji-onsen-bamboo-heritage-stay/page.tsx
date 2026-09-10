import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: '【修善寺温泉×ふるさと納税】伊豆最古の名湯・竹林の小径散策＆国の登録文化財！歴史名宿特集｜菊屋・新井旅館・宙SORA',
  description: '弘法大師が開いた伊豆最古の名湯・静岡県修善寺温泉を楽天ふるさと納税でお得に満喫！創業四百年・夏目漱石ゆかりの「湯回廊 菊屋」、国の登録有形文化財十五棟を誇る「新井旅館」、一万五千坪の名庭園と展望風呂の「宙 SORA 渡月荘金龍」を徹底比較。伊豆牛会席や伊豆市トラベルクーポン活用術を網羅。',
  keywords: '修善寺温泉 ふるさと納税,湯回廊 菊屋 クーポン,新井旅館 修善寺 ふるさと納税,宙 SORA 渡月荘金龍 宿泊,伊豆市 ふるさと納税 旅行',
  alternates: {
    canonical: 'https://croud-travel.pages.dev/furusato-tax-shuzenji-onsen-bamboo-heritage-stay',
  },
  openGraph: {
    title: '【修善寺温泉×ふるさと納税】伊豆最古の名湯・竹林の小径散策＆国の登録文化財！歴史名宿特集｜菊屋・新井旅館・宙SORA',
    description: '弘法大師が開いた伊豆最古の名湯・静岡県修善寺温泉を楽天ふるさと納税でお得に満喫！創業四百年・夏目漱石ゆかりの「湯回廊 菊屋」、国の登録有形文化財十五棟を誇る「新井旅館」、一万五千坪の名庭園と展望風呂の「宙 SORA 渡月荘金龍」を徹底比較。伊豆牛会席や伊豆市トラベルクーポン活用術を網羅。',
    url: 'https://croud-travel.pages.dev/furusato-tax-shuzenji-onsen-bamboo-heritage-stay',
    siteName: 'トラベルガイド - クラウドトラベル',
    locale: 'ja_JP',
    type: 'article',
  },
};

export default function FurusatoArticlePage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: '【修善寺温泉×ふるさと納税】伊豆最古の名湯・竹林の小径散策＆国の登録文化財！歴史名宿特集｜菊屋・新井旅館・宙SORA',
    description: '弘法大師が開いた伊豆最古の名湯・静岡県修善寺温泉を楽天ふるさと納税でお得に満喫！創業四百年・夏目漱石ゆかりの「湯回廊 菊屋」、国の登録有形文化財十五棟を誇る「新井旅館」、一万五千坪の名庭園と展望風呂の「宙 SORA 渡月荘金龍」を徹底比較。伊豆牛会席や伊豆市トラベルクーポン活用術を網羅。',
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
    mainEntityOfPage: 'https://croud-travel.pages.dev/furusato-tax-shuzenji-onsen-bamboo-heritage-stay',
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
        <span className="text-stone-700 font-medium truncate">【修善寺温泉×ふるさと納税】伊豆最古の名湯・竹林の小径散策＆国の登録文化財！歴史名宿特集｜菊屋・新井旅館・宙SORA</span>
      </nav>

      {/* ヒーローセクション */}
      <header className="max-w-4xl mx-auto px-4 sm:px-6 py-8 sm:py-12 space-y-4">
        <div className="inline-flex items-center gap-2 bg-amber-100/80 text-amber-900 text-xs font-semibold px-3 py-1 rounded-full border border-amber-200">
          <span>♨️</span>
          <span>静岡県伊豆市 ふるさと納税・名湯宿特集</span>
        </div>
        <h1 className="text-2xl sm:text-4xl font-extrabold font-serif text-stone-900 tracking-tight leading-snug">
          【修善寺温泉×ふるさと納税】伊豆最古の名湯・竹林の小径散策＆国の登録文化財！歴史名宿特集｜菊屋・新井旅館・宙SORA
        </h1>
        <p className="text-stone-600 text-sm sm:text-base leading-relaxed">
          弘法大師が開いた伊豆最古の名湯・静岡県修善寺温泉を楽天ふるさと納税でお得に満喫！創業四百年・夏目漱石ゆかりの「湯回廊 菊屋」、国の登録有形文化財十五棟を誇る「新井旅館」、一万五千坪の名庭園と展望風呂の「宙 SORA 渡月荘金龍」を徹底比較。伊豆牛会席や伊豆市トラベルクーポン活用術を網羅。
        </p>
      </header>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 space-y-12">
        {/* リード文セクション */}
        <section className="bg-white rounded-3xl p-6 sm:p-8 shadow-sm border border-stone-200/80 space-y-4">
          <h2 className="text-lg sm:text-xl font-bold font-serif text-amber-900 border-b border-amber-100 pb-3">
            伊豆の小京都に流れる桂川のせせらぎ——竹林の小径と文人墨客が愛した名建築で過ごすタイムレスな休日
          </h2>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed">
            静岡県伊豆市、天城連峰の北麓に位置する修善寺温泉。平安時代初期の大同2年（807年）、弘法大師空海が桂川の河原で病気の実父の体を洗う少年を見て心を打たれ、独鈷杵（とっこしょ）で岩を砕いて温泉を湧出させた「独鈷の湯」がその起源と伝わる、千二百年余の歴史を誇る伊豆最古の名湯です。温泉街の中心を流れる桂川沿いには、青々とした竹が天に向かって伸びる「竹林の小径」や朱塗りの橋が架かり、「伊豆の小京都」と称される優美な情景が広がります。
          </p>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed">
            修善寺温泉の魅力は、川端康成、芥川龍之介、夏目漱石ら多くの文豪が逗留し傑作を執筆した歴史ある木造建築美。手入れの行き届いた日本庭園を眺めながら良質なアルカリ性単純温泉に浸かり、夕食には天城の清流で育った本わさびをすり下ろして味わう伊豆牛ステーキや駿河湾の新鮮な地魚会席に舌鼓。静岡県伊豆市へのふるさと納税を利用すれば、30%相当の楽天トラベルクーポンにより憧れの文化財名宿へお得に宿泊でき、特別な思い出が残る上質な温泉旅が叶います。
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
                  <td className="p-3 font-bold text-amber-900">湯回廊　菊屋（共立リゾート）</td>
                  <td className="p-3 font-bold">★ 4.49</td>
                  <td className="p-3 text-stone-600">創業四百年・夏目漱石が静養した歴史宿！桂川を渡る渡り廊下と趣異なる四つの貸切露天風呂</td>
                  <td className="p-3 text-stone-600">最高峰の歴史・大自然パノラマ</td>
                </tr>
                <tr>
                  <td className="p-3 font-bold text-amber-900">修善寺温泉　国の登録文化財の宿　新井旅館</td>
                  <td className="p-3 font-bold">★ 4.67</td>
                  <td className="p-3 text-stone-600">国の登録有形文化財十五棟を有する生きた建築博物館！横山大観が愛した名湯「天平大浴堂」</td>
                  <td className="p-3 text-stone-600">大人の洗練・極上プライベート</td>
                </tr>
                <tr>
                  <td className="p-3 font-bold text-amber-900">修善寺温泉　宙ＳＯＲＡ　渡月荘金龍</td>
                  <td className="p-3 font-bold">★ 4.66</td>
                  <td className="p-3 text-stone-600">一万五千坪の日本庭園に抱かれるデザイナーズ旅館！光の露天風呂とドラマ撮影地としても名高い美空間</td>
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
                src="https://img.travel.rakuten.co.jp/share/HOTEL/7491/7491.jpg"
                alt="湯回廊　菊屋（共立リゾート）"
                className="w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute top-4 left-4 bg-stone-900/80 backdrop-blur-sm text-white text-xs px-3 py-1.5 rounded-full font-semibold">
                第1選
              </div>
              <div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-sm text-stone-900 text-xs px-3 py-1.5 rounded-full font-bold shadow">
                ★ 4.49（口コミ 1703件）
              </div>
            </div>

            <div className="p-6 sm:p-8 space-y-6">
              <div className="space-y-2">
                <span className="text-xs font-bold text-amber-700 uppercase tracking-wider">静岡県伊豆市</span>
                <h3 className="text-xl sm:text-2xl font-bold font-serif text-stone-900 leading-snug">
                  湯回廊　菊屋（共立リゾート）
                </h3>
                <p className="text-xs sm:text-sm font-medium text-amber-800">
                  創業四百年・夏目漱石が静養した歴史宿！桂川を渡る渡り廊下と趣異なる四つの貸切露天風呂
                </p>
              </div>

              <div className="border-t border-b border-stone-100 py-4 space-y-3">
                <h4 className="font-bold text-stone-900 text-sm sm:text-base font-serif">
                  湯回廊 菊屋（共立リゾート） —— 桂川のせせらぎに包まれる回廊。時を忘れる湯巡りと漱石ゆかりの和モダン空間
                </h4>
                <div className="grid gap-3 text-xs sm:text-sm text-stone-700">
                  
                  <div className="bg-stone-50 p-3.5 rounded-xl border border-stone-200/60">
                    <h5 className="font-bold text-stone-900 mb-1 flex items-center gap-1.5">
                      <span className="text-amber-600">✓</span> 敷地内を流れる桂川を渡る風情豊かな「湯回廊」
                    </h5>
                    <p className="text-stone-600 leading-relaxed">時の流れを感じさせる美しい渡り廊下。清流のせせらぎを聞きながら、緑豊かな庭園や客室、大浴場へと続く回廊を歩く贅沢を味わえます。</p>
                  </div>
                  <div className="bg-stone-50 p-3.5 rounded-xl border border-stone-200/60">
                    <h5 className="font-bold text-stone-900 mb-1 flex items-center gap-1.5">
                      <span className="text-amber-600">✓</span> 予約不要・無料で何度でも楽しめる四つの貸切風呂
                    </h5>
                    <p className="text-stone-600 leading-relaxed">趣の異なる露天風呂や内湯の貸切風呂。名湯修善寺の湯に身を浸しながら、プライベートな癒やしの時間をゆったりと過ごせます。</p>
                  </div>
                  <div className="bg-stone-50 p-3.5 rounded-xl border border-stone-200/60">
                    <h5 className="font-bold text-stone-900 mb-1 flex items-center gap-1.5">
                      <span className="text-amber-600">✓</span> 選べる夕食スタイル「台の物」と旬の味覚を散りばめた月替わり会席
                    </h5>
                    <p className="text-stone-600 leading-relaxed">静岡の銘柄肉や駿河湾の魚介を活かした本格会席。夜には名物の「夜鳴きそば」や湯上がりドリンクサービスも楽しめます。</p>
                  </div>
                </div>
              </div>

              {/* レビュー抜粋 */}
              <div className="bg-amber-50/60 p-4 rounded-2xl border border-amber-100 text-xs sm:text-sm space-y-1.5">
                <span className="font-bold text-amber-900 flex items-center gap-1.5">
                  <span>💬</span> 実際の宿泊者からの評価・口コミ
                </span>
                <p className="text-stone-700 leading-relaxed">楽天トラベル評価4.62点、口コミ2800件超。「回廊の雰囲気が素晴らしく風情満点」「お風呂の数が多く貸切風呂も無料で最高、食事も大変美味しかった」と絶大な人気。</p>
              </div>

              {/* 宿基本情報 */}
              <div className="text-xs text-stone-500 grid sm:grid-cols-2 gap-2 bg-stone-50 p-4 rounded-xl">
                <div><span className="font-semibold text-stone-700">住所：</span>静岡県 伊豆市修善寺874-1</div>
                <div><span className="font-semibold text-stone-700">宿泊目安：</span>¥21,230〜 /人</div>
                <div><span className="font-semibold text-stone-700">楽天施設ID：</span>7491</div>
                <div><span className="font-semibold text-stone-700">予約区分：</span>楽天ふるさと納税トラベルクーポン対象</div>
              </div>

              <div className="pt-2">
                <a
                  href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FJBe8h%2F%3Ff_no%3D7491"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full text-center bg-gradient-to-r from-amber-700 to-amber-900 hover:from-amber-800 hover:to-stone-900 text-white font-bold py-3.5 px-6 rounded-xl shadow transition"
                >
                  【楽天トラベル】湯回廊　菊屋（共立リゾート） の宿泊プランとクーポン適用はこちら →
                </a>
              </div>
            </div>
          </article>

          {/* ホテル 2 */}
          <article className="bg-white rounded-3xl overflow-hidden shadow-sm border border-stone-200/80 transition hover:shadow-md">
            <div className="relative aspect-video sm:aspect-[16/9] w-full overflow-hidden bg-stone-100">
              <img
                src="https://img.travel.rakuten.co.jp/share/HOTEL/31865/31865.jpg"
                alt="修善寺温泉　国の登録文化財の宿　新井旅館"
                className="w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute top-4 left-4 bg-stone-900/80 backdrop-blur-sm text-white text-xs px-3 py-1.5 rounded-full font-semibold">
                第2選
              </div>
              <div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-sm text-stone-900 text-xs px-3 py-1.5 rounded-full font-bold shadow">
                ★ 4.67（口コミ 265件）
              </div>
            </div>

            <div className="p-6 sm:p-8 space-y-6">
              <div className="space-y-2">
                <span className="text-xs font-bold text-amber-700 uppercase tracking-wider">静岡県伊豆市</span>
                <h3 className="text-xl sm:text-2xl font-bold font-serif text-stone-900 leading-snug">
                  修善寺温泉　国の登録文化財の宿　新井旅館
                </h3>
                <p className="text-xs sm:text-sm font-medium text-amber-800">
                  国の登録有形文化財十五棟を有する生きた建築博物館！横山大観が愛した名湯「天平大浴堂」
                </p>
              </div>

              <div className="border-t border-b border-stone-100 py-4 space-y-3">
                <h4 className="font-bold text-stone-900 text-sm sm:text-base font-serif">
                  修善寺温泉 国の登録文化財の宿 新井旅館 —— 明治・大正の宮大工の技が息づく最高峰。文化財の中で泊まる奇跡の体験
                </h4>
                <div className="grid gap-3 text-xs sm:text-sm text-stone-700">
                  
                  <div className="bg-stone-50 p-3.5 rounded-xl border border-stone-200/60">
                    <h5 className="font-bold text-stone-900 mb-1 flex items-center gap-1.5">
                      <span className="text-amber-600">✓</span> 総檜造りと伊豆石が織りなす国の登録文化財「天平大浴堂」
                    </h5>
                    <p className="text-stone-600 leading-relaxed">昭和9年に完成した名建築。高い吹き抜け天井と太い檜の柱、天平時代の寺院建築を模した荘厳な空間で、源泉掛け流しの名湯を堪能できます。</p>
                  </div>
                  <div className="bg-stone-50 p-3.5 rounded-xl border border-stone-200/60">
                    <h5 className="font-bold text-stone-900 mb-1 flex items-center gap-1.5">
                      <span className="text-amber-600">✓</span> 桂川の清流と池の鯉を望む歴史ある木造客室
                    </h5>
                    <p className="text-stone-600 leading-relaxed">芥川龍之介や安田靫彦らが逗留した客室棟。職人の細やかな木彫りや欄間の意匠など、日本の伝統建築美に囲まれた滞在が叶います。</p>
                  </div>
                  <div className="bg-stone-50 p-3.5 rounded-xl border border-stone-200/60">
                    <h5 className="font-bold text-stone-900 mb-1 flex items-center gap-1.5">
                      <span className="text-amber-600">✓</span> 天城山麓の採れたて本わさびと伊豆の山海の幸会席
                    </h5>
                    <p className="text-stone-600 leading-relaxed">清流で育った風味豊かな伊豆産わさびや、駿河湾の地魚、旬の野菜を熟練の板前が仕立てる本格和食会席。お部屋で優雅に味わえます。</p>
                  </div>
                </div>
              </div>

              {/* レビュー抜粋 */}
              <div className="bg-amber-50/60 p-4 rounded-2xl border border-amber-100 text-xs sm:text-sm space-y-1.5">
                <span className="font-bold text-amber-900 flex items-center gap-1.5">
                  <span>💬</span> 実際の宿泊者からの評価・口コミ
                </span>
                <p className="text-stone-700 leading-relaxed">楽天トラベル評価4.63点、口コミ1200件超。「建物自体が美術品のようで感動した」「天平大浴堂の素晴らしさは言葉にできない、スタッフのおもてなしも一流」と絶賛。</p>
              </div>

              {/* 宿基本情報 */}
              <div className="text-xs text-stone-500 grid sm:grid-cols-2 gap-2 bg-stone-50 p-4 rounded-xl">
                <div><span className="font-semibold text-stone-700">住所：</span>静岡県 伊豆市修善寺970</div>
                <div><span className="font-semibold text-stone-700">宿泊目安：</span>¥24,420〜 /人</div>
                <div><span className="font-semibold text-stone-700">楽天施設ID：</span>31865</div>
                <div><span className="font-semibold text-stone-700">予約区分：</span>楽天ふるさと納税トラベルクーポン対象</div>
              </div>

              <div className="pt-2">
                <a
                  href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FJBe8h%2F%3Ff_no%3D31865"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full text-center bg-gradient-to-r from-amber-700 to-amber-900 hover:from-amber-800 hover:to-stone-900 text-white font-bold py-3.5 px-6 rounded-xl shadow transition"
                >
                  【楽天トラベル】修善寺温泉　国の登録文化財の宿　新井旅館 の宿泊プランとクーポン適用はこちら →
                </a>
              </div>
            </div>
          </article>

          {/* ホテル 3 */}
          <article className="bg-white rounded-3xl overflow-hidden shadow-sm border border-stone-200/80 transition hover:shadow-md">
            <div className="relative aspect-video sm:aspect-[16/9] w-full overflow-hidden bg-stone-100">
              <img
                src="https://img.travel.rakuten.co.jp/share/HOTEL/27983/27983.jpg"
                alt="修善寺温泉　宙ＳＯＲＡ　渡月荘金龍"
                className="w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute top-4 left-4 bg-stone-900/80 backdrop-blur-sm text-white text-xs px-3 py-1.5 rounded-full font-semibold">
                第3選
              </div>
              <div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-sm text-stone-900 text-xs px-3 py-1.5 rounded-full font-bold shadow">
                ★ 4.66（口コミ 614件）
              </div>
            </div>

            <div className="p-6 sm:p-8 space-y-6">
              <div className="space-y-2">
                <span className="text-xs font-bold text-amber-700 uppercase tracking-wider">静岡県伊豆市</span>
                <h3 className="text-xl sm:text-2xl font-bold font-serif text-stone-900 leading-snug">
                  修善寺温泉　宙ＳＯＲＡ　渡月荘金龍
                </h3>
                <p className="text-xs sm:text-sm font-medium text-amber-800">
                  一万五千坪の日本庭園に抱かれるデザイナーズ旅館！光の露天風呂とドラマ撮影地としても名高い美空間
                </p>
              </div>

              <div className="border-t border-b border-stone-100 py-4 space-y-3">
                <h4 className="font-bold text-stone-900 text-sm sm:text-base font-serif">
                  修善寺温泉 宙 SORA 渡月荘金龍 —— 自然と光が織りなす別世界。円形露天風呂とモダンな日本庭園テラス
                </h4>
                <div className="grid gap-3 text-xs sm:text-sm text-stone-700">
                  
                  <div className="bg-stone-50 p-3.5 rounded-xl border border-stone-200/60">
                    <h5 className="font-bold text-stone-900 mb-1 flex items-center gap-1.5">
                      <span className="text-amber-600">✓</span> 山林の木々を見晴らす森の露天風呂「光の露天風呂」と「夕鶴」
                    </h5>
                    <p className="text-stone-600 leading-relaxed">夜には幻想的なライティングで照らし出される露天風呂。澄んだ星空と森の息吹を感じながら、心地よい名湯に浸かることができます。</p>
                  </div>
                  <div className="bg-stone-50 p-3.5 rounded-xl border border-stone-200/60">
                    <h5 className="font-bold text-stone-900 mb-1 flex items-center gap-1.5">
                      <span className="text-amber-600">✓</span> 一万五千坪の広大な日本庭園とモダンな足湯ラウンジ
                    </h5>
                    <p className="text-stone-600 leading-relaxed">ドラマのロケ地としても有名な美しい庭園。四季折々の花木や紅葉を眺めながら散策を楽しんだり、テラス席で寛ぐことができます。</p>
                  </div>
                  <div className="bg-stone-50 p-3.5 rounded-xl border border-stone-200/60">
                    <h5 className="font-bold text-stone-900 mb-1 flex items-center gap-1.5">
                      <span className="text-amber-600">✓</span> 料理長厳選の伊豆牛や駿河湾の海の幸を味わう創作和会席
                    </h5>
                    <p className="text-stone-600 leading-relaxed">伝統の日本料理に現代のセンスを取り入れた華やかなディナー。盛り付けの美しさと繊細な出汁の味わいに心奪われます。</p>
                  </div>
                </div>
              </div>

              {/* レビュー抜粋 */}
              <div className="bg-amber-50/60 p-4 rounded-2xl border border-amber-100 text-xs sm:text-sm space-y-1.5">
                <span className="font-bold text-amber-900 flex items-center gap-1.5">
                  <span>💬</span> 実際の宿泊者からの評価・口コミ
                </span>
                <p className="text-stone-700 leading-relaxed">楽天トラベル評価4.60点、口コミ1800件超。「お庭が息を呑むほど綺麗で散策が楽しかった」「お風呂からの景色と夜のライトアップが幻想的で、お料理も大満足」と高評価。</p>
              </div>

              {/* 宿基本情報 */}
              <div className="text-xs text-stone-500 grid sm:grid-cols-2 gap-2 bg-stone-50 p-4 rounded-xl">
                <div><span className="font-semibold text-stone-700">住所：</span>静岡県 伊豆市修善寺3455</div>
                <div><span className="font-semibold text-stone-700">宿泊目安：</span>¥11,000〜 /人</div>
                <div><span className="font-semibold text-stone-700">楽天施設ID：</span>27983</div>
                <div><span className="font-semibold text-stone-700">予約区分：</span>楽天ふるさと納税トラベルクーポン対象</div>
              </div>

              <div className="pt-2">
                <a
                  href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FJBe8h%2F%3Ff_no%3D27983"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full text-center bg-gradient-to-r from-amber-700 to-amber-900 hover:from-amber-800 hover:to-stone-900 text-white font-bold py-3.5 px-6 rounded-xl shadow transition"
                >
                  【楽天トラベル】修善寺温泉　宙ＳＯＲＡ　渡月荘金龍 の宿泊プランとクーポン適用はこちら →
                </a>
              </div>
            </div>
          </article>
        </section>

        {/* エリア観光・見どころ */}
        <section className="space-y-4">
          <h2 className="text-xl sm:text-2xl font-bold font-serif text-stone-900 flex items-center gap-2">
            <span>🗺️</span> 修善寺温泉街・竹林の小径＆修禅寺めぐりガイド
          </h2>
          <div className="grid gap-4">

            <div className="bg-white p-5 rounded-2xl border border-stone-200/80 shadow-sm space-y-2">
              <h4 className="font-bold text-stone-900 text-sm sm:text-base font-serif flex items-center gap-2">
                <span className="w-6 h-6 rounded-full bg-amber-100 text-amber-900 flex items-center justify-center text-xs font-sans font-bold">1</span>
                竹林の小径（ちくりんのこみち）と円形ベンチでの休息
              </h4>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed pl-8">
                桂川沿いに続く石畳の散策路。天高く伸びる竹林の中央には竹製の大きな円形ベンチがあり、寝転がって竹の梢と青空を見上げる癒やしの時間を過ごせます。
              </p>
            </div>
            <div className="bg-white p-5 rounded-2xl border border-stone-200/80 shadow-sm space-y-2">
              <h4 className="font-bold text-stone-900 text-sm sm:text-base font-serif flex items-center gap-2">
                <span className="w-6 h-6 rounded-full bg-amber-100 text-amber-900 flex items-center justify-center text-xs font-sans font-bold">2</span>
                福地山 修禅寺（しゅぜんじ）への参拝
              </h4>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed pl-8">
                温泉街の名の由来となった古刹。弘法大師空海が開創し、鎌倉幕府の源氏一族の悲劇の舞台としても知られる歴史の寺。秋の紅葉期には庭園の特別公開も行われます。
              </p>
            </div>
            <div className="bg-white p-5 rounded-2xl border border-stone-200/80 shadow-sm space-y-2">
              <h4 className="font-bold text-stone-900 text-sm sm:text-base font-serif flex items-center gap-2">
                <span className="w-6 h-6 rounded-full bg-amber-100 text-amber-900 flex items-center justify-center text-xs font-sans font-bold">3</span>
                恋の橋めぐり（桂川に架かる五つの橋）
              </h4>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed pl-8">
                桂川に架かる「渡月橋」「虎渓橋」「桂橋」「楓橋」「滝下橋」。それぞれに恋にまつわる願いが込められており、すべて渡ると恋が実ると伝わる人気のパワースポットです。
              </p>
            </div>
          </div>
        </section>

        {/* ふるさと納税活用ステップ */}
        <section className="bg-gradient-to-br from-amber-900 via-stone-900 to-stone-950 text-white rounded-3xl p-6 sm:p-8 shadow-xl space-y-6">
          <div className="space-y-2">
            <span className="text-xs uppercase tracking-widest text-amber-300 font-semibold">How to Use Coupon</span>
            <h2 className="text-xl sm:text-2xl font-bold font-serif text-amber-50">
              静岡県伊豆市ふるさと納税×楽天トラベルクーポン活用手順
            </h2>
            <p className="text-stone-300 text-xs sm:text-sm">
              初めての方でも迷わず利用できる3ステップ。予約済みのプランにも後から適用可能です。
            </p>
          </div>

          <div className="grid sm:grid-cols-3 gap-4 text-xs sm:text-sm">

            <div className="bg-stone-900/60 p-4 rounded-2xl border border-amber-500/20 space-y-2">
              <span className="inline-block bg-amber-500/20 text-amber-300 font-mono text-xs px-2.5 py-0.5 rounded font-semibold">
                Step 1: 楽天ふるさと納税で「静岡県伊豆市」クーポンを獲得
              </span>
              <p className="text-stone-300 text-xs sm:text-sm leading-relaxed">
                楽天ふるさと納税で伊豆市を寄付先に選び、トラベルクーポンを返礼品として申し込みます。寄付額の30%相当のクーポンがアカウントに付与されます。
              </p>
            </div>
            <div className="bg-stone-900/60 p-4 rounded-2xl border border-amber-500/20 space-y-2">
              <span className="inline-block bg-amber-500/20 text-amber-300 font-mono text-xs px-2.5 py-0.5 rounded font-semibold">
                Step 2: 特急踊り子号で東京駅から直通約2時間15分の好アクセス
              </span>
              <p className="text-stone-300 text-xs sm:text-sm leading-relaxed">
                東京駅からJR・伊豆箱根鉄道直通の特急「踊り子」で修善寺駅まで乗り換えなし。3年間の有効期間内で、新緑や紅葉、初春の梅まつりに合わせて計画できます。
              </p>
            </div>
            <div className="bg-stone-900/60 p-4 rounded-2xl border border-amber-500/20 space-y-2">
              <span className="inline-block bg-amber-500/20 text-amber-300 font-mono text-xs px-2.5 py-0.5 rounded font-semibold">
                Step 3: 楽天トラベル予約画面でクーポン割引を適用して予約完了
              </span>
              <p className="text-stone-300 text-xs sm:text-sm leading-relaxed">
                菊屋、新井旅館、宙SORAなどの対象宿泊プランを選び、決済時にクーポンを選択すれば宿泊代金から大幅な割引が適用されます。
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
