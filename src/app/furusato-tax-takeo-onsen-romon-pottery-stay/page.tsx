import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: '【武雄温泉×ふるさと納税】国重文・武雄温泉楼門＆美肌とろとろ湯！焼き物の里宿特集｜京都屋・春慶屋・なかます旅館',
  description: '千三百年余の歴史を誇る佐賀の名湯・武雄温泉を楽天ふるさと納税でお得に贅沢旅！大正ロマンのアンティーク宿「京都屋」、展望露天風呂と佐賀牛の「ホテル春慶屋」、楼門徒歩1分の老舗「なかます旅館」を徹底比較。有田焼・波佐見焼巡りや武雄市トラベルクーポン活用術を網羅。',
  keywords: '武雄温泉 ふるさと納税,武雄温泉 旅館 ふるさと納税,武雄温泉 京都屋 クーポン,春慶屋 武雄 宿泊,武雄市 ふるさと納税 旅行',
  alternates: {
    canonical: 'https://croud-travel.pages.dev/furusato-tax-takeo-onsen-romon-pottery-stay',
  },
  openGraph: {
    title: '【武雄温泉×ふるさと納税】国重文・武雄温泉楼門＆美肌とろとろ湯！焼き物の里宿特集｜京都屋・春慶屋・なかます旅館',
    description: '千三百年余の歴史を誇る佐賀の名湯・武雄温泉を楽天ふるさと納税でお得に贅沢旅！大正ロマンのアンティーク宿「京都屋」、展望露天風呂と佐賀牛の「ホテル春慶屋」、楼門徒歩1分の老舗「なかます旅館」を徹底比較。有田焼・波佐見焼巡りや武雄市トラベルクーポン活用術を網羅。',
    url: 'https://croud-travel.pages.dev/furusato-tax-takeo-onsen-romon-pottery-stay',
    siteName: 'トラベルガイド - クラウドトラベル',
    locale: 'ja_JP',
    type: 'article',
  },
};

