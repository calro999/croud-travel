import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: '【盛岡出張＆麺都ひとり旅】盛岡駅近・天然温泉大浴場・盛岡三大麺（冷麺・じゃじゃ麺・わんこそば）！北東北の要所で整う極上宿 厳選3選',
  description: '東北・秋田新幹線の結節点・岩手県盛岡市！「JR盛岡駅前徒歩すぐで広々バスルーム完備」の「ダイワロイネットホテル盛岡駅前」、最上階に自家源泉の天然温泉大浴場と夜鳴きそば完備の「ドーミーイン盛岡」、駅直結で快適なワーク環境を誇る老舗「ホテルメトロポリタン盛岡 本館」を徹底比較。',
  keywords: '盛岡 出張 ホテル おすすめ,盛岡 一人旅 ホテル,ドーミーイン盛岡 温泉,ダイワロイネットホテル盛岡駅前 宿泊,盛岡 冷麺 ホテル',
  openGraph: {
    title: '【盛岡出張＆麺都ひとり旅】盛岡駅近・天然温泉大浴場・盛岡三大麺（冷麺・じゃじゃ麺・わんこそば）！北東北の要所で整う極上宿 厳選3選',
    description: '東北・秋田新幹線の結節点・岩手県盛岡市！「JR盛岡駅前徒歩すぐで広々バスルーム完備」の「ダイワロイネットホテル盛岡駅前」、最上階に自家源泉の天然温泉大浴場と夜鳴きそば完備の「ドーミーイン盛岡」、駅直結で快適なワーク環境を誇る老舗「ホテルメトロポリタン盛岡 本館」を徹底比較。',
    url: 'https://croud-travel.pages.dev/morioka-solo-business-noodles-onsen-stay',
    siteName: 'トラベルガイド - クラウドトラベル',
    locale: 'ja_JP',
    type: 'article',
  },
};

