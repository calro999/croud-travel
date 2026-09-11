import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: '【読書・デジタルデトックス泊】本の世界に没頭するライブラリーホテル＆文豪ゆかりの名湯おこもり宿 厳選3選',
  description: 'スマートフォンを置いて、物語や思索の旅へ出かけよう。何千冊もの蔵書に囲まれる「芝パークホテル」、夏目漱石や島崎藤村が逗留した文化財の宿「湯河原温泉 源泉 上野屋」、志賀直哉が名作『城の崎にて』を執筆した日本旅館の最高峰「城崎温泉 西村屋本館」を徹底特集。心静かに活字と温泉に浸る大人のソロリトリート。',
  keywords: '読書 宿泊 一人旅,デジタルデトックス ホテル,ブックホテル 一人,芝パークホテル 宿泊,文豪 温泉宿 一人旅,西村屋本館 一人',
  openGraph: {
    title: '【読書・デジタルデトックス泊】本の世界に没頭するライブラリーホテル＆文豪ゆかりの名湯おこもり宿 厳選3選',
    description: 'スマートフォンを置いて、物語や思索の旅へ出かけよう。何千冊もの蔵書に囲まれる「芝パークホテル」、夏目漱石や島崎藤村が逗留した文化財の宿「湯河原温泉 源泉 上野屋」、志賀直哉が名作『城の崎にて』を執筆した日本旅館の最高峰「城崎温泉 西村屋本館」を徹底特集。心静かに活字と温泉に浸る大人のソロリトリート。',
    url: 'https://croud-travel.pages.dev/solo-book-retreat-digital-detox-stay',
    siteName: 'トラベルガイド - クラウドトラベル',
    locale: 'ja_JP',
    type: 'article',
  },
};

