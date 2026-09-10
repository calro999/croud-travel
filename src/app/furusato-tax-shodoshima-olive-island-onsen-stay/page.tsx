import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: '【小豆島×ふるさと納税】エンジェルロード＆オリーブの島！瀬戸内海一望の温泉宿特集｜島宿真里・オリビアン小豆島・ベイリゾート',
  description: '穏やかな瀬戸内海に浮かぶ癒やしの楽園・香川県小豆島（小豆島町・土庄町）を楽天ふるさと納税でお得に島旅！登録有形文化財と名物醤油会席の至高宿「島宿 真里」、夕陽百選を望む絶景露天風呂「オリビアン小豆島 夕陽ヶ丘ホテル」、全室オーシャンビュー＆オリーブ牛の「ベイリゾートホテル小豆島」を徹底比較。小豆島トラベルクーポン活用術を網羅。',
  keywords: '小豆島 ふるさと納税,島宿真里 クーポン,オリビアン小豆島 ふるさと納税,ベイリゾートホテル小豆島 宿泊,小豆島町 ふるさと納税 旅行',
  alternates: {
    canonical: 'https://croud-travel.pages.dev/furusato-tax-shodoshima-olive-island-onsen-stay',
  },
  openGraph: {
    title: '【小豆島×ふるさと納税】エンジェルロード＆オリーブの島！瀬戸内海一望の温泉宿特集｜島宿真里・オリビアン小豆島・ベイリゾート',
    description: '穏やかな瀬戸内海に浮かぶ癒やしの楽園・香川県小豆島（小豆島町・土庄町）を楽天ふるさと納税でお得に島旅！登録有形文化財と名物醤油会席の至高宿「島宿 真里」、夕陽百選を望む絶景露天風呂「オリビアン小豆島 夕陽ヶ丘ホテル」、全室オーシャンビュー＆オリーブ牛の「ベイリゾートホテル小豆島」を徹底比較。小豆島トラベルクーポン活用術を網羅。',
    url: 'https://croud-travel.pages.dev/furusato-tax-shodoshima-olive-island-onsen-stay',
    siteName: 'トラベルガイド - クラウドトラベル',
    locale: 'ja_JP',
    type: 'article',
  },
};

