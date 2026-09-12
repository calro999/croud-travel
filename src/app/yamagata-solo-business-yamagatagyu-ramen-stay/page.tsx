import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: '【山形出張＆麺王国ひとり旅】山形駅直結・シモンズベッド・絶品山形牛！ラーメン消費量日本一の街を満喫する極上ホテル 厳選3選',
  description: '山形新幹線つばさ直結・ラーメンの聖地＆果樹王国「山形」！「JR山形駅東西自由通路直結のフラッグシップ」の「ホテルメトロポリタン山形」、駅西口徒歩2分で全室シモンズベッド完備の「リッチモンドホテル山形駅前」、七日町歓楽街近くの「山形グランドホテル」を徹底特集。',
  keywords: '山形 出張 ホテル おすすめ,山形 一人旅 ホテル,ホテルメトロポリタン山形 宿泊,リッチモンドホテル山形駅前 朝食,山形 ラーメン ホテル',
  openGraph: {
    title: '【山形出張＆麺王国ひとり旅】山形駅直結・シモンズベッド・絶品山形牛！ラーメン消費量日本一の街を満喫する極上ホテル 厳選3選',
    description: '山形新幹線つばさ直結・ラーメンの聖地＆果樹王国「山形」！「JR山形駅東西自由通路直結のフラッグシップ」の「ホテルメトロポリタン山形」、駅西口徒歩2分で全室シモンズベッド完備の「リッチモンドホテル山形駅前」、七日町歓楽街近くの「山形グランドホテル」を徹底特集。',
    url: 'https://croud-travel.pages.dev/yamagata-solo-business-yamagatagyu-ramen-stay',
    siteName: 'トラベルガイド - クラウドトラベル',
    locale: 'ja_JP',
    type: 'article',
  },
};

