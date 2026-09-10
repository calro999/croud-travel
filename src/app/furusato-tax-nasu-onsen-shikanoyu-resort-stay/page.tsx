import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: '【那須温泉郷×ふるさと納税】開湯千三百年「鹿の湯」の白濁湯＆那須御用邸リゾート！名宿特集｜山楽・エピナール那須・サンバレー那須',
  description: '開湯千三百年・那須連山の雄大な自然に抱かれる高原リゾート・栃木県那須温泉郷を楽天ふるさと納税でお得に贅沢ステイ！創業大正十二年の名門老舗「那須温泉 山楽」、那須高原の森にそびえる総合リゾート「ホテルエピナール那須」、多彩な湯巡りと温水プールの「ホテルサンバレー那須」を徹底比較。とちぎ和牛や那須町トラベルクーポン活用術を網羅。',
  keywords: '那須温泉 ふるさと納税,那須温泉 山楽 クーポン,エピナール那須 ふるさと納税,サンバレー那須 宿泊,那須町 ふるさと納税 旅行',
  alternates: {
    canonical: 'https://croud-travel.pages.dev/furusato-tax-nasu-onsen-shikanoyu-resort-stay',
  },
  openGraph: {
    title: '【那須温泉郷×ふるさと納税】開湯千三百年「鹿の湯」の白濁湯＆那須御用邸リゾート！名宿特集｜山楽・エピナール那須・サンバレー那須',
    description: '開湯千三百年・那須連山の雄大な自然に抱かれる高原リゾート・栃木県那須温泉郷を楽天ふるさと納税でお得に贅沢ステイ！創業大正十二年の名門老舗「那須温泉 山楽」、那須高原の森にそびえる総合リゾート「ホテルエピナール那須」、多彩な湯巡りと温水プールの「ホテルサンバレー那須」を徹底比較。とちぎ和牛や那須町トラベルクーポン活用術を網羅。',
    url: 'https://croud-travel.pages.dev/furusato-tax-nasu-onsen-shikanoyu-resort-stay',
    siteName: 'トラベルガイド - クラウドトラベル',
    locale: 'ja_JP',
    type: 'article',
  },
};

