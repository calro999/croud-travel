import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: '【鬼怒川温泉×ふるさと納税】空中庭園露天風呂＆渓谷美の特等席！名門老舗リゾート特集｜あさや・鬼怒川金谷ホテル・七重八重',
  description: '首都圏からのアクセス抜群・渓谷の美湯・栃木県鬼怒川温泉を楽天ふるさと納税でお得に満喫！創業百三十年・空中庭園露天風呂と豪華ビュッフェの「あさや」、日本最古のリゾートを受け継ぐ最高峰「鬼怒川金谷ホテル」、全室渓谷ビューの隠れ宿「七重八重」を徹底比較。日光市トラベルクーポン活用術を網羅。',
  keywords: '鬼怒川温泉 ふるさと納税,あさや ふるさと納税 鬼怒川,鬼怒川金谷ホテル クーポン,七重八重 鬼怒川 宿泊,日光市 ふるさと納税 旅行',
  alternates: {
    canonical: 'https://croud-travel.pages.dev/furusato-tax-kinugawa-onsen-valley-luxury-stay',
  },
  openGraph: {
    title: '【鬼怒川温泉×ふるさと納税】空中庭園露天風呂＆渓谷美の特等席！名門老舗リゾート特集｜あさや・鬼怒川金谷ホテル・七重八重',
    description: '首都圏からのアクセス抜群・渓谷の美湯・栃木県鬼怒川温泉を楽天ふるさと納税でお得に満喫！創業百三十年・空中庭園露天風呂と豪華ビュッフェの「あさや」、日本最古のリゾートを受け継ぐ最高峰「鬼怒川金谷ホテル」、全室渓谷ビューの隠れ宿「七重八重」を徹底比較。日光市トラベルクーポン活用術を網羅。',
    url: 'https://croud-travel.pages.dev/furusato-tax-kinugawa-onsen-valley-luxury-stay',
    siteName: 'トラベルガイド - クラウドトラベル',
    locale: 'ja_JP',
    type: 'article',
  },
};

