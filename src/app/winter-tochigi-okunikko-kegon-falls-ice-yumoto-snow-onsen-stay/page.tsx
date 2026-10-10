import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ChevronRight, Star, MapPin, Sparkles, Snowflake, Mountain, Award, HelpCircle, ArrowRight } from 'lucide-react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: '【奥日光華厳の滝ブルーアイス氷瀑と乳白色硫黄泉】2026-2027年冬の日光湯元温泉！雪見露天ととちぎ和牛名宿5選',
  description: '落差97mの日本三名瀑が青く凍りつく「華厳の滝ブルーアイス」と中禅寺湖の雪景色！国民保養温泉地第1号の奥日光湯元温泉（濃厚乳白色硫黄泉）の雪見露天、とちぎ和牛と日光湯波会席を味わう至高の5宿。',
  keywords: ['栃木県温泉', '華厳滝', '奥日光・日光湯元温泉・中禅寺湖', '冬の旅行', '温泉宿5選', '楽天トラベル', 'ふるさと納税'],
  openGraph: {
    title: '【奥日光華厳の滝ブルーアイス氷瀑と乳白色硫黄泉】2026-2027年冬の日光湯元温泉！雪見露天ととちぎ和牛名宿5選',
    description: '落差97mの日本三名瀑が青く凍りつく「華厳の滝ブルーアイス」と中禅寺湖の雪景色！国民保養温泉地第1号の奥日光湯元温泉（濃厚乳白色硫黄泉）の雪見露天、とちぎ和牛と日光湯波会席を味わう至高の5宿。',
    type: 'article',
    url: 'https://croud-travel.pages.dev/winter-tochigi-okunikko-kegon-falls-ice-yumoto-snow-onsen-stay',
  }
};