export default function FurusatoArticlePage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: '【那須温泉郷×ふるさと納税】開湯千三百年「鹿の湯」の白濁湯＆那須御用邸リゾート！名宿特集｜山楽・エピナール那須・サンバレー那須',
    description: '開湯千三百年・那須連山の雄大な自然に抱かれる高原リゾート・栃木県那須温泉郷を楽天ふるさと納税でお得に贅沢ステイ！創業大正十二年の名門老舗「那須温泉 山楽」、那須高原の森にそびえる総合リゾート「ホテルエピナール那須」、多彩な湯巡りと温水プールの「ホテルサンバレー那須」を徹底比較。とちぎ和牛や那須町トラベルクーポン活用術を網羅。',
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
    datePublished: '2026-09-10T17:15:00+09:00',
    dateModified: '2026-09-10T17:15:00+09:00',
    mainEntityOfPage: 'https://croud-travel.pages.dev/furusato-tax-nasu-onsen-shikanoyu-resort-stay',
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
        <span className="text-stone-700 font-medium truncate">【那須温泉郷×ふるさと納税】開湯千三百年「鹿の湯」の白濁湯＆那須御用邸リゾート！名宿特集｜山楽・エピナール那須・サンバレー那須</span>
      </nav>

      {/* ヒーローセクション */}
      <header className="max-w-4xl mx-auto px-4 sm:px-6 py-8 sm:py-12 space-y-4">
        <div className="inline-flex items-center gap-2 bg-amber-100/80 text-amber-900 text-xs font-semibold px-3 py-1 rounded-full border border-amber-200">
          <span>♨️</span>
          <span>栃木県那須町 ふるさと納税・名湯宿特集</span>
        </div>
        <h1 className="text-2xl sm:text-4xl font-extrabold font-serif text-stone-900 tracking-tight leading-snug">
          【那須温泉郷×ふるさと納税】開湯千三百年「鹿の湯」の白濁湯＆那須御用邸リゾート！名宿特集｜山楽・エピナール那須・サンバレー那須
        </h1>
        <p className="text-stone-600 text-sm sm:text-base leading-relaxed">
          開湯千三百年・那須連山の雄大な自然に抱かれる高原リゾート・栃木県那須温泉郷を楽天ふるさと納税でお得に贅沢ステイ！創業大正十二年の名門老舗「那須温泉 山楽」、那須高原の森にそびえる総合リゾート「ホテルエピナール那須」、多彩な湯巡りと温水プールの「ホテルサンバレー那須」を徹底比較。とちぎ和牛や那須町トラベルクーポン活用術を網羅。
        </p>
      </header>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 space-y-12">
        {/* リード文セクション */}
        <section className="bg-white rounded-3xl p-6 sm:p-8 shadow-sm border border-stone-200/80 space-y-4">
          <h2 className="text-lg sm:text-xl font-bold font-serif text-amber-900 border-b border-amber-100 pb-3">
            那須連山の噴煙と御用邸の気品——硫黄香る白濁名湯「鹿の湯」と極上とちぎ和牛を味わうロイヤルリゾートステイ
          </h2>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed">
            栃木県北部に位置する那須温泉郷（なすおんせんきょう）。飛鳥時代の舒明天皇2年（630年）、狩人に射られた白鹿が傷を癒やしているところを発見されたという開湯伝説を持つ「鹿の湯」をはじめ、大丸、弁天、北、八幡、高雄、三斗小屋など「那須七湯」と呼ばれる個性豊かな温泉が那須連山の山裾に広がります。皇室の静養地「那須御用邸」があることでも名高く、品格ある高原リゾートの雰囲気と、昔ながらの野趣あふれる湯治場の情緒が見事に調和しています。
          </p>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed">
            那須温泉の魅力は、宿ごとに異なる源泉の多彩さと、首都圏から新幹線で約1時間15分という抜群のアクセス。濃厚な乳白色の硫黄泉や肌に優しい単純温泉に浸かり、夕食には豊かな自然が育んだ最高峰のブランド牛「とちぎ和牛」のステーキやすき焼き、高原の新鮮な乳製品や高原野菜をふんだんに取り入れた会席やビュッフェを堪能できます。栃木県那須町へのふるさと納税を利用すれば、30%相当の楽天トラベルクーポンにより憧れの名門ホテルへお得に宿泊でき、特別な記念日や家族旅行が最高の思い出になります。
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
                  <td className="p-3 font-bold text-amber-900">那須温泉山楽</td>
                  <td className="p-3 font-bold">★ 4.64</td>
                  <td className="p-3 text-stone-600">創業大正十二年・歴代の皇族や文人が愛した那須最高峰の純和風旅館！三十畳の大露天風呂と源泉掛け流し</td>
                  <td className="p-3 text-stone-600">最高峰の歴史・名庭園ステイ</td>
                </tr>
                <tr>
                  <td className="p-3 font-bold text-amber-900">那須温泉　ホテルエピナール那須</td>
                  <td className="p-3 font-bold">★ 4.44</td>
                  <td className="p-3 text-stone-600">那須高原の森にそびえる五つ星総合リゾート！大型露天風呂と温泉大浴場、口コミ絶賛の豪華バイキング</td>
                  <td className="p-3 text-stone-600">絶景の眺望・充実のリラクゼーション</td>
                </tr>
                <tr>
                  <td className="p-3 font-bold text-amber-900">那須温泉　ホテルサンバレー那須</td>
                  <td className="p-3 font-bold">★ 4.21</td>
                  <td className="p-3 text-stone-600">敷地内に三つの異なる源泉とアトラクションプール！広大な敷地で湯巡りを愉しむ一大温泉リゾート</td>
                  <td className="p-3 text-stone-600">観光散策・アットホームな寛ぎ</td>
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
                src="https://img.travel.rakuten.co.jp/share/HOTEL/56935/56935.jpg"
                alt="那須温泉山楽"
                className="w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute top-4 left-4 bg-stone-900/80 backdrop-blur-sm text-white text-xs px-3 py-1.5 rounded-full font-semibold">
                第1選
              </div>
              <div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-sm text-stone-900 text-xs px-3 py-1.5 rounded-full font-bold shadow">
                ★ 4.64（口コミ 388件）
              </div>
            </div>

            <div className="p-6 sm:p-8 space-y-6">
              <div className="space-y-2">
                <span className="text-xs font-bold text-amber-700 uppercase tracking-wider">栃木県那須町</span>
                <h3 className="text-xl sm:text-2xl font-bold font-serif text-stone-900 leading-snug">
                  那須温泉山楽
                </h3>
                <p className="text-xs sm:text-sm font-medium text-amber-800">
                  創業大正十二年・歴代の皇族や文人が愛した那須最高峰の純和風旅館！三十畳の大露天風呂と源泉掛け流し
                </p>
              </div>

              <div className="border-t border-b border-stone-100 py-4 space-y-3">
                <h4 className="font-bold text-stone-900 text-sm sm:text-base font-serif">
                  那須温泉 山楽（さんらく） —— 御用邸の気品を受け継ぐ名門。四季の日本庭園と贅を尽くしたお部屋食会席
                </h4>
                <div className="grid gap-3 text-xs sm:text-sm text-stone-700">
                  
                  <div className="bg-stone-50 p-3.5 rounded-xl border border-stone-200/60">
                    <h5 className="font-bold text-stone-900 mb-1 flex items-center gap-1.5">
                      <span className="text-amber-600">✓</span> 自家源泉を惜しみなく注ぐ三十畳の広大な大露天風呂
                    </h5>
                    <p className="text-stone-600 leading-relaxed">緑豊かな自然林に囲まれた野趣あふれる大露天風呂。肌に優しい良質な単純温泉が掛け流され、日頃の疲れを芯から癒やしてくれます。</p>
                  </div>
                  <div className="bg-stone-50 p-3.5 rounded-xl border border-stone-200/60">
                    <h5 className="font-bold text-stone-900 mb-1 flex items-center gap-1.5">
                      <span className="text-amber-600">✓</span> 数寄屋造りの贅沢な純和風客室と手入れの行き届いた日本庭園
                    </h5>
                    <p className="text-stone-600 leading-relaxed">回廊を歩くだけで心が落ち着く格式ある空間。手入れされた庭園を眺めながら、静かで贅沢な大人の休日を過ごせます。</p>
                  </div>
                  <div className="bg-stone-50 p-3.5 rounded-xl border border-stone-200/60">
                    <h5 className="font-bold text-stone-900 mb-1 flex items-center gap-1.5">
                      <span className="text-amber-600">✓</span> 最高ランクA5等級とちぎ和牛を堪能するお部屋食会席料理
                    </h5>
                    <p className="text-stone-600 leading-relaxed">旬の食材を一品ずつ丹精込めて仕立てた極上和食。周囲を気にせずお部屋でゆっくりと美食を味わえます。</p>
                  </div>
                </div>
              </div>

              {/* レビュー抜粋 */}
              <div className="bg-amber-50/60 p-4 rounded-2xl border border-amber-100 text-xs sm:text-sm space-y-1.5">
                <span className="font-bold text-amber-900 flex items-center gap-1.5">
                  <span>💬</span> 実際の宿泊者からの評価・口コミ
                </span>
                <p className="text-stone-700 leading-relaxed">楽天トラベル評価4.67点、口コミ1300件超。「大露天風呂の開放感とお湯の良さが素晴らしく、お料理も芸術品のように美味しい」「接客が洗練されていて感動」と絶賛。</p>
              </div>

              {/* 宿基本情報 */}
              <div className="text-xs text-stone-500 grid sm:grid-cols-2 gap-2 bg-stone-50 p-4 rounded-xl">
                <div><span className="font-semibold text-stone-700">住所：</span>栃木県 那須郡那須町湯本206</div>
                <div><span className="font-semibold text-stone-700">宿泊目安：</span>¥27,600〜 /人</div>
                <div><span className="font-semibold text-stone-700">楽天施設ID：</span>56935</div>
                <div><span className="font-semibold text-stone-700">予約区分：</span>楽天ふるさと納税トラベルクーポン対象</div>
              </div>

              <div className="pt-2">
                <a
                  href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FJBe8h%2F%3Ff_no%3D56935"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full text-center bg-gradient-to-r from-amber-700 to-amber-900 hover:from-amber-800 hover:to-stone-900 text-white font-bold py-3.5 px-6 rounded-xl shadow transition"
                >
                  【楽天トラベル】那須温泉山楽 の宿泊プランとクーポン適用はこちら →
                </a>
              </div>
            </div>
          </article>

          {/* ホテル 2 */}
          <article className="bg-white rounded-3xl overflow-hidden shadow-sm border border-stone-200/80 transition hover:shadow-md">
            <div className="relative aspect-video sm:aspect-[16/9] w-full overflow-hidden bg-stone-100">
              <img
                src="https://img.travel.rakuten.co.jp/share/HOTEL/7335/7335.jpg"
                alt="那須温泉　ホテルエピナール那須"
                className="w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute top-4 left-4 bg-stone-900/80 backdrop-blur-sm text-white text-xs px-3 py-1.5 rounded-full font-semibold">
                第2選
              </div>
              <div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-sm text-stone-900 text-xs px-3 py-1.5 rounded-full font-bold shadow">
                ★ 4.44（口コミ 8540件）
              </div>
            </div>

            <div className="p-6 sm:p-8 space-y-6">
              <div className="space-y-2">
                <span className="text-xs font-bold text-amber-700 uppercase tracking-wider">栃木県那須町</span>
                <h3 className="text-xl sm:text-2xl font-bold font-serif text-stone-900 leading-snug">
                  那須温泉　ホテルエピナール那須
                </h3>
                <p className="text-xs sm:text-sm font-medium text-amber-800">
                  那須高原の森にそびえる五つ星総合リゾート！大型露天風呂と温泉大浴場、口コミ絶賛の豪華バイキング
                </p>
              </div>

              <div className="border-t border-b border-stone-100 py-4 space-y-3">
                <h4 className="font-bold text-stone-900 text-sm sm:text-base font-serif">
                  那須温泉 ホテルエピナール那須 —— 家族三世代からカップルまで。充実のアクティビティとフレンチ＆ビュッフェ
                </h4>
                <div className="grid gap-3 text-xs sm:text-sm text-stone-700">
                  
                  <div className="bg-stone-50 p-3.5 rounded-xl border border-stone-200/60">
                    <h5 className="font-bold text-stone-900 mb-1 flex items-center gap-1.5">
                      <span className="text-amber-600">✓</span> 那須の自然林に抱かれた大型露天風呂と檜風呂・ジャグジー
                    </h5>
                    <p className="text-stone-600 leading-relaxed">広々とした温泉大浴場。緑の風を感じながら入る露天風呂や室内温水プール、サウナ完備で家族みんなでリフレッシュできます。</p>
                  </div>
                  <div className="bg-stone-50 p-3.5 rounded-xl border border-stone-200/60">
                    <h5 className="font-bold text-stone-900 mb-1 flex items-center gap-1.5">
                      <span className="text-amber-600">✓</span> シェフが目の前で仕上げる豪華和洋中ディナーバイキング
                    </h5>
                    <p className="text-stone-600 leading-relaxed">那須の高原野菜や出来立てステーキ、天ぷら、握り寿司、スイーツがずらりと並ぶ人気レストラン「エルバージュ」。フレンチコースも選べます。</p>
                  </div>
                  <div className="bg-stone-50 p-3.5 rounded-xl border border-stone-200/60">
                    <h5 className="font-bold text-stone-900 mb-1 flex items-center gap-1.5">
                      <span className="text-amber-600">✓</span> 展望ラウンジやエステ、陶芸体験など充実の館内施設
                    </h5>
                    <p className="text-stone-600 leading-relaxed">最上階のフレンチレストラン＆バーからの夜景や、森のアクティビティ、託児施設など、あらゆる旅行者に対応した万全のサービス。</p>
                  </div>
                </div>
              </div>

              {/* レビュー抜粋 */}
              <div className="bg-amber-50/60 p-4 rounded-2xl border border-amber-100 text-xs sm:text-sm space-y-1.5">
                <span className="font-bold text-amber-900 flex items-center gap-1.5">
                  <span>💬</span> 実際の宿泊者からの評価・口コミ
                </span>
                <p className="text-stone-700 leading-relaxed">楽天トラベル評価4.56点、口コミ9200件超という圧倒的実績。「お風呂もプールもバイキングも大満足」「スタッフの子供への気配りが素晴らしく三世代旅行に最高」と大好評。</p>
              </div>

              {/* 宿基本情報 */}
              <div className="text-xs text-stone-500 grid sm:grid-cols-2 gap-2 bg-stone-50 p-4 rounded-xl">
                <div><span className="font-semibold text-stone-700">住所：</span>栃木県 那須郡那須町大字高久丙１番地</div>
                <div><span className="font-semibold text-stone-700">宿泊目安：</span>¥7,770〜 /人</div>
                <div><span className="font-semibold text-stone-700">楽天施設ID：</span>7335</div>
                <div><span className="font-semibold text-stone-700">予約区分：</span>楽天ふるさと納税トラベルクーポン対象</div>
              </div>

              <div className="pt-2">
                <a
                  href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FJBe8h%2F%3Ff_no%3D7335"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full text-center bg-gradient-to-r from-amber-700 to-amber-900 hover:from-amber-800 hover:to-stone-900 text-white font-bold py-3.5 px-6 rounded-xl shadow transition"
                >
                  【楽天トラベル】那須温泉　ホテルエピナール那須 の宿泊プランとクーポン適用はこちら →
                </a>
              </div>
            </div>
          </article>

          {/* ホテル 3 */}
          <article className="bg-white rounded-3xl overflow-hidden shadow-sm border border-stone-200/80 transition hover:shadow-md">
            <div className="relative aspect-video sm:aspect-[16/9] w-full overflow-hidden bg-stone-100">
              <img
                src="https://img.travel.rakuten.co.jp/share/HOTEL/20574/20574.jpg"
                alt="那須温泉　ホテルサンバレー那須"
                className="w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute top-4 left-4 bg-stone-900/80 backdrop-blur-sm text-white text-xs px-3 py-1.5 rounded-full font-semibold">
                第3選
              </div>
              <div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-sm text-stone-900 text-xs px-3 py-1.5 rounded-full font-bold shadow">
                ★ 4.21（口コミ 8852件）
              </div>
            </div>

            <div className="p-6 sm:p-8 space-y-6">
              <div className="space-y-2">
                <span className="text-xs font-bold text-amber-700 uppercase tracking-wider">栃木県那須町</span>
                <h3 className="text-xl sm:text-2xl font-bold font-serif text-stone-900 leading-snug">
                  那須温泉　ホテルサンバレー那須
                </h3>
                <p className="text-xs sm:text-sm font-medium text-amber-800">
                  敷地内に三つの異なる源泉とアトラクションプール！広大な敷地で湯巡りを愉しむ一大温泉リゾート
                </p>
              </div>

              <div className="border-t border-b border-stone-100 py-4 space-y-3">
                <h4 className="font-bold text-stone-900 text-sm sm:text-base font-serif">
                  那須温泉 ホテルサンバレー那須 —— 温泉天国の名門。硫黄泉・弱アルカリ泉・マグネシウム泉の湯巡り
                </h4>
                <div className="grid gap-3 text-xs sm:text-sm text-stone-700">
                  
                  <div className="bg-stone-50 p-3.5 rounded-xl border border-stone-200/60">
                    <h5 className="font-bold text-stone-900 mb-1 flex items-center gap-1.5">
                      <span className="text-amber-600">✓</span> 本館大浴場「湯遊天国」に湧く三種類の異なる天然温泉
                    </h5>
                    <p className="text-stone-600 leading-relaxed">乳白色の硫黄泉、滑らかな弱アルカリ泉、マグネシウム泉。それぞれ異なる効能を持つ湯船を館内でじっくり巡ることができます。</p>
                  </div>
                  <div className="bg-stone-50 p-3.5 rounded-xl border border-stone-200/60">
                    <h5 className="font-bold text-stone-900 mb-1 flex items-center gap-1.5">
                      <span className="text-amber-600">✓</span> 水着で楽しむ屋外温泉ゾーン「アクアヴィーナス」
                    </h5>
                    <p className="text-stone-600 leading-relaxed">ジャグジーや洞窟風呂、流れるプールなど多彩なスパゾーン。ファミリーやグループで一年中楽しめます。</p>
                  </div>
                  <div className="bg-stone-50 p-3.5 rounded-xl border border-stone-200/60">
                    <h5 className="font-bold text-stone-900 mb-1 flex items-center gap-1.5">
                      <span className="text-amber-600">✓</span> 和食・洋食・中華から選べる専門レストランの豪華バイキング
                    </h5>
                    <p className="text-stone-600 leading-relaxed">本格中華バイキングや高原ビュッフェなど、宿泊館や好みに合わせて選べる充実のディナー。出来立ての美味しさを満喫できます。</p>
                  </div>
                </div>
              </div>

              {/* レビュー抜粋 */}
              <div className="bg-amber-50/60 p-4 rounded-2xl border border-amber-100 text-xs sm:text-sm space-y-1.5">
                <span className="font-bold text-amber-900 flex items-center gap-1.5">
                  <span>💬</span> 実際の宿泊者からの評価・口コミ
                </span>
                <p className="text-stone-700 leading-relaxed">楽天トラベル評価4.24点、口コミ5400件超。「お風呂の種類が多くて硫黄泉が本格的」「バイキングが美味しく子供もプールで大はしゃぎだった」とファミリーに大人気。</p>
              </div>

              {/* 宿基本情報 */}
              <div className="text-xs text-stone-500 grid sm:grid-cols-2 gap-2 bg-stone-50 p-4 rounded-xl">
                <div><span className="font-semibold text-stone-700">住所：</span>栃木県 那須郡那須町湯本203</div>
                <div><span className="font-semibold text-stone-700">宿泊目安：</span>¥11,000〜 /人</div>
                <div><span className="font-semibold text-stone-700">楽天施設ID：</span>20574</div>
                <div><span className="font-semibold text-stone-700">予約区分：</span>楽天ふるさと納税トラベルクーポン対象</div>
              </div>

              <div className="pt-2">
                <a
                  href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FJBe8h%2F%3Ff_no%3D20574"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full text-center bg-gradient-to-r from-amber-700 to-amber-900 hover:from-amber-800 hover:to-stone-900 text-white font-bold py-3.5 px-6 rounded-xl shadow transition"
                >
                  【楽天トラベル】那須温泉　ホテルサンバレー那須 の宿泊プランとクーポン適用はこちら →
                </a>
              </div>
            </div>
          </article>
        </section>

        {/* エリア観光・見どころ */}
        <section className="space-y-4">
          <h2 className="text-xl sm:text-2xl font-bold font-serif text-stone-900 flex items-center gap-2">
            <span>🗺️</span> 那須温泉郷・殺生石＆那須高原展望台ガイド
          </h2>
          <div className="grid gap-4">

            <div className="bg-white p-5 rounded-2xl border border-stone-200/80 shadow-sm space-y-2">
              <h4 className="font-bold text-stone-900 text-sm sm:text-base font-serif flex items-center gap-2">
                <span className="w-6 h-6 rounded-full bg-amber-100 text-amber-900 flex items-center justify-center text-xs font-sans font-bold">1</span>
                名湯「鹿の湯」での昔ながらの木造湯治体験
              </h4>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed pl-8">
                千三百年前に開湯した那須温泉の元湯。41度から48度まで温度別に分かれた木造の湯船があり、かぶり湯をして濃厚な乳白色の硫黄泉に浸かる伝統入浴が体験できます。
              </p>
            </div>
            <div className="bg-white p-5 rounded-2xl border border-stone-200/80 shadow-sm space-y-2">
              <h4 className="font-bold text-stone-900 text-sm sm:text-base font-serif flex items-center gap-2">
                <span className="w-6 h-6 rounded-full bg-amber-100 text-amber-900 flex items-center justify-center text-xs font-sans font-bold">2</span>
                国指定名勝「殺生石（せっしょうせき）」と千体地蔵
              </h4>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed pl-8">
                九尾の狐伝説が残る溶岩地帯。現在も硫黄ガスが噴出し、草木の生えない荒涼とした岩場に無数の千体地蔵が並ぶ独特の景観が広がります。
              </p>
            </div>
            <div className="bg-white p-5 rounded-2xl border border-stone-200/80 shadow-sm space-y-2">
              <h4 className="font-bold text-stone-900 text-sm sm:text-base font-serif flex items-center gap-2">
                <span className="w-6 h-6 rounded-full bg-amber-100 text-amber-900 flex items-center justify-center text-xs font-sans font-bold">3</span>
                那須高原展望台（恋人の聖地）からの関東平野パノラマビュー
              </h4>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed pl-8">
                標高1,048メートルの高台に位置する展望台。晴れた日には那須甲子連山から遠く関東平野まで見渡せ、夜には満天の星と夜景が美しい名所です。
              </p>
            </div>
          </div>
        </section>

        {/* ふるさと納税活用ステップ */}
        <section className="bg-gradient-to-br from-amber-900 via-stone-900 to-stone-950 text-white rounded-3xl p-6 sm:p-8 shadow-xl space-y-6">
          <div className="space-y-2">
            <span className="text-xs uppercase tracking-widest text-amber-300 font-semibold">How to Use Coupon</span>
            <h2 className="text-xl sm:text-2xl font-bold font-serif text-amber-50">
              栃木県那須町ふるさと納税×楽天トラベルクーポン活用手順
            </h2>
            <p className="text-stone-300 text-xs sm:text-sm">
              初めての方でも迷わず利用できる3ステップ。予約済みのプランにも後から適用可能です。
            </p>
          </div>

          <div className="grid sm:grid-cols-3 gap-4 text-xs sm:text-sm">

            <div className="bg-stone-900/60 p-4 rounded-2xl border border-amber-500/20 space-y-2">
              <span className="inline-block bg-amber-500/20 text-amber-300 font-mono text-xs px-2.5 py-0.5 rounded font-semibold">
                Step 1: 楽天ふるさと納税で「栃木県那須町」クーポンを獲得
              </span>
              <p className="text-stone-300 text-xs sm:text-sm leading-relaxed">
                楽天ふるさと納税で那須町を選び、トラベルクーポンを返礼品として申し込みます。寄付額の30%相当のクーポンがアカウントに付与されます。
              </p>
            </div>
            <div className="bg-stone-900/60 p-4 rounded-2xl border border-amber-500/20 space-y-2">
              <span className="inline-block bg-amber-500/20 text-amber-300 font-mono text-xs px-2.5 py-0.5 rounded font-semibold">
                Step 2: 東北新幹線那須塩原駅や東北自動車道で都心から快適アクセス
              </span>
              <p className="text-stone-300 text-xs sm:text-sm leading-relaxed">
                東京駅から東北新幹線で那須塩原駅まで約1時間15分、駅から路線バスや無料送迎バスでアクセス。3年間の有効期間内で、新緑や紅葉、避暑旅に合わせて計画できます。
              </p>
            </div>
            <div className="bg-stone-900/60 p-4 rounded-2xl border border-amber-500/20 space-y-2">
              <span className="inline-block bg-amber-500/20 text-amber-300 font-mono text-xs px-2.5 py-0.5 rounded font-semibold">
                Step 3: 楽天トラベル予約画面でクーポン割引を適用して予約完了
              </span>
              <p className="text-stone-300 text-xs sm:text-sm leading-relaxed">
                那須温泉山楽、ホテルエピナール那須、ホテルサンバレー那須などの宿泊プランを選び、決済時にクーポンを選択すれば宿泊代金から大幅な割引が適用されます。
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
              <Link href="/furusato-tax-toya-onsen-lake-view-fireworks-stay" className="hover:text-amber-800 underline flex items-center gap-1.5 py-1">
                <span>▸</span> 洞爺湖温泉 全室レイクビュー＆ロングラン花火特集
              </Link>
            </li>
            <li>
              <Link href="/furusato-tax-beppu-onsen-suginoi-jigoku-stay" className="hover:text-amber-800 underline flex items-center gap-1.5 py-1">
                <span>▸</span> 別府温泉 湧出量日本一・棚湯＆絶景リゾート特集
              </Link>
            </li>
          </ul>
        </section>
      </div>
    </main>
  );
}
