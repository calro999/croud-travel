import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: '【高松出張＆讃岐うどんひとり旅】高松港・サンポートビュー・天然温泉・名物うどん朝食！瀬戸内の風を感じる快適宿 厳選3選',
  description: '本州と四国を結ぶ海の玄関口・香川県高松市！「高松駅＆高松港直結・瀬戸内海の島々を見渡す最高峰シティホテル」を誇る「JRホテルクレメント高松」、全室ライブラリーラウンジ付きで上質な滞在を約束する「ロイヤルパークホテル高松」、瓦町駅近くで自家源泉天然温泉と夜鳴きそば完備の「さぬきの湯 ドーミーイン高松」を徹底比較。',
  keywords: '高松 出張 ホテル おすすめ,高松 一人旅 ホテル,JRホテルクレメント高松 宿泊,ロイヤルパークホテル高松 ラウンジ,ドーミーイン高松 温泉',
  openGraph: {
    title: '【高松出張＆讃岐うどんひとり旅】高松港・サンポートビュー・天然温泉・名物うどん朝食！瀬戸内の風を感じる快適宿 厳選3選',
    description: '本州と四国を結ぶ海の玄関口・香川県高松市！「高松駅＆高松港直結・瀬戸内海の島々を見渡す最高峰シティホテル」を誇る「JRホテルクレメント高松」、全室ライブラリーラウンジ付きで上質な滞在を約束する「ロイヤルパークホテル高松」、瓦町駅近くで自家源泉天然温泉と夜鳴きそば完備の「さぬきの湯 ドーミーイン高松」を徹底比較。',
    url: 'https://croud-travel.pages.dev/takamatsu-solo-business-udon-art-stay',
    siteName: 'トラベルガイド - クラウドトラベル',
    locale: 'ja_JP',
    type: 'article',
  },
};

