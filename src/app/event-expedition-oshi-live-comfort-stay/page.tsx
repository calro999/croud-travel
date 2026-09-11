import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: '【ライブ・舞台遠征泊】会場徒歩すぐ＆大画面ミラーリング・推し活応援！遠征民のための快適拠点ホテル 厳選3選',
  description: '東京ドーム、Zepp Shinjuku、ぴあアリーナMM・Kアリーナ横浜などでのライブや観劇・フェス遠征を最高の思い出に！ドーム目の前でうちわも入る限定プランがある「東京ドームホテル」、歌舞伎町タワー直結で大画面スピーカー搭載の「HOTEL GROOVE SHINJUKU」、みなとみらいのライブ会場へ徒歩圏の「横浜東急REIホテル」を徹底特集。',
  keywords: '東京ドーム 遠征 ホテル,推し活 ホテル 東京,ライブ遠征 ホテル おすすめ,ぴあアリーナ ホテル,HOTEL GROOVE SHINJUKU 遠征',
  openGraph: {
    title: '【ライブ・舞台遠征泊】会場徒歩すぐ＆大画面ミラーリング・推し活応援！遠征民のための快適拠点ホテル 厳選3選',
    description: '東京ドーム、Zepp Shinjuku、ぴあアリーナMM・Kアリーナ横浜などでのライブや観劇・フェス遠征を最高の思い出に！ドーム目の前でうちわも入る限定プランがある「東京ドームホテル」、歌舞伎町タワー直結で大画面スピーカー搭載の「HOTEL GROOVE SHINJUKU」、みなとみらいのライブ会場へ徒歩圏の「横浜東急REIホテル」を徹底特集。',
    url: 'https://croud-travel.pages.dev/event-expedition-oshi-live-comfort-stay',
    siteName: 'トラベルガイド - クラウドトラベル',
    locale: 'ja_JP',
    type: 'article',
  },
};

