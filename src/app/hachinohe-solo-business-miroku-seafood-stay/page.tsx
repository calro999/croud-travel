import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: '【八戸出張＆横丁ひとり旅】みろく横丁徒歩すぐ・八食センター・日本一のイカ美食！東北新幹線直結の快適宿 厳選3選',
  description: '東北新幹線はやぶさ停車・青森県第2の工業・水産都市「八戸」！「中心街・みろく横丁へ徒歩1分の抜群の好立地」を誇る「ダイワロイネットホテル八戸」、八戸駅東口徒歩2分で無料朝食が嬉しい「コンフォートホテル八戸」、八戸の歴史を紡ぐ老舗迎賓ホテル「八戸グランドホテル」を徹底特集。',
  keywords: '八戸 出張 ホテル おすすめ,八戸 一人旅 ホテル,みろく横丁 ホテル 八戸,ダイワロイネットホテル八戸 宿泊,八食センター ホテル',
  openGraph: {
    title: '【八戸出張＆横丁ひとり旅】みろく横丁徒歩すぐ・八食センター・日本一のイカ美食！東北新幹線直結の快適宿 厳選3選',
    description: '東北新幹線はやぶさ停車・青森県第2の工業・水産都市「八戸」！「中心街・みろく横丁へ徒歩1分の抜群の好立地」を誇る「ダイワロイネットホテル八戸」、八戸駅東口徒歩2分で無料朝食が嬉しい「コンフォートホテル八戸」、八戸の歴史を紡ぐ老舗迎賓ホテル「八戸グランドホテル」を徹底特集。',
    url: 'https://croud-travel.pages.dev/hachinohe-solo-business-miroku-seafood-stay',
    siteName: 'トラベルガイド - クラウドトラベル',
    locale: 'ja_JP',
    type: 'article',
  },
};

