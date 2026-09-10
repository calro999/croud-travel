import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: '【沖縄・那覇×ふるさと納税】国際通りの活気＆屋外プールリゾート！天然温泉スパ特集｜ハイアット那覇・コレクティブ・ロワジールスパタワー',
  description: '那覇空港からゆいレールで約10〜15分！沖縄の玄関口・沖縄県那覇市を楽天ふるさと納税でお得に贅沢ステイ。国際通り徒歩3分のハイエンド「ハイアット リージェンシー 那覇 沖縄」、国際通りのど真ん中に誕生したフルスペックリゾート「ホテル コレクティブ」、地下から湧出する天然温泉「ロワジール スパタワー 那覇」を徹底比較。那覇市トラベルクーポン活用術を網羅。',
  keywords: '那覇 ホテル ふるさと納税,ハイアット那覇 クーポン,ホテルコレクティブ ふるさと納税,ロワジールスパタワー那覇 宿泊,那覇市 ふるさと納税 旅行',
  alternates: {
    canonical: 'https://croud-travel.pages.dev/furusato-tax-okinawa-naha-kokusaidori-luxury-stay',
  },
  openGraph: {
    title: '【沖縄・那覇×ふるさと納税】国際通りの活気＆屋外プールリゾート！天然温泉スパ特集｜ハイアット那覇・コレクティブ・ロワジールスパタワー',
    description: '那覇空港からゆいレールで約10〜15分！沖縄の玄関口・沖縄県那覇市を楽天ふるさと納税でお得に贅沢ステイ。国際通り徒歩3分のハイエンド「ハイアット リージェンシー 那覇 沖縄」、国際通りのど真ん中に誕生したフルスペックリゾート「ホテル コレクティブ」、地下から湧出する天然温泉「ロワジール スパタワー 那覇」を徹底比較。那覇市トラベルクーポン活用術を網羅。',
    url: 'https://croud-travel.pages.dev/furusato-tax-okinawa-naha-kokusaidori-luxury-stay',
    siteName: 'トラベルガイド - クラウドトラベル',
    locale: 'ja_JP',
    type: 'article',
  },
};

