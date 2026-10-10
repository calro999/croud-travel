import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ChevronRight, Star, MapPin, Sparkles, Snowflake, Mountain, Award, HelpCircle, ArrowRight } from 'lucide-react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: '極寒の奇跡ジュエリーアイスとモール温泉：2026-2027年冬の十勝川温泉＆極上サウナ宿5選',
  description: '太平洋の大津海岸に打ち上げられる透明な氷の結晶「ジュエリーアイス」！世界でも希少な琥珀色の美肌湯「十勝川モール温泉」と本格フィンランド式サウナ、十勝牛やラクレットチーズを堪能する極上冬宿5選。',
  keywords: ['北海道温泉', 'ジュエリーアイス', '十勝・十勝川温泉・帯広', '冬の旅行', '温泉宿5選', '楽天トラベル', 'ふるさと納税'],
  openGraph: {
    title: '極寒の奇跡ジュエリーアイスとモール温泉：2026-2027年冬の十勝川温泉＆極上サウナ宿5選',
    description: '太平洋の大津海岸に打ち上げられる透明な氷の結晶「ジュエリーアイス」！世界でも希少な琥珀色の美肌湯「十勝川モール温泉」と本格フィンランド式サウナ、十勝牛やラクレットチーズを堪能する極上冬宿5選。',
    type: 'article',
    url: 'https://croud-travel.pages.dev/winter-hokkaido-tokachi-jewelry-ice-mall-onsen-sauna-stay',
  }
};