export default function ArticlePage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: '【八戸出張＆横丁ひとり旅】みろく横丁徒歩すぐ・八食センター・日本一のイカ美食！東北新幹線直結の快適宿 厳選3選',
    description: '東北新幹線はやぶさ停車・青森県第2の工業・水産都市「八戸」！「中心街・みろく横丁へ徒歩1分の抜群の好立地」を誇る「ダイワロイネットホテル八戸」、八戸駅東口徒歩2分で無料朝食が嬉しい「コンフォートホテル八戸」、八戸の歴史を紡ぐ老舗迎賓ホテル「八戸グランドホテル」を徹底特集。',
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
    mainEntityOfPage: 'https://croud-travel.pages.dev/hachinohe-solo-business-miroku-seafood-stay',
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
        <span className="text-stone-700 font-medium">八戸・出張＆みろく横丁・イカ海鮮特集</span>
        <span>/</span>
        <span className="text-stone-700 font-medium truncate">【八戸出張＆横丁ひとり旅】みろく横丁徒歩すぐ・八食センター・日本一のイカ美食！東北新幹線直結の快適宿 厳選3選</span>
      </nav>

      {/* ヒーローヘッダー */}
      <header className="max-w-4xl mx-auto px-4 sm:px-6 py-8 sm:py-12 space-y-4">
        <div className="inline-flex items-center gap-2 bg-amber-100/90 text-amber-950 text-xs font-semibold px-3.5 py-1.5 rounded-full border border-amber-300/80 shadow-xs">
          <span>✨</span>
          <span>八戸・出張＆みろく横丁・イカ海鮮特集</span>
        </div>
        <h1 className="text-2xl sm:text-4xl font-extrabold font-serif text-stone-900 tracking-tight leading-snug">
          【八戸出張＆横丁ひとり旅】みろく横丁徒歩すぐ・八食センター・日本一のイカ美食！東北新幹線直結の快適宿 厳選3選
        </h1>
        <p className="text-stone-600 text-sm sm:text-base leading-relaxed pt-2">
          東北新幹線はやぶさ停車・青森県第2の工業・水産都市「八戸」！「中心街・みろく横丁へ徒歩1分の抜群の好立地」を誇る「ダイワロイネットホテル八戸」、八戸駅東口徒歩2分で無料朝食が嬉しい「コンフォートホテル八戸」、八戸の歴史を紡ぐ老舗迎賓ホテル「八戸グランドホテル」を徹底特集。
        </p>
      </header>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 space-y-12">
        {/* リード文セクション */}
        <section className="bg-white rounded-3xl p-6 sm:p-8 shadow-sm border border-stone-200/80 space-y-4">
          <h2 className="text-lg sm:text-xl font-bold font-serif text-amber-950 border-b border-amber-100 pb-3">
            夜風に揺れる屋台の赤提灯と炭火で焼かれる前沖サバ、三陸の荒波が育む極上イカ——人情横丁と海の恵みに癒やされる「八戸プレミアム出張」
          </h2>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed">
            東北新幹線「はやぶさ」で東京から最短約2時間45分。日本屈指の水揚げ量を誇る八戸港を抱え、臨海部には巨大な製紙・鉄鋼・化学工場が連なる北東北の産業拠点・青森県八戸市。出張の夜に訪れるべき最大の魅力は、中心街に広がる「みろく横丁（八戸屋台村）」をはじめとする8つの横丁文化です。地元の人々や全国からの旅人が肩を寄せ合い、新鮮なイカ刺しや八戸前沖サバ、名物「せんべい汁」を肴に地酒「八仙」「陸奥男山」を酌み交わす温かな夜が待っています。
          </p>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed">
            そんな八戸滞在を快適にするのが、新幹線改札すぐの駅前ホテルや、横丁街へ徒歩1分で繰り出せる中心街ホテルです。広々としたデスクと高速Wi-Fiで仕事を片付け、翌朝は名物「八食センター」で七輪炭火焼きグルメを楽しむ。今回は出張・ひとり旅に最適な八戸の厳選3宿をご紹介します。
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
                src="https://img.travel.rakuten.co.jp/share/HOTEL/76800/76800.jpg"
                alt="ダイワロイネットホテル八戸"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 800px"
              />
              <div className="absolute top-4 left-4 bg-black/60 backdrop-blur-md text-white text-xs font-bold px-3 py-1.5 rounded-full">
                第1選
              </div>
              <div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-md text-stone-800 text-xs font-semibold px-3 py-1 rounded-md shadow-xs">
                楽天総合評価 ★ 4.3 点（3790件）
              </div>
            </div>

            <div className="p-6 sm:p-8 space-y-6">
              <div>
                <p className="text-amber-800 font-bold text-xs sm:text-sm tracking-wide mb-1">
                  八戸市中心街のど真ん中！みろく横丁まで徒歩1分の最強立地と広々としたモダン快適客室
                </p>
                <h3 className="text-xl sm:text-2xl font-bold font-serif text-stone-900 leading-snug">
                  ダイワロイネットホテル八戸 —— 屋台街へ直行できる特等席。ワイドデスクと充実のアメニティで出張を完全サポート
                </h3>
              </div>

              <div className="space-y-3 bg-stone-50/80 p-4 sm:p-5 rounded-2xl border border-stone-100">
                <h4 className="text-xs font-bold uppercase tracking-wider text-stone-500">
                  注目のポイント＆魅力
                </h4>
                <div className="grid gap-3 sm:grid-cols-3">
                  
                  <div className="bg-white p-3.5 rounded-xl border border-stone-200/60 space-y-1">
                    <p className="text-xs font-bold text-amber-950">八戸の歓楽街「みろく横丁」や六日町・十三日町商店街へ徒歩1分</p>
                    <p className="text-xs text-stone-600 leading-relaxed">夜遅くまで横丁でのハシゴ酒を満喫しても、すぐにホテルへ戻れる抜群のロケーションです。</p>
                  </div>
                  
                  <div className="bg-white p-3.5 rounded-xl border border-stone-200/60 space-y-1">
                    <p className="text-xs font-bold text-amber-950">全室広々とした客室設計＆大型ワーキングデスクと明るいデスクライト</p>
                    <p className="text-xs text-stone-600 leading-relaxed">高速Wi-Fi完備で出張のテレワークや資料作成が非常に快適。シモンズ製ベッドが快眠を約束します。</p>
                  </div>
                  
                  <div className="bg-white p-3.5 rounded-xl border border-stone-200/60 space-y-1">
                    <p className="text-xs font-bold text-amber-950">地元青森の味覚を取り入れた和洋朝食バイキング</p>
                    <p className="text-xs text-stone-600 leading-relaxed">八戸名物のせんべい汁や新鮮な海の幸。朝から郷土の滋味あふれる料理でエネルギーをチャージできます。</p>
                  </div>
                  
                </div>
              </div>

              <div className="space-y-2 text-xs sm:text-sm text-stone-600 bg-amber-50/50 p-4 rounded-xl border border-amber-100/60">
                <p className="font-semibold text-amber-900">📝 宿泊者の生の声・評判：</p>
                <p className="leading-relaxed text-stone-700">楽天トラベル評価4.30点。「みろく横丁の目の前で夜の飲食に最高の立地！部屋も広く清潔で文句なし」「出張で八戸に来る時は必ず利用しています」と絶大な支持。</p>
              </div>

              <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-stone-100">
                <div className="text-xs text-stone-500 space-y-0.5 text-center sm:text-left">
                  <p>📍 青森県八戸市八日町1-1</p>
                  <p>🚆 JR八戸線「本八戸駅」から徒歩約10分／JR八戸駅より車で約20分／三沢空港よりバスで(約55分)八戸八日町下車徒歩すぐ</p>
                </div>
                <div className="flex items-center gap-3 w-full sm:w-auto">
                  <a
                    href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fhb.afl.rakuten.co.jp%2Fhgc%2F54d2a438.4bc4abc2.54d2a439.aa1be583%2F%3Fpc%3Dhttps%253A%252F%252Fimg.travel.rakuten.co.jp%252Fimage%252Ftr%252Fapi%252Fkw%252FJBe8h%252F%253Ff_no%253D76800"
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
                src="https://img.travel.rakuten.co.jp/share/HOTEL/78159/78159.jpg"
                alt="コンフォートホテル八戸"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 800px"
              />
              <div className="absolute top-4 left-4 bg-black/60 backdrop-blur-md text-white text-xs font-bold px-3 py-1.5 rounded-full">
                第2選
              </div>
              <div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-md text-stone-800 text-xs font-semibold px-3 py-1 rounded-md shadow-xs">
                楽天総合評価 ★ 4.2 点（3231件）
              </div>
            </div>

            <div className="p-6 sm:p-8 space-y-6">
              <div>
                <p className="text-amber-800 font-bold text-xs sm:text-sm tracking-wide mb-1">
                  JR八戸駅東口から徒歩わずか2分！新幹線改札からすぐの抜群の機動力と無料ヘルシー朝食
                </p>
                <h3 className="text-xl sm:text-2xl font-bold font-serif text-stone-900 leading-snug">
                  コンフォートホテル八戸 —— 新幹線利用に最強のアクセス。快眠枕「チョイスピロー」と無料オープンスペースラウンジ
                </h3>
              </div>

              <div className="space-y-3 bg-stone-50/80 p-4 sm:p-5 rounded-2xl border border-stone-100">
                <h4 className="text-xs font-bold uppercase tracking-wider text-stone-500">
                  注目のポイント＆魅力
                </h4>
                <div className="grid gap-3 sm:grid-cols-3">
                  
                  <div className="bg-white p-3.5 rounded-xl border border-stone-200/60 space-y-1">
                    <p className="text-xs font-bold text-amber-950">東北新幹線・青い森鉄道「八戸駅」東口から徒歩2分の圧倒的近さ</p>
                    <p className="text-xs text-stone-600 leading-relaxed">新幹線を降りてすぐ荷物を預けられる安心感。雨や雪の日もスーツケースを引いての移動が楽々です。</p>
                  </div>
                  
                  <div className="bg-white p-3.5 rounded-xl border border-stone-200/60 space-y-1">
                    <p className="text-xs font-bold text-amber-950">快眠を追求したオリジナル枕「チョイス ピロー」と全室禁煙のクリーン空間</p>
                    <p className="text-xs text-stone-600 leading-relaxed">出張の緊張や移動の疲れをリセット。朝までぐっすり熟睡できる環境が整っています。</p>
                  </div>
                  
                  <div className="bg-white p-3.5 rounded-xl border border-stone-200/60 space-y-1">
                    <p className="text-xs font-bold text-amber-950">無料の朝食ビュッフェ（スムージー・日替わりスープ・焼きたてパン）</p>
                    <p className="text-xs text-stone-600 leading-relaxed">宿泊者全員に無料提供。コワーキングスペースとしても使えるコンフォートライブラリーカフェも充実しています。</p>
                  </div>
                  
                </div>
              </div>

              <div className="space-y-2 text-xs sm:text-sm text-stone-600 bg-amber-50/50 p-4 rounded-xl border border-amber-100/60">
                <p className="font-semibold text-amber-900">📝 宿泊者の生の声・評判：</p>
                <p className="leading-relaxed text-stone-700">楽天トラベル評価4.20点。「八戸駅からすぐで新幹線の時間ギリギリまで部屋でくつろげました」「無料の朝食やコーヒーサービスが嬉しかった」と好評。</p>
              </div>

              <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-stone-100">
                <div className="text-xs text-stone-500 space-y-0.5 text-center sm:text-left">
                  <p>📍 青森県八戸市尻内町館田2-16</p>
                  <p>🚆 ■JR八戸駅東口より徒歩2分■八戸自動車道 八戸ICより約10分・八戸北ICより約15分■三沢空港より車で約45分</p>
                </div>
                <div className="flex items-center gap-3 w-full sm:w-auto">
                  <a
                    href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fhb.afl.rakuten.co.jp%2Fhgc%2F54d2a438.4bc4abc2.54d2a439.aa1be583%2F%3Fpc%3Dhttps%253A%252F%252Fimg.travel.rakuten.co.jp%252Fimage%252Ftr%252Fapi%252Fkw%252FJBe8h%252F%253Ff_no%253D78159"
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
                src="https://img.travel.rakuten.co.jp/share/HOTEL/8663/8663.jpg"
                alt="八戸グランドホテル"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 800px"
              />
              <div className="absolute top-4 left-4 bg-black/60 backdrop-blur-md text-white text-xs font-bold px-3 py-1.5 rounded-full">
                第3選
              </div>
              <div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-md text-stone-800 text-xs font-semibold px-3 py-1 rounded-md shadow-xs">
                楽天総合評価 ★ 4.17 点（1310件）
              </div>
            </div>

            <div className="p-6 sm:p-8 space-y-6">
              <div>
                <p className="text-amber-800 font-bold text-xs sm:text-sm tracking-wide mb-1">
                  八戸市中心街の高台にそびえる迎賓館ホテル！最上階ラウンジから八戸市街と太平洋を一望
                </p>
                <h3 className="text-xl sm:text-2xl font-bold font-serif text-stone-900 leading-snug">
                  八戸グランドホテル —— 伝統と格式が息づく老舗シティホテル。ゆとりある客室と地元八戸食材の美食
                </h3>
              </div>

              <div className="space-y-3 bg-stone-50/80 p-4 sm:p-5 rounded-2xl border border-stone-100">
                <h4 className="text-xs font-bold uppercase tracking-wider text-stone-500">
                  注目のポイント＆魅力
                </h4>
                <div className="grid gap-3 sm:grid-cols-3">
                  
                  <div className="bg-white p-3.5 rounded-xl border border-stone-200/60 space-y-1">
                    <p className="text-xs font-bold text-amber-950">本八戸駅や市役所に近く、落ち着いた閑静な環境に位置する名門ホテル</p>
                    <p className="text-xs text-stone-600 leading-relaxed">街の喧騒から少し離れた品格ある佇まい。エグゼクティブの出張や落ち着いた一人旅に最適です。</p>
                  </div>
                  
                  <div className="bg-white p-3.5 rounded-xl border border-stone-200/60 space-y-1">
                    <p className="text-xs font-bold text-amber-950">最上階10階レストラン＆バーから望む八戸市街や工業港の夜景</p>
                    <p className="text-xs text-stone-600 leading-relaxed">開放的な眺望。夜風を感じながら優雅なカクテルタイムやディナーを楽しめます。</p>
                  </div>
                  
                  <div className="bg-white p-3.5 rounded-xl border border-stone-200/60 space-y-1">
                    <p className="text-xs font-bold text-amber-950">八戸前沖サバやイカ、南部地方の郷土料理を取り入れた朝食</p>
                    <p className="text-xs text-stone-600 leading-relaxed">熟練の料理人が腕を振るう朝の食体験。八戸の伝統の味を丁寧に堪能できます。</p>
                  </div>
                  
                </div>
              </div>

              <div className="space-y-2 text-xs sm:text-sm text-stone-600 bg-amber-50/50 p-4 rounded-xl border border-amber-100/60">
                <p className="font-semibold text-amber-900">📝 宿泊者の生の声・評判：</p>
                <p className="leading-relaxed text-stone-700">楽天トラベル評価4.17点。「老舗ならではの落ち着いた雰囲気とスタッフの親切な対応が素晴らしい」「部屋からの眺望が良く静かに過ごせました」と定評。</p>
              </div>

              <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-stone-100">
                <div className="text-xs text-stone-500 space-y-0.5 text-center sm:text-left">
                  <p>📍 青森県八戸市番町14</p>
                  <p>🚆 東北新幹線八戸駅より車で約15分／JR八戸線本八戸駅より徒歩8分／三沢空港より車で約40分/八戸ＩＣより１５分</p>
                </div>
                <div className="flex items-center gap-3 w-full sm:w-auto">
                  <a
                    href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fhb.afl.rakuten.co.jp%2Fhgc%2F54d2a438.4bc4abc2.54d2a439.aa1be583%2F%3Fpc%3Dhttps%253A%252F%252Fimg.travel.rakuten.co.jp%252Fimage%252Ftr%252Fapi%252Fkw%252FJBe8h%252F%253Ff_no%253D8663"
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
              八戸の「みろく横丁＆八食センター」を一人旅で味わい尽くすコツ
            </h2>
          </div>

          <div className="grid gap-4 sm:grid-cols-3">
            
            <div className="bg-stone-800/80 p-4 rounded-2xl border border-stone-700/60 space-y-2">
              <h3 className="text-sm font-bold text-amber-300">
                1. みろく横丁では屋台のカウンターで「八戸前沖サバの串焼き」を注文
              </h3>
              <p className="text-xs text-stone-300 leading-relaxed">
                日本一脂の乗りが良いとされる八戸前沖サバ。炭火でじっくり焼かれ、ジュワッと溢れる脂の甘みを辛口地酒「八仙」で流し込む至福。
              </p>
            </div>
            
            <div className="bg-stone-800/80 p-4 rounded-2xl border border-stone-700/60 space-y-2">
              <h3 className="text-sm font-bold text-amber-300">
                2. 翌朝は巨大市場「八食センター」へ移動し「七厘村」で炭火BBQ
              </h3>
              <p className="text-xs text-stone-300 leading-relaxed">
                市場内の魚屋で好きなホタテ、カキ、イカ、マグロを買い、七輪をレンタルしてその場で焼いて食べる名物体験。
              </p>
            </div>
            
            <div className="bg-stone-800/80 p-4 rounded-2xl border border-stone-700/60 space-y-2">
              <h3 className="text-sm font-bold text-amber-300">
                3. 日曜朝なら日本最大級の朝市「館鼻岸壁朝市（たてはながんぺきあさいち）」へ
              </h3>
              <p className="text-xs text-stone-300 leading-relaxed">
                約300店が並ぶ圧巻の巨大朝市。夜明けとともに賑わい、名物の焼きウニや手羽先唐揚げをほおばるお祭り騒ぎを体感できます。
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
                <span>「八戸駅」と「中心街（本八戸駅周辺）」は離れていますか？</span>
              </h3>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed pl-5">
                はい、新幹線が発着する「八戸駅」と、みろく横丁や飲食店が集まる「中心街（本八戸）」は約5km離れており、青い森鉄道・JR八戸線で約8分、または定額シャトルバス（八戸市営バス等）で約20分で結ばれています。
              </p>
            </div>
            
            <div className="space-y-1.5 bg-stone-50 p-4 rounded-xl">
              <h3 className="text-sm font-bold text-stone-900 flex items-start gap-2">
                <span className="text-amber-800 font-extrabold">Q.</span>
                <span>一人でみろく横丁の屋台に入っても浮きませんか？</span>
              </h3>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed pl-5">
                みろく横丁の屋台は全店舗がカウンター6〜8席の小さな造りで、一人客の割合が非常に高く、店主や隣の客と自然に会話が弾むアットホームな雰囲気です。
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
