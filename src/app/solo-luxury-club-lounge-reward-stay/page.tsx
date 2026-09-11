import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: '【一人ホテルステイ・ご褒美宿泊】クラブラウンジアクセス付き！東京＆横浜の高層ラグジュアリーホテル 厳選3選',
  description: '日頃頑張る自分へ、最高の非日常と休息をプレゼントする「大人のご褒美ソロホテルステイ」。東京ベイエリアを望むアートな「メズム東京」、地上180mの天空に浮かぶ「ザ・プリンスギャラリー 東京紀尾井町」、広大な日本庭園と複数のクラブラウンジが楽しめる「グランドプリンスホテル新高輪」を徹底特集。フードプレゼンテーションとカクテルタイムを満喫する週末ステイケーション。',
  keywords: '一人 ホテルステイ ご褒美,クラブラウンジ 一人旅,メズム東京 クラブラウンジ,プリンスギャラリー東京紀尾井町 一人,週末ステイケーション 東京 ラウンジ',
  openGraph: {
    title: '【一人ホテルステイ・ご褒美宿泊】クラブラウンジアクセス付き！東京＆横浜の高層ラグジュアリーホテル 厳選3選',
    description: '日頃頑張る自分へ、最高の非日常と休息をプレゼントする「大人のご褒美ソロホテルステイ」。東京ベイエリアを望むアートな「メズム東京」、地上180mの天空に浮かぶ「ザ・プリンスギャラリー 東京紀尾井町」、広大な日本庭園と複数のクラブラウンジが楽しめる「グランドプリンスホテル新高輪」を徹底特集。フードプレゼンテーションとカクテルタイムを満喫する週末ステイケーション。',
    url: 'https://croud-travel.pages.dev/solo-luxury-club-lounge-reward-stay',
    siteName: 'トラベルガイド - クラウドトラベル',
    locale: 'ja_JP',
    type: 'article',
  },
};