export default function FurusatoArticlePage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: '【鬼怒川温泉×ふるさと納税】空中庭園露天風呂＆渓谷美の特等席！名門老舗リゾート特集｜あさや・鬼怒川金谷ホテル・七重八重',
    description: '首都圏からのアクセス抜群・渓谷の美湯・栃木県鬼怒川温泉を楽天ふるさと納税でお得に満喫！創業百三十年・空中庭園露天風呂と豪華ビュッフェの「あさや」、日本最古のリゾートを受け継ぐ最高峰「鬼怒川金谷ホテル」、全室渓谷ビューの隠れ宿「七重八重」を徹底比較。日光市トラベルクーポン活用術を網羅。',
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
    datePublished: '2026-09-10T16:45:00+09:00',
    dateModified: '2026-09-10T16:45:00+09:00',
    mainEntityOfPage: 'https://croud-travel.pages.dev/furusato-tax-kinugawa-onsen-valley-luxury-stay',
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
        <span className="text-stone-700 font-medium truncate">【鬼怒川温泉×ふるさと納税】空中庭園露天風呂＆渓谷美の特等席！名門老舗リゾート特集｜あさや・鬼怒川金谷ホテル・七重八重</span>
      </nav>

      {/* ヒーローセクション */}
      <header className="max-w-4xl mx-auto px-4 sm:px-6 py-8 sm:py-12 space-y-4">
        <div className="inline-flex items-center gap-2 bg-amber-100/80 text-amber-900 text-xs font-semibold px-3 py-1 rounded-full border border-amber-200">
          <span>♨️</span>
          <span>栃木県日光市 ふるさと納税・名湯宿特集</span>
        </div>
        <h1 className="text-2xl sm:text-4xl font-extrabold font-serif text-stone-900 tracking-tight leading-snug">
          【鬼怒川温泉×ふるさと納税】空中庭園露天風呂＆渓谷美の特等席！名門老舗リゾート特集｜あさや・鬼怒川金谷ホテル・七重八重
        </h1>
        <p className="text-stone-600 text-sm sm:text-base leading-relaxed">
          首都圏からのアクセス抜群・渓谷の美湯・栃木県鬼怒川温泉を楽天ふるさと納税でお得に満喫！創業百三十年・空中庭園露天風呂と豪華ビュッフェの「あさや」、日本最古のリゾートを受け継ぐ最高峰「鬼怒川金谷ホテル」、全室渓谷ビューの隠れ宿「七重八重」を徹底比較。日光市トラベルクーポン活用術を網羅。
        </p>
      </header>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 space-y-12">
        {/* リード文セクション */}
        <section className="bg-white rounded-3xl p-6 sm:p-8 shadow-sm border border-stone-200/80 space-y-4">
          <h2 className="text-lg sm:text-xl font-bold font-serif text-amber-900 border-b border-amber-100 pb-3">
            鬼怒川の渓谷美を眼下に望む天空の湯浴み——絢爛豪華な吹き抜け空間と至高の美食で味わう大人のリゾート
          </h2>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed">
            栃木県日光市、鬼怒川の上流に広がる鬼怒川（きぬがわ）温泉。江戸時代に発見され、当時は日光詣帰りの大名や僧侶のみに入浴が許されたという格式高い名湯です。明治時代以降に一般開放されてからは、都心から東武特急「スペーシアX」などで約2時間という好アクセスもあり、関東を代表する大型温泉リゾートとして親しまれてきました。鬼怒川の激流が削り出した迫力満点の断崖絶壁と、四季折々に色を変える渓谷美はまさに圧巻です。
          </p>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed">
            鬼怒川温泉の最大の魅力は、渓谷を見下ろす絶景露天風呂と、宿ごとに趣向を凝らした極上のエンターテインメント＆美食体験です。屋上から山並みと満天の星を仰ぐ空中露天風呂、日光名物の「引き上げ湯波（ゆば）」や「とちぎ和牛」、地元契約農家の高原野菜をふんだんに使った会席や豪華ビュッフェ。栃木県日光市へのふるさと納税を活用すれば、30%相当の楽天トラベルクーポンにより憧れの名門宿へお得に宿泊でき、特別な記念日や家族旅行が最高の思い出になります。
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
                  <td className="p-3 font-bold text-amber-900">鬼怒川温泉　あさや</td>
                  <td className="p-3 font-bold">★ 4.63</td>
                  <td className="p-3 text-stone-600">創業百三十年・鬼怒川を代表する老舗巨頭！最上階「空中庭園露天風呂」と品数豊富な豪華和洋中ビュッフェ</td>
                  <td className="p-3 text-stone-600">歴史と品格の最高峰ステイ</td>
                </tr>
                <tr>
                  <td className="p-3 font-bold text-amber-900">鬼怒川金谷ホテル</td>
                  <td className="p-3 font-bold">★ 4.39</td>
                  <td className="p-3 text-stone-600">日本最古のリゾートを受け継ぐ最高峰ラグジュアリー！全室渓谷テラス付き・ジョン・カナヤの美学</td>
                  <td className="p-3 text-stone-600">大人の洗練・絶景プライベート</td>
                </tr>
                <tr>
                  <td className="p-3 font-bold text-amber-900">鬼怒川温泉　静寂とまごころの宿　七重八重</td>
                  <td className="p-3 font-bold">★ 4.58</td>
                  <td className="p-3 text-stone-600">全室渓谷ビュー＆鬼怒川の激流を真下に見下ろす隠れ家！絶景露天風呂と心温まるおもてなし</td>
                  <td className="p-3 text-stone-600">温泉街散策・快適アクティブ旅</td>
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
                src="https://img.travel.rakuten.co.jp/share/HOTEL/8643/8643.jpg"
                alt="鬼怒川温泉　あさや"
                className="w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute top-4 left-4 bg-stone-900/80 backdrop-blur-sm text-white text-xs px-3 py-1.5 rounded-full font-semibold">
                第1選
              </div>
              <div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-sm text-stone-900 text-xs px-3 py-1.5 rounded-full font-bold shadow">
                ★ 4.63（口コミ 5531件）
              </div>
            </div>

            <div className="p-6 sm:p-8 space-y-6">
              <div className="space-y-2">
                <span className="text-xs font-bold text-amber-700 uppercase tracking-wider">栃木県日光市</span>
                <h3 className="text-xl sm:text-2xl font-bold font-serif text-stone-900 leading-snug">
                  鬼怒川温泉　あさや
                </h3>
                <p className="text-xs sm:text-sm font-medium text-amber-800">
                  創業百三十年・鬼怒川を代表する老舗巨頭！最上階「空中庭園露天風呂」と品数豊富な豪華和洋中ビュッフェ
                </p>
              </div>

              <div className="border-t border-b border-stone-100 py-4 space-y-3">
                <h4 className="font-bold text-stone-900 text-sm sm:text-base font-serif">
                  鬼怒川温泉 あさや —— 圧巻の吹き抜けロビーと天空の露天風呂。楽天トラベル屈指の超人気エンタメ名門リゾート
                </h4>
                <div className="grid gap-3 text-xs sm:text-sm text-stone-700">
                  
                  <div className="bg-stone-50 p-3.5 rounded-xl border border-stone-200/60">
                    <h5 className="font-bold text-stone-900 mb-1 flex items-center gap-1.5">
                      <span className="text-amber-600">✓</span> 鬼怒川温泉街で最も高い場所に位置する「空中庭園露天風呂」
                    </h5>
                    <p className="text-stone-600 leading-relaxed">秀峰館の屋上に設けられた舟形の露天風呂。山並みと鬼怒川の渓谷、夜には満天の星空を見上げるパノラマ絶景の湯浴み体験が叶います。</p>
                  </div>
                  <div className="bg-stone-50 p-3.5 rounded-xl border border-stone-200/60">
                    <h5 className="font-bold text-stone-900 mb-1 flex items-center gap-1.5">
                      <span className="text-amber-600">✓</span> 吹き抜けアトリウムに広がる絢爛豪華な館内空間とパイプオルガン
                    </h5>
                    <p className="text-stone-600 leading-relaxed">一歩足を踏み入れると広がる豪華な吹き抜けロビー。毎日のパイプオルガン演奏やエステ、岩盤浴など充実の施設が揃っています。</p>
                  </div>
                  <div className="bg-stone-50 p-3.5 rounded-xl border border-stone-200/60">
                    <h5 className="font-bold text-stone-900 mb-1 flex items-center gap-1.5">
                      <span className="text-amber-600">✓</span> オープンキッチンで百種類以上の料理が並ぶ豪華ディナービュッフェ
                    </h5>
                    <p className="text-stone-600 leading-relaxed">目の前で焼き上げる黒毛和牛ステーキや揚げたて天ぷら、新鮮なお刺身、本格中華やデザートまで、楽天トラベルでも絶賛される最高峰ビュッフェ。</p>
                  </div>
                </div>
              </div>

              {/* レビュー抜粋 */}
              <div className="bg-amber-50/60 p-4 rounded-2xl border border-amber-100 text-xs sm:text-sm space-y-1.5">
                <span className="font-bold text-amber-900 flex items-center gap-1.5">
                  <span>💬</span> 実際の宿泊者からの評価・口コミ
                </span>
                <p className="text-stone-700 leading-relaxed">楽天トラベル評価4.67点、口コミ7600件超という驚異的人気。「空中庭園露天風呂からの景色とお湯が最高」「バイキングのクオリティが高すぎて全世代が大満足」とリピーターが後を絶ちません。</p>
              </div>

              {/* 宿基本情報 */}
              <div className="text-xs text-stone-500 grid sm:grid-cols-2 gap-2 bg-stone-50 p-4 rounded-xl">
                <div><span className="font-semibold text-stone-700">住所：</span>栃木県 日光市鬼怒川温泉滝813</div>
                <div><span className="font-semibold text-stone-700">宿泊目安：</span>¥16,400〜 /人</div>
                <div><span className="font-semibold text-stone-700">楽天施設ID：</span>8643</div>
                <div><span className="font-semibold text-stone-700">予約区分：</span>楽天ふるさと納税トラベルクーポン対象</div>
              </div>

              <div className="pt-2">
                <a
                  href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FJBe8h%2F%3Ff_no%3D8643"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full text-center bg-gradient-to-r from-amber-700 to-amber-900 hover:from-amber-800 hover:to-stone-900 text-white font-bold py-3.5 px-6 rounded-xl shadow transition"
                >
                  【楽天トラベル】鬼怒川温泉　あさや の宿泊プランとクーポン適用はこちら →
                </a>
              </div>
            </div>
          </article>

          {/* ホテル 2 */}
          <article className="bg-white rounded-3xl overflow-hidden shadow-sm border border-stone-200/80 transition hover:shadow-md">
            <div className="relative aspect-video sm:aspect-[16/9] w-full overflow-hidden bg-stone-100">
              <img
                src="https://img.travel.rakuten.co.jp/share/HOTEL/28440/28440.jpg"
                alt="鬼怒川金谷ホテル"
                className="w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute top-4 left-4 bg-stone-900/80 backdrop-blur-sm text-white text-xs px-3 py-1.5 rounded-full font-semibold">
                第2選
              </div>
              <div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-sm text-stone-900 text-xs px-3 py-1.5 rounded-full font-bold shadow">
                ★ 4.39（口コミ 392件）
              </div>
            </div>

            <div className="p-6 sm:p-8 space-y-6">
              <div className="space-y-2">
                <span className="text-xs font-bold text-amber-700 uppercase tracking-wider">栃木県日光市</span>
                <h3 className="text-xl sm:text-2xl font-bold font-serif text-stone-900 leading-snug">
                  鬼怒川金谷ホテル
                </h3>
                <p className="text-xs sm:text-sm font-medium text-amber-800">
                  日本最古のリゾートを受け継ぐ最高峰ラグジュアリー！全室渓谷テラス付き・ジョン・カナヤの美学
                </p>
              </div>

              <div className="border-t border-b border-stone-100 py-4 space-y-3">
                <h4 className="font-bold text-stone-900 text-sm sm:text-base font-serif">
                  鬼怒川金谷ホテル —— 歴史と洗練のモダンリゾート。鬼怒川の渓谷美を望む特等席と金谷流懐石料理
                </h4>
                <div className="grid gap-3 text-xs sm:text-sm text-stone-700">
                  
                  <div className="bg-stone-50 p-3.5 rounded-xl border border-stone-200/60">
                    <h5 className="font-bold text-stone-900 mb-1 flex items-center gap-1.5">
                      <span className="text-amber-600">✓</span> 全客室が鬼怒川の渓流に面したプライベートリゾート
                    </h5>
                    <p className="text-stone-600 leading-relaxed">鬼怒川のせせらぎが心地よく響くウッドテラス付きの客室。洗練された調度品に囲まれ、日常を離れた大人の極上ステイを味わえます。</p>
                  </div>
                  <div className="bg-stone-50 p-3.5 rounded-xl border border-stone-200/60">
                    <h5 className="font-bold text-stone-900 mb-1 flex items-center gap-1.5">
                      <span className="text-amber-600">✓</span> 樹齢二千年の古代檜を使った大浴場と四季の露天風呂
                    </h5>
                    <p className="text-stone-600 leading-relaxed">天然温泉が満ちる古代檜の湯船と、御影石造りの露天風呂。自然と一体化するような深い癒やしを心ゆくまで堪能できます。</p>
                  </div>
                  <div className="bg-stone-50 p-3.5 rounded-xl border border-stone-200/60">
                    <h5 className="font-bold text-stone-900 mb-1 flex items-center gap-1.5">
                      <span className="text-amber-600">✓</span> 創業者ジョン金谷鮮治の美学を受け継ぐ「金谷流懐石料理」
                    </h5>
                    <p className="text-stone-600 leading-relaxed">和食の伝統に洋のエッセンスを融合させた芸術的な創作懐石。厳選されたとちぎ和牛や旬魚の料理、ワゴンサービスのショコラも至福です。</p>
                  </div>
                </div>
              </div>

              {/* レビュー抜粋 */}
              <div className="bg-amber-50/60 p-4 rounded-2xl border border-amber-100 text-xs sm:text-sm space-y-1.5">
                <span className="font-bold text-amber-900 flex items-center gap-1.5">
                  <span>💬</span> 実際の宿泊者からの評価・口コミ
                </span>
                <p className="text-stone-700 leading-relaxed">楽天トラベル評価4.77点という最高ランク。「おもてなし、お部屋からの景色、お料理のすべてが完璧」「ショコラバーとラウンジの雰囲気が素晴らしく大人の休日に最適」と絶賛。</p>
              </div>

              {/* 宿基本情報 */}
              <div className="text-xs text-stone-500 grid sm:grid-cols-2 gap-2 bg-stone-50 p-4 rounded-xl">
                <div><span className="font-semibold text-stone-700">住所：</span>栃木県 日光市鬼怒川温泉大原1394</div>
                <div><span className="font-semibold text-stone-700">宿泊目安：</span>¥42,160〜 /人</div>
                <div><span className="font-semibold text-stone-700">楽天施設ID：</span>28440</div>
                <div><span className="font-semibold text-stone-700">予約区分：</span>楽天ふるさと納税トラベルクーポン対象</div>
              </div>

              <div className="pt-2">
                <a
                  href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FJBe8h%2F%3Ff_no%3D28440"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full text-center bg-gradient-to-r from-amber-700 to-amber-900 hover:from-amber-800 hover:to-stone-900 text-white font-bold py-3.5 px-6 rounded-xl shadow transition"
                >
                  【楽天トラベル】鬼怒川金谷ホテル の宿泊プランとクーポン適用はこちら →
                </a>
              </div>
            </div>
          </article>

          {/* ホテル 3 */}
          <article className="bg-white rounded-3xl overflow-hidden shadow-sm border border-stone-200/80 transition hover:shadow-md">
            <div className="relative aspect-video sm:aspect-[16/9] w-full overflow-hidden bg-stone-100">
              <img
                src="https://img.travel.rakuten.co.jp/share/HOTEL/7779/7779.jpg"
                alt="鬼怒川温泉　静寂とまごころの宿　七重八重"
                className="w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute top-4 left-4 bg-stone-900/80 backdrop-blur-sm text-white text-xs px-3 py-1.5 rounded-full font-semibold">
                第3選
              </div>
              <div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-sm text-stone-900 text-xs px-3 py-1.5 rounded-full font-bold shadow">
                ★ 4.58（口コミ 1552件）
              </div>
            </div>

            <div className="p-6 sm:p-8 space-y-6">
              <div className="space-y-2">
                <span className="text-xs font-bold text-amber-700 uppercase tracking-wider">栃木県日光市</span>
                <h3 className="text-xl sm:text-2xl font-bold font-serif text-stone-900 leading-snug">
                  鬼怒川温泉　静寂とまごころの宿　七重八重
                </h3>
                <p className="text-xs sm:text-sm font-medium text-amber-800">
                  全室渓谷ビュー＆鬼怒川の激流を真下に見下ろす隠れ家！絶景露天風呂と心温まるおもてなし
                </p>
              </div>

              <div className="border-t border-b border-stone-100 py-4 space-y-3">
                <h4 className="font-bold text-stone-900 text-sm sm:text-base font-serif">
                  鬼怒川温泉 静寂とまごころの宿 七重八重（ななえやえ） —— 清流のせせらぎに癒やされる宿。絶景露天風呂と炭火会席
                </h4>
                <div className="grid gap-3 text-xs sm:text-sm text-stone-700">
                  
                  <div className="bg-stone-50 p-3.5 rounded-xl border border-stone-200/60">
                    <h5 className="font-bold text-stone-900 mb-1 flex items-center gap-1.5">
                      <span className="text-amber-600">✓</span> 鬼怒川の断崖絶壁に建ち、全客室・露天風呂から渓谷を一望
                    </h5>
                    <p className="text-stone-600 leading-relaxed">遮るもののない渓谷のパノラマビュー。新緑や紅葉、雪景色など季節ごとに表情を変える鬼怒川の自然美をダイレクトに満喫できます。</p>
                  </div>
                  <div className="bg-stone-50 p-3.5 rounded-xl border border-stone-200/60">
                    <h5 className="font-bold text-stone-900 mb-1 flex items-center gap-1.5">
                      <span className="text-amber-600">✓</span> 渓流のせせらぎが間近に響く絶景露天風呂と無料の湯上がり処
                    </h5>
                    <p className="text-stone-600 leading-relaxed">川面に近い露天風呂で味わう名湯の温もり。湯上がり処では冷たい名水や麦茶のサービスがあり、火照った身体を優しく潤してくれます。</p>
                  </div>
                  <div className="bg-stone-50 p-3.5 rounded-xl border border-stone-200/60">
                    <h5 className="font-bold text-stone-900 mb-1 flex items-center gap-1.5">
                      <span className="text-amber-600">✓</span> とちぎ和牛や地元の旬素材を活かした里山炭火会席
                    </h5>
                    <p className="text-stone-600 leading-relaxed">栃木のブランド和牛や新鮮な湯波、川魚を香ばしく焼き上げた料理。手作りの温もりあふれる料理が旅の夜を彩ります。</p>
                  </div>
                </div>
              </div>

              {/* レビュー抜粋 */}
              <div className="bg-amber-50/60 p-4 rounded-2xl border border-amber-100 text-xs sm:text-sm space-y-1.5">
                <span className="font-bold text-amber-900 flex items-center gap-1.5">
                  <span>💬</span> 実際の宿泊者からの評価・口コミ
                </span>
                <p className="text-stone-700 leading-relaxed">楽天トラベル評価4.70点、口コミ1100件超。「部屋とお風呂からの渓谷の眺めが圧巻」「スタッフの細やかな心配りと美味しい料理に心が癒やされた」と非常に高い満足度。</p>
              </div>

              {/* 宿基本情報 */}
              <div className="text-xs text-stone-500 grid sm:grid-cols-2 gap-2 bg-stone-50 p-4 rounded-xl">
                <div><span className="font-semibold text-stone-700">住所：</span>栃木県 日光市鬼怒川温泉大原1060</div>
                <div><span className="font-semibold text-stone-700">宿泊目安：</span>¥20,900〜 /人</div>
                <div><span className="font-semibold text-stone-700">楽天施設ID：</span>7779</div>
                <div><span className="font-semibold text-stone-700">予約区分：</span>楽天ふるさと納税トラベルクーポン対象</div>
              </div>

              <div className="pt-2">
                <a
                  href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FJBe8h%2F%3Ff_no%3D7779"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full text-center bg-gradient-to-r from-amber-700 to-amber-900 hover:from-amber-800 hover:to-stone-900 text-white font-bold py-3.5 px-6 rounded-xl shadow transition"
                >
                  【楽天トラベル】鬼怒川温泉　静寂とまごころの宿　七重八重 の宿泊プランとクーポン適用はこちら →
                </a>
              </div>
            </div>
          </article>
        </section>

        {/* エリア観光・見どころ */}
        <section className="space-y-4">
          <h2 className="text-xl sm:text-2xl font-bold font-serif text-stone-900 flex items-center gap-2">
            <span>🗺️</span> 鬼怒川温泉・ライン下り＆東武ワールドスクウェア観光ガイド
          </h2>
          <div className="grid gap-4">

            <div className="bg-white p-5 rounded-2xl border border-stone-200/80 shadow-sm space-y-2">
              <h4 className="font-bold text-stone-900 text-sm sm:text-base font-serif flex items-center gap-2">
                <span className="w-6 h-6 rounded-full bg-amber-100 text-amber-900 flex items-center justify-center text-xs font-sans font-bold">1</span>
                鬼怒川ライン下りでの迫力満点のアクティビティ
              </h4>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed pl-8">
                船頭さんの巧みな櫂さばきで、奇岩怪石が連なる鬼怒川の急流を豪快に下るアクティビティ。水しぶきと四季折々の渓谷美を体感できます。
              </p>
            </div>
            <div className="bg-white p-5 rounded-2xl border border-stone-200/80 shadow-sm space-y-2">
              <h4 className="font-bold text-stone-900 text-sm sm:text-base font-serif flex items-center gap-2">
                <span className="w-6 h-6 rounded-full bg-amber-100 text-amber-900 flex items-center justify-center text-xs font-sans font-bold">2</span>
                東武ワールドスクウェアで世界一周トリップ
              </h4>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed pl-8">
                世界の有名建築物や世界遺産を25分の1スケールで精巧に再現したテーマパーク。サグラダファミリアやピラミッドなど、精緻な模型と植栽は見応え十分です。
              </p>
            </div>
            <div className="bg-white p-5 rounded-2xl border border-stone-200/80 shadow-sm space-y-2">
              <h4 className="font-bold text-stone-900 text-sm sm:text-base font-serif flex items-center gap-2">
                <span className="w-6 h-6 rounded-full bg-amber-100 text-amber-900 flex items-center justify-center text-xs font-sans font-bold">3</span>
                日光江戸村（EDO WONDERLAND）での歴史体験
              </h4>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed pl-8">
                江戸時代の町並みや文化を忠実に再現したカルチャーパーク。迫力満点の忍者アクションショーや変身体験、手裏剣道場など、大人から子供まで楽しめます。
              </p>
            </div>
          </div>
        </section>

        {/* ふるさと納税活用ステップ */}
        <section className="bg-gradient-to-br from-amber-900 via-stone-900 to-stone-950 text-white rounded-3xl p-6 sm:p-8 shadow-xl space-y-6">
          <div className="space-y-2">
            <span className="text-xs uppercase tracking-widest text-amber-300 font-semibold">How to Use Coupon</span>
            <h2 className="text-xl sm:text-2xl font-bold font-serif text-amber-50">
              栃木県日光市ふるさと納税×楽天トラベルクーポン活用手順
            </h2>
            <p className="text-stone-300 text-xs sm:text-sm">
              初めての方でも迷わず利用できる3ステップ。予約済みのプランにも後から適用可能です。
            </p>
          </div>

          <div className="grid sm:grid-cols-3 gap-4 text-xs sm:text-sm">

            <div className="bg-stone-900/60 p-4 rounded-2xl border border-amber-500/20 space-y-2">
              <span className="inline-block bg-amber-500/20 text-amber-300 font-mono text-xs px-2.5 py-0.5 rounded font-semibold">
                Step 1: 楽天ふるさと納税で「栃木県日光市」クーポンを獲得
              </span>
              <p className="text-stone-300 text-xs sm:text-sm leading-relaxed">
                楽天ふるさと納税で日光市を寄付先に選び、トラベルクーポンを返礼品として申し込みます。寄付額の30%相当のクーポンがアカウントに付与されます。
              </p>
            </div>
            <div className="bg-stone-900/60 p-4 rounded-2xl border border-amber-500/20 space-y-2">
              <span className="inline-block bg-amber-500/20 text-amber-300 font-mono text-xs px-2.5 py-0.5 rounded font-semibold">
                Step 2: 新型特急スペーシアXで浅草・新宿から約2時間
              </span>
              <p className="text-stone-300 text-xs sm:text-sm leading-relaxed">
                東武鉄道の最新特急「スペーシアX」で快適アクセス。3年間の有効期間内で、紅葉シーズンや避暑旅、冬の雪見風呂に合わせて計画できます。
              </p>
            </div>
            <div className="bg-stone-900/60 p-4 rounded-2xl border border-amber-500/20 space-y-2">
              <span className="inline-block bg-amber-500/20 text-amber-300 font-mono text-xs px-2.5 py-0.5 rounded font-semibold">
                Step 3: 楽天トラベル予約画面でクーポン割引を適用して予約完了
              </span>
              <p className="text-stone-300 text-xs sm:text-sm leading-relaxed">
                あさや、鬼怒川金谷ホテル、七重八重などの対象宿泊プランを選び、決済時にクーポンを選択すれば宿泊代金から大幅な割引が適用されます。
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
