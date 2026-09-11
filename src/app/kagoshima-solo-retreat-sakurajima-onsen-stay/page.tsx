import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: '【鹿児島ひとり旅＆出張】錦江湾に浮かぶ桜島一望・展望露天温泉・黒豚しゃぶしゃぶ！南国の雄大な自然に抱かれる極上宿 厳選3選',
  description: '九州新幹線の終着駅・鹿児島！「標高108mの城山高台から桜島と錦江湾を見下ろす絶景露天温泉」を誇る最高峰「SHIROYAMA HOTEL kagoshima（城山ホテル鹿児島）」、鹿児島中央駅直結で桜島ビュー客室を持つ「ソラリア西鉄ホテル鹿児島」、天文館の真ん中で天然温泉と黒豚朝食が嬉しい「天然温泉 霧桜の湯 ドーミーイン鹿児島」を徹底特集。',
  keywords: '鹿児島 一人旅 ホテル おすすめ,鹿児島 出張 ホテル 温泉,城山ホテル鹿児島 温泉,ソラリア西鉄ホテル鹿児島 宿泊,鹿児島 桜島ビュー ホテル',
  openGraph: {
    title: '【鹿児島ひとり旅＆出張】錦江湾に浮かぶ桜島一望・展望露天温泉・黒豚しゃぶしゃぶ！南国の雄大な自然に抱かれる極上宿 厳選3選',
    description: '九州新幹線の終着駅・鹿児島！「標高108mの城山高台から桜島と錦江湾を見下ろす絶景露天温泉」を誇る最高峰「SHIROYAMA HOTEL kagoshima（城山ホテル鹿児島）」、鹿児島中央駅直結で桜島ビュー客室を持つ「ソラリア西鉄ホテル鹿児島」、天文館の真ん中で天然温泉と黒豚朝食が嬉しい「天然温泉 霧桜の湯 ドーミーイン鹿児島」を徹底特集。',
    url: 'https://croud-travel.pages.dev/kagoshima-solo-retreat-sakurajima-onsen-stay',
    siteName: 'トラベルガイド - クラウドトラベル',
    locale: 'ja_JP',
    type: 'article',
  },
};

