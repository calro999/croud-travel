import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: '【月岡温泉×ふるさと納税】国内随一のエメラルドグリーン硫黄泉＆極上越後会席！名門宿特集｜白玉の湯華鳳・白玉の湯泉慶・風鈴屋',
  description: '日本有数の硫黄含有量を誇る美肌の湯・新潟県月岡温泉を楽天ふるさと納税でお得に贅沢ステイ！六千坪の大庭園と展望露天風呂を誇る最高峰「白玉の湯 華鳳」、岩露天風呂とのどぐろ料理が自慢の「白玉の湯 泉慶」、大庭園と地酒バイキングの「風鈴屋」を徹底比較。新発田市トラベルクーポン活用術を網羅。',
  keywords: '月岡温泉 ふるさと納税,月岡温泉 華鳳 クーポン,白玉の湯 泉慶 ふるさと納税,風鈴屋 月岡温泉 宿泊,新発田市 ふるさと納税 旅行',
  alternates: {
    canonical: 'https://croud-travel.pages.dev/furusato-tax-tsukioka-onsen-emerald-bihada-stay',
  },
  openGraph: {
    title: '【月岡温泉×ふるさと納税】国内随一のエメラルドグリーン硫黄泉＆極上越後会席！名門宿特集｜白玉の湯華鳳・白玉の湯泉慶・風鈴屋',
    description: '日本有数の硫黄含有量を誇る美肌の湯・新潟県月岡温泉を楽天ふるさと納税でお得に贅沢ステイ！六千坪の大庭園と展望露天風呂を誇る最高峰「白玉の湯 華鳳」、岩露天風呂とのどぐろ料理が自慢の「白玉の湯 泉慶」、大庭園と地酒バイキングの「風鈴屋」を徹底比較。新発田市トラベルクーポン活用術を網羅。',
    url: 'https://croud-travel.pages.dev/furusato-tax-tsukioka-onsen-emerald-bihada-stay',
    siteName: 'トラベルガイド - クラウドトラベル',
    locale: 'ja_JP',
    type: 'article',
  },
};