export default function FurusatoArticlePage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: '【小豆島×ふるさと納税】エンジェルロード＆オリーブの島！瀬戸内海一望の温泉宿特集｜島宿真里・オリビアン小豆島・ベイリゾート',
    description: '穏やかな瀬戸内海に浮かぶ癒やしの楽園・香川県小豆島（小豆島町・土庄町）を楽天ふるさと納税でお得に島旅！登録有形文化財と名物醤油会席の至高宿「島宿 真里」、夕陽百選を望む絶景露天風呂「オリビアン小豆島 夕陽ヶ丘ホテル」、全室オーシャンビュー＆オリーブ牛の「ベイリゾートホテル小豆島」を徹底比較。小豆島トラベルクーポン活用術を網羅。',
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
    datePublished: '2026-09-11T00:20:00+09:00',
    dateModified: '2026-09-11T00:20:00+09:00',
    mainEntityOfPage: 'https://croud-travel.pages.dev/furusato-tax-shodoshima-olive-island-onsen-stay',
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
        <span className="text-stone-700 font-medium truncate">【小豆島×ふるさと納税】エンジェルロード＆オリーブの島！瀬戸内海一望の温泉宿特集｜島宿真里・オリビアン小豆島・ベイリゾート</span>
      </nav>

      {/* ヒーローセクション */}
      <header className="max-w-4xl mx-auto px-4 sm:px-6 py-8 sm:py-12 space-y-4">
        <div className="inline-flex items-center gap-2 bg-amber-100/80 text-amber-900 text-xs font-semibold px-3 py-1 rounded-full border border-amber-200">
          <span>♨️</span>
          <span>香川県小豆島（小豆島町・土庄町） ふるさと納税・名湯宿特集</span>
        </div>
        <h1 className="text-2xl sm:text-4xl font-extrabold font-serif text-stone-900 tracking-tight leading-snug">
          【小豆島×ふるさと納税】エンジェルロード＆オリーブの島！瀬戸内海一望の温泉宿特集｜島宿真里・オリビアン小豆島・ベイリゾート
        </h1>
        <p className="text-stone-600 text-sm sm:text-base leading-relaxed">
          穏やかな瀬戸内海に浮かぶ癒やしの楽園・香川県小豆島（小豆島町・土庄町）を楽天ふるさと納税でお得に島旅！登録有形文化財と名物醤油会席の至高宿「島宿 真里」、夕陽百選を望む絶景露天風呂「オリビアン小豆島 夕陽ヶ丘ホテル」、全室オーシャンビュー＆オリーブ牛の「ベイリゾートホテル小豆島」を徹底比較。小豆島トラベルクーポン活用術を網羅。
        </p>
      </header>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 space-y-12">
        {/* リード文セクション */}
        <section className="bg-white rounded-3xl p-6 sm:p-8 shadow-sm border border-stone-200/80 space-y-4">
          <h2 className="text-lg sm:text-xl font-bold font-serif text-amber-900 border-b border-amber-100 pb-3">
            オリーブの風薫る瀬戸内の多島美と潮の満ち引きがつなぐエンジェルロード——天然温泉と島の豊かな恵みに癒やされる贅沢な島時間
          </h2>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed">
            瀬戸内海で淡路島に次いで2番目に大きな島・香川県小豆郡小豆島。四方を穏やかな内海に囲まれ、温暖で雨の少ない地中海性気候を活かした「日本初・オリーブ栽培発祥の地」として知られています。干潮時だけに海の中から砂の道が現れる恋人の聖地「エンジェルロード」や、日本三大渓谷美に数えられる「寒霞渓（かんかけい）」のダイナミックな岩峰、400年の歴史を受け継ぐ醤油蔵や手延べそうめんなど、豊かな自然と伝統文化が息づいています。
          </p>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed">
            小豆島ステイの大きな魅力は、島内に湧出する良質な天然温泉と、小豆島ならではの唯一無二の食体験。オリーブの絞り粕を食べて育った極上の「オリーブ牛」、瀬戸内海で揚がった鯛やハモ、島伝統の熟成醤油で仕立てる会席料理が心を満たします。香川県小豆島町や土庄町へのふるさと納税を利用すれば、30%相当の楽天トラベルクーポンにより憧れの老舗文化財宿や海沿いリゾートへお得に宿泊でき、心ほどける島旅が叶います。
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
                  <td className="p-3 font-bold text-amber-900">島宿真里＜小豆島＞</td>
                  <td className="p-3 font-bold">★ 5</td>
                  <td className="p-3 text-stone-600">国の登録有形文化財に泊まる一日数組の隠れ宿！島伝統の醤油蔵文化を味わう伝説の「醤油会席」</td>
                  <td className="p-3 text-stone-600">最高峰の格式・贅沢ステイ</td>
                </tr>
                <tr>
                  <td className="p-3 font-bold text-amber-900">小豆島温泉　オリビアン小豆島　夕陽ヶ丘ホテル　＜小豆島＞</td>
                  <td className="p-3 font-bold">★ 4.49</td>
                  <td className="p-3 text-stone-600">夕陽百選に選ばれる丘の上の絶景リゾート！天然温泉露天風呂と瀬戸内オリーブバイキング</td>
                  <td className="p-3 text-stone-600">抜群の立地・名湯満喫</td>
                </tr>
                <tr>
                  <td className="p-3 font-bold text-amber-900">ベイリゾートホテル小豆島</td>
                  <td className="p-3 font-bold">★ 4.29</td>
                  <td className="p-3 text-stone-600">全客室オーシャンビュー＆最上階展望温泉大浴場！オリーブ牛と瀬戸内の旬魚を味わう海辺のホテル</td>
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
                src="https://img.travel.rakuten.co.jp/share/HOTEL/188332/188332.jpg"
                alt="島宿真里＜小豆島＞"
                className="w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute top-4 left-4 bg-stone-900/80 backdrop-blur-sm text-white text-xs px-3 py-1.5 rounded-full font-semibold">
                第1選
              </div>
              <div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-sm text-stone-900 text-xs px-3 py-1.5 rounded-full font-bold shadow">
                ★ 5（口コミ 10件）
              </div>
            </div>

            <div className="p-6 sm:p-8 space-y-6">
              <div className="space-y-2">
                <span className="text-xs font-bold text-amber-700 uppercase tracking-wider">香川県小豆島（小豆島町・土庄町）</span>
                <h3 className="text-xl sm:text-2xl font-bold font-serif text-stone-900 leading-snug">
                  島宿真里＜小豆島＞
                </h3>
                <p className="text-xs sm:text-sm font-medium text-amber-800">
                  国の登録有形文化財に泊まる一日数組の隠れ宿！島伝統の醤油蔵文化を味わう伝説の「醤油会席」
                </p>
              </div>

              <div className="border-t border-b border-stone-100 py-4 space-y-3">
                <h4 className="font-bold text-stone-900 text-sm sm:text-base font-serif">
                  島宿 真里 —— 醤の郷の静寂に抱かれる珠玉の宿。自家源泉の温泉風呂と蔵仕込みの醤油が織りなす美食の極み
                </h4>
                <div className="grid gap-3 text-xs sm:text-sm text-stone-700">
                  
                  <div className="bg-stone-50 p-3.5 rounded-xl border border-stone-200/60">
                    <h5 className="font-bold text-stone-900 mb-1 flex items-center gap-1.5">
                      <span className="text-amber-600">✓</span> 登録有形文化財に指定された歴史ある母屋と趣異なる客室
                    </h5>
                    <p className="text-stone-600 leading-relaxed">梁や柱の温もりを活かした数寄屋の美。客室ごとに設えが異なり、自家源泉の湯を引いた専用風呂でゆったり寛げます。</p>
                  </div>
                  <div className="bg-stone-50 p-3.5 rounded-xl border border-stone-200/60">
                    <h5 className="font-bold text-stone-900 mb-1 flex items-center gap-1.5">
                      <span className="text-amber-600">✓</span> 自家製醤油や島のオリーブを贅沢に味わう名物「醤油会席」
                    </h5>
                    <p className="text-stone-600 leading-relaxed">二段仕込み醤油や諸味など異なる醤油の風味を楽しむ極上ディナー。島の旬魚や野菜の旨味が極限まで引き出されます。</p>
                  </div>
                  <div className="bg-stone-50 p-3.5 rounded-xl border border-stone-200/60">
                    <h5 className="font-bold text-stone-900 mb-1 flex items-center gap-1.5">
                      <span className="text-amber-600">✓</span> 醤油樽の木を再利用した大浴場やプライベート貸切温泉
                    </h5>
                    <p className="text-stone-600 leading-relaxed">ほんのりと木の香りが漂う温泉空間。柔らかな単純温泉に浸かり、旅の疲れを優しく解き放てます。</p>
                  </div>
                </div>
              </div>

              {/* レビュー抜粋 */}
              <div className="bg-amber-50/60 p-4 rounded-2xl border border-amber-100 text-xs sm:text-sm space-y-1.5">
                <span className="font-bold text-amber-900 flex items-center gap-1.5">
                  <span>💬</span> 実際の宿泊者からの評価・口コミ
                </span>
                <p className="text-stone-700 leading-relaxed">楽天トラベル評価5.00点、満点評価の伝説宿。「醤油会席が一口ごとに感動の美味しさ」「お部屋、お風呂、接客すべてが最高峰で、日本の旅館の素晴らしさを実感した」と大絶賛。</p>
              </div>

              {/* 宿基本情報 */}
              <div className="text-xs text-stone-500 grid sm:grid-cols-2 gap-2 bg-stone-50 p-4 rounded-xl">
                <div><span className="font-semibold text-stone-700">住所：</span>香川県 小豆郡小豆島町苗羽甲2011</div>
                <div><span className="font-semibold text-stone-700">宿泊目安：</span>¥29,205〜 /人</div>
                <div><span className="font-semibold text-stone-700">楽天施設ID：</span>188332</div>
                <div><span className="font-semibold text-stone-700">予約区分：</span>楽天ふるさと納税トラベルクーポン対象</div>
              </div>

              <div className="pt-2">
                <a
                  href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FJBe8h%2F%3Ff_no%3D188332"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full text-center bg-gradient-to-r from-amber-700 to-amber-900 hover:from-amber-800 hover:to-stone-900 text-white font-bold py-3.5 px-6 rounded-xl shadow transition"
                >
                  【楽天トラベル】島宿真里＜小豆島＞ の宿泊プランとクーポン適用はこちら →
                </a>
              </div>
            </div>
          </article>

          {/* ホテル 2 */}
          <article className="bg-white rounded-3xl overflow-hidden shadow-sm border border-stone-200/80 transition hover:shadow-md">
            <div className="relative aspect-video sm:aspect-[16/9] w-full overflow-hidden bg-stone-100">
              <img
                src="https://img.travel.rakuten.co.jp/share/HOTEL/7592/7592.jpg"
                alt="小豆島温泉　オリビアン小豆島　夕陽ヶ丘ホテル　＜小豆島＞"
                className="w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute top-4 left-4 bg-stone-900/80 backdrop-blur-sm text-white text-xs px-3 py-1.5 rounded-full font-semibold">
                第2選
              </div>
              <div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-sm text-stone-900 text-xs px-3 py-1.5 rounded-full font-bold shadow">
                ★ 4.49（口コミ 2335件）
              </div>
            </div>

            <div className="p-6 sm:p-8 space-y-6">
              <div className="space-y-2">
                <span className="text-xs font-bold text-amber-700 uppercase tracking-wider">香川県小豆島（小豆島町・土庄町）</span>
                <h3 className="text-xl sm:text-2xl font-bold font-serif text-stone-900 leading-snug">
                  小豆島温泉　オリビアン小豆島　夕陽ヶ丘ホテル　＜小豆島＞
                </h3>
                <p className="text-xs sm:text-sm font-medium text-amber-800">
                  夕陽百選に選ばれる丘の上の絶景リゾート！天然温泉露天風呂と瀬戸内オリーブバイキング
                </p>
              </div>

              <div className="border-t border-b border-stone-100 py-4 space-y-3">
                <h4 className="font-bold text-stone-900 text-sm sm:text-base font-serif">
                  オリビアン小豆島 夕陽ヶ丘ホテル —— 瀬戸内海の多島美を見晴らす特等席。夕日と美肌温泉に包まれるリゾート
                </h4>
                <div className="grid gap-3 text-xs sm:text-sm text-stone-700">
                  
                  <div className="bg-stone-50 p-3.5 rounded-xl border border-stone-200/60">
                    <h5 className="font-bold text-stone-900 mb-1 flex items-center gap-1.5">
                      <span className="text-amber-600">✓</span> 瀬戸内海と島々を茜色に染める夕日を望む天然温泉露天風呂
                    </h5>
                    <p className="text-stone-600 leading-relaxed">日本夕陽百選に選出された絶景。phの高いトロトロの美肌の湯に浸かりながら眺めるサンセットは圧巻です。</p>
                  </div>
                  <div className="bg-stone-50 p-3.5 rounded-xl border border-stone-200/60">
                    <h5 className="font-bold text-stone-900 mb-1 flex items-center gap-1.5">
                      <span className="text-amber-600">✓</span> オリーブをふんだんに使った贅沢な和洋中ビュッフェ
                    </h5>
                    <p className="text-stone-600 leading-relaxed">オリーブ牛や新鮮な海の幸、島野菜を味わうディナー。目の前で焼き上げるステーキや揚げたて天ぷらが人気です。</p>
                  </div>
                  <div className="bg-stone-50 p-3.5 rounded-xl border border-stone-200/60">
                    <h5 className="font-bold text-stone-900 mb-1 flex items-center gap-1.5">
                      <span className="text-amber-600">✓</span> 広大な敷地内でのテニスやミニゴルフ・ドッグラン
                    </h5>
                    <p className="text-stone-600 leading-relaxed">充実のアウトドアアクティビティ。ペット同伴ルームも備え、家族みんなで自然を満喫できます。</p>
                  </div>
                </div>
              </div>

              {/* レビュー抜粋 */}
              <div className="bg-amber-50/60 p-4 rounded-2xl border border-amber-100 text-xs sm:text-sm space-y-1.5">
                <span className="font-bold text-amber-900 flex items-center gap-1.5">
                  <span>💬</span> 実際の宿泊者からの評価・口コミ
                </span>
                <p className="text-stone-700 leading-relaxed">楽天トラベル評価4.49点、口コミ3400件超。「露天風呂からの夕日の絶景に感動した」「お料理のバイキングがとても美味しく、広々としたお部屋でリフレッシュできた」と高評価。</p>
              </div>

              {/* 宿基本情報 */}
              <div className="text-xs text-stone-500 grid sm:grid-cols-2 gap-2 bg-stone-50 p-4 rounded-xl">
                <div><span className="font-semibold text-stone-700">住所：</span>香川県 小豆郡土庄町屋形崎甲63-1</div>
                <div><span className="font-semibold text-stone-700">宿泊目安：</span>¥8,900〜 /人</div>
                <div><span className="font-semibold text-stone-700">楽天施設ID：</span>7592</div>
                <div><span className="font-semibold text-stone-700">予約区分：</span>楽天ふるさと納税トラベルクーポン対象</div>
              </div>

              <div className="pt-2">
                <a
                  href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FJBe8h%2F%3Ff_no%3D7592"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full text-center bg-gradient-to-r from-amber-700 to-amber-900 hover:from-amber-800 hover:to-stone-900 text-white font-bold py-3.5 px-6 rounded-xl shadow transition"
                >
                  【楽天トラベル】小豆島温泉　オリビアン小豆島　夕陽ヶ丘ホテル　＜小豆島＞ の宿泊プランとクーポン適用はこちら →
                </a>
              </div>
            </div>
          </article>

          {/* ホテル 3 */}
          <article className="bg-white rounded-3xl overflow-hidden shadow-sm border border-stone-200/80 transition hover:shadow-md">
            <div className="relative aspect-video sm:aspect-[16/9] w-full overflow-hidden bg-stone-100">
              <img
                src="https://img.travel.rakuten.co.jp/share/HOTEL/44874/44874.jpg"
                alt="ベイリゾートホテル小豆島"
                className="w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute top-4 left-4 bg-stone-900/80 backdrop-blur-sm text-white text-xs px-3 py-1.5 rounded-full font-semibold">
                第3選
              </div>
              <div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-sm text-stone-900 text-xs px-3 py-1.5 rounded-full font-bold shadow">
                ★ 4.29（口コミ 1920件）
              </div>
            </div>

            <div className="p-6 sm:p-8 space-y-6">
              <div className="space-y-2">
                <span className="text-xs font-bold text-amber-700 uppercase tracking-wider">香川県小豆島（小豆島町・土庄町）</span>
                <h3 className="text-xl sm:text-2xl font-bold font-serif text-stone-900 leading-snug">
                  ベイリゾートホテル小豆島
                </h3>
                <p className="text-xs sm:text-sm font-medium text-amber-800">
                  全客室オーシャンビュー＆最上階展望温泉大浴場！オリーブ牛と瀬戸内の旬魚を味わう海辺のホテル
                </p>
              </div>

              <div className="border-t border-b border-stone-100 py-4 space-y-3">
                <h4 className="font-bold text-stone-900 text-sm sm:text-base font-serif">
                  ベイリゾートホテル小豆島 —— 内海湾を一望するシーサイドリゾート。展望露天風呂と充実の貸切風呂
                </h4>
                <div className="grid gap-3 text-xs sm:text-sm text-stone-700">
                  
                  <div className="bg-stone-50 p-3.5 rounded-xl border border-stone-200/60">
                    <h5 className="font-bold text-stone-900 mb-1 flex items-center gap-1.5">
                      <span className="text-amber-600">✓</span> 全客室の窓から穏やかな瀬戸内海の内海湾を一望
                    </h5>
                    <p className="text-stone-600 leading-relaxed">朝日や夕暮れの海を部屋にいながら満喫。和室や和洋室など多彩な部屋タイプが揃っています。</p>
                  </div>
                  <div className="bg-stone-50 p-3.5 rounded-xl border border-stone-200/60">
                    <h5 className="font-bold text-stone-900 mb-1 flex items-center gap-1.5">
                      <span className="text-amber-600">✓</span> 最上階12階に位置する展望露天風呂と5つの貸切温泉風呂
                    </h5>
                    <p className="text-stone-600 leading-relaxed">海を見下ろすパノラマ温泉大浴場。プライベートに楽しめる貸切露天風呂も充実しています。</p>
                  </div>
                  <div className="bg-stone-50 p-3.5 rounded-xl border border-stone-200/60">
                    <h5 className="font-bold text-stone-900 mb-1 flex items-center gap-1.5">
                      <span className="text-amber-600">✓</span> 小豆島名物「オリーブ牛」や地魚のお造りを味わう会席料理
                    </h5>
                    <p className="text-stone-600 leading-relaxed">柔らかく脂の甘いオリーブ牛ステーキや、新鮮な瀬戸内の旬魚。島の恵みを心ゆくまで堪能できます。</p>
                  </div>
                </div>
              </div>

              {/* レビュー抜粋 */}
              <div className="bg-amber-50/60 p-4 rounded-2xl border border-amber-100 text-xs sm:text-sm space-y-1.5">
                <span className="font-bold text-amber-900 flex items-center gap-1.5">
                  <span>💬</span> 実際の宿泊者からの評価・口コミ
                </span>
                <p className="text-stone-700 leading-relaxed">楽天トラベル評価4.29点、口コミ2900件超。「お部屋とお風呂からの海の眺めが素晴らしい」「貸切露天風呂が気持ちよく、オリーブ牛のお料理もとても美味しかった」と好評。</p>
              </div>

              {/* 宿基本情報 */}
              <div className="text-xs text-stone-500 grid sm:grid-cols-2 gap-2 bg-stone-50 p-4 rounded-xl">
                <div><span className="font-semibold text-stone-700">住所：</span>香川県 小豆郡小豆島町古江乙16-3</div>
                <div><span className="font-semibold text-stone-700">宿泊目安：</span>¥5,500〜 /人</div>
                <div><span className="font-semibold text-stone-700">楽天施設ID：</span>44874</div>
                <div><span className="font-semibold text-stone-700">予約区分：</span>楽天ふるさと納税トラベルクーポン対象</div>
              </div>

              <div className="pt-2">
                <a
                  href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FJBe8h%2F%3Ff_no%3D44874"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full text-center bg-gradient-to-r from-amber-700 to-amber-900 hover:from-amber-800 hover:to-stone-900 text-white font-bold py-3.5 px-6 rounded-xl shadow transition"
                >
                  【楽天トラベル】ベイリゾートホテル小豆島 の宿泊プランとクーポン適用はこちら →
                </a>
              </div>
            </div>
          </article>
        </section>

        {/* エリア観光・見どころ */}
        <section className="space-y-4">
          <h2 className="text-xl sm:text-2xl font-bold font-serif text-stone-900 flex items-center gap-2">
            <span>🗺️</span> 小豆島・エンジェルロード＆寒霞渓ロープウェイ・オリーブ公園観光ガイド
          </h2>
          <div className="grid gap-4">

            <div className="bg-white p-5 rounded-2xl border border-stone-200/80 shadow-sm space-y-2">
              <h4 className="font-bold text-stone-900 text-sm sm:text-base font-serif flex items-center gap-2">
                <span className="w-6 h-6 rounded-full bg-amber-100 text-amber-900 flex items-center justify-center text-xs font-sans font-bold">1</span>
                1日2回干潮時に現れる砂の道「エンジェルロード（天使の散歩道）」
              </h4>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed pl-8">
                大切な人と手をつないで渡ると願いが叶うとされる恋人の聖地。弁天島と余島を結ぶ砂浜の道を潮風とともに歩く感動の体験です。
              </p>
            </div>
            <div className="bg-white p-5 rounded-2xl border border-stone-200/80 shadow-sm space-y-2">
              <h4 className="font-bold text-stone-900 text-sm sm:text-base font-serif flex items-center gap-2">
                <span className="w-6 h-6 rounded-full bg-amber-100 text-amber-900 flex items-center justify-center text-xs font-sans font-bold">2</span>
                日本三大渓谷美「寒霞渓（かんかけい）」ロープウェイ
              </h4>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed pl-8">
                悠久の歳月が創り出した奇岩怪石の断崖絶壁。秋の紅葉、初夏の新緑の中をくぐり抜けるロープウェイからの瀬戸内海パノラマは息をのむ絶景です。
              </p>
            </div>
            <div className="bg-white p-5 rounded-2xl border border-stone-200/80 shadow-sm space-y-2">
              <h4 className="font-bold text-stone-900 text-sm sm:text-base font-serif flex items-center gap-2">
                <span className="w-6 h-6 rounded-full bg-amber-100 text-amber-900 flex items-center justify-center text-xs font-sans font-bold">3</span>
                道の駅 小豆島オリーブ公園（白いギリシャ風車）
              </h4>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed pl-8">
                約2,000本のオリーブ畑とエーゲ海のような白い風車。魔法のほうきを借りてアニメの主人公のようにジャンプして写真を撮るのが人気です。
              </p>
            </div>
          </div>
        </section>

        {/* ふるさと納税活用ステップ */}
        <section className="bg-gradient-to-br from-amber-900 via-stone-900 to-stone-950 text-white rounded-3xl p-6 sm:p-8 shadow-xl space-y-6">
          <div className="space-y-2">
            <span className="text-xs uppercase tracking-widest text-amber-300 font-semibold">How to Use Coupon</span>
            <h2 className="text-xl sm:text-2xl font-bold font-serif text-amber-50">
              香川県小豆島町・土庄町ふるさと納税×楽天トラベルクーポン活用手順
            </h2>
            <p className="text-stone-300 text-xs sm:text-sm">
              初めての方でも迷わず利用できる3ステップ。予約済みのプランにも後から適用可能です。
            </p>
          </div>

          <div className="grid sm:grid-cols-3 gap-4 text-xs sm:text-sm">

            <div className="bg-stone-900/60 p-4 rounded-2xl border border-amber-500/20 space-y-2">
              <span className="inline-block bg-amber-500/20 text-amber-300 font-mono text-xs px-2.5 py-0.5 rounded font-semibold">
                Step 1: 楽天ふるさと納税で「香川県小豆島町」等のクーポンを獲得
              </span>
              <p className="text-stone-300 text-xs sm:text-sm leading-relaxed">
                楽天ふるさと納税で小豆島町または土庄町を選び、トラベルクーポンを返礼品として申し込みます。寄付額の30%相当のクーポンがアカウントに付与されます。
              </p>
            </div>
            <div className="bg-stone-900/60 p-4 rounded-2xl border border-amber-500/20 space-y-2">
              <span className="inline-block bg-amber-500/20 text-amber-300 font-mono text-xs px-2.5 py-0.5 rounded font-semibold">
                Step 2: 高松港・新岡山港・姫路港・神戸港からフェリーでアクセス
              </span>
              <p className="text-stone-300 text-xs sm:text-sm leading-relaxed">
                高松港からフェリーで約60分（高速艇なら約35分）、岡山や姫路、神戸からも直通船が運航。3年間の有効期間内で、気候の穏やかな季節に合わせて計画できます。
              </p>
            </div>
            <div className="bg-stone-900/60 p-4 rounded-2xl border border-amber-500/20 space-y-2">
              <span className="inline-block bg-amber-500/20 text-amber-300 font-mono text-xs px-2.5 py-0.5 rounded font-semibold">
                Step 3: 楽天トラベル予約画面でクーポン割引を適用して予約完了
              </span>
              <p className="text-stone-300 text-xs sm:text-sm leading-relaxed">
                島宿真里、オリビアン小豆島、ベイリゾートホテル小豆島などの宿泊プランを選び、決済時にクーポンを選択すれば宿泊代金から大幅な割引が適用されます。
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
              <Link href="/furusato-tax-hakone-yumoto-gateway-luxury-stay" className="hover:text-amber-800 underline flex items-center gap-1.5 py-1">
                <span>▸</span> 箱根湯本温泉 玄関口の極上湯浴み＆老舗名宿特集
              </Link>
            </li>
            <li>
              <Link href="/furusato-tax-fukuoka-hakata-luxury-gourmet-stay" className="hover:text-amber-800 underline flex items-center gap-1.5 py-1">
                <span>▸</span> 福岡・博多 駅直結ラグジュアリー＆天然温泉スパ特集
              </Link>
            </li>
          </ul>
        </section>
      </div>
    </main>
  );
}
