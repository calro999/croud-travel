import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: '【箱根湯本温泉×ふるさと納税】玄関口の極上湯浴み＆老舗名宿特集！小田急ロマンスカーで行く名湯旅｜はつはな・吉池旅館・湯本富士屋ホテル',
  description: '都心からロマンスカー直通約85分！箱根十七湯の玄関口・神奈川県箱根町「箱根湯本温泉」を楽天ふるさと納税でお得に贅沢ステイ。全客室露天風呂付きの極上スパリゾート「はつはな」、一万坪の名園と六本の自家源泉かけ流しを誇る「吉池旅館」、駅徒歩3分の名門「箱根湯本温泉 湯本富士屋ホテル」を徹底比較。箱根町トラベルクーポン活用術を網羅。',
  keywords: '箱根湯本温泉 ふるさと納税,はつはな クーポン 箱根,吉池旅館 ふるさと納税,湯本富士屋ホテル 宿泊,箱根町 ふるさと納税 旅行',
  alternates: {
    canonical: 'https://croud-travel.pages.dev/furusato-tax-hakone-yumoto-gateway-luxury-stay',
  },
  openGraph: {
    title: '【箱根湯本温泉×ふるさと納税】玄関口の極上湯浴み＆老舗名宿特集！小田急ロマンスカーで行く名湯旅｜はつはな・吉池旅館・湯本富士屋ホテル',
    description: '都心からロマンスカー直通約85分！箱根十七湯の玄関口・神奈川県箱根町「箱根湯本温泉」を楽天ふるさと納税でお得に贅沢ステイ。全客室露天風呂付きの極上スパリゾート「はつはな」、一万坪の名園と六本の自家源泉かけ流しを誇る「吉池旅館」、駅徒歩3分の名門「箱根湯本温泉 湯本富士屋ホテル」を徹底比較。箱根町トラベルクーポン活用術を網羅。',
    url: 'https://croud-travel.pages.dev/furusato-tax-hakone-yumoto-gateway-luxury-stay',
    siteName: 'トラベルガイド - クラウドトラベル',
    locale: 'ja_JP',
    type: 'article',
  },
};

