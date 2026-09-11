import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: '【新潟出張＆地酒ひとり旅】信濃川パノラマ・天然温泉サウナ・ぽんしゅ館利き酒！日本海美食を堪能する極上宿 厳選3選',
  description: '上越新幹線で東京から最短約1時間29分！日本一の米どころ・酒どころである新潟。「信濃川と日本海を見下ろす地上140mのランドマーク」を誇る「ホテル日航新潟」、新潟駅万代口徒歩すぐで天然温泉大浴場と夜鳴きそば完備の「ドーミーイン新潟」、新幹線直結の好アクセスを誇る「アートホテル新潟駅前」を徹底特集。',
  keywords: '新潟 出張 ホテル 温泉,新潟 一人旅 ホテル おすすめ,ホテル日航新潟 宿泊,ドーミーイン新潟 温泉,ぽんしゅ館 新潟駅 ホテル',
  openGraph: {
    title: '【新潟出張＆地酒ひとり旅】信濃川パノラマ・天然温泉サウナ・ぽんしゅ館利き酒！日本海美食を堪能する極上宿 厳選3選',
    description: '上越新幹線で東京から最短約1時間29分！日本一の米どころ・酒どころである新潟。「信濃川と日本海を見下ろす地上140mのランドマーク」を誇る「ホテル日航新潟」、新潟駅万代口徒歩すぐで天然温泉大浴場と夜鳴きそば完備の「ドーミーイン新潟」、新幹線直結の好アクセスを誇る「アートホテル新潟駅前」を徹底特集。',
    url: 'https://croud-travel.pages.dev/niigata-solo-business-sake-seafood-stay',
    siteName: 'トラベルガイド - クラウドトラベル',
    locale: 'ja_JP',
    type: 'article',
  },
};

