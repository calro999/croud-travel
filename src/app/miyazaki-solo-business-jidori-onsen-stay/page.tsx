import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: '【宮崎出張＆南国ソログルメ泊】橘通り中心街・天然温泉大浴場・地鶏炭火焼！チキン南蛮を満喫する極上ホテル 厳選3選',
  description: '温暖な気候と青い空が広がる南国・宮崎市！「繁華街・橘通りの真ん中で天然温泉大浴場と冷汁朝食」を誇る「天然温泉 日向の湯 ドーミーイン宮崎」、大淀川のほとりに佇み名湯たまゆらの湯が湧く老舗「宮崎観光ホテル」、宮崎駅西口すぐでシティビューを望む「アートホテル宮崎 スカイタワー」を徹底特集。',
  keywords: '宮崎 出張 ホテル 温泉,宮崎 一人旅 ホテル おすすめ,ドーミーイン宮崎 宿泊,宮崎観光ホテル たまゆらの湯,宮崎 地鶏炭火焼 ホテル',
  openGraph: {
    title: '【宮崎出張＆南国ソログルメ泊】橘通り中心街・天然温泉大浴場・地鶏炭火焼！チキン南蛮を満喫する極上ホテル 厳選3選',
    description: '温暖な気候と青い空が広がる南国・宮崎市！「繁華街・橘通りの真ん中で天然温泉大浴場と冷汁朝食」を誇る「天然温泉 日向の湯 ドーミーイン宮崎」、大淀川のほとりに佇み名湯たまゆらの湯が湧く老舗「宮崎観光ホテル」、宮崎駅西口すぐでシティビューを望む「アートホテル宮崎 スカイタワー」を徹底特集。',
    url: 'https://croud-travel.pages.dev/miyazaki-solo-business-jidori-onsen-stay',
    siteName: 'トラベルガイド - クラウドトラベル',
    locale: 'ja_JP',
    type: 'article',
  },
};