export default function ArticlePage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: '【鹿児島ひとり旅＆出張】錦江湾に浮かぶ桜島一望・展望露天温泉・黒豚しゃぶしゃぶ！南国の雄大な自然に抱かれる極上宿 厳選3選',
    description: '九州新幹線の終着駅・鹿児島！「標高108mの城山高台から桜島と錦江湾を見下ろす絶景露天温泉」を誇る最高峰「SHIROYAMA HOTEL kagoshima（城山ホテル鹿児島）」、鹿児島中央駅直結で桜島ビュー客室を持つ「ソラリア西鉄ホテル鹿児島」、天文館の真ん中で天然温泉と黒豚朝食が嬉しい「天然温泉 霧桜の湯 ドーミーイン鹿児島」を徹底特集。',
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
    datePublished: '2026-09-11T02:50:00+09:00',
    dateModified: '2026-09-11T02:50:00+09:00',
    mainEntityOfPage: 'https://croud-travel.pages.dev/kagoshima-solo-retreat-sakurajima-onsen-stay',
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
        <span className="text-stone-700 font-medium">鹿児島・桜島ビュー＆展望温泉特集</span>
        <span>/</span>
        <span className="text-stone-700 font-medium truncate">【鹿児島ひとり旅＆出張】錦江湾に浮かぶ桜島一望・展望露天温泉・黒豚しゃぶしゃぶ！南国の雄大な自然に抱かれる極上宿 厳選3選</span>
      </nav>

      {/* ヒーローヘッダー */}
      <header className="max-w-4xl mx-auto px-4 sm:px-6 py-8 sm:py-12 space-y-4">
        <div className="inline-flex items-center gap-2 bg-amber-100/90 text-amber-950 text-xs font-semibold px-3.5 py-1.5 rounded-full border border-amber-300/80 shadow-xs">
          <span>✨</span>
          <span>鹿児島・桜島ビュー＆展望温泉特集</span>
        </div>
        <h1 className="text-2xl sm:text-4xl font-extrabold font-serif text-stone-900 tracking-tight leading-snug">
          【鹿児島ひとり旅＆出張】錦江湾に浮かぶ桜島一望・展望露天温泉・黒豚しゃぶしゃぶ！南国の雄大な自然に抱かれる極上宿 厳選3選
        </h1>
        <p className="text-stone-600 text-sm sm:text-base leading-relaxed pt-2">
          九州新幹線の終着駅・鹿児島！「標高108mの城山高台から桜島と錦江湾を見下ろす絶景露天温泉」を誇る最高峰「SHIROYAMA HOTEL kagoshima（城山ホテル鹿児島）」、鹿児島中央駅直結で桜島ビュー客室を持つ「ソラリア西鉄ホテル鹿児島」、天文館の真ん中で天然温泉と黒豚朝食が嬉しい「天然温泉 霧桜の湯 ドーミーイン鹿児島」を徹底特集。
        </p>
      </header>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 space-y-12">
        {/* リード文セクション */}
        <section className="bg-white rounded-3xl p-6 sm:p-8 shadow-sm border border-stone-200/80 space-y-4">
          <h2 className="text-lg sm:text-xl font-bold font-serif text-amber-950 border-b border-amber-100 pb-3">
            噴煙たなびく桜島の雄姿と、錦江湾の青い海——南国の力強い生命力と極上温泉に身を委ねる「鹿児島リフレッシュステイ」
          </h2>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed">
            九州新幹線「みずほ」「さくら」の終着駅であり、南九州の政治・経済の中枢・鹿児島。活火山「桜島」が錦江湾越しに日常の風景としてそびえ立ち、南国特有の陽光とヤシの並木が旅人を迎えます。西郷隆盛や大久保利通を輩出した明治維新の熱気が息づく街であり、夜になれば南九州最大の歓楽街「天文館」から漂う黒豚しゃぶしゃぶ、地鶏の炭火焼き、キビナゴの刺身、そして本場芋焼酎の芳醇な香りが五感を満たします。
          </p>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed">
            そんな鹿児島ステイの最大のハイライトは、「部屋や露天風呂から眺める桜島のダイナミックな景観」です。朝陽に染まる桜島を眺めながら地下深くから湧き出す美肌温泉に浸かり、名物の黒豚やさつま揚げが並ぶ朝食でエネルギーを補給する。日常のストレスを一気に吹き飛ばしてくれる鹿児島の厳選3宿をご紹介します。
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
                src="https://img.travel.rakuten.co.jp/share/HOTEL/5305/5305.jpg"
                alt="ＳＨＩＲＯＹＡＭＡ　ＨＯＴＥＬ　ｋａｇｏｓｈｉｍａ（城山ホテル鹿児島）"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 800px"
              />
              <div className="absolute top-4 left-4 bg-black/60 backdrop-blur-md text-white text-xs font-bold px-3 py-1.5 rounded-full">
                第1選
              </div>
              <div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-md text-stone-800 text-xs font-semibold px-3 py-1 rounded-md shadow-xs">
                楽天総合評価 ★ 4.63 点（3837件）
              </div>
            </div>

            <div className="p-6 sm:p-8 space-y-6">
              <div>
                <p className="text-amber-800 font-bold text-xs sm:text-sm tracking-wide mb-1">
                  標高108mの城山山頂にそびえる迎賓館！桜島と錦江湾、鹿児島市街を一望する絶景露天風呂「さつま乃湯」
                </p>
                <h3 className="text-xl sm:text-2xl font-bold font-serif text-stone-900 leading-snug">
                  SHIROYAMA HOTEL kagoshima（城山ホテル鹿児島） —— 鹿児島を代表する名門ホテル。美肌の展望露天温泉と80種の贅沢朝食ビュッフェ
                </h3>
              </div>

              <div className="space-y-3 bg-stone-50/80 p-4 sm:p-5 rounded-2xl border border-stone-100">
                <h4 className="text-xs font-bold uppercase tracking-wider text-stone-500">
                  注目のポイント＆魅力
                </h4>
                <div className="grid gap-3 sm:grid-cols-3">
                  
                  <div className="bg-white p-3.5 rounded-xl border border-stone-200/60 space-y-1">
                    <p className="text-xs font-bold text-amber-950">地下1,000mから湧出する炭酸水素塩泉の展望露天温泉「さつま乃湯」</p>
                    <p className="text-xs text-stone-600 leading-relaxed">目の前に広がる大迫力の桜島パノラマ。日の出とともに赤く染まる朝の桜島を眺めながらの入浴は一生の思い出です。</p>
                  </div>
                  
                  <div className="bg-white p-3.5 rounded-xl border border-stone-200/60 space-y-1">
                    <p className="text-xs font-bold text-amber-950">楽天トラベル朝食フェスティバル上位常連！約80種の贅沢モーニング</p>
                    <p className="text-xs text-stone-600 leading-relaxed">黒豚しゃぶしゃぶ、真鯛の潮汁、焼き立てホテルメイドパンなど。鹿児島食材の魅力を極限まで引き出した朝食です。</p>
                  </div>
                  
                  <div className="bg-white p-3.5 rounded-xl border border-stone-200/60 space-y-1">
                    <p className="text-xs font-bold text-amber-950">鹿児島中央駅や天文館へ30分間隔で無料シャトルバスを毎日運行</p>
                    <p className="text-xs text-stone-600 leading-relaxed">高台のオアシスでありながら中心街へのアクセスもスムーズ。出張や一人旅の拠点に最適です。</p>
                  </div>
                  
                </div>
              </div>

              <div className="space-y-2 text-xs sm:text-sm text-stone-600 bg-amber-50/50 p-4 rounded-xl border border-amber-100/60">
                <p className="font-semibold text-amber-900">📝 宿泊者の生の声・評判：</p>
                <p className="leading-relaxed text-stone-700">楽天トラベル評価4.63点。「露天風呂からの桜島の景色が息をのむ美しさで感動しました」「朝食も美味しくスタッフの接客も完璧。鹿児島に来たら絶対泊まるべき名宿」と大絶賛。</p>
              </div>

              <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-stone-100">
                <div className="text-xs text-stone-500 space-y-0.5 text-center sm:text-left">
                  <p>📍 鹿児島県鹿児島市新照院町41-1</p>
                  <p>🚆 鹿児島中央からタクシー約１０分　　鹿児島中央駅や天文館等を経由する無料のシャトルバスを30分間隔で運行</p>
                </div>
                <div className="flex items-center gap-3 w-full sm:w-auto">
                  <a
                    href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fhb.afl.rakuten.co.jp%2Fhgc%2F54d2a438.4bc4abc2.54d2a439.aa1be583%2F%3Fpc%3Dhttps%253A%252F%252Fimg.travel.rakuten.co.jp%252Fimage%252Ftr%252Fapi%252Fkw%252FJBe8h%252F%253Ff_no%253D5305"
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
                src="https://img.travel.rakuten.co.jp/share/HOTEL/135892/135892.jpg"
                alt="ソラリア西鉄ホテル鹿児島"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 800px"
              />
              <div className="absolute top-4 left-4 bg-black/60 backdrop-blur-md text-white text-xs font-bold px-3 py-1.5 rounded-full">
                第2選
              </div>
              <div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-md text-stone-800 text-xs font-semibold px-3 py-1 rounded-md shadow-xs">
                楽天総合評価 ★ 4.36 点（2298件）
              </div>
            </div>

            <div className="p-6 sm:p-8 space-y-6">
              <div>
                <p className="text-amber-800 font-bold text-xs sm:text-sm tracking-wide mb-1">
                  JR鹿児島中央駅東口正面直結！駅前広場と桜島を見下ろすスタイリッシュ高層ホテル
                </p>
                <h3 className="text-xl sm:text-2xl font-bold font-serif text-stone-900 leading-snug">
                  ソラリア西鉄ホテル鹿児島 —— 新幹線改札すぐ。7階ロビーから広がる桜島ビューと洗い場付き快適客室
                </h3>
              </div>

              <div className="space-y-3 bg-stone-50/80 p-4 sm:p-5 rounded-2xl border border-stone-100">
                <h4 className="text-xs font-bold uppercase tracking-wider text-stone-500">
                  注目のポイント＆魅力
                </h4>
                <div className="grid gap-3 sm:grid-cols-3">
                  
                  <div className="bg-white p-3.5 rounded-xl border border-stone-200/60 space-y-1">
                    <p className="text-xs font-bold text-amber-950">新幹線・在来線・空港リムジンバス発着所に直結する圧倒的フットワーク</p>
                    <p className="text-xs text-stone-600 leading-relaxed">雨の日も傘不要。チェックイン前後に荷物を預けてスムーズに指宿や霧島、市内観光へ出発できます。</p>
                  </div>
                  
                  <div className="bg-white p-3.5 rounded-xl border border-stone-200/60 space-y-1">
                    <p className="text-xs font-bold text-amber-950">全客室がバス・トイレ別の独立設計＆大きな窓から桜島を望む客室</p>
                    <p className="text-xs text-stone-600 leading-relaxed">洗い場付きのゆったりしたバスタブ。一人での滞在でも窮屈さを一切感じないモダンな空間です。</p>
                  </div>
                  
                  <div className="bg-white p-3.5 rounded-xl border border-stone-200/60 space-y-1">
                    <p className="text-xs font-bold text-amber-950">7階フロントロビーやレストランから望む桜島と観覧車のパノラマ夜景</p>
                    <p className="text-xs text-stone-600 leading-relaxed">鹿児島のシンボルを一望する開放的なロケーション。上質なアメニティとベッドが快眠を約束します。</p>
                  </div>
                  
                </div>
              </div>

              <div className="space-y-2 text-xs sm:text-sm text-stone-600 bg-amber-50/50 p-4 rounded-xl border border-amber-100/60">
                <p className="font-semibold text-amber-900">📝 宿泊者の生の声・評判：</p>
                <p className="leading-relaxed text-stone-700">楽天トラベル評価4.36点。「鹿児島中央駅の真ん前で立地最強。桜島が見える部屋で景色も最高でした」「お風呂とトイレが別でとても使いやすかった」とビジネス・一人旅に大人気。</p>
              </div>

              <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-stone-100">
                <div className="text-xs text-stone-500 space-y-0.5 text-center sm:text-left">
                  <p>📍 鹿児島県鹿児島市中央町11番地</p>
                  <p>🚆 鹿児島中央駅東口側、地下直結徒歩にて３分。空港バス発着所はビル内の１階。フロントは７階にございます。</p>
                </div>
                <div className="flex items-center gap-3 w-full sm:w-auto">
                  <a
                    href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fhb.afl.rakuten.co.jp%2Fhgc%2F54d2a438.4bc4abc2.54d2a439.aa1be583%2F%3Fpc%3Dhttps%253A%252F%252Fimg.travel.rakuten.co.jp%252Fimage%252Ftr%252Fapi%252Fkw%252FJBe8h%252F%253Ff_no%253D135892"
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
                src="https://img.travel.rakuten.co.jp/share/HOTEL/137044/137044.jpg"
                alt="天然温泉　霧桜の湯　ドーミーイン鹿児島（ドーミーイン・御宿野乃　ホテルズグループ）"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 800px"
              />
              <div className="absolute top-4 left-4 bg-black/60 backdrop-blur-md text-white text-xs font-bold px-3 py-1.5 rounded-full">
                第3選
              </div>
              <div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-md text-stone-800 text-xs font-semibold px-3 py-1 rounded-md shadow-xs">
                楽天総合評価 ★ 4.38 点（2785件）
              </div>
            </div>

            <div className="p-6 sm:p-8 space-y-6">
              <div>
                <p className="text-amber-800 font-bold text-xs sm:text-sm tracking-wide mb-1">
                  天文館通電停から徒歩約2分！天然温泉大浴場とサウナ・名物「黒豚しゃぶしゃぶ」朝食バイキング
                </p>
                <h3 className="text-xl sm:text-2xl font-bold font-serif text-stone-900 leading-snug">
                  天然温泉 霧桜の湯 ドーミーイン鹿児島 —— 歓楽街の中心。自家源泉の天然温泉と夜鳴きそば完備の安心ステイ
                </h3>
              </div>

              <div className="space-y-3 bg-stone-50/80 p-4 sm:p-5 rounded-2xl border border-stone-100">
                <h4 className="text-xs font-bold uppercase tracking-wider text-stone-500">
                  注目のポイント＆魅力
                </h4>
                <div className="grid gap-3 sm:grid-cols-3">
                  
                  <div className="bg-white p-3.5 rounded-xl border border-stone-200/60 space-y-1">
                    <p className="text-xs font-bold text-amber-950">最上階に位置する男女別天然温泉大浴場「霧桜の湯」＆高温サウナ・水風呂</p>
                    <p className="text-xs text-stone-600 leading-relaxed">神経痛や冷え性に効果的な天然温泉。サウナでしっかりととのってから天文館のグルメ街へ繰り出せます。</p>
                  </div>
                  
                  <div className="bg-white p-3.5 rounded-xl border border-stone-200/60 space-y-1">
                    <p className="text-xs font-bold text-amber-950">名物「夜鳴きそば」や湯上がりアイス、乳酸菌飲料の無料サービス</p>
                    <p className="text-xs text-stone-600 leading-relaxed">天文館で黒豚や焼酎を堪能した後のシメに最適。一人旅でもホッと温まる定番のサービスです。</p>
                  </div>
                  
                  <div className="bg-white p-3.5 rounded-xl border border-stone-200/60 space-y-1">
                    <p className="text-xs font-bold text-amber-950">名物「黒豚しゃぶしゃぶ」やさつま揚げ、鶏飯が並ぶ豪華朝食バイキング</p>
                    <p className="text-xs text-stone-600 leading-relaxed">朝から鹿児島の郷土料理を満喫。出張の一日を最高の活力でスタートできます。</p>
                  </div>
                  
                </div>
              </div>

              <div className="space-y-2 text-xs sm:text-sm text-stone-600 bg-amber-50/50 p-4 rounded-xl border border-amber-100/60">
                <p className="font-semibold text-amber-900">📝 宿泊者の生の声・評判：</p>
                <p className="leading-relaxed text-stone-700">楽天トラベル評価4.38点。「天文館のど真ん中で飲食店が多く便利。温泉とサウナで疲れが取れて朝食の黒豚しゃぶしゃぶも絶品でした」とリピーター多数。</p>
              </div>

              <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-stone-100">
                <div className="text-xs text-stone-500 space-y-0.5 text-center sm:text-left">
                  <p>📍 鹿児島県鹿児島市西千石町17-30</p>
                  <p>🚆 ■鹿児島中央駅より市電乗車約4分⇒3つ目の電停「高見馬場」下車・徒歩約2分■鹿児島空港バス停「天文館」下車・徒歩約3分</p>
                </div>
                <div className="flex items-center gap-3 w-full sm:w-auto">
                  <a
                    href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fhb.afl.rakuten.co.jp%2Fhgc%2F54d2a438.4bc4abc2.54d2a439.aa1be583%2F%3Fpc%3Dhttps%253A%252F%252Fimg.travel.rakuten.co.jp%252Fimage%252Ftr%252Fapi%252Fkw%252FJBe8h%252F%253Ff_no%253D137044"
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
              鹿児島の夜をひとり旅で満喫するスマートグルメガイド
            </h2>
          </div>

          <div className="grid gap-4 sm:grid-cols-3">
            
            <div className="bg-stone-800/80 p-4 rounded-2xl border border-stone-700/60 space-y-2">
              <h3 className="text-sm font-bold text-amber-300">
                1. 天文館の居酒屋では芋焼酎を「前割り（まえわり）」で頼む
              </h3>
              <p className="text-xs text-stone-300 leading-relaxed">
                あらかじめ水と焼酎を5:5などで馴染ませて寝かせた前割り。まろやかでカドが取れた極上の口当たりを黒じょかで温めていただきます。
              </p>
            </div>
            
            <div className="bg-stone-800/80 p-4 rounded-2xl border border-stone-700/60 space-y-2">
              <h3 className="text-sm font-bold text-amber-300">
                2. 黒豚料理は「しゃぶしゃぶ」または「とんかつ」の専門店へ
              </h3>
              <p className="text-xs text-stone-300 leading-relaxed">
                きめ細かく甘みのある脂身が特徴のかごしま黒豚。ポン酢ではなく出汁つゆで食べる黒豚しゃぶしゃぶは絶品です。
              </p>
            </div>
            
            <div className="bg-stone-800/80 p-4 rounded-2xl border border-stone-700/60 space-y-2">
              <h3 className="text-sm font-bold text-amber-300">
                3. フェリーで桜島へ渡り「溶岩なぎさ公園の足湯」でリフレッシュ
              </h3>
              <p className="text-xs text-stone-300 leading-relaxed">
                鹿児島港から桜島フェリーでわずか約15分（24時間運航）。錦江湾の海風を感じながら浸かる全長100mの無料足湯は最高の癒やしです。
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
                <span>鹿児島空港から市内中心部まではどうやって行きますか？</span>
              </h3>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed pl-5">
                鹿児島空港から市内行きリムジンバスが頻発しており、鹿児島中央駅や天文館まで約40〜50分で直行できます。
              </p>
            </div>
            
            <div className="space-y-1.5 bg-stone-50 p-4 rounded-xl">
              <h3 className="text-sm font-bold text-stone-900 flex items-start gap-2">
                <span className="text-amber-800 font-extrabold">Q.</span>
                <span>桜島の火山灰が降ってきた時の注意点はありますか？</span>
              </h3>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed pl-5">
                降灰時はコンタクトレンズより眼鏡の着用が推奨されます。ホテルでは傘の貸出を行っており、市街地では衣服を軽く払うだけで問題なく観光できます。
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
