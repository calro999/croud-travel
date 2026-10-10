import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ChevronRight, Star, MapPin, Sparkles, Snowflake, Mountain, Award, HelpCircle, ArrowRight } from 'lucide-react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: '【冬の宮島牡蠣三昧と厳島神社新春初詣】2026-2027年冬の宮島・宮浜温泉！世界遺産と絶景潮湯名宿5選',
  description: '冬に実入りがピークを迎える濃厚クリーミーな宮島牡蠣と世界遺産・厳島神社の新春初詣！海上に浮かぶ大鳥居の荘厳な眺望、宮島潮湯温泉や対岸宮浜温泉の絶景露天風呂を愉しむ厳選5宿。',
  keywords: ['広島県温泉', '厳島神社', '宮島・廿日市・宮浜温泉', '冬の旅行', '温泉宿5選', '楽天トラベル', 'ふるさと納税'],
  openGraph: {
    title: '【冬の宮島牡蠣三昧と厳島神社新春初詣】2026-2027年冬の宮島・宮浜温泉！世界遺産と絶景潮湯名宿5選',
    description: '冬に実入りがピークを迎える濃厚クリーミーな宮島牡蠣と世界遺産・厳島神社の新春初詣！海上に浮かぶ大鳥居の荘厳な眺望、宮島潮湯温泉や対岸宮浜温泉の絶景露天風呂を愉しむ厳選5宿。',
    type: 'article',
    url: 'https://croud-travel.pages.dev/winter-hiroshima-miyajima-winter-oyster-itsukushima-hatsumode-stay',
  }
};