export default function WinterFeaturePage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    'headline': '【極寒の奇跡ジュエリーアイスとモール温泉】2026-2027年冬の十勝川温泉＆極上サウナ宿5選',
    'description': '太平洋の大津海岸に打ち上げられる透明な氷の結晶「ジュエリーアイス」！世界でも希少な琥珀色の美肌湯「十勝川モール温泉」と本格フィンランド式サウナ、十勝牛やラクレットチーズを堪能する極上冬宿5選。',
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
        'name': 'ジュエリーアイスの見頃の時期と時間帯はいつですか？',
        'acceptedAnswer': {
          '@type': 'Answer',
          'text': '例年1月中旬から2月下旬にかけて、豊頃町の大津海岸で見られます。特に美しく輝くのは日の出直後の早朝（朝6時30分〜7時30分頃）で、朝日に照らされてオレンジや黄金色に輝くクリスタルガラスのような絶景が広がります。'
        }
      },
      {
        '@type': 'Question',
        'name': 'ジュエリーアイス観賞時の気温と必要な防寒着は？',
        'acceptedAnswer': {
          '@type': 'Answer',
          'text': '1月から2月の早朝の十勝・大津海岸は氷点下15度から氷点下20度以下まで冷え込みます。極寒の海風が吹き付けるため、防風・防水仕様の厚手ダウンジャケット、スノーブーツ、防寒手袋、ニット帽、ネックウォーマー、貼るカイロが必須です。スマホやカメラのバッテリーも寒さで急激に消耗するため予備カイロで保温してください。'
        }
      },
      {
        '@type': 'Question',
        'name': '十勝川温泉の「植物性モール温泉」とはどのようなお湯ですか？',
        'acceptedAnswer': {
          '@type': 'Answer',
          'text': '十勝川温泉のモール温泉は、太古のヨシなどの植物堆積層を通って湧出する世界でも極めて珍しい温泉です。植物性の有機物（フミン酸やフルボ酸）が豊富に含まれており、茶褐色・琥珀色の透明なお湯が特徴。入浴すると天然の化粧水のように肌がつるつるになり、高い保湿・保温効果を誇ります。北海道遺産にも認定されています。'
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
      { '@type': 'ListItem', 'position': 3, 'name': '北海道の観光・温泉宿', 'item': 'https://croud-travel.pages.dev/prefectures/hokkaido/' },
      { '@type': 'ListItem', 'position': 4, 'name': '【極寒の奇跡ジュエリーアイスとモール温泉】2026-2027年冬の十勝川温泉＆極上サウナ宿5選', 'item': 'https://croud-travel.pages.dev/winter-hokkaido-tokachi-jewelry-ice-mall-onsen-sauna-stay/' }
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
            <Link href="/prefectures/hokkaido" className="hover:text-amber-700 transition">北海道</Link>
            <ChevronRight className="w-3.5 h-3.5 text-stone-400 shrink-0" />
            <span className="text-stone-900 font-medium">十勝・十勝川温泉・帯広</span>
          </div>
        </nav>

        {/* ヒーローセクション */}
        <header className="relative bg-gradient-to-br from-slate-950 via-slate-900 to-indigo-950 text-white py-16 px-4 overflow-hidden">
          <div className="max-w-4xl mx-auto text-center space-y-4 relative z-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/20 text-cyan-200 text-xs font-semibold tracking-wider border border-cyan-400/30">
              <Snowflake className="w-3.5 h-3.5" />
              <span>冬の厳選旅行特集（11月・12月・1月）</span>
            </div>
            <h1 className="text-2xl md:text-4xl lg:text-5xl font-extrabold tracking-tight leading-snug">「極寒の奇跡ジュエリーアイスとモール温泉」2026-2027年冬の十勝川温泉＆極上サウナ宿5選</h1>
            <p className="text-sm md:text-base text-cyan-100/90 max-w-2xl mx-auto leading-relaxed">
              太平洋の大津海岸に打ち上げられる透明な氷の結晶「ジュエリーアイス」！世界でも希少な琥珀色の美肌湯「十勝川モール温泉」と本格フィンランド式サウナ、十勝牛やラクレットチーズを堪能する極上冬宿5選。
            </p>
          </div>
        </header>

        {/* 導入セクション */}
        <section className="max-w-4xl mx-auto px-4 py-8">
          <div className="bg-white rounded-2xl p-6 sm:p-8 border border-stone-200 shadow-sm space-y-4">
            <h2 className="text-xl sm:text-2xl font-bold text-stone-900 flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-cyan-600" />
              冬の北海道・十勝・十勝川温泉・帯広が特別な理由
            </h2>
            <div className="grid md:grid-cols-3 gap-4 pt-2">
              <div className="bg-cyan-50/50 p-4 rounded-xl border border-cyan-100">
                <span className="text-xs font-bold text-cyan-800 block mb-1">01. 特徴</span>
                <h3 className="font-bold text-stone-900 text-sm mb-1">太平洋の大津海岸に打ち上げられる、世界で唯一の氷の宝石「ジュエリーアイス」</h3>
                <p className="text-xs text-stone-600 leading-relaxed">十勝川を覆う氷が海へと流され、波に揉まれることで角が丸まり、純度の高いクリスタルのような姿で大津海岸へ打ち上がります。朝日に照らされ、オレンジや黄金色に輝く瞬間は息を呑む絶景です。</p>
              </div>
              <div className="bg-cyan-50/50 p-4 rounded-xl border border-cyan-100">
                <span className="text-xs font-bold text-cyan-800 block mb-1">02. 特徴</span>
                <h3 className="font-bold text-stone-900 text-sm mb-1">北海道遺産に認定された奇跡の「植物性モール温泉」</h3>
                <p className="text-xs text-stone-600 leading-relaxed">太古の葦や泥炭層を通って湧出するモール温泉は、植物由来のフミン酸や天然保湿成分がたっぷり。茶褐色のまろやかなお湯は「天然の化粧水」と呼ばれ、湯上がり後の肌が驚くほど滑らかになります。</p>
              </div>
              <div className="bg-cyan-50/50 p-4 rounded-xl border border-cyan-100">
                <span className="text-xs font-bold text-cyan-800 block mb-1">03. 特徴</span>
                <h3 className="font-bold text-stone-900 text-sm mb-1">「サウナの聖地・十勝」での本格フィンランド式ロウリュ体験</h3>
                <p className="text-xs text-stone-600 leading-relaxed">白樺のヴィヒタが香り、セルフロウリュが楽しめる本格サウナが十勝川温泉や帯広市内に集結。氷点下の澄み切った大気で行う外気浴は、ここでしか味わえない究極のディープリラックスをもたらします。</p>
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
                <h2 className="text-base md:text-lg font-bold tracking-wide">冬の観光名所ガイド：豊頃町・大津海岸のジュエリーアイス</h2>
              </div>
              <span className="text-[11px] text-stone-300 bg-white/10 px-2.5 py-0.5 rounded-full border border-white/10">地域名所解説</span>
            </div>
            <div className="grid md:grid-cols-12 gap-6 p-6 items-center">
              <div className="md:col-span-5 relative h-56 md:h-64 rounded-xl overflow-hidden bg-stone-100 border border-stone-200/60 shadow-inner">
                <Image
                  src="https://thumb.wikimedia.org/wikipedia/commons/thumb/4/40/Jewelry-Ice.jpg/1280px-Jewelry-Ice.jpg?utm_source=ja.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
                  alt="豊頃町・大津海岸のジュエリーアイス"
                  fill
                  className="object-cover hover:scale-105 transition duration-500"
                  sizes="(max-width: 768px) 100vw, 400px"
                />
                <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/75 to-transparent p-2 text-right">
                  <span className="text-[10px] text-white/90">写真出典: Wikimedia Commons</span>
                </div>
              </div>
              <div className="md:col-span-7 space-y-3">
                <h3 className="text-lg md:text-xl font-bold text-stone-900 leading-snug">豊頃町・大津海岸のジュエリーアイスの歴史と見どころ</h3>
                <p className="text-xs md:text-sm text-stone-600 leading-relaxed">ジュエリーアイス (Jewelry Ice) は、北海道十勝管内の中川郡豊頃町にある大津海岸で冬季に見られる氷塊。透明度が高く、光を浴びると宝石（ジュエリー）のように輝いて見えることからこの名で呼ばれる。 見ごろの時期は、その年の天候によっても変化するが、おおむね1月中旬から2月下旬頃まで。最盛期には海岸を埋めつくすほどの氷塊が見られることもある。</p>
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
              十勝・十勝川温泉・帯広 厳選の温泉＆リゾート宿5選
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
                    十勝川一望・最上級客室露天と琥珀色モール温泉
                  </span>
                  <div className="flex items-center gap-2">
                    <div className="flex items-center text-amber-500">
                      <Star className="w-4 h-4 fill-current" />
                      <span className="ml-1 text-sm font-bold text-stone-800">4.6</span>
                    </div>
                    <span className="text-xs text-stone-500">（クチコミ 1,449件）</span>
                  </div>
                </div>

                <h3 className="text-xl sm:text-2xl font-bold text-stone-900 mb-3 leading-snug">
                  <a 
                    href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F5818%2F5818.html" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="hover:text-cyan-700 transition-colors"
                  >
                    1. 十勝川温泉　第一ホテル
                  </a>
                </h3>

                <p className="text-xs sm:text-sm text-stone-600 mb-6 flex items-start gap-1.5">
                  <MapPin className="w-4 h-4 text-rose-500 shrink-0 mt-0.5" />
                  <span>北海道河東郡音更町十勝川温泉南12-1（アクセス：JR帯広駅より車で２０分。札幌より車で約3時間／札幌⇔[札幌北ＩＣ～音更帯広ＩＣ]⇔十勝川温泉）</span>
                </p>

                <div className="grid grid-cols-1 md:grid-cols-12 gap-6 mb-6">
                  <div className="md:col-span-5">
                    <div className="relative aspect-[4/3] rounded-xl overflow-hidden bg-stone-100 border border-stone-100 shadow-sm">
                      <Image
                        src="https://img.travel.rakuten.co.jp/share/HOTEL/5818/5818.jpg"
                        alt="十勝川温泉　第一ホテル"
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
                        <li className="flex items-start text-xs sm:text-sm text-stone-700"><span className="w-1.5 h-1.5 rounded-full bg-cyan-600 mr-2 shrink-0 mt-1.5" /><span>全室客室露天風呂付きのプレミアム棟「豊洲亭」と川の情景を望む「豆陽亭」</span></li>
                        <li className="flex items-start text-xs sm:text-sm text-stone-700"><span className="w-1.5 h-1.5 rounded-full bg-cyan-600 mr-2 shrink-0 mt-1.5" /><span>世界でも極めて希少な植物性モール温泉を源泉掛け流しで堪能できる展望風呂</span></li>
                        <li className="flex items-start text-xs sm:text-sm text-stone-700"><span className="w-1.5 h-1.5 rounded-full bg-cyan-600 mr-2 shrink-0 mt-1.5" /><span>十勝牛フィレステーキや十勝産ラクレットチーズ、旬の北海海鮮会席</span></li>
                      </ul>
                    </div>

                    <div className="bg-stone-50 p-3.5 rounded-xl border border-stone-200/60 mt-2">
                      <div className="flex items-baseline justify-between">
                        <span className="text-xs text-stone-500 font-medium">宿泊目安（1名あたり）</span>
                        <span className="text-base sm:text-lg font-bold text-stone-900">¥15,900〜</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="space-y-4 pt-4 border-t border-stone-100">
                  <p className="text-xs sm:text-sm text-stone-700 leading-relaxed">
                    雄大な十勝川のほとりに佇み、北海道遺産に選定された「植物性モール温泉」の真髄を味わえる老舗最高峰の宿。琥珀色に輝く湯は太古の植物堆積層を通って湧き出し、天然の化粧水と呼ばれるほどフミン酸や天然保湿成分が豊富に含まれています。大浴場の露天風呂からは、雪化粧した日高山脈と静かに流れる十勝川、時折舞い降りるオオハクチョウの姿を望む贅沢なロケーション。豊洲亭の専用ラウンジでは十勝産ワインやスイーツが振る舞われ、極寒のジュエリーアイス観光で冷えた身体を芯から解きほぐす至福のステイが約束されます。夕食は十勝の大地が育んだブランド牛の炭火焼きや旬の根菜を取り入れた創作会席が並びます。
                  </p>

                  <div className="bg-cyan-50/40 p-4 rounded-xl border border-cyan-100/60">
                    <h5 className="text-xs font-bold text-cyan-950 mb-1 flex items-center gap-1.5">
                      <Award className="w-3.5 h-3.5 text-cyan-700" />
                      宿泊者の生の声・クチコミ抜粋
                    </h5>
                    <p className="text-xs text-stone-600 italic leading-relaxed">
                      「高齢者への配慮ある食事に感謝、良い思い出に家族旅行の良い想い出を作ることができました。お食事も高齢者を考慮した切り方などに対応していただきとても感謝しております。」
                    </p>
                  </div>
                  <div className="pt-2">
                    <a
                      href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F5818%2F5818.html"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center w-full py-3 px-6 rounded-xl text-sm font-bold text-white bg-gradient-to-r from-cyan-700 to-slate-800 hover:from-cyan-800 hover:to-slate-900 shadow-sm hover:shadow transition-all group"
                    >
                      <span>十勝川温泉　第一ホテル の宿泊プラン・空室状況を楽天トラベルで見る</span>
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
                    本格フィンランドサウナ×十勝川パノラマ露天
                  </span>
                  <div className="flex items-center gap-2">
                    <div className="flex items-center text-amber-500">
                      <Star className="w-4 h-4 fill-current" />
                      <span className="ml-1 text-sm font-bold text-stone-800">4.5</span>
                    </div>
                    <span className="text-xs text-stone-500">（クチコミ 2,029件）</span>
                  </div>
                </div>

                <h3 className="text-xl sm:text-2xl font-bold text-stone-900 mb-3 leading-snug">
                  <a 
                    href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F19237%2F19237.html" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="hover:text-cyan-700 transition-colors"
                  >
                    2. 十勝川温泉　観月苑
                  </a>
                </h3>

                <p className="text-xs sm:text-sm text-stone-600 mb-6 flex items-start gap-1.5">
                  <MapPin className="w-4 h-4 text-rose-500 shrink-0 mt-0.5" />
                  <span>北海道河東郡音更町十勝川温泉南14-2（アクセス：【バス】JR帯広駅より30分（観月苑前下車）｜【お車】帯広駅より20分、音更帯広ICより20分、帯広空港より40分）</span>
                </p>

                <div className="grid grid-cols-1 md:grid-cols-12 gap-6 mb-6">
                  <div className="md:col-span-5">
                    <div className="relative aspect-[4/3] rounded-xl overflow-hidden bg-stone-100 border border-stone-100 shadow-sm">
                      <Image
                        src="https://img.travel.rakuten.co.jp/share/HOTEL/19237/19237.jpg"
                        alt="十勝川温泉　観月苑"
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
                        <li className="flex items-start text-xs sm:text-sm text-stone-700"><span className="w-1.5 h-1.5 rounded-full bg-cyan-600 mr-2 shrink-0 mt-1.5" /><span>セルフロウリュ完備の本格サウナとモール温泉水風呂で究極の「ととのい」体験</span></li>
                        <li className="flex items-start text-xs sm:text-sm text-stone-700"><span className="w-1.5 h-1.5 rounded-full bg-cyan-600 mr-2 shrink-0 mt-1.5" /><span>十勝中央大橋と白銀の河畔を眼下に望む開放感抜群の屋根付き大露天風呂</span></li>
                        <li className="flex items-start text-xs sm:text-sm text-stone-700"><span className="w-1.5 h-1.5 rounded-full bg-cyan-600 mr-2 shrink-0 mt-1.5" /><span>十勝の恵みを五感で味わう和洋ビュッフェと落ち着きある和モダン客室</span></li>
                      </ul>
                    </div>

                    <div className="bg-stone-50 p-3.5 rounded-xl border border-stone-200/60 mt-2">
                      <div className="flex items-baseline justify-between">
                        <span className="text-xs text-stone-500 font-medium">宿泊目安（1名あたり）</span>
                        <span className="text-base sm:text-lg font-bold text-stone-900">¥13,750〜</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="space-y-4 pt-4 border-t border-stone-100">
                  <p className="text-xs sm:text-sm text-stone-700 leading-relaxed">
                    十勝川にかかる白鳥大橋の袂に位置し、十勝サウナの聖地としても全国のサウナーから熱い注目を浴びる温泉旅館。大浴場にはフィンランド製サウナストーブを配した本格サウナが備わり、十勝川の清流を望む外気浴スペースでは氷点下の澄み切った大気の中で究極のディープリラックスを体感できます。湯上がりには肌に吸い付くようなとろみのあるモール温泉の湯船に浸かり、しっとりとした肌触りを実感。夕食はオープンキッチンから出来立てが運ばれるバイキングで、十勝産小麦の手打ちパスタや揚げたての天ぷら、十勝ポークのローストなど北の大地の美味を心ゆくまで堪能できます。
                  </p>

                  <div className="bg-cyan-50/40 p-4 rounded-xl border border-cyan-100/60">
                    <h5 className="text-xs font-bold text-cyan-950 mb-1 flex items-center gap-1.5">
                      <Award className="w-3.5 h-3.5 text-cyan-700" />
                      宿泊者の生の声・クチコミ抜粋
                    </h5>
                    <p className="text-xs text-stone-600 italic leading-relaxed">
                      「一人旅でも落ち着けるカウンター席が最高 2回目の利用。一人旅での利用でビュッフェスタイルの食事の場合、落ち着いて食事が難しい場合もあるが、この宿は一人での利用者用に風景を見つつ食事ができるカウンタ。」
                    </p>
                  </div>
                  <div className="pt-2">
                    <a
                      href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F19237%2F19237.html"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center w-full py-3 px-6 rounded-xl text-sm font-bold text-white bg-gradient-to-r from-cyan-700 to-slate-800 hover:from-cyan-800 hover:to-slate-900 shadow-sm hover:shadow transition-all group"
                    >
                      <span>十勝川温泉　観月苑 の宿泊プラン・空室状況を楽天トラベルで見る</span>
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
                    自家農園野菜×多彩なエステバス・気球体験の宿
                  </span>
                  <div className="flex items-center gap-2">
                    <div className="flex items-center text-amber-500">
                      <Star className="w-4 h-4 fill-current" />
                      <span className="ml-1 text-sm font-bold text-stone-800">4.0</span>
                    </div>
                    <span className="text-xs text-stone-500">（クチコミ 889件）</span>
                  </div>
                </div>

                <h3 className="text-xl sm:text-2xl font-bold text-stone-900 mb-3 leading-snug">
                  <a 
                    href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F54836%2F54836.html" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="hover:text-cyan-700 transition-colors"
                  >
                    3. 十勝川温泉　ホテル大平原
                  </a>
                </h3>

                <p className="text-xs sm:text-sm text-stone-600 mb-6 flex items-start gap-1.5">
                  <MapPin className="w-4 h-4 text-rose-500 shrink-0 mt-0.5" />
                  <span>北海道河東郡音更町十勝川温泉南15-1（アクセス：帯広駅より車で約２０分）</span>
                </p>

                <div className="grid grid-cols-1 md:grid-cols-12 gap-6 mb-6">
                  <div className="md:col-span-5">
                    <div className="relative aspect-[4/3] rounded-xl overflow-hidden bg-stone-100 border border-stone-100 shadow-sm">
                      <Image
                        src="https://img.travel.rakuten.co.jp/share/HOTEL/54836/54836.jpg"
                        alt="十勝川温泉　ホテル大平原"
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
                        <li className="flex items-start text-xs sm:text-sm text-stone-700"><span className="w-1.5 h-1.5 rounded-full bg-cyan-600 mr-2 shrink-0 mt-1.5" /><span>自家農園「大平原ファーム」で収穫された低農薬野菜をふんだんに使った自然派料理</span></li>
                        <li className="flex items-start text-xs sm:text-sm text-stone-700"><span className="w-1.5 h-1.5 rounded-full bg-cyan-600 mr-2 shrink-0 mt-1.5" /><span>広々とした大浴場に気泡風呂、ジェットバス、打たせ湯など多彩な湯舟を完備</span></li>
                        <li className="flex items-start text-xs sm:text-sm text-stone-700"><span className="w-1.5 h-1.5 rounded-full bg-cyan-600 mr-2 shrink-0 mt-1.5" /><span>十勝平野の広大な敷地と冬の雪原アクティビティへの充実したアクセス</span></li>
                      </ul>
                    </div>

                    <div className="bg-stone-50 p-3.5 rounded-xl border border-stone-200/60 mt-2">
                      <div className="flex items-baseline justify-between">
                        <span className="text-xs text-stone-500 font-medium">宿泊目安（1名あたり）</span>
                        <span className="text-base sm:text-lg font-bold text-stone-900">¥7,700〜</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="space-y-4 pt-4 border-t border-stone-100">
                  <p className="text-xs sm:text-sm text-stone-700 leading-relaxed">
                    十勝平野の真ん中に広がる広大な敷地を誇り、食の安全と地産地消に徹底的にこだわるアットホームな大型温泉ホテル。宿自慢の「大平原ファーム」で丁寧に育てられた新鮮な野菜や北海道産乳製品を使ったお料理は、素材そのものの甘みと力強さが際立ちます。モール温泉を引く大浴場はバラエティ豊かで、超微細な気泡が全身を包み込むエステバスや露天風呂で極楽の湯浴みを楽しめます。豊頃町の大津海岸へのジュエリーアイス観賞ツアーや早朝の熱気球フライト体験など、冬の十勝ならではのダイナミックなネイチャー体験の拠点としても最適です。
                  </p>

                  <div className="bg-cyan-50/40 p-4 rounded-xl border border-cyan-100/60">
                    <h5 className="text-xs font-bold text-cyan-950 mb-1 flex items-center gap-1.5">
                      <Award className="w-3.5 h-3.5 text-cyan-700" />
                      宿泊者の生の声・クチコミ抜粋
                    </h5>
                    <p className="text-xs text-stone-600 italic leading-relaxed">
                      「温泉付き客室が快適、庭にはリスの姿も大浴場が苦手な子どもがいるので、温泉付きのお部屋を選びました。もっと小さいお風呂かと思いきや、ゆったり入ることができる立派なお風呂でした!大浴場も利用し。」
                    </p>
                  </div>
                  <div className="pt-2">
                    <a
                      href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F54836%2F54836.html"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center w-full py-3 px-6 rounded-xl text-sm font-bold text-white bg-gradient-to-r from-cyan-700 to-slate-800 hover:from-cyan-800 hover:to-slate-900 shadow-sm hover:shadow transition-all group"
                    >
                      <span>十勝川温泉　ホテル大平原 の宿泊プラン・空室状況を楽天トラベルで見る</span>
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
                    帯広駅前で希少な自家源泉モール温泉＆サウナシュラン
                  </span>
                  <div className="flex items-center gap-2">
                    <div className="flex items-center text-amber-500">
                      <Star className="w-4 h-4 fill-current" />
                      <span className="ml-1 text-sm font-bold text-stone-800">4.2</span>
                    </div>
                    <span className="text-xs text-stone-500">（クチコミ 3,552件）</span>
                  </div>
                </div>

                <h3 className="text-xl sm:text-2xl font-bold text-stone-900 mb-3 leading-snug">
                  <a 
                    href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F50753%2F50753.html" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="hover:text-cyan-700 transition-colors"
                  >
                    4. 天然温泉　プレミアホテル―ＣＡＢＩＮ―帯広
                  </a>
                </h3>

                <p className="text-xs sm:text-sm text-stone-600 mb-6 flex items-start gap-1.5">
                  <MapPin className="w-4 h-4 text-rose-500 shrink-0 mt-0.5" />
                  <span>北海道帯広市西1条南11（アクセス：・ＪＲ帯広駅より徒歩３分　・帯広空港連絡バスあり　バス停ホテルの目の前）</span>
                </p>

                <div className="grid grid-cols-1 md:grid-cols-12 gap-6 mb-6">
                  <div className="md:col-span-5">
                    <div className="relative aspect-[4/3] rounded-xl overflow-hidden bg-stone-100 border border-stone-100 shadow-sm">
                      <Image
                        src="https://img.travel.rakuten.co.jp/share/HOTEL/50753/50753.jpg"
                        alt="天然温泉　プレミアホテル―ＣＡＢＩＮ―帯広"
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
                        <li className="flex items-start text-xs sm:text-sm text-stone-700"><span className="w-1.5 h-1.5 rounded-full bg-cyan-600 mr-2 shrink-0 mt-1.5" /><span>JR帯広駅から徒歩3分！駅前立地でありながら地下から湧く純度100%の天然モール温泉</span></li>
                        <li className="flex items-start text-xs sm:text-sm text-stone-700"><span className="w-1.5 h-1.5 rounded-full bg-cyan-600 mr-2 shrink-0 mt-1.5" /><span>サウナシュラン受賞歴を誇る本格フィンランド式サウナと白樺ヴィヒタの香り</span></li>
                        <li className="flex items-start text-xs sm:text-sm text-stone-700"><span className="w-1.5 h-1.5 rounded-full bg-cyan-600 mr-2 shrink-0 mt-1.5" /><span>帯広名物「元祖豚丼」や屋台村「北の屋台」まで徒歩圏の抜群のナイトアクセス</span></li>
                      </ul>
                    </div>

                    <div className="bg-stone-50 p-3.5 rounded-xl border border-stone-200/60 mt-2">
                      <div className="flex items-baseline justify-between">
                        <span className="text-xs text-stone-500 font-medium">宿泊目安（1名あたり）</span>
                        <span className="text-base sm:text-lg font-bold text-stone-900">¥3,770〜</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="space-y-4 pt-4 border-t border-stone-100">
                  <p className="text-xs sm:text-sm text-stone-700 leading-relaxed">
                    JR帯広駅のすぐ目の前に位置しながら、地下から自噴する本格的な植物性モール温泉の大浴場と露天風呂を完備したハイグレードビジネス＆リゾートホテル。全国のサウナ愛好家が集う大浴場のドライサウナでは、白樺のヴィヒタが香る本格的なセルフロウリュが楽しめ、冷水風呂と外気浴スペースで完璧な温冷交代浴が叶います。早朝に大津海岸へジュエリーアイスを見に出かけるレンタカー旅の出発点としても利便性抜群。夜は徒歩数分の繁華街へ繰り出し、帯広名物の豚丼や屋台村「北の屋台」で地元の人々と触れ合いながら十勝の地酒を楽しむ都市型ステイが満喫できます。
                  </p>

                  <div className="bg-cyan-50/40 p-4 rounded-xl border border-cyan-100/60">
                    <h5 className="text-xs font-bold text-cyan-950 mb-1 flex items-center gap-1.5">
                      <Award className="w-3.5 h-3.5 text-cyan-700" />
                      宿泊者の生の声・クチコミ抜粋
                    </h5>
                    <p className="text-xs text-stone-600 italic leading-relaxed">
                      「サウナと温泉が快適、朝食も種類豊富で満足サウナもあり温泉も快適です。朝食にバリエーションがあり楽しめました。」
                    </p>
                  </div>
                  <div className="pt-2">
                    <a
                      href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F50753%2F50753.html"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center w-full py-3 px-6 rounded-xl text-sm font-bold text-white bg-gradient-to-r from-cyan-700 to-slate-800 hover:from-cyan-800 hover:to-slate-900 shadow-sm hover:shadow transition-all group"
                    >
                      <span>天然温泉　プレミアホテル―ＣＡＢＩＮ―帯広 の宿泊プラン・空室状況を楽天トラベルで見る</span>
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
                    明治32年創業・十勝川温泉屈指の老舗名湯館
                  </span>
                  <div className="flex items-center gap-2">
                    <div className="flex items-center text-amber-500">
                      <Star className="w-4 h-4 fill-current" />
                      <span className="ml-1 text-sm font-bold text-stone-800">4.2</span>
                    </div>
                    <span className="text-xs text-stone-500">（クチコミ 1,217件）</span>
                  </div>
                </div>

                <h3 className="text-xl sm:text-2xl font-bold text-stone-900 mb-3 leading-snug">
                  <a 
                    href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F30897%2F30897.html" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="hover:text-cyan-700 transition-colors"
                  >
                    5. 十勝川温泉　笹井ホテル
                  </a>
                </h3>

                <p className="text-xs sm:text-sm text-stone-600 mb-6 flex items-start gap-1.5">
                  <MapPin className="w-4 h-4 text-rose-500 shrink-0 mt-0.5" />
                  <span>北海道河東郡音更町十勝川温泉北15-1（アクセス：ＪＲ帯広駅前バスターミナルからバスで25分／道東道帯広・音更ＩＣより車で15分／帯広空港より車で45分）</span>
                </p>

                <div className="grid grid-cols-1 md:grid-cols-12 gap-6 mb-6">
                  <div className="md:col-span-5">
                    <div className="relative aspect-[4/3] rounded-xl overflow-hidden bg-stone-100 border border-stone-100 shadow-sm">
                      <Image
                        src="https://img.travel.rakuten.co.jp/share/HOTEL/30897/30897.jpg"
                        alt="十勝川温泉　笹井ホテル"
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
                        <li className="flex items-start text-xs sm:text-sm text-stone-700"><span className="w-1.5 h-1.5 rounded-full bg-cyan-600 mr-2 shrink-0 mt-1.5" /><span>十勝川温泉の歴史を切り拓いた老舗が誇る源泉掛け流しの濃厚モール温泉</span></li>
                        <li className="flex items-start text-xs sm:text-sm text-stone-700"><span className="w-1.5 h-1.5 rounded-full bg-cyan-600 mr-2 shrink-0 mt-1.5" /><span>木をふんだんにあしらった情緒ある大浴場と雪見露天風呂の風情ある佇まい</span></li>
                        <li className="flex items-start text-xs sm:text-sm text-stone-700"><span className="w-1.5 h-1.5 rounded-full bg-cyan-600 mr-2 shrink-0 mt-1.5" /><span>北海道産ズワイガニや十勝牛、旬の味覚がずらりと並ぶ贅沢バイキング</span></li>
                      </ul>
                    </div>

                    <div className="bg-stone-50 p-3.5 rounded-xl border border-stone-200/60 mt-2">
                      <div className="flex items-baseline justify-between">
                        <span className="text-xs text-stone-500 font-medium">宿泊目安（1名あたり）</span>
                        <span className="text-base sm:text-lg font-bold text-stone-900">¥9,650〜</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="space-y-4 pt-4 border-t border-stone-100">
                  <p className="text-xs sm:text-sm text-stone-700 leading-relaxed">
                    1899年（明治32年）の創業以来、十勝川温泉の湯守として旅人を温め続けてきた歴史ある老舗旅館。創業当時から受け継がれる自家源泉は、湯口から注がれる琥珀色のモール泉の鮮度が高く、湯船に身を沈めると細かな気泡が肌を包み込みます。冬の露天風呂では、頭上に広がる満天の星空と雪景色を眺めながらの長湯が格別。夕食は北海道ならではの新鮮な蟹や刺身、十勝牛の陶板焼きをはじめ、郷土色あふれる多彩なお料理が並ぶビュッフェスタイルで、三世代の家族旅行から一人旅まで気兼ねなく寛ぐことができます。
                  </p>

                  <div className="bg-cyan-50/40 p-4 rounded-xl border border-cyan-100/60">
                    <h5 className="text-xs font-bold text-cyan-950 mb-1 flex items-center gap-1.5">
                      <Award className="w-3.5 h-3.5 text-cyan-700" />
                      宿泊者の生の声・クチコミ抜粋
                    </h5>
                    <p className="text-xs text-stone-600 italic leading-relaxed">
                      「食事もデザートも充実、バーの対応も最高朝食、夕食共種類豊富でデザートも充実してて良かったし、飲み放題を頼んだのですがバーテンダーの方も気さくに対応してくださってとても満足でしたクチコミの詳細は。」
                    </p>
                  </div>
                  <div className="pt-2">
                    <a
                      href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F30897%2F30897.html"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center w-full py-3 px-6 rounded-xl text-sm font-bold text-white bg-gradient-to-r from-cyan-700 to-slate-800 hover:from-cyan-800 hover:to-slate-900 shadow-sm hover:shadow transition-all group"
                    >
                      <span>十勝川温泉　笹井ホテル の宿泊プラン・空室状況を楽天トラベルで見る</span>
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
                  北海道の宿に実質2,000円で泊まる賢い方法
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
              冬の十勝・十勝川温泉・帯広旅行でよくある質問（FAQ）
            </h2>

            <div className="space-y-4">
              <div className="p-4 rounded-xl bg-stone-50 border border-stone-200/70">
                <h3 className="font-bold text-stone-900 text-sm mb-2">Q1. ジュエリーアイスの見頃の時期と時間帯はいつですか？</h3>
                <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                  例年1月中旬から2月下旬にかけて、豊頃町の大津海岸で見られます。特に美しく輝くのは日の出直後の早朝（朝6時30分〜7時30分頃）で、朝日に照らされてオレンジや黄金色に輝くクリスタルガラスのような絶景が広がります。
                </p>
              </div>

              <div className="p-4 rounded-xl bg-stone-50 border border-stone-200/70">
                <h3 className="font-bold text-stone-900 text-sm mb-2">Q2. ジュエリーアイス観賞時の気温と必要な防寒着は？</h3>
                <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                  1月から2月の早朝の十勝・大津海岸は氷点下15度から氷点下20度以下まで冷え込みます。極寒の海風が吹き付けるため、防風・防水仕様の厚手ダウンジャケット、スノーブーツ、防寒手袋、ニット帽、ネックウォーマー、貼るカイロが必須です。スマホやカメラのバッテリーも寒さで急激に消耗するため予備カイロで保温してください。
                </p>
              </div>

              <div className="p-4 rounded-xl bg-stone-50 border border-stone-200/70">
                <h3 className="font-bold text-stone-900 text-sm mb-2">Q3. 十勝川温泉の「植物性モール温泉」とはどのようなお湯ですか？</h3>
                <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                  十勝川温泉のモール温泉は、太古のヨシなどの植物堆積層を通って湧出する世界でも極めて珍しい温泉です。植物性の有機物（フミン酸やフルボ酸）が豊富に含まれており、茶褐色・琥珀色の透明なお湯が特徴。入浴すると天然の化粧水のように肌がつるつるになり、高い保湿・保温効果を誇ります。北海道遺産にも認定されています。
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 内部リンク・関連特集セクション */}
        <section className="max-w-4xl mx-auto px-4 mb-12">
          <div className="bg-stone-100 rounded-2xl p-6 sm:p-8 border border-stone-200 space-y-4">
            <h3 className="text-base sm:text-lg font-bold text-stone-900">あわせて読みたい北海道＆冬の厳選温泉特集</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              <Link href="/prefectures/hokkaido" className="p-3 bg-white rounded-xl border border-stone-200 text-xs font-semibold text-stone-800 hover:text-cyan-700 hover:border-cyan-300 transition flex items-center justify-between">
                <span>北海道のおすすめ観光名所＆温泉宿一覧</span>
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