export default function ArticlePage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: '【盛岡出張＆麺都ひとり旅】盛岡駅近・天然温泉大浴場・盛岡三大麺（冷麺・じゃじゃ麺・わんこそば）！北東北の要所で整う極上宿 厳選3選',
    description: '東北・秋田新幹線の結節点・岩手県盛岡市！「JR盛岡駅前徒歩すぐで広々バスルーム完備」の「ダイワロイネットホテル盛岡駅前」、最上階に自家源泉の天然温泉大浴場と夜鳴きそば完備の「ドーミーイン盛岡」、駅直結で快適なワーク環境を誇る老舗「ホテルメトロポリタン盛岡 本館」を徹底比較。',
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
    datePublished: '2026-09-12T15:30:00+09:00',
    dateModified: '2026-09-12T15:30:00+09:00',
    mainEntityOfPage: 'https://croud-travel.pages.dev/morioka-solo-business-noodles-onsen-stay',
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
        <span className="text-stone-700 font-medium">盛岡・出張＆三大麺・天然温泉特集</span>
        <span>/</span>
        <span className="text-stone-700 font-medium truncate">【盛岡出張＆麺都ひとり旅】盛岡駅近・天然温泉大浴場・盛岡三大麺（冷麺・じゃじゃ麺・わんこそば）！北東北の要所で整う極上宿 厳選3選</span>
      </nav>

      {/* ヒーローヘッダー */}
      <header className="max-w-4xl mx-auto px-4 sm:px-6 py-8 sm:py-12 space-y-4">
        <div className="inline-flex items-center gap-2 bg-amber-100/90 text-amber-950 text-xs font-semibold px-3.5 py-1.5 rounded-full border border-amber-300/80 shadow-xs">
          <span>✨</span>
          <span>盛岡・出張＆三大麺・天然温泉特集</span>
        </div>
        <h1 className="text-2xl sm:text-4xl font-extrabold font-serif text-stone-900 tracking-tight leading-snug">
          【盛岡出張＆麺都ひとり旅】盛岡駅近・天然温泉大浴場・盛岡三大麺（冷麺・じゃじゃ麺・わんこそば）！北東北の要所で整う極上宿 厳選3選
        </h1>
        <p className="text-stone-600 text-sm sm:text-base leading-relaxed pt-2">
          東北・秋田新幹線の結節点・岩手県盛岡市！「JR盛岡駅前徒歩すぐで広々バスルーム完備」の「ダイワロイネットホテル盛岡駅前」、最上階に自家源泉の天然温泉大浴場と夜鳴きそば完備の「ドーミーイン盛岡」、駅直結で快適なワーク環境を誇る老舗「ホテルメトロポリタン盛岡 本館」を徹底比較。
        </p>
      </header>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 space-y-12">
        {/* リード文セクション */}
        <section className="bg-white rounded-3xl p-6 sm:p-8 shadow-sm border border-stone-200/80 space-y-4">
          <h2 className="text-lg sm:text-xl font-bold font-serif text-amber-950 border-b border-amber-100 pb-3">
            開運橋から仰ぐ残雪の岩手山と北上川の清流、コシの強い盛岡冷麺の辛み——歴史ある洋館と名湯に癒やされる「盛岡プレミアム出張」
          </h2>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed">
            東北新幹線「はやぶさ」で東京から最短約2時間10分。北東北三県の中枢都市であり、ニューヨーク・タイムズ紙「2023年に行くべき52カ所」に選出され世界から注目を集める岩手県盛岡市。城下町の風情と明治・大正期の赤レンガ洋館（旧岩手銀行本店など）がコンパクトに美しく残り、歩いて巡るのにこれ以上なく心地よい街です。
          </p>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed">
            そして盛岡出張の夜を彩るのが、独特のコシと辛味が癖になる「盛岡冷麺」、肉味噌とチータンタン（卵スープ）で締める「盛岡じゃじゃ麺」、そして伝統の「わんこそば」という盛岡三大麺文化。さらに前沢牛や三陸の海の幸、岩手の銘酒「南部美人」「あさ開」が胃袋を満たします。今回は出張と麺巡りを最高に快適にする盛岡の厳選3宿をご紹介します。
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
                src="https://img.travel.rakuten.co.jp/share/HOTEL/183248/183248.jpg"
                alt="ダイワロイネットホテル盛岡駅前"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 800px"
              />
              <div className="absolute top-4 left-4 bg-black/60 backdrop-blur-md text-white text-xs font-bold px-3 py-1.5 rounded-full">
                第1選
              </div>
              <div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-md text-stone-800 text-xs font-semibold px-3 py-1 rounded-md shadow-xs">
                楽天総合評価 ★ 4.52 点（1794件）
              </div>
            </div>

            <div className="p-6 sm:p-8 space-y-6">
              <div>
                <p className="text-amber-800 font-bold text-xs sm:text-sm tracking-wide mb-1">
                  JR盛岡駅東口から徒歩約3分！開運橋至近で全室バス・トイレ別のセパレート設計＆シモンズベッド完備
                </p>
                <h3 className="text-xl sm:text-2xl font-bold font-serif text-stone-900 leading-snug">
                  ダイワロイネットホテル盛岡駅前 —— 駅前のフラッグシップ。ワイドデスクと上質な客室で出張テレワークを強力サポート
                </h3>
              </div>

              <div className="space-y-3 bg-stone-50/80 p-4 sm:p-5 rounded-2xl border border-stone-100">
                <h4 className="text-xs font-bold uppercase tracking-wider text-stone-500">
                  注目のポイント＆魅力
                </h4>
                <div className="grid gap-3 sm:grid-cols-3">
                  
                  <div className="bg-white p-3.5 rounded-xl border border-stone-200/60 space-y-1">
                    <p className="text-xs font-bold text-amber-950">全室バス・トイレ別の独立設計！広々とした洗い場付きバスタブ</p>
                    <p className="text-xs text-stone-600 leading-relaxed">手足を伸ばしてゆったり入浴。出張の疲れを客室でじっくりと癒やすことができます。</p>
                  </div>
                  
                  <div className="bg-white p-3.5 rounded-xl border border-stone-200/60 space-y-1">
                    <p className="text-xs font-bold text-amber-950">新幹線改札から徒歩3分の好立地でチェックイン前後の荷物預けもスムーズ</p>
                    <p className="text-xs text-stone-600 leading-relaxed">開運橋を渡って大通りの繁華街へも徒歩すぐ。食事や散策にも抜群のフットワークです。</p>
                  </div>
                  
                  <div className="bg-white p-3.5 rounded-xl border border-stone-200/60 space-y-1">
                    <p className="text-xs font-bold text-amber-950">広めのライティングデスクと高速Wi-Fi・加湿空気清浄機を完備</p>
                    <p className="text-xs text-stone-600 leading-relaxed">静音性に優れた客室設計。長時間のPC作業やオンライン会議もストレスなくこなせます。</p>
                  </div>
                  
                </div>
              </div>

              <div className="space-y-2 text-xs sm:text-sm text-stone-600 bg-amber-50/50 p-4 rounded-xl border border-amber-100/60">
                <p className="font-semibold text-amber-900">📝 宿泊者の生の声・評判：</p>
                <p className="leading-relaxed text-stone-700">楽天トラベル評価4.52点。「駅近で部屋が広く、お風呂とトイレが別でとても快適でした」「新しく清潔で、盛岡出張の際は必ずここに泊まります」とビジネス客から大絶賛。</p>
              </div>

              <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-stone-100">
                <div className="text-xs text-stone-500 space-y-0.5 text-center sm:text-left">
                  <p>📍 岩手県盛岡市盛岡駅前通7-15</p>
                  <p>🚆 JR盛岡駅より徒歩約4分。東口より地下道A1出口を出て開運橋方面に約100ｍ。</p>
                </div>
                <div className="flex items-center gap-3 w-full sm:w-auto">
                  <a
                    href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fhb.afl.rakuten.co.jp%2Fhgc%2F54d2a438.4bc4abc2.54d2a439.aa1be583%2F%3Fpc%3Dhttps%253A%252F%252Fimg.travel.rakuten.co.jp%252Fimage%252Ftr%252Fapi%252Fkw%252FJBe8h%252F%253Ff_no%253D183248"
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
                src="https://img.travel.rakuten.co.jp/share/HOTEL/172659/172659.jpg"
                alt="天然温泉　さんさの湯　ドーミーイン盛岡（ドーミーイン・御宿野乃　ホテルズグループ）"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 800px"
              />
              <div className="absolute top-4 left-4 bg-black/60 backdrop-blur-md text-white text-xs font-bold px-3 py-1.5 rounded-full">
                第2選
              </div>
              <div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-md text-stone-800 text-xs font-semibold px-3 py-1 rounded-md shadow-xs">
                楽天総合評価 ★ 4.53 点（2038件）
              </div>
            </div>

            <div className="p-6 sm:p-8 space-y-6">
              <div>
                <p className="text-amber-800 font-bold text-xs sm:text-sm tracking-wide mb-1">
                  盛岡最大の繁華街「大通」至近！最上階10階の自家源泉天然温泉「さんさの湯」＆水風呂サウナ・夜鳴きそば完備
                </p>
                <h3 className="text-xl sm:text-2xl font-bold font-serif text-stone-900 leading-snug">
                  天然温泉 さんさの湯 ドーミーイン盛岡 —— 繁華街の温泉オアシス。天然温泉とサウナでととのい、冷麺名店へ繰り出す安心ステイ
                </h3>
              </div>

              <div className="space-y-3 bg-stone-50/80 p-4 sm:p-5 rounded-2xl border border-stone-100">
                <h4 className="text-xs font-bold uppercase tracking-wider text-stone-500">
                  注目のポイント＆魅力
                </h4>
                <div className="grid gap-3 sm:grid-cols-3">
                  
                  <div className="bg-white p-3.5 rounded-xl border border-stone-200/60 space-y-1">
                    <p className="text-xs font-bold text-amber-950">最上階10階に広がる男女別天然温泉大浴場「さんさの湯」＆高温サウナ・水風呂</p>
                    <p className="text-xs text-stone-600 leading-relaxed">弱アルカリ性の柔らかい温泉。サウナでしっかりととのって出張の疲れを完全リセットできます。</p>
                  </div>
                  
                  <div className="bg-white p-3.5 rounded-xl border border-stone-200/60 space-y-1">
                    <p className="text-xs font-bold text-amber-950">盛岡の繁華街・大通商店街すぐの立地で夜の飲食に最高のロケーション</p>
                    <p className="text-xs text-stone-600 leading-relaxed">有名冷麺店や居酒屋へ徒歩すぐ。夜遅くまで岩手グルメを堪能しても歩いて安全に帰還できます。</p>
                  </div>
                  
                  <div className="bg-white p-3.5 rounded-xl border border-stone-200/60 space-y-1">
                    <p className="text-xs font-bold text-amber-950">名物「夜鳴きそば」無料サービス＆郷土料理が並ぶ朝食バイキング</p>
                    <p className="text-xs text-stone-600 leading-relaxed">朝食には盛岡冷麺やひっつみ汁など岩手のご当地名物がずらり。朝から元気に出発できます。</p>
                  </div>
                  
                </div>
              </div>

              <div className="space-y-2 text-xs sm:text-sm text-stone-600 bg-amber-50/50 p-4 rounded-xl border border-amber-100/60">
                <p className="font-semibold text-amber-900">📝 宿泊者の生の声・評判：</p>
                <p className="leading-relaxed text-stone-700">楽天トラベル評価4.53点。「繁華街すぐで温泉とサウナに入れるのが最高でした」「朝食の冷麺が美味しく、夜鳴きそばのサービスも嬉しかった」と高評価。</p>
              </div>

              <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-stone-100">
                <div className="text-xs text-stone-500 space-y-0.5 text-center sm:text-left">
                  <p>📍 岩手県盛岡市中央通2-8-12</p>
                  <p>🚆 盛岡駅南口より徒歩にて約１２分またはお車にて約５分</p>
                </div>
                <div className="flex items-center gap-3 w-full sm:w-auto">
                  <a
                    href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fhb.afl.rakuten.co.jp%2Fhgc%2F54d2a438.4bc4abc2.54d2a439.aa1be583%2F%3Fpc%3Dhttps%253A%252F%252Fimg.travel.rakuten.co.jp%252Fimage%252Ftr%252Fapi%252Fkw%252FJBe8h%252F%253Ff_no%253D172659"
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
                src="https://img.travel.rakuten.co.jp/share/HOTEL/395/395.jpg"
                alt="ホテルメトロポリタン盛岡　本館"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 800px"
              />
              <div className="absolute top-4 left-4 bg-black/60 backdrop-blur-md text-white text-xs font-bold px-3 py-1.5 rounded-full">
                第3選
              </div>
              <div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-md text-stone-800 text-xs font-semibold px-3 py-1 rounded-md shadow-xs">
                楽天総合評価 ★ 4.37 点（3492件）
              </div>
            </div>

            <div className="p-6 sm:p-8 space-y-6">
              <div>
                <p className="text-amber-800 font-bold text-xs sm:text-sm tracking-wide mb-1">
                  JR盛岡駅直結・改札から徒歩1分！天候に左右されない圧倒的利便性とJRホテルグループの安心感
                </p>
                <h3 className="text-xl sm:text-2xl font-bold font-serif text-stone-900 leading-snug">
                  ホテルメトロポリタン盛岡 本館 —— 駅ナカ直結の安心拠点。落ち着いたインテリアと岩手の食材を活かした朝食
                </h3>
              </div>

              <div className="space-y-3 bg-stone-50/80 p-4 sm:p-5 rounded-2xl border border-stone-100">
                <h4 className="text-xs font-bold uppercase tracking-wider text-stone-500">
                  注目のポイント＆魅力
                </h4>
                <div className="grid gap-3 sm:grid-cols-3">
                  
                  <div className="bg-white p-3.5 rounded-xl border border-stone-200/60 space-y-1">
                    <p className="text-xs font-bold text-amber-950">新幹線改札から連絡通路で直結！雨や雪の日でも傘をささずにチェックイン</p>
                    <p className="text-xs text-stone-600 leading-relaxed">スーツケースを引いての移動が極めてスムーズ。新幹線の時間ギリギリまで客室で寛げます。</p>
                  </div>
                  
                  <div className="bg-white p-3.5 rounded-xl border border-stone-200/60 space-y-1">
                    <p className="text-xs font-bold text-amber-950">フェザン（駅ビル）直結でお土産購入や冷麺・じゃじゃ麺の名店へ直行可能</p>
                    <p className="text-xs text-stone-600 leading-relaxed">駅ナカで岩手グルメをコンプリート。出張の限られた時間を有効に使えます。</p>
                  </div>
                  
                  <div className="bg-white p-3.5 rounded-xl border border-stone-200/60 space-y-1">
                    <p className="text-xs font-bold text-amber-950">機能的なワークスペースと上質なベッドが約束する心地よい快眠</p>
                    <p className="text-xs text-stone-600 leading-relaxed">丁寧なフロント接客と清潔な客室。出張ビジネスパーソンに長年愛される老舗ホテルです。</p>
                  </div>
                  
                </div>
              </div>

              <div className="space-y-2 text-xs sm:text-sm text-stone-600 bg-amber-50/50 p-4 rounded-xl border border-amber-100/60">
                <p className="font-semibold text-amber-900">📝 宿泊者の生の声・評判：</p>
                <p className="leading-relaxed text-stone-700">楽天トラベル評価4.37点。「駅直結でこれ以上便利な立地はない。スタッフの対応も親切で安心感がありました」「雨の日でも濡れずにチェックインできて助かりました」と定評。</p>
              </div>

              <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-stone-100">
                <div className="text-xs text-stone-500 space-y-0.5 text-center sm:text-left">
                  <p>📍 岩手県盛岡市盛岡駅前通1-44</p>
                  <p>🚆 ＪＲ「盛岡駅」北口改札より徒歩１分</p>
                </div>
                <div className="flex items-center gap-3 w-full sm:w-auto">
                  <a
                    href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fhb.afl.rakuten.co.jp%2Fhgc%2F54d2a438.4bc4abc2.54d2a439.aa1be583%2F%3Fpc%3Dhttps%253A%252F%252Fimg.travel.rakuten.co.jp%252Fimage%252Ftr%252Fapi%252Fkw%252FJBe8h%252F%253Ff_no%253D395"
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
              盛岡三大麺（冷麺・じゃじゃ麺・わんこそば）を一人で制覇する歩き方
            </h2>
          </div>

          <div className="grid gap-4 sm:grid-cols-3">
            
            <div className="bg-stone-800/80 p-4 rounded-2xl border border-stone-700/60 space-y-2">
              <h3 className="text-sm font-bold text-amber-300">
                1. 盛岡冷麺は駅前「盛楼閣（せいろうかく）」または「ぴょんぴょん舎」へ
              </h3>
              <p className="text-xs text-stone-300 leading-relaxed">
                注文時に辛さを選べる（別辛がおすすめ）。牛骨スープの深いコクと弾力のある麺、カクテキの酸味が織りなす絶妙なハーモニー。
              </p>
            </div>
            
            <div className="bg-stone-800/80 p-4 rounded-2xl border border-stone-700/60 space-y-2">
              <h3 className="text-sm font-bold text-amber-300">
                2. 盛岡じゃじゃ麺「白龍（パイロン）」でチータンタンまで味わう
              </h3>
              <p className="text-xs text-stone-300 leading-relaxed">
                平打ちうどんに特製肉味噌、きゅうり、生姜を豪快に混ぜて完食。最後に生卵を割り入れてスープを注いでもらうチータンタンで締め。
              </p>
            </div>
            
            <div className="bg-stone-800/80 p-4 rounded-2xl border border-stone-700/60 space-y-2">
              <h3 className="text-sm font-bold text-amber-300">
                3. 紺屋町（こんやちょう）のレトロ街並みとクラシック喫茶「クラムボン」
              </h3>
              <p className="text-xs text-stone-300 leading-relaxed">
                中津川沿いを散策。宮沢賢治の童話にちなんだ自家焙煎珈琲店で、静かに読書とネルドリップ珈琲を楽しむ贅沢な時間。
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
                <span>一人でわんこそばに挑戦することはできますか？</span>
              </h3>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed pl-5">
                盛岡駅前や市内の「東家（あずまや）」などでは、おひとりさまのわんこそば挑戦を歓迎しており、給仕さんがマンツーマンでリズムよくお給仕してくれます。
              </p>
            </div>
            
            <div className="space-y-1.5 bg-stone-50 p-4 rounded-xl">
              <h3 className="text-sm font-bold text-stone-900 flex items-start gap-2">
                <span className="text-amber-800 font-extrabold">Q.</span>
                <span>盛岡駅から繁華街の大通りまでは歩けますか？</span>
              </h3>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed pl-5">
                盛岡駅から開運橋を渡って大通り商店街までは徒歩約10〜12分。市内循環バス「でんでんむし（1回130円程度）」を使えば約5分で手軽に移動できます。
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