export default function ArticlePage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: '【一人ホテルステイ・ご褒美宿泊】クラブラウンジアクセス付き！東京＆横浜の高層ラグジュアリーホテル 厳選3選',
    description: '日頃頑張る自分へ、最高の非日常と休息をプレゼントする「大人のご褒美ソロホテルステイ」。東京ベイエリアを望むアートな「メズム東京」、地上180mの天空に浮かぶ「ザ・プリンスギャラリー 東京紀尾井町」、広大な日本庭園と複数のクラブラウンジが楽しめる「グランドプリンスホテル新高輪」を徹底特集。フードプレゼンテーションとカクテルタイムを満喫する週末ステイケーション。',
    author: {
      '@type': 'Organization',
      name: 'クラウドトラベル ひとり旅・ホテル調査班',
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
    datePublished: '2026-09-11T02:20:00+09:00',
    dateModified: '2026-09-11T02:20:00+09:00',
    mainEntityOfPage: 'https://croud-travel.pages.dev/solo-luxury-club-lounge-reward-stay',
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
        <span className="text-stone-700 font-medium">自分へのご褒美・クラブラウンジ特集</span>
        <span>/</span>
        <span className="text-stone-700 font-medium truncate">【一人ホテルステイ・ご褒美宿泊】クラブラウンジアクセス付き！東京＆横浜の高層ラグジュアリーホテル 厳選3選</span>
      </nav>

      {/* ヒーローヘッダー */}
      <header className="max-w-4xl mx-auto px-4 sm:px-6 py-8 sm:py-12 space-y-4">
        <div className="inline-flex items-center gap-2 bg-amber-100/90 text-amber-950 text-xs font-semibold px-3.5 py-1.5 rounded-full border border-amber-300/80 shadow-xs">
          <span>✨</span>
          <span>自分へのご褒美・クラブラウンジ特集</span>
        </div>
        <h1 className="text-2xl sm:text-4xl font-extrabold font-serif text-stone-900 tracking-tight leading-snug">
          【一人ホテルステイ・ご褒美宿泊】クラブラウンジアクセス付き！東京＆横浜の高層ラグジュアリーホテル 厳選3選
        </h1>
        <p className="text-stone-600 text-sm sm:text-base leading-relaxed pt-2">
          日頃頑張る自分へ、最高の非日常と休息をプレゼントする「大人のご褒美ソロホテルステイ」。東京ベイエリアを望むアートな「メズム東京」、地上180mの天空に浮かぶ「ザ・プリンスギャラリー 東京紀尾井町」、広大な日本庭園と複数のクラブラウンジが楽しめる「グランドプリンスホテル新高輪」を徹底特集。フードプレゼンテーションとカクテルタイムを満喫する週末ステイケーション。
        </p>
      </header>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 space-y-12">
        {/* リード文セクション */}
        <section className="bg-white rounded-3xl p-6 sm:p-8 shadow-sm border border-stone-200/80 space-y-4">
          <h2 className="text-lg sm:text-xl font-bold font-serif text-amber-950 border-b border-amber-100 pb-3">
            地上数十階から見渡す摩天楼の夜景と、シャンパン傾けるクラブラウンジ——日常を脱ぎ捨てて自分を甘やかす至極の週末ステイ
          </h2>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed">
            誰にも気を使わず、ただ美しい空間に身を委ね、美味しいお酒と軽食を味わいながら過ごす「ひとりホテルステイ」。近年、感度の高い大人たちの間で「自分への定期的なご褒美」として大人気を集めています。特にその魅力を最大化してくれるのが、専用フロア宿泊者だけが足を踏み入れることを許される「エグゼクティブ・クラブラウンジ」です。
          </p>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed">
            チェックイン時のアフタヌーンティーに始まり、夕暮れのトワイライトタイムにはシャンパンや上質なワイン、オードブルが振る舞われるカクテルタイム。そして翌朝は出来立ての贅沢な朝食まで、ホテルから一歩も出ずにワンランク上のホスピタリティを心ゆくまで味わえます。今回は、おひとりさまでも気兼ねなく上質な時間を堪能できる首都圏屈指のラグジュアリーホテル3選をご紹介します。
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
                src="https://img.travel.rakuten.co.jp/share/HOTEL/184035/184035.jpg"
                alt="メズム東京、オートグラフ　コレクション"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 800px"
              />
              <div className="absolute top-4 left-4 bg-black/60 backdrop-blur-md text-white text-xs font-bold px-3 py-1.5 rounded-full">
                第1選
              </div>
              <div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-md text-stone-800 text-xs font-semibold px-3 py-1 rounded-md shadow-xs">
                楽天総合評価 ★ 4.75 点（30件）
              </div>
            </div>

            <div className="p-6 sm:p-8 space-y-6">
              <div>
                <p className="text-amber-800 font-bold text-xs sm:text-sm tracking-wide mb-1">
                  浜離宮恩賜庭園と東京ベイを眼下に見下ろす唯一無二のビュー！全室に電子ピアノを備えた五感を刺激する次世代ラグジュアリー
                </p>
                <h3 className="text-xl sm:text-2xl font-bold font-serif text-stone-900 leading-snug">
                  メズム東京、オートグラフ コレクション —— 竹芝ウォーターフロントに聳えるデザインホテル。水辺のパノラマと洗練のクラブラウンジ
                </h3>
              </div>

              <div className="space-y-3 bg-stone-50/80 p-4 sm:p-5 rounded-2xl border border-stone-100">
                <h4 className="text-xs font-bold uppercase tracking-wider text-stone-500">
                  注目のポイント＆魅力
                </h4>
                <div className="grid gap-3 sm:grid-cols-3">
                  
                  <div className="bg-white p-3.5 rounded-xl border border-stone-200/60 space-y-1">
                    <p className="text-xs font-bold text-amber-950">浜離宮恩賜庭園の緑と東京湾のウォーターフロントが広がる絶景ロケーション</p>
                    <p className="text-xs text-stone-600 leading-relaxed">バルコニー付きの客室からは、刻一刻と表情を変える海と空のグラデーション、夜には光り輝く東京タワーやお台場の夜景を楽しめます。</p>
                  </div>
                  
                  <div className="bg-white p-3.5 rounded-xl border border-stone-200/60 space-y-1">
                    <p className="text-xs font-bold text-amber-950">厳選されたドリンクとスイーツ・オードブルが揃う上質なラウンジ体験</p>
                    <p className="text-xs text-stone-600 leading-relaxed">開放感あふれるラウンジ空間で、バーテンダー特製のミクソロジーカクテルやワインを片手に贅沢なアペリティフタイムを堪能できます。</p>
                  </div>
                  
                  <div className="bg-white p-3.5 rounded-xl border border-stone-200/60 space-y-1">
                    <p className="text-xs font-bold text-amber-950">全客室に「カシオ製電子ピアノ」とタブレットを完備した遊び心あふれる設え</p>
                    <p className="text-xs text-stone-600 leading-relaxed">Bluetoothスピーカーとして極上の音響を楽しんだり、備え付けのオリジナル猿田彦珈琲をハンドドリップで淹れる豊かな時間を過ごせます。</p>
                  </div>
                  
                </div>
              </div>

              <div className="space-y-2 text-xs sm:text-sm text-stone-600 bg-amber-50/50 p-4 rounded-xl border border-amber-100/60">
                <p className="font-semibold text-amber-900">📝 宿泊者の生の声・評判：</p>
                <p className="leading-relaxed text-stone-700">楽天トラベル評価4.75点。「お部屋からの浜離宮の眺めが圧巻で、一人でぼーっと景色を眺めているだけで心が洗われました」「スタッフのホスピタリティが素晴らしく、ラウンジのお料理も一流でした」と大絶賛。</p>
              </div>

              <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-stone-100">
                <div className="text-xs text-stone-500 space-y-0.5 text-center sm:text-left">
                  <p>📍 東京都港区海岸1-10-30</p>
                  <p>🚆 JR山手線・京浜東北線/東京モノレール　浜松町駅から徒歩6分</p>
                </div>
                <div className="flex items-center gap-3 w-full sm:w-auto">
                  <a
                    href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fhb.afl.rakuten.co.jp%2Fhgc%2F54d2a438.4bc4abc2.54d2a439.aa1be583%2F%3Fpc%3Dhttps%253A%252F%252Fimg.travel.rakuten.co.jp%252Fimage%252Ftr%252Fapi%252Fkw%252FJBe8h%252F%253Ff_no%253D184035"
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
                src="https://img.travel.rakuten.co.jp/share/HOTEL/153152/153152.jpg"
                alt="ザ・プリンスギャラリー　東京紀尾井町，ラグジュアリーコレクションホテル"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 800px"
              />
              <div className="absolute top-4 left-4 bg-black/60 backdrop-blur-md text-white text-xs font-bold px-3 py-1.5 rounded-full">
                第2選
              </div>
              <div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-md text-stone-800 text-xs font-semibold px-3 py-1 rounded-md shadow-xs">
                楽天総合評価 ★ 5 点（33件）
              </div>
            </div>

            <div className="p-6 sm:p-8 space-y-6">
              <div>
                <p className="text-amber-800 font-bold text-xs sm:text-sm tracking-wide mb-1">
                  地上180mの天空に佇むマリオット最高峰ラグジュアリー！圧倒的なパノラマビューと洗練を極めたクラブラウンジ
                </p>
                <h3 className="text-xl sm:text-2xl font-bold font-serif text-stone-900 leading-snug">
                  ザ・プリンスギャラリー 東京紀尾井町 —— 都心の高層階で味わう静寂。額縁のような大窓から広がる摩天楼夜景と温水プール
                </h3>
              </div>

              <div className="space-y-3 bg-stone-50/80 p-4 sm:p-5 rounded-2xl border border-stone-100">
                <h4 className="text-xs font-bold uppercase tracking-wider text-stone-500">
                  注目のポイント＆魅力
                </h4>
                <div className="grid gap-3 sm:grid-cols-3">
                  
                  <div className="bg-white p-3.5 rounded-xl border border-stone-200/60 space-y-1">
                    <p className="text-xs font-bold text-amber-950">東京ガーデンテラス紀尾井町の上層階（30〜36階）に位置する天空の特等席</p>
                    <p className="text-xs text-stone-600 leading-relaxed">客室の窓辺には大きなデイベッドが配され、まるで絵画のように広がる東京のパノラマを寝そべりながら一日中眺めることができます。</p>
                  </div>
                  
                  <div className="bg-white p-3.5 rounded-xl border border-stone-200/60 space-y-1">
                    <p className="text-xs font-bold text-amber-950">専任スタッフがもてなす優雅な「クラブラウンジ」でのフードプレゼンテーション</p>
                    <p className="text-xs text-stone-600 leading-relaxed">アフタヌーンティー、イブニングカクテルなど1日を通じて贅沢なサービス。シャンパンを傾けながら優雅な読書や内省の時間を過ごせます。</p>
                  </div>
                  
                  <div className="bg-white p-3.5 rounded-xl border border-stone-200/60 space-y-1">
                    <p className="text-xs font-bold text-amber-950">地上140mからの眺望を誇る室内温水プールと本格スパ・サウナ</p>
                    <p className="text-xs text-stone-600 leading-relaxed">都心のビル群を見下ろしながら泳ぐプールや、温冷交代浴でリフレッシュできるサウナ施設も充実。心身を極限までリセットできます。</p>
                  </div>
                  
                </div>
              </div>

              <div className="space-y-2 text-xs sm:text-sm text-stone-600 bg-amber-50/50 p-4 rounded-xl border border-amber-100/60">
                <p className="font-semibold text-amber-900">📝 宿泊者の生の声・評判：</p>
                <p className="leading-relaxed text-stone-700">楽天トラベル評価5.00点満点。「紀尾井町の高層階からの夜景は息をのむ美しさ。クラブラウンジのクオリティも日本トップクラス」「一人で静かに自分と向き合う最高の時間になりました」と極めて高い満足度。</p>
              </div>

              <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-stone-100">
                <div className="text-xs text-stone-500 space-y-0.5 text-center sm:text-left">
                  <p>📍 東京都千代田区紀尾井町1-2</p>
                  <p>🚆 銀座線・丸ノ内線赤坂見附駅より徒歩１分　/　南北線永田町駅（9-a口）直結。</p>
                </div>
                <div className="flex items-center gap-3 w-full sm:w-auto">
                  <a
                    href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fhb.afl.rakuten.co.jp%2Fhgc%2F54d2a438.4bc4abc2.54d2a439.aa1be583%2F%3Fpc%3Dhttps%253A%252F%252Fimg.travel.rakuten.co.jp%252Fimage%252Ftr%252Fapi%252Fkw%252FJBe8h%252F%253Ff_no%253D153152"
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
                src="https://img.travel.rakuten.co.jp/share/HOTEL/28470/28470.jpg"
                alt="グランドプリンスホテル新高輪"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 800px"
              />
              <div className="absolute top-4 left-4 bg-black/60 backdrop-blur-md text-white text-xs font-bold px-3 py-1.5 rounded-full">
                第3選
              </div>
              <div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-md text-stone-800 text-xs font-semibold px-3 py-1 rounded-md shadow-xs">
                楽天総合評価 ★ 4.24 点（4366件）
              </div>
            </div>

            <div className="p-6 sm:p-8 space-y-6">
              <div>
                <p className="text-amber-800 font-bold text-xs sm:text-sm tracking-wide mb-1">
                  品川駅から徒歩約5分！約2万㎡の広大な日本庭園と全室バルコニー付きのゆとりあるモダン客室
                </p>
                <h3 className="text-xl sm:text-2xl font-bold font-serif text-stone-900 leading-snug">
                  グランドプリンスホテル新高輪 —— 都心とは思えない緑と静けさ。「クラブラウンジ」ホッピングで味わう優雅な休日
                </h3>
              </div>

              <div className="space-y-3 bg-stone-50/80 p-4 sm:p-5 rounded-2xl border border-stone-100">
                <h4 className="text-xs font-bold uppercase tracking-wider text-stone-500">
                  注目のポイント＆魅力
                </h4>
                <div className="grid gap-3 sm:grid-cols-3">
                  
                  <div className="bg-white p-3.5 rounded-xl border border-stone-200/60 space-y-1">
                    <p className="text-xs font-bold text-amber-950">全客室に開放的なプライベートバルコニーを完備した快適設計</p>
                    <p className="text-xs text-stone-600 leading-relaxed">外の心地よい風を感じながら、コーヒー片手に読書やワークが可能。ゆったりとした広さがあり、一人でも窮屈さを一切感じません。</p>
                  </div>
                  
                  <div className="bg-white p-3.5 rounded-xl border border-stone-200/60 space-y-1">
                    <p className="text-xs font-bold text-amber-950">高輪エリアの3つのプリンスホテルのラウンジを巡る「ラウンジホッピング」</p>
                    <p className="text-xs text-stone-600 leading-relaxed">クラブフロア宿泊者は、日本庭園を挟んだ近隣ホテルの異なるラウンジを利用可能。庭園散策を楽しみながら多彩なティー＆バータイムを満喫できます。</p>
                  </div>
                  
                  <div className="bg-white p-3.5 rounded-xl border border-stone-200/60 space-y-1">
                    <p className="text-xs font-bold text-amber-950">四季折々の花々や歴史的建造物が点在する約2万㎡の広大な日本庭園</p>
                    <p className="text-xs text-stone-600 leading-relaxed">春の桜、新緑、秋の紅葉など、都会の真ん中にいることを忘れるほどの自然美。朝の清々しい庭園散歩は最高の癒やしです。</p>
                  </div>
                  
                </div>
              </div>

              <div className="space-y-2 text-xs sm:text-sm text-stone-600 bg-amber-50/50 p-4 rounded-xl border border-amber-100/60">
                <p className="font-semibold text-amber-900">📝 宿泊者の生の声・評判：</p>
                <p className="leading-relaxed text-stone-700">楽天トラベル評価4.24点。「品川駅からすぐなのに庭園が広くて静か。ラウンジを巡る体験がとても楽しく、一人でも居心地抜群でした」「バルコニー付きのお部屋が気持ちよくてリフレッシュできた」と評判。</p>
              </div>

              <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-stone-100">
                <div className="text-xs text-stone-500 space-y-0.5 text-center sm:text-left">
                  <p>📍 東京都港区高輪3-13-1</p>
                  <p>🚆 品川駅高輪口より徒歩約5分　第一京浜を渡り、柘榴坂を道なり（登り坂）約400m／都営浅草線高輪台駅から徒歩約３分</p>
                </div>
                <div className="flex items-center gap-3 w-full sm:w-auto">
                  <a
                    href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fhb.afl.rakuten.co.jp%2Fhgc%2F54d2a438.4bc4abc2.54d2a439.aa1be583%2F%3Fpc%3Dhttps%253A%252F%252Fimg.travel.rakuten.co.jp%252Fimage%252Ftr%252Fapi%252Fkw%252FJBe8h%252F%253Ff_no%253D28470"
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
              クラブラウンジ付きご褒美ステイを120％楽しむタイムスケジュール
            </h2>
          </div>

          <div className="grid gap-4 sm:grid-cols-3">
            
            <div className="bg-stone-800/80 p-4 rounded-2xl border border-stone-700/60 space-y-2">
              <h3 className="text-sm font-bold text-amber-300">
                14:30〜16:00: 専用カウンターでチェックイン＆アフタヌーンティー
              </h3>
              <p className="text-xs text-stone-300 leading-relaxed">
                並ばずにラウンジでスムーズにチェックイン。ウェルカムスイーツと厳選紅茶で旅の始まりを優雅にスタートします。
              </p>
            </div>
            
            <div className="bg-stone-800/80 p-4 rounded-2xl border border-stone-700/60 space-y-2">
              <h3 className="text-sm font-bold text-amber-300">
                17:30〜19:30: カクテルタイム（夕暮れアペリティフ）
              </h3>
              <p className="text-xs text-stone-300 leading-relaxed">
                空が夕焼けから藍色、夜景へと変わるゴールデンアワー。シャンパンやワインとともにシェフ特製のオードブルを味わいます。
              </p>
            </div>
            
            <div className="bg-stone-800/80 p-4 rounded-2xl border border-stone-700/60 space-y-2">
              <h3 className="text-sm font-bold text-amber-300">
                21:00〜翌朝: 客室の深めのバスタブ＆極上ベッドで熟睡
              </h3>
              <p className="text-xs text-stone-300 leading-relaxed">
                バスソルトを入れてゆったり入浴した後は、最高級マットレスに包まれて誰にも邪魔されない深い眠りへ。翌朝はラウンジの贅沢モーニングが待っています。
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
                <span>クラブラウンジに一人で行っても浮きませんか？</span>
              </h3>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed pl-5">
                まったく浮きません。むしろ出張のエグゼクティブや一人で読書・PCワークを楽しんでいる大人のソロゲストが非常に多く、静かで落ち着いた雰囲気のため一人の方が快適に過ごせることも多いです。
              </p>
            </div>
            
            <div className="space-y-1.5 bg-stone-50 p-4 rounded-xl">
              <h3 className="text-sm font-bold text-stone-900 flex items-start gap-2">
                <span className="text-amber-800 font-extrabold">Q.</span>
                <span>カクテルタイムのオードブルで夕食の代わりになりますか？</span>
              </h3>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed pl-5">
                ハイクラスホテルのラウンジでは、ローストビーフや温かい肉・魚料理、チーズ、ブレッドなどが豊富に並ぶため、軽めの夕食として十分に満足される方が大半です。
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