export default function ArticlePage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: '【読書・デジタルデトックス泊】本の世界に没頭するライブラリーホテル＆文豪ゆかりの名湯おこもり宿 厳選3選',
    description: 'スマートフォンを置いて、物語や思索の旅へ出かけよう。何千冊もの蔵書に囲まれる「芝パークホテル」、夏目漱石や島崎藤村が逗留した文化財の宿「湯河原温泉 源泉 上野屋」、志賀直哉が名作『城の崎にて』を執筆した日本旅館の最高峰「城崎温泉 西村屋本館」を徹底特集。心静かに活字と温泉に浸る大人のソロリトリート。',
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
    mainEntityOfPage: 'https://croud-travel.pages.dev/solo-book-retreat-digital-detox-stay',
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
        <span className="text-stone-700 font-medium">読書・文豪おこもり特集</span>
        <span>/</span>
        <span className="text-stone-700 font-medium truncate">【読書・デジタルデトックス泊】本の世界に没頭するライブラリーホテル＆文豪ゆかりの名湯おこもり宿 厳選3選</span>
      </nav>

      {/* ヒーローヘッダー */}
      <header className="max-w-4xl mx-auto px-4 sm:px-6 py-8 sm:py-12 space-y-4">
        <div className="inline-flex items-center gap-2 bg-amber-100/90 text-amber-950 text-xs font-semibold px-3.5 py-1.5 rounded-full border border-amber-300/80 shadow-xs">
          <span>✨</span>
          <span>読書・文豪おこもり特集</span>
        </div>
        <h1 className="text-2xl sm:text-4xl font-extrabold font-serif text-stone-900 tracking-tight leading-snug">
          【読書・デジタルデトックス泊】本の世界に没頭するライブラリーホテル＆文豪ゆかりの名湯おこもり宿 厳選3選
        </h1>
        <p className="text-stone-600 text-sm sm:text-base leading-relaxed pt-2">
          スマートフォンを置いて、物語や思索の旅へ出かけよう。何千冊もの蔵書に囲まれる「芝パークホテル」、夏目漱石や島崎藤村が逗留した文化財の宿「湯河原温泉 源泉 上野屋」、志賀直哉が名作『城の崎にて』を執筆した日本旅館の最高峰「城崎温泉 西村屋本館」を徹底特集。心静かに活字と温泉に浸る大人のソロリトリート。
        </p>
      </header>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 space-y-12">
        {/* リード文セクション */}
        <section className="bg-white rounded-3xl p-6 sm:p-8 shadow-sm border border-stone-200/80 space-y-4">
          <h2 className="text-lg sm:text-xl font-bold font-serif text-amber-950 border-b border-amber-100 pb-3">
            紙の温もりをめくる音と、ほのかに漂う檜と源泉の香り——言葉の森に迷い込み、自分を取り戻す「静寂の読書リトリート」
          </h2>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed">
            毎日のように届くメッセージ、SNSのタイムライン、仕事のメール……気付けば私たちは1日中画面をスクロールし、脳が絶え間ない情報過多に晒されています。「一度頭を空っぽにして、じっくり本の世界に浸りたい」「誰の連絡も気にせず、心に残る一冊と向き合いたい」。そんな現代人の願いを叶えるのが、「読書特化型ホテル」や「文豪たちが愛した歴史ある湯宿」です。
          </p>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed">
            壁一面を埋め尽くす本棚から直感で選んだ本をベッドに持ち込む贅沢。あるいは、百年以上の歴史を誇る木造建築の縁側で、庭の緑を眺めながら行間を味わう時間。そこには日常では決して味わえない、澄み渡るような静寂と知的好奇心を満たす至福の旅があります。今回は大人がひとり籠もるのにふさわしい、本と湯を愛する宿3選を厳選しました。
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
                src="https://img.travel.rakuten.co.jp/share/HOTEL/803/803.jpg"
                alt="芝パークホテル"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 800px"
              />
              <div className="absolute top-4 left-4 bg-black/60 backdrop-blur-md text-white text-xs font-bold px-3 py-1.5 rounded-full">
                第1選
              </div>
              <div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-md text-stone-800 text-xs font-semibold px-3 py-1 rounded-md shadow-xs">
                楽天総合評価 ★ 3.8 点（2393件）
              </div>
            </div>

            <div className="p-6 sm:p-8 space-y-6">
              <div>
                <p className="text-amber-800 font-bold text-xs sm:text-sm tracking-wide mb-1">
                  「美食と本」がテーマの現代の知の拠点！蔦屋書店が選書した約2,500冊の本に囲まれるライブラリーホテル
                </p>
                <h3 className="text-xl sm:text-2xl font-bold font-serif text-stone-900 leading-snug">
                  芝パークホテル —— 芝大門・増上寺近くの文化の隠れ家。館内随所に広がるブックラウンジと客室読書ステイ
                </h3>
              </div>

              <div className="space-y-3 bg-stone-50/80 p-4 sm:p-5 rounded-2xl border border-stone-100">
                <h4 className="text-xs font-bold uppercase tracking-wider text-stone-500">
                  注目のポイント＆魅力
                </h4>
                <div className="grid gap-3 sm:grid-cols-3">
                  
                  <div className="bg-white p-3.5 rounded-xl border border-stone-200/60 space-y-1">
                    <p className="text-xs font-bold text-amber-950">「人、街、歴史をつなぐライブラリーホテル」として全面リニューアル</p>
                    <p className="text-xs text-stone-600 leading-relaxed">銀座 蔦屋書店がディレクションした日本文化・アート・建築・文学など多彩なジャンルの書籍が館内を彩ります。</p>
                  </div>
                  
                  <div className="bg-white p-3.5 rounded-xl border border-stone-200/60 space-y-1">
                    <p className="text-xs font-bold text-amber-950">宿泊者専用の静かなラウンジや客室へ自由に本を持ち出せる贅沢</p>
                    <p className="text-xs text-stone-600 leading-relaxed">お気に入りの本を見つけたら、客室のソファやベッドで時間の許す限り読書に没頭。フリードリンクとともに寛げます。</p>
                  </div>
                  
                  <div className="bg-white p-3.5 rounded-xl border border-stone-200/60 space-y-1">
                    <p className="text-xs font-bold text-amber-950">東京タワーや増上寺が徒歩圏内！静寂な大門・芝エリアの落ち着いた環境</p>
                    <p className="text-xs text-stone-600 leading-relaxed">都心にありながら大通りから一本入った閑静な立地。夜風に当たりながらの東京タワー散歩も最高の気分転換です。</p>
                  </div>
                  
                </div>
              </div>

              <div className="space-y-2 text-xs sm:text-sm text-stone-600 bg-amber-50/50 p-4 rounded-xl border border-amber-100/60">
                <p className="font-semibold text-amber-900">📝 宿泊者の生の声・評判：</p>
                <p className="leading-relaxed text-stone-700">楽天トラベル評価3.80点。「ロビーや吹き抜けに並ぶ本が圧巻で、本好きにはたまらない空間でした」「静かな客室で一晩中読書に集中できて、とても贅沢な休日になりました」と読書家から熱い支持。</p>
              </div>

              <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-stone-100">
                <div className="text-xs text-stone-500 space-y-0.5 text-center sm:text-left">
                  <p>📍 東京都港区芝公園１丁目５－１０</p>
                  <p>🚆 JR・モノレール 浜松町駅北口徒歩8分、都営地下鉄三田線 御成門駅徒歩2分、都営浅草線・大江戸線 大門駅徒歩4分</p>
                </div>
                <div className="flex items-center gap-3 w-full sm:w-auto">
                  <a
                    href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fhb.afl.rakuten.co.jp%2Fhgc%2F54d2a438.4bc4abc2.54d2a439.aa1be583%2F%3Fpc%3Dhttps%253A%252F%252Fimg.travel.rakuten.co.jp%252Fimage%252Ftr%252Fapi%252Fkw%252FJBe8h%252F%253Ff_no%253D803"
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
                src="https://img.travel.rakuten.co.jp/share/HOTEL/31980/31980.jpg"
                alt="湯河原温泉　源泉　上野屋"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 800px"
              />
              <div className="absolute top-4 left-4 bg-black/60 backdrop-blur-md text-white text-xs font-bold px-3 py-1.5 rounded-full">
                第2選
              </div>
              <div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-md text-stone-800 text-xs font-semibold px-3 py-1 rounded-md shadow-xs">
                楽天総合評価 ★ 4.59 点（406件）
              </div>
            </div>

            <div className="p-6 sm:p-8 space-y-6">
              <div>
                <p className="text-amber-800 font-bold text-xs sm:text-sm tracking-wide mb-1">
                  夏目漱石や島崎藤村が筆を走らせた創業三百余年の老舗！木造四階建ての登録有形文化財と自家源泉掛け流し
                </p>
                <h3 className="text-xl sm:text-2xl font-bold font-serif text-stone-900 leading-snug">
                  湯河原温泉 源泉 上野屋 —— 万葉集にも詠まれた名湯。文豪の足跡が残る書斎風の空間と肌を潤す天然温泉
                </h3>
              </div>

              <div className="space-y-3 bg-stone-50/80 p-4 sm:p-5 rounded-2xl border border-stone-100">
                <h4 className="text-xs font-bold uppercase tracking-wider text-stone-500">
                  注目のポイント＆魅力
                </h4>
                <div className="grid gap-3 sm:grid-cols-3">
                  
                  <div className="bg-white p-3.5 rounded-xl border border-stone-200/60 space-y-1">
                    <p className="text-xs font-bold text-amber-950">島崎藤村が逗留し小説『夜明け前』の構想を練った歴史薫る木造建築</p>
                    <p className="text-xs text-stone-600 leading-relaxed">大正・昭和初期の職人技が光る格子窓や階段、渡り廊下。館内を歩くだけでタイムスリップしたような情緒に包まれます。</p>
                  </div>
                  
                  <div className="bg-white p-3.5 rounded-xl border border-stone-200/60 space-y-1">
                    <p className="text-xs font-bold text-amber-950">敷地内から自噴する良質な自家源泉を贅沢に掛け流す貸切風呂と大浴場</p>
                    <p className="text-xs text-stone-600 leading-relaxed">無色透明でまろやかな弱食塩泉。文豪たちも浸かったであろう名湯に体を沈めれば、凝り固まった思考が優しくほぐれます。</p>
                  </div>
                  
                  <div className="bg-white p-3.5 rounded-xl border border-stone-200/60 space-y-1">
                    <p className="text-xs font-bold text-amber-950">客室でのんびり味わう月替わりの相模湾海鮮会席</p>
                    <p className="text-xs text-stone-600 leading-relaxed">地魚のお造りや季節の炊き合わせ。文豪が逗留先で味わったような、素朴ながら滋味あふれる料理を部屋食で堪能できます。</p>
                  </div>
                  
                </div>
              </div>

              <div className="space-y-2 text-xs sm:text-sm text-stone-600 bg-amber-50/50 p-4 rounded-xl border border-amber-100/60">
                <p className="font-semibold text-amber-900">📝 宿泊者の生の声・評判：</p>
                <p className="leading-relaxed text-stone-700">楽天トラベル評価4.59点。「文化財の建物が素晴らしく、静かで本を読むのに最高の環境でした」「源泉掛け流しのお湯がとても優しく、一人旅を温かく受け入れてくれる名宿」と絶賛。</p>
              </div>

              <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-stone-100">
                <div className="text-xs text-stone-500 space-y-0.5 text-center sm:text-left">
                  <p>📍 神奈川県足柄下郡湯河原町宮上616</p>
                  <p>🚆 JR東海道本線　湯河原駅より②番のバスにて温泉場中央下車すぐ　//東名厚木ＩＣより小田原厚木道路・１３５号経由６０分</p>
                </div>
                <div className="flex items-center gap-3 w-full sm:w-auto">
                  <a
                    href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fhb.afl.rakuten.co.jp%2Fhgc%2F54d2a438.4bc4abc2.54d2a439.aa1be583%2F%3Fpc%3Dhttps%253A%252F%252Fimg.travel.rakuten.co.jp%252Fimage%252Ftr%252Fapi%252Fkw%252FJBe8h%252F%253Ff_no%253D31980"
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
                src="https://img.travel.rakuten.co.jp/share/HOTEL/75399/75399.jpg"
                alt="城崎温泉　西村屋本館"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 800px"
              />
              <div className="absolute top-4 left-4 bg-black/60 backdrop-blur-md text-white text-xs font-bold px-3 py-1.5 rounded-full">
                第3選
              </div>
              <div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-md text-stone-800 text-xs font-semibold px-3 py-1 rounded-md shadow-xs">
                楽天総合評価 ★ 5 点（338件）
              </div>
            </div>

            <div className="p-6 sm:p-8 space-y-6">
              <div>
                <p className="text-amber-800 font-bold text-xs sm:text-sm tracking-wide mb-1">
                  志賀直哉『城の崎にて』誕生の舞台！安土桃山以来の歴史を誇る国登録有形文化財・日本旅館の最高峰
                </p>
                <h3 className="text-xl sm:text-2xl font-bold font-serif text-stone-900 leading-snug">
                  城崎温泉 西村屋本館 —— 約160年の歴史を紡ぐ数奇屋造りの名建築。日本庭園を眺める静寂の客室と極上の松葉ガニ・但馬牛
                </h3>
              </div>

              <div className="space-y-3 bg-stone-50/80 p-4 sm:p-5 rounded-2xl border border-stone-100">
                <h4 className="text-xs font-bold uppercase tracking-wider text-stone-500">
                  注目のポイント＆魅力
                </h4>
                <div className="grid gap-3 sm:grid-cols-3">
                  
                  <div className="bg-white p-3.5 rounded-xl border border-stone-200/60 space-y-1">
                    <p className="text-xs font-bold text-amber-950">小説の神様・志賀直哉をはじめ多くの文豪・墨客が愛した至高の空間</p>
                    <p className="text-xs text-stone-600 leading-relaxed">平田雅道による伝統の数寄屋建築。手入れの行き届いた日本庭園に面した客室は、どこを切り取っても一幅の絵画のような美しさです。</p>
                  </div>
                  
                  <div className="bg-white p-3.5 rounded-xl border border-stone-200/60 space-y-1">
                    <p className="text-xs font-bold text-amber-950">外湯めぐりと館内の趣豊かな温泉大浴場で心身を清めるひととき</p>
                    <p className="text-xs text-stone-600 leading-relaxed">城崎温泉の七つの外湯パスが付くほか、館内の「吉の湯」「福の湯」など清潔で趣ある大浴場で静かに温泉を堪能できます。</p>
                  </div>
                  
                  <div className="bg-white p-3.5 rounded-xl border border-stone-200/60 space-y-1">
                    <p className="text-xs font-bold text-amber-950">但馬の自然が育んだ四季の味覚と伝統のおもてなし</p>
                    <p className="text-xs text-stone-600 leading-relaxed">冬の松葉ガニや但馬牛、日本海の旬魚。客室担当の洗練された所作とともにお部屋でいただく食事は一生の思い出になります。</p>
                  </div>
                  
                </div>
              </div>

              <div className="space-y-2 text-xs sm:text-sm text-stone-600 bg-amber-50/50 p-4 rounded-xl border border-amber-100/60">
                <p className="font-semibold text-amber-900">📝 宿泊者の生の声・評判：</p>
                <p className="leading-relaxed text-stone-700">楽天トラベル評価5.00点満点。「文豪たちが愛した理由が心から理解できる、日本のおもてなしの頂点」「一人で庭園を眺めながら読書をして過ごす時間は言葉にできないほど贅沢でした」と感嘆の声。</p>
              </div>

              <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-stone-100">
                <div className="text-xs text-stone-500 space-y-0.5 text-center sm:text-left">
                  <p>📍 兵庫県豊岡市城崎町湯島469</p>
                  <p>🚆 【車】北近畿豊岡自動車道　豊岡出石ICより約18分　【電車】城崎温泉駅より徒歩15分（旅館組合無料バス有）</p>
                </div>
                <div className="flex items-center gap-3 w-full sm:w-auto">
                  <a
                    href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fhb.afl.rakuten.co.jp%2Fhgc%2F54d2a438.4bc4abc2.54d2a439.aa1be583%2F%3Fpc%3Dhttps%253A%252F%252Fimg.travel.rakuten.co.jp%252Fimage%252Ftr%252Fapi%252Fkw%252FJBe8h%252F%253Ff_no%253D75399"
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
              デジタルデトックス＆読書泊を成功させる3つのステップ
            </h2>
          </div>

          <div className="grid gap-4 sm:grid-cols-3">
            
            <div className="bg-stone-800/80 p-4 rounded-2xl border border-stone-700/60 space-y-2">
              <h3 className="text-sm font-bold text-amber-300">
                1. チェックインと同時にスマホをフロントの金庫または引き出しへ
              </h3>
              <p className="text-xs text-stone-300 leading-relaxed">
                「急ぎの連絡が入るかも」という不安を断ち切るため、親しい人には事前に「週末はデジタルデトックス中」と伝えておくのがコツです。
              </p>
            </div>
            
            <div className="bg-stone-800/80 p-4 rounded-2xl border border-stone-700/60 space-y-2">
              <h3 className="text-sm font-bold text-amber-300">
                2. 読みたい本は「ジャンルの異なる3冊」を用意する
              </h3>
              <p className="text-xs text-stone-300 leading-relaxed">
                物語に没入できる長編小説、気軽に読めるエッセイや詩集、視野を広げる新書や教養本を各1冊ずつ。気分に合わせて読み分けると飽きずに楽しめます。
              </p>
            </div>
            
            <div className="bg-stone-800/80 p-4 rounded-2xl border border-stone-700/60 space-y-2">
              <h3 className="text-sm font-bold text-amber-300">
                3. 読書ノートと万年筆を持参して思考をアウトプット
              </h3>
              <p className="text-xs text-stone-300 leading-relaxed">
                心に刺さったフレーズや、本を読んでふと浮かんだ自分の本音をノートに手書きでメモ。手で書くことで思考が整理され、深い気づきが得られます。
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
                <span>一人で歴史ある高級旅館に泊まっても居心地は悪くありませんか？</span>
              </h3>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed pl-5">
                西村屋本館や上野屋などの老舗宿は、もともと文豪たちがひとりで長期滞在して執筆を行っていた歴史があるため、ひとり客への気配りと適度な距離感が非常に洗練されています。安心して宿泊できます。
              </p>
            </div>
            
            <div className="space-y-1.5 bg-stone-50 p-4 rounded-xl">
              <h3 className="text-sm font-bold text-stone-900 flex items-start gap-2">
                <span className="text-amber-800 font-extrabold">Q.</span>
                <span>館内Wi-Fiは使えますか？</span>
              </h3>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed pl-5">
                ご紹介した宿はいずれも現代的な高速Wi-Fiを完備しています。完全に通信を遮断するだけでなく、「調べ物だけネットを使い、SNSは見ない」といった柔軟な読書滞在が可能です。
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