export default function FurusatoArticlePage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: '【沖縄・那覇×ふるさと納税】国際通りの活気＆屋外プールリゾート！天然温泉スパ特集｜ハイアット那覇・コレクティブ・ロワジールスパタワー',
    description: '那覇空港からゆいレールで約10〜15分！沖縄の玄関口・沖縄県那覇市を楽天ふるさと納税でお得に贅沢ステイ。国際通り徒歩3分のハイエンド「ハイアット リージェンシー 那覇 沖縄」、国際通りのど真ん中に誕生したフルスペックリゾート「ホテル コレクティブ」、地下から湧出する天然温泉「ロワジール スパタワー 那覇」を徹底比較。那覇市トラベルクーポン活用術を網羅。',
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
    mainEntityOfPage: 'https://croud-travel.pages.dev/furusato-tax-okinawa-naha-kokusaidori-luxury-stay',
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
        <span className="text-stone-700 font-medium truncate">【沖縄・那覇×ふるさと納税】国際通りの活気＆屋外プールリゾート！天然温泉スパ特集｜ハイアット那覇・コレクティブ・ロワジールスパタワー</span>
      </nav>

      {/* ヒーローセクション */}
      <header className="max-w-4xl mx-auto px-4 sm:px-6 py-8 sm:py-12 space-y-4">
        <div className="inline-flex items-center gap-2 bg-amber-100/80 text-amber-900 text-xs font-semibold px-3 py-1 rounded-full border border-amber-200">
          <span>♨️</span>
          <span>沖縄県那覇市（国際通り・首里） ふるさと納税・名湯宿特集</span>
        </div>
        <h1 className="text-2xl sm:text-4xl font-extrabold font-serif text-stone-900 tracking-tight leading-snug">
          【沖縄・那覇×ふるさと納税】国際通りの活気＆屋外プールリゾート！天然温泉スパ特集｜ハイアット那覇・コレクティブ・ロワジールスパタワー
        </h1>
        <p className="text-stone-600 text-sm sm:text-base leading-relaxed">
          那覇空港からゆいレールで約10〜15分！沖縄の玄関口・沖縄県那覇市を楽天ふるさと納税でお得に贅沢ステイ。国際通り徒歩3分のハイエンド「ハイアット リージェンシー 那覇 沖縄」、国際通りのど真ん中に誕生したフルスペックリゾート「ホテル コレクティブ」、地下から湧出する天然温泉「ロワジール スパタワー 那覇」を徹底比較。那覇市トラベルクーポン活用術を網羅。
        </p>
      </header>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 space-y-12">
        {/* リード文セクション */}
        <section className="bg-white rounded-3xl p-6 sm:p-8 shadow-sm border border-stone-200/80 space-y-4">
          <h2 className="text-lg sm:text-xl font-bold font-serif text-amber-900 border-b border-amber-100 pb-3">
            ガジュマルの木陰と国際通りの熱気、首里城の朱色の祈り——都会の洗練と南国の極上オアシスに浸る那覇ステイ
          </h2>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed">
            沖縄県の政治・経済・交通の中枢であり、琉球王国の歴史が息づく街・那覇。約1.6kmにわたって土産物店や沖縄料理店、カフェが立ち並ぶ「国際通り（奇跡の1マイル）」や、色鮮やかな魚や南国フルーツが並ぶ「第一牧志公設市場」、石畳の坂道が風情ある「首里城公園」など、沖縄文化の熱気と魅力が凝縮しています。那覇空港からゆいレール（モノレール）で中心街へ直結する世界屈指の都市アクセスの良さも誇ります。
          </p>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed">
            那覇のシティリゾート滞在の大きな魅力は、昼間は観光やビーチへ出かけ、夕暮れからはホテルの屋外プールやクラブラウンジで夕日を眺め、夜は国際通りの民謡居酒屋やステーキハウスへ繰り出せる最高の利便性。さらに地下深くから湧出する含ヨウ素天然温泉でリフレッシュする極上の時間も待っています。沖縄県那覇市へのふるさと納税を利用すれば、30%相当の楽天トラベルクーポンにより憧れのハイクラスホテルへお得に宿泊でき、観光やワーケーションが一段と贅沢になります。
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
                  <td className="p-3 font-bold text-amber-900">ハイアットリージェンシー那覇沖縄</td>
                  <td className="p-3 font-bold">★ 4.44</td>
                  <td className="p-3 text-stone-600">国際通りまで徒歩3分の好立地！屋外プール＆最上階18階クラブラウンジを備えた最高峰シティホテル</td>
                  <td className="p-3 text-stone-600">最高峰の格式・贅沢ステイ</td>
                </tr>
                <tr>
                  <td className="p-3 font-bold text-amber-900">ホテルコレクティブ</td>
                  <td className="p-3 font-bold">★ 4.64</td>
                  <td className="p-3 text-stone-600">国際通りのど真ん中に誕生したフルスペックリゾート！屋外プール・サウナ付き大浴場完備</td>
                  <td className="p-3 text-stone-600">抜群の立地・名湯満喫</td>
                </tr>
                <tr>
                  <td className="p-3 font-bold text-amber-900">ロワジールスパタワー那覇</td>
                  <td className="p-3 font-bold">★ 4.33</td>
                  <td className="p-3 text-stone-600">那覇市内では希少な地下約8,000万年前の化石海水天然温泉！全室バルコニー付きのベイサイドリゾート</td>
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
                src="https://img.travel.rakuten.co.jp/share/HOTEL/148000/148000.jpg"
                alt="ハイアットリージェンシー那覇沖縄"
                className="w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute top-4 left-4 bg-stone-900/80 backdrop-blur-sm text-white text-xs px-3 py-1.5 rounded-full font-semibold">
                第1選
              </div>
              <div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-sm text-stone-900 text-xs px-3 py-1.5 rounded-full font-bold shadow">
                ★ 4.44（口コミ 818件）
              </div>
            </div>

            <div className="p-6 sm:p-8 space-y-6">
              <div className="space-y-2">
                <span className="text-xs font-bold text-amber-700 uppercase tracking-wider">沖縄県那覇市（国際通り・首里）</span>
                <h3 className="text-xl sm:text-2xl font-bold font-serif text-stone-900 leading-snug">
                  ハイアットリージェンシー那覇沖縄
                </h3>
                <p className="text-xs sm:text-sm font-medium text-amber-800">
                  国際通りまで徒歩3分の好立地！屋外プール＆最上階18階クラブラウンジを備えた最高峰シティホテル
                </p>
              </div>

              <div className="border-t border-b border-stone-100 py-4 space-y-3">
                <h4 className="font-bold text-stone-900 text-sm sm:text-base font-serif">
                  ハイアット リージェンシー 那覇 沖縄 —— 都会の真ん中に広がる洗練のオアシス。開放感あふれるプールと最上階ダイニング
                </h4>
                <div className="grid gap-3 text-xs sm:text-sm text-stone-700">
                  
                  <div className="bg-stone-50 p-3.5 rounded-xl border border-stone-200/60">
                    <h5 className="font-bold text-stone-900 mb-1 flex items-center gap-1.5">
                      <span className="text-amber-600">✓</span> 国際通りの喧騒から少し離れた閑静で上質なロケーション
                    </h5>
                    <p className="text-stone-600 leading-relaxed">壺屋やちむん通りへも徒歩すぐ。観光やショッピングに最高の立地でありながら、館内は静寂と品格に満ちています。</p>
                  </div>
                  <div className="bg-stone-50 p-3.5 rounded-xl border border-stone-200/60">
                    <h5 className="font-bold text-stone-900 mb-1 flex items-center gap-1.5">
                      <span className="text-amber-600">✓</span> 開放的な屋外ジェットバス付きプールとフィットネスセンター
                    </h5>
                    <p className="text-stone-600 leading-relaxed">那覇の心地よい風を感じる屋外プール（季節営業）。都会にいながら本格的なリゾート気分を味わえます。</p>
                  </div>
                  <div className="bg-stone-50 p-3.5 rounded-xl border border-stone-200/60">
                    <h5 className="font-bold text-stone-900 mb-1 flex items-center gap-1.5">
                      <span className="text-amber-600">✓</span> 最上階18階「MILANO｜GRILL」での本格イタリアンディナー
                    </h5>
                    <p className="text-stone-600 leading-relaxed">那覇の煌めく夜景を見下ろす特等席。ローストビーフや厳選牛、近海魚のグリルをワインとともに優雅に堪能できます。</p>
                  </div>
                </div>
              </div>

              {/* レビュー抜粋 */}
              <div className="bg-amber-50/60 p-4 rounded-2xl border border-amber-100 text-xs sm:text-sm space-y-1.5">
                <span className="font-bold text-amber-900 flex items-center gap-1.5">
                  <span>💬</span> 実際の宿泊者からの評価・口コミ
                </span>
                <p className="text-stone-700 leading-relaxed">楽天トラベル評価4.44点、口コミ2000件超。「国際通りが近くて便利、最上階のラウンジからの景色が最高」「スタッフの気配りが素晴らしく、お部屋のベッドも快適」と絶賛。</p>
              </div>

              {/* 宿基本情報 */}
              <div className="text-xs text-stone-500 grid sm:grid-cols-2 gap-2 bg-stone-50 p-4 rounded-xl">
                <div><span className="font-semibold text-stone-700">住所：</span>沖縄県 那覇市牧志3-6-20</div>
                <div><span className="font-semibold text-stone-700">宿泊目安：</span>¥9,880〜 /人</div>
                <div><span className="font-semibold text-stone-700">楽天施設ID：</span>148000</div>
                <div><span className="font-semibold text-stone-700">予約区分：</span>楽天ふるさと納税トラベルクーポン対象</div>
              </div>

              <div className="pt-2">
                <a
                  href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FJBe8h%2F%3Ff_no%3D148000"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full text-center bg-gradient-to-r from-amber-700 to-amber-900 hover:from-amber-800 hover:to-stone-900 text-white font-bold py-3.5 px-6 rounded-xl shadow transition"
                >
                  【楽天トラベル】ハイアットリージェンシー那覇沖縄 の宿泊プランとクーポン適用はこちら →
                </a>
              </div>
            </div>
          </article>

          {/* ホテル 2 */}
          <article className="bg-white rounded-3xl overflow-hidden shadow-sm border border-stone-200/80 transition hover:shadow-md">
            <div className="relative aspect-video sm:aspect-[16/9] w-full overflow-hidden bg-stone-100">
              <img
                src="https://img.travel.rakuten.co.jp/share/HOTEL/172986/172986.jpg"
                alt="ホテルコレクティブ"
                className="w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute top-4 left-4 bg-stone-900/80 backdrop-blur-sm text-white text-xs px-3 py-1.5 rounded-full font-semibold">
                第2選
              </div>
              <div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-sm text-stone-900 text-xs px-3 py-1.5 rounded-full font-bold shadow">
                ★ 4.64（口コミ 189件）
              </div>
            </div>

            <div className="p-6 sm:p-8 space-y-6">
              <div className="space-y-2">
                <span className="text-xs font-bold text-amber-700 uppercase tracking-wider">沖縄県那覇市（国際通り・首里）</span>
                <h3 className="text-xl sm:text-2xl font-bold font-serif text-stone-900 leading-snug">
                  ホテルコレクティブ
                </h3>
                <p className="text-xs sm:text-sm font-medium text-amber-800">
                  国際通りのど真ん中に誕生したフルスペックリゾート！屋外プール・サウナ付き大浴場完備
                </p>
              </div>

              <div className="border-t border-b border-stone-100 py-4 space-y-3">
                <h4 className="font-bold text-stone-900 text-sm sm:text-base font-serif">
                  ホテル コレクティブ —— 国際通りを眼下に見下ろす最新鋭のオアシス。広々客室と充実のウェルネス施設
                </h4>
                <div className="grid gap-3 text-xs sm:text-sm text-stone-700">
                  
                  <div className="bg-stone-50 p-3.5 rounded-xl border border-stone-200/60">
                    <h5 className="font-bold text-stone-900 mb-1 flex items-center gap-1.5">
                      <span className="text-amber-600">✓</span> 国際通りの中心に位置し雨の日でも買い物・食事へ直行可能
                    </h5>
                    <p className="text-stone-600 leading-relaxed">ショッピングや食べ歩きにこれ以上ない立地。ホテルを出ればすぐに賑やかな国際通りの活気にアクセスできます。</p>
                  </div>
                  <div className="bg-stone-50 p-3.5 rounded-xl border border-stone-200/60">
                    <h5 className="font-bold text-stone-900 mb-1 flex items-center gap-1.5">
                      <span className="text-amber-600">✓</span> 那覇の市街地を一望する25m屋外プールとサウナ・大浴場
                    </h5>
                    <p className="text-stone-600 leading-relaxed">屋外プールやスチームサウナ、ジェットバスを完備。街の真ん中で優雅にととのう極上のリラクゼーションです。</p>
                  </div>
                  <div className="bg-stone-50 p-3.5 rounded-xl border border-stone-200/60">
                    <h5 className="font-bold text-stone-900 mb-1 flex items-center gap-1.5">
                      <span className="text-amber-600">✓</span> 全室30㎡以上のゆとりある客室と最新のスマート設備
                    </h5>
                    <p className="text-stone-600 leading-relaxed">洗練されたモダンインテリアに大型バスタブと独立洗面台。高い防音性で外の喧騒を感じさせない快適な空間です。</p>
                  </div>
                </div>
              </div>

              {/* レビュー抜粋 */}
              <div className="bg-amber-50/60 p-4 rounded-2xl border border-amber-100 text-xs sm:text-sm space-y-1.5">
                <span className="font-bold text-amber-900 flex items-center gap-1.5">
                  <span>💬</span> 実際の宿泊者からの評価・口コミ
                </span>
                <p className="text-stone-700 leading-relaxed">楽天トラベル評価4.64点、口コミ高評価。「国際通り直結で立地が最強、大浴場やプールもあって最高だった」「お部屋が広くて綺麗、朝食ビュッフェのレベルが高い」と大人気。</p>
              </div>

              {/* 宿基本情報 */}
              <div className="text-xs text-stone-500 grid sm:grid-cols-2 gap-2 bg-stone-50 p-4 rounded-xl">
                <div><span className="font-semibold text-stone-700">住所：</span>沖縄県 那覇市松尾2-5-7</div>
                <div><span className="font-semibold text-stone-700">宿泊目安：</span>¥10,900〜 /人</div>
                <div><span className="font-semibold text-stone-700">楽天施設ID：</span>172986</div>
                <div><span className="font-semibold text-stone-700">予約区分：</span>楽天ふるさと納税トラベルクーポン対象</div>
              </div>

              <div className="pt-2">
                <a
                  href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FJBe8h%2F%3Ff_no%3D172986"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full text-center bg-gradient-to-r from-amber-700 to-amber-900 hover:from-amber-800 hover:to-stone-900 text-white font-bold py-3.5 px-6 rounded-xl shadow transition"
                >
                  【楽天トラベル】ホテルコレクティブ の宿泊プランとクーポン適用はこちら →
                </a>
              </div>
            </div>
          </article>

          {/* ホテル 3 */}
          <article className="bg-white rounded-3xl overflow-hidden shadow-sm border border-stone-200/80 transition hover:shadow-md">
            <div className="relative aspect-video sm:aspect-[16/9] w-full overflow-hidden bg-stone-100">
              <img
                src="https://img.travel.rakuten.co.jp/share/HOTEL/78094/78094.jpg"
                alt="ロワジールスパタワー那覇"
                className="w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute top-4 left-4 bg-stone-900/80 backdrop-blur-sm text-white text-xs px-3 py-1.5 rounded-full font-semibold">
                第3選
              </div>
              <div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-sm text-stone-900 text-xs px-3 py-1.5 rounded-full font-bold shadow">
                ★ 4.33（口コミ 688件）
              </div>
            </div>

            <div className="p-6 sm:p-8 space-y-6">
              <div className="space-y-2">
                <span className="text-xs font-bold text-amber-700 uppercase tracking-wider">沖縄県那覇市（国際通り・首里）</span>
                <h3 className="text-xl sm:text-2xl font-bold font-serif text-stone-900 leading-snug">
                  ロワジールスパタワー那覇
                </h3>
                <p className="text-xs sm:text-sm font-medium text-amber-800">
                  那覇市内では希少な地下約8,000万年前の化石海水天然温泉！全室バルコニー付きのベイサイドリゾート
                </p>
              </div>

              <div className="border-t border-b border-stone-100 py-4 space-y-3">
                <h4 className="font-bold text-stone-900 text-sm sm:text-base font-serif">
                  ロワジール スパタワー 那覇 —— 空港から車で7分の極上温泉リゾート。天然温泉「三重城温泉」と充実のスパ
                </h4>
                <div className="grid gap-3 text-xs sm:text-sm text-stone-700">
                  
                  <div className="bg-stone-50 p-3.5 rounded-xl border border-stone-200/60">
                    <h5 className="font-bold text-stone-900 mb-1 flex items-center gap-1.5">
                      <span className="text-amber-600">✓</span> 地下深くから湧き出す本格的な含ヨウ素ナトリウム塩化物泉
                    </h5>
                    <p className="text-stone-600 leading-relaxed">保温・美肌効果抜群の本格天然温泉。タラソテラピーを取り入れた贅沢なスパ施設で心身ともにリフレッシュできます。</p>
                  </div>
                  <div className="bg-stone-50 p-3.5 rounded-xl border border-stone-200/60">
                    <h5 className="font-bold text-stone-900 mb-1 flex items-center gap-1.5">
                      <span className="text-amber-600">✓</span> 那覇港のベイビューと夕暮れのサンセットを望むバルコニー
                    </h5>
                    <p className="text-stone-600 leading-relaxed">客室のプライベートバルコニーから眺める海と船の往来。リゾート感あふれる開放的な滞在を楽しめます。</p>
                  </div>
                  <div className="bg-stone-50 p-3.5 rounded-xl border border-stone-200/60">
                    <h5 className="font-bold text-stone-900 mb-1 flex items-center gap-1.5">
                      <span className="text-amber-600">✓</span> 那覇空港から車でわずか約7分の抜群のアクセス環境
                    </h5>
                    <p className="text-stone-600 leading-relaxed">到着日や帰国日の宿泊にも最適。ホテル内には屋内温水プールや多彩なレストランが揃っています。</p>
                  </div>
                </div>
              </div>

              {/* レビュー抜粋 */}
              <div className="bg-amber-50/60 p-4 rounded-2xl border border-amber-100 text-xs sm:text-sm space-y-1.5">
                <span className="font-bold text-amber-900 flex items-center gap-1.5">
                  <span>💬</span> 実際の宿泊者からの評価・口コミ
                </span>
                <p className="text-stone-700 leading-relaxed">楽天トラベル評価4.33点、口コミ高評価。「那覇で本格的な天然温泉に入れるのが素晴らしい」「空港から近くて移動が楽、お部屋も広くてくつろげた」とシニア・家族連れに人気。</p>
              </div>

              {/* 宿基本情報 */}
              <div className="text-xs text-stone-500 grid sm:grid-cols-2 gap-2 bg-stone-50 p-4 rounded-xl">
                <div><span className="font-semibold text-stone-700">住所：</span>沖縄県 那覇市西3-2-1</div>
                <div><span className="font-semibold text-stone-700">宿泊目安：</span>¥7,031〜 /人</div>
                <div><span className="font-semibold text-stone-700">楽天施設ID：</span>78094</div>
                <div><span className="font-semibold text-stone-700">予約区分：</span>楽天ふるさと納税トラベルクーポン対象</div>
              </div>

              <div className="pt-2">
                <a
                  href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FJBe8h%2F%3Ff_no%3D78094"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full text-center bg-gradient-to-r from-amber-700 to-amber-900 hover:from-amber-800 hover:to-stone-900 text-white font-bold py-3.5 px-6 rounded-xl shadow transition"
                >
                  【楽天トラベル】ロワジールスパタワー那覇 の宿泊プランとクーポン適用はこちら →
                </a>
              </div>
            </div>
          </article>
        </section>

        {/* エリア観光・見どころ */}
        <section className="space-y-4">
          <h2 className="text-xl sm:text-2xl font-bold font-serif text-stone-900 flex items-center gap-2">
            <span>🗺️</span> 国際通り・第一牧志公設市場＆首里城公園・やちむん通り観光ガイド
          </h2>
          <div className="grid gap-4">

            <div className="bg-white p-5 rounded-2xl border border-stone-200/80 shadow-sm space-y-2">
              <h4 className="font-bold text-stone-900 text-sm sm:text-base font-serif flex items-center gap-2">
                <span className="w-6 h-6 rounded-full bg-amber-100 text-amber-900 flex items-center justify-center text-xs font-sans font-bold">1</span>
                国際通り散策＆第一牧志公設市場の「持ち上げ（持ち込み調理）」
              </h4>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed pl-8">
                色鮮やかなイラブチャーや夜光貝、石垣牛。市場の1階で購入した新鮮食材を2階の食堂ですぐに調理して味わう名物体験が人気です。
              </p>
            </div>
            <div className="bg-white p-5 rounded-2xl border border-stone-200/80 shadow-sm space-y-2">
              <h4 className="font-bold text-stone-900 text-sm sm:text-base font-serif flex items-center gap-2">
                <span className="w-6 h-6 rounded-full bg-amber-100 text-amber-900 flex items-center justify-center text-xs font-sans font-bold">2</span>
                世界遺産「首里城跡」と守礼門・金城町石畳道
              </h4>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed pl-8">
                琉球王国の栄華を伝える歴史の舞台。復興が進む首里城正殿や、樹齢数百年の大アカギが立つ風情豊かな石畳の散策が楽しめます。
              </p>
            </div>
            <div className="bg-white p-5 rounded-2xl border border-stone-200/80 shadow-sm space-y-2">
              <h4 className="font-bold text-stone-900 text-sm sm:text-base font-serif flex items-center gap-2">
                <span className="w-6 h-6 rounded-full bg-amber-100 text-amber-900 flex items-center justify-center text-xs font-sans font-bold">3</span>
                壺屋やちむん通り（沖縄の伝統陶器工房めぐり）
              </h4>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed pl-8">
                赤瓦の屋敷や登り窯が残る石畳の通り。個性豊かな陶芸作家の工房やショップが並び、自分だけのお気に入りの器探しに最適です。
              </p>
            </div>
          </div>
        </section>

        {/* ふるさと納税活用ステップ */}
        <section className="bg-gradient-to-br from-amber-900 via-stone-900 to-stone-950 text-white rounded-3xl p-6 sm:p-8 shadow-xl space-y-6">
          <div className="space-y-2">
            <span className="text-xs uppercase tracking-widest text-amber-300 font-semibold">How to Use Coupon</span>
            <h2 className="text-xl sm:text-2xl font-bold font-serif text-amber-50">
              沖縄県那覇市ふるさと納税×楽天トラベルクーポン活用手順
            </h2>
            <p className="text-stone-300 text-xs sm:text-sm">
              初めての方でも迷わず利用できる3ステップ。予約済みのプランにも後から適用可能です。
            </p>
          </div>

          <div className="grid sm:grid-cols-3 gap-4 text-xs sm:text-sm">

            <div className="bg-stone-900/60 p-4 rounded-2xl border border-amber-500/20 space-y-2">
              <span className="inline-block bg-amber-500/20 text-amber-300 font-mono text-xs px-2.5 py-0.5 rounded font-semibold">
                Step 1: 楽天ふるさと納税で「沖縄県那覇市」クーポンを獲得
              </span>
              <p className="text-stone-300 text-xs sm:text-sm leading-relaxed">
                楽天ふるさと納税で那覇市を選び、トラベルクーポンを返礼品として申し込みます。寄付額の30%相当のクーポンがアカウントに付与されます。
              </p>
            </div>
            <div className="bg-stone-900/60 p-4 rounded-2xl border border-amber-500/20 space-y-2">
              <span className="inline-block bg-amber-500/20 text-amber-300 font-mono text-xs px-2.5 py-0.5 rounded font-semibold">
                Step 2: 那覇空港からゆいレールやタクシーですぐのアクセス
              </span>
              <p className="text-stone-300 text-xs sm:text-sm leading-relaxed">
                羽田・成田・関西など全国主要空港から直行便多数。3年間の有効期間内で、夏休みや冬のプロ野球キャンプ、春の海開きに合わせて計画できます。
              </p>
            </div>
            <div className="bg-stone-900/60 p-4 rounded-2xl border border-amber-500/20 space-y-2">
              <span className="inline-block bg-amber-500/20 text-amber-300 font-mono text-xs px-2.5 py-0.5 rounded font-semibold">
                Step 3: 楽天トラベル予約画面でクーポン割引を適用して予約完了
              </span>
              <p className="text-stone-300 text-xs sm:text-sm leading-relaxed">
                ハイアット那覇、ホテルコレクティブ、ロワジールスパタワーなどの宿泊プランを選び、決済時にクーポンを選択すれば宿泊代金から大幅な割引が適用されます。
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