export default function ArticlePage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: '【高松出張＆讃岐うどんひとり旅】高松港・サンポートビュー・天然温泉・名物うどん朝食！瀬戸内の風を感じる快適宿 厳選3選',
    description: '本州と四国を結ぶ海の玄関口・香川県高松市！「高松駅＆高松港直結・瀬戸内海の島々を見渡す最高峰シティホテル」を誇る「JRホテルクレメント高松」、全室ライブラリーラウンジ付きで上質な滞在を約束する「ロイヤルパークホテル高松」、瓦町駅近くで自家源泉天然温泉と夜鳴きそば完備の「さぬきの湯 ドーミーイン高松」を徹底比較。',
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
    mainEntityOfPage: 'https://croud-travel.pages.dev/takamatsu-solo-business-udon-art-stay',
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
        <span className="text-stone-700 font-medium">高松・出張＆讃岐うどん・瀬戸内アート特集</span>
        <span>/</span>
        <span className="text-stone-700 font-medium truncate">【高松出張＆讃岐うどんひとり旅】高松港・サンポートビュー・天然温泉・名物うどん朝食！瀬戸内の風を感じる快適宿 厳選3選</span>
      </nav>

      {/* ヒーローヘッダー */}
      <header className="max-w-4xl mx-auto px-4 sm:px-6 py-8 sm:py-12 space-y-4">
        <div className="inline-flex items-center gap-2 bg-amber-100/90 text-amber-950 text-xs font-semibold px-3.5 py-1.5 rounded-full border border-amber-300/80 shadow-xs">
          <span>✨</span>
          <span>高松・出張＆讃岐うどん・瀬戸内アート特集</span>
        </div>
        <h1 className="text-2xl sm:text-4xl font-extrabold font-serif text-stone-900 tracking-tight leading-snug">
          【高松出張＆讃岐うどんひとり旅】高松港・サンポートビュー・天然温泉・名物うどん朝食！瀬戸内の風を感じる快適宿 厳選3選
        </h1>
        <p className="text-stone-600 text-sm sm:text-base leading-relaxed pt-2">
          本州と四国を結ぶ海の玄関口・香川県高松市！「高松駅＆高松港直結・瀬戸内海の島々を見渡す最高峰シティホテル」を誇る「JRホテルクレメント高松」、全室ライブラリーラウンジ付きで上質な滞在を約束する「ロイヤルパークホテル高松」、瓦町駅近くで自家源泉天然温泉と夜鳴きそば完備の「さぬきの湯 ドーミーイン高松」を徹底比較。
        </p>
      </header>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 space-y-12">
        {/* リード文セクション */}
        <section className="bg-white rounded-3xl p-6 sm:p-8 shadow-sm border border-stone-200/80 space-y-4">
          <h2 className="text-lg sm:text-xl font-bold font-serif text-amber-950 border-b border-amber-100 pb-3">
            穏やかな瀬戸内海の島影と波のきらめき、茹でたての讃岐うどんの力強いコシ——四国の玄関口で仕事と癒やしを極める「高松スマートステイ」
          </h2>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed">
            瀬戸大橋を渡るJR快速マリンライナーで岡山から約55分。四国の経済・行政の中枢であり、四国各県へのハブとして多くのビジネスパーソンが訪れる香川県高松市。そして直島・豊島・小豆島といった世界的な現代アートの島々へのフェリーが発着するサンポート高松は、国内外のアートファンやひとり旅の旅行者で常に賑わっています。名物の讃岐うどん店巡りや、骨付鳥、オリーブ牛など、四国屈指の美食が揃っています。
          </p>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed">
            そんな高松での滞在を最高のものにしてくれるのが、駅・港直結のオーシャンビューホテルや、全室ラウンジアクセス付きの上質ホテル、そして街の真ん中で手足を伸ばせる天然温泉宿です。朝から名物うどんをツルッとすすり、夜は瀬戸内の地魚と讃岐の地酒「金陵」「川鶴」を味わう。今回は出張・ひとり旅に最適な高松の厳選3宿をご紹介します。
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
                src="https://img.travel.rakuten.co.jp/share/HOTEL/14862/14862.jpg"
                alt="ＪＲホテルクレメント高松"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 800px"
              />
              <div className="absolute top-4 left-4 bg-black/60 backdrop-blur-md text-white text-xs font-bold px-3 py-1.5 rounded-full">
                第1選
              </div>
              <div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-md text-stone-800 text-xs font-semibold px-3 py-1 rounded-md shadow-xs">
                楽天総合評価 ★ 4.48 点（4272件）
              </div>
            </div>

            <div className="p-6 sm:p-8 space-y-6">
              <div>
                <p className="text-amber-800 font-bold text-xs sm:text-sm tracking-wide mb-1">
                  JR高松駅・高松港フェリー乗り場すぐ！瀬戸内海と屋島を一望する四国屈指のランドマークホテル
                </p>
                <h3 className="text-xl sm:text-2xl font-bold font-serif text-stone-900 leading-snug">
                  JRホテルクレメント高松 —— 海と街が交差する特等席。オーシャンビュー客室と一流シェフが腕を振るう多彩なダイニング
                </h3>
              </div>

              <div className="space-y-3 bg-stone-50/80 p-4 sm:p-5 rounded-2xl border border-stone-100">
                <h4 className="text-xs font-bold uppercase tracking-wider text-stone-500">
                  注目のポイント＆魅力
                </h4>
                <div className="grid gap-3 sm:grid-cols-3">
                  
                  <div className="bg-white p-3.5 rounded-xl border border-stone-200/60 space-y-1">
                    <p className="text-xs font-bold text-amber-950">全客室から瀬戸内海の多島美または高松市街の夜景を一望</p>
                    <p className="text-xs text-stone-600 leading-relaxed">海を行き交うフェリーや夕暮れのサンセットを客室から満喫。ゆとりある広さで優雅なひとり時間を過ごせます。</p>
                  </div>
                  
                  <div className="bg-white p-3.5 rounded-xl border border-stone-200/60 space-y-1">
                    <p className="text-xs font-bold text-amber-950">JR高松駅徒歩1分・高松港フェリーターミナル徒歩1分の最強アクセス</p>
                    <p className="text-xs text-stone-600 leading-relaxed">新幹線接続のマリンライナーや各県特急に直結。直島や小豆島へのアイランドホッピングにも最高の拠点です。</p>
                  </div>
                  
                  <div className="bg-white p-3.5 rounded-xl border border-stone-200/60 space-y-1">
                    <p className="text-xs font-bold text-amber-950">讃岐うどんの実演コーナーや地元食材を取り入れた贅沢な朝食ビュッフェ</p>
                    <p className="text-xs text-stone-600 leading-relaxed">朝から茹でたての本場讃岐うどんを堪能。出張の一日を最高のエネルギーでスタートできます。</p>
                  </div>
                  
                </div>
              </div>

              <div className="space-y-2 text-xs sm:text-sm text-stone-600 bg-amber-50/50 p-4 rounded-xl border border-amber-100/60">
                <p className="font-semibold text-amber-900">📝 宿泊者の生の声・評判：</p>
                <p className="leading-relaxed text-stone-700">楽天トラベル評価4.48点。「駅からも港からもすぐで立地が完璧。お部屋からの瀬戸内海の景色が素晴らしかった」「スタッフの対応も一流で、高松出張の定宿です」と絶賛。</p>
              </div>

              <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-stone-100">
                <div className="text-xs text-stone-500 space-y-0.5 text-center sm:text-left">
                  <p>📍 香川県高松市浜ノ町1-1</p>
                  <p>🚆 ＪＲ高松駅徒歩１分　高松空港よりバスにて４５分　タクシーにて３０分　サンポートホール隣接　レクザムホール徒歩８分</p>
                </div>
                <div className="flex items-center gap-3 w-full sm:w-auto">
                  <a
                    href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fhb.afl.rakuten.co.jp%2Fhgc%2F54d2a438.4bc4abc2.54d2a439.aa1be583%2F%3Fpc%3Dhttps%253A%252F%252Fimg.travel.rakuten.co.jp%252Fimage%252Ftr%252Fapi%252Fkw%252FJBe8h%252F%253Ff_no%253D14862"
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
                src="https://img.travel.rakuten.co.jp/share/HOTEL/9486/9486.jpg"
                alt="ロイヤルパークホテル高松"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 800px"
              />
              <div className="absolute top-4 left-4 bg-black/60 backdrop-blur-md text-white text-xs font-bold px-3 py-1.5 rounded-full">
                第2選
              </div>
              <div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-md text-stone-800 text-xs font-semibold px-3 py-1 rounded-md shadow-xs">
                楽天総合評価 ★ 4.38 点（1949件）
              </div>
            </div>

            <div className="p-6 sm:p-8 space-y-6">
              <div>
                <p className="text-amber-800 font-bold text-xs sm:text-sm tracking-wide mb-1">
                  全客室の宿泊者が専用プレミアムラウンジを利用可能！アール・デコ調の気品あふれる大人の隠れ家ホテル
                </p>
                <h3 className="text-xl sm:text-2xl font-bold font-serif text-stone-900 leading-snug">
                  ロイヤルパークホテル高松 —— 瓦町エリアのシティリゾート。ライブラリーラウンジでのカクテルタイムと充実の朝食
                </h3>
              </div>

              <div className="space-y-3 bg-stone-50/80 p-4 sm:p-5 rounded-2xl border border-stone-100">
                <h4 className="text-xs font-bold uppercase tracking-wider text-stone-500">
                  注目のポイント＆魅力
                </h4>
                <div className="grid gap-3 sm:grid-cols-3">
                  
                  <div className="bg-white p-3.5 rounded-xl border border-stone-200/60 space-y-1">
                    <p className="text-xs font-bold text-amber-950">宿泊者全員が利用できる「ライブラリーラウンジ」（ティータイム・カクテルタイム）</p>
                    <p className="text-xs text-stone-600 leading-relaxed">夕方にはアルコールやオードブルを無料提供。静かなラウンジで贅沢な読書やPCワークが可能です。</p>
                  </div>
                  
                  <div className="bg-white p-3.5 rounded-xl border border-stone-200/60 space-y-1">
                    <p className="text-xs font-bold text-amber-950">アール・デコ様式を取り入れた重厚で上質な客室インテリア</p>
                    <p className="text-xs text-stone-600 leading-relaxed">シモンズ製特注ベッドと遮音性に優れた空間。出張の疲れを忘れて上質なプライベートタイムに浸れます。</p>
                  </div>
                  
                  <div className="bg-white p-3.5 rounded-xl border border-stone-200/60 space-y-1">
                    <p className="text-xs font-bold text-amber-950">高松最大の繁華街「瓦町・鍛冶屋町」至近で飲食やショッピングに最適</p>
                    <p className="text-xs text-stone-600 leading-relaxed">骨付鳥の人気店や地元居酒屋へ徒歩すぐ。夜遅くまで高松グルメを満喫しても歩いて安全に帰還できます。</p>
                  </div>
                  
                </div>
              </div>

              <div className="space-y-2 text-xs sm:text-sm text-stone-600 bg-amber-50/50 p-4 rounded-xl border border-amber-100/60">
                <p className="font-semibold text-amber-900">📝 宿泊者の生の声・評判：</p>
                <p className="leading-relaxed text-stone-700">楽天トラベル評価4.38点。「ラウンジでお酒をいただきながらゆっくり本を読めて最高でした」「お部屋の内装がとてもお洒落で、朝食の和定食も美味しかったです」と大好評。</p>
              </div>

              <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-stone-100">
                <div className="text-xs text-stone-500 space-y-0.5 text-center sm:text-left">
                  <p>📍 香川県高松市瓦町1-3-11</p>
                  <p>🚆 ＪＲ高松駅より車で７分、徒歩３０分/高松空港よりＪＲ高松駅行リムジンバス瓦町下車　徒歩５分</p>
                </div>
                <div className="flex items-center gap-3 w-full sm:w-auto">
                  <a
                    href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fhb.afl.rakuten.co.jp%2Fhgc%2F54d2a438.4bc4abc2.54d2a439.aa1be583%2F%3Fpc%3Dhttps%253A%252F%252Fimg.travel.rakuten.co.jp%252Fimage%252Ftr%252Fapi%252Fkw%252FJBe8h%252F%253Ff_no%253D9486"
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
                src="https://img.travel.rakuten.co.jp/share/HOTEL/70853/70853.jpg"
                alt="さぬきの湯　ドーミーイン高松（ドーミーイン・御宿野乃　ホテルズグループ）"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 800px"
              />
              <div className="absolute top-4 left-4 bg-black/60 backdrop-blur-md text-white text-xs font-bold px-3 py-1.5 rounded-full">
                第3選
              </div>
              <div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-md text-stone-800 text-xs font-semibold px-3 py-1 rounded-md shadow-xs">
                楽天総合評価 ★ 4.39 点（3577件）
              </div>
            </div>

            <div className="p-6 sm:p-8 space-y-6">
              <div>
                <p className="text-amber-800 font-bold text-xs sm:text-sm tracking-wide mb-1">
                  ことでん瓦町駅徒歩約5分！自家源泉の天然温泉大浴場「さぬきの湯」＆高温サウナ・夜鳴きそば完備
                </p>
                <h3 className="text-xl sm:text-2xl font-bold font-serif text-stone-900 leading-snug">
                  さぬきの湯 ドーミーイン高松 —— 繁華街至近の温泉ビジホ。手足を伸ばせる大浴場と讃岐うどん付き朝食バイキング
                </h3>
              </div>

              <div className="space-y-3 bg-stone-50/80 p-4 sm:p-5 rounded-2xl border border-stone-100">
                <h4 className="text-xs font-bold uppercase tracking-wider text-stone-500">
                  注目のポイント＆魅力
                </h4>
                <div className="grid gap-3 sm:grid-cols-3">
                  
                  <div className="bg-white p-3.5 rounded-xl border border-stone-200/60 space-y-1">
                    <p className="text-xs font-bold text-amber-950">最上階に位置する自家源泉の天然温泉大浴場「さぬきの湯」＆水風呂付きサウナ</p>
                    <p className="text-xs text-stone-600 leading-relaxed">ナトリウム塩化物泉の温まりの湯。サウナでしっかりととのって出張の疲れを洗い流せます。</p>
                  </div>
                  
                  <div className="bg-white p-3.5 rounded-xl border border-stone-200/60 space-y-1">
                    <p className="text-xs font-bold text-amber-950">名物「夜鳴きそば」や湯上がりアイス、乳酸菌飲料の無料サービス</p>
                    <p className="text-xs text-stone-600 leading-relaxed">骨付鳥と地酒を楽しんだ後のシメに最適。一人旅でも温かく迎えてくれる定番の安心感です。</p>
                  </div>
                  
                  <div className="bg-white p-3.5 rounded-xl border border-stone-200/60 space-y-1">
                    <p className="text-xs font-bold text-amber-950">セルフで茹でてトッピングを楽しめる「讃岐うどん」や郷土小鉢朝食</p>
                    <p className="text-xs text-stone-600 leading-relaxed">朝から本場のうどん出汁の香りに包まれる至福。活力をチャージして出発できます。</p>
                  </div>
                  
                </div>
              </div>

              <div className="space-y-2 text-xs sm:text-sm text-stone-600 bg-amber-50/50 p-4 rounded-xl border border-amber-100/60">
                <p className="font-semibold text-amber-900">📝 宿泊者の生の声・評判：</p>
                <p className="leading-relaxed text-stone-700">楽天トラベル評価4.39点。「繁華街に近くて温泉とサウナに入れるのがありがたい」「朝食で自分で作る讃岐うどんが美味しく、夜鳴きそばも安定の味でした」と好評。</p>
              </div>

              <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-stone-100">
                <div className="text-xs text-stone-500 space-y-0.5 text-center sm:text-left">
                  <p>📍 香川県高松市瓦町1-10-10</p>
                  <p>🚆 ■ＪＲ高松駅より車7分／琴電「瓦町」より徒歩５分■空港リムジンバス「県庁通り・中央公園前」下車、徒歩５分</p>
                </div>
                <div className="flex items-center gap-3 w-full sm:w-auto">
                  <a
                    href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fhb.afl.rakuten.co.jp%2Fhgc%2F54d2a438.4bc4abc2.54d2a439.aa1be583%2F%3Fpc%3Dhttps%253A%252F%252Fimg.travel.rakuten.co.jp%252Fimage%252Ftr%252Fapi%252Fkw%252FJBe8h%252F%253Ff_no%253D70853"
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
              高松の「讃岐うどん＆骨付鳥」を一人旅で制覇する攻略法
            </h2>
          </div>

          <div className="grid gap-4 sm:grid-cols-3">
            
            <div className="bg-stone-800/80 p-4 rounded-2xl border border-stone-700/60 space-y-2">
              <h3 className="text-sm font-bold text-amber-300">
                1. 朝うどん（早朝6:00〜8:00オープンの名店へ）
              </h3>
              <p className="text-xs text-stone-300 leading-relaxed">
                「さか枝」や「手打十段 うどんバカ一代」など朝から営業する名店へ。釜バターうどんやかけうどんに揚げたてちくわ天を乗せるのが王道です。
              </p>
            </div>
            
            <div className="bg-stone-800/80 p-4 rounded-2xl border border-stone-700/60 space-y-2">
              <h3 className="text-sm font-bold text-amber-300">
                2. 国の特別名勝「栗林公園（りつりんこうえん）」の一歩一景散歩
              </h3>
              <p className="text-xs text-stone-300 leading-relaxed">
                ミシュラン・グリーンガイドで三つ星を獲得した名園。掬月亭（きくげつてい）で南湖を眺めながらいただく抹茶と和菓子は至高のひととき。
              </p>
            </div>
            
            <div className="bg-stone-800/80 p-4 rounded-2xl border border-stone-700/60 space-y-2">
              <h3 className="text-sm font-bold text-amber-300">
                3. 夜は香川の二大ソウルフード「骨付鳥（おや・ひな）」とビール
              </h3>
              <p className="text-xs text-stone-300 leading-relaxed">
                スパイシーなニンニクと胡椒が効いた骨付鳥。柔らかくジューシーな「ひな」か、噛むほどに旨味が出る「おや」か、お好みで。
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
                <span>高松空港から高松駅や市内ホテルへのアクセスはどうですか？</span>
              </h3>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed pl-5">
                高松空港から市内行きリムジンバスが飛行機の発着に合わせて運行しており、JR高松駅や瓦町駅まで約35〜45分で直行できます。
              </p>
            </div>
            
            <div className="space-y-1.5 bg-stone-50 p-4 rounded-xl">
              <h3 className="text-sm font-bold text-stone-900 flex items-start gap-2">
                <span className="text-amber-800 font-extrabold">Q.</span>
                <span>直島や小豆島へのフェリーは予約なしでも乗れますか？</span>
              </h3>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed pl-5">
                旅客のみ（車なしの一人旅）であれば、フェリーは予約不要で当日高松港フェリーターミナルで切符を購入してそのまま乗船できます。
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