export default function WinterFeaturePage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    'headline': '【奥日光華厳の滝ブルーアイス氷瀑と乳白色硫黄泉】2026-2027年冬の日光湯元温泉！雪見露天ととちぎ和牛名宿5選',
    'description': '落差97mの日本三名瀑が青く凍りつく「華厳の滝ブルーアイス」と中禅寺湖の雪景色！国民保養温泉地第1号の奥日光湯元温泉（濃厚乳白色硫黄泉）の雪見露天、とちぎ和牛と日光湯波会席を味わう至高の5宿。',
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
        'name': '華厳の滝が青く凍る「ブルーアイス氷瀑」の見頃時期は？',
        'acceptedAnswer': {
          '@type': 'Answer',
          'text': '日本三名瀑・華厳の滝が凍結する「氷瀑」は、例年1月中旬から2月中旬にかけての厳寒期に見られます。落差97mの岩壁から流れ落ちる細い無数の滝が一面青く凍りつき、まるで巨大な氷のシャンデリアのような神秘的な絶景を作り出します。エレベーターで行く観瀑台からの眺めが圧巻です。'
        }
      },
      {
        '@type': 'Question',
        'name': '日光湯元温泉の泉質と雪見風呂の魅力について教えてください。',
        'acceptedAnswer': {
          '@type': 'Answer',
          'text': '奥日光湯元温泉は、国民保養温泉地第1号に指定された日本有数の名湯です。泉質は含硫黄-カルシウム・ナトリウム-硫酸塩・炭酸水素塩温泉。湧出時は透明ですが空気に触れるとエメラルドグリーンや乳白色に濁るのが特徴で、高い保温効果と美肌効果を誇ります。標高1,500mの白銀の森に包まれた雪見露天風呂は格別の風情です。'
        }
      },
      {
        '@type': 'Question',
        'name': '冬の奥日光（いろは坂・中禅寺湖・湯元）へのアクセス注意点は？',
        'acceptedAnswer': {
          '@type': 'Answer',
          'text': '車で向かう場合、第二いろは坂（上り）および中禅寺湖から湯元温泉にかけては完全な圧雪・凍結路面になります。必ずスタッドレスタイヤまたはタイヤチェーンを装備してください。公共交通機関利用の場合は、JR日光駅・東武日光駅より東武バス「湯元温泉行き」が通年運行しており（約75〜85分）、雪道運転の不安なくアクセス可能です。'
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
      { '@type': 'ListItem', 'position': 3, 'name': '栃木県の観光・温泉宿', 'item': 'https://croud-travel.pages.dev/prefectures/tochigi/' },
      { '@type': 'ListItem', 'position': 4, 'name': '【奥日光華厳の滝ブルーアイス氷瀑と乳白色硫黄泉】2026-2027年冬の日光湯元温泉！雪見露天ととちぎ和牛名宿5選', 'item': 'https://croud-travel.pages.dev/winter-tochigi-okunikko-kegon-falls-ice-yumoto-snow-onsen-stay/' }
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
            <Link href="/prefectures/tochigi" className="hover:text-amber-700 transition">栃木県</Link>
            <ChevronRight className="w-3.5 h-3.5 text-stone-400 shrink-0" />
            <span className="text-stone-900 font-medium">奥日光・日光湯元温泉・中禅寺湖</span>
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
              【奥日光華厳の滝ブルーアイス氷瀑と乳白色硫黄泉】2026-2027年冬の日光湯元温泉！雪見露天ととちぎ和牛名宿5選
            </h1>
            <p className="text-sm md:text-base text-cyan-100/90 max-w-2xl mx-auto leading-relaxed">
              落差97mの日本三名瀑が青く凍りつく「華厳の滝ブルーアイス」と中禅寺湖の雪景色！国民保養温泉地第1号の奥日光湯元温泉（濃厚乳白色硫黄泉）の雪見露天、とちぎ和牛と日光湯波会席を味わう至高の5宿。
            </p>
          </div>
        </header>

        {/* 導入セクション */}
        <section className="max-w-4xl mx-auto px-4 py-8">
          <div className="bg-white rounded-2xl p-6 sm:p-8 border border-stone-200 shadow-sm space-y-4">
            <h2 className="text-xl sm:text-2xl font-bold text-stone-900 flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-cyan-600" />
              冬の栃木県・奥日光・日光湯元温泉・中禅寺湖が特別な理由
            </h2>
            <div className="grid md:grid-cols-3 gap-4 pt-2">
              <div className="bg-cyan-50/50 p-4 rounded-xl border border-cyan-100">
                <span className="text-xs font-bold text-cyan-800 block mb-1">01. 特徴</span>
                <h3 className="font-bold text-stone-900 text-sm mb-1">落差97mの日本三名瀑が青く凍りつく「華厳の滝ブルーアイス」</h3>
                <p className="text-xs text-stone-600 leading-relaxed">1月中旬から2月中旬の厳寒期、岸壁から染み出る細い無数の滝が一面凍結し、巨大な青い氷柱のシャンデリアのような姿に変貌します。観瀑台から見上げる氷瀑のスケールは息を呑む迫力です。</p>
              </div>
              <div className="bg-cyan-50/50 p-4 rounded-xl border border-cyan-100">
                <span className="text-xs font-bold text-cyan-800 block mb-1">02. 特徴</span>
                <h3 className="font-bold text-stone-900 text-sm mb-1">国民保養温泉地第1号！硫黄濃度日本屈指の「日光湯元温泉・乳白色濁り湯」</h3>
                <p className="text-xs text-stone-600 leading-relaxed">湯畑から湧き出る濃厚な硫黄泉は、湧出時は透明、空気に触れるとエメラルドグリーンや乳白色へと濁る神秘の名湯。湯花がたっぷり舞う湯船は温まり効果が高く、白銀のからまつ林を望む雪見露天は冬旅の最高峰です。</p>
              </div>
              <div className="bg-cyan-50/50 p-4 rounded-xl border border-cyan-100">
                <span className="text-xs font-bold text-cyan-800 block mb-1">03. 特徴</span>
                <h3 className="font-bold text-stone-900 text-sm mb-1">とろける霜降り「とちぎ和牛」と職人技が光る伝統の「日光湯波」会席</h3>
                <p className="text-xs text-stone-600 leading-relaxed">寒い冬だからこそ美味しい、とちぎ和牛のすき焼きや陶板焼きステーキ。さらに生湯波のお造りや湯波しゃぶしゃぶなど、日光ならではの身体に優しく滋味深い美食ディナーを堪能できます。</p>
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
                <h2 className="text-base md:text-lg font-bold tracking-wide">冬の観光名所ガイド：奥日光・華厳の滝（冬のブルーアイス氷瀑）</h2>
              </div>
              <span className="text-[11px] text-stone-300 bg-white/10 px-2.5 py-0.5 rounded-full border border-white/10">地域名所解説</span>
            </div>
            <div className="grid md:grid-cols-12 gap-6 p-6 items-center">
              <div className="md:col-span-5 relative h-56 md:h-64 rounded-xl overflow-hidden bg-stone-100 border border-stone-200/60 shadow-inner">
                <Image
                  src="https://thumb.wikimedia.org/wikipedia/commons/thumb/1/15/Kegon_Taki.jpg/1280px-Kegon_Taki.jpg?utm_source=ja.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
                  alt="奥日光・華厳の滝（冬のブルーアイス氷瀑）"
                  fill
                  className="object-cover hover:scale-105 transition duration-500"
                  sizes="(max-width: 768px) 100vw, 400px"
                />
                <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/75 to-transparent p-2 text-right">
                  <span className="text-[10px] text-white/90">写真出典: Wikimedia Commons</span>
                </div>
              </div>
              <div className="md:col-span-7 space-y-3">
                <h3 className="text-lg md:text-xl font-bold text-stone-900 leading-snug">奥日光・華厳の滝（冬のブルーアイス氷瀑）の歴史と見どころ</h3>
                <p className="text-xs md:text-sm text-stone-600 leading-relaxed">華厳滝（けごんのたき）は、栃木県日光市にある、落差97メートルの滝。中禅寺湖から流れ出る大尻川（おおじりがわ）が、平常時の水量では幅7メートルにわたり岸壁を落下する。袋田の滝（茨城県）、那智滝（和歌山県）とともに「日本三名瀑」の一つとされる景勝地、観光地である。霧降の滝や裏見滝と合わせて日光三名瀑とも、湯滝や竜頭の滝と合わせて奥日光三名瀑とも言われ、日光・奥日光の三名瀑を合わせて日光五名瀑と称されることもある。 発見者は勝道上人と伝えられ、仏教経典の『華厳経』から名づけられた…</p>
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
              奥日光・日光湯元温泉・中禅寺湖 厳選の温泉＆リゾート宿5選
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
                    湯の湖畔の静寂・日本最大級のエメラルド濁り湯大露天風呂
                  </span>
                  <div className="flex items-center gap-2">
                    <div className="flex items-center text-amber-500">
                      <Star className="w-4 h-4 fill-current" />
                      <span className="ml-1 text-sm font-bold text-stone-800">4.6</span>
                    </div>
                    <span className="text-xs text-stone-500">（クチコミ 594件）</span>
                  </div>
                </div>

                <h3 className="text-xl sm:text-2xl font-bold text-stone-900 mb-3 leading-snug">
                  <a 
                    href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F15755%2F15755.html" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="hover:text-cyan-700 transition-colors"
                  >
                    1. 日光湯元温泉　奥日光　森のホテル
                  </a>
                </h3>

                <p className="text-xs sm:text-sm text-stone-600 mb-6 flex items-start gap-1.5">
                  <MapPin className="w-4 h-4 text-rose-500 shrink-0 mt-0.5" />
                  <span>栃木県日光市湯元2551（アクセス：東武・JR日光駅～バス75分～湯元温泉バスターミナル～徒歩2分/日光宇都宮道路清滝ICより約45分 日光東照宮～車60分）</span>
                </p>

                <div className="grid grid-cols-1 md:grid-cols-12 gap-6 mb-6">
                  <div className="md:col-span-5">
                    <div className="relative aspect-[4/3] rounded-xl overflow-hidden bg-stone-100 border border-stone-100 shadow-sm">
                      <Image
                        src="https://img.travel.rakuten.co.jp/share/HOTEL/15755/15755.jpg"
                        alt="日光湯元温泉　奥日光　森のホテル"
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
                        <li className="flex items-start text-xs sm:text-sm text-stone-700"><span className="w-1.5 h-1.5 rounded-full bg-cyan-600 mr-2 shrink-0 mt-1.5" /><span>国民保養温泉地第1号！硫黄濃度日本屈指の源泉掛け流し乳白色・翠緑色の露天風呂</span></li>
                        <li className="flex items-start text-xs sm:text-sm text-stone-700"><span className="w-1.5 h-1.5 rounded-full bg-cyan-600 mr-2 shrink-0 mt-1.5" /><span>北欧風の洗練された木造建築と中庭の雪景色を望む足湯テラス</span></li>
                        <li className="flex items-start text-xs sm:text-sm text-stone-700"><span className="w-1.5 h-1.5 rounded-full bg-cyan-600 mr-2 shrink-0 mt-1.5" /><span>極上のとちぎ和牛フィレ肉と手作り日光湯波を盛り込んだ豪華創作会席</span></li>
                      </ul>
                    </div>

                    <div className="bg-stone-50 p-3.5 rounded-xl border border-stone-200/60 mt-2">
                      <div className="flex items-baseline justify-between">
                        <span className="text-xs text-stone-500 font-medium">宿泊目安（1名あたり）</span>
                        <span className="text-base sm:text-lg font-bold text-stone-900">¥23,000〜</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="space-y-4 pt-4 border-t border-stone-100">
                  <p className="text-xs sm:text-sm text-stone-700 leading-relaxed">
                    標高約1,500m、白銀の湯の湖の森に静かに佇む北欧スタイルの上質なマウンテンリゾート。宿の一番の自慢は、日光湯元温泉の豊富な自家源泉を惜しみなく注ぎ込む日本最大級の広さを誇る大露天風呂「森の湯」。湧出時は無色透明な湯が、空気に触れることでエメラルドグリーンから白濁した乳白色へと変化する神秘の硫黄泉で、濃厚な湯花が舞う湯船に身を沈めれば、極寒の奥日光散策で冷え切った身体が芯から解きほぐされます。夕食は地産地消にこだわり、とろけるような肉質の「とちぎ和牛」の陶板焼きや、伝統の技が光る日光生湯波、寒締め高原野菜を取り入れた月替わりの創作会席。雪に包まれた静寂の森で、日常の喧騒を完全に忘れる贅沢なひとときを約束します。
                  </p>

                  <div className="bg-cyan-50/40 p-4 rounded-xl border border-cyan-100/60">
                    <h5 className="text-xs font-bold text-cyan-950 mb-1 flex items-center gap-1.5">
                      <Award className="w-3.5 h-3.5 text-cyan-700" />
                      宿泊者の生の声・クチコミ抜粋
                    </h5>
                    <p className="text-xs text-stone-600 italic leading-relaxed">
                      「丁寧な接客と美味しい夕食、にごり湯に満足全体的に丁寧な接客でした。夕食は、手が掛かった料理で美味しかったです。朝食は一般的なものでした。温泉は奥日光のにごり湯で、他のホテル同様に満足するもので。」
                    </p>
                  </div>
                  <div className="pt-2">
                    <a
                      href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F15755%2F15755.html"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center w-full py-3 px-6 rounded-xl text-sm font-bold text-white bg-gradient-to-r from-cyan-700 to-slate-800 hover:from-cyan-800 hover:to-slate-900 shadow-sm hover:shadow transition-all group"
                    >
                      <span>日光湯元温泉　奥日光　森のホテル の宿泊プラン・空室状況を楽天トラベルで見る</span>
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
                    標高1,500mからまつ林の雪景色・囲炉裏会席と白濁名湯
                  </span>
                  <div className="flex items-center gap-2">
                    <div className="flex items-center text-amber-500">
                      <Star className="w-4 h-4 fill-current" />
                      <span className="ml-1 text-sm font-bold text-stone-800">4.1</span>
                    </div>
                    <span className="text-xs text-stone-500">（クチコミ 1,162件）</span>
                  </div>
                </div>

                <h3 className="text-xl sm:text-2xl font-bold text-stone-900 mb-3 leading-snug">
                  <a 
                    href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F135482%2F135482.html" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="hover:text-cyan-700 transition-colors"
                  >
                    2. 日光湯元温泉　日光グランドホテル　ほのかな宿樹林
                  </a>
                </h3>

                <p className="text-xs sm:text-sm text-stone-600 mb-6 flex items-start gap-1.5">
                  <MapPin className="w-4 h-4 text-rose-500 shrink-0 mt-0.5" />
                  <span>栃木県日光市湯元2549-7（アクセス：東武日光駅バス湯元温泉行下車5分　日光東照宮車60分）</span>
                </p>

                <div className="grid grid-cols-1 md:grid-cols-12 gap-6 mb-6">
                  <div className="md:col-span-5">
                    <div className="relative aspect-[4/3] rounded-xl overflow-hidden bg-stone-100 border border-stone-100 shadow-sm">
                      <Image
                        src="https://img.travel.rakuten.co.jp/share/HOTEL/135482/135482.jpg"
                        alt="日光湯元温泉　日光グランドホテル　ほのかな宿樹林"
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
                        <li className="flex items-start text-xs sm:text-sm text-stone-700"><span className="w-1.5 h-1.5 rounded-full bg-cyan-600 mr-2 shrink-0 mt-1.5" /><span>からまつの原生林に囲まれた静寂の一軒宿！一面の銀世界を一望する雪見露天風呂</span></li>
                        <li className="flex items-start text-xs sm:text-sm text-stone-700"><span className="w-1.5 h-1.5 rounded-full bg-cyan-600 mr-2 shrink-0 mt-1.5" /><span>毎分豊富な湯量を誇る源泉掛け流しの硫黄泉を24時間いつでも堪能</span></li>
                        <li className="flex items-start text-xs sm:text-sm text-stone-700"><span className="w-1.5 h-1.5 rounded-full bg-cyan-600 mr-2 shrink-0 mt-1.5" /><span>囲炉裏端で香ばしく焼き上げる川魚の塩焼きや栃木の山の幸会席</span></li>
                      </ul>
                    </div>

                    <div className="bg-stone-50 p-3.5 rounded-xl border border-stone-200/60 mt-2">
                      <div className="flex items-baseline justify-between">
                        <span className="text-xs text-stone-500 font-medium">宿泊目安（1名あたり）</span>
                        <span className="text-base sm:text-lg font-bold text-stone-900">¥11,500〜</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="space-y-4 pt-4 border-t border-stone-100">
                  <p className="text-xs sm:text-sm text-stone-700 leading-relaxed">
                    湯元温泉のからまつ林に囲まれ、冬になるとあたり一面が深いパウダースノーに覆われる高原の一軒宿。男女別の大浴場と露天風呂には、湯元温泉の源泉地から引湯する濃厚な含硫黄-カルシウム・ナトリウム-硫酸塩・炭酸水素塩温泉が絶え間なく掛け流されています。露天風呂の縁に積もる真っ白な雪と、エメラルドグリーンから乳白色に濁る名湯とのコントラストは冬旅の真骨頂。夕食は素朴ながらも滋味あふれる山の恵み会席で、香ばしいイワナの塩焼きや栃木県産豚の雪見鍋、手作りの湯波料理など、身体を内側からぽかぽかと温めてくれるおもてなし料理が並びます。
                  </p>

                  <div className="bg-cyan-50/40 p-4 rounded-xl border border-cyan-100/60">
                    <h5 className="text-xs font-bold text-cyan-950 mb-1 flex items-center gap-1.5">
                      <Award className="w-3.5 h-3.5 text-cyan-700" />
                      宿泊者の生の声・クチコミ抜粋
                    </h5>
                    <p className="text-xs text-stone-600 italic leading-relaxed">
                      「夕食で熱燗を注文したのですが無いと言われ冷やならあると言われました...それを温めてもらいたいと言ったらしふしぶ温めて来ました。」
                    </p>
                  </div>
                  <div className="pt-2">
                    <a
                      href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F135482%2F135482.html"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center w-full py-3 px-6 rounded-xl text-sm font-bold text-white bg-gradient-to-r from-cyan-700 to-slate-800 hover:from-cyan-800 hover:to-slate-900 shadow-sm hover:shadow transition-all group"
                    >
                      <span>日光湯元温泉　日光グランドホテル　ほのかな宿樹林 の宿泊プラン・空室状況を楽天トラベルで見る</span>
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
                    木の温もり溢れるアットホーム宿・無料貸切内湯と乳白色露天
                  </span>
                  <div className="flex items-center gap-2">
                    <div className="flex items-center text-amber-500">
                      <Star className="w-4 h-4 fill-current" />
                      <span className="ml-1 text-sm font-bold text-stone-800">4.1</span>
                    </div>
                    <span className="text-xs text-stone-500">（クチコミ 373件）</span>
                  </div>
                </div>

                <h3 className="text-xl sm:text-2xl font-bold text-stone-900 mb-3 leading-snug">
                  <a 
                    href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F111168%2F111168.html" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="hover:text-cyan-700 transition-colors"
                  >
                    3. 日光湯元温泉　スパビレッジ　カマヤ
                  </a>
                </h3>

                <p className="text-xs sm:text-sm text-stone-600 mb-6 flex items-start gap-1.5">
                  <MapPin className="w-4 h-4 text-rose-500 shrink-0 mt-0.5" />
                  <span>栃木県日光市湯元2549-28（アクセス：ＪＲ・東武　日光駅より東武バス湯元温泉行で８０分、「湯元温泉」バス停下車で徒歩１分）</span>
                </p>

                <div className="grid grid-cols-1 md:grid-cols-12 gap-6 mb-6">
                  <div className="md:col-span-5">
                    <div className="relative aspect-[4/3] rounded-xl overflow-hidden bg-stone-100 border border-stone-100 shadow-sm">
                      <Image
                        src="https://img.travel.rakuten.co.jp/share/HOTEL/111168/111168.jpg"
                        alt="日光湯元温泉　スパビレッジ　カマヤ"
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
                        <li className="flex items-start text-xs sm:text-sm text-stone-700"><span className="w-1.5 h-1.5 rounded-full bg-cyan-600 mr-2 shrink-0 mt-1.5" /><span>湯元温泉街の中心に位置し、良質な硫黄泉を贅沢に注ぐアットホームな湯宿</span></li>
                        <li className="flex items-start text-xs sm:text-sm text-stone-700"><span className="w-1.5 h-1.5 rounded-full bg-cyan-600 mr-2 shrink-0 mt-1.5" /><span>空いていれば何度でも無料で利用できる総木造の貸切温泉風呂を完備</span></li>
                        <li className="flex items-start text-xs sm:text-sm text-stone-700"><span className="w-1.5 h-1.5 rounded-full bg-cyan-600 mr-2 shrink-0 mt-1.5" /><span>若女将・板前が心を込めて手作りする日光湯波と季節の家庭風郷土料理</span></li>
                      </ul>
                    </div>

                    <div className="bg-stone-50 p-3.5 rounded-xl border border-stone-200/60 mt-2">
                      <div className="flex items-baseline justify-between">
                        <span className="text-xs text-stone-500 font-medium">宿泊目安（1名あたり）</span>
                        <span className="text-base sm:text-lg font-bold text-stone-900">プランにより変動（要確認）</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="space-y-4 pt-4 border-t border-stone-100">
                  <p className="text-xs sm:text-sm text-stone-700 leading-relaxed">
                    日光湯元温泉の湯畑にほど近い場所に佇み、温かなおもてなしと良質な温泉で高いリピート率を誇る全客室数控えめな隠れ家的温泉宿。館内にはヒノキの香りが漂う貸切風呂があり、乳白色の濃厚な硫黄泉をプライベートな空間で気兼ねなく満喫できます。硫黄の香りに包まれる湯船からは窓の外にしんしんと降る雪を眺めることができ、湯上がり後も肌につるつるとした潤いとしっとり感が持続。夕食は日光名物の生湯波を使ったお造りや煮物、地元栃木の銘柄肉を使った温かな鍋など、手作りの温もりが染み渡る心づくしの会席料理。気取らない一人旅やカップルの雪見温泉旅行に最適です。
                  </p>

                  <div className="pt-2">
                    <a
                      href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F111168%2F111168.html"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center w-full py-3 px-6 rounded-xl text-sm font-bold text-white bg-gradient-to-r from-cyan-700 to-slate-800 hover:from-cyan-800 hover:to-slate-900 shadow-sm hover:shadow transition-all group"
                    >
                      <span>日光湯元温泉　スパビレッジ　カマヤ の宿泊プラン・空室状況を楽天トラベルで見る</span>
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
                    中禅寺湖畔の森に佇む木造クラシックホテル・白濁露天「空ぶろ」
                  </span>
                  <div className="flex items-center gap-2">
                    <div className="flex items-center text-amber-500">
                      <Star className="w-4 h-4 fill-current" />
                      <span className="ml-1 text-sm font-bold text-stone-800">4.5</span>
                    </div>
                    <span className="text-xs text-stone-500">（クチコミ 905件）</span>
                  </div>
                </div>

                <h3 className="text-xl sm:text-2xl font-bold text-stone-900 mb-3 leading-snug">
                  <a 
                    href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F28759%2F28759.html" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="hover:text-cyan-700 transition-colors"
                  >
                    4. 日光中禅寺温泉　中禅寺金谷ホテル
                  </a>
                </h3>

                <p className="text-xs sm:text-sm text-stone-600 mb-6 flex items-start gap-1.5">
                  <MapPin className="w-4 h-4 text-rose-500 shrink-0 mt-0.5" />
                  <span>栃木県日光市中宮祠2482（アクセス：日光宇都宮有料道路清滝IC～車で約25分（いろは坂経由）東武日光駅～無料送迎バス有（運行時間変動有）日光東照宮迄車40分）</span>
                </p>

                <div className="grid grid-cols-1 md:grid-cols-12 gap-6 mb-6">
                  <div className="md:col-span-5">
                    <div className="relative aspect-[4/3] rounded-xl overflow-hidden bg-stone-100 border border-stone-100 shadow-sm">
                      <Image
                        src="https://img.travel.rakuten.co.jp/share/HOTEL/28759/28759.jpg"
                        alt="日光中禅寺温泉　中禅寺金谷ホテル"
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
                        <li className="flex items-start text-xs sm:text-sm text-stone-700"><span className="w-1.5 h-1.5 rounded-full bg-cyan-600 mr-2 shrink-0 mt-1.5" /><span>中禅寺湖のほとり、木立の中に佇む創業80余年の歴史ある木造クラシックホテル</span></li>
                        <li className="flex items-start text-xs sm:text-sm text-stone-700"><span className="w-1.5 h-1.5 rounded-full bg-cyan-600 mr-2 shrink-0 mt-1.5" /><span>奥日光湯元温泉からパイプで直接引湯する白濁硫黄泉の露天風呂「空ぶろ」</span></li>
                        <li className="flex items-start text-xs sm:text-sm text-stone-700"><span className="w-1.5 h-1.5 rounded-full bg-cyan-600 mr-2 shrink-0 mt-1.5" /><span>伝統の金谷ホテルレシピを受け継ぐ本格クラシックフレンチディナー</span></li>
                      </ul>
                    </div>

                    <div className="bg-stone-50 p-3.5 rounded-xl border border-stone-200/60 mt-2">
                      <div className="flex items-baseline justify-between">
                        <span className="text-xs text-stone-500 font-medium">宿泊目安（1名あたり）</span>
                        <span className="text-base sm:text-lg font-bold text-stone-900">¥18,600〜</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="space-y-4 pt-4 border-t border-stone-100">
                  <p className="text-xs sm:text-sm text-stone-700 leading-relaxed">
                    日本屈指のクラシックホテル「日光金谷ホテル」の別館として、中禅寺湖畔の豊かな自然林の中に昭和初期に誕生した名門リゾート。カナディアン杉を使った山小屋風の木造建築は、暖炉のあるラウンジや格調高いメインダイニングなど、どこを切り取っても絵になる優雅な佇まいです。ホテル自慢の温泉露天風呂「空ぶろ（からぶろ）」は、約12km離れた奥日光湯元の源泉から引き湯した良質な白濁硫黄泉。夜には頭上に冬の澄み切った満天の星が瞬き、湖畔の静けさと相まって至高のリラクゼーションを提供します。夕食は伝統の技を受け継ぐ金谷フレンチで、日光虹鱒のソテーや国産牛のローストなど、歴史の重みを感じる優美な一皿一皿を堪能できます。
                  </p>

                  <div className="bg-cyan-50/40 p-4 rounded-xl border border-cyan-100/60">
                    <h5 className="text-xs font-bold text-cyan-950 mb-1 flex items-center gap-1.5">
                      <Award className="w-3.5 h-3.5 text-cyan-700" />
                      宿泊者の生の声・クチコミ抜粋
                    </h5>
                    <p className="text-xs text-stone-600 italic leading-relaxed">
                      「みんなのことまんぞく到着時のお出迎えから、フロントスタッフの丁寧で細やかな説明まで、とても親切に対応していただきました。歴史を感じるホテルではありますが、館内はとても清潔に手入れされており、何。」
                    </p>
                  </div>
                  <div className="pt-2">
                    <a
                      href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F28759%2F28759.html"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center w-full py-3 px-6 rounded-xl text-sm font-bold text-white bg-gradient-to-r from-cyan-700 to-slate-800 hover:from-cyan-800 hover:to-slate-900 shadow-sm hover:shadow transition-all group"
                    >
                      <span>日光中禅寺温泉　中禅寺金谷ホテル の宿泊プラン・空室状況を楽天トラベルで見る</span>
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
                    自家源泉2本保有・総檜造りの雪見露天風呂と日光湯波しゃぶ
                  </span>
                  <div className="flex items-center gap-2">
                    <div className="flex items-center text-amber-500">
                      <Star className="w-4 h-4 fill-current" />
                      <span className="ml-1 text-sm font-bold text-stone-800">4.5</span>
                    </div>
                    <span className="text-xs text-stone-500">（クチコミ 1,089件）</span>
                  </div>
                </div>

                <h3 className="text-xl sm:text-2xl font-bold text-stone-900 mb-3 leading-snug">
                  <a 
                    href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F8337%2F8337.html" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="hover:text-cyan-700 transition-colors"
                  >
                    5. 奥日光湯元温泉　奥日光高原ホテル
                  </a>
                </h3>

                <p className="text-xs sm:text-sm text-stone-600 mb-6 flex items-start gap-1.5">
                  <MapPin className="w-4 h-4 text-rose-500 shrink-0 mt-0.5" />
                  <span>栃木県日光市湯元2549-6（アクセス：お車で、日光道清滝I.Cより40分、関越道沼田I.Cより90分(冬季閉鎖)。電車・バスで、日光駅より路線バスで80分。）</span>
                </p>

                <div className="grid grid-cols-1 md:grid-cols-12 gap-6 mb-6">
                  <div className="md:col-span-5">
                    <div className="relative aspect-[4/3] rounded-xl overflow-hidden bg-stone-100 border border-stone-100 shadow-sm">
                      <Image
                        src="https://img.travel.rakuten.co.jp/share/HOTEL/8337/8337.jpg"
                        alt="奥日光湯元温泉　奥日光高原ホテル"
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
                        <li className="flex items-start text-xs sm:text-sm text-stone-700"><span className="w-1.5 h-1.5 rounded-full bg-cyan-600 mr-2 shrink-0 mt-1.5" /><span>湯元温泉でも希少な2本の自家源泉を所有し、圧倒的な湯量と鮮度を誇る名湯</span></li>
                        <li className="flex items-start text-xs sm:text-sm text-stone-700"><span className="w-1.5 h-1.5 rounded-full bg-cyan-600 mr-2 shrink-0 mt-1.5" /><span>木の香りに癒やされる総檜造りの大浴場「中庭風呂」とダイナミックな雪見露天</span></li>
                        <li className="flex items-start text-xs sm:text-sm text-stone-700"><span className="w-1.5 h-1.5 rounded-full bg-cyan-600 mr-2 shrink-0 mt-1.5" /><span>日光名物「引き上げ湯波」のしゃぶしゃぶやとちぎ霜降高原牛の陶板焼き</span></li>
                      </ul>
                    </div>

                    <div className="bg-stone-50 p-3.5 rounded-xl border border-stone-200/60 mt-2">
                      <div className="flex items-baseline justify-between">
                        <span className="text-xs text-stone-500 font-medium">宿泊目安（1名あたり）</span>
                        <span className="text-base sm:text-lg font-bold text-stone-900">¥8,800〜</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="space-y-4 pt-4 border-t border-stone-100">
                  <p className="text-xs sm:text-sm text-stone-700 leading-relaxed">
                    日光国立公園の最奥部、標高1,500mの白根山山麓に位置する大型の温泉高原ホテル。この宿最大の強みは、敷地内に湧く2本の自家源泉。湯量豊富な乳白色の硫黄泉が広々とした総檜造りの大浴場や開放的な露天風呂へと贅沢に掛け流されており、日によって緑がかった乳白色や青みを帯びた白色へと表情を変える天然温泉の奥深さを味わえます。冬の露天風呂では、頭や肩に舞い散る雪を受けながらの雪見風呂が最高に贅沢。夕食は日光名産の引き上げ湯波をさっと出汁にくぐらせていただく湯波しゃぶしゃぶや、とちぎ霜降高原牛のステーキなど、滋味豊かな北関東の美味を心ゆくまで堪能できます。
                  </p>

                  <div className="bg-cyan-50/40 p-4 rounded-xl border border-cyan-100/60">
                    <h5 className="text-xs font-bold text-cyan-950 mb-1 flex items-center gap-1.5">
                      <Award className="w-3.5 h-3.5 text-cyan-700" />
                      宿泊者の生の声・クチコミ抜粋
                    </h5>
                    <p className="text-xs text-stone-600 italic leading-relaxed">
                      「6回目の滞在、お湯も料理も最高で癒やされる6回目の宿泊ですスタッフの方もきさくで優しく、館内は清潔、お湯もお料理も最高!静かな奥湯元こちらのホテルにはただただ癒されまクチコミの詳細。」
                    </p>
                  </div>
                  <div className="pt-2">
                    <a
                      href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F8337%2F8337.html"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center w-full py-3 px-6 rounded-xl text-sm font-bold text-white bg-gradient-to-r from-cyan-700 to-slate-800 hover:from-cyan-800 hover:to-slate-900 shadow-sm hover:shadow transition-all group"
                    >
                      <span>奥日光湯元温泉　奥日光高原ホテル の宿泊プラン・空室状況を楽天トラベルで見る</span>
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
                  栃木県の宿に実質2,000円で泊まる賢い方法
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
              冬の奥日光・日光湯元温泉・中禅寺湖旅行でよくある質問（FAQ）
            </h2>

            <div className="space-y-4">
              <div className="p-4 rounded-xl bg-stone-50 border border-stone-200/70">
                <h3 className="font-bold text-stone-900 text-sm mb-2">Q1. 華厳の滝が青く凍る「ブルーアイス氷瀑」の見頃時期は？</h3>
                <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                  日本三名瀑・華厳の滝が凍結する「氷瀑」は、例年1月中旬から2月中旬にかけての厳寒期に見られます。落差97mの岩壁から流れ落ちる細い無数の滝が一面青く凍りつき、まるで巨大な氷のシャンデリアのような神秘的な絶景を作り出します。エレベーターで行く観瀑台からの眺めが圧巻です。
                </p>
              </div>

              <div className="p-4 rounded-xl bg-stone-50 border border-stone-200/70">
                <h3 className="font-bold text-stone-900 text-sm mb-2">Q2. 日光湯元温泉の泉質と雪見風呂の魅力について教えてください。</h3>
                <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                  奥日光湯元温泉は、国民保養温泉地第1号に指定された日本有数の名湯です。泉質は含硫黄-カルシウム・ナトリウム-硫酸塩・炭酸水素塩温泉。湧出時は透明ですが空気に触れるとエメラルドグリーンや乳白色に濁るのが特徴で、高い保温効果と美肌効果を誇ります。標高1,500mの白銀の森に包まれた雪見露天風呂は格別の風情です。
                </p>
              </div>

              <div className="p-4 rounded-xl bg-stone-50 border border-stone-200/70">
                <h3 className="font-bold text-stone-900 text-sm mb-2">Q3. 冬の奥日光（いろは坂・中禅寺湖・湯元）へのアクセス注意点は？</h3>
                <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                  車で向かう場合、第二いろは坂（上り）および中禅寺湖から湯元温泉にかけては完全な圧雪・凍結路面になります。必ずスタッドレスタイヤまたはタイヤチェーンを装備してください。公共交通機関利用の場合は、JR日光駅・東武日光駅より東武バス「湯元温泉行き」が通年運行しており（約75〜85分）、雪道運転の不安なくアクセス可能です。
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 内部リンク・関連特集セクション */}
        <section className="max-w-4xl mx-auto px-4 mb-12">
          <div className="bg-stone-100 rounded-2xl p-6 sm:p-8 border border-stone-200 space-y-4">
            <h3 className="text-base sm:text-lg font-bold text-stone-900">あわせて読みたい栃木県＆冬の厳選温泉特集</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              <Link href="/prefectures/tochigi" className="p-3 bg-white rounded-xl border border-stone-200 text-xs font-semibold text-stone-800 hover:text-cyan-700 hover:border-cyan-300 transition flex items-center justify-between">
                <span>栃木県のおすすめ観光名所＆温泉宿一覧</span>
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
