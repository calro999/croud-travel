import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: '【万座温泉×ふるさと納税】日本一濃厚な白濁硫黄泉＆標高1,800m雲上の星空露天！名湯宿特集｜日進舘・万座プリンス・万座高原ホテル',
  description: '日本一の硫黄含有量を誇る標高1,800mの雲上温泉・群馬県万座温泉を楽天ふるさと納税でお得に満喫！九つの天然温泉と健康湯治の聖地「日進舘」、絶景露天風呂「こまくさの湯」を誇る「万座プリンスホテル」、名物石庭露天風呂で四色の源泉を巡る「万座高原ホテル」を徹底比較。嬬恋村トラベルクーポン活用術を網羅。',
  keywords: '万座温泉 ふるさと納税,万座温泉 日進舘 クーポン,万座プリンスホテル ふるさと納税,万座高原ホテル 宿泊,嬬恋村 ふるさと納税 旅行',
  alternates: {
    canonical: 'https://croud-travel.pages.dev/furusato-tax-manza-onsen-cloud-sulfur-stay',
  },
  openGraph: {
    title: '【万座温泉×ふるさと納税】日本一濃厚な白濁硫黄泉＆標高1,800m雲上の星空露天！名湯宿特集｜日進舘・万座プリンス・万座高原ホテル',
    description: '日本一の硫黄含有量を誇る標高1,800mの雲上温泉・群馬県万座温泉を楽天ふるさと納税でお得に満喫！九つの天然温泉と健康湯治の聖地「日進舘」、絶景露天風呂「こまくさの湯」を誇る「万座プリンスホテル」、名物石庭露天風呂で四色の源泉を巡る「万座高原ホテル」を徹底比較。嬬恋村トラベルクーポン活用術を網羅。',
    url: 'https://croud-travel.pages.dev/furusato-tax-manza-onsen-cloud-sulfur-stay',
    siteName: 'トラベルガイド - クラウドトラベル',
    locale: 'ja_JP',
    type: 'article',
  },
};

