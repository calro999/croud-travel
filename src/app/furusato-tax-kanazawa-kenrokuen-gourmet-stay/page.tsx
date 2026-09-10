import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: '【金沢×ふるさと納税】兼六園の美景＆近江町市場の海の幸！加賀百万石の名門ホテル特集｜ホテル日航金沢・白鳥路山楽・THE HOTEL SANRAKU',
  description: '北陸新幹線で東京から最速約2時間15分！加賀百万石の城下町・石川県金沢市を楽天ふるさと納税でお得に贅沢ステイ。金沢駅東口直結のランドマーク「ホテル日航金沢」、兼六園すぐ隣で天然温泉が湧くクラシック宿「金沢白鳥路 ホテル山楽」、近江町市場徒歩すぐの中庭庭園ホテル「THE HOTEL SANRAKU KANAZAWA」を徹底比較。金沢市トラベルクーポン活用術を網羅。',
  keywords: '金沢 ホテル ふるさと納税,ホテル日航金沢 ふるさと納税,金沢白鳥路ホテル山楽 クーポン,THE HOTEL SANRAKU KANAZAWA 宿泊,金沢市 ふるさと納税 旅行',
  alternates: {
    canonical: 'https://croud-travel.pages.dev/furusato-tax-kanazawa-kenrokuen-gourmet-stay',
  },
  openGraph: {
    title: '【金沢×ふるさと納税】兼六園の美景＆近江町市場の海の幸！加賀百万石の名門ホテル特集｜ホテル日航金沢・白鳥路山楽・THE HOTEL SANRAKU',
    description: '北陸新幹線で東京から最速約2時間15分！加賀百万石の城下町・石川県金沢市を楽天ふるさと納税でお得に贅沢ステイ。金沢駅東口直結のランドマーク「ホテル日航金沢」、兼六園すぐ隣で天然温泉が湧くクラシック宿「金沢白鳥路 ホテル山楽」、近江町市場徒歩すぐの中庭庭園ホテル「THE HOTEL SANRAKU KANAZAWA」を徹底比較。金沢市トラベルクーポン活用術を網羅。',
    url: 'https://croud-travel.pages.dev/furusato-tax-kanazawa-kenrokuen-gourmet-stay',
    siteName: 'トラベルガイド - クラウドトラベル',
    locale: 'ja_JP',
    type: 'article',
  },
};