export default function FurusatoArticlePage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: '【武雄温泉×ふるさと納税】国重文・武雄温泉楼門＆美肌とろとろ湯！焼き物の里宿特集｜京都屋・春慶屋・なかます旅館',
    description: '千三百年余の歴史を誇る佐賀の名湯・武雄温泉を楽天ふるさと納税でお得に贅沢旅！大正ロマンのアンティーク宿「京都屋」、展望露天風呂と佐賀牛の「ホテル春慶屋」、楼門徒歩1分の老舗「なかます旅館」を徹底比較。有田焼・波佐見焼巡りや武雄市トラベルクーポン活用術を網羅。',
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
    mainEntityOfPage: 'https://croud-travel.pages.dev/furusato-tax-takeo-onsen-romon-pottery-stay',
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
        <span className="text-stone-700 font-medium truncate">【武雄温泉×ふるさと納税】国重文・武雄温泉楼門＆美肌とろとろ湯！焼き物の里宿特集｜京都屋・春慶屋・なかます旅館</span>
      </nav>

      {/* ヒーローセクション */}
      <header className="max-w-4xl mx-auto px-4 sm:px-6 py-8 sm:py-12 space-y-4">
        <div className="inline-flex items-center gap-2 bg-amber-100/80 text-amber-900 text-xs font-semibold px-3 py-1 rounded-full border border-amber-200">
          <span>♨️</span>
          <span>佐賀県武雄市 ふるさと納税・名湯宿特集</span>
        </div>
        <h1 className="text-2xl sm:text-4xl font-extrabold font-serif text-stone-900 tracking-tight leading-snug">
          【武雄温泉×ふるさと納税】国重文・武雄温泉楼門＆美肌とろとろ湯！焼き物の里宿特集｜京都屋・春慶屋・なかます旅館
        </h1>
        <p className="text-stone-600 text-sm sm:text-base leading-relaxed">
          千三百年余の歴史を誇る佐賀の名湯・武雄温泉を楽天ふるさと納税でお得に贅沢旅！大正ロマンのアンティーク宿「京都屋」、展望露天風呂と佐賀牛の「ホテル春慶屋」、楼門徒歩1分の老舗「なかます旅館」を徹底比較。有田焼・波佐見焼巡りや武雄市トラベルクーポン活用術を網羅。
        </p>
      </header>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 space-y-12">
        {/* リード文セクション */}
        <section className="bg-white rounded-3xl p-6 sm:p-8 shadow-sm border border-stone-200/80 space-y-4">
          <h2 className="text-lg sm:text-xl font-bold font-serif text-amber-900 border-b border-amber-100 pb-3">
            竜宮城を思わせる朱塗りの楼門と弱アルカリ性美肌の湯——有田焼・波佐見焼の器と極上佐賀牛を愛でる旅
          </h2>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed">
            佐賀県武雄市、西九州新幹線の開通でアクセスが飛躍的に向上した武雄（たけお）温泉。開湯は千三百年以上前の神話の時代と伝わり、宮本武蔵やシーボルト、伊達政宗など歴史上の偉人たちが湯治に訪れた記録が残されています。武雄温泉のシンボルである朱塗りの「武雄温泉楼門」は、東京駅の設計で知られる唐津出身の建築家・辰野金吾が手がけた国の重要文化財。釘を一本も使わずに建てられた竜宮城のような楼門をくぐると、歴史ある大衆浴場「元湯」や「武雄温泉新館」が立ち並び、タイムスリップしたような情緒が漂います。
          </p>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed">
            武雄温泉のお湯は、透明で肌触りが非常に滑らかな弱アルカリ性単純温泉。抜群の保湿力と疲労回復効果から「美人の湯」として古くから親しまれています。周辺には有田焼・伊万里焼・波佐見焼といった日本を代表する陶磁器の産地が広がり、夕食には美しい陶器に盛り付けられた最高級ブランド牛「佐賀牛」のステーキやすき焼き、名物「温泉湯豆腐」を堪能できます。佐賀県武雄市へのふるさと納税を利用すれば、30%相当の楽天トラベルクーポンにより風情ある名宿へお得に宿泊でき、九州の豊かな文化と温泉を満喫する最高の旅が叶います。
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
                  <td className="p-3 font-bold text-amber-900">武雄温泉　大正浪漫の宿　京都屋</td>
                  <td className="p-3 font-bold">★ 4.31</td>
                  <td className="p-3 text-stone-600">創業百十余年・大正ロマンの香るクラシック旅館！蓄音機やアンティーク家具が彩る空間と自家源泉美肌の湯</td>
                  <td className="p-3 text-stone-600">最高峰の歴史・名庭園ステイ</td>
                </tr>
                <tr>
                  <td className="p-3 font-bold text-amber-900">武雄温泉　ホテル春慶屋</td>
                  <td className="p-3 font-bold">★ 4.43</td>
                  <td className="p-3 text-stone-600">創業六百余年の歴史を誇る老舗！武雄の街並みと御船山を一望する最上階展望露天風呂と佐賀牛会席</td>
                  <td className="p-3 text-stone-600">絶景の眺望・美食の饗宴</td>
                </tr>
                <tr>
                  <td className="p-3 font-bold text-amber-900">武雄温泉　なかます旅館</td>
                  <td className="p-3 font-bold">★ 4.03</td>
                  <td className="p-3 text-stone-600">武雄温泉楼門まで徒歩わずか1分の好立地！アットホームな老舗旅館で味わう名湯と家庭的な郷土料理</td>
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
                src="https://img.travel.rakuten.co.jp/share/HOTEL/5552/5552.jpg"
                alt="武雄温泉　大正浪漫の宿　京都屋"
                className="w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute top-4 left-4 bg-stone-900/80 backdrop-blur-sm text-white text-xs px-3 py-1.5 rounded-full font-semibold">
                第1選
              </div>
              <div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-sm text-stone-900 text-xs px-3 py-1.5 rounded-full font-bold shadow">
                ★ 4.31（口コミ 483件）
              </div>
            </div>

            <div className="p-6 sm:p-8 space-y-6">
              <div className="space-y-2">
                <span className="text-xs font-bold text-amber-700 uppercase tracking-wider">佐賀県武雄市</span>
                <h3 className="text-xl sm:text-2xl font-bold font-serif text-stone-900 leading-snug">
                  武雄温泉　大正浪漫の宿　京都屋
                </h3>
                <p className="text-xs sm:text-sm font-medium text-amber-800">
                  創業百十余年・大正ロマンの香るクラシック旅館！蓄音機やアンティーク家具が彩る空間と自家源泉美肌の湯
                </p>
              </div>

              <div className="border-t border-b border-stone-100 py-4 space-y-3">
                <h4 className="font-bold text-stone-900 text-sm sm:text-base font-serif">
                  武雄温泉 大正浪漫の宿 京都屋 —— クラシカルな気品と温もり。クラシックカーでの送迎と自家源泉の掛け流し
                </h4>
                <div className="grid gap-3 text-xs sm:text-sm text-stone-700">
                  
                  <div className="bg-stone-50 p-3.5 rounded-xl border border-stone-200/60">
                    <h5 className="font-bold text-stone-900 mb-1 flex items-center gap-1.5">
                      <span className="text-amber-600">✓</span> 大正浪漫のアンティーク家具や蓄音機が並ぶレトロモダンな館内
                    </h5>
                    <p className="text-stone-600 leading-relaxed">一歩足を踏み入れると大正時代のサロンのような優雅な空間。珈琲の香りが漂う喫茶去や、クラシックカーでの駅送迎など特別な演出が魅力です。</p>
                  </div>
                  <div className="bg-stone-50 p-3.5 rounded-xl border border-stone-200/60">
                    <h5 className="font-bold text-stone-900 mb-1 flex items-center gap-1.5">
                      <span className="text-amber-600">✓</span> 自家源泉から湧き出る武雄温泉掛け流しの大浴場と露天風呂
                    </h5>
                    <p className="text-stone-600 leading-relaxed">敷地内から湧く良質な弱アルカリ性温泉。とろりとした肌触りの名湯に浸かりながら、心身ともに解きほぐされる湯浴みを堪能できます。</p>
                  </div>
                  <div className="bg-stone-50 p-3.5 rounded-xl border border-stone-200/60">
                    <h5 className="font-bold text-stone-900 mb-1 flex items-center gap-1.5">
                      <span className="text-amber-600">✓</span> A5等級佐賀牛や若楠ポーク、有田鶏を味わう特選和食会席
                    </h5>
                    <p className="text-stone-600 leading-relaxed">佐賀の恵まれた大自然が育んだ極上牛。陶板焼きやしゃぶしゃぶなど、素材の旨味を最大限に引き出した料理を味わえます。</p>
                  </div>
                </div>
              </div>

              {/* レビュー抜粋 */}
              <div className="bg-amber-50/60 p-4 rounded-2xl border border-amber-100 text-xs sm:text-sm space-y-1.5">
                <span className="font-bold text-amber-900 flex items-center gap-1.5">
                  <span>💬</span> 実際の宿泊者からの評価・口コミ
                </span>
                <p className="text-stone-700 leading-relaxed">楽天トラベル評価4.39点、口コミ1200件超。「レトロなアンティークの雰囲気が最高で珈琲も美味しい」「お風呂のお湯がトロトロで接客も温かかった」と大人気です。</p>
              </div>

              {/* 宿基本情報 */}
              <div className="text-xs text-stone-500 grid sm:grid-cols-2 gap-2 bg-stone-50 p-4 rounded-xl">
                <div><span className="font-semibold text-stone-700">住所：</span>佐賀県 武雄市武雄町大字武雄7266-7</div>
                <div><span className="font-semibold text-stone-700">宿泊目安：</span>¥6,480〜 /人</div>
                <div><span className="font-semibold text-stone-700">楽天施設ID：</span>5552</div>
                <div><span className="font-semibold text-stone-700">予約区分：</span>楽天ふるさと納税トラベルクーポン対象</div>
              </div>

              <div className="pt-2">
                <a
                  href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FJBe8h%2F%3Ff_no%3D5552"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full text-center bg-gradient-to-r from-amber-700 to-amber-900 hover:from-amber-800 hover:to-stone-900 text-white font-bold py-3.5 px-6 rounded-xl shadow transition"
                >
                  【楽天トラベル】武雄温泉　大正浪漫の宿　京都屋 の宿泊プランとクーポン適用はこちら →
                </a>
              </div>
            </div>
          </article>

          {/* ホテル 2 */}
          <article className="bg-white rounded-3xl overflow-hidden shadow-sm border border-stone-200/80 transition hover:shadow-md">
            <div className="relative aspect-video sm:aspect-[16/9] w-full overflow-hidden bg-stone-100">
              <img
                src="https://img.travel.rakuten.co.jp/share/HOTEL/19713/19713.jpg"
                alt="武雄温泉　ホテル春慶屋"
                className="w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute top-4 left-4 bg-stone-900/80 backdrop-blur-sm text-white text-xs px-3 py-1.5 rounded-full font-semibold">
                第2選
              </div>
              <div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-sm text-stone-900 text-xs px-3 py-1.5 rounded-full font-bold shadow">
                ★ 4.43（口コミ 408件）
              </div>
            </div>

            <div className="p-6 sm:p-8 space-y-6">
              <div className="space-y-2">
                <span className="text-xs font-bold text-amber-700 uppercase tracking-wider">佐賀県武雄市</span>
                <h3 className="text-xl sm:text-2xl font-bold font-serif text-stone-900 leading-snug">
                  武雄温泉　ホテル春慶屋
                </h3>
                <p className="text-xs sm:text-sm font-medium text-amber-800">
                  創業六百余年の歴史を誇る老舗！武雄の街並みと御船山を一望する最上階展望露天風呂と佐賀牛会席
                </p>
              </div>

              <div className="border-t border-b border-stone-100 py-4 space-y-3">
                <h4 className="font-bold text-stone-900 text-sm sm:text-base font-serif">
                  武雄温泉 ホテル春慶屋（しゅんけいや） —— 展望露天風呂から望む絶景。掛け流しの名湯と本格会席料理の宿
                </h4>
                <div className="grid gap-3 text-xs sm:text-sm text-stone-700">
                  
                  <div className="bg-stone-50 p-3.5 rounded-xl border border-stone-200/60">
                    <h5 className="font-bold text-stone-900 mb-1 flex items-center gap-1.5">
                      <span className="text-amber-600">✓</span> 最上階から武雄の山並みと街並みを見晴らす展望露天風呂
                    </h5>
                    <p className="text-stone-600 leading-relaxed">開放感抜群の屋上展望露天風呂。澄み切った風を感じながら、掛け流しの美肌の湯に浸かり至福のリフレッシュを味わえます。</p>
                  </div>
                  <div className="bg-stone-50 p-3.5 rounded-xl border border-stone-200/60">
                    <h5 className="font-bold text-stone-900 mb-1 flex items-center gap-1.5">
                      <span className="text-amber-600">✓</span> 源泉掛け流し100％の贅沢な天然温泉
                    </h5>
                    <p className="text-stone-600 leading-relaxed">一切加水・循環なしの純生温泉。肌にしっとりと馴染む武雄ならではの極上のお湯を心ゆくまで満喫できます。</p>
                  </div>
                  <div className="bg-stone-50 p-3.5 rounded-xl border border-stone-200/60">
                    <h5 className="font-bold text-stone-900 mb-1 flex items-center gap-1.5">
                      <span className="text-amber-600">✓</span> 佐賀牛の陶板焼きや名物温泉湯豆腐を味わう季節の会席
                    </h5>
                    <p className="text-stone-600 leading-relaxed">とろけるような食感の佐賀牛や、温泉水で炊き上げる名物温泉湯豆腐。山海の幸をバランスよく盛り込んだ会席料理が好評です。</p>
                  </div>
                </div>
              </div>

              {/* レビュー抜粋 */}
              <div className="bg-amber-50/60 p-4 rounded-2xl border border-amber-100 text-xs sm:text-sm space-y-1.5">
                <span className="font-bold text-amber-900 flex items-center gap-1.5">
                  <span>💬</span> 実際の宿泊者からの評価・口コミ
                </span>
                <p className="text-stone-700 leading-relaxed">楽天トラベル評価4.42点、口コミ1100件超。「最上階のお風呂からの眺めが素晴らしくお湯も最高」「お料理の佐賀牛がとても美味しくスタッフも親切だった」と評判。</p>
              </div>

              {/* 宿基本情報 */}
              <div className="text-xs text-stone-500 grid sm:grid-cols-2 gap-2 bg-stone-50 p-4 rounded-xl">
                <div><span className="font-semibold text-stone-700">住所：</span>佐賀県 武雄市武雄町大字武雄7407</div>
                <div><span className="font-semibold text-stone-700">宿泊目安：</span>¥9,900〜 /人</div>
                <div><span className="font-semibold text-stone-700">楽天施設ID：</span>19713</div>
                <div><span className="font-semibold text-stone-700">予約区分：</span>楽天ふるさと納税トラベルクーポン対象</div>
              </div>

              <div className="pt-2">
                <a
                  href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FJBe8h%2F%3Ff_no%3D19713"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full text-center bg-gradient-to-r from-amber-700 to-amber-900 hover:from-amber-800 hover:to-stone-900 text-white font-bold py-3.5 px-6 rounded-xl shadow transition"
                >
                  【楽天トラベル】武雄温泉　ホテル春慶屋 の宿泊プランとクーポン適用はこちら →
                </a>
              </div>
            </div>
          </article>

          {/* ホテル 3 */}
          <article className="bg-white rounded-3xl overflow-hidden shadow-sm border border-stone-200/80 transition hover:shadow-md">
            <div className="relative aspect-video sm:aspect-[16/9] w-full overflow-hidden bg-stone-100">
              <img
                src="https://img.travel.rakuten.co.jp/share/HOTEL/68073/68073.jpg"
                alt="武雄温泉　なかます旅館"
                className="w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute top-4 left-4 bg-stone-900/80 backdrop-blur-sm text-white text-xs px-3 py-1.5 rounded-full font-semibold">
                第3選
              </div>
              <div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-sm text-stone-900 text-xs px-3 py-1.5 rounded-full font-bold shadow">
                ★ 4.03（口コミ 217件）
              </div>
            </div>

            <div className="p-6 sm:p-8 space-y-6">
              <div className="space-y-2">
                <span className="text-xs font-bold text-amber-700 uppercase tracking-wider">佐賀県武雄市</span>
                <h3 className="text-xl sm:text-2xl font-bold font-serif text-stone-900 leading-snug">
                  武雄温泉　なかます旅館
                </h3>
                <p className="text-xs sm:text-sm font-medium text-amber-800">
                  武雄温泉楼門まで徒歩わずか1分の好立地！アットホームな老舗旅館で味わう名湯と家庭的な郷土料理
                </p>
              </div>

              <div className="border-t border-b border-stone-100 py-4 space-y-3">
                <h4 className="font-bold text-stone-900 text-sm sm:text-base font-serif">
                  武雄温泉 なかます旅館 —— 楼門のすぐそばに佇む素朴なやすらぎ。元湯への湯巡りと心のこもったもてなし
                </h4>
                <div className="grid gap-3 text-xs sm:text-sm text-stone-700">
                  
                  <div className="bg-stone-50 p-3.5 rounded-xl border border-stone-200/60">
                    <h5 className="font-bold text-stone-900 mb-1 flex items-center gap-1.5">
                      <span className="text-amber-600">✓</span> 国指定重要文化財「武雄温泉楼門・元湯」まで徒歩1分の絶好アクセス
                    </h5>
                    <p className="text-stone-600 leading-relaxed">歴史ある楼門や元湯、立ち寄り湯へいつでも気軽に出かけられるロケーション。朝風呂や夜のライトアップ散策にも最適です。</p>
                  </div>
                  <div className="bg-stone-50 p-3.5 rounded-xl border border-stone-200/60">
                    <h5 className="font-bold text-stone-900 mb-1 flex items-center gap-1.5">
                      <span className="text-amber-600">✓</span> 武雄の良質な天然温泉を引く落ち着いた浴室
                    </h5>
                    <p className="text-stone-600 leading-relaxed">滑らかな肌触りの弱アルカリ性単純温泉。混雑を気にせず、静かにゆったりとお湯の良さを実感できます。</p>
                  </div>
                  <div className="bg-stone-50 p-3.5 rounded-xl border border-stone-200/60">
                    <h5 className="font-bold text-stone-900 mb-1 flex items-center gap-1.5">
                      <span className="text-amber-600">✓</span> 地元佐賀の食材を活かした温かい手作り和食膳
                    </h5>
                    <p className="text-stone-600 leading-relaxed">旬の魚や地元野菜をふんだんに取り入れた家庭的な料理。気取らない温かいおもてなしが旅の疲れを優しく癒やしてくれます。</p>
                  </div>
                </div>
              </div>

              {/* レビュー抜粋 */}
              <div className="bg-amber-50/60 p-4 rounded-2xl border border-amber-100 text-xs sm:text-sm space-y-1.5">
                <span className="font-bold text-amber-900 flex items-center gap-1.5">
                  <span>💬</span> 実際の宿泊者からの評価・口コミ
                </span>
                <p className="text-stone-700 leading-relaxed">楽天トラベル評価4.33点。「楼門が目の前で観光に最高のロケーション」「女将さんの接客が温かく、お風呂もお湯が良くてとても落ち着けた」と好評です。</p>
              </div>

              {/* 宿基本情報 */}
              <div className="text-xs text-stone-500 grid sm:grid-cols-2 gap-2 bg-stone-50 p-4 rounded-xl">
                <div><span className="font-semibold text-stone-700">住所：</span>佐賀県 武雄市武雄町武雄7377</div>
                <div><span className="font-semibold text-stone-700">宿泊目安：</span>¥10,890〜 /人</div>
                <div><span className="font-semibold text-stone-700">楽天施設ID：</span>68073</div>
                <div><span className="font-semibold text-stone-700">予約区分：</span>楽天ふるさと納税トラベルクーポン対象</div>
              </div>

              <div className="pt-2">
                <a
                  href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FJBe8h%2F%3Ff_no%3D68073"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full text-center bg-gradient-to-r from-amber-700 to-amber-900 hover:from-amber-800 hover:to-stone-900 text-white font-bold py-3.5 px-6 rounded-xl shadow transition"
                >
                  【楽天トラベル】武雄温泉　なかます旅館 の宿泊プランとクーポン適用はこちら →
                </a>
              </div>
            </div>
          </article>
        </section>

        {/* エリア観光・見どころ */}
        <section className="space-y-4">
          <h2 className="text-xl sm:text-2xl font-bold font-serif text-stone-900 flex items-center gap-2">
            <span>🗺️</span> 武雄温泉・御船山楽園＆武雄市図書館観光ガイド
          </h2>
          <div className="grid gap-4">

            <div className="bg-white p-5 rounded-2xl border border-stone-200/80 shadow-sm space-y-2">
              <h4 className="font-bold text-stone-900 text-sm sm:text-base font-serif flex items-center gap-2">
                <span className="w-6 h-6 rounded-full bg-amber-100 text-amber-900 flex items-center justify-center text-xs font-sans font-bold">1</span>
                御船山楽園（みふねやまらくえん）の四季の花々とチームラボ展示
              </h4>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed pl-8">
                武雄鍋島家が造営した十五万坪の大庭園。春のツツジや秋の紅葉ライトアップ、そしてチームラボによる廃墟や庭園を使った大規模アート展が世界中から注目されています。
              </p>
            </div>
            <div className="bg-white p-5 rounded-2xl border border-stone-200/80 shadow-sm space-y-2">
              <h4 className="font-bold text-stone-900 text-sm sm:text-base font-serif flex items-center gap-2">
                <span className="w-6 h-6 rounded-full bg-amber-100 text-amber-900 flex items-center justify-center text-xs font-sans font-bold">2</span>
                武雄温泉楼門と新館の見学
              </h4>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed pl-8">
                辰野金吾設計の国の重要文化財。楼門の天井には干支の四つの彫刻が施されており、東京駅ドーム天井の八つの干支と合わせると十二支が完成するという歴史ミステリーも魅力です。
              </p>
            </div>
            <div className="bg-white p-5 rounded-2xl border border-stone-200/80 shadow-sm space-y-2">
              <h4 className="font-bold text-stone-900 text-sm sm:text-base font-serif flex items-center gap-2">
                <span className="w-6 h-6 rounded-full bg-amber-100 text-amber-900 flex items-center justify-center text-xs font-sans font-bold">3</span>
                武雄市図書館でのモダンな読書＆カフェ体験
              </h4>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed pl-8">
                蔦屋書店とスターバックスが併設された話題の公立図書館。吹き抜けの洗練された空間で珈琲を片手に本を探す心地よい時間を過ごせます。
              </p>
            </div>
          </div>
        </section>

        {/* ふるさと納税活用ステップ */}
        <section className="bg-gradient-to-br from-amber-900 via-stone-900 to-stone-950 text-white rounded-3xl p-6 sm:p-8 shadow-xl space-y-6">
          <div className="space-y-2">
            <span className="text-xs uppercase tracking-widest text-amber-300 font-semibold">How to Use Coupon</span>
            <h2 className="text-xl sm:text-2xl font-bold font-serif text-amber-50">
              佐賀県武雄市ふるさと納税×楽天トラベルクーポン活用手順
            </h2>
            <p className="text-stone-300 text-xs sm:text-sm">
              初めての方でも迷わず利用できる3ステップ。予約済みのプランにも後から適用可能です。
            </p>
          </div>

          <div className="grid sm:grid-cols-3 gap-4 text-xs sm:text-sm">

            <div className="bg-stone-900/60 p-4 rounded-2xl border border-amber-500/20 space-y-2">
              <span className="inline-block bg-amber-500/20 text-amber-300 font-mono text-xs px-2.5 py-0.5 rounded font-semibold">
                Step 1: 楽天ふるさと納税で「佐賀県武雄市」クーポンを獲得
              </span>
              <p className="text-stone-300 text-xs sm:text-sm leading-relaxed">
                楽天ふるさと納税で武雄市を選び、トラベルクーポンを返礼品として申し込みます。寄付額の30%相当のクーポンがアカウントに付与されます。
              </p>
            </div>
            <div className="bg-stone-900/60 p-4 rounded-2xl border border-amber-500/20 space-y-2">
              <span className="inline-block bg-amber-500/20 text-amber-300 font-mono text-xs px-2.5 py-0.5 rounded font-semibold">
                Step 2: 西九州新幹線やJR特急リレーかもめで博多から約1時間
              </span>
              <p className="text-stone-300 text-xs sm:text-sm leading-relaxed">
                博多駅から特急と西九州新幹線を乗り継ぎ約1時間と抜群のアクセス。3年間の有効期間内で、陶器市シーズンや紅葉ライトアップに合わせて旅行を計画できます。
              </p>
            </div>
            <div className="bg-stone-900/60 p-4 rounded-2xl border border-amber-500/20 space-y-2">
              <span className="inline-block bg-amber-500/20 text-amber-300 font-mono text-xs px-2.5 py-0.5 rounded font-semibold">
                Step 3: 楽天トラベル予約画面でクーポン割引を適用して予約完了
              </span>
              <p className="text-stone-300 text-xs sm:text-sm leading-relaxed">
                京都屋、ホテル春慶屋、なかます旅館などの対象宿泊プランを選び、決済時にクーポンを選択すれば宿泊代金から大幅な割引が適用されます。
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