export default function FurusatoArticlePage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: '【月岡温泉×ふるさと納税】国内随一のエメラルドグリーン硫黄泉＆極上越後会席！名門宿特集｜白玉の湯華鳳・白玉の湯泉慶・風鈴屋',
    description: '日本有数の硫黄含有量を誇る美肌の湯・新潟県月岡温泉を楽天ふるさと納税でお得に贅沢ステイ！六千坪の大庭園と展望露天風呂を誇る最高峰「白玉の湯 華鳳」、岩露天風呂とのどぐろ料理が自慢の「白玉の湯 泉慶」、大庭園と地酒バイキングの「風鈴屋」を徹底比較。新発田市トラベルクーポン活用術を網羅。',
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
    mainEntityOfPage: 'https://croud-travel.pages.dev/furusato-tax-tsukioka-onsen-emerald-bihada-stay',
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
        <span className="text-stone-700 font-medium truncate">【月岡温泉×ふるさと納税】国内随一のエメラルドグリーン硫黄泉＆極上越後会席！名門宿特集｜白玉の湯華鳳・白玉の湯泉慶・風鈴屋</span>
      </nav>

      {/* ヒーローセクション */}
      <header className="max-w-4xl mx-auto px-4 sm:px-6 py-8 sm:py-12 space-y-4">
        <div className="inline-flex items-center gap-2 bg-amber-100/80 text-amber-900 text-xs font-semibold px-3 py-1 rounded-full border border-amber-200">
          <span>♨️</span>
          <span>新潟県新発田市 ふるさと納税・名湯宿特集</span>
        </div>
        <h1 className="text-2xl sm:text-4xl font-extrabold font-serif text-stone-900 tracking-tight leading-snug">
          【月岡温泉×ふるさと納税】国内随一のエメラルドグリーン硫黄泉＆極上越後会席！名門宿特集｜白玉の湯華鳳・白玉の湯泉慶・風鈴屋
        </h1>
        <p className="text-stone-600 text-sm sm:text-base leading-relaxed">
          日本有数の硫黄含有量を誇る美肌の湯・新潟県月岡温泉を楽天ふるさと納税でお得に贅沢ステイ！六千坪の大庭園と展望露天風呂を誇る最高峰「白玉の湯 華鳳」、岩露天風呂とのどぐろ料理が自慢の「白玉の湯 泉慶」、大庭園と地酒バイキングの「風鈴屋」を徹底比較。新発田市トラベルクーポン活用術を網羅。
        </p>
      </header>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 space-y-12">
        {/* リード文セクション */}
        <section className="bg-white rounded-3xl p-6 sm:p-8 shadow-sm border border-stone-200/80 space-y-4">
          <h2 className="text-lg sm:text-xl font-bold font-serif text-amber-900 border-b border-amber-100 pb-3">
            エメラルドグリーンに輝く奇跡の白玉の湯——国内屈指の濃厚な硫黄泉と米どころ越後の美食に酔いしれる
          </h2>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed">
            新潟県新発田市に位置する月岡温泉は、大正時代に石油採掘中に湧出したと伝えられる全国的にも珍しい名湯です。月岡温泉の最大の特徴は、美しいエメラルドグリーンに輝く弱アルカリ性の含硫黄ナトリウム塩化物温泉。硫黄含有量は全国第2位を誇り、入浴した瞬間に肌がツルツルになることから「もっと美人になれる温泉」「不老長寿の湯」として絶大な人気を集めています。湯上がり後も体が芯からポカポカと温まり、しっとりとした潤いが長く続きます。
          </p>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed">
            温泉と並び月岡旅行の大きな魅力が、日本一の米どころ越後ならではの美食と地酒です。日本海で水揚げされる高級魚「のどぐろ」の塩焼き、新潟の銘柄牛「にいがた和牛」、炊き立ての南魚沼産・岩船産コシヒカリ、そして新潟が世界に誇る銘酒の数々。新潟県新発田市へのふるさと納税を利用すれば、30%相当の楽天トラベルクーポンにより全国トップクラスの評価を誇る高級旅館へお得に宿泊でき、心身ともに満たされる最高の贅沢旅が叶います。
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
                  <td className="p-3 font-bold text-amber-900">月岡温泉　白玉の湯　華鳳</td>
                  <td className="p-3 font-bold">★ 4.75</td>
                  <td className="p-3 text-stone-600">プロが選ぶ日本のホテル旅館100選で全国総合第3位！六千坪の広大な日本庭園とエメラルドグリーンの大露天風呂</td>
                  <td className="p-3 text-stone-600">最高峰の歴史・名庭園ステイ</td>
                </tr>
                <tr>
                  <td className="p-3 font-bold text-amber-900">月岡温泉　白玉の湯　泉慶</td>
                  <td className="p-3 font-bold">★ 4.73</td>
                  <td className="p-3 text-stone-600">白玉の湯グループの原点にして姉妹館！大岩を配した野趣あふれる露天風呂と真心のこもったもてなし</td>
                  <td className="p-3 text-stone-600">絶景の眺望・美食の饗宴</td>
                </tr>
                <tr>
                  <td className="p-3 font-bold text-amber-900">月岡温泉　風鈴屋（ホテルエリアワングループ）</td>
                  <td className="p-3 font-bold">★ 3.85</td>
                  <td className="p-3 text-stone-600">四季の彩りを感じる日本庭園と露天風呂！越後の美酒と旬菜バイキング・会席が人気の和モダンホテル</td>
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
                src="https://img.travel.rakuten.co.jp/share/HOTEL/32388/32388.jpg"
                alt="月岡温泉　白玉の湯　華鳳"
                className="w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute top-4 left-4 bg-stone-900/80 backdrop-blur-sm text-white text-xs px-3 py-1.5 rounded-full font-semibold">
                第1選
              </div>
              <div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-sm text-stone-900 text-xs px-3 py-1.5 rounded-full font-bold shadow">
                ★ 4.75（口コミ 1647件）
              </div>
            </div>

            <div className="p-6 sm:p-8 space-y-6">
              <div className="space-y-2">
                <span className="text-xs font-bold text-amber-700 uppercase tracking-wider">新潟県新発田市</span>
                <h3 className="text-xl sm:text-2xl font-bold font-serif text-stone-900 leading-snug">
                  月岡温泉　白玉の湯　華鳳
                </h3>
                <p className="text-xs sm:text-sm font-medium text-amber-800">
                  プロが選ぶ日本のホテル旅館100選で全国総合第3位！六千坪の広大な日本庭園とエメラルドグリーンの大露天風呂
                </p>
              </div>

              <div className="border-t border-b border-stone-100 py-4 space-y-3">
                <h4 className="font-bold text-stone-900 text-sm sm:text-base font-serif">
                  月岡温泉 白玉の湯 華鳳（かほう） —— 全国屈指の最高峰名門旅館。小高い丘から越後平野を見晴らす贅沢空間
                </h4>
                <div className="grid gap-3 text-xs sm:text-sm text-stone-700">
                  
                  <div className="bg-stone-50 p-3.5 rounded-xl border border-stone-200/60">
                    <h5 className="font-bold text-stone-900 mb-1 flex items-center gap-1.5">
                      <span className="text-amber-600">✓</span> 小高い丘から越後平野の田園風景を一望する回遊式大庭園露天風呂
                    </h5>
                    <p className="text-stone-600 leading-relaxed">木造回廊が美しい広大な露天風呂。敷地内から自噴する自家源泉「白玉の湯」のエメラルドグリーンのお湯に浸かりながら、開放感あふれる絶景を満喫できます。</p>
                  </div>
                  <div className="bg-stone-50 p-3.5 rounded-xl border border-stone-200/60">
                    <h5 className="font-bold text-stone-900 mb-1 flex items-center gap-1.5">
                      <span className="text-amber-600">✓</span> 六千坪の広大な日本庭園と美術品が飾られた美術館のような館内
                    </h5>
                    <p className="text-stone-600 leading-relaxed">手入れの行き届いた池泉回遊式庭園の散策や、ラウンジでのフリードリンクサービス、温水プールなど、最高級リゾートにふさわしい充実の設備が整っています。</p>
                  </div>
                  <div className="bg-stone-50 p-3.5 rounded-xl border border-stone-200/60">
                    <h5 className="font-bold text-stone-900 mb-1 flex items-center gap-1.5">
                      <span className="text-amber-600">✓</span> 日本海の高級魚「のどぐろ」や村上牛を味わう至高の越後会席
                    </h5>
                    <p className="text-stone-600 leading-relaxed">料理人が腕によりをかけて仕立てる月替わりの本格日本料理。脂の乗ったのどぐろやA5ランク新潟和牛、地元新発田の旬野菜を贅沢に堪能できます。</p>
                  </div>
                </div>
              </div>

              {/* レビュー抜粋 */}
              <div className="bg-amber-50/60 p-4 rounded-2xl border border-amber-100 text-xs sm:text-sm space-y-1.5">
                <span className="font-bold text-amber-900 flex items-center gap-1.5">
                  <span>💬</span> 実際の宿泊者からの評価・口コミ
                </span>
                <p className="text-stone-700 leading-relaxed">楽天トラベル評価4.77点という圧倒的な最高峰スコア。「お風呂のお湯が本当にエメラルドグリーンで肌がつるつるになった」「スタッフの接客もお料理も建物もすべてが一流で感動」と絶賛されています。</p>
              </div>

              {/* 宿基本情報 */}
              <div className="text-xs text-stone-500 grid sm:grid-cols-2 gap-2 bg-stone-50 p-4 rounded-xl">
                <div><span className="font-semibold text-stone-700">住所：</span>新潟県 新発田市月岡温泉134</div>
                <div><span className="font-semibold text-stone-700">宿泊目安：</span>¥23,100〜 /人</div>
                <div><span className="font-semibold text-stone-700">楽天施設ID：</span>32388</div>
                <div><span className="font-semibold text-stone-700">予約区分：</span>楽天ふるさと納税トラベルクーポン対象</div>
              </div>

              <div className="pt-2">
                <a
                  href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FJBe8h%2F%3Ff_no%3D32388"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full text-center bg-gradient-to-r from-amber-700 to-amber-900 hover:from-amber-800 hover:to-stone-900 text-white font-bold py-3.5 px-6 rounded-xl shadow transition"
                >
                  【楽天トラベル】月岡温泉　白玉の湯　華鳳 の宿泊プランとクーポン適用はこちら →
                </a>
              </div>
            </div>
          </article>

          {/* ホテル 2 */}
          <article className="bg-white rounded-3xl overflow-hidden shadow-sm border border-stone-200/80 transition hover:shadow-md">
            <div className="relative aspect-video sm:aspect-[16/9] w-full overflow-hidden bg-stone-100">
              <img
                src="https://img.travel.rakuten.co.jp/share/HOTEL/29709/29709.jpg"
                alt="月岡温泉　白玉の湯　泉慶"
                className="w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute top-4 left-4 bg-stone-900/80 backdrop-blur-sm text-white text-xs px-3 py-1.5 rounded-full font-semibold">
                第2選
              </div>
              <div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-sm text-stone-900 text-xs px-3 py-1.5 rounded-full font-bold shadow">
                ★ 4.73（口コミ 1813件）
              </div>
            </div>

            <div className="p-6 sm:p-8 space-y-6">
              <div className="space-y-2">
                <span className="text-xs font-bold text-amber-700 uppercase tracking-wider">新潟県新発田市</span>
                <h3 className="text-xl sm:text-2xl font-bold font-serif text-stone-900 leading-snug">
                  月岡温泉　白玉の湯　泉慶
                </h3>
                <p className="text-xs sm:text-sm font-medium text-amber-800">
                  白玉の湯グループの原点にして姉妹館！大岩を配した野趣あふれる露天風呂と真心のこもったもてなし
                </p>
              </div>

              <div className="border-t border-b border-stone-100 py-4 space-y-3">
                <h4 className="font-bold text-stone-900 text-sm sm:text-base font-serif">
                  月岡温泉 白玉の湯 泉慶（せんけい） —— 華鳳の伝統を受け継ぐ名館。美肌の自家源泉と美食割烹の饗宴
                </h4>
                <div className="grid gap-3 text-xs sm:text-sm text-stone-700">
                  
                  <div className="bg-stone-50 p-3.5 rounded-xl border border-stone-200/60">
                    <h5 className="font-bold text-stone-900 mb-1 flex items-center gap-1.5">
                      <span className="text-amber-600">✓</span> 巨岩と檜の湯船が並ぶ大浴場「月鏡」と「花鏡」の自家源泉露天
                    </h5>
                    <p className="text-stone-600 leading-relaxed">華鳳と同じく自家源泉「白玉の湯」を引く贅沢な大浴場。濃厚な硫黄の香りと絹のような肌触りの湯に浸かり、日頃の疲れを解きほぐせます。</p>
                  </div>
                  <div className="bg-stone-50 p-3.5 rounded-xl border border-stone-200/60">
                    <h5 className="font-bold text-stone-900 mb-1 flex items-center gap-1.5">
                      <span className="text-amber-600">✓</span> 館内随所に飾られた越後の伝統工芸と温かみあふれる和の風情
                    </h5>
                    <p className="text-stone-600 leading-relaxed">広々としたロビーラウンジやアトリウム。スタッフの親しみやすく細やかな接客が、訪れる旅人に心地よい安心感を与えてくれます。</p>
                  </div>
                  <div className="bg-stone-50 p-3.5 rounded-xl border border-stone-200/60">
                    <h5 className="font-bold text-stone-900 mb-1 flex items-center gap-1.5">
                      <span className="text-amber-600">✓</span> お食事処や個室料亭でいただく新潟の山海の幸会席
                    </h5>
                    <p className="text-stone-600 leading-relaxed">日本海の新鮮な刺身盛り合わせや旬の煮物、コシヒカリの釜飯など、新潟の食の豊かさを存分に実感できる充実のコース料理です。</p>
                  </div>
                </div>
              </div>

              {/* レビュー抜粋 */}
              <div className="bg-amber-50/60 p-4 rounded-2xl border border-amber-100 text-xs sm:text-sm space-y-1.5">
                <span className="font-bold text-amber-900 flex items-center gap-1.5">
                  <span>💬</span> 実際の宿泊者からの評価・口コミ
                </span>
                <p className="text-stone-700 leading-relaxed">楽天トラベル評価4.65点、口コミ2500件超。「お湯が素晴らしく肌がしっとりすべすべになった」「お料理の品数と味が素晴らしく、また必ず泊まりたい」と高いリピート率。</p>
              </div>

              {/* 宿基本情報 */}
              <div className="text-xs text-stone-500 grid sm:grid-cols-2 gap-2 bg-stone-50 p-4 rounded-xl">
                <div><span className="font-semibold text-stone-700">住所：</span>新潟県 新発田市月岡温泉453番地</div>
                <div><span className="font-semibold text-stone-700">宿泊目安：</span>¥17,600〜 /人</div>
                <div><span className="font-semibold text-stone-700">楽天施設ID：</span>29709</div>
                <div><span className="font-semibold text-stone-700">予約区分：</span>楽天ふるさと納税トラベルクーポン対象</div>
              </div>

              <div className="pt-2">
                <a
                  href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FJBe8h%2F%3Ff_no%3D29709"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full text-center bg-gradient-to-r from-amber-700 to-amber-900 hover:from-amber-800 hover:to-stone-900 text-white font-bold py-3.5 px-6 rounded-xl shadow transition"
                >
                  【楽天トラベル】月岡温泉　白玉の湯　泉慶 の宿泊プランとクーポン適用はこちら →
                </a>
              </div>
            </div>
          </article>

          {/* ホテル 3 */}
          <article className="bg-white rounded-3xl overflow-hidden shadow-sm border border-stone-200/80 transition hover:shadow-md">
            <div className="relative aspect-video sm:aspect-[16/9] w-full overflow-hidden bg-stone-100">
              <img
                src="https://img.travel.rakuten.co.jp/share/HOTEL/54967/54967.jpg"
                alt="月岡温泉　風鈴屋（ホテルエリアワングループ）"
                className="w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute top-4 left-4 bg-stone-900/80 backdrop-blur-sm text-white text-xs px-3 py-1.5 rounded-full font-semibold">
                第3選
              </div>
              <div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-sm text-stone-900 text-xs px-3 py-1.5 rounded-full font-bold shadow">
                ★ 3.85（口コミ 692件）
              </div>
            </div>

            <div className="p-6 sm:p-8 space-y-6">
              <div className="space-y-2">
                <span className="text-xs font-bold text-amber-700 uppercase tracking-wider">新潟県新発田市</span>
                <h3 className="text-xl sm:text-2xl font-bold font-serif text-stone-900 leading-snug">
                  月岡温泉　風鈴屋（ホテルエリアワングループ）
                </h3>
                <p className="text-xs sm:text-sm font-medium text-amber-800">
                  四季の彩りを感じる日本庭園と露天風呂！越後の美酒と旬菜バイキング・会席が人気の和モダンホテル
                </p>
              </div>

              <div className="border-t border-b border-stone-100 py-4 space-y-3">
                <h4 className="font-bold text-stone-900 text-sm sm:text-base font-serif">
                  月岡温泉 風鈴屋 —— 庭園を望むやすらぎの宿。良質な月岡の湯とアットホームな滞在
                </h4>
                <div className="grid gap-3 text-xs sm:text-sm text-stone-700">
                  
                  <div className="bg-stone-50 p-3.5 rounded-xl border border-stone-200/60">
                    <h5 className="font-bold text-stone-900 mb-1 flex items-center gap-1.5">
                      <span className="text-amber-600">✓</span> 豊かな緑と風情ある岩組みが調和する庭園露天風呂
                    </h5>
                    <p className="text-stone-600 leading-relaxed">月岡の名湯に身を浸しながら、そよぐ木々の葉音と温泉の心地よい温もりを堪能。手足を伸ばしてゆったりと寛げます。</p>
                  </div>
                  <div className="bg-stone-50 p-3.5 rounded-xl border border-stone-200/60">
                    <h5 className="font-bold text-stone-900 mb-1 flex items-center gap-1.5">
                      <span className="text-amber-600">✓</span> 新潟名物と季節の旬菜をカジュアルに楽しむお食事スタイル
                    </h5>
                    <p className="text-stone-600 leading-relaxed">越後の郷土料理や地元の新鮮食材をふんだんに取り入れた料理。ファミリーやグループでも気兼ねなく美味しい食事を満喫できます。</p>
                  </div>
                  <div className="bg-stone-50 p-3.5 rounded-xl border border-stone-200/60">
                    <h5 className="font-bold text-stone-900 mb-1 flex items-center gap-1.5">
                      <span className="text-amber-600">✓</span> 温泉街の散策に便利な立地と落ち着いた和の客室
                    </h5>
                    <p className="text-stone-600 leading-relaxed">月岡温泉街のメインストリートにも近く、足湯「湯足美」や地酒の試飲処「蔵」への散策拠点として抜群のロケーションです。</p>
                  </div>
                </div>
              </div>

              {/* レビュー抜粋 */}
              <div className="bg-amber-50/60 p-4 rounded-2xl border border-amber-100 text-xs sm:text-sm space-y-1.5">
                <span className="font-bold text-amber-900 flex items-center gap-1.5">
                  <span>💬</span> 実際の宿泊者からの評価・口コミ
                </span>
                <p className="text-stone-700 leading-relaxed">楽天トラベル評価4.11点、口コミ1200件超。「露天風呂のお湯が本格的でとても気持ちよかった」「コスパが良く温泉街の散策にも便利だった」と好評です。</p>
              </div>

              {/* 宿基本情報 */}
              <div className="text-xs text-stone-500 grid sm:grid-cols-2 gap-2 bg-stone-50 p-4 rounded-xl">
                <div><span className="font-semibold text-stone-700">住所：</span>新潟県 新発田市月岡温泉130</div>
                <div><span className="font-semibold text-stone-700">宿泊目安：</span>¥6,500〜 /人</div>
                <div><span className="font-semibold text-stone-700">楽天施設ID：</span>54967</div>
                <div><span className="font-semibold text-stone-700">予約区分：</span>楽天ふるさと納税トラベルクーポン対象</div>
              </div>

              <div className="pt-2">
                <a
                  href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FJBe8h%2F%3Ff_no%3D54967"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full text-center bg-gradient-to-r from-amber-700 to-amber-900 hover:from-amber-800 hover:to-stone-900 text-white font-bold py-3.5 px-6 rounded-xl shadow transition"
                >
                  【楽天トラベル】月岡温泉　風鈴屋（ホテルエリアワングループ） の宿泊プランとクーポン適用はこちら →
                </a>
              </div>
            </div>
          </article>
        </section>

        {/* エリア観光・見どころ */}
        <section className="space-y-4">
          <h2 className="text-xl sm:text-2xl font-bold font-serif text-stone-900 flex items-center gap-2">
            <span>🗺️</span> 月岡温泉街・歩いて楽しむ温泉街めぐりガイド
          </h2>
          <div className="grid gap-4">

            <div className="bg-white p-5 rounded-2xl border border-stone-200/80 shadow-sm space-y-2">
              <h4 className="font-bold text-stone-900 text-sm sm:text-base font-serif flex items-center gap-2">
                <span className="w-6 h-6 rounded-full bg-amber-100 text-amber-900 flex items-center justify-center text-xs font-sans font-bold">1</span>
                新潟全蔵元の地酒を試飲できる「蔵（KURA）」
              </h4>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed pl-8">
                月岡温泉街にある人気スポット。新潟県内にある全酒蔵のプレミアムな銘酒が揃い、お猪口片手にコイン式で多彩な日本酒の飲み比べ体験が楽しめます。
              </p>
            </div>
            <div className="bg-white p-5 rounded-2xl border border-stone-200/80 shadow-sm space-y-2">
              <h4 className="font-bold text-stone-900 text-sm sm:text-base font-serif flex items-center gap-2">
                <span className="w-6 h-6 rounded-full bg-amber-100 text-amber-900 flex items-center justify-center text-xs font-sans font-bold">2</span>
                あしゆ「湯足美（ゆたび）」と演舞場
              </h4>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed pl-8">
                温泉街の中心にある無料の足湯施設。手湯や足湯を楽しみながら、夜にはライトアップされた和傘のオブジェやイベント演舞を鑑賞できます。
              </p>
            </div>
            <div className="bg-white p-5 rounded-2xl border border-stone-200/80 shadow-sm space-y-2">
              <h4 className="font-bold text-stone-900 text-sm sm:text-base font-serif flex items-center gap-2">
                <span className="w-6 h-6 rounded-full bg-amber-100 text-amber-900 flex items-center justify-center text-xs font-sans font-bold">3</span>
                新潟米を使った手焼きせんべい体験「田（DEN）」
              </h4>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed pl-8">
                新潟名物の特大せんべいを自分で炭火で焼き、醤油や七味で味付けして絵を描ける体験処。旅の記念やお土産にぴったりです。
              </p>
            </div>
          </div>
        </section>

        {/* ふるさと納税活用ステップ */}
        <section className="bg-gradient-to-br from-amber-900 via-stone-900 to-stone-950 text-white rounded-3xl p-6 sm:p-8 shadow-xl space-y-6">
          <div className="space-y-2">
            <span className="text-xs uppercase tracking-widest text-amber-300 font-semibold">How to Use Coupon</span>
            <h2 className="text-xl sm:text-2xl font-bold font-serif text-amber-50">
              新潟県新発田市ふるさと納税×楽天トラベルクーポン活用手順
            </h2>
            <p className="text-stone-300 text-xs sm:text-sm">
              初めての方でも迷わず利用できる3ステップ。予約済みのプランにも後から適用可能です。
            </p>
          </div>

          <div className="grid sm:grid-cols-3 gap-4 text-xs sm:text-sm">

            <div className="bg-stone-900/60 p-4 rounded-2xl border border-amber-500/20 space-y-2">
              <span className="inline-block bg-amber-500/20 text-amber-300 font-mono text-xs px-2.5 py-0.5 rounded font-semibold">
                Step 1: 楽天ふるさと納税で「新潟県新発田市」クーポンを獲得
              </span>
              <p className="text-stone-300 text-xs sm:text-sm leading-relaxed">
                楽天ふるさと納税で新発田市を選び、寄付額の30%相当となるトラベルクーポンを返礼品として申し込みます。楽天ポイントの還元も通常通り受けられます。
              </p>
            </div>
            <div className="bg-stone-900/60 p-4 rounded-2xl border border-amber-500/20 space-y-2">
              <span className="inline-block bg-amber-500/20 text-amber-300 font-mono text-xs px-2.5 py-0.5 rounded font-semibold">
                Step 2: 上越新幹線・特急いなほや新潟駅直行バスで快適アクセス
              </span>
              <p className="text-stone-300 text-xs sm:text-sm leading-relaxed">
                東京駅から上越新幹線で新潟駅まで約2時間、新潟駅から月岡温泉直行バスで約45分。3年間の有効期間内で、冬の雪見風呂や秋の味覚シーズンに合わせて計画できます。
              </p>
            </div>
            <div className="bg-stone-900/60 p-4 rounded-2xl border border-amber-500/20 space-y-2">
              <span className="inline-block bg-amber-500/20 text-amber-300 font-mono text-xs px-2.5 py-0.5 rounded font-semibold">
                Step 3: 楽天トラベル予約画面でクーポン割引を適用して予約完了
              </span>
              <p className="text-stone-300 text-xs sm:text-sm leading-relaxed">
                華鳳、泉慶、風鈴屋などの対象プランを選び、決済時にクーポンを選択すれば宿泊代金から大幅な割引が適用されます。
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