export default function WinterFeaturePage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    'headline': '【冬の宮島牡蠣三昧と厳島神社新春初詣】2026-2027年冬の宮島・宮浜温泉！世界遺産と絶景潮湯名宿5選',
    'description': '冬に実入りがピークを迎える濃厚クリーミーな宮島牡蠣と世界遺産・厳島神社の新春初詣！海上に浮かぶ大鳥居の荘厳な眺望、宮島潮湯温泉や対岸宮浜温泉の絶景露天風呂を愉しむ厳選5宿。',
    'author': {
      '@type': 'Organization',
      'name': '日本全国・旅宿クラウド (Tabiyado Croud Travel)'
    },
    'publisher': {
      '@type': 'Organization',
      'name': '日本全国・旅宿クラウド',
      'logo': {
        '@type': 'ImageObject',
        'url': 'https://croud-travel.pages.dev/ogp-image.jpg'
      }
    },
    'datePublished': 'T00:00:00+09:00',
    'dateModified': 'T00:00:00+09:00'
  };

  const faqJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    'mainEntity': [
      {
        '@type': 'Question',
        'name': '冬の宮島牡蠣の最も美味しい旬の時期はいつですか？',
        'acceptedAnswer': {
          '@type': 'Answer',
          'text': '広島・宮島牡蠣は海水温が下がる12月から2月にかけて身が最も肥え、グリコーゲンなどの旨味成分がピークに達します。ぷりっぷりで濃厚、クリーミーな味わいの焼き牡蠣や牡蠣鍋、牡蠣フライを本場で味わうなら12月〜1月が最高のベストシーズンです。例年2月上旬には宮島牡蠣まつりも開催されます。'
        }
      },
      {
        '@type': 'Question',
        'name': '厳島神社の初詣の混雑状況とおすすめの参拝時間帯は？',
        'acceptedAnswer': {
          '@type': 'Answer',
          'text': '正月三が日の日中（10時〜15時頃）はフェリーや参道が大変混雑します。島内の温泉宿に宿泊すれば、観光客の少ない早朝（朝6時30分の開門直後）や、夕暮れのライトアップ時（17時以降）に落ち着いて初詣を行うことができます。海上に浮かぶ大鳥居の朝焼けや夜景の荘厳さは宿泊者だけの特権です。'
        }
      },
      {
        '@type': 'Question',
        'name': '宮島島内に宿泊する場合のフェリーの最終便や注意点は？',
        'acceptedAnswer': {
          '@type': 'Answer',
          'text': '宮島口と宮島を結ぶフェリー（JR西日本宮島フェリーおよび宮島松大汽船）は約10〜15分間隔で頻繁に運航しています。宮島口発の最終便は夜22時台までありますが、夕食時間に間に合わせるため16時〜17時頃までのチェックインをおすすめします。宮島口桟橋周辺には駐車場も完備されています。'
        }
      }
    ]
  };

  const breadcrumbJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    'itemListElement': [
      { '@type': 'ListItem', 'position': 1, 'name': 'ホーム', 'item': 'https://croud-travel.pages.dev/' },
      { '@type': 'ListItem', 'position': 2, 'name': '特集一覧', 'item': 'https://croud-travel.pages.dev/features/' },
      { '@type': 'ListItem', 'position': 3, 'name': '広島県の観光・温泉宿', 'item': 'https://croud-travel.pages.dev/prefectures/hiroshima/' },
      { '@type': 'ListItem', 'position': 4, 'name': '【冬の宮島牡蠣三昧と厳島神社新春初詣】2026-2027年冬の宮島・宮浜温泉！世界遺産と絶景潮湯名宿5選', 'item': 'https://croud-travel.pages.dev/winter-hiroshima-miyajima-winter-oyster-itsukushima-hatsumode-stay/' }
    ]
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />

      <main className="min-h-screen bg-stone-50 text-stone-800 pb-24">
        {/* パンくずリスト */}
        <nav aria-label="Breadcrumb" className="bg-white border-b border-stone-200">
          <div className="max-w-5xl mx-auto px-4 py-3 text-xs text-stone-500 flex items-center space-x-2 overflow-x-auto whitespace-nowrap">
            <Link href="/" className="hover:text-amber-700 transition">ホーム</Link>
            <ChevronRight className="w-3.5 h-3.5 text-stone-400 shrink-0" />
            <Link href="/features" className="hover:text-amber-700 transition">特集一覧</Link>
            <ChevronRight className="w-3.5 h-3.5 text-stone-400 shrink-0" />
            <Link href="/prefectures/hiroshima" className="hover:text-amber-700 transition">広島県</Link>
            <ChevronRight className="w-3.5 h-3.5 text-stone-400 shrink-0" />
            <span className="text-stone-900 font-medium">宮島・廿日市・宮浜温泉</span>
          </div>
        </nav>

        {/* ヒーローセクション */}
        <header className="relative bg-gradient-to-br from-slate-950 via-slate-900 to-indigo-950 text-white py-16 px-4 overflow-hidden">
          <div className="max-w-4xl mx-auto text-center space-y-4 relative z-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/20 text-cyan-200 text-xs font-semibold tracking-wider border border-cyan-400/30">
              <Snowflake className="w-3.5 h-3.5" />
              <span>冬の厳選旅行特集（11月・12月・1月）</span>
            </div>
            <h1 className="text-2xl md:text-4xl lg:text-5xl font-extrabold tracking-tight leading-snug">
              【冬の宮島牡蠣三昧と厳島神社新春初詣】2026-2027年冬の宮島・宮浜温泉！世界遺産と絶景潮湯名宿5選
            </h1>
            <p className="text-sm md:text-base text-cyan-100/90 max-w-2xl mx-auto leading-relaxed">
              冬に実入りがピークを迎える濃厚クリーミーな宮島牡蠣と世界遺産・厳島神社の新春初詣！海上に浮かぶ大鳥居の荘厳な眺望、宮島潮湯温泉や対岸宮浜温泉の絶景露天風呂を愉しむ厳選5宿。
            </p>
          </div>
        </header>

        {/* 導入セクション */}
        <section className="max-w-4xl mx-auto px-4 py-8">
          <div className="bg-white rounded-2xl p-6 sm:p-8 border border-stone-200 shadow-sm space-y-4">
            <h2 className="text-xl sm:text-2xl font-bold text-stone-900 flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-cyan-600" />
              冬の広島県・宮島・廿日市・宮浜温泉が特別な理由
            </h2>
            <div className="grid md:grid-cols-3 gap-4 pt-2">
              <div className="bg-cyan-50/50 p-4 rounded-xl border border-cyan-100">
                <span className="text-xs font-bold text-cyan-800 block mb-1">01. 特徴</span>
                <h3 className="font-bold text-stone-900 text-sm mb-1">12月〜1月に身入りがピーク！ぷりっぷりの「宮島産大粒牡蠣」フルコース</h3>
                <p className="text-xs text-stone-600 leading-relaxed">寒波とともに引き締まり濃厚さを増す本場の牡蠣。殻付き焼き牡蠣の香ばしさ、牡蠣の土手鍋の熱々の味噌の香り、ふっくら炊き上げた牡蠣ご飯や名物穴子重など、冬ならではの美食三昧が堪能できます。</p>
              </div>
              <div className="bg-cyan-50/50 p-4 rounded-xl border border-cyan-100">
                <span className="text-xs font-bold text-cyan-800 block mb-1">02. 特徴</span>
                <h3 className="font-bold text-stone-900 text-sm mb-1">宿泊者だけが独占できる、夜間ライトアップ大鳥居と早朝の厳かな初詣</h3>
                <p className="text-xs text-stone-600 leading-relaxed">日中の喧騒を離れ、夜の静寂の中に浮かび上がる大鳥居の幻想的な姿。朝の清らかな空気の中、回廊に打ち寄せる波音を聞きながら行う新春初詣は、心洗われる格別のパワースポット体験です。</p>
              </div>
              <div className="bg-cyan-50/50 p-4 rounded-xl border border-cyan-100">
                <span className="text-xs font-bold text-cyan-800 block mb-1">03. 特徴</span>
                <h3 className="font-bold text-stone-900 text-sm mb-1">島内唯一の天然温泉「宮島潮湯」と対岸の宮浜温泉での絶景湯浴み</h3>
                <p className="text-xs text-stone-600 leading-relaxed">海水を汲み上げたミネラル豊富な潮湯温泉や、瀬戸内海越しに宮島を一望する宮浜温泉のパノラマ露天風呂。冬の冷たい潮風を感じながら浸かる温かい温泉は至福の極みです。</p>
              </div>
            </div>
          </div>
        </section>

        {/* 観光地ガイド・公式Wikipedia写真＆解説 */}
        <section className="max-w-4xl mx-auto px-4 mb-10">
          <div className="bg-white rounded-2xl border border-stone-200/90 overflow-hidden shadow-sm">
            <div className="bg-gradient-to-r from-stone-900 to-slate-800 text-white px-6 py-4 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-cyan-400 animate-pulse" />
                <h2 className="text-base md:text-lg font-bold tracking-wide">冬の観光名所ガイド：世界遺産・厳島神社（安芸の宮島）</h2>
              </div>
              <span className="text-[11px] text-stone-300 bg-white/10 px-2.5 py-0.5 rounded-full border border-white/10">地域名所解説</span>
            </div>
            <div className="grid md:grid-cols-12 gap-6 p-6 items-center">
              <div className="md:col-span-5 relative h-56 md:h-64 rounded-xl overflow-hidden bg-stone-100 border border-stone-200/60 shadow-inner">
                <Image
                  src="https://thumb.wikimedia.org/wikipedia/commons/thumb/e/ef/Itsukushima_Shrine_Torii_Gate_%2813890465459%29.jpg/1280px-Itsukushima_Shrine_Torii_Gate_%2813890465459%29.jpg?utm_source=ja.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
                  alt="世界遺産・厳島神社（安芸の宮島）"
                  fill
                  className="object-cover hover:scale-105 transition duration-500"
                  sizes="(max-width: 768px) 100vw, 400px"
                />
                <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/75 to-transparent p-2 text-right">
                  <span className="text-[10px] text-white/90">写真出典: Wikimedia Commons</span>
                </div>
              </div>
              <div className="md:col-span-7 space-y-3">
                <h3 className="text-lg md:text-xl font-bold text-stone-900 leading-snug">世界遺産・厳島神社（安芸の宮島）の歴史と見どころ</h3>
                <p className="text-xs md:text-sm text-stone-600 leading-relaxed">厳島神社（いつくしまじんじゃ、公式表記:嚴島神社）は、広島県廿日市市の厳島（宮島）にある神社。式内社（名神大社）、安芸国一宮。旧社格は官幣中社で、現在は神社本庁の別表神社。神紋は「三つ盛り二重亀甲に剣花菱」。古くは「伊都岐島神社」とも記された。全国に約500社ある厳島神社の総本社である。 佐伯直の直系が代々世襲して来たとされているが、一時期藤原氏に横取りされた時期があったものの政略結婚により取り戻し、古代から現在も続いていると記載されている。 広島湾に浮かぶ厳島（宮島）の北東…</p>
                <div className="pt-2 border-t border-stone-100 flex items-center justify-between text-[11px] text-stone-400">
                  <span>出典: フリー百科事典『ウィキペディア（Wikipedia）』</span>
                  <span className="text-cyan-700 font-semibold">冬の探訪推奨スポット</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 宿一覧セクション */}
        <section className="max-w-4xl mx-auto px-4 space-y-8 mb-12">
          <div className="text-center space-y-2">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-900">
              宮島・廿日市・宮浜温泉 厳選の温泉＆リゾート宿5選
            </h2>
            <p className="text-xs sm:text-sm text-stone-500">
              楽天トラベルの最新空室・クチコミ・宿泊料金データをリアルタイム連携しています
            </p>
          </div>

            {/* ホテルカード 1 */}
            <article className="bg-white rounded-2xl shadow-sm border border-stone-200 overflow-hidden hover:shadow-md transition-shadow duration-300">
              <div className="p-6 sm:p-8">
                <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-cyan-100 text-cyan-900">
                    <Sparkles className="w-3.5 h-3.5 text-cyan-700" />
                    創業170余年・大鳥居徒歩3分の島内老舗＆宮島唯一の自家源泉潮湯
                  </span>
                  <div className="flex items-center gap-2">
                    <div className="flex items-center text-amber-500">
                      <Star className="w-4 h-4 fill-current" />
                      <span className="ml-1 text-sm font-bold text-stone-800">4.7</span>
                    </div>
                    <span className="text-xs text-stone-500">（クチコミ 1,060件）</span>
                  </div>
                </div>

                <h3 className="text-xl sm:text-2xl font-bold text-stone-900 mb-3 leading-snug">
                  <a 
                    href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F6271%2F6271.html" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="hover:text-cyan-700 transition-colors"
                  >
                    1. 宮島潮湯温泉　錦水館
                  </a>
                </h3>

                <p className="text-xs sm:text-sm text-stone-600 mb-6 flex items-start gap-1.5">
                  <MapPin className="w-4 h-4 text-rose-500 shrink-0 mt-0.5" />
                  <span>広島県廿日市市宮島町1133（アクセス：宮島口駅よりフェリーで約10分。宮島桟橋より徒歩5分）</span>
                </p>

                <div className="grid grid-cols-1 md:grid-cols-12 gap-6 mb-6">
                  <div className="md:col-span-5">
                    <div className="relative aspect-[4/3] rounded-xl overflow-hidden bg-stone-100 border border-stone-100 shadow-sm">
                      <Image
                        src="https://img.travel.rakuten.co.jp/share/HOTEL/6271/6271.jpg"
                        alt="宮島潮湯温泉　錦水館"
                        fill
                        className="object-cover hover:scale-105 transition-transform duration-500"
                        sizes="(max-width: 768px) 100vw, 360px"
                      />
                    </div>
                  </div>

                  <div className="md:col-span-7 flex flex-col justify-between">
                    <div>
                      <h4 className="text-xs font-bold text-stone-500 uppercase tracking-wider mb-2">宿のハイライト・こだわり</h4>
                      <ul className="space-y-1.5 mb-4">
                        <li className="flex items-start text-xs sm:text-sm text-stone-700"><span className="w-1.5 h-1.5 rounded-full bg-cyan-600 mr-2 shrink-0 mt-1.5" /><span>厳島神社の大鳥居まで徒歩3分！島内に湧く唯一の天然温泉「宮島潮湯」を引く名門宿</span></li>
                        <li className="flex items-start text-xs sm:text-sm text-stone-700"><span className="w-1.5 h-1.5 rounded-full bg-cyan-600 mr-2 shrink-0 mt-1.5" /><span>2025年リニューアルの温泉付きスイートルームと海を見晴らすルーフトップテラス</span></li>
                        <li className="flex items-start text-xs sm:text-sm text-stone-700"><span className="w-1.5 h-1.5 rounded-full bg-cyan-600 mr-2 shrink-0 mt-1.5" /><span>冬の味覚の王様・宮島産大粒牡蠣の炭火焼きと最高級広島牛の贅沢会席</span></li>
                      </ul>
                    </div>

                    <div className="bg-stone-50 p-3.5 rounded-xl border border-stone-200/60 mt-2">
                      <div className="flex items-baseline justify-between">
                        <span className="text-xs text-stone-500 font-medium">宿泊目安（1名あたり）</span>
                        <span className="text-base sm:text-lg font-bold text-stone-900">¥37,400〜</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="space-y-4 pt-4 border-t border-stone-100">
                  <p className="text-xs sm:text-sm text-stone-700 leading-relaxed">
                    安政元年の創業以来、宮島・表参道商店街の至近に位置し、世界遺産・厳島神社の社頭を守り続けてきた歴史ある名旅館。錦水館の誇りは、島内で唯一掘削に成功した自家源泉の天然温泉「宮島潮湯」。地下深くから汲み上げる海水由来のミネラルを豊富に含む弱アルカリ性塩化物泉は、入浴後もぽかぽかと温もりが持続し、冷えた冬の宮島散策の疲れを優しく解き放ちます。客室は瀬戸内海と大鳥居を遠望する和モダンな設え。夕食は12月から1月にかけて最も身が太り、海のミルクの濃厚な旨味が凝縮した「宮島産牡蠣」を、焼き牡蠣、牡蠣フライ、牡蠣の土手鍋などで心ゆくまで堪能できる極上会席が振る舞われます。
                  </p>

                  <div className="bg-cyan-50/40 p-4 rounded-xl border border-cyan-100/60">
                    <h5 className="text-xs font-bold text-cyan-950 mb-1 flex items-center gap-1.5">
                      <Award className="w-3.5 h-3.5 text-cyan-700" />
                      宿泊者の生の声・クチコミ抜粋
                    </h5>
                    <p className="text-xs text-stone-600 italic leading-relaxed">
                      「厳島神社を望む絶景と細やかな配慮に感謝出産前の思い出として、貸切風呂のあるお部屋に宿泊しました。お部屋からは厳島神社がよく見えて、ロケーションもとても良かったです。お風呂は夜と朝の2回。」
                    </p>
                  </div>
                  <div className="pt-2">
                    <a
                      href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F6271%2F6271.html"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center w-full py-3 px-6 rounded-xl text-sm font-bold text-white bg-gradient-to-r from-cyan-700 to-slate-800 hover:from-cyan-800 hover:to-slate-900 shadow-sm hover:shadow transition-all group"
                    >
                      <span>宮島潮湯温泉　錦水館 の宿泊プラン・空室状況を楽天トラベルで見る</span>
                      <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </a>
                  </div>
                </div>
              </div>
            </article>

            {/* ホテルカード 2 */}
            <article className="bg-white rounded-2xl shadow-sm border border-stone-200 overflow-hidden hover:shadow-md transition-shadow duration-300">
              <div className="p-6 sm:p-8">
                <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-cyan-100 text-cyan-900">
                    <Sparkles className="w-3.5 h-3.5 text-cyan-700" />
                    「大人の我が家」モダンリゾート・展望畳風呂と島旨グルメ
                  </span>
                  <div className="flex items-center gap-2">
                    <div className="flex items-center text-amber-500">
                      <Star className="w-4 h-4 fill-current" />
                      <span className="ml-1 text-sm font-bold text-stone-800">4.6</span>
                    </div>
                    <span className="text-xs text-stone-500">（クチコミ 518件）</span>
                  </div>
                </div>

                <h3 className="text-xl sm:text-2xl font-bold text-stone-900 mb-3 leading-snug">
                  <a 
                    href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F161276%2F161276.html" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="hover:text-cyan-700 transition-colors"
                  >
                    2. ホテル宮島別荘
                  </a>
                </h3>

                <p className="text-xs sm:text-sm text-stone-600 mb-6 flex items-start gap-1.5">
                  <MapPin className="w-4 h-4 text-rose-500 shrink-0 mt-0.5" />
                  <span>広島県廿日市市宮島町1165（アクセス：宮島口駅よりフェリーで約10分。宮島桟橋より徒歩1分）</span>
                </p>

                <div className="grid grid-cols-1 md:grid-cols-12 gap-6 mb-6">
                  <div className="md:col-span-5">
                    <div className="relative aspect-[4/3] rounded-xl overflow-hidden bg-stone-100 border border-stone-100 shadow-sm">
                      <Image
                        src="https://img.travel.rakuten.co.jp/share/HOTEL/161276/161276.jpg"
                        alt="ホテル宮島別荘"
                        fill
                        className="object-cover hover:scale-105 transition-transform duration-500"
                        sizes="(max-width: 768px) 100vw, 360px"
                      />
                    </div>
                  </div>

                  <div className="md:col-span-7 flex flex-col justify-between">
                    <div>
                      <h4 className="text-xs font-bold text-stone-500 uppercase tracking-wider mb-2">宿のハイライト・こだわり</h4>
                      <ul className="space-y-1.5 mb-4">
                        <li className="flex items-start text-xs sm:text-sm text-stone-700"><span className="w-1.5 h-1.5 rounded-full bg-cyan-600 mr-2 shrink-0 mt-1.5" /><span>宮島桟橋から徒歩1分！畳敷きの温もりあふれる展望大浴場「湯の美処」を完備</span></li>
                        <li className="flex items-start text-xs sm:text-sm text-stone-700"><span className="w-1.5 h-1.5 rounded-full bg-cyan-600 mr-2 shrink-0 mt-1.5" /><span>朝食フェス中国エリア1位に輝いた名物「島旨フレンチトースト」と地元野菜ビュッフェ</span></li>
                        <li className="flex items-start text-xs sm:text-sm text-stone-700"><span className="w-1.5 h-1.5 rounded-full bg-cyan-600 mr-2 shrink-0 mt-1.5" /><span>大人の寛ぎを追求したBarラウンジとフリードリンクの心地よいおもてなし</span></li>
                      </ul>
                    </div>

                    <div className="bg-stone-50 p-3.5 rounded-xl border border-stone-200/60 mt-2">
                      <div className="flex items-baseline justify-between">
                        <span className="text-xs text-stone-500 font-medium">宿泊目安（1名あたり）</span>
                        <span className="text-base sm:text-lg font-bold text-stone-900">¥30,250〜</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="space-y-4 pt-4 border-t border-stone-100">
                  <p className="text-xs sm:text-sm text-stone-700 leading-relaxed">
                    宮島桟橋の目の前に位置し、船を降りてすぐに荷物を預けて観光へと繰り出せる抜群のフットワークを誇るスタイリッシュなリゾートホテル。「大人の我が家」をコンセプトにした館内は、宮島格子や木と畳の温もりが心地よく調和したモダンな癒やし空間です。最上階の展望大浴場「湯の美処」は素足に優しい畳敷きの洗い場となっており、滑りにくく温かい配慮が好評。夕食は広島の旬の恵みをふんだんに使ったブッフェスタイルで、冬の主役である殻付き牡蠣料理や広島牛のロースト、地元の契約農家から届く新鮮な冬野菜の数々をオープンキッチンから出来立てで味わえます。
                  </p>

                  <div className="bg-cyan-50/40 p-4 rounded-xl border border-cyan-100/60">
                    <h5 className="text-xs font-bold text-cyan-950 mb-1 flex items-center gap-1.5">
                      <Award className="w-3.5 h-3.5 text-cyan-700" />
                      宿泊者の生の声・クチコミ抜粋
                    </h5>
                    <p className="text-xs text-stone-600 italic leading-relaxed">
                      「海側の絶景と広島牛ステーキに大満足海側の部屋だったんですがとてもいい眺めでした。フェリー乗り場も目の前で便利です。昼間と違い朝と夜は人も少なくのんびり散歩できました。夕食バイキングにはオプショ。」
                    </p>
                  </div>
                  <div className="pt-2">
                    <a
                      href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F161276%2F161276.html"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center w-full py-3 px-6 rounded-xl text-sm font-bold text-white bg-gradient-to-r from-cyan-700 to-slate-800 hover:from-cyan-800 hover:to-slate-900 shadow-sm hover:shadow transition-all group"
                    >
                      <span>ホテル宮島別荘 の宿泊プラン・空室状況を楽天トラベルで見る</span>
                      <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </a>
                  </div>
                </div>
              </div>
            </article>

            {/* ホテルカード 3 */}
            <article className="bg-white rounded-2xl shadow-sm border border-stone-200 overflow-hidden hover:shadow-md transition-shadow duration-300">
              <div className="p-6 sm:p-8">
                <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-cyan-100 text-cyan-900">
                    <Sparkles className="w-3.5 h-3.5 text-cyan-700" />
                    宮島桟橋と厳島神社の中間・瀬戸内海を望む純和風老舗宿
                  </span>
                  <div className="flex items-center gap-2">
                    <div className="flex items-center text-amber-500">
                      <Star className="w-4 h-4 fill-current" />
                      <span className="ml-1 text-sm font-bold text-stone-800">4.2</span>
                    </div>
                    <span className="text-xs text-stone-500">（クチコミ 1,073件）</span>
                  </div>
                </div>

                <h3 className="text-xl sm:text-2xl font-bold text-stone-900 mb-3 leading-snug">
                  <a 
                    href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F11125%2F11125.html" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="hover:text-cyan-700 transition-colors"
                  >
                    3. 宮島　神撰の宿　ホテルみや離宮
                  </a>
                </h3>

                <p className="text-xs sm:text-sm text-stone-600 mb-6 flex items-start gap-1.5">
                  <MapPin className="w-4 h-4 text-rose-500 shrink-0 mt-0.5" />
                  <span>広島県廿日市市宮島町849（アクセス：ＪＲ山陽本線宮島口駅下車、宮島口桟橋よりフェリーで１０分。宮島桟橋下船後、厳島神社方面へ徒歩5分／厳島神社まで徒歩約7分）</span>
                </p>

                <div className="grid grid-cols-1 md:grid-cols-12 gap-6 mb-6">
                  <div className="md:col-span-5">
                    <div className="relative aspect-[4/3] rounded-xl overflow-hidden bg-stone-100 border border-stone-100 shadow-sm">
                      <Image
                        src="https://img.travel.rakuten.co.jp/share/HOTEL/11125/11125.jpg"
                        alt="宮島　神撰の宿　ホテルみや離宮"
                        fill
                        className="object-cover hover:scale-105 transition-transform duration-500"
                        sizes="(max-width: 768px) 100vw, 360px"
                      />
                    </div>
                  </div>

                  <div className="md:col-span-7 flex flex-col justify-between">
                    <div>
                      <h4 className="text-xs font-bold text-stone-500 uppercase tracking-wider mb-2">宿のハイライト・こだわり</h4>
                      <ul className="space-y-1.5 mb-4">
                        <li className="flex items-start text-xs sm:text-sm text-stone-700"><span className="w-1.5 h-1.5 rounded-full bg-cyan-600 mr-2 shrink-0 mt-1.5" /><span>客室や展望大浴場から瀬戸内海の多島美と行き交うフェリーを望むシーサイドビュー</span></li>
                        <li className="flex items-start text-xs sm:text-sm text-stone-700"><span className="w-1.5 h-1.5 rounded-full bg-cyan-600 mr-2 shrink-0 mt-1.5" /><span>宮島名物の焼き牡蠣やふっくら香ばしい穴子飯、旬魚を味わう本格会席膳</span></li>
                        <li className="flex items-start text-xs sm:text-sm text-stone-700"><span className="w-1.5 h-1.5 rounded-full bg-cyan-600 mr-2 shrink-0 mt-1.5" /><span>朝夕の静寂に包まれた厳島神社の初詣や夕暮れライトアップ散策の一等拠点</span></li>
                      </ul>
                    </div>

                    <div className="bg-stone-50 p-3.5 rounded-xl border border-stone-200/60 mt-2">
                      <div className="flex items-baseline justify-between">
                        <span className="text-xs text-stone-500 font-medium">宿泊目安（1名あたり）</span>
                        <span className="text-base sm:text-lg font-bold text-stone-900">¥14,000〜</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="space-y-4 pt-4 border-t border-stone-100">
                  <p className="text-xs sm:text-sm text-stone-700 leading-relaxed">
                    宮島桟橋から厳島神社へと続く海岸通り沿いに位置し、朱塗りの神殿を思わせる風格ある外観が印象的な老舗温泉ホテル。海側の客室からは、穏やかな瀬戸内海と対岸の山並み、青い海を行き交うフェリーの情景をのんびりと眺めることができます。冬の宮島は、日帰りの観光客が島を後にした夕暮れ以降と早朝に真の魅力が現れます。ライトアップされた海上の大鳥居を静かに参拝し、宿に戻れば熱々の牡蠣土手鍋や焼き牡蠣、名物の穴子ご飯が待っています。展望大浴場で潮風を感じながら手足を伸ばせば、冬の厳島ならではの厳かな旅情が身体いっぱいに満ちていきます。
                  </p>

                  <div className="bg-cyan-50/40 p-4 rounded-xl border border-cyan-100/60">
                    <h5 className="text-xs font-bold text-cyan-950 mb-1 flex items-center gap-1.5">
                      <Award className="w-3.5 h-3.5 text-cyan-700" />
                      宿泊者の生の声・クチコミ抜粋
                    </h5>
                    <p className="text-xs text-stone-600 italic leading-relaxed">
                      「宮島の観光に最適、料理も美味しく快適清潔感があり綺麗なホテルでした。お料理も美味しく客室から鳥居が見え宮島宿泊にはぴったりなホテルです。スタッフさんの対応も気持ち良く、食事を配膳し。」
                    </p>
                  </div>
                  <div className="pt-2">
                    <a
                      href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F11125%2F11125.html"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center w-full py-3 px-6 rounded-xl text-sm font-bold text-white bg-gradient-to-r from-cyan-700 to-slate-800 hover:from-cyan-800 hover:to-slate-900 shadow-sm hover:shadow transition-all group"
                    >
                      <span>宮島　神撰の宿　ホテルみや離宮 の宿泊プラン・空室状況を楽天トラベルで見る</span>
                      <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </a>
                  </div>
                </div>
              </div>
            </article>

            {/* ホテルカード 4 */}
            <article className="bg-white rounded-2xl shadow-sm border border-stone-200 overflow-hidden hover:shadow-md transition-shadow duration-300">
              <div className="p-6 sm:p-8">
                <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-cyan-100 text-cyan-900">
                    <Sparkles className="w-3.5 h-3.5 text-cyan-700" />
                    宮島対岸・大鳥居を望む天然温泉露天と専属ナイトクルーズ
                  </span>
                  <div className="flex items-center gap-2">
                    <div className="flex items-center text-amber-500">
                      <Star className="w-4 h-4 fill-current" />
                      <span className="ml-1 text-sm font-bold text-stone-800">4.0</span>
                    </div>
                    <span className="text-xs text-stone-500">（クチコミ 2,081件）</span>
                  </div>
                </div>

                <h3 className="text-xl sm:text-2xl font-bold text-stone-900 mb-3 leading-snug">
                  <a 
                    href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F7754%2F7754.html" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="hover:text-cyan-700 transition-colors"
                  >
                    4. 安芸グランドホテル
                  </a>
                </h3>

                <p className="text-xs sm:text-sm text-stone-600 mb-6 flex items-start gap-1.5">
                  <MapPin className="w-4 h-4 text-rose-500 shrink-0 mt-0.5" />
                  <span>広島県廿日市市宮島口西1-1-17（アクセス：宮島口駅(JR・広電)からタクシーで約3分。JR宮島口駅から無料送迎バス有り《30分間隔／8時～14時 15時～19時》）</span>
                </p>

                <div className="grid grid-cols-1 md:grid-cols-12 gap-6 mb-6">
                  <div className="md:col-span-5">
                    <div className="relative aspect-[4/3] rounded-xl overflow-hidden bg-stone-100 border border-stone-100 shadow-sm">
                      <Image
                        src="https://img.travel.rakuten.co.jp/share/HOTEL/7754/7754.jpg"
                        alt="安芸グランドホテル"
                        fill
                        className="object-cover hover:scale-105 transition-transform duration-500"
                        sizes="(max-width: 768px) 100vw, 360px"
                      />
                    </div>
                  </div>

                  <div className="md:col-span-7 flex flex-col justify-between">
                    <div>
                      <h4 className="text-xs font-bold text-stone-500 uppercase tracking-wider mb-2">宿のハイライト・こだわり</h4>
                      <ul className="space-y-1.5 mb-4">
                        <li className="flex items-start text-xs sm:text-sm text-stone-700"><span className="w-1.5 h-1.5 rounded-full bg-cyan-600 mr-2 shrink-0 mt-1.5" /><span>宮島の全景と厳島神社大鳥居を対岸から一望するリゾートホテル</span></li>
                        <li className="flex items-start text-xs sm:text-sm text-stone-700"><span className="w-1.5 h-1.5 rounded-full bg-cyan-600 mr-2 shrink-0 mt-1.5" /><span>宿泊者限定！夜の大鳥居を間近に拝観するホテル専用ナイトクルーズ船を毎夜運航</span></li>
                        <li className="flex items-start text-xs sm:text-sm text-stone-700"><span className="w-1.5 h-1.5 rounded-full bg-cyan-600 mr-2 shrink-0 mt-1.5" /><span>海を見下ろす天然温泉の展望露天風呂とプライベート貸切露天風呂を完備</span></li>
                      </ul>
                    </div>

                    <div className="bg-stone-50 p-3.5 rounded-xl border border-stone-200/60 mt-2">
                      <div className="flex items-baseline justify-between">
                        <span className="text-xs text-stone-500 font-medium">宿泊目安（1名あたり）</span>
                        <span className="text-base sm:text-lg font-bold text-stone-900">¥11,000〜</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="space-y-4 pt-4 border-t border-stone-100">
                  <p className="text-xs sm:text-sm text-stone-700 leading-relaxed">
                    宮島口から車で数分の海沿いに建ち、宮島を真正面に望むパノラマロケーションを誇る天然温泉リゾートホテル。最大の目玉は、ホテル専用の遊覧船で夜の海へ繰り出し、ライトアップされた厳島神社の大鳥居の間近まで航行する「ナイトクルーズ」。海面から見上げる大鳥居の神々しさは、この宿に泊まった者だけが味わえる一生の思い出です。対岸に位置するためJR宮島口駅からの無料送迎もあり、山陽本線や新幹線でのアクセスも極めてスムーズ。夕食は瀬戸内海の荒波で育った新鮮な真鯛や大粒の広島牡蠣、広島牛の陶板焼きなど、山海の贅を尽くしたディナーを心ゆくまで堪能できます。
                  </p>

                  <div className="bg-cyan-50/40 p-4 rounded-xl border border-cyan-100/60">
                    <h5 className="text-xs font-bold text-cyan-950 mb-1 flex items-center gap-1.5">
                      <Award className="w-3.5 h-3.5 text-cyan-700" />
                      宿泊者の生の声・クチコミ抜粋
                    </h5>
                    <p className="text-xs text-stone-600 italic leading-relaxed">
                      「プールと遊覧船からの鳥居に大満足ブールもあり楽しめました。遊覧船での厳島神社の鳥居を間近で観れて迫力があり良かったです。」
                    </p>
                  </div>
                  <div className="pt-2">
                    <a
                      href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F7754%2F7754.html"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center w-full py-3 px-6 rounded-xl text-sm font-bold text-white bg-gradient-to-r from-cyan-700 to-slate-800 hover:from-cyan-800 hover:to-slate-900 shadow-sm hover:shadow transition-all group"
                    >
                      <span>安芸グランドホテル の宿泊プラン・空室状況を楽天トラベルで見る</span>
                      <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </a>
                  </div>
                </div>
              </div>
            </article>

            {/* ホテルカード 5 */}
            <article className="bg-white rounded-2xl shadow-sm border border-stone-200 overflow-hidden hover:shadow-md transition-shadow duration-300">
              <div className="p-6 sm:p-8">
                <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-cyan-100 text-cyan-900">
                    <Sparkles className="w-3.5 h-3.5 text-cyan-700" />
                    創業300余年・厳島神社まで徒歩3分の格式ある数寄屋造り名館
                  </span>
                  <div className="flex items-center gap-2">
                    <div className="flex items-center text-amber-500">
                      <Star className="w-4 h-4 fill-current" />
                      <span className="ml-1 text-sm font-bold text-stone-800">4.6</span>
                    </div>
                    <span className="text-xs text-stone-500">（クチコミ 1,298件）</span>
                  </div>
                </div>

                <h3 className="text-xl sm:text-2xl font-bold text-stone-900 mb-3 leading-snug">
                  <a 
                    href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F18848%2F18848.html" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="hover:text-cyan-700 transition-colors"
                  >
                    5. 宮島グランドホテル　有もと
                  </a>
                </h3>

                <p className="text-xs sm:text-sm text-stone-600 mb-6 flex items-start gap-1.5">
                  <MapPin className="w-4 h-4 text-rose-500 shrink-0 mt-0.5" />
                  <span>広島県廿日市市宮島町南町364（アクセス：宮島口桟橋よりフェリーで１０分～宮島桟橋よりマイクロバスにて送迎）</span>
                </p>

                <div className="grid grid-cols-1 md:grid-cols-12 gap-6 mb-6">
                  <div className="md:col-span-5">
                    <div className="relative aspect-[4/3] rounded-xl overflow-hidden bg-stone-100 border border-stone-100 shadow-sm">
                      <Image
                        src="https://img.travel.rakuten.co.jp/share/HOTEL/18848/18848.jpg"
                        alt="宮島グランドホテル　有もと"
                        fill
                        className="object-cover hover:scale-105 transition-transform duration-500"
                        sizes="(max-width: 768px) 100vw, 360px"
                      />
                    </div>
                  </div>

                  <div className="md:col-span-7 flex flex-col justify-between">
                    <div>
                      <h4 className="text-xs font-bold text-stone-500 uppercase tracking-wider mb-2">宿のハイライト・こだわり</h4>
                      <ul className="space-y-1.5 mb-4">
                        <li className="flex items-start text-xs sm:text-sm text-stone-700"><span className="w-1.5 h-1.5 rounded-full bg-cyan-600 mr-2 shrink-0 mt-1.5" /><span>元禄時代より続く宮島最古参の歴史を誇る格式と心づくしのおもてなし</span></li>
                        <li className="flex items-start text-xs sm:text-sm text-stone-700"><span className="w-1.5 h-1.5 rounded-full bg-cyan-600 mr-2 shrink-0 mt-1.5" /><span>厳島神社入口までわずか徒歩3分！新春初詣や早朝参拝にこれ以上ない絶好の立地</span></li>
                        <li className="flex items-start text-xs sm:text-sm text-stone-700"><span className="w-1.5 h-1.5 rounded-full bg-cyan-600 mr-2 shrink-0 mt-1.5" /><span>数寄屋造りの洗練された客室と料理長が技を凝らす極上のかき会席料理</span></li>
                      </ul>
                    </div>

                    <div className="bg-stone-50 p-3.5 rounded-xl border border-stone-200/60 mt-2">
                      <div className="flex items-baseline justify-between">
                        <span className="text-xs text-stone-500 font-medium">宿泊目安（1名あたり）</span>
                        <span className="text-base sm:text-lg font-bold text-stone-900">¥28,500〜</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="space-y-4 pt-4 border-t border-stone-100">
                  <p className="text-xs sm:text-sm text-stone-700 leading-relaxed">
                    元禄年間に創業し、300年以上の長きにわたり宮島を訪れる貴人や旅人を迎え入れてきた格式高い老舗旅館。厳島神社の回廊入口まで徒歩約3分という特別なロケーションにあり、厳かな早朝の初詣や神職の祝詞が響く静寂の境内に一番乗りで参拝できます。宿の建物は伝統的な数寄屋造りの粋を極めた落ち着きある佇まいで、中庭には四季の風情が宿ります。大浴場「潮の湯」では、宮島の清冽な水で沸かした湯船に浸かり旅の疲れをリセット。夕食は本場宮島の冬の真牡蠣を様々な調理法で味わい尽くす特別会席で、ぷりっと弾ける焼き牡蠣や濃厚な牡蠣ご飯、霜降り広島牛のすき焼きなど、老舗ならではの確かな味覚を堪能できます。
                  </p>

                  <div className="bg-cyan-50/40 p-4 rounded-xl border border-cyan-100/60">
                    <h5 className="text-xs font-bold text-cyan-950 mb-1 flex items-center gap-1.5">
                      <Award className="w-3.5 h-3.5 text-cyan-700" />
                      宿泊者の生の声・クチコミ抜粋
                    </h5>
                    <p className="text-xs text-stone-600 italic leading-relaxed">
                      「厳島神社にすぐたどり着けるロケーションで、宮島観光にはオススメです。夕食朝食付きにしてよかったです。夜の散歩企画なども開催されていてサービス面でもオススメです。」
                    </p>
                  </div>
                  <div className="pt-2">
                    <a
                      href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F18848%2F18848.html"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center w-full py-3 px-6 rounded-xl text-sm font-bold text-white bg-gradient-to-r from-cyan-700 to-slate-800 hover:from-cyan-800 hover:to-slate-900 shadow-sm hover:shadow transition-all group"
                    >
                      <span>宮島グランドホテル　有もと の宿泊プラン・空室状況を楽天トラベルで見る</span>
                      <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </a>
                  </div>
                </div>
              </div>
            </article>
        </section>

        {/* ふるさと納税クーポンセクション */}
        <section className="max-w-4xl mx-auto px-4 mb-12">
          <div className="bg-gradient-to-r from-amber-600 via-orange-600 to-amber-700 rounded-2xl p-6 sm:p-8 text-white shadow-md">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="space-y-2 text-center md:text-left">
                <span className="inline-block px-3 py-1 rounded-full text-xs font-bold bg-white/20 border border-white/30">
                  楽天トラベル×ふるさと納税
                </span>
                <h3 className="text-xl sm:text-2xl font-bold">
                  広島県の宿に実質2,000円で泊まる賢い方法
                </h3>
                <p className="text-xs sm:text-sm text-white/90 max-w-xl leading-relaxed">
                  楽天ふるさと納税の宿泊クーポンを活用すれば、寄付額に応じて宿泊代金が大幅割引。予約済みの宿泊にも「あとから割引」が適用可能です。憧れの露天風呂付き客室や旬の特別会席プランもお手軽に予約できます。
                </p>
              </div>
              <a
                href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2Fspecial%2Ffurusato%2F"
                target="_blank"
                rel="noopener noreferrer"
                className="shrink-0 px-6 py-3 rounded-xl bg-white text-amber-700 font-bold text-sm shadow hover:bg-amber-50 transition-colors"
              >
                ふるさと納税対象宿を探す
              </a>
            </div>
          </div>
        </section>

        {/* よくある質問 (FAQ) */}
        <section className="max-w-4xl mx-auto px-4 mb-12">
          <div className="bg-white rounded-2xl p-6 sm:p-8 border border-stone-200 shadow-sm space-y-6">
            <h2 className="text-xl sm:text-2xl font-bold text-stone-900 flex items-center gap-2">
              <HelpCircle className="w-5 h-5 text-cyan-600" />
              冬の宮島・廿日市・宮浜温泉旅行でよくある質問（FAQ）
            </h2>

            <div className="space-y-4">
              <div className="p-4 rounded-xl bg-stone-50 border border-stone-200/70">
                <h3 className="font-bold text-stone-900 text-sm mb-2">Q1. 冬の宮島牡蠣の最も美味しい旬の時期はいつですか？</h3>
                <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                  広島・宮島牡蠣は海水温が下がる12月から2月にかけて身が最も肥え、グリコーゲンなどの旨味成分がピークに達します。ぷりっぷりで濃厚、クリーミーな味わいの焼き牡蠣や牡蠣鍋、牡蠣フライを本場で味わうなら12月〜1月が最高のベストシーズンです。例年2月上旬には宮島牡蠣まつりも開催されます。
                </p>
              </div>

              <div className="p-4 rounded-xl bg-stone-50 border border-stone-200/70">
                <h3 className="font-bold text-stone-900 text-sm mb-2">Q2. 厳島神社の初詣の混雑状況とおすすめの参拝時間帯は？</h3>
                <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                  正月三が日の日中（10時〜15時頃）はフェリーや参道が大変混雑します。島内の温泉宿に宿泊すれば、観光客の少ない早朝（朝6時30分の開門直後）や、夕暮れのライトアップ時（17時以降）に落ち着いて初詣を行うことができます。海上に浮かぶ大鳥居の朝焼けや夜景の荘厳さは宿泊者だけの特権です。
                </p>
              </div>

              <div className="p-4 rounded-xl bg-stone-50 border border-stone-200/70">
                <h3 className="font-bold text-stone-900 text-sm mb-2">Q3. 宮島島内に宿泊する場合のフェリーの最終便や注意点は？</h3>
                <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                  宮島口と宮島を結ぶフェリー（JR西日本宮島フェリーおよび宮島松大汽船）は約10〜15分間隔で頻繁に運航しています。宮島口発の最終便は夜22時台までありますが、夕食時間に間に合わせるため16時〜17時頃までのチェックインをおすすめします。宮島口桟橋周辺には駐車場も完備されています。
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 内部リンク・関連特集セクション */}
        <section className="max-w-4xl mx-auto px-4 mb-12">
          <div className="bg-stone-100 rounded-2xl p-6 sm:p-8 border border-stone-200 space-y-4">
            <h3 className="text-base sm:text-lg font-bold text-stone-900">あわせて読みたい広島県＆冬の厳選温泉特集</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              <Link href="/prefectures/hiroshima" className="p-3 bg-white rounded-xl border border-stone-200 text-xs font-semibold text-stone-800 hover:text-cyan-700 hover:border-cyan-300 transition flex items-center justify-between">
                <span>広島県のおすすめ観光名所＆温泉宿一覧</span>
                <ChevronRight className="w-3.5 h-3.5 text-stone-400" />
              </Link>
              <Link href="/features" className="p-3 bg-white rounded-xl border border-stone-200 text-xs font-semibold text-stone-800 hover:text-cyan-700 hover:border-cyan-300 transition flex items-center justify-between">
                <span>全国の季節・目的別旅行特集一覧</span>
                <ChevronRight className="w-3.5 h-3.5 text-stone-400" />
              </Link>
              <Link href="/furusato-tax-luxury-hotspring-ryokan-stay" className="p-3 bg-white rounded-xl border border-stone-200 text-xs font-semibold text-stone-800 hover:text-cyan-700 hover:border-cyan-300 transition flex items-center justify-between">
                <span>実質2,000円で泊まる名湯・高級温泉旅館ガイド</span>
                <ChevronRight className="w-3.5 h-3.5 text-stone-400" />
              </Link>
              <Link href="/furusato-tax-local-gourmet-inn-stay" className="p-3 bg-white rounded-xl border border-stone-200 text-xs font-semibold text-stone-800 hover:text-cyan-700 hover:border-cyan-300 transition flex items-center justify-between">
                <span>ご当地グルメを堪能する全国美食旅特集</span>
                <ChevronRight className="w-3.5 h-3.5 text-stone-400" />
              </Link>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