export default function ArticlePage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: '【新潟出張＆地酒ひとり旅】信濃川パノラマ・天然温泉サウナ・ぽんしゅ館利き酒！日本海美食を堪能する極上宿 厳選3選',
    description: '上越新幹線で東京から最短約1時間29分！日本一の米どころ・酒どころである新潟。「信濃川と日本海を見下ろす地上140mのランドマーク」を誇る「ホテル日航新潟」、新潟駅万代口徒歩すぐで天然温泉大浴場と夜鳴きそば完備の「ドーミーイン新潟」、新幹線直結の好アクセスを誇る「アートホテル新潟駅前」を徹底特集。',
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
    datePublished: '2026-09-11T03:30:00+09:00',
    dateModified: '2026-09-11T03:30:00+09:00',
    mainEntityOfPage: 'https://croud-travel.pages.dev/niigata-solo-business-sake-seafood-stay',
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
        <span className="text-stone-700 font-medium">新潟・出張＆日本酒・日本海美食特集</span>
        <span>/</span>
        <span className="text-stone-700 font-medium truncate">【新潟出張＆地酒ひとり旅】信濃川パノラマ・天然温泉サウナ・ぽんしゅ館利き酒！日本海美食を堪能する極上宿 厳選3選</span>
      </nav>

      {/* ヒーローヘッダー */}
      <header className="max-w-4xl mx-auto px-4 sm:px-6 py-8 sm:py-12 space-y-4">
        <div className="inline-flex items-center gap-2 bg-amber-100/90 text-amber-950 text-xs font-semibold px-3.5 py-1.5 rounded-full border border-amber-300/80 shadow-xs">
          <span>✨</span>
          <span>新潟・出張＆日本酒・日本海美食特集</span>
        </div>
        <h1 className="text-2xl sm:text-4xl font-extrabold font-serif text-stone-900 tracking-tight leading-snug">
          【新潟出張＆地酒ひとり旅】信濃川パノラマ・天然温泉サウナ・ぽんしゅ館利き酒！日本海美食を堪能する極上宿 厳選3選
        </h1>
        <p className="text-stone-600 text-sm sm:text-base leading-relaxed pt-2">
          上越新幹線で東京から最短約1時間29分！日本一の米どころ・酒どころである新潟。「信濃川と日本海を見下ろす地上140mのランドマーク」を誇る「ホテル日航新潟」、新潟駅万代口徒歩すぐで天然温泉大浴場と夜鳴きそば完備の「ドーミーイン新潟」、新幹線直結の好アクセスを誇る「アートホテル新潟駅前」を徹底特集。
        </p>
      </header>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 space-y-12">
        {/* リード文セクション */}
        <section className="bg-white rounded-3xl p-6 sm:p-8 shadow-sm border border-stone-200/80 space-y-4">
          <h2 className="text-lg sm:text-xl font-bold font-serif text-amber-950 border-b border-amber-100 pb-3">
            悠然と流れる信濃川の水面と、八海山や久保田を注ぐ猪口のぬくもり——米どころ・酒どころで五感を満たす「新潟プレミアム出張」
          </h2>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed">
            日本最長の大河・信濃川が日本海へと注ぎ、豊かな越後平野の恵みが集まる港町・新潟。上越新幹線の終着駅であり、本州日本海側最大の都市として官公庁や企業支店がひしめく重要拠点です。日中の商談や現場視察を終えた後の夜の楽しみは、何と言っても新潟駅構内「ぽんしゅ館」での越後銘酒の唎き酒体験や、古町（ふるまち）・万代の花街情緒が残る割烹でのどぐろ塩焼き、南蛮エビ、タレかつを味わうひととき。
          </p>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed">
            そんな新潟での滞在を特別な時間に変えてくれるのが、水辺のダイナミックな景観を望む高層シティホテルや、疲れをリセットする天然温泉大浴場を備えた宿です。魚沼産コシヒカリの炊きたてご飯と郷土料理「のっぺ」が並ぶ朝食で活力を得て、翌朝の仕事や旅へ出発する。今回は出張とソロ呑みを完璧に満たす新潟の厳選3宿をご紹介します。
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
                src="https://img.travel.rakuten.co.jp/share/HOTEL/16683/16683.jpg"
                alt="ホテル日航新潟"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 800px"
              />
              <div className="absolute top-4 left-4 bg-black/60 backdrop-blur-md text-white text-xs font-bold px-3 py-1.5 rounded-full">
                第1選
              </div>
              <div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-md text-stone-800 text-xs font-semibold px-3 py-1 rounded-md shadow-xs">
                楽天総合評価 ★ 4.58 点（3484件）
              </div>
            </div>

            <div className="p-6 sm:p-8 space-y-6">
              <div>
                <p className="text-amber-800 font-bold text-xs sm:text-sm tracking-wide mb-1">
                  朱鷺メッセ直結！地上31階・日本海側最高層ビルから信濃川河口と日本海・佐渡島を一望するランドマーク
                </p>
                <h3 className="text-xl sm:text-2xl font-bold font-serif text-stone-900 leading-snug">
                  ホテル日航新潟 —— 空と海が溶け合うスカイビュー。全室22階以上の高層階とシェフが目の前で炊く極上魚沼産コシヒカリ
                </h3>
              </div>

              <div className="space-y-3 bg-stone-50/80 p-4 sm:p-5 rounded-2xl border border-stone-100">
                <h4 className="text-xs font-bold uppercase tracking-wider text-stone-500">
                  注目のポイント＆魅力
                </h4>
                <div className="grid gap-3 sm:grid-cols-3">
                  
                  <div className="bg-white p-3.5 rounded-xl border border-stone-200/60 space-y-1">
                    <p className="text-xs font-bold text-amber-950">全客室が22階〜29階の高層階！窓から広がる雄大な信濃川と日本海の絶景</p>
                    <p className="text-xs text-stone-600 leading-relaxed">夜には萬代橋のライトアップや新潟市街の夜景、遠く佐渡島に沈む夕日を部屋から独り占めできます。</p>
                  </div>
                  
                  <div className="bg-white p-3.5 rounded-xl border border-stone-200/60 space-y-1">
                    <p className="text-xs font-bold text-amber-950">大型コンベンション施設「朱鷺メッセ」直結で展示会・学会出張に最強の立地</p>
                    <p className="text-xs text-stone-600 leading-relaxed">ビジネスの移動ストレスがゼロ。信濃川沿いの水上バス乗り場も近く、爽やかな川風散歩も楽しめます。</p>
                  </div>
                  
                  <div className="bg-white p-3.5 rounded-xl border border-stone-200/60 space-y-1">
                    <p className="text-xs font-bold text-amber-950">新潟県産コシヒカリの炊きたてご飯と日本海の海の幸が並ぶ自慢の朝食</p>
                    <p className="text-xs text-stone-600 leading-relaxed">名物タレかつや栃尾の油揚げ、焼き魚など。米どころ新潟ならではの最高の朝の贅沢を味わえます。</p>
                  </div>
                  
                </div>
              </div>

              <div className="space-y-2 text-xs sm:text-sm text-stone-600 bg-amber-50/50 p-4 rounded-xl border border-amber-100/60">
                <p className="font-semibold text-amber-900">📝 宿泊者の生の声・評判：</p>
                <p className="leading-relaxed text-stone-700">楽天トラベル評価4.58点。「お部屋からの夜景が息をのむ美しさで、朝食のお米の美味しさは別格でした」「朱鷺メッセ直結で出張利用に最高峰のホテル」と絶賛。</p>
              </div>

              <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-stone-100">
                <div className="text-xs text-stone-500 space-y-0.5 text-center sm:text-left">
                  <p>📍 新潟県新潟市中央区万代島5-1</p>
                  <p>🚆 新潟駅から車で約8分・路線バス約13分／新潟西ICから約20分／新潟空港から車で約20分／佐渡汽船迄徒歩約7分</p>
                </div>
                <div className="flex items-center gap-3 w-full sm:w-auto">
                  <a
                    href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fhb.afl.rakuten.co.jp%2Fhgc%2F54d2a438.4bc4abc2.54d2a439.aa1be583%2F%3Fpc%3Dhttps%253A%252F%252Fimg.travel.rakuten.co.jp%252Fimage%252Ftr%252Fapi%252Fkw%252FJBe8h%252F%253Ff_no%253D16683"
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
                src="https://img.travel.rakuten.co.jp/share/HOTEL/1977/1977.jpg"
                alt="天然温泉　多宝の湯　ドーミーイン新潟"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 800px"
              />
              <div className="absolute top-4 left-4 bg-black/60 backdrop-blur-md text-white text-xs font-bold px-3 py-1.5 rounded-full">
                第2選
              </div>
              <div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-md text-stone-800 text-xs font-semibold px-3 py-1 rounded-md shadow-xs">
                楽天総合評価 ★ 4.26 点（7727件）
              </div>
            </div>

            <div className="p-6 sm:p-8 space-y-6">
              <div>
                <p className="text-amber-800 font-bold text-xs sm:text-sm tracking-wide mb-1">
                  JR新潟駅万代口徒歩約8分！男女別天然温泉大浴場＆高温サウナ・名物夜鳴きそば完備
                </p>
                <h3 className="text-xl sm:text-2xl font-bold font-serif text-stone-900 leading-snug">
                  天然温泉 多宝の湯 ドーミーイン新潟 —— 万代シテイ近く。天然温泉とサウナでととのい、地酒横丁へ繰り出す安心拠点
                </h3>
              </div>

              <div className="space-y-3 bg-stone-50/80 p-4 sm:p-5 rounded-2xl border border-stone-100">
                <h4 className="text-xs font-bold uppercase tracking-wider text-stone-500">
                  注目のポイント＆魅力
                </h4>
                <div className="grid gap-3 sm:grid-cols-3">
                  
                  <div className="bg-white p-3.5 rounded-xl border border-stone-200/60 space-y-1">
                    <p className="text-xs font-bold text-amber-950">最上階10階に広がる天然温泉大浴場「多宝の湯」＆水風呂・外気浴スペース</p>
                    <p className="text-xs text-stone-600 leading-relaxed">弱アルカリ性の柔らかなお湯が身体の芯まで温めます。サウナで汗を流して出張の疲れを完全リフレッシュ。</p>
                  </div>
                  
                  <div className="bg-white p-3.5 rounded-xl border border-stone-200/60 space-y-1">
                    <p className="text-xs font-bold text-amber-950">名物「夜鳴きそば」や湯上がりアイス、乳酸菌飲料の無料サービス</p>
                    <p className="text-xs text-stone-600 leading-relaxed">古町や駅前で地酒を飲んだ後のシメに最適。一人旅でも温かく迎えてくれる定番の安心感です。</p>
                  </div>
                  
                  <div className="bg-white p-3.5 rounded-xl border border-stone-200/60 space-y-1">
                    <p className="text-xs font-bold text-amber-950">タレかつやのっぺ、新潟名物が並ぶ豪華な和洋朝食バイキング</p>
                    <p className="text-xs text-stone-600 leading-relaxed">朝からご当地グルメを満喫。エネルギーをフル充電して一日をスタートできます。</p>
                  </div>
                  
                </div>
              </div>

              <div className="space-y-2 text-xs sm:text-sm text-stone-600 bg-amber-50/50 p-4 rounded-xl border border-amber-100/60">
                <p className="font-semibold text-amber-900">📝 宿泊者の生の声・評判：</p>
                <p className="leading-relaxed text-stone-700">楽天トラベル評価4.26点。「新潟駅周辺で温泉とサウナに入れるのがありがたい」「万代シテイにも近くて飲食店が多く、一人でも過ごしやすかった」と定評。</p>
              </div>

              <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-stone-100">
                <div className="text-xs text-stone-500 space-y-0.5 text-center sm:text-left">
                  <p>📍 新潟県新潟市中央区明石1-7-14</p>
                  <p>🚆 ＪＲ新潟駅万代口から徒歩約8分</p>
                </div>
                <div className="flex items-center gap-3 w-full sm:w-auto">
                  <a
                    href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fhb.afl.rakuten.co.jp%2Fhgc%2F54d2a438.4bc4abc2.54d2a439.aa1be583%2F%3Fpc%3Dhttps%253A%252F%252Fimg.travel.rakuten.co.jp%252Fimage%252Ftr%252Fapi%252Fkw%252FJBe8h%252F%253Ff_no%253D1977"
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
                src="https://img.travel.rakuten.co.jp/share/HOTEL/67938/67938.jpg"
                alt="アートホテル新潟駅前"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 800px"
              />
              <div className="absolute top-4 left-4 bg-black/60 backdrop-blur-md text-white text-xs font-bold px-3 py-1.5 rounded-full">
                第3選
              </div>
              <div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-md text-stone-800 text-xs font-semibold px-3 py-1 rounded-md shadow-xs">
                楽天総合評価 ★ 4.28 点（6200件）
              </div>
            </div>

            <div className="p-6 sm:p-8 space-y-6">
              <div>
                <p className="text-amber-800 font-bold text-xs sm:text-sm tracking-wide mb-1">
                  JR新潟駅南口直結！新幹線改札から雨や雪に濡れずにチェックインできる抜群の機動力
                </p>
                <h3 className="text-xl sm:text-2xl font-bold font-serif text-stone-900 leading-snug">
                  アートホテル新潟駅前 —— 新潟駅東側連絡通路直結。モダンで広々とした客室と魚沼産コシヒカリ食べ比べ朝食
                </h3>
              </div>

              <div className="space-y-3 bg-stone-50/80 p-4 sm:p-5 rounded-2xl border border-stone-100">
                <h4 className="text-xs font-bold uppercase tracking-wider text-stone-500">
                  注目のポイント＆魅力
                </h4>
                <div className="grid gap-3 sm:grid-cols-3">
                  
                  <div className="bg-white p-3.5 rounded-xl border border-stone-200/60 space-y-1">
                    <p className="text-xs font-bold text-amber-950">新幹線改札から連絡通路で直結！冬の雪や雨の日でも傘なしでスムーズ</p>
                    <p className="text-xs text-stone-600 leading-relaxed">荷物が多い出張でも移動が極めて楽。駅構内の「ぽんしゅ館」へも徒歩ですぐに向かえます。</p>
                  </div>
                  
                  <div className="bg-white p-3.5 rounded-xl border border-stone-200/60 space-y-1">
                    <p className="text-xs font-bold text-amber-950">機能的なワークデスクとシモンズ社製ベッドを完備した快適空間</p>
                    <p className="text-xs text-stone-600 leading-relaxed">高速Wi-Fi完備で客室でのテレワークも快適。静音性に優れ、出張の夜をぐっすり熟睡できます。</p>
                  </div>
                  
                  <div className="bg-white p-3.5 rounded-xl border border-stone-200/60 space-y-1">
                    <p className="text-xs font-bold text-amber-950">南魚沼産コシヒカリと佐渡産コシヒカリの贅沢な「利き米」朝食ビュッフェ</p>
                    <p className="text-xs text-stone-600 leading-relaxed">産地によるお米の甘みや粘りの違いを食べ比べ。新潟の豊かな米文化を朝から体感できます。</p>
                  </div>
                  
                </div>
              </div>

              <div className="space-y-2 text-xs sm:text-sm text-stone-600 bg-amber-50/50 p-4 rounded-xl border border-amber-100/60">
                <p className="font-semibold text-amber-900">📝 宿泊者の生の声・評判：</p>
                <p className="leading-relaxed text-stone-700">楽天トラベル評価4.28点。「新幹線を降りてすぐチェックインできて本当に便利」「朝食のお米食べ比べが楽しく、お部屋も広くて清潔でした」とビジネス客に人気。</p>
              </div>

              <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-stone-100">
                <div className="text-xs text-stone-500 space-y-0.5 text-center sm:text-left">
                  <p>📍 新潟県新潟市中央区笹口1-1</p>
                  <p>🚆 JR新潟駅東改札→改札出て右、南口広場方面ペデストリアンデッキ左折→突当り右折・東側連絡通路→階段→左折→階段→ホテル</p>
                </div>
                <div className="flex items-center gap-3 w-full sm:w-auto">
                  <a
                    href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fhb.afl.rakuten.co.jp%2Fhgc%2F54d2a438.4bc4abc2.54d2a439.aa1be583%2F%3Fpc%3Dhttps%253A%252F%252Fimg.travel.rakuten.co.jp%252Fimage%252Ftr%252Fapi%252Fkw%252FJBe8h%252F%253Ff_no%253D67938"
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
              新潟駅「ぽんしゅ館」と古町花街を一人で巡る大人の利き酒ガイド
            </h2>
          </div>

          <div className="grid gap-4 sm:grid-cols-3">
            
            <div className="bg-stone-800/80 p-4 rounded-2xl border border-stone-700/60 space-y-2">
              <h3 className="text-sm font-bold text-amber-300">
                1. 新潟駅「ぽんしゅ館」でコイン5枚（500円〜）のガチャ利き酒体験
              </h3>
              <p className="text-xs text-stone-300 leading-relaxed">
                新潟県内全酒蔵の代表銘柄約100種が並ぶ自動試飲マシン。きき酒師おすすめの純米酒やお好みの酒蔵を少量ずつ飲み比べできます。
              </p>
            </div>
            
            <div className="bg-stone-800/80 p-4 rounded-2xl border border-stone-700/60 space-y-2">
              <h3 className="text-sm font-bold text-amber-300">
                2. 国の重要文化財「萬代橋」を夕暮れ時に散策
              </h3>
              <p className="text-xs text-stone-300 leading-relaxed">
                6連の美しい石造アーチ橋。信濃川の水面に映る夕日と街の明かりを眺めながら、萬代橋を渡って古町方面へ歩く時間は最高のリフレッシュです。
              </p>
            </div>
            
            <div className="bg-stone-800/80 p-4 rounded-2xl border border-stone-700/60 space-y-2">
              <h3 className="text-sm font-bold text-amber-300">
                3. 古町の小料理屋でのどぐろ塩焼きと郷土料理「のっぺ」
              </h3>
              <p className="text-xs text-stone-300 leading-relaxed">
                江戸時代からの花街情緒が残る古町通り。カウンター席で割烹の職人が焼き上げる脂の乗ったのどぐろを地酒と味わう至福。
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
                <span>冬の時期は雪で新潟市内の移動が大変ですか？</span>
              </h3>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed pl-5">
                新潟市内中心部（新潟駅〜万代〜古町）は消雪パイプや地下道、アーケードが整備されており、豪雪地帯の山間部と比べると積雪路面でも歩きやすく対策されています。
              </p>
            </div>
            
            <div className="space-y-1.5 bg-stone-50 p-4 rounded-xl">
              <h3 className="text-sm font-bold text-stone-900 flex items-start gap-2">
                <span className="text-amber-800 font-extrabold">Q.</span>
                <span>一人で入りやすい海鮮居酒屋や寿司屋はありますか？</span>
              </h3>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed pl-5">
                新潟駅周辺や万代には回転寿司の最高峰「弁慶」や、カウンター完備の老舗寿司店・居酒屋が多数あり、一人客が気兼ねなく地魚と日本酒を注文できます。
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