export default function FurusatoArticlePage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: '【金沢×ふるさと納税】兼六園の美景＆近江町市場の海の幸！加賀百万石の名門ホテル特集｜ホテル日航金沢・白鳥路山楽・THE HOTEL SANRAKU',
    description: '北陸新幹線で東京から最速約2時間15分！加賀百万石の城下町・石川県金沢市を楽天ふるさと納税でお得に贅沢ステイ。金沢駅東口直結のランドマーク「ホテル日航金沢」、兼六園すぐ隣で天然温泉が湧くクラシック宿「金沢白鳥路 ホテル山楽」、近江町市場徒歩すぐの中庭庭園ホテル「THE HOTEL SANRAKU KANAZAWA」を徹底比較。金沢市トラベルクーポン活用術を網羅。',
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
    datePublished: '2026-09-11T01:10:00+09:00',
    dateModified: '2026-09-11T01:10:00+09:00',
    mainEntityOfPage: 'https://croud-travel.pages.dev/furusato-tax-kanazawa-kenrokuen-gourmet-stay',
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
        <span className="text-stone-700 font-medium truncate">【金沢×ふるさと納税】兼六園の美景＆近江町市場の海の幸！加賀百万石の名門ホテル特集｜ホテル日航金沢・白鳥路山楽・THE HOTEL SANRAKU</span>
      </nav>

      {/* ヒーローセクション */}
      <header className="max-w-4xl mx-auto px-4 sm:px-6 py-8 sm:py-12 space-y-4">
        <div className="inline-flex items-center gap-2 bg-amber-100/80 text-amber-900 text-xs font-semibold px-3 py-1 rounded-full border border-amber-200">
          <span>♨️</span>
          <span>石川県金沢市（兼六園・ひがし茶屋街） ふるさと納税・名湯宿特集</span>
        </div>
        <h1 className="text-2xl sm:text-4xl font-extrabold font-serif text-stone-900 tracking-tight leading-snug">
          【金沢×ふるさと納税】兼六園の美景＆近江町市場の海の幸！加賀百万石の名門ホテル特集｜ホテル日航金沢・白鳥路山楽・THE HOTEL SANRAKU
        </h1>
        <p className="text-stone-600 text-sm sm:text-base leading-relaxed">
          北陸新幹線で東京から最速約2時間15分！加賀百万石の城下町・石川県金沢市を楽天ふるさと納税でお得に贅沢ステイ。金沢駅東口直結のランドマーク「ホテル日航金沢」、兼六園すぐ隣で天然温泉が湧くクラシック宿「金沢白鳥路 ホテル山楽」、近江町市場徒歩すぐの中庭庭園ホテル「THE HOTEL SANRAKU KANAZAWA」を徹底比較。金沢市トラベルクーポン活用術を網羅。
        </p>
      </header>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 space-y-12">
        {/* リード文セクション */}
        <section className="bg-white rounded-3xl p-6 sm:p-8 shadow-sm border border-stone-200/80 space-y-4">
          <h2 className="text-lg sm:text-xl font-bold font-serif text-amber-900 border-b border-amber-100 pb-3">
            雪吊りの兼六園と紅殻格子の茶屋街——加賀百万石の美意識と日本海の極上鮮魚を味わう雅な古都ステイ
          </h2>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed">
            石川県の中央部に位置し、前田家加賀百万石の栄華を今に伝える城下町・金沢。国の特別名勝「兼六園」では春の桜、初夏のかきつばた、秋の紅葉、そして冬の風物詩「雪吊り」と四季を通じて日本庭園の最高峰の景観が広がります。金沢城公園の壮麗な菱櫓・五十間長屋や、石畳に格子戸が連なる「ひがし茶屋街」「主計町茶屋街」、現代アートの発信地「金沢21世紀美術館」など、伝統とモダンが美しく共存する日本有数の文化都市です。
          </p>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed">
            金沢滞在の大きな楽しみは、「金沢の台所」近江町市場から届く新鮮なのどぐろ、加能ガニ、甘エビ、香箱ガニ、ブリなどの日本海の幸と、伝統の加賀野菜を取り入れた治部煮などの本格加賀料理。石川県金沢市へのふるさと納税を利用すれば、30%相当の楽天トラベルクーポンにより憧れのハイクラスホテルへお得に宿泊でき、観光・グルメ・文化体験を最高に贅沢にアップグレードできます。
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
                  <td className="p-3 font-bold text-amber-900">ホテル日航金沢</td>
                  <td className="p-3 font-bold">★ 4.7</td>
                  <td className="p-3 text-stone-600">JR金沢駅東口地下直結・地上30階の超高層ランドマーク！金沢の街並みを一望するスカイビューと朝食日本一クラスの美食</td>
                  <td className="p-3 text-stone-600">最高峰の格式・贅沢ステイ</td>
                </tr>
                <tr>
                  <td className="p-3 font-bold text-amber-900">金沢白鳥路　ホテル山楽</td>
                  <td className="p-3 font-bold">★ 4.55</td>
                  <td className="p-3 text-stone-600">兼六園・金沢城公園へ徒歩約3分！大正ロマンのステンドグラスと金沢市内屈指の美肌天然温泉</td>
                  <td className="p-3 text-stone-600">抜群の立地・名湯満喫</td>
                </tr>
                <tr>
                  <td className="p-3 font-bold text-amber-900">ＴＨＥ　ＨＯＴＥＬ　ＳＡＮＲＡＫＵ　ＫＡＮＡＺＡＷＡ（ザ　ホテル山楽　金沢）</td>
                  <td className="p-3 font-bold">★ 4.7</td>
                  <td className="p-3 text-stone-600">近江町市場まで徒歩1分！四季を映す中庭日本庭園の滝と贅を尽くした全室クラシックスイート仕様</td>
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
                src="https://img.travel.rakuten.co.jp/share/HOTEL/2050/2050.jpg"
                alt="ホテル日航金沢"
                className="w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute top-4 left-4 bg-stone-900/80 backdrop-blur-sm text-white text-xs px-3 py-1.5 rounded-full font-semibold">
                第1選
              </div>
              <div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-sm text-stone-900 text-xs px-3 py-1.5 rounded-full font-bold shadow">
                ★ 4.7（口コミ 2812件）
              </div>
            </div>

            <div className="p-6 sm:p-8 space-y-6">
              <div className="space-y-2">
                <span className="text-xs font-bold text-amber-700 uppercase tracking-wider">石川県金沢市（兼六園・ひがし茶屋街）</span>
                <h3 className="text-xl sm:text-2xl font-bold font-serif text-stone-900 leading-snug">
                  ホテル日航金沢
                </h3>
                <p className="text-xs sm:text-sm font-medium text-amber-800">
                  JR金沢駅東口地下直結・地上30階の超高層ランドマーク！金沢の街並みを一望するスカイビューと朝食日本一クラスの美食
                </p>
              </div>

              <div className="border-t border-b border-stone-100 py-4 space-y-3">
                <h4 className="font-bold text-stone-900 text-sm sm:text-base font-serif">
                  ホテル日航金沢 —— 北陸随一の高層ホテル。地上130mからのパノラマと一流シェフが織りなす極上ダイニング
                </h4>
                <div className="grid gap-3 text-xs sm:text-sm text-stone-700">
                  
                  <div className="bg-stone-50 p-3.5 rounded-xl border border-stone-200/60">
                    <h5 className="font-bold text-stone-900 mb-1 flex items-center gap-1.5">
                      <span className="text-amber-600">✓</span> JR金沢駅東口から地下道直結で徒歩わずか3分の圧倒的利便性
                    </h5>
                    <p className="text-stone-600 leading-relaxed">新幹線改札から雨や雪に濡れずにチェックイン。金沢駅バスターミナルも目の前で、市内観光の拠点として最高峰です。</p>
                  </div>
                  <div className="bg-stone-50 p-3.5 rounded-xl border border-stone-200/60">
                    <h5 className="font-bold text-stone-900 mb-1 flex items-center gap-1.5">
                      <span className="text-amber-600">✓</span> 全客室が17階以上の高層階に位置する贅沢なパノラマビュー
                    </h5>
                    <p className="text-stone-600 leading-relaxed">客室の大きな窓から金沢市街や日本海、白山連峰を一望。夜には宝石箱のような夜景が広がります。</p>
                  </div>
                  <div className="bg-stone-50 p-3.5 rounded-xl border border-stone-200/60">
                    <h5 className="font-bold text-stone-900 mb-1 flex items-center gap-1.5">
                      <span className="text-amber-600">✓</span> 楽天トラベル朝食フェスティバル上位の豪華朝食バイキング
                    </h5>
                    <p className="text-stone-600 leading-relaxed">名物の車麩フレンチトーストや近江町市場直送の刺身、郷土料理治部煮など、贅を尽くした朝の食体験が評判です。</p>
                  </div>
                </div>
              </div>

              {/* レビュー抜粋 */}
              <div className="bg-amber-50/60 p-4 rounded-2xl border border-amber-100 text-xs sm:text-sm space-y-1.5">
                <span className="font-bold text-amber-900 flex items-center gap-1.5">
                  <span>💬</span> 実際の宿泊者からの評価・口コミ
                </span>
                <p className="text-stone-700 leading-relaxed">楽天トラベル評価4.70点、口コミ7000件超。「駅直結で立地最高、お部屋からの眺望と朝食の美味しさが異次元」「スタッフのサービスが洗練されていて金沢ならここ一択」と絶賛。</p>
              </div>

              {/* 宿基本情報 */}
              <div className="text-xs text-stone-500 grid sm:grid-cols-2 gap-2 bg-stone-50 p-4 rounded-xl">
                <div><span className="font-semibold text-stone-700">住所：</span>石川県 金沢市本町2-15-1</div>
                <div><span className="font-semibold text-stone-700">宿泊目安：</span>¥10,200〜 /人</div>
                <div><span className="font-semibold text-stone-700">楽天施設ID：</span>2050</div>
                <div><span className="font-semibold text-stone-700">予約区分：</span>楽天ふるさと納税トラベルクーポン対象</div>
              </div>

              <div className="pt-2">
                <a
                  href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FJBe8h%2F%3Ff_no%3D2050"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full text-center bg-gradient-to-r from-amber-700 to-amber-900 hover:from-amber-800 hover:to-stone-900 text-white font-bold py-3.5 px-6 rounded-xl shadow transition"
                >
                  【楽天トラベル】ホテル日航金沢 の宿泊プランとクーポン適用はこちら →
                </a>
              </div>
            </div>
          </article>

          {/* ホテル 2 */}
          <article className="bg-white rounded-3xl overflow-hidden shadow-sm border border-stone-200/80 transition hover:shadow-md">
            <div className="relative aspect-video sm:aspect-[16/9] w-full overflow-hidden bg-stone-100">
              <img
                src="https://img.travel.rakuten.co.jp/share/HOTEL/9004/9004.jpg"
                alt="金沢白鳥路　ホテル山楽"
                className="w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute top-4 left-4 bg-stone-900/80 backdrop-blur-sm text-white text-xs px-3 py-1.5 rounded-full font-semibold">
                第2選
              </div>
              <div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-sm text-stone-900 text-xs px-3 py-1.5 rounded-full font-bold shadow">
                ★ 4.55（口コミ 2831件）
              </div>
            </div>

            <div className="p-6 sm:p-8 space-y-6">
              <div className="space-y-2">
                <span className="text-xs font-bold text-amber-700 uppercase tracking-wider">石川県金沢市（兼六園・ひがし茶屋街）</span>
                <h3 className="text-xl sm:text-2xl font-bold font-serif text-stone-900 leading-snug">
                  金沢白鳥路　ホテル山楽
                </h3>
                <p className="text-xs sm:text-sm font-medium text-amber-800">
                  兼六園・金沢城公園へ徒歩約3分！大正ロマンのステンドグラスと金沢市内屈指の美肌天然温泉
                </p>
              </div>

              <div className="border-t border-b border-stone-100 py-4 space-y-3">
                <h4 className="font-bold text-stone-900 text-sm sm:text-base font-serif">
                  金沢白鳥路 ホテル山楽 —— 金沢城の麓に佇むクラシックホテル。自家源泉の琥珀色天然温泉と加賀会席
                </h4>
                <div className="grid gap-3 text-xs sm:text-sm text-stone-700">
                  
                  <div className="bg-stone-50 p-3.5 rounded-xl border border-stone-200/60">
                    <h5 className="font-bold text-stone-900 mb-1 flex items-center gap-1.5">
                      <span className="text-amber-600">✓</span> 金沢城公園に隣接し兼六園や21世紀美術館へも徒歩すぐの好立地
                    </h5>
                    <p className="text-stone-600 leading-relaxed">早朝の無料開園時の兼六園散歩に最適。緑豊かな白鳥路の遊歩道に面し、静寂な大人の時間を過ごせます。</p>
                  </div>
                  <div className="bg-stone-50 p-3.5 rounded-xl border border-stone-200/60">
                    <h5 className="font-bold text-stone-900 mb-1 flex items-center gap-1.5">
                      <span className="text-amber-600">✓</span> 敷地内から湧出する炭酸水素塩泉の自家源泉「美肌の湯」
                    </h5>
                    <p className="text-stone-600 leading-relaxed">金沢市街地では希少な本格天然温泉。とろりとした琥珀色のお湯が旅の疲れを優しく解きほぐします。</p>
                  </div>
                  <div className="bg-stone-50 p-3.5 rounded-xl border border-stone-200/60">
                    <h5 className="font-bold text-stone-900 mb-1 flex items-center gap-1.5">
                      <span className="text-amber-600">✓</span> 大正ロマン薫るステンドグラスのロビーと伝統の加賀会席料理
                    </h5>
                    <p className="text-stone-600 leading-relaxed">九谷焼や金箔をあしらった気品ある空間。のどぐろや能登牛、加賀野菜を贅沢に使った料理を堪能できます。</p>
                  </div>
                </div>
              </div>

              {/* レビュー抜粋 */}
              <div className="bg-amber-50/60 p-4 rounded-2xl border border-amber-100 text-xs sm:text-sm space-y-1.5">
                <span className="font-bold text-amber-900 flex items-center gap-1.5">
                  <span>💬</span> 実際の宿泊者からの評価・口コミ
                </span>
                <p className="text-stone-700 leading-relaxed">楽天トラベル評価4.55点、口コミ3400件超。「兼六園がすぐ隣で観光に最高、天然温泉がお肌すべすべになった」「クラシカルなステンドグラスが美しくお料理も絶品」と大好評。</p>
              </div>

              {/* 宿基本情報 */}
              <div className="text-xs text-stone-500 grid sm:grid-cols-2 gap-2 bg-stone-50 p-4 rounded-xl">
                <div><span className="font-semibold text-stone-700">住所：</span>石川県 金沢市丸の内6-3</div>
                <div><span className="font-semibold text-stone-700">宿泊目安：</span>¥7,250〜 /人</div>
                <div><span className="font-semibold text-stone-700">楽天施設ID：</span>9004</div>
                <div><span className="font-semibold text-stone-700">予約区分：</span>楽天ふるさと納税トラベルクーポン対象</div>
              </div>

              <div className="pt-2">
                <a
                  href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FJBe8h%2F%3Ff_no%3D9004"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full text-center bg-gradient-to-r from-amber-700 to-amber-900 hover:from-amber-800 hover:to-stone-900 text-white font-bold py-3.5 px-6 rounded-xl shadow transition"
                >
                  【楽天トラベル】金沢白鳥路　ホテル山楽 の宿泊プランとクーポン適用はこちら →
                </a>
              </div>
            </div>
          </article>

          {/* ホテル 3 */}
          <article className="bg-white rounded-3xl overflow-hidden shadow-sm border border-stone-200/80 transition hover:shadow-md">
            <div className="relative aspect-video sm:aspect-[16/9] w-full overflow-hidden bg-stone-100">
              <img
                src="https://img.travel.rakuten.co.jp/share/HOTEL/184275/184275.jpg"
                alt="ＴＨＥ　ＨＯＴＥＬ　ＳＡＮＲＡＫＵ　ＫＡＮＡＺＡＷＡ（ザ　ホテル山楽　金沢）"
                className="w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute top-4 left-4 bg-stone-900/80 backdrop-blur-sm text-white text-xs px-3 py-1.5 rounded-full font-semibold">
                第3選
              </div>
              <div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-sm text-stone-900 text-xs px-3 py-1.5 rounded-full font-bold shadow">
                ★ 4.7（口コミ 848件）
              </div>
            </div>

            <div className="p-6 sm:p-8 space-y-6">
              <div className="space-y-2">
                <span className="text-xs font-bold text-amber-700 uppercase tracking-wider">石川県金沢市（兼六園・ひがし茶屋街）</span>
                <h3 className="text-xl sm:text-2xl font-bold font-serif text-stone-900 leading-snug">
                  ＴＨＥ　ＨＯＴＥＬ　ＳＡＮＲＡＫＵ　ＫＡＮＡＺＡＷＡ（ザ　ホテル山楽　金沢）
                </h3>
                <p className="text-xs sm:text-sm font-medium text-amber-800">
                  近江町市場まで徒歩1分！四季を映す中庭日本庭園の滝と贅を尽くした全室クラシックスイート仕様
                </p>
              </div>

              <div className="border-t border-b border-stone-100 py-4 space-y-3">
                <h4 className="font-bold text-stone-900 text-sm sm:text-base font-serif">
                  THE HOTEL SANRAKU KANAZAWA —— 伝統とモダンが美しく融合。中庭の滝を眺めるクラブラウンジと美食
                </h4>
                <div className="grid gap-3 text-xs sm:text-sm text-stone-700">
                  
                  <div className="bg-stone-50 p-3.5 rounded-xl border border-stone-200/60">
                    <h5 className="font-bold text-stone-900 mb-1 flex items-center gap-1.5">
                      <span className="text-amber-600">✓</span> ホテル中央に広がる約120坪の中庭日本庭園と流れる滝の借景
                    </h5>
                    <p className="text-stone-600 leading-relaxed">客室やロビーから眺める四季折々の庭園風景。夜のライトアップされた水と緑のコントラストが幻想的です。</p>
                  </div>
                  <div className="bg-stone-50 p-3.5 rounded-xl border border-stone-200/60">
                    <h5 className="font-bold text-stone-900 mb-1 flex items-center gap-1.5">
                      <span className="text-amber-600">✓</span> 近江町市場まで徒歩わずか1分・ひがし茶屋街も徒歩圏内
                    </h5>
                    <p className="text-stone-600 leading-relaxed">市場での海鮮丼の朝食や食べ歩き、夜の割烹巡りにも抜群の立地。金沢の食文化を間近に体感できます。</p>
                  </div>
                  <div className="bg-stone-50 p-3.5 rounded-xl border border-stone-200/60">
                    <h5 className="font-bold text-stone-900 mb-1 flex items-center gap-1.5">
                      <span className="text-amber-600">✓</span> 専任スタッフがもてなす優雅なプレミアクラブラウンジ
                    </h5>
                    <p className="text-stone-600 leading-relaxed">クラブフロア宿泊者限定のラウンジ。金沢銘菓や地酒、カクテルタイムのオードブルを心ゆくまで楽しめます。</p>
                  </div>
                </div>
              </div>

              {/* レビュー抜粋 */}
              <div className="bg-amber-50/60 p-4 rounded-2xl border border-amber-100 text-xs sm:text-sm space-y-1.5">
                <span className="font-bold text-amber-900 flex items-center gap-1.5">
                  <span>💬</span> 実際の宿泊者からの評価・口コミ
                </span>
                <p className="text-stone-700 leading-relaxed">楽天トラベル評価4.70点、口コミ極めて高評価。「近江町市場の目の前で便利、中庭の滝を見ながら過ごすラウンジが最高」「お部屋の内装が豪華でスタッフも親切」とリピーター続出。</p>
              </div>

              {/* 宿基本情報 */}
              <div className="text-xs text-stone-500 grid sm:grid-cols-2 gap-2 bg-stone-50 p-4 rounded-xl">
                <div><span className="font-semibold text-stone-700">住所：</span>石川県 金沢市尾張町1丁目1番1号</div>
                <div><span className="font-semibold text-stone-700">宿泊目安：</span>¥8,700〜 /人</div>
                <div><span className="font-semibold text-stone-700">楽天施設ID：</span>184275</div>
                <div><span className="font-semibold text-stone-700">予約区分：</span>楽天ふるさと納税トラベルクーポン対象</div>
              </div>

              <div className="pt-2">
                <a
                  href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FJBe8h%2F%3Ff_no%3D184275"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full text-center bg-gradient-to-r from-amber-700 to-amber-900 hover:from-amber-800 hover:to-stone-900 text-white font-bold py-3.5 px-6 rounded-xl shadow transition"
                >
                  【楽天トラベル】ＴＨＥ　ＨＯＴＥＬ　ＳＡＮＲＡＫＵ　ＫＡＮＡＺＡＷＡ（ザ　ホテル山楽　金沢） の宿泊プランとクーポン適用はこちら →
                </a>
              </div>
            </div>
          </article>
        </section>

        {/* エリア観光・見どころ */}
        <section className="space-y-4">
          <h2 className="text-xl sm:text-2xl font-bold font-serif text-stone-900 flex items-center gap-2">
            <span>🗺️</span> 兼六園・金沢城公園＆ひがし茶屋街・近江町市場観光ガイド
          </h2>
          <div className="grid gap-4">

            <div className="bg-white p-5 rounded-2xl border border-stone-200/80 shadow-sm space-y-2">
              <h4 className="font-bold text-stone-900 text-sm sm:text-base font-serif flex items-center gap-2">
                <span className="w-6 h-6 rounded-full bg-amber-100 text-amber-900 flex items-center justify-center text-xs font-sans font-bold">1</span>
                特別名勝「兼六園」の六勝（宏大・幽邃・人力・蒼古・水泉・眺望）
              </h4>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed pl-8">
                徽軫灯籠（ことじとうろう）や霞ヶ池。冬の雪吊りや初夏のかきつばた、秋の紅葉など、どの季節に訪れても息をのむ名園の美に出会えます。
              </p>
            </div>
            <div className="bg-white p-5 rounded-2xl border border-stone-200/80 shadow-sm space-y-2">
              <h4 className="font-bold text-stone-900 text-sm sm:text-base font-serif flex items-center gap-2">
                <span className="w-6 h-6 rounded-full bg-amber-100 text-amber-900 flex items-center justify-center text-xs font-sans font-bold">2</span>
                ひがし茶屋街の紅殻格子（ベンガラ）と金箔ソフトクリーム
              </h4>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed pl-8">
                江戸時代の茶屋建築が美しく残る重要伝統的建造物群保存地区。金箔貼り体験や、お茶屋美術館の見学、町家カフェ巡りが人気です。
              </p>
            </div>
            <div className="bg-white p-5 rounded-2xl border border-stone-200/80 shadow-sm space-y-2">
              <h4 className="font-bold text-stone-900 text-sm sm:text-base font-serif flex items-center gap-2">
                <span className="w-6 h-6 rounded-full bg-amber-100 text-amber-900 flex items-center justify-center text-xs font-sans font-bold">3</span>
                「金沢市民の台所」近江町市場での日本海海鮮グルメ食べ歩き
              </h4>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed pl-8">
                約170店舗がひしめく活気あふれる市場。新鮮なウニや牡蠣の立ち食い、豪華海鮮丼、のどぐろの塩焼きを心ゆくまで堪能できます。
              </p>
            </div>
          </div>
        </section>

        {/* ふるさと納税活用ステップ */}
        <section className="bg-gradient-to-br from-amber-900 via-stone-900 to-stone-950 text-white rounded-3xl p-6 sm:p-8 shadow-xl space-y-6">
          <div className="space-y-2">
            <span className="text-xs uppercase tracking-widest text-amber-300 font-semibold">How to Use Coupon</span>
            <h2 className="text-xl sm:text-2xl font-bold font-serif text-amber-50">
              石川県金沢市ふるさと納税×楽天トラベルクーポン活用手順
            </h2>
            <p className="text-stone-300 text-xs sm:text-sm">
              初めての方でも迷わず利用できる3ステップ。予約済みのプランにも後から適用可能です。
            </p>
          </div>

          <div className="grid sm:grid-cols-3 gap-4 text-xs sm:text-sm">

            <div className="bg-stone-900/60 p-4 rounded-2xl border border-amber-500/20 space-y-2">
              <span className="inline-block bg-amber-500/20 text-amber-300 font-mono text-xs px-2.5 py-0.5 rounded font-semibold">
                Step 1: 楽天ふるさと納税で「石川県金沢市」クーポンを獲得
              </span>
              <p className="text-stone-300 text-xs sm:text-sm leading-relaxed">
                楽天ふるさと納税で金沢市を選び、トラベルクーポンを返礼品として申し込みます。寄付額の30%相当のクーポンがアカウントに付与されます。
              </p>
            </div>
            <div className="bg-stone-900/60 p-4 rounded-2xl border border-amber-500/20 space-y-2">
              <span className="inline-block bg-amber-500/20 text-amber-300 font-mono text-xs px-2.5 py-0.5 rounded font-semibold">
                Step 2: 北陸新幹線で東京駅から約2時間15分、敦賀経由で関西からも快適
              </span>
              <p className="text-stone-300 text-xs sm:text-sm leading-relaxed">
                北陸新幹線「かがやき」で一直線。3年間の有効期間内で、冬のカニシーズンや春の兼六園桜、秋の紅葉に合わせて計画できます。
              </p>
            </div>
            <div className="bg-stone-900/60 p-4 rounded-2xl border border-amber-500/20 space-y-2">
              <span className="inline-block bg-amber-500/20 text-amber-300 font-mono text-xs px-2.5 py-0.5 rounded font-semibold">
                Step 3: 楽天トラベル予約画面でクーポン割引を適用して予約完了
              </span>
              <p className="text-stone-300 text-xs sm:text-sm leading-relaxed">
                ホテル日航金沢、白鳥路ホテル山楽、THE HOTEL SANRAKUなどの宿泊プランを選び、決済時にクーポンを選択すれば宿泊代金から大幅な割引が適用されます。
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
              <Link href="/furusato-tax-kyoto-station-luxury-convenience-stay" className="hover:text-amber-800 underline flex items-center gap-1.5 py-1">
                <span>▸</span> 京都駅直結 新幹線直結＆抜群のアクセス名門ホテル特集
              </Link>
            </li>
            <li>
              <Link href="/furusato-tax-tokyo-station-marunouchi-luxury-stay" className="hover:text-amber-800 underline flex items-center gap-1.5 py-1">
                <span>▸</span> 東京駅・丸の内 重要文化財駅舎＆皇居ビュー名門ホテル特集
              </Link>
            </li>
          </ul>
        </section>
      </div>
    </main>
  );
}