export default function FurusatoArticlePage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: '【万座温泉×ふるさと納税】日本一濃厚な白濁硫黄泉＆標高1,800m雲上の星空露天！名湯宿特集｜日進舘・万座プリンス・万座高原ホテル',
    description: '日本一の硫黄含有量を誇る標高1,800mの雲上温泉・群馬県万座温泉を楽天ふるさと納税でお得に満喫！九つの天然温泉と健康湯治の聖地「日進舘」、絶景露天風呂「こまくさの湯」を誇る「万座プリンスホテル」、名物石庭露天風呂で四色の源泉を巡る「万座高原ホテル」を徹底比較。嬬恋村トラベルクーポン活用術を網羅。',
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
    mainEntityOfPage: 'https://croud-travel.pages.dev/furusato-tax-manza-onsen-cloud-sulfur-stay',
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
        <span className="text-stone-700 font-medium truncate">【万座温泉×ふるさと納税】日本一濃厚な白濁硫黄泉＆標高1,800m雲上の星空露天！名湯宿特集｜日進舘・万座プリンス・万座高原ホテル</span>
      </nav>

      {/* ヒーローセクション */}
      <header className="max-w-4xl mx-auto px-4 sm:px-6 py-8 sm:py-12 space-y-4">
        <div className="inline-flex items-center gap-2 bg-amber-100/80 text-amber-900 text-xs font-semibold px-3 py-1 rounded-full border border-amber-200">
          <span>♨️</span>
          <span>群馬県嬬恋村 ふるさと納税・名湯宿特集</span>
        </div>
        <h1 className="text-2xl sm:text-4xl font-extrabold font-serif text-stone-900 tracking-tight leading-snug">
          【万座温泉×ふるさと納税】日本一濃厚な白濁硫黄泉＆標高1,800m雲上の星空露天！名湯宿特集｜日進舘・万座プリンス・万座高原ホテル
        </h1>
        <p className="text-stone-600 text-sm sm:text-base leading-relaxed">
          日本一の硫黄含有量を誇る標高1,800mの雲上温泉・群馬県万座温泉を楽天ふるさと納税でお得に満喫！九つの天然温泉と健康湯治の聖地「日進舘」、絶景露天風呂「こまくさの湯」を誇る「万座プリンスホテル」、名物石庭露天風呂で四色の源泉を巡る「万座高原ホテル」を徹底比較。嬬恋村トラベルクーポン活用術を網羅。
        </p>
      </header>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 space-y-12">
        {/* リード文セクション */}
        <section className="bg-white rounded-3xl p-6 sm:p-8 shadow-sm border border-stone-200/80 space-y-4">
          <h2 className="text-lg sm:text-xl font-bold font-serif text-amber-900 border-b border-amber-100 pb-3">
            硫黄の香りと乳白色の霊泉——標高千八百メートルの雲上に湧く日本一の濃厚硫黄泉で体験する心身再生の湯治ステイ
          </h2>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed">
            群馬県吾妻郡嬬恋村、上信越高原国立公園内・標高1,800メートルの高山地帯に位置する万座（まんざ）温泉。「星に一番近い温泉」「雲上の名湯」と称され、日本で最も標高の高い通年車で行ける温泉郷の一つです。万座温泉の最大の誇りは、日本一を誇る圧倒的な硫黄含有量。乳白色や青白く濁る強酸性の含硫黄ナトリウム塩化物硫酸塩温泉は、殺菌力と血行促進作用が極めて高く、古くから難病をも治す「万病に効く湯治場」として全国の湯治客や登山愛好家に愛されてきました。
          </p>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed">
            万座の魅力は、手を伸ばせば届きそうな満天の星空を仰ぐ露天風呂体験。夏の冷涼な避暑、秋の全山を黄金色に染めるカラマツの紅葉、冬のパウダースノーと白銀の雪見風呂など、季節ごとの大自然のドラマは圧巻です。夕食には名産の嬬恋キャベツや上州牛、上州麦豚、高原野菜を使った手作り料理に舌鼓。群馬県嬬恋村へのふるさと納税を利用すれば、30%相当の楽天トラベルクーポンにより名門温泉宿へお得に宿泊でき、本物の名湯のパワーを全身で実感できます。
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
                  <td className="p-3 font-bold text-amber-900">万座温泉　日進舘</td>
                  <td className="p-3 font-bold">★ 4.23</td>
                  <td className="p-3 text-stone-600">創業以来の名湯湯治宿！日本一の濃厚白濁硫黄泉を九つの天然湯船で巡る「健康長寿の聖地」</td>
                  <td className="p-3 text-stone-600">最高峰の絶景・憧れのステイ</td>
                </tr>
                <tr>
                  <td className="p-3 font-bold text-amber-900">万座温泉　万座プリンスホテル</td>
                  <td className="p-3 font-bold">★ 3.79</td>
                  <td className="p-3 text-stone-600">標高千八百メートルの山並みを見晴らす展望露天風呂「こまくさの湯」！雲上の開放感と洗練されたホテルステイ</td>
                  <td className="p-3 text-stone-600">充実の施設・アクティブ寛ぎ</td>
                </tr>
                <tr>
                  <td className="p-3 font-bold text-amber-900">万座温泉　万座高原ホテル</td>
                  <td className="p-3 font-bold">★ 4.08</td>
                  <td className="p-3 text-stone-600">名物「石庭露天風呂」に八つの湯船！黄色・透明・白濁など四色の異なる源泉を巡る温泉天国</td>
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
                src="https://img.travel.rakuten.co.jp/share/HOTEL/3033/3033.jpg"
                alt="万座温泉　日進舘"
                className="w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute top-4 left-4 bg-stone-900/80 backdrop-blur-sm text-white text-xs px-3 py-1.5 rounded-full font-semibold">
                第1選
              </div>
              <div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-sm text-stone-900 text-xs px-3 py-1.5 rounded-full font-bold shadow">
                ★ 4.23（口コミ 2481件）
              </div>
            </div>

            <div className="p-6 sm:p-8 space-y-6">
              <div className="space-y-2">
                <span className="text-xs font-bold text-amber-700 uppercase tracking-wider">群馬県嬬恋村</span>
                <h3 className="text-xl sm:text-2xl font-bold font-serif text-stone-900 leading-snug">
                  万座温泉　日進舘
                </h3>
                <p className="text-xs sm:text-sm font-medium text-amber-800">
                  創業以来の名湯湯治宿！日本一の濃厚白濁硫黄泉を九つの天然湯船で巡る「健康長寿の聖地」
                </p>
              </div>

              <div className="border-t border-b border-stone-100 py-4 space-y-3">
                <h4 className="font-bold text-stone-900 text-sm sm:text-base font-serif">
                  万座温泉 日進舘（にっしんかん） —— 標高千八百メートルの奇跡。総天然木造り大浴場「苦湯」と名物露天「極楽湯」
                </h4>
                <div className="grid gap-3 text-xs sm:text-sm text-stone-700">
                  
                  <div className="bg-stone-50 p-3.5 rounded-xl border border-stone-200/60">
                    <h5 className="font-bold text-stone-900 mb-1 flex items-center gap-1.5">
                      <span className="text-amber-600">✓</span> 総天然木造りの大浴場「長寿の湯」と絶景露天風呂「極楽湯」
                    </h5>
                    <p className="text-stone-600 leading-relaxed">杉や檜が香る大浴場に六つの湯船、そして山並みを一望する展望露天風呂「極楽湯」。乳白色の濃厚な硫黄泉に浸かり、本格的な湯治体験が叶います。</p>
                  </div>
                  <div className="bg-stone-50 p-3.5 rounded-xl border border-stone-200/60">
                    <h5 className="font-bold text-stone-900 mb-1 flex items-center gap-1.5">
                      <span className="text-amber-600">✓</span> 毎晩開催される「フロアショー」と健康を気遣うおもてなし
                    </h5>
                    <p className="text-stone-600 leading-relaxed">歌や伝統芸能が楽しめる宿泊者向けナイトショー。長逗留の湯治客にも優しい温かいアットホームな接客が評判です。</p>
                  </div>
                  <div className="bg-stone-50 p-3.5 rounded-xl border border-stone-200/60">
                    <h5 className="font-bold text-stone-900 mb-1 flex items-center gap-1.5">
                      <span className="text-amber-600">✓</span> 健康と安全にこだわった四十種類以上の和洋バイキング
                    </h5>
                    <p className="text-stone-600 leading-relaxed">地元の契約農家から届く新鮮野菜や名物キャベツ、発酵食品を取り入れた身体に優しいバイキング。心身ともに健康になれる料理です。</p>
                  </div>
                </div>
              </div>

              {/* レビュー抜粋 */}
              <div className="bg-amber-50/60 p-4 rounded-2xl border border-amber-100 text-xs sm:text-sm space-y-1.5">
                <span className="font-bold text-amber-900 flex items-center gap-1.5">
                  <span>💬</span> 実際の宿泊者からの評価・口コミ
                </span>
                <p className="text-stone-700 leading-relaxed">楽天トラベル評価4.33点、口コミ3400件超。「極楽湯から見た星空と白濁したお湯が人生最高」「お湯の薬効がすごくて体の痛みが消えた」と圧倒的なリピート率。</p>
              </div>

              {/* 宿基本情報 */}
              <div className="text-xs text-stone-500 grid sm:grid-cols-2 gap-2 bg-stone-50 p-4 rounded-xl">
                <div><span className="font-semibold text-stone-700">住所：</span>群馬県 吾妻郡嬬恋村大字干俣万座温泉２４０１</div>
                <div><span className="font-semibold text-stone-700">宿泊目安：</span>¥6,590〜 /人</div>
                <div><span className="font-semibold text-stone-700">楽天施設ID：</span>3033</div>
                <div><span className="font-semibold text-stone-700">予約区分：</span>楽天ふるさと納税トラベルクーポン対象</div>
              </div>

              <div className="pt-2">
                <a
                  href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FJBe8h%2F%3Ff_no%3D3033"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full text-center bg-gradient-to-r from-amber-700 to-amber-900 hover:from-amber-800 hover:to-stone-900 text-white font-bold py-3.5 px-6 rounded-xl shadow transition"
                >
                  【楽天トラベル】万座温泉　日進舘 の宿泊プランとクーポン適用はこちら →
                </a>
              </div>
            </div>
          </article>

          {/* ホテル 2 */}
          <article className="bg-white rounded-3xl overflow-hidden shadow-sm border border-stone-200/80 transition hover:shadow-md">
            <div className="relative aspect-video sm:aspect-[16/9] w-full overflow-hidden bg-stone-100">
              <img
                src="https://img.travel.rakuten.co.jp/share/HOTEL/30739/30739.jpg"
                alt="万座温泉　万座プリンスホテル"
                className="w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute top-4 left-4 bg-stone-900/80 backdrop-blur-sm text-white text-xs px-3 py-1.5 rounded-full font-semibold">
                第2選
              </div>
              <div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-sm text-stone-900 text-xs px-3 py-1.5 rounded-full font-bold shadow">
                ★ 3.79（口コミ 2131件）
              </div>
            </div>

            <div className="p-6 sm:p-8 space-y-6">
              <div className="space-y-2">
                <span className="text-xs font-bold text-amber-700 uppercase tracking-wider">群馬県嬬恋村</span>
                <h3 className="text-xl sm:text-2xl font-bold font-serif text-stone-900 leading-snug">
                  万座温泉　万座プリンスホテル
                </h3>
                <p className="text-xs sm:text-sm font-medium text-amber-800">
                  標高千八百メートルの山並みを見晴らす展望露天風呂「こまくさの湯」！雲上の開放感と洗練されたホテルステイ
                </p>
              </div>

              <div className="border-t border-b border-stone-100 py-4 space-y-3">
                <h4 className="font-bold text-stone-900 text-sm sm:text-base font-serif">
                  万座温泉 万座プリンスホテル —— 空と山に抱かれるリゾート。絶景パノラマ露天風呂と本格フランス料理・和洋ビュッフェ
                </h4>
                <div className="grid gap-3 text-xs sm:text-sm text-stone-700">
                  
                  <div className="bg-stone-50 p-3.5 rounded-xl border border-stone-200/60">
                    <h5 className="font-bold text-stone-900 mb-1 flex items-center gap-1.5">
                      <span className="text-amber-600">✓</span> 雄大な山々を一望する混浴・女性専用の絶景露天風呂「こまくさの湯」
                    </h5>
                    <p className="text-stone-600 leading-relaxed">標高1,800mの稜線を見渡すパノラマ露天風呂。白濁した名湯に浸かりながら、朝の雲海や夕焼け、満天の星空を眺める非日常の湯浴みが人気です。</p>
                  </div>
                  <div className="bg-stone-50 p-3.5 rounded-xl border border-stone-200/60">
                    <h5 className="font-bold text-stone-900 mb-1 flex items-center gap-1.5">
                      <span className="text-amber-600">✓</span> プリンスホテルならではの清潔で洗練された快適客室
                    </h5>
                    <p className="text-stone-600 leading-relaxed">広々とした客室からは万座の自然林や山並みを一望。高原リゾートらしい落ち着いた空間で快適に過ごせます。</p>
                  </div>
                  <div className="bg-stone-50 p-3.5 rounded-xl border border-stone-200/60">
                    <h5 className="font-bold text-stone-900 mb-1 flex items-center gap-1.5">
                      <span className="text-amber-600">✓</span> 上州の恵みをふんだんに取り入れたディナービュッフェまたは洋食コース
                    </h5>
                    <p className="text-stone-600 leading-relaxed">オープンキッチンで焼き上げるローストビーフや地元食材を使った料理。ワインとともに優雅なディナータイムを楽しめます。</p>
                  </div>
                </div>
              </div>

              {/* レビュー抜粋 */}
              <div className="bg-amber-50/60 p-4 rounded-2xl border border-amber-100 text-xs sm:text-sm space-y-1.5">
                <span className="font-bold text-amber-900 flex items-center gap-1.5">
                  <span>💬</span> 実際の宿泊者からの評価・口コミ
                </span>
                <p className="text-stone-700 leading-relaxed">楽天トラベル評価4.24点、口コミ3100件超。「こまくさの湯からの眺めが絶景で雲の上にいるよう」「お湯が真っ白で硫黄の香りが心地よく、また来たい」と好評。</p>
              </div>

              {/* 宿基本情報 */}
              <div className="text-xs text-stone-500 grid sm:grid-cols-2 gap-2 bg-stone-50 p-4 rounded-xl">
                <div><span className="font-semibold text-stone-700">住所：</span>群馬県 吾妻郡嬬恋村万座温泉</div>
                <div><span className="font-semibold text-stone-700">宿泊目安：</span>¥3,893〜 /人</div>
                <div><span className="font-semibold text-stone-700">楽天施設ID：</span>30739</div>
                <div><span className="font-semibold text-stone-700">予約区分：</span>楽天ふるさと納税トラベルクーポン対象</div>
              </div>

              <div className="pt-2">
                <a
                  href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FJBe8h%2F%3Ff_no%3D30739"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full text-center bg-gradient-to-r from-amber-700 to-amber-900 hover:from-amber-800 hover:to-stone-900 text-white font-bold py-3.5 px-6 rounded-xl shadow transition"
                >
                  【楽天トラベル】万座温泉　万座プリンスホテル の宿泊プランとクーポン適用はこちら →
                </a>
              </div>
            </div>
          </article>

          {/* ホテル 3 */}
          <article className="bg-white rounded-3xl overflow-hidden shadow-sm border border-stone-200/80 transition hover:shadow-md">
            <div className="relative aspect-video sm:aspect-[16/9] w-full overflow-hidden bg-stone-100">
              <img
                src="https://img.travel.rakuten.co.jp/share/HOTEL/67057/67057.jpg"
                alt="万座温泉　万座高原ホテル"
                className="w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute top-4 left-4 bg-stone-900/80 backdrop-blur-sm text-white text-xs px-3 py-1.5 rounded-full font-semibold">
                第3選
              </div>
              <div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-sm text-stone-900 text-xs px-3 py-1.5 rounded-full font-bold shadow">
                ★ 4.08（口コミ 2017件）
              </div>
            </div>

            <div className="p-6 sm:p-8 space-y-6">
              <div className="space-y-2">
                <span className="text-xs font-bold text-amber-700 uppercase tracking-wider">群馬県嬬恋村</span>
                <h3 className="text-xl sm:text-2xl font-bold font-serif text-stone-900 leading-snug">
                  万座温泉　万座高原ホテル
                </h3>
                <p className="text-xs sm:text-sm font-medium text-amber-800">
                  名物「石庭露天風呂」に八つの湯船！黄色・透明・白濁など四色の異なる源泉を巡る温泉天国
                </p>
              </div>

              <div className="border-t border-b border-stone-100 py-4 space-y-3">
                <h4 className="font-bold text-stone-900 text-sm sm:text-base font-serif">
                  万座温泉 万座高原ホテル —— 四色の源泉を入り比べ。渓流沿いの巨大露天風呂とアットホームな高原滞在
                </h4>
                <div className="grid gap-3 text-xs sm:text-sm text-stone-700">
                  
                  <div className="bg-stone-50 p-3.5 rounded-xl border border-stone-200/60">
                    <h5 className="font-bold text-stone-900 mb-1 flex items-center gap-1.5">
                      <span className="text-amber-600">✓</span> 万座川の渓流沿いに広がる名物「石庭露天風呂」の八つの湯船
                    </h5>
                    <p className="text-stone-600 leading-relaxed">白濁の湯、エメラルドグリーンの湯、黄色がかった湯など、四種類の自家源泉を引き込んだ巨大露天風呂。混浴と女性専用エリアがあり、家族やカップルで湯巡りができます。</p>
                  </div>
                  <div className="bg-stone-50 p-3.5 rounded-xl border border-stone-200/60">
                    <h5 className="font-bold text-stone-900 mb-1 flex items-center gap-1.5">
                      <span className="text-amber-600">✓</span> 万座プリンスホテルの大浴場も利用できる嬉しい無料湯巡り特典
                    </h5>
                    <p className="text-stone-600 leading-relaxed">宿泊者は姉妹館「万座プリンスホテル」の展望露天風呂も無料で利用可能。二つのホテルで万座の湯を心ゆくまで堪能できます。</p>
                  </div>
                  <div className="bg-stone-50 p-3.5 rounded-xl border border-stone-200/60">
                    <h5 className="font-bold text-stone-900 mb-1 flex items-center gap-1.5">
                      <span className="text-amber-600">✓</span> 嬬恋キャベツや上州豚を味わうカジュアルなディナーバイキング
                    </h5>
                    <p className="text-stone-600 leading-relaxed">地元の旬素材をふんだんに使った手作り料理が並ぶバイキング。気兼ねなく美味しい食事を満喫できます。</p>
                  </div>
                </div>
              </div>

              {/* レビュー抜粋 */}
              <div className="bg-amber-50/60 p-4 rounded-2xl border border-amber-100 text-xs sm:text-sm space-y-1.5">
                <span className="font-bold text-amber-900 flex items-center gap-1.5">
                  <span>💬</span> 実際の宿泊者からの評価・口コミ
                </span>
                <p className="text-stone-700 leading-relaxed">楽天トラベル評価4.31点、口コミ2700件超。「石庭露天風呂の種類の多さと広さに大興奮」「色とりどりのお湯に入れてプリンスホテルのお風呂も行けて最高」と高評価。</p>
              </div>

              {/* 宿基本情報 */}
              <div className="text-xs text-stone-500 grid sm:grid-cols-2 gap-2 bg-stone-50 p-4 rounded-xl">
                <div><span className="font-semibold text-stone-700">住所：</span>群馬県 吾妻郡嬬恋村万座温泉</div>
                <div><span className="font-semibold text-stone-700">宿泊目安：</span>¥2,793〜 /人</div>
                <div><span className="font-semibold text-stone-700">楽天施設ID：</span>67057</div>
                <div><span className="font-semibold text-stone-700">予約区分：</span>楽天ふるさと納税トラベルクーポン対象</div>
              </div>

              <div className="pt-2">
                <a
                  href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FJBe8h%2F%3Ff_no%3D67057"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full text-center bg-gradient-to-r from-amber-700 to-amber-900 hover:from-amber-800 hover:to-stone-900 text-white font-bold py-3.5 px-6 rounded-xl shadow transition"
                >
                  【楽天トラベル】万座温泉　万座高原ホテル の宿泊プランとクーポン適用はこちら →
                </a>
              </div>
            </div>
          </article>
        </section>

        {/* エリア観光・見どころ */}
        <section className="space-y-4">
          <h2 className="text-xl sm:text-2xl font-bold font-serif text-stone-900 flex items-center gap-2">
            <span>🗺️</span> 万座温泉・志賀草津高原ルート＆嬬恋パノラマライン観光ガイド
          </h2>
          <div className="grid gap-4">

            <div className="bg-white p-5 rounded-2xl border border-stone-200/80 shadow-sm space-y-2">
              <h4 className="font-bold text-stone-900 text-sm sm:text-base font-serif flex items-center gap-2">
                <span className="w-6 h-6 rounded-full bg-amber-100 text-amber-900 flex items-center justify-center text-xs font-sans font-bold">1</span>
                志賀草津高原ルート（国道292号日本最高地点）ドライブ
              </h4>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed pl-8">
                標高2,172メートルの国道最高地点を通る絶景山岳ドライブウェイ。白根山や北アルプスの大パノラマを見下ろしながら走る爽快なルートです。
              </p>
            </div>
            <div className="bg-white p-5 rounded-2xl border border-stone-200/80 shadow-sm space-y-2">
              <h4 className="font-bold text-stone-900 text-sm sm:text-base font-serif flex items-center gap-2">
                <span className="w-6 h-6 rounded-full bg-amber-100 text-amber-900 flex items-center justify-center text-xs font-sans font-bold">2</span>
                万座空吹（からぶき）の火山性ガス噴出口
              </h4>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed pl-8">
                昔の火口跡から今なお白い水蒸気と火山性ガスが吹き出す迫力のスポット。万座プリンスホテルや温泉街の遊歩道から間近に観察できます。
              </p>
            </div>
            <div className="bg-white p-5 rounded-2xl border border-stone-200/80 shadow-sm space-y-2">
              <h4 className="font-bold text-stone-900 text-sm sm:text-base font-serif flex items-center gap-2">
                <span className="w-6 h-6 rounded-full bg-amber-100 text-amber-900 flex items-center justify-center text-xs font-sans font-bold">3</span>
                愛妻の丘（嬬恋パノラマライン）と浅間山絶景
              </h4>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed pl-8">
                見渡す限りの広大なキャベツ畑の中に佇む展望台。浅間山の雄姿を一望でき、「妻に愛を叫ぶ」名所としてフォトジェニックな人気を誇ります。
              </p>
            </div>
          </div>
        </section>

        {/* ふるさと納税活用ステップ */}
        <section className="bg-gradient-to-br from-amber-900 via-stone-900 to-stone-950 text-white rounded-3xl p-6 sm:p-8 shadow-xl space-y-6">
          <div className="space-y-2">
            <span className="text-xs uppercase tracking-widest text-amber-300 font-semibold">How to Use Coupon</span>
            <h2 className="text-xl sm:text-2xl font-bold font-serif text-amber-50">
              群馬県嬬恋村ふるさと納税×楽天トラベルクーポン活用手順
            </h2>
            <p className="text-stone-300 text-xs sm:text-sm">
              初めての方でも迷わず利用できる3ステップ。予約済みのプランにも後から適用可能です。
            </p>
          </div>

          <div className="grid sm:grid-cols-3 gap-4 text-xs sm:text-sm">

            <div className="bg-stone-900/60 p-4 rounded-2xl border border-amber-500/20 space-y-2">
              <span className="inline-block bg-amber-500/20 text-amber-300 font-mono text-xs px-2.5 py-0.5 rounded font-semibold">
                Step 1: 楽天ふるさと納税で「群馬県嬬恋村」クーポンを獲得
              </span>
              <p className="text-stone-300 text-xs sm:text-sm leading-relaxed">
                楽天ふるさと納税で嬬恋村を選び、トラベルクーポンを返礼品として申し込みます。寄付額の30%相当のクーポンがアカウントに付与されます。
              </p>
            </div>
            <div className="bg-stone-900/60 p-4 rounded-2xl border border-amber-500/20 space-y-2">
              <span className="inline-block bg-amber-500/20 text-amber-300 font-mono text-xs px-2.5 py-0.5 rounded font-semibold">
                Step 2: 北陸新幹線軽井沢駅またはJR吾妻線万座・鹿沢口駅からバスでアクセス
              </span>
              <p className="text-stone-300 text-xs sm:text-sm leading-relaxed">
                軽井沢駅から西武観光バスで約1時間40分。3年間の有効期間内で、夏の爽涼な避暑や秋の紅葉、冬のスキーシーズンに合わせて計画できます。
              </p>
            </div>
            <div className="bg-stone-900/60 p-4 rounded-2xl border border-amber-500/20 space-y-2">
              <span className="inline-block bg-amber-500/20 text-amber-300 font-mono text-xs px-2.5 py-0.5 rounded font-semibold">
                Step 3: 楽天トラベル予約画面でクーポン割引を適用して予約完了
              </span>
              <p className="text-stone-300 text-xs sm:text-sm leading-relaxed">
                日進舘、万座プリンスホテル、万座高原ホテルなどの宿泊プランを選び、決済時にクーポンを選択すれば宿泊代金から大幅な割引が適用されます。
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
