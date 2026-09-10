import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: '【福岡・博多×ふるさと納税】駅直結ラグジュアリー＆天然温泉スパ！もつ鍋・水炊き美食特集｜都ホテル博多・グランドハイアット・ヒルトンシーホーク',
  description: 'アジアのリーダー都市・九州最大の美食シティ福岡県福岡市を楽天ふるさと納税でお得に贅沢ステイ！JR博多駅直結・屋上温泉スパ＆アウトドアプールの「都ホテル 博多」、キャナルシティ直結の国際的ラグジュアリー「グランドハイアット福岡」、博多湾オーシャンビューの「ヒルトン福岡シーホーク」を徹底比較。福岡市トラベルクーポン活用術を網羅。',
  keywords: '福岡 ふるさと納税,都ホテル博多 クーポン,グランドハイアット福岡 ふるさと納税,ヒルトン福岡シーホーク 宿泊,福岡市 ふるさと納税 旅行',
  alternates: {
    canonical: 'https://croud-travel.pages.dev/furusato-tax-fukuoka-hakata-luxury-gourmet-stay',
  },
  openGraph: {
    title: '【福岡・博多×ふるさと納税】駅直結ラグジュアリー＆天然温泉スパ！もつ鍋・水炊き美食特集｜都ホテル博多・グランドハイアット・ヒルトンシーホーク',
    description: 'アジアのリーダー都市・九州最大の美食シティ福岡県福岡市を楽天ふるさと納税でお得に贅沢ステイ！JR博多駅直結・屋上温泉スパ＆アウトドアプールの「都ホテル 博多」、キャナルシティ直結の国際的ラグジュアリー「グランドハイアット福岡」、博多湾オーシャンビューの「ヒルトン福岡シーホーク」を徹底比較。福岡市トラベルクーポン活用術を網羅。',
    url: 'https://croud-travel.pages.dev/furusato-tax-fukuoka-hakata-luxury-gourmet-stay',
    siteName: 'トラベルガイド - クラウドトラベル',
    locale: 'ja_JP',
    type: 'article',
  },
};