export default function FurusatoArticlePage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: '【箱根湯本温泉×ふるさと納税】玄関口の極上湯浴み＆老舗名宿特集！小田急ロマンスカーで行く名湯旅｜はつはな・吉池旅館・湯本富士屋ホテル',
    description: '都心からロマンスカー直通約85分！箱根十七湯の玄関口・神奈川県箱根町「箱根湯本温泉」を楽天ふるさと納税でお得に贅沢ステイ。全客室露天風呂付きの極上スパリゾート「はつはな」、一万坪の名園と六本の自家源泉かけ流しを誇る「吉池旅館」、駅徒歩3分の名門「箱根湯本温泉 湯本富士屋ホテル」を徹底比較。箱根町トラベルクーポン活用術を網羅。',
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
    mainEntityOfPage: 'https://croud-travel.pages.dev/furusato-tax-hakone-yumoto-gateway-luxury-stay',
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
        <span className="text-stone-700 font-medium truncate">【箱根湯本温泉×ふるさと納税】玄関口の極上湯浴み＆老舗名宿特集！小田急ロマンスカーで行く名湯旅｜はつはな・吉池旅館・湯本富士屋ホテル</span>
      </nav>

      {/* ヒーローセクション */}
      <header className="max-w-4xl mx-auto px-4 sm:px-6 py-8 sm:py-12 space-y-4">
        <div className="inline-flex items-center gap-2 bg-amber-100/80 text-amber-900 text-xs font-semibold px-3 py-1 rounded-full border border-amber-200">
          <span>♨️</span>
          <span>神奈川県箱根町（箱根湯本） ふるさと納税・名湯宿特集</span>
        </div>
        <h1 className="text-2xl sm:text-4xl font-extrabold font-serif text-stone-900 tracking-tight leading-snug">
          【箱根湯本温泉×ふるさと納税】玄関口の極上湯浴み＆老舗名宿特集！小田急ロマンスカーで行く名湯旅｜はつはな・吉池旅館・湯本富士屋ホテル
        </h1>
        <p className="text-stone-600 text-sm sm:text-base leading-relaxed">
          都心からロマンスカー直通約85分！箱根十七湯の玄関口・神奈川県箱根町「箱根湯本温泉」を楽天ふるさと納税でお得に贅沢ステイ。全客室露天風呂付きの極上スパリゾート「はつはな」、一万坪の名園と六本の自家源泉かけ流しを誇る「吉池旅館」、駅徒歩3分の名門「箱根湯本温泉 湯本富士屋ホテル」を徹底比較。箱根町トラベルクーポン活用術を網羅。
        </p>
      </header>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 space-y-12">
        {/* リード文セクション */}
        <section className="bg-white rounded-3xl p-6 sm:p-8 shadow-sm border border-stone-200/80 space-y-4">
          <h2 className="text-lg sm:text-xl font-bold font-serif text-amber-900 border-b border-amber-100 pb-3">
            早川のせせらぎと箱根山麓の豊かな自然——開湯千二百年の名湯と美食に心癒やされる至福の箱根湯本ステイ
          </h2>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed">
            神奈川県足柄下郡箱根町、箱根連山の東麓に位置する箱根湯本（はこねゆもと）温泉。奈良時代の天平十年（738年）、泰澄の弟子・浄定坊によって発見されたと伝わる「箱根十七湯」の中で最も古い歴史を誇る名湯です。新宿駅から小田急ロマンスカーで乗り換えなし約85分という抜群のアクセスを誇り、駅前には寄木細工の民芸品店や温泉まんじゅう、焼き蒲鉾などの食べ歩きが楽しい賑やかな商店街が広がっています。
          </p>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed">
            箱根湯本の大きな魅力は、早川や須雲川の清流沿いに佇む風情ある旅館群と、肌に優しいアルカリ性単純温泉の柔らかな湯ざわり。夕食には相模湾の新鮮な地魚や小田原の旬魚、相州牛、四季折々の京風懐石が膳を彩ります。神奈川県箱根町へのふるさと納税を利用すれば、30%相当の楽天トラベルクーポンにより憧れの名門ホテルや高級旅館へお得に宿泊でき、特別な記念日や週末のリフレッシュ旅が最高の思い出になります。
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
                  <td className="p-3 font-bold text-amber-900">はつはな</td>
                  <td className="p-3 font-bold">★ 4.86</td>
                  <td className="p-3 text-stone-600">全客室に自家源泉露天風呂を完備！須雲川の渓谷美と４つの貸切風呂・女性に優しい極上スパリゾート</td>
                  <td className="p-3 text-stone-600">最高峰の格式・贅沢ステイ</td>
                </tr>
                <tr>
                  <td className="p-3 font-bold text-amber-900">箱根湯本温泉　吉池旅館</td>
                  <td className="p-3 font-bold">★ 4.42</td>
                  <td className="p-3 text-stone-600">旧岩崎家別邸の歴史を受け継ぐ一万坪の名園！六本の自家源泉から毎分最大720L湧出する完全掛け流し</td>
                  <td className="p-3 text-stone-600">抜群の立地・名湯満喫</td>
                </tr>
                <tr>
                  <td className="p-3 font-bold text-amber-900">箱根湯本温泉　湯本富士屋ホテル</td>
                  <td className="p-3 font-bold">★ 4.34</td>
                  <td className="p-3 text-stone-600">箱根湯本駅から徒歩3分の好立地！早川のほとりに佇む老舗名門リゾートと本格和洋中ダイニング</td>
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
                src="https://img.travel.rakuten.co.jp/share/HOTEL/16108/16108.jpg"
                alt="はつはな"
                className="w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute top-4 left-4 bg-stone-900/80 backdrop-blur-sm text-white text-xs px-3 py-1.5 rounded-full font-semibold">
                第1選
              </div>
              <div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-sm text-stone-900 text-xs px-3 py-1.5 rounded-full font-bold shadow">
                ★ 4.86（口コミ 649件）
              </div>
            </div>

            <div className="p-6 sm:p-8 space-y-6">
              <div className="space-y-2">
                <span className="text-xs font-bold text-amber-700 uppercase tracking-wider">神奈川県箱根町（箱根湯本）</span>
                <h3 className="text-xl sm:text-2xl font-bold font-serif text-stone-900 leading-snug">
                  はつはな
                </h3>
                <p className="text-xs sm:text-sm font-medium text-amber-800">
                  全客室に自家源泉露天風呂を完備！須雲川の渓谷美と４つの貸切風呂・女性に優しい極上スパリゾート
                </p>
              </div>

              <div className="border-t border-b border-stone-100 py-4 space-y-3">
                <h4 className="font-bold text-stone-900 text-sm sm:text-base font-serif">
                  はつはな —— 須雲川のせせらぎに包まれる現代の湯治宿。全室露天風呂付き客室と五感を満たすモダン懐石
                </h4>
                <div className="grid gap-3 text-xs sm:text-sm text-stone-700">
                  
                  <div className="bg-stone-50 p-3.5 rounded-xl border border-stone-200/60">
                    <h5 className="font-bold text-stone-900 mb-1 flex items-center gap-1.5">
                      <span className="text-amber-600">✓</span> 全室に自家源泉の露天風呂を備えた贅沢なプライベート空間
                    </h5>
                    <p className="text-stone-600 leading-relaxed">須雲川の渓谷の緑や紅葉を望む専用露天風呂。誰にも邪魔されず、好きな時に何度でも箱根の名湯を堪能できます。</p>
                  </div>
                  <div className="bg-stone-50 p-3.5 rounded-xl border border-stone-200/60">
                    <h5 className="font-bold text-stone-900 mb-1 flex items-center gap-1.5">
                      <span className="text-amber-600">✓</span> 趣の異なる4つの貸切風呂と2つの大浴場で湯めぐり三昧
                    </h5>
                    <p className="text-stone-600 leading-relaxed">岩風呂や竹林を望む展望風呂など個性豊かな貸切風呂。美肌の湯として名高い自家源泉を心ゆくまで巡れます。</p>
                  </div>
                  <div className="bg-stone-50 p-3.5 rounded-xl border border-stone-200/60">
                    <h5 className="font-bold text-stone-900 mb-1 flex items-center gap-1.5">
                      <span className="text-amber-600">✓</span> 神奈川の旬の恵みとモダンな感性が融合した特選創作懐石
                    </h5>
                    <p className="text-stone-600 leading-relaxed">相模湾の海の幸や厳選牛、彩り豊かな季節の野菜を繊細に仕立てたディナー。器や盛り付けの美しさも秀逸です。</p>
                  </div>
                </div>
              </div>

              {/* レビュー抜粋 */}
              <div className="bg-amber-50/60 p-4 rounded-2xl border border-amber-100 text-xs sm:text-sm space-y-1.5">
                <span className="font-bold text-amber-900 flex items-center gap-1.5">
                  <span>💬</span> 実際の宿泊者からの評価・口コミ
                </span>
                <p className="text-stone-700 leading-relaxed">楽天トラベル評価4.86点、口コミ極めて高評価。「全室露天付きでお湯も素晴らしく、モダン懐石の美味しさに感動」「ラウンジや貸切風呂のクオリティが別格」と大絶賛。</p>
              </div>

              {/* 宿基本情報 */}
              <div className="text-xs text-stone-500 grid sm:grid-cols-2 gap-2 bg-stone-50 p-4 rounded-xl">
                <div><span className="font-semibold text-stone-700">住所：</span>神奈川県 足柄下郡箱根町須雲川２０-１</div>
                <div><span className="font-semibold text-stone-700">宿泊目安：</span>¥50,850〜 /人</div>
                <div><span className="font-semibold text-stone-700">楽天施設ID：</span>16108</div>
                <div><span className="font-semibold text-stone-700">予約区分：</span>楽天ふるさと納税トラベルクーポン対象</div>
              </div>

              <div className="pt-2">
                <a
                  href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FJBe8h%2F%3Ff_no%3D16108"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full text-center bg-gradient-to-r from-amber-700 to-amber-900 hover:from-amber-800 hover:to-stone-900 text-white font-bold py-3.5 px-6 rounded-xl shadow transition"
                >
                  【楽天トラベル】はつはな の宿泊プランとクーポン適用はこちら →
                </a>
              </div>
            </div>
          </article>

          {/* ホテル 2 */}
          <article className="bg-white rounded-3xl overflow-hidden shadow-sm border border-stone-200/80 transition hover:shadow-md">
            <div className="relative aspect-video sm:aspect-[16/9] w-full overflow-hidden bg-stone-100">
              <img
                src="https://img.travel.rakuten.co.jp/share/HOTEL/108157/108157.jpg"
                alt="箱根湯本温泉　吉池旅館"
                className="w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute top-4 left-4 bg-stone-900/80 backdrop-blur-sm text-white text-xs px-3 py-1.5 rounded-full font-semibold">
                第2選
              </div>
              <div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-sm text-stone-900 text-xs px-3 py-1.5 rounded-full font-bold shadow">
                ★ 4.42（口コミ 528件）
              </div>
            </div>

            <div className="p-6 sm:p-8 space-y-6">
              <div className="space-y-2">
                <span className="text-xs font-bold text-amber-700 uppercase tracking-wider">神奈川県箱根町（箱根湯本）</span>
                <h3 className="text-xl sm:text-2xl font-bold font-serif text-stone-900 leading-snug">
                  箱根湯本温泉　吉池旅館
                </h3>
                <p className="text-xs sm:text-sm font-medium text-amber-800">
                  旧岩崎家別邸の歴史を受け継ぐ一万坪の名園！六本の自家源泉から毎分最大720L湧出する完全掛け流し
                </p>
              </div>

              <div className="border-t border-b border-stone-100 py-4 space-y-3">
                <h4 className="font-bold text-stone-900 text-sm sm:text-base font-serif">
                  箱根湯本温泉 吉池旅館 —— 国登録有形文化財の庭園と湧出量豊富な名湯。自家源泉かけ流しの贅沢と山海の美味
                </h4>
                <div className="grid gap-3 text-xs sm:text-sm text-stone-700">
                  
                  <div className="bg-stone-50 p-3.5 rounded-xl border border-stone-200/60">
                    <h5 className="font-bold text-stone-900 mb-1 flex items-center gap-1.5">
                      <span className="text-amber-600">✓</span> 国の登録有形文化財に指定された一万坪の池泉回遊式日本庭園「山月園」
                    </h5>
                    <p className="text-stone-600 leading-relaxed">四季折々の花木や鯉が泳ぐ清らかな池。朝夕の散策で、都会の喧騒を忘れさせる静寂の美に出会えます。</p>
                  </div>
                  <div className="bg-stone-50 p-3.5 rounded-xl border border-stone-200/60">
                    <h5 className="font-bold text-stone-900 mb-1 flex items-center gap-1.5">
                      <span className="text-amber-600">✓</span> 敷地内にある6本の自家源泉から湧き出る豊富な天然温泉
                    </h5>
                    <p className="text-stone-600 leading-relaxed">加水・加温・循環一切なしの本物の源泉掛け流し。広大な庭園露天風呂や大浴場、貸切風呂で贅沢な湯浴みが叶います。</p>
                  </div>
                  <div className="bg-stone-50 p-3.5 rounded-xl border border-stone-200/60">
                    <h5 className="font-bold text-stone-900 mb-1 flex items-center gap-1.5">
                      <span className="text-amber-600">✓</span> 相模湾の新鮮魚介や旬の山の幸を贅沢に盛り込んだ会席料理
                    </h5>
                    <p className="text-stone-600 leading-relaxed">板前が丹精込めて仕立てる本格和食会席。庭園の借景とともに、季節の味覚を五感でゆったりと味わえます。</p>
                  </div>
                </div>
              </div>

              {/* レビュー抜粋 */}
              <div className="bg-amber-50/60 p-4 rounded-2xl border border-amber-100 text-xs sm:text-sm space-y-1.5">
                <span className="font-bold text-amber-900 flex items-center gap-1.5">
                  <span>💬</span> 実際の宿泊者からの評価・口コミ
                </span>
                <p className="text-stone-700 leading-relaxed">楽天トラベル評価4.42点、口コミ3000件超。「一万坪の庭園の素晴らしさと、源泉掛け流しのお風呂の湯量に圧倒された」「料理も美味しく、箱根湯本駅から歩いて行けるのも便利」と高評価。</p>
              </div>

              {/* 宿基本情報 */}
              <div className="text-xs text-stone-500 grid sm:grid-cols-2 gap-2 bg-stone-50 p-4 rounded-xl">
                <div><span className="font-semibold text-stone-700">住所：</span>神奈川県 足柄下郡箱根町湯本597</div>
                <div><span className="font-semibold text-stone-700">宿泊目安：</span>¥12,980〜 /人</div>
                <div><span className="font-semibold text-stone-700">楽天施設ID：</span>108157</div>
                <div><span className="font-semibold text-stone-700">予約区分：</span>楽天ふるさと納税トラベルクーポン対象</div>
              </div>

              <div className="pt-2">
                <a
                  href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FJBe8h%2F%3Ff_no%3D108157"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full text-center bg-gradient-to-r from-amber-700 to-amber-900 hover:from-amber-800 hover:to-stone-900 text-white font-bold py-3.5 px-6 rounded-xl shadow transition"
                >
                  【楽天トラベル】箱根湯本温泉　吉池旅館 の宿泊プランとクーポン適用はこちら →
                </a>
              </div>
            </div>
          </article>

          {/* ホテル 3 */}
          <article className="bg-white rounded-3xl overflow-hidden shadow-sm border border-stone-200/80 transition hover:shadow-md">
            <div className="relative aspect-video sm:aspect-[16/9] w-full overflow-hidden bg-stone-100">
              <img
                src="https://img.travel.rakuten.co.jp/share/HOTEL/1729/1729.jpg"
                alt="箱根湯本温泉　湯本富士屋ホテル"
                className="w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute top-4 left-4 bg-stone-900/80 backdrop-blur-sm text-white text-xs px-3 py-1.5 rounded-full font-semibold">
                第3選
              </div>
              <div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-sm text-stone-900 text-xs px-3 py-1.5 rounded-full font-bold shadow">
                ★ 4.34（口コミ 1468件）
              </div>
            </div>

            <div className="p-6 sm:p-8 space-y-6">
              <div className="space-y-2">
                <span className="text-xs font-bold text-amber-700 uppercase tracking-wider">神奈川県箱根町（箱根湯本）</span>
                <h3 className="text-xl sm:text-2xl font-bold font-serif text-stone-900 leading-snug">
                  箱根湯本温泉　湯本富士屋ホテル
                </h3>
                <p className="text-xs sm:text-sm font-medium text-amber-800">
                  箱根湯本駅から徒歩3分の好立地！早川のほとりに佇む老舗名門リゾートと本格和洋中ダイニング
                </p>
              </div>

              <div className="border-t border-b border-stone-100 py-4 space-y-3">
                <h4 className="font-bold text-stone-900 text-sm sm:text-base font-serif">
                  箱根湯本温泉 湯本富士屋ホテル —— 駅近の利便性と豊かな自然。名門富士屋ホテルのおもてなしと多彩な温泉施設
                </h4>
                <div className="grid gap-3 text-xs sm:text-sm text-stone-700">
                  
                  <div className="bg-stone-50 p-3.5 rounded-xl border border-stone-200/60">
                    <h5 className="font-bold text-stone-900 mb-1 flex items-center gap-1.5">
                      <span className="text-amber-600">✓</span> 箱根湯本駅（あじさい橋）から徒歩わずか3分の抜群のロケーション
                    </h5>
                    <p className="text-stone-600 leading-relaxed">荷物を預けてすぐに箱根観光へ出発可能。駅前商店街での買い物や食べ歩きにも最高の拠点です。</p>
                  </div>
                  <div className="bg-stone-50 p-3.5 rounded-xl border border-stone-200/60">
                    <h5 className="font-bold text-stone-900 mb-1 flex items-center gap-1.5">
                      <span className="text-amber-600">✓</span> 広々とした大浴場と緑に囲まれた開放感あふれる露天風呂
                    </h5>
                    <p className="text-stone-600 leading-relaxed">男女別の大浴場、露天風呂、サウナ、家族風呂を完備。柔らかな単純温泉が旅の疲れを心地よく解きほぐします。</p>
                  </div>
                  <div className="bg-stone-50 p-3.5 rounded-xl border border-stone-200/60">
                    <h5 className="font-bold text-stone-900 mb-1 flex items-center gap-1.5">
                      <span className="text-amber-600">✓</span> 日本料理・フランス料理・中国料理から選べる伝統のディナー
                    </h5>
                    <p className="text-stone-600 leading-relaxed">富士屋ホテル伝統のフレンチ、季節の会席料理、本格広東料理と多彩な選択肢。三世代旅行や記念日にもぴったりです。</p>
                  </div>
                </div>
              </div>

              {/* レビュー抜粋 */}
              <div className="bg-amber-50/60 p-4 rounded-2xl border border-amber-100 text-xs sm:text-sm space-y-1.5">
                <span className="font-bold text-amber-900 flex items-center gap-1.5">
                  <span>💬</span> 実際の宿泊者からの評価・口コミ
                </span>
                <p className="text-stone-700 leading-relaxed">楽天トラベル評価4.34点、口コミ3500件超。「駅から近くてアクセス最高、お風呂も広くて気持ちいい」「フレンチや和食のクオリティが高く、スタッフの対応も素晴らしい」とファミリー・シニアに大人気。</p>
              </div>

              {/* 宿基本情報 */}
              <div className="text-xs text-stone-500 grid sm:grid-cols-2 gap-2 bg-stone-50 p-4 rounded-xl">
                <div><span className="font-semibold text-stone-700">住所：</span>神奈川県 足柄下郡箱根町湯本256-1</div>
                <div><span className="font-semibold text-stone-700">宿泊目安：</span>¥17,600〜 /人</div>
                <div><span className="font-semibold text-stone-700">楽天施設ID：</span>1729</div>
                <div><span className="font-semibold text-stone-700">予約区分：</span>楽天ふるさと納税トラベルクーポン対象</div>
              </div>

              <div className="pt-2">
                <a
                  href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FJBe8h%2F%3Ff_no%3D1729"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full text-center bg-gradient-to-r from-amber-700 to-amber-900 hover:from-amber-800 hover:to-stone-900 text-white font-bold py-3.5 px-6 rounded-xl shadow transition"
                >
                  【楽天トラベル】箱根湯本温泉　湯本富士屋ホテル の宿泊プランとクーポン適用はこちら →
                </a>
              </div>
            </div>
          </article>
        </section>

        {/* エリア観光・見どころ */}
        <section className="space-y-4">
          <h2 className="text-xl sm:text-2xl font-bold font-serif text-stone-900 flex items-center gap-2">
            <span>🗺️</span> 箱根湯本駅前商店街・早川渓谷＆芦ノ湖・彫刻の森観光ガイド
          </h2>
          <div className="grid gap-4">

            <div className="bg-white p-5 rounded-2xl border border-stone-200/80 shadow-sm space-y-2">
              <h4 className="font-bold text-stone-900 text-sm sm:text-base font-serif flex items-center gap-2">
                <span className="w-6 h-6 rounded-full bg-amber-100 text-amber-900 flex items-center justify-center text-xs font-sans font-bold">1</span>
                箱根湯本駅前商店街での食べ歩き＆寄木細工ショッピング
              </h4>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed pl-8">
                焼き立ての「箱根まんじゅう」や籠清のかまぼこ、ジェラートなどのグルメが充実。伝統工芸品「箱根寄木細工」の体験工房やお土産探しも楽しめます。
              </p>
            </div>
            <div className="bg-white p-5 rounded-2xl border border-stone-200/80 shadow-sm space-y-2">
              <h4 className="font-bold text-stone-900 text-sm sm:text-base font-serif flex items-center gap-2">
                <span className="w-6 h-6 rounded-full bg-amber-100 text-amber-900 flex items-center justify-center text-xs font-sans font-bold">2</span>
                早川渓谷のあじさい橋散策と須雲川遊歩道
              </h4>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed pl-8">
                朱塗りの欄干が美しい「あじさい橋」。早川の清流を眺めながら川沿いの遊歩道を散歩すれば、初夏の紫陽花や秋の紅葉など豊かな四季を満喫できます。
              </p>
            </div>
            <div className="bg-white p-5 rounded-2xl border border-stone-200/80 shadow-sm space-y-2">
              <h4 className="font-bold text-stone-900 text-sm sm:text-base font-serif flex items-center gap-2">
                <span className="w-6 h-6 rounded-full bg-amber-100 text-amber-900 flex items-center justify-center text-xs font-sans font-bold">3</span>
                箱根登山電車で行く彫刻の森美術館＆強羅・芦ノ湖
              </h4>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed pl-8">
                スイッチバックで急勾配を登る日本有数の山岳鉄道「箱根登山電車」。彫刻の森美術館や大涌谷の黒たまご、芦ノ湖の海賊船へと続く黄金ルートの起点です。
              </p>
            </div>
          </div>
        </section>

        {/* ふるさと納税活用ステップ */}
        <section className="bg-gradient-to-br from-amber-900 via-stone-900 to-stone-950 text-white rounded-3xl p-6 sm:p-8 shadow-xl space-y-6">
          <div className="space-y-2">
            <span className="text-xs uppercase tracking-widest text-amber-300 font-semibold">How to Use Coupon</span>
            <h2 className="text-xl sm:text-2xl font-bold font-serif text-amber-50">
              神奈川県箱根町ふるさと納税×楽天トラベルクーポン活用手順
            </h2>
            <p className="text-stone-300 text-xs sm:text-sm">
              初めての方でも迷わず利用できる3ステップ。予約済みのプランにも後から適用可能です。
            </p>
          </div>

          <div className="grid sm:grid-cols-3 gap-4 text-xs sm:text-sm">

            <div className="bg-stone-900/60 p-4 rounded-2xl border border-amber-500/20 space-y-2">
              <span className="inline-block bg-amber-500/20 text-amber-300 font-mono text-xs px-2.5 py-0.5 rounded font-semibold">
                Step 1: 楽天ふるさと納税で「神奈川県箱根町」クーポンを獲得
              </span>
              <p className="text-stone-300 text-xs sm:text-sm leading-relaxed">
                楽天ふるさと納税で箱根町を選び、トラベルクーポンを返礼品として申し込みます。寄付額の30%相当のクーポンがアカウントに即時付与されます。
              </p>
            </div>
            <div className="bg-stone-900/60 p-4 rounded-2xl border border-amber-500/20 space-y-2">
              <span className="inline-block bg-amber-500/20 text-amber-300 font-mono text-xs px-2.5 py-0.5 rounded font-semibold">
                Step 2: 小田急ロマンスカー等で箱根湯本へ快適アクセス
              </span>
              <p className="text-stone-300 text-xs sm:text-sm leading-relaxed">
                新宿駅から小田急特急ロマンスカーで約85分、新幹線利用なら小田原経由で約1時間。3年間の有効期間内で、春夏秋冬のお好みの季節に合わせて旅行計画を立てられます。
              </p>
            </div>
            <div className="bg-stone-900/60 p-4 rounded-2xl border border-amber-500/20 space-y-2">
              <span className="inline-block bg-amber-500/20 text-amber-300 font-mono text-xs px-2.5 py-0.5 rounded font-semibold">
                Step 3: 楽天トラベル予約画面でクーポン割引を適用して予約完了
              </span>
              <p className="text-stone-300 text-xs sm:text-sm leading-relaxed">
                はつはな、吉池旅館、湯本富士屋ホテルなどの対象プランを選び、決済時にクーポンを選択すれば宿泊代金から大幅な割引が適用されます。
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