export default function ArticlePage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: '【ライブ・舞台遠征泊】会場徒歩すぐ＆大画面ミラーリング・推し活応援！遠征民のための快適拠点ホテル 厳選3選',
    description: '東京ドーム、Zepp Shinjuku、ぴあアリーナMM・Kアリーナ横浜などでのライブや観劇・フェス遠征を最高の思い出に！ドーム目の前でうちわも入る限定プランがある「東京ドームホテル」、歌舞伎町タワー直結で大画面スピーカー搭載の「HOTEL GROOVE SHINJUKU」、みなとみらいのライブ会場へ徒歩圏の「横浜東急REIホテル」を徹底特集。',
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
    mainEntityOfPage: 'https://croud-travel.pages.dev/event-expedition-oshi-live-comfort-stay',
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
        <span className="text-stone-700 font-medium">ライブ遠征・推し活特化特集</span>
        <span>/</span>
        <span className="text-stone-700 font-medium truncate">【ライブ・舞台遠征泊】会場徒歩すぐ＆大画面ミラーリング・推し活応援！遠征民のための快適拠点ホテル 厳選3選</span>
      </nav>

      {/* ヒーローヘッダー */}
      <header className="max-w-4xl mx-auto px-4 sm:px-6 py-8 sm:py-12 space-y-4">
        <div className="inline-flex items-center gap-2 bg-amber-100/90 text-amber-950 text-xs font-semibold px-3.5 py-1.5 rounded-full border border-amber-300/80 shadow-xs">
          <span>✨</span>
          <span>ライブ遠征・推し活特化特集</span>
        </div>
        <h1 className="text-2xl sm:text-4xl font-extrabold font-serif text-stone-900 tracking-tight leading-snug">
          【ライブ・舞台遠征泊】会場徒歩すぐ＆大画面ミラーリング・推し活応援！遠征民のための快適拠点ホテル 厳選3選
        </h1>
        <p className="text-stone-600 text-sm sm:text-base leading-relaxed pt-2">
          東京ドーム、Zepp Shinjuku、ぴあアリーナMM・Kアリーナ横浜などでのライブや観劇・フェス遠征を最高の思い出に！ドーム目の前でうちわも入る限定プランがある「東京ドームホテル」、歌舞伎町タワー直結で大画面スピーカー搭載の「HOTEL GROOVE SHINJUKU」、みなとみらいのライブ会場へ徒歩圏の「横浜東急REIホテル」を徹底特集。
        </p>
      </header>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 space-y-12">
        {/* リード文セクション */}
        <section className="bg-white rounded-3xl p-6 sm:p-8 shadow-sm border border-stone-200/80 space-y-4">
          <h2 className="text-lg sm:text-xl font-bold font-serif text-amber-950 border-b border-amber-100 pb-3">
            終演後の規制退場でも徒歩で直帰！大画面でライブの余韻に浸る——遠征の疲労をゼロにする「会場直結＆推し活特化ステイ」
          </h2>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed">
            待ちに待った推しのライブ、大好きな舞台の千秋楽。当落発表から準備を重ねて迎える遠征の日は、人生で最も胸が高鳴る特別な瞬間です。しかし、熱狂のライブが終わった後に待っているのが「地獄の混雑」。何万人もの観客が一斉に最寄り駅へ押し寄せ、入場規制で電車に乗るまでに1時間以上、満員電車に揺られてヘトヘトになってホテルに着く頃には日付が変わっている……そんな経験をした方も多いのではないでしょうか。
          </p>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed">
            遠征を120％楽しむための最大の秘訣は、「会場から徒歩圏内、または駅直結のホテルを押さえること」。終演後すぐにホテルへ戻り、グッズを広げて戦利品を並べ、客室の大画面テレビで推しの映像を流しながら仲間やSNSで語り合う。翌朝もチェックアウトまでゆったり過ごせる拠点を確保すれば、遠征は単なる移動から「最高の推し活ホリデー」へと変わります。今回は主要ライブ会場へのアクセスと推し活快適度を極めた3宿をご紹介します。
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
                src="https://img.travel.rakuten.co.jp/share/HOTEL/4805/4805.jpg"
                alt="東京ドームホテル"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 800px"
              />
              <div className="absolute top-4 left-4 bg-black/60 backdrop-blur-md text-white text-xs font-bold px-3 py-1.5 rounded-full">
                第1選
              </div>
              <div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-md text-stone-800 text-xs font-semibold px-3 py-1 rounded-md shadow-xs">
                楽天総合評価 ★ 4.54 点（14312件）
              </div>
            </div>

            <div className="p-6 sm:p-8 space-y-6">
              <div>
                <p className="text-amber-800 font-bold text-xs sm:text-sm tracking-wide mb-1">
                  東京ドームの目の前！終演後わずか徒歩2分で客室へ直行できる遠征民の憧れランドマークホテル
                </p>
                <h3 className="text-xl sm:text-2xl font-bold font-serif text-stone-900 leading-snug">
                  東京ドームホテル —— 水道橋・後楽園駅すぐ。ドームビュー客室や推し活応援プランが充実した究極の遠征拠点
                </h3>
              </div>

              <div className="space-y-3 bg-stone-50/80 p-4 sm:p-5 rounded-2xl border border-stone-100">
                <h4 className="text-xs font-bold uppercase tracking-wider text-stone-500">
                  注目のポイント＆魅力
                </h4>
                <div className="grid gap-3 sm:grid-cols-3">
                  
                  <div className="bg-white p-3.5 rounded-xl border border-stone-200/60 space-y-1">
                    <p className="text-xs font-bold text-amber-950">東京ドーム・後楽園ホール・シアターGロッソがすべて目の前の圧倒的立地</p>
                    <p className="text-xs text-stone-600 leading-relaxed">開場直前まで部屋でメイクやグッズ準備が可能。終演後は駅の大混雑を横目に、徒歩2〜3分で快適な客室へ帰還できます。</p>
                  </div>
                  
                  <div className="bg-white p-3.5 rounded-xl border border-stone-200/60 space-y-1">
                    <p className="text-xs font-bold text-amber-950">東京ドーム側を指定できる宿泊プランや高層階からの壮大な夜景</p>
                    <p className="text-xs text-stone-600 leading-relaxed">客室の窓からライトアップされたドームや観覧車を一望。ライブの余韻を眼下に眺めながら語り明かす至福の夜を過ごせます。</p>
                  </div>
                  
                  <div className="bg-white p-3.5 rounded-xl border border-stone-200/60 space-y-1">
                    <p className="text-xs font-bold text-amber-950">うちわやペンライトを広げられる広々としたデスクとベッドルーム</p>
                    <p className="text-xs text-stone-600 leading-relaxed">遠征の荷物が多くてもゆとりある広さ。加湿空気清浄機や姿見も完備され、ライブ参戦前の身だしなみチェックも完璧です。</p>
                  </div>
                  
                </div>
              </div>

              <div className="space-y-2 text-xs sm:text-sm text-stone-600 bg-amber-50/50 p-4 rounded-xl border border-amber-100/60">
                <p className="font-semibold text-amber-900">📝 宿泊者の生の声・評判：</p>
                <p className="leading-relaxed text-stone-700">楽天トラベル評価4.54点。「ドーム公演参戦で利用しました。規制退場の後すぐに部屋に戻れてベッドにダイブできる幸せは格別！」「ドームが見える部屋でライブの余韻が冷めず最高でした」と遠征組から圧倒的支持。</p>
              </div>

              <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-stone-100">
                <div className="text-xs text-stone-500 space-y-0.5 text-center sm:text-left">
                  <p>📍 東京都文京区後楽1-3-61</p>
                  <p>🚆 JR水道橋駅＆地下鉄4線の駅から徒歩1～6分</p>
                </div>
                <div className="flex items-center gap-3 w-full sm:w-auto">
                  <a
                    href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fhb.afl.rakuten.co.jp%2Fhgc%2F54d2a438.4bc4abc2.54d2a439.aa1be583%2F%3Fpc%3Dhttps%253A%252F%252Fimg.travel.rakuten.co.jp%252Fimage%252Ftr%252Fapi%252Fkw%252FJBe8h%252F%253Ff_no%253D4805"
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
                src="https://img.travel.rakuten.co.jp/share/HOTEL/184501/184501.jpg"
                alt="ＨＯＴＥＬ　ＧＲＯＯＶＥ　ＳＨＩＮＪＵＫＵ，　Ａ　ＰＡＲＫＲＯＹＡＬ　Ｈｏｔｅｌ"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 800px"
              />
              <div className="absolute top-4 left-4 bg-black/60 backdrop-blur-md text-white text-xs font-bold px-3 py-1.5 rounded-full">
                第2選
              </div>
              <div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-md text-stone-800 text-xs font-semibold px-3 py-1 rounded-md shadow-xs">
                楽天総合評価 ★ 3.67 点（23件）
              </div>
            </div>

            <div className="p-6 sm:p-8 space-y-6">
              <div>
                <p className="text-amber-800 font-bold text-xs sm:text-sm tracking-wide mb-1">
                  東急歌舞伎町タワー高層階！Zepp Shinjuku直結＆大画面テレビと高音質スピーカーを完備したエンタメホテル
                </p>
                <h3 className="text-xl sm:text-2xl font-bold font-serif text-stone-900 leading-snug">
                  HOTEL GROOVE SHINJUKU, A PARKROYAL Hotel —— 新宿駅・西武新宿駅至近。アートと音楽が響くスタイリッシュ空間
                </h3>
              </div>

              <div className="space-y-3 bg-stone-50/80 p-4 sm:p-5 rounded-2xl border border-stone-100">
                <h4 className="text-xs font-bold uppercase tracking-wider text-stone-500">
                  注目のポイント＆魅力
                </h4>
                <div className="grid gap-3 sm:grid-cols-3">
                  
                  <div className="bg-white p-3.5 rounded-xl border border-stone-200/60 space-y-1">
                    <p className="text-xs font-bold text-amber-950">タワー地下の「Zepp Shinjuku」や映画館・劇場「THEATER MILANO-Za」と直結</p>
                    <p className="text-xs text-stone-600 leading-relaxed">エレベーター1本でライブ会場へ直行可能。終演後もエレベーターに乗るだけでお部屋に到着する夢のようなアクセス環境です。</p>
                  </div>
                  
                  <div className="bg-white p-3.5 rounded-xl border border-stone-200/60 space-y-1">
                    <p className="text-xs font-bold text-amber-950">大型液晶テレビ＆スマホミラーリング対応で客室がプライベートシアターに</p>
                    <p className="text-xs text-stone-600 leading-relaxed">YouTubeや推しのライブ映像、配信アーカイブを大画面・高音質スピーカーで再生。仲間と一緒にリアルタイム鑑賞会を楽しめます。</p>
                  </div>
                  
                  <div className="bg-white p-3.5 rounded-xl border border-stone-200/60 space-y-1">
                    <p className="text-xs font-bold text-amber-950">歌舞伎町のネオンと新宿の摩天楼を見渡すミッドセンチュリー調の客室</p>
                    <p className="text-xs text-stone-600 leading-relaxed">レコードプレーヤーが配された客室や、レコードバーを思わせるラウンジ。都会のエネルギーを感じる非日常ステイが叶います。</p>
                  </div>
                  
                </div>
              </div>

              <div className="space-y-2 text-xs sm:text-sm text-stone-600 bg-amber-50/50 p-4 rounded-xl border border-amber-100/60">
                <p className="font-semibold text-amber-900">📝 宿泊者の生の声・評判：</p>
                <p className="leading-relaxed text-stone-700">楽天トラベル評価3.67点、洗練された設備。「Zeppでのライブ後にすぐ部屋へ戻れて本当に助かった」「テレビにスマホを繋げてYouTubeを大画面で見られるのが最高に推し活向き」とライブファンから大好評。</p>
              </div>

              <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-stone-100">
                <div className="text-xs text-stone-500 space-y-0.5 text-center sm:text-left">
                  <p>📍 東京都新宿区歌舞伎町一丁目２９番１</p>
                  <p>🚆 JR新宿駅から徒歩7分,羽田空港、成田空港からリムジンバス運行(約85分、約125分）</p>
                </div>
                <div className="flex items-center gap-3 w-full sm:w-auto">
                  <a
                    href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fhb.afl.rakuten.co.jp%2Fhgc%2F54d2a438.4bc4abc2.54d2a439.aa1be583%2F%3Fpc%3Dhttps%253A%252F%252Fimg.travel.rakuten.co.jp%252Fimage%252Ftr%252Fapi%252Fkw%252FJBe8h%252F%253Ff_no%253D184501"
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
                src="https://img.travel.rakuten.co.jp/share/HOTEL/178443/178443.jpg"
                alt="横浜東急ＲＥＩホテル"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 800px"
              />
              <div className="absolute top-4 left-4 bg-black/60 backdrop-blur-md text-white text-xs font-bold px-3 py-1.5 rounded-full">
                第3選
              </div>
              <div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-md text-stone-800 text-xs font-semibold px-3 py-1 rounded-md shadow-xs">
                楽天総合評価 ★ 4.4 点（783件）
              </div>
            </div>

            <div className="p-6 sm:p-8 space-y-6">
              <div>
                <p className="text-amber-800 font-bold text-xs sm:text-sm tracking-wide mb-1">
                  ぴあアリーナMM・Kアリーナ横浜・KT Zepp Yokohamaへ徒歩圏内！大浴場付きのみなとみらい遠征拠点
                </p>
                <h3 className="text-xl sm:text-2xl font-bold font-serif text-stone-900 leading-snug">
                  横浜東急REIホテル —— 新高島駅徒歩2分・横浜駅徒歩10分。大浴場とスタイリッシュな空間でライブの疲れを完全リセット
                </h3>
              </div>

              <div className="space-y-3 bg-stone-50/80 p-4 sm:p-5 rounded-2xl border border-stone-100">
                <h4 className="text-xs font-bold uppercase tracking-wider text-stone-500">
                  注目のポイント＆魅力
                </h4>
                <div className="grid gap-3 sm:grid-cols-3">
                  
                  <div className="bg-white p-3.5 rounded-xl border border-stone-200/60 space-y-1">
                    <p className="text-xs font-bold text-amber-950">みなとみらいエリアの主要アリーナ・ホール群へ抜群の徒歩アクセス</p>
                    <p className="text-xs text-stone-600 leading-relaxed">ぴあアリーナMMへ徒歩約7〜8分、Kアリーナ横浜へも徒歩圏内。ライブ後の大混雑に巻き込まれずに歩いて帰れます。</p>
                  </div>
                  
                  <div className="bg-white p-3.5 rounded-xl border border-stone-200/60 space-y-1">
                    <p className="text-xs font-bold text-amber-950">足を伸ばしてリフレッシュできる宿泊者専用の清潔な大浴場を完備</p>
                    <p className="text-xs text-stone-600 leading-relaxed">スタンディングライブや長時間の観劇でパンパンになった脚や肩を、広い湯船でしっかり温めて癒やすことができます。</p>
                  </div>
                  
                  <div className="bg-white p-3.5 rounded-xl border border-stone-200/60 space-y-1">
                    <p className="text-xs font-bold text-amber-950">月をイメージした印象的なロビーとミラーリング対応のスマートTV客室</p>
                    <p className="text-xs text-stone-600 leading-relaxed">洗練されたコワーキングスペースやビストロチャイナのカジュアルダイニング。遠征女子会やソロ遠征にも安心のセキュリティです。</p>
                  </div>
                  
                </div>
              </div>

              <div className="space-y-2 text-xs sm:text-sm text-stone-600 bg-amber-50/50 p-4 rounded-xl border border-amber-100/60">
                <p className="font-semibold text-amber-900">📝 宿泊者の生の声・評判：</p>
                <p className="leading-relaxed text-stone-700">楽天トラベル評価4.40点。「ぴあアリーナのライブ後に歩いてすぐ戻れて、大浴場でお風呂に入れたのが最高でした」「横浜駅からも歩けて綺麗でコスパも抜群」とアリーナ遠征民のリピーター多数。</p>
              </div>

              <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-stone-100">
                <div className="text-xs text-stone-500 space-y-0.5 text-center sm:text-left">
                  <p>📍 神奈川県横浜市西区みなとみらい4-3-6</p>
                  <p>🚆 新高島駅1番・2番出口より徒歩にて約２分</p>
                </div>
                <div className="flex items-center gap-3 w-full sm:w-auto">
                  <a
                    href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fhb.afl.rakuten.co.jp%2Fhgc%2F54d2a438.4bc4abc2.54d2a439.aa1be583%2F%3Fpc%3Dhttps%253A%252F%252Fimg.travel.rakuten.co.jp%252Fimage%252Ftr%252Fapi%252Fkw%252FJBe8h%252F%253Ff_no%253D178443"
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
              ライブ遠征を大成功させるための「スマート遠征パッキング術」
            </h2>
          </div>

          <div className="grid gap-4 sm:grid-cols-3">
            
            <div className="bg-stone-800/80 p-4 rounded-2xl border border-stone-700/60 space-y-2">
              <h3 className="text-sm font-bold text-amber-300">
                1. モバイルバッテリーと長めの充電ケーブルの2本持ち
              </h3>
              <p className="text-xs text-stone-300 leading-relaxed">
                電子チケット表示、物販待機、会場での写真撮影でスマホのバッテリー消費は想像以上。20000mAhクラスのバッテリーと急速充電器は必須です。
              </p>
            </div>
            
            <div className="bg-stone-800/80 p-4 rounded-2xl border border-stone-700/60 space-y-2">
              <h3 className="text-sm font-bold text-amber-300">
                2. グッズ保護用ケース・硬質ケース・予備トートバッグ
              </h3>
              <p className="text-xs text-stone-300 leading-relaxed">
                購入したペンライトやパンフレット、生写真などを折らずに持ち帰るためのA4ファイルやトートバッグ。客室で戦利品を並べて撮影する際にも役立ちます。
              </p>
            </div>
            
            <div className="bg-stone-800/80 p-4 rounded-2xl border border-stone-700/60 space-y-2">
              <h3 className="text-sm font-bold text-amber-300">
                3. 休息シート（休足時間等）と入浴剤
              </h3>
              <p className="text-xs text-stone-300 leading-relaxed">
                終演後のお風呂上がりにふくらはぎや足裏に貼って就寝。翌日の観光や連続参戦時も足取りが驚くほど軽くなります。
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
                <span>チェックイン前やチェックアウト後にスーツケース等の大きな荷物を預かってもらえますか？</span>
              </h3>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed pl-5">
                はい、ご紹介した3ホテルはいずれも宿泊日当日のチェックイン前・チェックアウト後の荷物預かり（クロークまたは専用ロッカー）に無料で対応しています。身軽に物販や会場へ向かうことができます。
              </p>
            </div>
            
            <div className="space-y-1.5 bg-stone-50 p-4 rounded-xl">
              <h3 className="text-sm font-bold text-stone-900 flex items-start gap-2">
                <span className="text-amber-800 font-extrabold">Q.</span>
                <span>友人同士で2名以上で泊まる場合も対応可能ですか？</span>
              </h3>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed pl-5">
                もちろん可能です。ツインルームやコネクティングルーム、エキストラベッド対応プランなど多彩に用意されており、遠征仲間とのシェア滞在にも最適です。
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