export default function ArticlePage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: '【宮崎出張＆南国ソログルメ泊】橘通り中心街・天然温泉大浴場・地鶏炭火焼！チキン南蛮を満喫する極上ホテル 厳選3選',
    description: '温暖な気候と青い空が広がる南国・宮崎市！「繁華街・橘通りの真ん中で天然温泉大浴場と冷汁朝食」を誇る「天然温泉 日向の湯 ドーミーイン宮崎」、大淀川のほとりに佇み名湯たまゆらの湯が湧く老舗「宮崎観光ホテル」、宮崎駅西口すぐでシティビューを望む「アートホテル宮崎 スカイタワー」を徹底特集。',
    author: {
      '@type': 'Organization',
      name: 'クラウドトラベル ひとり旅・出張調査班',
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
    datePublished: '2026-09-11T12:30:00+09:00',
    dateModified: '2026-09-11T12:30:00+09:00',
    mainEntityOfPage: 'https://croud-travel.pages.dev/miyazaki-solo-business-jidori-onsen-stay',
  };

  return (
    <main className="min-h-screen bg-stone-50 text-stone-800 antialiased font-sans pb-20">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* パンくずリスト */}
      <nav className="max-w-4xl mx-auto px-4 sm:px-6 pt-6 pb-2 text-xs text-stone-500 flex items-center gap-1.5 flex-wrap">
        <Link href="/" className="hover:underline">ホーム</Link>
        <span>/</span>
        <span className="text-stone-700 font-medium">宮崎・出張＆地鶏炭火焼・天然温泉特集</span>
        <span>/</span>
        <span className="text-stone-700 font-medium truncate">【宮崎出張＆南国ソログルメ泊】橘通り中心街・天然温泉大浴場・地鶏炭火焼！チキン南蛮を満喫する極上ホテル 厳選3選</span>
      </nav>

      {/* ヒーローヘッダー */}
      <header className="max-w-4xl mx-auto px-4 sm:px-6 py-8 sm:py-12 space-y-4">
        <div className="inline-flex items-center gap-2 bg-amber-100/90 text-amber-950 text-xs font-semibold px-3.5 py-1.5 rounded-full border border-amber-300/80 shadow-xs">
          <span>✨</span>
          <span>宮崎・出張＆地鶏炭火焼・天然温泉特集</span>
        </div>
        <h1 className="text-2xl sm:text-4xl font-extrabold font-serif text-stone-900 tracking-tight leading-snug">
          【宮崎出張＆南国ソログルメ泊】橘通り中心街・天然温泉大浴場・地鶏炭火焼！チキン南蛮を満喫する極上ホテル 厳選3選
        </h1>
        <p className="text-stone-600 text-sm sm:text-base leading-relaxed pt-2">
          温暖な気候と青い空が広がる南国・宮崎市！「繁華街・橘通りの真ん中で天然温泉大浴場と冷汁朝食」を誇る「天然温泉 日向の湯 ドーミーイン宮崎」、大淀川のほとりに佇み名湯たまゆらの湯が湧く老舗「宮崎観光ホテル」、宮崎駅西口すぐでシティビューを望む「アートホテル宮崎 スカイタワー」を徹底特集。
        </p>
      </header>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 space-y-12">
        {/* リード文セクション */}
        <section className="bg-white rounded-3xl p-6 sm:p-8 shadow-sm border border-stone-200/80 space-y-4">
          <h2 className="text-lg sm:text-xl font-bold font-serif text-amber-950 border-b border-amber-100 pb-3">
            ヤシの並木に降り注ぐ南国の陽光と、真っ黒に煙る地鶏炭火焼きの香ばしさ——大淀川のせせらぎと名湯に癒やされる「宮崎プレミアムステイ」
          </h2>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed">
            宮崎空港からJR特急でわずか約10分という驚異的なアクセスの良さを誇る宮崎市。街の中心を流れる大淀川沿いにはフェニックス（ヤシ）の木が揺れ、年中温暖で穏やかな南国情緒が漂います。日中の商談や視察を終えた後の夜の楽しみは、歓楽街「ニシタチ（西橘通り）」でのグルメ探訪。豪快な炭火の炎で焼き上げられる「地鶏炭火焼き」、甘酢と自家製タルタルソースが絡む本場の「チキン南蛮」、そして宮崎牛や本格芋焼酎「霧島」「木挽BLUE」が旅人を魅了します。
          </p>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed">
            そんな宮崎出張を最高のリフレッシュタイムに変えてくれるのが、中心街にいながら手足を伸ばせる「天然温泉大浴場」や、大淀川のリバーサイドに湧く歴史ある名湯です。サウナで汗を流し、夜はニシタチの赤提灯で地元の人々と乾杯、翌朝は名物「冷汁（ひやじる）」でサラサラとエネルギー補給。今回は出張・ひとり旅に最適な宮崎の厳選3宿をご紹介します。
          </p>
        </section>

        {/* 厳選ホテルリスト */}
        <div className="space-y-10">
          <div className="border-l-4 border-amber-800 pl-4 py-1">
            <h2 className="text-xl sm:text-2xl font-bold font-serif text-stone-900">
              編集部が厳選！おすすめの極上宿・ホテル詳細
            </h2>
            <p className="text-xs sm:text-sm text-stone-500 mt-1">
              楽天トラベルの最新APIデータを反映。口コミ高評価＆こだわり設備を徹底チェック
            </p>
          </div>

          
          <article className="bg-white rounded-3xl overflow-hidden shadow-sm border border-stone-200 hover:shadow-md transition-shadow">
            <div className="relative h-64 sm:h-80 w-full bg-stone-100 overflow-hidden">
              <Image
                src="https://img.travel.rakuten.co.jp/share/HOTEL/162643/162643.jpg"
                alt="天然温泉　日向の湯　ドーミーイン宮崎（ドーミーイン・御宿野乃　ホテルズグループ）"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 800px"
              />
              <div className="absolute top-4 left-4 bg-black/60 backdrop-blur-md text-white text-xs font-bold px-3 py-1.5 rounded-full">
                第1選
              </div>
              <div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-md text-stone-800 text-xs font-semibold px-3 py-1 rounded-md shadow-xs">
                楽天総合評価 ★ 4.41 点（1589件）
              </div>
            </div>

            <div className="p-6 sm:p-8 space-y-6">
              <div>
                <p className="text-amber-800 font-bold text-xs sm:text-sm tracking-wide mb-1">
                  繁華街「ニシタチ」徒歩すぐ！最上階12階の天然温泉大浴場「日向の湯」＆高温サウナ・名物夜鳴きそば
                </p>
                <h3 className="text-xl sm:text-2xl font-bold font-serif text-stone-900 leading-snug">
                  天然温泉 日向の湯 ドーミーイン宮崎 —— 橘通りのオアシス。天然温泉と水風呂サウナでととのい、地鶏酒場へ繰り出す安心ステイ
                </h3>
              </div>

              <div className="space-y-3 bg-stone-50/80 p-4 sm:p-5 rounded-2xl border border-stone-100">
                <h4 className="text-xs font-bold uppercase tracking-wider text-stone-500">
                  注目のポイント＆魅力
                </h4>
                <div className="grid gap-3 sm:grid-cols-3">
                  
                  <div className="bg-white p-3.5 rounded-xl border border-stone-200/60 space-y-1">
                    <p className="text-xs font-bold text-amber-950">最上階12階に広がる男女別天然温泉大浴場「日向の湯」＆露天風呂・サウナ</p>
                    <p className="text-xs text-stone-600 leading-relaxed">ナトリウム塩化物泉の温まりの湯。サウナでディープにととのって出張の疲れを完全リセットできます。</p>
                  </div>
                  
                  <div className="bg-white p-3.5 rounded-xl border border-stone-200/60 space-y-1">
                    <p className="text-xs font-bold text-amber-950">名物「夜鳴きそば」や湯上がりアイス、乳酸菌飲料の無料サービス</p>
                    <p className="text-xs text-stone-600 leading-relaxed">ニシタチで地鶏と焼酎を楽しんだ後のシメに最適。一人旅でもホッと心温まるおもてなしです。</p>
                  </div>
                  
                  <div className="bg-white p-3.5 rounded-xl border border-stone-200/60 space-y-1">
                    <p className="text-xs font-bold text-amber-950">宮崎名物「冷汁」や「チキン南蛮」が並ぶ大人気の朝食バイキング</p>
                    <p className="text-xs text-stone-600 leading-relaxed">朝からご当地グルメを満喫。香ばしい胡麻味噌出汁の冷汁でさっぱりと一日をスタートできます。</p>
                  </div>
                  
                </div>
              </div>

              <div className="space-y-2 text-xs sm:text-sm text-stone-600 bg-amber-50/50 p-4 rounded-xl border border-amber-100/60">
                <p className="font-semibold text-amber-900">📝 宿泊者の生の声・評判：</p>
                <p className="leading-relaxed text-stone-700">楽天トラベル評価4.41点。「ニシタチの目の前で夜の飲食に最高の立地！最上階の温泉とサウナが気持ちよすぎました」「朝食の冷汁とチキン南蛮も絶品」と大絶賛。</p>
              </div>

              <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-stone-100">
                <div className="text-xs text-stone-500 space-y-0.5 text-center sm:text-left">
                  <p>📍 宮崎県宮崎市橘通西2-5-32</p>
                  <p>🚆 宮崎空港から空港リムジンバス「橘通2丁目」バス停より徒歩1分。JR宮崎駅　西口より車で約5分。</p>
                </div>
                <div className="flex items-center gap-3 w-full sm:w-auto">
                  <a
                    href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fhb.afl.rakuten.co.jp%2Fhgc%2F54d2a438.4bc4abc2.54d2a439.aa1be583%2F%3Fpc%3Dhttps%253A%252F%252Fimg.travel.rakuten.co.jp%252Fimage%252Ftr%252Fapi%252Fkw%252FJBe8h%252F%253Ff_no%253D162643"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full sm:w-auto text-center bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white font-bold text-sm px-6 py-3 rounded-xl shadow-md transition-all duration-200"
                  >
                    楽天トラベルで空室・プランを見る →
                  </a>
                </div>
              </div>
            </div>
          </article>
            
          <article className="bg-white rounded-3xl overflow-hidden shadow-sm border border-stone-200 hover:shadow-md transition-shadow">
            <div className="relative h-64 sm:h-80 w-full bg-stone-100 overflow-hidden">
              <Image
                src="https://img.travel.rakuten.co.jp/share/HOTEL/17916/17916.jpg"
                alt="天然温泉”たまゆらの湯”　宮崎観光ホテル"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 800px"
              />
              <div className="absolute top-4 left-4 bg-black/60 backdrop-blur-md text-white text-xs font-bold px-3 py-1.5 rounded-full">
                第2選
              </div>
              <div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-md text-stone-800 text-xs font-semibold px-3 py-1 rounded-md shadow-xs">
                楽天総合評価 ★ 4.17 点（2630件）
              </div>
            </div>

            <div className="p-6 sm:p-8 space-y-6">
              <div>
                <p className="text-amber-800 font-bold text-xs sm:text-sm tracking-wide mb-1">
                  昭和天皇や皇室をお迎えしてきた名門リゾート！大淀川沿いに佇み地下から湧く名湯「たまゆらの湯」
                </p>
                <h3 className="text-xl sm:text-2xl font-bold font-serif text-stone-900 leading-snug">
                  宮崎観光ホテル —— 南国の風薫るリバーサイド。美肌の天然温泉露天風呂と充実の直営レストラン
                </h3>
              </div>

              <div className="space-y-3 bg-stone-50/80 p-4 sm:p-5 rounded-2xl border border-stone-100">
                <h4 className="text-xs font-bold uppercase tracking-wider text-stone-500">
                  注目のポイント＆魅力
                </h4>
                <div className="grid gap-3 sm:grid-cols-3">
                  
                  <div className="bg-white p-3.5 rounded-xl border border-stone-200/60 space-y-1">
                    <p className="text-xs font-bold text-amber-950">地下から湧き出る弱アルカリ性の天然温泉「たまゆらの湯」（露天風呂・サウナ完備）</p>
                    <p className="text-xs text-stone-600 leading-relaxed">とろりとした肌触りの美肌湯。川風を感じながら浸かる露天風呂で出張の疲れを優しく癒やします。</p>
                  </div>
                  
                  <div className="bg-white p-3.5 rounded-xl border border-stone-200/60 space-y-1">
                    <p className="text-xs font-bold text-amber-950">大淀川のパノラマを望む広々とした客室とフェニックスの並木道</p>
                    <p className="text-xs text-stone-600 leading-relaxed">南国情緒豊かなリゾート感。一人での滞在でも圧倒的な開放感と寛ぎを味わうことができます。</p>
                  </div>
                  
                  <div className="bg-white p-3.5 rounded-xl border border-stone-200/60 space-y-1">
                    <p className="text-xs font-bold text-amber-950">宮崎牛鉄板焼きや本格郷土料理を味わえるホテル内ダイニング</p>
                    <p className="text-xs text-stone-600 leading-relaxed">老舗ならではの洗練されたおもてなし。外に出ずとも極上のディナーを優雅に堪能できます。</p>
                  </div>
                  
                </div>
              </div>

              <div className="space-y-2 text-xs sm:text-sm text-stone-600 bg-amber-50/50 p-4 rounded-xl border border-amber-100/60">
                <p className="font-semibold text-amber-900">📝 宿泊者の生の声・評判：</p>
                <p className="leading-relaxed text-stone-700">楽天トラベル評価4.17点。「大淀川を眺めながら入る露天風呂が最高でした」「老舗の風格がありスタッフの対応も素晴らしく、とても落ち着けました」と定評。</p>
              </div>

              <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-stone-100">
                <div className="text-xs text-stone-500 space-y-0.5 text-center sm:text-left">
                  <p>📍 宮崎県宮崎市松山1-1-1</p>
                  <p>🚆 JR宮崎駅よりタクシーで約5分　宮崎空港より車で約15分　橘通1丁目バス停より徒歩約10分</p>
                </div>
                <div className="flex items-center gap-3 w-full sm:w-auto">
                  <a
                    href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fhb.afl.rakuten.co.jp%2Fhgc%2F54d2a438.4bc4abc2.54d2a439.aa1be583%2F%3Fpc%3Dhttps%253A%252F%252Fimg.travel.rakuten.co.jp%252Fimage%252Ftr%252Fapi%252Fkw%252FJBe8h%252F%253Ff_no%253D17916"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full sm:w-auto text-center bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white font-bold text-sm px-6 py-3 rounded-xl shadow-md transition-all duration-200"
                  >
                    楽天トラベルで空室・プランを見る →
                  </a>
                </div>
              </div>
            </div>
          </article>
            
          <article className="bg-white rounded-3xl overflow-hidden shadow-sm border border-stone-200 hover:shadow-md transition-shadow">
            <div className="relative h-64 sm:h-80 w-full bg-stone-100 overflow-hidden">
              <Image
                src="https://img.travel.rakuten.co.jp/share/HOTEL/16531/16531.jpg"
                alt="アートホテル宮崎　スカイタワー"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 800px"
              />
              <div className="absolute top-4 left-4 bg-black/60 backdrop-blur-md text-white text-xs font-bold px-3 py-1.5 rounded-full">
                第3選
              </div>
              <div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-md text-stone-800 text-xs font-semibold px-3 py-1 rounded-md shadow-xs">
                楽天総合評価 ★ 4.05 点（2368件）
              </div>
            </div>

            <div className="p-6 sm:p-8 space-y-6">
              <div>
                <p className="text-amber-800 font-bold text-xs sm:text-sm tracking-wide mb-1">
                  JR宮崎駅西口から徒歩約5分！高層タワーホテルならではのシティビューと機能的なモダン客室
                </p>
                <h3 className="text-xl sm:text-2xl font-bold font-serif text-stone-900 leading-snug">
                  アートホテル宮崎 スカイタワー —— 駅近の上質拠点。シモンズ製ベッドと郷土の恵みを味わう和洋朝食
                </h3>
              </div>

              <div className="space-y-3 bg-stone-50/80 p-4 sm:p-5 rounded-2xl border border-stone-100">
                <h4 className="text-xs font-bold uppercase tracking-wider text-stone-500">
                  注目のポイント＆魅力
                </h4>
                <div className="grid gap-3 sm:grid-cols-3">
                  
                  <div className="bg-white p-3.5 rounded-xl border border-stone-200/60 space-y-1">
                    <p className="text-xs font-bold text-amber-950">宮崎駅西口から徒歩5分の好立地で空港アクセス特急の利用にも最適</p>
                    <p className="text-xs text-stone-600 leading-relaxed">チェックイン前後に荷物を預けてスムーズに行動可能。飲食街へも徒歩圏内です。</p>
                  </div>
                  
                  <div className="bg-white p-3.5 rounded-xl border border-stone-200/60 space-y-1">
                    <p className="text-xs font-bold text-amber-950">全室シモンズ社製ベッドと加湿空気清浄機を完備した快適空間</p>
                    <p className="text-xs text-stone-600 leading-relaxed">高速Wi-Fi完備で出張のテレワークも快適。静音性に優れ、快適な眠りをサポートします。</p>
                  </div>
                  
                  <div className="bg-white p-3.5 rounded-xl border border-stone-200/60 space-y-1">
                    <p className="text-xs font-bold text-amber-950">宮崎郷土料理と地元食材を取り入れた和洋モーニングビュッフェ</p>
                    <p className="text-xs text-stone-600 leading-relaxed">朝から活力満点の美味しい食事。出張の一日を元気にスタートできます。</p>
                  </div>
                  
                </div>
              </div>

              <div className="space-y-2 text-xs sm:text-sm text-stone-600 bg-amber-50/50 p-4 rounded-xl border border-amber-100/60">
                <p className="font-semibold text-amber-900">📝 宿泊者の生の声・評判：</p>
                <p className="leading-relaxed text-stone-700">楽天トラベル評価4.05点。「宮崎駅から近くてわかりやすく、部屋も高層階で綺麗でした」「コスパが良くビジネス利用にとても使いやすいホテル」と好評。</p>
              </div>

              <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-stone-100">
                <div className="text-xs text-stone-500 space-y-0.5 text-center sm:text-left">
                  <p>📍 宮崎県宮崎市高千穂通2-1-26</p>
                  <p>🚆 【宮崎駅から徒歩5分／宮崎空港から車で約20分】宮崎ＩＣ・宮崎西ＩＣから車で約15分</p>
                </div>
                <div className="flex items-center gap-3 w-full sm:w-auto">
                  <a
                    href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fhb.afl.rakuten.co.jp%2Fhgc%2F54d2a438.4bc4abc2.54d2a439.aa1be583%2F%3Fpc%3Dhttps%253A%252F%252Fimg.travel.rakuten.co.jp%252Fimage%252Ftr%252Fapi%252Fkw%252FJBe8h%252F%253Ff_no%253D16531"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full sm:w-auto text-center bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white font-bold text-sm px-6 py-3 rounded-xl shadow-md transition-all duration-200"
                  >
                    楽天トラベルで空室・プランを見る →
                  </a>
                </div>
              </div>
            </div>
          </article>
            
        </div>

        {/* ガイド・ノウハウセクション */}
        <section className="bg-stone-900 text-stone-100 rounded-3xl p-6 sm:p-8 space-y-6">
          <div className="space-y-1">
            <div className="inline-block bg-amber-500 text-stone-950 font-bold text-xs px-2.5 py-1 rounded-md">
              TIPS & GUIDE
            </div>
            <h2 className="text-xl sm:text-2xl font-bold font-serif text-white">
              宮崎「ニシタチ」の夜を一人で満喫するスマートグルメガイド
            </h2>
          </div>

          <div className="grid gap-4 sm:grid-cols-3">
            
            <div className="bg-stone-800/80 p-4 rounded-2xl border border-stone-700/60 space-y-2">
              <h3 className="text-sm font-bold text-amber-300">
                1. 暖簾をくぐってカウンター席で「もも焼き（バラシ）」を注文
              </h3>
              <p className="text-xs text-stone-300 leading-relaxed">
                鶏の脂を炭火に落として立ち上がる黒い煙で燻し焼きにするみやざき地頭鶏。噛むほどに旨味が溢れ、柚子胡椒との相性は抜群です。
              </p>
            </div>
            
            <div className="bg-stone-800/80 p-4 rounded-2xl border border-stone-700/60 space-y-2">
              <h3 className="text-sm font-bold text-amber-300">
                2. 芋焼酎を「水割り・氷なし（またはロック）」で楽しむ
              </h3>
              <p className="text-xs text-stone-300 leading-relaxed">
                宮崎の焼酎はアルコール度数20度が主流で、まろやかで口当たりが優しいのが特徴。「黒霧島」や「木挽BLUE」を地元スタイルで。
              </p>
            </div>
            
            <div className="bg-stone-800/80 p-4 rounded-2xl border border-stone-700/60 space-y-2">
              <h3 className="text-sm font-bold text-amber-300">
                3. シメには名物「辛麺（からめん）」または「釜揚げうどん」
              </h3>
              <p className="text-xs text-stone-300 leading-relaxed">
                こんにゃく麺とニンニク・唐辛子・卵が絡む辛麺、または飲んだ後の胃に優しい細麺の釜揚げうどん（重乃井など）で締めるのが宮崎流です。
              </p>
            </div>
            
          </div>
        </section>

        {/* よくある質問 FAQ */}
        <section className="bg-white rounded-3xl p-6 sm:p-8 shadow-sm border border-stone-200/80 space-y-6">
          <h2 className="text-lg sm:text-xl font-bold font-serif text-stone-900 border-b border-stone-200 pb-3">
            よくある質問（FAQ）
          </h2>
          <div className="space-y-4">
            
            <div className="space-y-1.5 bg-stone-50 p-4 rounded-xl">
              <h3 className="text-sm font-bold text-stone-900 flex items-start gap-2">
                <span className="text-amber-800 font-extrabold">Q.</span>
                <span>宮崎空港から市内ホテルへのアクセスはどうですか？</span>
              </h3>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed pl-5">
                宮崎空港駅からJR空港線の特急・普通列車に乗れば、約10〜12分でJR宮崎駅へ直結。中心街（橘通り）へは空港リムジンバスで約20〜25分で直行できます。
              </p>
            </div>
            
            <div className="space-y-1.5 bg-stone-50 p-4 rounded-xl">
              <h3 className="text-sm font-bold text-stone-900 flex items-start gap-2">
                <span className="text-amber-800 font-extrabold">Q.</span>
                <span>一人でチキン南蛮の有名店に入れますか？</span>
              </h3>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed pl-5">
                発祥の店「おぐら本店」や中心街の洋食店・居酒屋は一人客の利用が非常に多く、カウンター席や一人用席で気兼ねなく名物チキン南蛮を堪能できます。
              </p>
            </div>
            
          </div>
        </section>

        {/* 関連リンク・ナビゲーション */}
        <div className="text-center pt-8 border-t border-stone-200">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm text-stone-600 hover:text-stone-900 font-medium transition-colors"
          >
            ← クラウドトラベル トップページへ戻る
          </Link>
        </div>
      </div>
    </main>
  );
}
