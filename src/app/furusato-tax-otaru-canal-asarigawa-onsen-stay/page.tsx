import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: '【小樽・朝里川温泉×ふるさと納税】小樽運河の情緒＆北の迎賓館！鰊御殿と寿司の街特集｜おたるふる川・宏楽園・銀鱗荘',
  description: 'ガス灯揺れる小樽運河と新鮮な海の幸、歴史的建造物が薫る港町・北海道小樽市を楽天ふるさと納税でお得に贅沢旅！運河の目の前に佇む明治商家風情「運河の宿 おたる ふる川」、広大な日本庭園と露天風呂付き客室の名宿「おたる 宏楽園」、平磯岬の高台に君臨する鰊御殿「料亭湯宿 銀鱗荘」を徹底比較。小樽市トラベルクーポン活用術を網羅。',
  keywords: '小樽 ふるさと納税,おたるふる川 ふるさと納税,おたる宏楽園 クーポン,銀鱗荘 小樽 宿泊,小樽市 ふるさと納税 旅行',
  alternates: {
    canonical: 'https://croud-travel.pages.dev/furusato-tax-otaru-canal-asarigawa-onsen-stay',
  },
  openGraph: {
    title: '【小樽・朝里川温泉×ふるさと納税】小樽運河の情緒＆北の迎賓館！鰊御殿と寿司の街特集｜おたるふる川・宏楽園・銀鱗荘',
    description: 'ガス灯揺れる小樽運河と新鮮な海の幸、歴史的建造物が薫る港町・北海道小樽市を楽天ふるさと納税でお得に贅沢旅！運河の目の前に佇む明治商家風情「運河の宿 おたる ふる川」、広大な日本庭園と露天風呂付き客室の名宿「おたる 宏楽園」、平磯岬の高台に君臨する鰊御殿「料亭湯宿 銀鱗荘」を徹底比較。小樽市トラベルクーポン活用術を網羅。',
    url: 'https://croud-travel.pages.dev/furusato-tax-otaru-canal-asarigawa-onsen-stay',
    siteName: 'トラベルガイド - クラウドトラベル',
    locale: 'ja_JP',
    type: 'article',
  },
};