export default function ArticlePage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: '【山形出張＆麺王国ひとり旅】山形駅直結・シモンズベッド・絶品山形牛！ラーメン消費量日本一の街を満喫する極上ホテル 厳選3選',
    description: '山形新幹線つばさ直結・ラーメンの聖地＆果樹王国「山形」！「JR山形駅東西自由通路直結のフラッグシップ」の「ホテルメトロポリタン山形」、駅西口徒歩2分で全室シモンズベッド完備の「リッチモンドホテル山形駅前」、七日町歓楽街近くの「山形グランドホテル」を徹底特集。',
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
    datePublished: '2026-09-12T15:45:00+09:00',
    dateModified: '2026-09-12T15:45:00+09:00',
    mainEntityOfPage: 'https://croud-travel.pages.dev/yamagata-solo-business-yamagatagyu-ramen-stay',
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
        <span className="text-stone-700 font-medium">山形・出張＆山形牛・ご当地ラーメン特集</span>
        <span>/</span>
        <span className="text-stone-700 font-medium truncate">【山形出張＆麺王国ひとり旅】山形駅直結・シモンズベッド・絶品山形牛！ラーメン消費量日本一の街を満喫する極上ホテル 厳選3選</span>
      </nav>

      {/* ヒーローヘッダー */}
      <header className="max-w-4xl mx-auto px-4 sm:px-6 py-8 sm:py-12 space-y-4">
        <div className="inline-flex items-center gap-2 bg-amber-100/90 text-amber-950 text-xs font-semibold px-3.5 py-1.5 rounded-full border border-amber-300/80 shadow-xs">
          <span>✨</span>
          <span>山形・出張＆山形牛・ご当地ラーメン特集</span>
        </div>
        <h1 className="text-2xl sm:text-4xl font-extrabold font-serif text-stone-900 tracking-tight leading-snug">
          【山形出張＆麺王国ひとり旅】山形駅直結・シモンズベッド・絶品山形牛！ラーメン消費量日本一の街を満喫する極上ホテル 厳選3選
        </h1>
        <p className="text-stone-600 text-sm sm:text-base leading-relaxed pt-2">
          山形新幹線つばさ直結・ラーメンの聖地＆果樹王国「山形」！「JR山形駅東西自由通路直結のフラッグシップ」の「ホテルメトロポリタン山形」、駅西口徒歩2分で全室シモンズベッド完備の「リッチモンドホテル山形駅前」、七日町歓楽街近くの「山形グランドホテル」を徹底特集。
        </p>
      </header>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 space-y-12">
        {/* リード文セクション */}
        <section className="bg-white rounded-3xl p-6 sm:p-8 shadow-sm border border-stone-200/80 space-y-4">
          <h2 className="text-lg sm:text-xl font-bold font-serif text-amber-950 border-b border-amber-100 pb-3">
            蔵王連峰の雄大な稜線と霞城公園の桜並木、熱々の鳥中華と冷やしラーメンの出汁の香り——果樹王国で仕事と胃袋を満たす「山形プレミアム出張」
          </h2>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed">
            山形新幹線「つばさ」で東京から乗り換えなし約2時間45分。最上川が育む肥沃な山形盆地に位置し、サクランボやラ・フランスなどの果樹栽培と、ものづくり産業が共存する山形県山形市。出張の夜に誰もが驚かされるのが、総務省家計調査で毎年のようにラーメン消費額日本一を争う「ラーメン王国・山形」の熱気です。鳥中華、赤湯からみそ、酒田のワンタンメン、そして夏名物の氷が浮かぶ「冷やしラーメン」まで、街中いたるところに名店がしのぎを削っています。
          </p>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed">
            さらに最高級黒毛和牛「山形牛」「米沢牛」のステーキや芋煮、名酒「十四代」「出羽桜」など、大人のひとり呑みを最高に満たしてくれる美食が勢揃い。駅直結の快適ホテルを拠点に、仕事の合間や夜の時間を贅沢に味わう山形の厳選3宿をご紹介します。
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
                src="https://img.travel.rakuten.co.jp/share/HOTEL/1701/1701.jpg"
                alt="ホテルメトロポリタン山形"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 800px"
              />
              <div className="absolute top-4 left-4 bg-black/60 backdrop-blur-md text-white text-xs font-bold px-3 py-1.5 rounded-full">
                第1選
              </div>
              <div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-md text-stone-800 text-xs font-semibold px-3 py-1 rounded-md shadow-xs">
                楽天総合評価 ★ 4.43 点（3204件）
              </div>
            </div>

            <div className="p-6 sm:p-8 space-y-6">
              <div>
                <p className="text-amber-800 font-bold text-xs sm:text-sm tracking-wide mb-1">
                  JR山形駅直結！東西自由通路から雨や雪に濡れずにチェックインできる山形屈指のハイクラスホテル
                </p>
                <h3 className="text-xl sm:text-2xl font-bold font-serif text-stone-900 leading-snug">
                  ホテルメトロポリタン山形 —— 駅直結の安心と格式。南館の最新モダン客室と山形牛を味わう直営ダイニング
                </h3>
              </div>

              <div className="space-y-3 bg-stone-50/80 p-4 sm:p-5 rounded-2xl border border-stone-100">
                <h4 className="text-xs font-bold uppercase tracking-wider text-stone-500">
                  注目のポイント＆魅力
                </h4>
                <div className="grid gap-3 sm:grid-cols-3">
                  
                  <div className="bg-white p-3.5 rounded-xl border border-stone-200/60 space-y-1">
                    <p className="text-xs font-bold text-amber-950">新幹線改札から連絡通路で徒歩1分！悪天候でも傘不要の最高峰ロケーション</p>
                    <p className="text-xs text-stone-600 leading-relaxed">荷物が多い出張でも移動ストレスがゼロ。駅ビル「エスパル山形」でお土産購入もスムーズです。</p>
                  </div>
                  
                  <div className="bg-white p-3.5 rounded-xl border border-stone-200/60 space-y-1">
                    <p className="text-xs font-bold text-amber-950">全室シモンズ社製ベッドと加湿空気清浄機、洗い場付きセパレートバス（南館）</p>
                    <p className="text-xs text-stone-600 leading-relaxed">上質で落ち着いたインテリア。高速Wi-Fi完備で出張のテレワークやオンライン会議も快適です。</p>
                  </div>
                  
                  <div className="bg-white p-3.5 rounded-xl border border-stone-200/60 space-y-1">
                    <p className="text-xs font-bold text-amber-950">山形県産つや姫の炊きたてご飯と郷土料理「芋煮」が並ぶ豪華朝食</p>
                    <p className="text-xs text-stone-600 leading-relaxed">地元食材の魅力を引き出した朝のビュッフェ。朝から山形の豊かな食文化を堪能できます。</p>
                  </div>
                  
                </div>
              </div>

              <div className="space-y-2 text-xs sm:text-sm text-stone-600 bg-amber-50/50 p-4 rounded-xl border border-amber-100/60">
                <p className="font-semibold text-amber-900">📝 宿泊者の生の声・評判：</p>
                <p className="leading-relaxed text-stone-700">楽天トラベル評価4.43点。「駅直結で立地が最強。南館の部屋が新しくお風呂もセパレートで最高でした」「朝食の芋煮とつや姫が美味しく、出張ならここ一択」と大絶賛。</p>
              </div>

              <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-stone-100">
                <div className="text-xs text-stone-500 space-y-0.5 text-center sm:text-left">
                  <p>📍 山形県山形市香澄町1-1-1</p>
                  <p>🚆 JR山形駅東口直結◆タクシー、バス、山形空港ライナー乗場から徒歩0分◆蔵王ICから車で15分</p>
                </div>
                <div className="flex items-center gap-3 w-full sm:w-auto">
                  <a
                    href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fhb.afl.rakuten.co.jp%2Fhgc%2F54d2a438.4bc4abc2.54d2a439.aa1be583%2F%3Fpc%3Dhttps%253A%252F%252Fimg.travel.rakuten.co.jp%252Fimage%252Ftr%252Fapi%252Fkw%252FJBe8h%252F%253Ff_no%253D1701"
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
                src="https://img.travel.rakuten.co.jp/share/HOTEL/68631/68631.jpg"
                alt="リッチモンドホテル山形駅前"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 800px"
              />
              <div className="absolute top-4 left-4 bg-black/60 backdrop-blur-md text-white text-xs font-bold px-3 py-1.5 rounded-full">
                第2選
              </div>
              <div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-md text-stone-800 text-xs font-semibold px-3 py-1 rounded-md shadow-xs">
                楽天総合評価 ★ 4.44 点（4754件）
              </div>
            </div>

            <div className="p-6 sm:p-8 space-y-6">
              <div>
                <p className="text-amber-800 font-bold text-xs sm:text-sm tracking-wide mb-1">
                  JR山形駅西口から徒歩約2分！シモンズ社製最高級ベッドと充実したビジネス環境
                </p>
                <h3 className="text-xl sm:text-2xl font-bold font-serif text-stone-900 leading-snug">
                  リッチモンドホテル山形駅前 —— 洗練されたホスピタリティ。広々とした客室と山形名物を盛り込んだ朝食バイキング
                </h3>
              </div>

              <div className="space-y-3 bg-stone-50/80 p-4 sm:p-5 rounded-2xl border border-stone-100">
                <h4 className="text-xs font-bold uppercase tracking-wider text-stone-500">
                  注目のポイント＆魅力
                </h4>
                <div className="grid gap-3 sm:grid-cols-3">
                  
                  <div className="bg-white p-3.5 rounded-xl border border-stone-200/60 space-y-1">
                    <p className="text-xs font-bold text-amber-950">大型ワーキングデスクと明るいデスクライト、高速Wi-Fiを完備</p>
                    <p className="text-xs text-stone-600 leading-relaxed">客室でのPC作業や資料作成が非常に快適。出張ビジネスパーソンを力強く支えます。</p>
                  </div>
                  
                  <div className="bg-white p-3.5 rounded-xl border border-stone-200/60 space-y-1">
                    <p className="text-xs font-bold text-amber-950">シモンズ製特注ベッドと遮音性に優れた静かな客室で深い快眠をサポート</p>
                    <p className="text-xs text-stone-600 leading-relaxed">移動の疲れをすっきりとリセット。翌朝気持ちよく目覚められます。</p>
                  </div>
                  
                  <div className="bg-white p-3.5 rounded-xl border border-stone-200/60 space-y-1">
                    <p className="text-xs font-bold text-amber-950">山形名物玉こんにゃくや芋煮、焼き立てパンが並ぶ大人気モーニング</p>
                    <p className="text-xs text-stone-600 leading-relaxed">親切なスタッフの笑顔と美味しい朝ごはん。活力ある一日のスタートを約束します。</p>
                  </div>
                  
                </div>
              </div>

              <div className="space-y-2 text-xs sm:text-sm text-stone-600 bg-amber-50/50 p-4 rounded-xl border border-amber-100/60">
                <p className="font-semibold text-amber-900">📝 宿泊者の生の声・評判：</p>
                <p className="leading-relaxed text-stone-700">楽天トラベル評価4.44点。「駅近で部屋も広く、スタッフの接客がとても丁寧でした」「朝食の芋煮が美味しく、デスクワークもしやすくて大満足」と高評価。</p>
              </div>

              <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-stone-100">
                <div className="text-xs text-stone-500 space-y-0.5 text-center sm:text-left">
                  <p>📍 山形県山形市双葉町1-3-11</p>
                  <p>🚆 ＪＲ　山形駅西口より徒歩5分　やまぎん県民ホール目の前</p>
                </div>
                <div className="flex items-center gap-3 w-full sm:w-auto">
                  <a
                    href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fhb.afl.rakuten.co.jp%2Fhgc%2F54d2a438.4bc4abc2.54d2a439.aa1be583%2F%3Fpc%3Dhttps%253A%252F%252Fimg.travel.rakuten.co.jp%252Fimage%252Ftr%252Fapi%252Fkw%252FJBe8h%252F%253Ff_no%253D68631"
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
                src="https://img.travel.rakuten.co.jp/share/HOTEL/1691/1691.jpg"
                alt="山形グランドホテル"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 800px"
              />
              <div className="absolute top-4 left-4 bg-black/60 backdrop-blur-md text-white text-xs font-bold px-3 py-1.5 rounded-full">
                第3選
              </div>
              <div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-md text-stone-800 text-xs font-semibold px-3 py-1 rounded-md shadow-xs">
                楽天総合評価 ★ 4.05 点（1604件）
              </div>
            </div>

            <div className="p-6 sm:p-8 space-y-6">
              <div>
                <p className="text-amber-800 font-bold text-xs sm:text-sm tracking-wide mb-1">
                  山形市中心街・七日町歓楽街へ徒歩圏内！伝統と格式を誇る老舗シティホテル
                </p>
                <h3 className="text-xl sm:text-2xl font-bold font-serif text-stone-900 leading-snug">
                  山形グランドホテル —— 伝統が息づくおもてなし。落ち着いた客室と一流シェフの本格料理
                </h3>
              </div>

              <div className="space-y-3 bg-stone-50/80 p-4 sm:p-5 rounded-2xl border border-stone-100">
                <h4 className="text-xs font-bold uppercase tracking-wider text-stone-500">
                  注目のポイント＆魅力
                </h4>
                <div className="grid gap-3 sm:grid-cols-3">
                  
                  <div className="bg-white p-3.5 rounded-xl border border-stone-200/60 space-y-1">
                    <p className="text-xs font-bold text-amber-950">山形市のメインストリート本町・七日町に近く夜の飲食や散策に最適</p>
                    <p className="text-xs text-stone-600 leading-relaxed">居酒屋や老舗ラーメン店へ徒歩すぐ。夜遅くまで山形グルメを満喫できます。</p>
                  </div>
                  
                  <div className="bg-white p-3.5 rounded-xl border border-stone-200/60 space-y-1">
                    <p className="text-xs font-bold text-amber-950">ゆとりある客室設計と熟練のホテルマンによるきめ細やかなサービス</p>
                    <p className="text-xs text-stone-600 leading-relaxed">静かで品格ある空間。エグゼクティブの出張や落ち着いた一人旅にふさわしい佇まいです。</p>
                  </div>
                  
                  <div className="bg-white p-3.5 rounded-xl border border-stone-200/60 space-y-1">
                    <p className="text-xs font-bold text-amber-950">山形の食材を取り入れた朝食バイキングと本格レストラン</p>
                    <p className="text-xs text-stone-600 leading-relaxed">老舗ならではの上質な料理。心地よい朝の時間を過ごせます。</p>
                  </div>
                  
                </div>
              </div>

              <div className="space-y-2 text-xs sm:text-sm text-stone-600 bg-amber-50/50 p-4 rounded-xl border border-amber-100/60">
                <p className="font-semibold text-amber-900">📝 宿泊者の生の声・評判：</p>
                <p className="leading-relaxed text-stone-700">楽天トラベル評価4.05点。「七日町に近くて飲食店が多く便利でした」「スタッフの対応が親切で落ち着いて過ごせました」と定評。</p>
              </div>

              <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-stone-100">
                <div className="text-xs text-stone-500 space-y-0.5 text-center sm:text-left">
                  <p>📍 山形県山形市本町1-7-42</p>
                  <p>🚆 JR山形駅から車で5分。市内中心街に立地。中心街１００円循環バスで山形駅より５分。（運行時間/9:30～18:30）</p>
                </div>
                <div className="flex items-center gap-3 w-full sm:w-auto">
                  <a
                    href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fhb.afl.rakuten.co.jp%2Fhgc%2F54d2a438.4bc4abc2.54d2a439.aa1be583%2F%3Fpc%3Dhttps%253A%252F%252Fimg.travel.rakuten.co.jp%252Fimage%252Ftr%252Fapi%252Fkw%252FJBe8h%252F%253Ff_no%253D1691"
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
              山形の「ご当地ラーメン＆山形牛」を一人旅で満喫するグルメ術
            </h2>
          </div>

          <div className="grid gap-4 sm:grid-cols-3">
            
            <div className="bg-stone-800/80 p-4 rounded-2xl border border-stone-700/60 space-y-2">
              <h3 className="text-sm font-bold text-amber-300">
                1. 「栄屋本店」で元祖冷やしラーメンを味わう（通年提供）
              </h3>
              <p className="text-xs text-stone-300 leading-relaxed">
                牛骨と鰹節の冷たいスープに氷が浮かび、キュウリとチャーシューが乗る名物。冷たいのに油が固まらない秘伝のスープのコクが絶妙。
              </p>
            </div>
            
            <div className="bg-stone-800/80 p-4 rounded-2xl border border-stone-700/60 space-y-2">
              <h3 className="text-sm font-bold text-amber-300">
                2. 夜は駅前や七日町の焼肉・すき焼き店でA5「山形牛」と地酒
              </h3>
              <p className="text-xs text-stone-300 leading-relaxed">
                きめ細やかなサシと芳醇な甘み。幻の日本酒「十四代」や「出羽桜 桜花吟醸酒」と合わせる至福のディナー。
              </p>
            </div>
            
            <div className="bg-stone-800/80 p-4 rounded-2xl border border-stone-700/60 space-y-2">
              <h3 className="text-sm font-bold text-amber-300">
                3. 霞城公園（山形城跡）の東大手門と二の丸堀の朝散歩
              </h3>
              <p className="text-xs text-stone-300 leading-relaxed">
                最上義光公の居城跡。復元された堂々たる東大手門と堀の緑を眺めながら、澄んだ朝の空気を胸いっぱいに吸い込む。
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
                <span>山形空港から山形駅や市内ホテルへのアクセスはどうですか？</span>
              </h3>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed pl-5">
                おいしい山形空港から航空便に合わせて山形市内行きシャトルバスが運行しており、約40〜45分で山形駅前へ直行できます。
              </p>
            </div>
            
            <div className="space-y-1.5 bg-stone-50 p-4 rounded-xl">
              <h3 className="text-sm font-bold text-stone-900 flex items-start gap-2">
                <span className="text-amber-800 font-extrabold">Q.</span>
                <span>一人で山寺（立石寺）へ行く時間は取れますか？</span>
              </h3>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed pl-5">
                山形駅からJR仙山線の普通列車で約20分（山寺駅下車）。駅から登山口まで徒歩すぐで、往復約1時間半〜2時間あれば名勝の岩山を巡ることができます。
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