export default function FurusatoArticlePage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: '【福岡・博多×ふるさと納税】駅直結ラグジュアリー＆天然温泉スパ！もつ鍋・水炊き美食特集｜都ホテル博多・グランドハイアット・ヒルトンシーホーク',
    description: 'アジアのリーダー都市・九州最大の美食シティ福岡県福岡市を楽天ふるさと納税でお得に贅沢ステイ！JR博多駅直結・屋上温泉スパ＆アウトドアプールの「都ホテル 博多」、キャナルシティ直結の国際的ラグジュアリー「グランドハイアット福岡」、博多湾オーシャンビューの「ヒルトン福岡シーホーク」を徹底比較。福岡市トラベルクーポン活用術を網羅。',
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
    datePublished: '2026-09-11T00:10:00+09:00',
    dateModified: '2026-09-11T00:10:00+09:00',
    mainEntityOfPage: 'https://croud-travel.pages.dev/furusato-tax-fukuoka-hakata-luxury-gourmet-stay',
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
        <span className="text-stone-700 font-medium truncate">【福岡・博多×ふるさと納税】駅直結ラグジュアリー＆天然温泉スパ！もつ鍋・水炊き美食特集｜都ホテル博多・グランドハイアット・ヒルトンシーホーク</span>
      </nav>

      {/* ヒーローセクション */}
      <header className="max-w-4xl mx-auto px-4 sm:px-6 py-8 sm:py-12 space-y-4">
        <div className="inline-flex items-center gap-2 bg-amber-100/80 text-amber-900 text-xs font-semibold px-3 py-1 rounded-full border border-amber-200">
          <span>♨️</span>
          <span>福岡県福岡市（博多・天神） ふるさと納税・名湯宿特集</span>
        </div>
        <h1 className="text-2xl sm:text-4xl font-extrabold font-serif text-stone-900 tracking-tight leading-snug">
          【福岡・博多×ふるさと納税】駅直結ラグジュアリー＆天然温泉スパ！もつ鍋・水炊き美食特集｜都ホテル博多・グランドハイアット・ヒルトンシーホーク
        </h1>
        <p className="text-stone-600 text-sm sm:text-base leading-relaxed">
          アジアのリーダー都市・九州最大の美食シティ福岡県福岡市を楽天ふるさと納税でお得に贅沢ステイ！JR博多駅直結・屋上温泉スパ＆アウトドアプールの「都ホテル 博多」、キャナルシティ直結の国際的ラグジュアリー「グランドハイアット福岡」、博多湾オーシャンビューの「ヒルトン福岡シーホーク」を徹底比較。福岡市トラベルクーポン活用術を網羅。
        </p>
      </header>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 space-y-12">
        {/* リード文セクション */}
        <section className="bg-white rounded-3xl p-6 sm:p-8 shadow-sm border border-stone-200/80 space-y-4">
          <h2 className="text-lg sm:text-xl font-bold font-serif text-amber-900 border-b border-amber-100 pb-3">
            活気あふれる屋台と玄界灘の豊かな海の幸——極上のアーバンリゾートホテルと本場博多グルメを満喫する九州の休日
          </h2>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed">
            九州の政治・経済・文化の中心地であり、アジアの玄関口として発展を続ける福岡県福岡市。福岡空港から博多駅まで地下鉄でわずか5分という世界屈指の都市利便性を誇り、中洲・天神の活気ある屋台街や、キャナルシティ博多、大濠公園、歴史ある櫛田神社など多彩な見どころが集結しています。街中を歩けば、豚骨ラーメン、もつ鍋、水炊き、ごまさば、鉄鍋餃子など、日本一とも称される豊かな食文化が旅人を魅了します。
          </p>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed">
            福岡滞在をさらに贅沢にするのが、博多駅直結の最新スパホテルや海沿いのアーバンリゾートホテル。屋上の天然温泉スパでリフレッシュし、夜は活気あふれる博多の街で美食を堪能する大人のシティエスケープが人気を集めています。福岡県福岡市へのふるさと納税を利用すれば、30%相当の楽天トラベルクーポンにより憧れのハイクラスホテルへお得に宿泊でき、観光・出張・記念日旅行を最高にお得にアップグレードできます。
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
                  <td className="p-3 font-bold text-amber-900">都ホテル博多</td>
                  <td className="p-3 font-bold">★ 4.62</td>
                  <td className="p-3 text-stone-600">JR博多駅筑紫口直結！最上階に天然温泉スパ＆アウトドアプールを備えた都会のオアシス</td>
                  <td className="p-3 text-stone-600">最高峰の格式・贅沢ステイ</td>
                </tr>
                <tr>
                  <td className="p-3 font-bold text-amber-900">グランドハイアット福岡</td>
                  <td className="p-3 font-bold">★ 4.48</td>
                  <td className="p-3 text-stone-600">キャナルシティ博多直結の国際的ラグジュアリーホテル！伝統と革新が息づく上質のおもてなし</td>
                  <td className="p-3 text-stone-600">抜群の立地・名湯満喫</td>
                </tr>
                <tr>
                  <td className="p-3 font-bold text-amber-900">ヒルトン福岡シーホーク</td>
                  <td className="p-3 font-bold">★ 4.16</td>
                  <td className="p-3 text-stone-600">博多湾オーシャンビューの巨大アーバンリゾート！地上100m超から望む福岡の夜景と大浴場</td>
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
                src="https://img.travel.rakuten.co.jp/share/HOTEL/172310/172310.jpg"
                alt="都ホテル博多"
                className="w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute top-4 left-4 bg-stone-900/80 backdrop-blur-sm text-white text-xs px-3 py-1.5 rounded-full font-semibold">
                第1選
              </div>
              <div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-sm text-stone-900 text-xs px-3 py-1.5 rounded-full font-bold shadow">
                ★ 4.62（口コミ 1142件）
              </div>
            </div>

            <div className="p-6 sm:p-8 space-y-6">
              <div className="space-y-2">
                <span className="text-xs font-bold text-amber-700 uppercase tracking-wider">福岡県福岡市（博多・天神）</span>
                <h3 className="text-xl sm:text-2xl font-bold font-serif text-stone-900 leading-snug">
                  都ホテル博多
                </h3>
                <p className="text-xs sm:text-sm font-medium text-amber-800">
                  JR博多駅筑紫口直結！最上階に天然温泉スパ＆アウトドアプールを備えた都会のオアシス
                </p>
              </div>

              <div className="border-t border-b border-stone-100 py-4 space-y-3">
                <h4 className="font-bold text-stone-900 text-sm sm:text-base font-serif">
                  都ホテル 博多 —— 博多駅直結の最高峰ラグジュアリー。屋上温泉スパプールとガラスファサードの美しいホテル
                </h4>
                <div className="grid gap-3 text-xs sm:text-sm text-stone-700">
                  
                  <div className="bg-stone-50 p-3.5 rounded-xl border border-stone-200/60">
                    <h5 className="font-bold text-stone-900 mb-1 flex items-center gap-1.5">
                      <span className="text-amber-600">✓</span> JR博多駅筑紫口から地下直結徒歩1分の圧倒的アクセス
                    </h5>
                    <p className="text-stone-600 leading-relaxed">雨の日も濡れずにチェックイン。新幹線や地下鉄、空港への移動がスムーズで、福岡観光やビジネスに最高の立地です。</p>
                  </div>
                  <div className="bg-stone-50 p-3.5 rounded-xl border border-stone-200/60">
                    <h5 className="font-bold text-stone-900 mb-1 flex items-center gap-1.5">
                      <span className="text-amber-600">✓</span> 最上階13階に広がるアウトドア温泉スパ＆内湯・サウナ
                    </h5>
                    <p className="text-stone-600 leading-relaxed">敷地内から湧出する天然温泉を利用した屋外温泉プールとジャグジー。博多の夜空を眺めながら贅沢なスパ体験を楽しめます。</p>
                  </div>
                  <div className="bg-stone-50 p-3.5 rounded-xl border border-stone-200/60">
                    <h5 className="font-bold text-stone-900 mb-1 flex items-center gap-1.5">
                      <span className="text-amber-600">✓</span> 全室30㎡以上のゆとりある客室と上質なアメニティ
                    </h5>
                    <p className="text-stone-600 leading-relaxed">大きな窓から光が差し込むスタイリッシュな客室。全室バストイレ別で、独立洗面台や高級ベッドが快適な眠りを誘います。</p>
                  </div>
                </div>
              </div>

              {/* レビュー抜粋 */}
              <div className="bg-amber-50/60 p-4 rounded-2xl border border-amber-100 text-xs sm:text-sm space-y-1.5">
                <span className="font-bold text-amber-900 flex items-center gap-1.5">
                  <span>💬</span> 実際の宿泊者からの評価・口コミ
                </span>
                <p className="text-stone-700 leading-relaxed">楽天トラベル評価4.62点、口コミ1400件超。「駅直結で立地最高、屋上の温泉スパプールが素晴らしかった」「お部屋も綺麗で広く、朝食もとても美味しかった」と絶賛。</p>
              </div>

              {/* 宿基本情報 */}
              <div className="text-xs text-stone-500 grid sm:grid-cols-2 gap-2 bg-stone-50 p-4 rounded-xl">
                <div><span className="font-semibold text-stone-700">住所：</span>福岡県 福岡市博多区博多駅東2-1-1</div>
                <div><span className="font-semibold text-stone-700">宿泊目安：</span>¥16,400〜 /人</div>
                <div><span className="font-semibold text-stone-700">楽天施設ID：</span>172310</div>
                <div><span className="font-semibold text-stone-700">予約区分：</span>楽天ふるさと納税トラベルクーポン対象</div>
              </div>

              <div className="pt-2">
                <a
                  href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FJBe8h%2F%3Ff_no%3D172310"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full text-center bg-gradient-to-r from-amber-700 to-amber-900 hover:from-amber-800 hover:to-stone-900 text-white font-bold py-3.5 px-6 rounded-xl shadow transition"
                >
                  【楽天トラベル】都ホテル博多 の宿泊プランとクーポン適用はこちら →
                </a>
              </div>
            </div>
          </article>

          {/* ホテル 2 */}
          <article className="bg-white rounded-3xl overflow-hidden shadow-sm border border-stone-200/80 transition hover:shadow-md">
            <div className="relative aspect-video sm:aspect-[16/9] w-full overflow-hidden bg-stone-100">
              <img
                src="https://img.travel.rakuten.co.jp/share/HOTEL/572/572.jpg"
                alt="グランドハイアット福岡"
                className="w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute top-4 left-4 bg-stone-900/80 backdrop-blur-sm text-white text-xs px-3 py-1.5 rounded-full font-semibold">
                第2選
              </div>
              <div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-sm text-stone-900 text-xs px-3 py-1.5 rounded-full font-bold shadow">
                ★ 4.48（口コミ 963件）
              </div>
            </div>

            <div className="p-6 sm:p-8 space-y-6">
              <div className="space-y-2">
                <span className="text-xs font-bold text-amber-700 uppercase tracking-wider">福岡県福岡市（博多・天神）</span>
                <h3 className="text-xl sm:text-2xl font-bold font-serif text-stone-900 leading-snug">
                  グランドハイアット福岡
                </h3>
                <p className="text-xs sm:text-sm font-medium text-amber-800">
                  キャナルシティ博多直結の国際的ラグジュアリーホテル！伝統と革新が息づく上質のおもてなし
                </p>
              </div>

              <div className="border-t border-b border-stone-100 py-4 space-y-3">
                <h4 className="font-bold text-stone-900 text-sm sm:text-base font-serif">
                  グランドハイアット福岡 —— 噴水ショーを望む洗練の空間。ハイアットブランドの気品と天神・中洲へ徒歩すぐの好立地
                </h4>
                <div className="grid gap-3 text-xs sm:text-sm text-stone-700">
                  
                  <div className="bg-stone-50 p-3.5 rounded-xl border border-stone-200/60">
                    <h5 className="font-bold text-stone-900 mb-1 flex items-center gap-1.5">
                      <span className="text-amber-600">✓</span> エンターテインメント複合施設「キャナルシティ博多」直結
                    </h5>
                    <p className="text-stone-600 leading-relaxed">ショッピングや劇場、映画館、噴水ショーをホテル直結で満喫。天神や中洲の歓楽街へも徒歩圏内のベストロケーションです。</p>
                  </div>
                  <div className="bg-stone-50 p-3.5 rounded-xl border border-stone-200/60">
                    <h5 className="font-bold text-stone-900 mb-1 flex items-center gap-1.5">
                      <span className="text-amber-600">✓</span> クラシカルで洗練された広々とした客室と大理石バスルーム
                    </h5>
                    <p className="text-stone-600 leading-relaxed">全客室に独立したシャワーブース付きバスタブを完備。高い防音性と上質なリネンが極上の寛ぎを約束します。</p>
                  </div>
                  <div className="bg-stone-50 p-3.5 rounded-xl border border-stone-200/60">
                    <h5 className="font-bold text-stone-900 mb-1 flex items-center gap-1.5">
                      <span className="text-amber-600">✓</span> 一流シェフが手掛けるインターナショナルレストラン＆バー
                    </h5>
                    <p className="text-stone-600 leading-relaxed">オープンキッチンのグリルレストラン「THE MARKET F」での極上ディナー。バーラウンジからはキャナルシティの噴水を一望できます。</p>
                  </div>
                </div>
              </div>

              {/* レビュー抜粋 */}
              <div className="bg-amber-50/60 p-4 rounded-2xl border border-amber-100 text-xs sm:text-sm space-y-1.5">
                <span className="font-bold text-amber-900 flex items-center gap-1.5">
                  <span>💬</span> 実際の宿泊者からの評価・口コミ
                </span>
                <p className="text-stone-700 leading-relaxed">楽天トラベル評価4.48点、口コミ2000件超。「スタッフのホスピタリティが一流で安心感がある」「お部屋のバスタブが大きくて快適、中洲の屋台へも歩いて行けて最高」と高評価。</p>
              </div>

              {/* 宿基本情報 */}
              <div className="text-xs text-stone-500 grid sm:grid-cols-2 gap-2 bg-stone-50 p-4 rounded-xl">
                <div><span className="font-semibold text-stone-700">住所：</span>福岡県 福岡市博多区住吉1-2-82　</div>
                <div><span className="font-semibold text-stone-700">宿泊目安：</span>¥16,129〜 /人</div>
                <div><span className="font-semibold text-stone-700">楽天施設ID：</span>572</div>
                <div><span className="font-semibold text-stone-700">予約区分：</span>楽天ふるさと納税トラベルクーポン対象</div>
              </div>

              <div className="pt-2">
                <a
                  href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FJBe8h%2F%3Ff_no%3D572"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full text-center bg-gradient-to-r from-amber-700 to-amber-900 hover:from-amber-800 hover:to-stone-900 text-white font-bold py-3.5 px-6 rounded-xl shadow transition"
                >
                  【楽天トラベル】グランドハイアット福岡 の宿泊プランとクーポン適用はこちら →
                </a>
              </div>
            </div>
          </article>

          {/* ホテル 3 */}
          <article className="bg-white rounded-3xl overflow-hidden shadow-sm border border-stone-200/80 transition hover:shadow-md">
            <div className="relative aspect-video sm:aspect-[16/9] w-full overflow-hidden bg-stone-100">
              <img
                src="https://img.travel.rakuten.co.jp/share/HOTEL/1137/1137.jpg"
                alt="ヒルトン福岡シーホーク"
                className="w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute top-4 left-4 bg-stone-900/80 backdrop-blur-sm text-white text-xs px-3 py-1.5 rounded-full font-semibold">
                第3選
              </div>
              <div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-sm text-stone-900 text-xs px-3 py-1.5 rounded-full font-bold shadow">
                ★ 4.16（口コミ 4824件）
              </div>
            </div>

            <div className="p-6 sm:p-8 space-y-6">
              <div className="space-y-2">
                <span className="text-xs font-bold text-amber-700 uppercase tracking-wider">福岡県福岡市（博多・天神）</span>
                <h3 className="text-xl sm:text-2xl font-bold font-serif text-stone-900 leading-snug">
                  ヒルトン福岡シーホーク
                </h3>
                <p className="text-xs sm:text-sm font-medium text-amber-800">
                  博多湾オーシャンビューの巨大アーバンリゾート！地上100m超から望む福岡の夜景と大浴場
                </p>
              </div>

              <div className="border-t border-b border-stone-100 py-4 space-y-3">
                <h4 className="font-bold text-stone-900 text-sm sm:text-base font-serif">
                  ヒルトン福岡シーホーク —— みずほPayPayドーム隣接。全室オーシャンビューと地上35階スカイビューの絶景
                </h4>
                <div className="grid gap-3 text-xs sm:text-sm text-stone-700">
                  
                  <div className="bg-stone-50 p-3.5 rounded-xl border border-stone-200/60">
                    <h5 className="font-bold text-stone-900 mb-1 flex items-center gap-1.5">
                      <span className="text-amber-600">✓</span> 博多湾を一望する1,000室超の全室オーシャンビュー客室
                    </h5>
                    <p className="text-stone-600 leading-relaxed">客室の窓から広がる青い海と福岡タワー、夜には煌めく都市夜景のパノラマ。リゾート感あふれる滞在を楽しめます。</p>
                  </div>
                  <div className="bg-stone-50 p-3.5 rounded-xl border border-stone-200/60">
                    <h5 className="font-bold text-stone-900 mb-1 flex items-center gap-1.5">
                      <span className="text-amber-600">✓</span> みずほPayPayドーム福岡に隣接する抜群のロケーション
                    </h5>
                    <p className="text-stone-600 leading-relaxed">野球観戦やコンサート、ライブ遠征に最適。隣接する商業施設「マークイズ福岡ももち」での買い物も便利です。</p>
                  </div>
                  <div className="bg-stone-50 p-3.5 rounded-xl border border-stone-200/60">
                    <h5 className="font-bold text-stone-900 mb-1 flex items-center gap-1.5">
                      <span className="text-amber-600">✓</span> 高さ40mのアトリウム空間「ブラッセリー＆ラウンジ シアラ」
                    </h5>
                    <p className="text-stone-600 leading-relaxed">開放感あふれるガラス張りの巨大空間で味わう豪華ビュッフェ。地元九州の厳選食材を取り入れた朝食が評判です。</p>
                  </div>
                </div>
              </div>

              {/* レビュー抜粋 */}
              <div className="bg-amber-50/60 p-4 rounded-2xl border border-amber-100 text-xs sm:text-sm space-y-1.5">
                <span className="font-bold text-amber-900 flex items-center gap-1.5">
                  <span>💬</span> 実際の宿泊者からの評価・口コミ
                </span>
                <p className="text-stone-700 leading-relaxed">楽天トラベル評価4.16点、口コミ11,000件超。「部屋からの博多湾と夜景の眺めが素晴らしい」「ドーム直結でライブ遠征に最高、アトリウムの朝食も種類豊富で大満足」と大人気。</p>
              </div>

              {/* 宿基本情報 */}
              <div className="text-xs text-stone-500 grid sm:grid-cols-2 gap-2 bg-stone-50 p-4 rounded-xl">
                <div><span className="font-semibold text-stone-700">住所：</span>福岡県 福岡市中央区地行浜2-2-3</div>
                <div><span className="font-semibold text-stone-700">宿泊目安：</span>¥11,203〜 /人</div>
                <div><span className="font-semibold text-stone-700">楽天施設ID：</span>1137</div>
                <div><span className="font-semibold text-stone-700">予約区分：</span>楽天ふるさと納税トラベルクーポン対象</div>
              </div>

              <div className="pt-2">
                <a
                  href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FJBe8h%2F%3Ff_no%3D1137"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full text-center bg-gradient-to-r from-amber-700 to-amber-900 hover:from-amber-800 hover:to-stone-900 text-white font-bold py-3.5 px-6 rounded-xl shadow transition"
                >
                  【楽天トラベル】ヒルトン福岡シーホーク の宿泊プランとクーポン適用はこちら →
                </a>
              </div>
            </div>
          </article>
        </section>

        {/* エリア観光・見どころ */}
        <section className="space-y-4">
          <h2 className="text-xl sm:text-2xl font-bold font-serif text-stone-900 flex items-center gap-2">
            <span>🗺️</span> 博多駅・中洲屋台・太宰府天満宮＆大濠公園観光ガイド
          </h2>
          <div className="grid gap-4">

            <div className="bg-white p-5 rounded-2xl border border-stone-200/80 shadow-sm space-y-2">
              <h4 className="font-bold text-stone-900 text-sm sm:text-base font-serif flex items-center gap-2">
                <span className="w-6 h-6 rounded-full bg-amber-100 text-amber-900 flex items-center justify-center text-xs font-sans font-bold">1</span>
                中洲・天神の屋台街めぐり（ラーメン・焼き鳥・おでん）
              </h4>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed pl-8">
                夕暮れとともに那珂川沿いや天神の歩道に並ぶ屋台。地元の人や観光客と肩を並べ、出来立ての博多ラーメンや明太子料理を味わうのが名物です。
              </p>
            </div>
            <div className="bg-white p-5 rounded-2xl border border-stone-200/80 shadow-sm space-y-2">
              <h4 className="font-bold text-stone-900 text-sm sm:text-base font-serif flex items-center gap-2">
                <span className="w-6 h-6 rounded-full bg-amber-100 text-amber-900 flex items-center justify-center text-xs font-sans font-bold">2</span>
                学問の神様「太宰府天満宮」参拝と名物「梅ヶ枝餅」
              </h4>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed pl-8">
                菅原道真公を祀る全国天満宮の総本宮。太鼓橋や心字池、隈研吾氏設計のスターバックス、焼き立ての梅ヶ枝餅の食べ歩きが人気です。
              </p>
            </div>
            <div className="bg-white p-5 rounded-2xl border border-stone-200/80 shadow-sm space-y-2">
              <h4 className="font-bold text-stone-900 text-sm sm:text-base font-serif flex items-center gap-2">
                <span className="w-6 h-6 rounded-full bg-amber-100 text-amber-900 flex items-center justify-center text-xs font-sans font-bold">3</span>
                福岡タワーとシーサイドももち海浜公園のサンセット
              </h4>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed pl-8">
                全長234mの日本一高い海浜タワー。展望室からの360度パノラマと、人工ビーチ沿いに広がる海辺のレストランでの夕暮れ散策が楽しめます。
              </p>
            </div>
          </div>
        </section>

        {/* ふるさと納税活用ステップ */}
        <section className="bg-gradient-to-br from-amber-900 via-stone-900 to-stone-950 text-white rounded-3xl p-6 sm:p-8 shadow-xl space-y-6">
          <div className="space-y-2">
            <span className="text-xs uppercase tracking-widest text-amber-300 font-semibold">How to Use Coupon</span>
            <h2 className="text-xl sm:text-2xl font-bold font-serif text-amber-50">
              福岡県福岡市ふるさと納税×楽天トラベルクーポン活用手順
            </h2>
            <p className="text-stone-300 text-xs sm:text-sm">
              初めての方でも迷わず利用できる3ステップ。予約済みのプランにも後から適用可能です。
            </p>
          </div>

          <div className="grid sm:grid-cols-3 gap-4 text-xs sm:text-sm">

            <div className="bg-stone-900/60 p-4 rounded-2xl border border-amber-500/20 space-y-2">
              <span className="inline-block bg-amber-500/20 text-amber-300 font-mono text-xs px-2.5 py-0.5 rounded font-semibold">
                Step 1: 楽天ふるさと納税で「福岡県福岡市」クーポンを獲得
              </span>
              <p className="text-stone-300 text-xs sm:text-sm leading-relaxed">
                楽天ふるさと納税で福岡市を選び、トラベルクーポンを返礼品として申し込みます。寄付額の30%相当のクーポンがアカウントに付与されます。
              </p>
            </div>
            <div className="bg-stone-900/60 p-4 rounded-2xl border border-amber-500/20 space-y-2">
              <span className="inline-block bg-amber-500/20 text-amber-300 font-mono text-xs px-2.5 py-0.5 rounded font-semibold">
                Step 2: 福岡空港または山陽新幹線・九州新幹線で博多へアクセス
              </span>
              <p className="text-stone-300 text-xs sm:text-sm leading-relaxed">
                福岡空港から博多駅まで地下鉄で約5分、新大阪駅から山陽新幹線で約2時間半。3年間の有効期間内で、グルメ旅行やライブ遠征に合わせて計画できます。
              </p>
            </div>
            <div className="bg-stone-900/60 p-4 rounded-2xl border border-amber-500/20 space-y-2">
              <span className="inline-block bg-amber-500/20 text-amber-300 font-mono text-xs px-2.5 py-0.5 rounded font-semibold">
                Step 3: 楽天トラベル予約画面でクーポン割引を適用して予約完了
              </span>
              <p className="text-stone-300 text-xs sm:text-sm leading-relaxed">
                都ホテル博多、グランドハイアット福岡、ヒルトン福岡シーホークなどの宿泊プランを選び、決済時にクーポンを選択すれば宿泊代金から大幅な割引が適用されます。
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
              <Link href="/furusato-tax-niseko-luxury-resort-powder-snow-stay" className="hover:text-amber-800 underline flex items-center gap-1.5 py-1">
                <span>▸</span> ニセコ 世界最高峰パウダースノー＆羊蹄山ビュー特集
              </Link>
            </li>
            <li>
              <Link href="/furusato-tax-kamakura-shonan-ocean-history-stay" className="hover:text-amber-800 underline flex items-center gap-1.5 py-1">
                <span>▸</span> 鎌倉・湘南 七里ヶ浜オーシャンビュー＆古都の歴史特集
              </Link>
            </li>
          </ul>
        </section>
      </div>
    </main>
  );
}