export default function FurusatoArticlePage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: '【小樽・朝里川温泉×ふるさと納税】小樽運河の情緒＆北の迎賓館！鰊御殿と寿司の街特集｜おたるふる川・宏楽園・銀鱗荘',
    description: 'ガス灯揺れる小樽運河と新鮮な海の幸、歴史的建造物が薫る港町・北海道小樽市を楽天ふるさと納税でお得に贅沢旅！運河の目の前に佇む明治商家風情「運河の宿 おたる ふる川」、広大な日本庭園と露天風呂付き客室の名宿「おたる 宏楽園」、平磯岬の高台に君臨する鰊御殿「料亭湯宿 銀鱗荘」を徹底比較。小樽市トラベルクーポン活用術を網羅。',
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
    datePublished: '2026-09-10T18:00:00+09:00',
    dateModified: '2026-09-10T18:00:00+09:00',
    mainEntityOfPage: 'https://croud-travel.pages.dev/furusato-tax-otaru-canal-asarigawa-onsen-stay',
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
        <span className="text-stone-700 font-medium truncate">【小樽・朝里川温泉×ふるさと納税】小樽運河の情緒＆北の迎賓館！鰊御殿と寿司の街特集｜おたるふる川・宏楽園・銀鱗荘</span>
      </nav>

      {/* ヒーローセクション */}
      <header className="max-w-4xl mx-auto px-4 sm:px-6 py-8 sm:py-12 space-y-4">
        <div className="inline-flex items-center gap-2 bg-amber-100/80 text-amber-900 text-xs font-semibold px-3 py-1 rounded-full border border-amber-200">
          <span>♨️</span>
          <span>北海道小樽市 ふるさと納税・名湯宿特集</span>
        </div>
        <h1 className="text-2xl sm:text-4xl font-extrabold font-serif text-stone-900 tracking-tight leading-snug">
          【小樽・朝里川温泉×ふるさと納税】小樽運河の情緒＆北の迎賓館！鰊御殿と寿司の街特集｜おたるふる川・宏楽園・銀鱗荘
        </h1>
        <p className="text-stone-600 text-sm sm:text-base leading-relaxed">
          ガス灯揺れる小樽運河と新鮮な海の幸、歴史的建造物が薫る港町・北海道小樽市を楽天ふるさと納税でお得に贅沢旅！運河の目の前に佇む明治商家風情「運河の宿 おたる ふる川」、広大な日本庭園と露天風呂付き客室の名宿「おたる 宏楽園」、平磯岬の高台に君臨する鰊御殿「料亭湯宿 銀鱗荘」を徹底比較。小樽市トラベルクーポン活用術を網羅。
        </p>
      </header>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 space-y-12">
        {/* リード文セクション */}
        <section className="bg-white rounded-3xl p-6 sm:p-8 shadow-sm border border-stone-200/80 space-y-4">
          <h2 className="text-lg sm:text-xl font-bold font-serif text-amber-900 border-b border-amber-100 pb-3">
            石造り倉庫とガス灯の温もり——港町小樽の歴史浪漫と朝里川温泉のいで湯、新鮮な北海の幸を味わう優雅な休日
          </h2>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed">
            北海道西海岸、石狩湾に面した歴史ある港町・小樽（おたる）。明治から大正、昭和初期にかけて北海道開拓の海の玄関口として栄え、日本銀行旧小樽支店をはじめとする重厚な近代建築や石造り倉庫群が建ち並び、「北のウォール街」と称された面影を今なお色濃く残しています。夕暮れ時にガス灯が灯る「小樽運河」の水面に映る倉庫群のシルエットは息をのむ美しさ。オルゴール堂や北一硝子、堺町通りのレトロな街並みは散策するだけでタイムスリップしたかのような情緒に浸れます。
          </p>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed">
            小樽観光の醍醐味は、小樽港や近郊の余市・積丹から水揚げされる新鮮なウニ、シャコ、ボタンエビ、ニシンを味わう本場の「小樽寿司」や海鮮丼。そして市内中心部から車で約15分の場所には、三方を山に囲まれた閑静な湯の里「朝里川（あさりかわ）温泉」が湧き出しています。歴史ある迎賓館や美しい日本庭園を抱く温泉宿に宿泊し、肌触りの良い天然温泉で旅の疲れを癒やす贅沢。北海道小樽市へのふるさと納税を利用すれば、30%相当の楽天トラベルクーポンにより憧れの料亭旅館や運河沿いの上質宿へお得に宿泊でき、心ほどける小樽の旅が叶います。
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
                  <td className="p-3 font-bold text-amber-900">運河の宿　おたる　ふる川</td>
                  <td className="p-3 font-bold">★ 4.76</td>
                  <td className="p-3 text-stone-600">小樽運河の目の前に佇む明治の商家風情！自家源泉の天然温泉と地元産こだわり朝食バイキング</td>
                  <td className="p-3 text-stone-600">最高峰の格式・贅沢ステイ</td>
                </tr>
                <tr>
                  <td className="p-3 font-bold text-amber-900">おたる　宏楽園</td>
                  <td className="p-3 font-bold">★ 4.68</td>
                  <td className="p-3 text-stone-600">八千坪の広大な日本庭園に抱かれた和の名宿！自家源泉の美肌湯と露天風呂付き客室で過ごす休日</td>
                  <td className="p-3 text-stone-600">抜群の立地・名湯満喫</td>
                </tr>
                <tr>
                  <td className="p-3 font-bold text-amber-900">料亭湯宿　銀鱗荘</td>
                  <td className="p-3 font-bold">★ 4.6</td>
                  <td className="p-3 text-stone-600">平磯岬の高台にそびえる本物の鰊御殿！石狩湾を一望する岩露天風呂と最高峰の会席料理</td>
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
                src="https://img.travel.rakuten.co.jp/share/HOTEL/1734/1734.jpg"
                alt="運河の宿　おたる　ふる川"
                className="w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute top-4 left-4 bg-stone-900/80 backdrop-blur-sm text-white text-xs px-3 py-1.5 rounded-full font-semibold">
                第1選
              </div>
              <div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-sm text-stone-900 text-xs px-3 py-1.5 rounded-full font-bold shadow">
                ★ 4.76（口コミ 1104件）
              </div>
            </div>

            <div className="p-6 sm:p-8 space-y-6">
              <div className="space-y-2">
                <span className="text-xs font-bold text-amber-700 uppercase tracking-wider">北海道小樽市</span>
                <h3 className="text-xl sm:text-2xl font-bold font-serif text-stone-900 leading-snug">
                  運河の宿　おたる　ふる川
                </h3>
                <p className="text-xs sm:text-sm font-medium text-amber-800">
                  小樽運河の目の前に佇む明治の商家風情！自家源泉の天然温泉と地元産こだわり朝食バイキング
                </p>
              </div>

              <div className="border-t border-b border-stone-100 py-4 space-y-3">
                <h4 className="font-bold text-stone-900 text-sm sm:text-base font-serif">
                  運河の宿 おたる ふる川 —— 小樽運河を一望する特等席。どこか懐かしい木と光の温もりに癒やされる宿
                </h4>
                <div className="grid gap-3 text-xs sm:text-sm text-stone-700">
                  
                  <div className="bg-stone-50 p-3.5 rounded-xl border border-stone-200/60">
                    <h5 className="font-bold text-stone-900 mb-1 flex items-center gap-1.5">
                      <span className="text-amber-600">✓</span> 小樽運河の石造り倉庫群を窓から眺める絶好のロケーション
                    </h5>
                    <p className="text-stone-600 leading-relaxed">運河側の客室からは夕暮れのガス灯や朝の静かな運河の景色を一望。堺町通りや寿司屋通りへの散策にも最高の拠点です。</p>
                  </div>
                  <div className="bg-stone-50 p-3.5 rounded-xl border border-stone-200/60">
                    <h5 className="font-bold text-stone-900 mb-1 flex items-center gap-1.5">
                      <span className="text-amber-600">✓</span> 檜と小樽軟石をあしらった自家源泉の天然温泉大浴場
                    </h5>
                    <p className="text-stone-600 leading-relaxed">壱の湯・弐の湯の二つの大浴場には露天風呂やよもぎ寝湯を完備。柔らかな湯ざわりで心身ともに温まります。</p>
                  </div>
                  <div className="bg-stone-50 p-3.5 rounded-xl border border-stone-200/60">
                    <h5 className="font-bold text-stone-900 mb-1 flex items-center gap-1.5">
                      <span className="text-amber-600">✓</span> 北海道の新鮮な旬食材が並ぶ評判の朝食バイキング
                    </h5>
                    <p className="text-stone-600 leading-relaxed">地元後志の採れたて野菜や手作り豆腐、焼き立てクロワッサン、海の幸など、体に優しいこだわり和洋メニューが充実しています。</p>
                  </div>
                </div>
              </div>

              {/* レビュー抜粋 */}
              <div className="bg-amber-50/60 p-4 rounded-2xl border border-amber-100 text-xs sm:text-sm space-y-1.5">
                <span className="font-bold text-amber-900 flex items-center gap-1.5">
                  <span>💬</span> 実際の宿泊者からの評価・口コミ
                </span>
                <p className="text-stone-700 leading-relaxed">楽天トラベル評価4.76点、口コミ2500件超。「運河のすぐ前で夜のライトアップ散歩に最高」「スタッフの温かいおもてなしと朝食の美味しさが忘れられない」と絶大な人気。</p>
              </div>

              {/* 宿基本情報 */}
              <div className="text-xs text-stone-500 grid sm:grid-cols-2 gap-2 bg-stone-50 p-4 rounded-xl">
                <div><span className="font-semibold text-stone-700">住所：</span>北海道 小樽市色内1-2-15</div>
                <div><span className="font-semibold text-stone-700">宿泊目安：</span>¥11,500〜 /人</div>
                <div><span className="font-semibold text-stone-700">楽天施設ID：</span>1734</div>
                <div><span className="font-semibold text-stone-700">予約区分：</span>楽天ふるさと納税トラベルクーポン対象</div>
              </div>

              <div className="pt-2">
                <a
                  href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FJBe8h%2F%3Ff_no%3D1734"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full text-center bg-gradient-to-r from-amber-700 to-amber-900 hover:from-amber-800 hover:to-stone-900 text-white font-bold py-3.5 px-6 rounded-xl shadow transition"
                >
                  【楽天トラベル】運河の宿　おたる　ふる川 の宿泊プランとクーポン適用はこちら →
                </a>
              </div>
            </div>
          </article>

          {/* ホテル 2 */}
          <article className="bg-white rounded-3xl overflow-hidden shadow-sm border border-stone-200/80 transition hover:shadow-md">
            <div className="relative aspect-video sm:aspect-[16/9] w-full overflow-hidden bg-stone-100">
              <img
                src="https://img.travel.rakuten.co.jp/share/HOTEL/4661/4661.jpg"
                alt="おたる　宏楽園"
                className="w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute top-4 left-4 bg-stone-900/80 backdrop-blur-sm text-white text-xs px-3 py-1.5 rounded-full font-semibold">
                第2選
              </div>
              <div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-sm text-stone-900 text-xs px-3 py-1.5 rounded-full font-bold shadow">
                ★ 4.68（口コミ 364件）
              </div>
            </div>

            <div className="p-6 sm:p-8 space-y-6">
              <div className="space-y-2">
                <span className="text-xs font-bold text-amber-700 uppercase tracking-wider">北海道小樽市</span>
                <h3 className="text-xl sm:text-2xl font-bold font-serif text-stone-900 leading-snug">
                  おたる　宏楽園
                </h3>
                <p className="text-xs sm:text-sm font-medium text-amber-800">
                  八千坪の広大な日本庭園に抱かれた和の名宿！自家源泉の美肌湯と露天風呂付き客室で過ごす休日
                </p>
              </div>

              <div className="border-t border-b border-stone-100 py-4 space-y-3">
                <h4 className="font-bold text-stone-900 text-sm sm:text-base font-serif">
                  おたる 宏楽園 —— 四季折々の花々が咲き誇る名園の宿。自家源泉の滑らかな湯と北海道の旬を織り込んだ会席
                </h4>
                <div className="grid gap-3 text-xs sm:text-sm text-stone-700">
                  
                  <div className="bg-stone-50 p-3.5 rounded-xl border border-stone-200/60">
                    <h5 className="font-bold text-stone-900 mb-1 flex items-center gap-1.5">
                      <span className="text-amber-600">✓</span> 樹齢数百年の古木や桜・ツツジが彩る八千坪の日本庭園
                    </h5>
                    <p className="text-stone-600 leading-relaxed">四季を通じて表情を変える回遊式日本庭園。春の桜、初夏の新緑、秋の紅葉、冬の雪景色と、散策するだけで心が洗われます。</p>
                  </div>
                  <div className="bg-stone-50 p-3.5 rounded-xl border border-stone-200/60">
                    <h5 className="font-bold text-stone-900 mb-1 flex items-center gap-1.5">
                      <span className="text-amber-600">✓</span> 敷地内から湧出するアルカリ性単純温泉の自家源泉
                    </h5>
                    <p className="text-stone-600 leading-relaxed">肌がつるつるになると評判の美肌の湯。庭園を望む大浴場や露天風呂、露天風呂付き客室で源泉の恵みを存分に楽しめます。</p>
                  </div>
                  <div className="bg-stone-50 p-3.5 rounded-xl border border-stone-200/60">
                    <h5 className="font-bold text-stone-900 mb-1 flex items-center gap-1.5">
                      <span className="text-amber-600">✓</span> 後志・北海道の山海の幸を丹精込めて仕立てる創作会席
                    </h5>
                    <p className="text-stone-600 leading-relaxed">料理人が一品一品手作りする美しい日本料理。ゆったりとお部屋や食事処で旬の美味と地酒を味わえます。</p>
                  </div>
                </div>
              </div>

              {/* レビュー抜粋 */}
              <div className="bg-amber-50/60 p-4 rounded-2xl border border-amber-100 text-xs sm:text-sm space-y-1.5">
                <span className="font-bold text-amber-900 flex items-center gap-1.5">
                  <span>💬</span> 実際の宿泊者からの評価・口コミ
                </span>
                <p className="text-stone-700 leading-relaxed">楽天トラベル評価4.68点、口コミ高評価。「日本庭園の美しさと露天風呂付き客室の居心地が最高」「お料理がどれも繊細で美味しく、静かに贅沢な休日を過ごせた」と高評価。</p>
              </div>

              {/* 宿基本情報 */}
              <div className="text-xs text-stone-500 grid sm:grid-cols-2 gap-2 bg-stone-50 p-4 rounded-xl">
                <div><span className="font-semibold text-stone-700">住所：</span>北海道 小樽市新光5-18-2</div>
                <div><span className="font-semibold text-stone-700">宿泊目安：</span>¥20,900〜 /人</div>
                <div><span className="font-semibold text-stone-700">楽天施設ID：</span>4661</div>
                <div><span className="font-semibold text-stone-700">予約区分：</span>楽天ふるさと納税トラベルクーポン対象</div>
              </div>

              <div className="pt-2">
                <a
                  href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FJBe8h%2F%3Ff_no%3D4661"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full text-center bg-gradient-to-r from-amber-700 to-amber-900 hover:from-amber-800 hover:to-stone-900 text-white font-bold py-3.5 px-6 rounded-xl shadow transition"
                >
                  【楽天トラベル】おたる　宏楽園 の宿泊プランとクーポン適用はこちら →
                </a>
              </div>
            </div>
          </article>

          {/* ホテル 3 */}
          <article className="bg-white rounded-3xl overflow-hidden shadow-sm border border-stone-200/80 transition hover:shadow-md">
            <div className="relative aspect-video sm:aspect-[16/9] w-full overflow-hidden bg-stone-100">
              <img
                src="https://img.travel.rakuten.co.jp/share/HOTEL/172837/172837.jpg"
                alt="料亭湯宿　銀鱗荘"
                className="w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute top-4 left-4 bg-stone-900/80 backdrop-blur-sm text-white text-xs px-3 py-1.5 rounded-full font-semibold">
                第3選
              </div>
              <div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-sm text-stone-900 text-xs px-3 py-1.5 rounded-full font-bold shadow">
                ★ 4.6（口コミ 33件）
              </div>
            </div>

            <div className="p-6 sm:p-8 space-y-6">
              <div className="space-y-2">
                <span className="text-xs font-bold text-amber-700 uppercase tracking-wider">北海道小樽市</span>
                <h3 className="text-xl sm:text-2xl font-bold font-serif text-stone-900 leading-snug">
                  料亭湯宿　銀鱗荘
                </h3>
                <p className="text-xs sm:text-sm font-medium text-amber-800">
                  平磯岬の高台にそびえる本物の鰊御殿！石狩湾を一望する岩露天風呂と最高峰の会席料理
                </p>
              </div>

              <div className="border-t border-b border-stone-100 py-4 space-y-3">
                <h4 className="font-bold text-stone-900 text-sm sm:text-base font-serif">
                  料亭湯宿 銀鱗荘 —— 「北の迎賓館」と謳われる文化財の宿。海を見晴らす高台のいで湯と伝統の料亭美禄
                </h4>
                <div className="grid gap-3 text-xs sm:text-sm text-stone-700">
                  
                  <div className="bg-stone-50 p-3.5 rounded-xl border border-stone-200/60">
                    <h5 className="font-bold text-stone-900 mb-1 flex items-center gap-1.5">
                      <span className="text-amber-600">✓</span> 明治初期の豪壮な鰊御殿を移築した北海道有形文化財の建築
                    </h5>
                    <p className="text-stone-600 leading-relaxed">銘木を贅沢に使った入母屋造りの堂々たる建築美。天望笠や格調高い調度品が往時の小樽の繁栄を今に伝えています。</p>
                  </div>
                  <div className="bg-stone-50 p-3.5 rounded-xl border border-stone-200/60">
                    <h5 className="font-bold text-stone-900 mb-1 flex items-center gap-1.5">
                      <span className="text-amber-600">✓</span> 石狩湾の大海原と小樽市街を見下ろす絶景露天風呂
                    </h5>
                    <p className="text-stone-600 leading-relaxed">高台の断崖にせり出すように造られた野趣あふれる岩露天風呂。朝焼けの海や夜景を眺めながらの名湯入浴は至高の体験です。</p>
                  </div>
                  <div className="bg-stone-50 p-3.5 rounded-xl border border-stone-200/60">
                    <h5 className="font-bold text-stone-900 mb-1 flex items-center gap-1.5">
                      <span className="text-amber-600">✓</span> 創業以来の伝統を受け継ぐ一流料亭の技と旬の極上懐石
                    </h5>
                    <p className="text-stone-600 leading-relaxed">小樽前浜の新鮮な魚介をはじめ、厳選された北の味覚を心ゆくまで。料理の盛り付けや器にも細やかな美意識が息づきます。</p>
                  </div>
                </div>
              </div>

              {/* レビュー抜粋 */}
              <div className="bg-amber-50/60 p-4 rounded-2xl border border-amber-100 text-xs sm:text-sm space-y-1.5">
                <span className="font-bold text-amber-900 flex items-center gap-1.5">
                  <span>💬</span> 実際の宿泊者からの評価・口コミ
                </span>
                <p className="text-stone-700 leading-relaxed">楽天トラベル評価4.60点。「歴史ある鰊御殿の重厚感と高台からの石狩湾の眺望が素晴らしい」「露天風呂からの絶景と料亭のお料理は一生に一度の価値がある」と大絶賛。</p>
              </div>

              {/* 宿基本情報 */}
              <div className="text-xs text-stone-500 grid sm:grid-cols-2 gap-2 bg-stone-50 p-4 rounded-xl">
                <div><span className="font-semibold text-stone-700">住所：</span>北海道 小樽市桜1丁目1番地</div>
                <div><span className="font-semibold text-stone-700">宿泊目安：</span>¥35,420〜 /人</div>
                <div><span className="font-semibold text-stone-700">楽天施設ID：</span>172837</div>
                <div><span className="font-semibold text-stone-700">予約区分：</span>楽天ふるさと納税トラベルクーポン対象</div>
              </div>

              <div className="pt-2">
                <a
                  href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FJBe8h%2F%3Ff_no%3D172837"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full text-center bg-gradient-to-r from-amber-700 to-amber-900 hover:from-amber-800 hover:to-stone-900 text-white font-bold py-3.5 px-6 rounded-xl shadow transition"
                >
                  【楽天トラベル】料亭湯宿　銀鱗荘 の宿泊プランとクーポン適用はこちら →
                </a>
              </div>
            </div>
          </article>
        </section>

        {/* エリア観光・見どころ */}
        <section className="space-y-4">
          <h2 className="text-xl sm:text-2xl font-bold font-serif text-stone-900 flex items-center gap-2">
            <span>🗺️</span> 小樽・朝里川温泉・小樽運河＆堺町通り観光ガイド
          </h2>
          <div className="grid gap-4">

            <div className="bg-white p-5 rounded-2xl border border-stone-200/80 shadow-sm space-y-2">
              <h4 className="font-bold text-stone-900 text-sm sm:text-base font-serif flex items-center gap-2">
                <span className="w-6 h-6 rounded-full bg-amber-100 text-amber-900 flex items-center justify-center text-xs font-sans font-bold">1</span>
                小樽運河散策＆ナイトクルーズ
              </h4>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed pl-8">
                全長1140mの運河沿いにガス灯が並ぶ小樽のシンボル。日中の歴史散歩はもちろん、運河クルーズ船に乗って水上から石造り倉庫や港を巡る体験も人気です。
              </p>
            </div>
            <div className="bg-white p-5 rounded-2xl border border-stone-200/80 shadow-sm space-y-2">
              <h4 className="font-bold text-stone-900 text-sm sm:text-base font-serif flex items-center gap-2">
                <span className="w-6 h-6 rounded-full bg-amber-100 text-amber-900 flex items-center justify-center text-xs font-sans font-bold">2</span>
                堺町通り・小樽オルゴール堂＆北一硝子めぐり
              </h4>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed pl-8">
                歴史的建造物を活用したショップやガラス工房、スイーツ店が並ぶメインストリート。「ルタオ本店」の限定ドゥーブルフロマージュや蒸気時計も見逃せません。
              </p>
            </div>
            <div className="bg-white p-5 rounded-2xl border border-stone-200/80 shadow-sm space-y-2">
              <h4 className="font-bold text-stone-900 text-sm sm:text-base font-serif flex items-center gap-2">
                <span className="w-6 h-6 rounded-full bg-amber-100 text-amber-900 flex items-center justify-center text-xs font-sans font-bold">3</span>
                小樽天狗山ロープウェイからの「北海道三大夜景」
              </h4>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed pl-8">
                標高532mの天狗山山頂から見下ろす小樽市街と石狩湾のパノラマ。夜には宝石箱を散りばめたようなロマンチックな夜景が広がります。
              </p>
            </div>
          </div>
        </section>

        {/* ふるさと納税活用ステップ */}
        <section className="bg-gradient-to-br from-amber-900 via-stone-900 to-stone-950 text-white rounded-3xl p-6 sm:p-8 shadow-xl space-y-6">
          <div className="space-y-2">
            <span className="text-xs uppercase tracking-widest text-amber-300 font-semibold">How to Use Coupon</span>
            <h2 className="text-xl sm:text-2xl font-bold font-serif text-amber-50">
              北海道小樽市ふるさと納税×楽天トラベルクーポン活用手順
            </h2>
            <p className="text-stone-300 text-xs sm:text-sm">
              初めての方でも迷わず利用できる3ステップ。予約済みのプランにも後から適用可能です。
            </p>
          </div>

          <div className="grid sm:grid-cols-3 gap-4 text-xs sm:text-sm">

            <div className="bg-stone-900/60 p-4 rounded-2xl border border-amber-500/20 space-y-2">
              <span className="inline-block bg-amber-500/20 text-amber-300 font-mono text-xs px-2.5 py-0.5 rounded font-semibold">
                Step 1: 楽天ふるさと納税で「北海道小樽市」クーポンを獲得
              </span>
              <p className="text-stone-300 text-xs sm:text-sm leading-relaxed">
                楽天ふるさと納税で小樽市を選び、トラベルクーポンを返礼品として申し込みます。寄付額の30%相当のクーポンがアカウントに付与されます。
              </p>
            </div>
            <div className="bg-stone-900/60 p-4 rounded-2xl border border-amber-500/20 space-y-2">
              <span className="inline-block bg-amber-500/20 text-amber-300 font-mono text-xs px-2.5 py-0.5 rounded font-semibold">
                Step 2: 新千歳空港や札幌駅からJR快速エアポートで直通アクセス
              </span>
              <p className="text-stone-300 text-xs sm:text-sm leading-relaxed">
                札幌駅からJR快速エアポートで小樽駅まで約35分、新千歳空港からも直通約75分。3年間の有効期間内で、小樽雪あかりの路や夏の運河クルーズに合わせて計画できます。
              </p>
            </div>
            <div className="bg-stone-900/60 p-4 rounded-2xl border border-amber-500/20 space-y-2">
              <span className="inline-block bg-amber-500/20 text-amber-300 font-mono text-xs px-2.5 py-0.5 rounded font-semibold">
                Step 3: 楽天トラベル予約画面でクーポン割引を適用して予約完了
              </span>
              <p className="text-stone-300 text-xs sm:text-sm leading-relaxed">
                おたるふる川、おたる宏楽園、銀鱗荘などの宿泊プランを選び、決済時にクーポンを選択すれば宿泊代金から大幅な割引が適用されます。
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
              <Link href="/furusato-tax-shirahama-onsen-ocean-adventure-stay" className="hover:text-amber-800 underline flex items-center gap-1.5 py-1">
                <span>▸</span> 南紀白浜温泉 白良浜オーシャンビュー＆アドベンチャーワールド特集
              </Link>
            </li>
            <li>
              <Link href="/furusato-tax-nozawa-onsen-sotoyu-heritage-stay" className="hover:text-amber-800 underline flex items-center gap-1.5 py-1">
                <span>▸</span> 野沢温泉 十三の外湯めぐり＆源泉麻釜・信州郷土料理特集
              </Link>
            </li>
          </ul>
        </section>
      </div>
    </main>
  );
}
