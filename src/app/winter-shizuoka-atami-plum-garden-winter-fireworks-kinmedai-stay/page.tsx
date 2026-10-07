import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ChevronRight, Star, MapPin, Sparkles, Snowflake, Mountain, Award, HelpCircle, ArrowRight } from 'lucide-react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: '【日本一早咲きの熱海梅園と冬海上花火】2026-2027年冬の熱海温泉！絶景オーシャンビュー露天＆金目鯛名宿5選',
  description: '日本一早咲きを誇る熱海梅園の梅まつりと冬の澄んだ夜空を彩る熱海海上花火大会！波打ち際の絶景露天風呂と脂が乗った冬の金目鯛煮付け会席を味わう熱海温泉の人気名旅館5選。',
  keywords: ['静岡県温泉', '熱海梅園', '熱海・伊豆', '冬の旅行', '温泉宿5選', '楽天トラベル', 'ふるさと納税'],
  openGraph: {
    title: '【日本一早咲きの熱海梅園と冬海上花火】2026-2027年冬の熱海温泉！絶景オーシャンビュー露天＆金目鯛名宿5選',
    description: '日本一早咲きを誇る熱海梅園の梅まつりと冬の澄んだ夜空を彩る熱海海上花火大会！波打ち際の絶景露天風呂と脂が乗った冬の金目鯛煮付け会席を味わう熱海温泉の人気名旅館5選。',
    type: 'article',
    url: 'https://croud-travel.pages.dev/winter-shizuoka-atami-plum-garden-winter-fireworks-kinmedai-stay',
  }
};

export default function WinterFeaturePage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    'headline': '【日本一早咲きの熱海梅園と冬海上花火】2026-2027年冬の熱海温泉！絶景オーシャンビュー露天＆金目鯛名宿5選',
    'description': '日本一早咲きを誇る熱海梅園の梅まつりと冬の澄んだ夜空を彩る熱海海上花火大会！波打ち際の絶景露天風呂と脂が乗った冬の金目鯛煮付け会席を味わう熱海温泉の人気名旅館5選。',
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
    'datePublished': '2026-10-08T00:00:00+09:00',
    'dateModified': '2026-10-08T00:00:00+09:00'
  };

  const faqJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    'mainEntity': [
      {
        '@type': 'Question',
        'name': '熱海梅園の梅まつりはいつから開催されますか？見頃は？',
        'acceptedAnswer': {
          '@type': 'Answer',
          'text': '熱海梅園の梅まつりは毎年1月上旬から3月上旬にかけて開催されます。日本一早咲きの梅として知られ、早咲きの品種は11月下旬〜12月に開花を始め、1月中旬から2月上旬にかけて園内全体が見頃のピークを迎えます。約60品種469本の紅白の梅が咲き誇り、甘い香りに包まれます。'
        }
      },
      {
        '@type': 'Question',
        'name': '冬の熱海海上花火大会の開催日や観賞のコツは？',
        'acceptedAnswer': {
          '@type': 'Answer',
          'text': '熱海海上花火大会は冬期（12月中旬等）にも開催されます。冬は空気が乾燥して澄み切っているため、夏以上に花火の光と色彩が鮮明に美しく見えます。すり鉢状の熱海湾の地形によって花火の音が山々に反響する大迫力も魅力。海沿いの宿の客室や露天風呂、熱海親水公園からの観賞がおすすめです。'
        }
      },
      {
        '@type': 'Question',
        'name': '冬の熱海温泉で味わうべき旬のグルメは何ですか？',
        'acceptedAnswer': {
          '@type': 'Answer',
          'text': '冬の熱海では、脂がたっぷりと乗った「金目鯛の姿煮付け」が一番の看板グルメです。濃厚な甘辛タレで煮付けた金目鯛はご飯にもお酒にも絶品。さらに相模湾の地魚（アジ、イサキ、真鯛）のお刺身や、冬が旬の伊勢海老、熱海プリン、温泉まんじゅうの食べ歩きも外せません。'
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
      { '@type': 'ListItem', 'position': 3, 'name': '静岡県の観光・温泉宿', 'item': 'https://croud-travel.pages.dev/prefectures/shizuoka/' },
      { '@type': 'ListItem', 'position': 4, 'name': '【日本一早咲きの熱海梅園と冬海上花火】2026-2027年冬の熱海温泉！絶景オーシャンビュー露天＆金目鯛名宿5選', 'item': 'https://croud-travel.pages.dev/winter-shizuoka-atami-plum-garden-winter-fireworks-kinmedai-stay/' }
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
            <Link href="/prefectures/shizuoka" className="hover:text-amber-700 transition">静岡県</Link>
            <ChevronRight className="w-3.5 h-3.5 text-stone-400 shrink-0" />
            <span className="text-stone-900 font-medium">熱海・伊豆</span>
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
              【日本一早咲きの熱海梅園と冬海上花火】2026-2027年冬の熱海温泉！絶景オーシャンビュー露天＆金目鯛名宿5選
            </h1>
            <p className="text-sm md:text-base text-cyan-100/90 max-w-2xl mx-auto leading-relaxed">
              日本一早咲きを誇る熱海梅園の梅まつりと冬の澄んだ夜空を彩る熱海海上花火大会！波打ち際の絶景露天風呂と脂が乗った冬の金目鯛煮付け会席を味わう熱海温泉の人気名旅館5選。
            </p>
          </div>
        </header>

        {/* 導入セクション */}
        <section className="max-w-4xl mx-auto px-4 py-8">
          <div className="bg-white rounded-2xl p-6 sm:p-8 border border-stone-200 shadow-sm space-y-4">
            <h2 className="text-xl sm:text-2xl font-bold text-stone-900 flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-cyan-600" />
              冬の静岡県・熱海・伊豆が特別な理由
            </h2>
            <div className="grid md:grid-cols-3 gap-4 pt-2">
              <div className="bg-cyan-50/50 p-4 rounded-xl border border-cyan-100">
                <span className="text-xs font-bold text-cyan-800 block mb-1">01. 特徴</span>
                <h3 className="font-bold text-stone-900 text-sm mb-1">樹齢100年を超える古木も！日本一早咲きの「熱海梅園梅まつり」</h3>
                <p className="text-xs text-stone-600 leading-relaxed">明治19年に開園した熱海梅園には、約60品種469本の梅が植えられています。早咲きの梅は11月下旬〜12月にほころび始め、1月中旬には早くも見頃を迎えます。早春の甘い香りに包まれる観梅散策は格別の風情です。</p>
              </div>
              <div className="bg-cyan-50/50 p-4 rounded-xl border border-cyan-100">
                <span className="text-xs font-bold text-cyan-800 block mb-1">02. 特徴</span>
                <h3 className="font-bold text-stone-900 text-sm mb-1">冬ならではの圧倒的透明度！「熱海海上花火大会」の反響音と光のスペクタクル</h3>
                <p className="text-xs text-stone-600 leading-relaxed">熱海湾は三方を山に囲まれたすり鉢状の地形のため、スタジアムのように花火の爆発音が響き渡ります。冬は空気が澄んで光の美しさが際立ち、混雑も夏ほど激しくないためゆったりと絶景を鑑賞できます。</p>
              </div>
              <div className="bg-cyan-50/50 p-4 rounded-xl border border-cyan-100">
                <span className="text-xs font-bold text-cyan-800 block mb-1">03. 特徴</span>
                <h3 className="font-bold text-stone-900 text-sm mb-1">身体の芯から温まり冷めにくい「熱海温泉」と旬の「金目鯛姿煮」</h3>
                <p className="text-xs text-stone-600 leading-relaxed">塩分を豊富に含む熱海の塩化物温泉は、皮膚に塩分が付着して汗の蒸発を防ぐため湯冷めしにくいのが特徴。湯上がりには、こってり甘辛く炊き上げた大粒の金目鯛や伊勢海老会席が旅情を満たしてくれます。</p>
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
                <h2 className="text-base md:text-lg font-bold tracking-wide">冬の観光名所ガイド：熱海梅園（日本一早咲きの梅の名所）</h2>
              </div>
              <span className="text-[11px] text-stone-300 bg-white/10 px-2.5 py-0.5 rounded-full border border-white/10">地域名所解説</span>
            </div>
            <div className="grid md:grid-cols-12 gap-6 p-6 items-center">
              <div className="md:col-span-5 relative h-56 md:h-64 rounded-xl overflow-hidden bg-stone-100 border border-stone-200/60 shadow-inner">
                <Image
                  src="https://thumb.wikimedia.org/wikipedia/commons/thumb/4/48/Atami_baien_-_March_7_2021_various_14_34_49_754000.jpeg/1280px-Atami_baien_-_March_7_2021_various_14_34_49_754000.jpeg?utm_source=ja.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
                  alt="熱海梅園（日本一早咲きの梅の名所）"
                  fill
                  className="object-cover hover:scale-105 transition duration-500"
                  sizes="(max-width: 768px) 100vw, 400px"
                />
                <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/75 to-transparent p-2 text-right">
                  <span className="text-[10px] text-white/90">写真出典: Wikimedia Commons</span>
                </div>
              </div>
              <div className="md:col-span-7 space-y-3">
                <h3 className="text-lg md:text-xl font-bold text-stone-900 leading-snug">熱海梅園（日本一早咲きの梅の名所）の歴史と見どころ</h3>
                <p className="text-xs md:text-sm text-stone-600 leading-relaxed">熱海梅園（あたみばいえん）は、静岡県熱海市にある市営の庭園。日本で最も早咲きの梅、そして最も遅い紅葉と言われている。60品種・469本の梅をはじめとする各種植物が植えられており、熱海市の観光名所の1つとなっている。</p>
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
              熱海・伊豆 厳選の温泉＆リゾート宿5選
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
                    創業200余年・熱海七湯「清左衛門の湯」掛け流し老舗
                  </span>
                  <div className="flex items-center gap-2">
                    <div className="flex items-center text-amber-500">
                      <Star className="w-4 h-4 fill-current" />
                      <span className="ml-1 text-sm font-bold text-stone-800">4.9</span>
                    </div>
                    <span className="text-xs text-stone-500">（クチコミ 573件）</span>
                  </div>
                </div>

                <h3 className="text-xl sm:text-2xl font-bold text-stone-900 mb-3 leading-snug">
                  <a 
                    href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F16668%2F16668.html" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="hover:text-cyan-700 transition-colors"
                  >
                    1. 熱海温泉　古屋旅館
                  </a>
                </h3>

                <p className="text-xs sm:text-sm text-stone-600 mb-6 flex items-start gap-1.5">
                  <MapPin className="w-4 h-4 text-rose-500 shrink-0 mt-0.5" />
                  <span>静岡県熱海市東海岸町5-24（アクセス：ＪＲ熱海駅からタクシーで５分。徒歩１３分。熱海サンビーチまでは徒歩３分♪）</span>
                </p>

                <div className="grid grid-cols-1 md:grid-cols-12 gap-6 mb-6">
                  <div className="md:col-span-5">
                    <div className="relative aspect-[4/3] rounded-xl overflow-hidden bg-stone-100 border border-stone-100 shadow-sm">
                      <Image
                        src="https://img.travel.rakuten.co.jp/share/HOTEL/16668/16668.jpg"
                        alt="熱海温泉　古屋旅館"
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
                        <li className="flex items-start text-xs sm:text-sm text-stone-700"><span className="w-1.5 h-1.5 rounded-full bg-cyan-600 mr-2 shrink-0 mt-1.5" /><span>文化三年（1806年）創業の伝統を今に受け継ぐ熱海温泉屈指の純和風名旅館</span></li>
                        <li className="flex items-start text-xs sm:text-sm text-stone-700"><span className="w-1.5 h-1.5 rounded-full bg-cyan-600 mr-2 shrink-0 mt-1.5" /><span>熱海七湯の源泉「清左衛門の湯」を加熱加水なしの100%源泉掛け流しで提供</span></li>
                        <li className="flex items-start text-xs sm:text-sm text-stone-700"><span className="w-1.5 h-1.5 rounded-full bg-cyan-600 mr-2 shrink-0 mt-1.5" /><span>全室お部屋食でゆったりと味わう本場伊豆産金目鯛の姿煮と本格京風懐石</span></li>
                      </ul>
                    </div>

                    <div className="bg-stone-50 p-3.5 rounded-xl border border-stone-200/60 mt-2">
                      <div className="flex items-baseline justify-between">
                        <span className="text-xs text-stone-500 font-medium">宿泊目安（1名あたり）</span>
                        <span className="text-base sm:text-lg font-bold text-stone-900">¥39,930〜</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="space-y-4 pt-4 border-t border-stone-100">
                  <p className="text-xs sm:text-sm text-stone-700 leading-relaxed">
                    江戸時代より文人墨客や要人に愛され続けてきた熱海屈指の歴史を誇る老舗旅館。宿の命である温泉は、熱海七湯の一つに数えられる名泉「清左衛門の湯」を敷地内から直接引き、一切の加水・加温を行わない純度100%の源泉掛け流し。湯口から注がれる高温で良質なナトリウム・カルシウム-塩化物泉は、浸かるだけで身体の奥底から温まり、冷え性を和らげてくれます。夕食は朝夕ともにお部屋食の伝統を守り、料理長が吟味した大ぶりの金目鯛を秘伝のタレでふっくら炊き上げた煮付けや、相模湾の朝獲れ地魚を美しく盛り込んだ京風懐石が並びます。熱海梅園へもタクシーで約5分と至近で、初春の梅の香りに包まれる優雅な休日を過ごせます。
                  </p>

                  <div className="bg-cyan-50/40 p-4 rounded-xl border border-cyan-100/60">
                    <h5 className="text-xs font-bold text-cyan-950 mb-1 flex items-center gap-1.5">
                      <Award className="w-3.5 h-3.5 text-cyan-700" />
                      宿泊者の生の声・クチコミ抜粋
                    </h5>
                    <p className="text-xs text-stone-600 italic leading-relaxed">
                      「清潔で料理も美味しく、おもてなしに感動歴史ある旅館なのに、掃除が行き届いてとても清潔でした。夕・朝食とも大変おいしく大満足でした。量はもう少し少な目でも十分かもしれません。おもてなしの心が、細やか… 2026-09-27 18:08:06投稿 つづきはこちら」
                    </p>
                  </div>
                  <div className="pt-2">
                    <a
                      href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F16668%2F16668.html"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center w-full py-3 px-6 rounded-xl text-sm font-bold text-white bg-gradient-to-r from-cyan-700 to-slate-800 hover:from-cyan-800 hover:to-slate-900 shadow-sm hover:shadow transition-all group"
                    >
                      <span>熱海温泉　古屋旅館 の宿泊プラン・空室状況を楽天トラベルで見る</span>
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
                    伊豆山標高361m・海と花火を望む天空の美食オーベルジュ
                  </span>
                  <div className="flex items-center gap-2">
                    <div className="flex items-center text-amber-500">
                      <Star className="w-4 h-4 fill-current" />
                      <span className="ml-1 text-sm font-bold text-stone-800">4.7</span>
                    </div>
                    <span className="text-xs text-stone-500">（クチコミ 80件）</span>
                  </div>
                </div>

                <h3 className="text-xl sm:text-2xl font-bold text-stone-900 mb-3 leading-snug">
                  <a 
                    href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F142952%2F142952.html" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="hover:text-cyan-700 transition-colors"
                  >
                    2. ホテルグランバッハ熱海クレッシェンド
                  </a>
                </h3>

                <p className="text-xs sm:text-sm text-stone-600 mb-6 flex items-start gap-1.5">
                  <MapPin className="w-4 h-4 text-rose-500 shrink-0 mt-0.5" />
                  <span>静岡県熱海市伊豆山1048-4（アクセス：ＪＲ熱海駅よりお車にて約１５分  タクシーで１,５００円程度　　　改装　：2024年8月1日リニューアルOPEN）</span>
                </p>

                <div className="grid grid-cols-1 md:grid-cols-12 gap-6 mb-6">
                  <div className="md:col-span-5">
                    <div className="relative aspect-[4/3] rounded-xl overflow-hidden bg-stone-100 border border-stone-100 shadow-sm">
                      <Image
                        src="https://img.travel.rakuten.co.jp/share/HOTEL/142952/142952.jpg"
                        alt="ホテルグランバッハ熱海クレッシェンド"
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
                        <li className="flex items-start text-xs sm:text-sm text-stone-700"><span className="w-1.5 h-1.5 rounded-full bg-cyan-600 mr-2 shrink-0 mt-1.5" /><span>標高361mから相模湾と熱海の夜景、海上花火大会を眼下に見下ろす絶景パノラマ</span></li>
                        <li className="flex items-start text-xs sm:text-sm text-stone-700"><span className="w-1.5 h-1.5 rounded-full bg-cyan-600 mr-2 shrink-0 mt-1.5" /><span>全16室すべてに源泉掛け流しの客室露天風呂または内湯を完備したプライベート空間</span></li>
                        <li className="flex items-start text-xs sm:text-sm text-stone-700"><span className="w-1.5 h-1.5 rounded-full bg-cyan-600 mr-2 shrink-0 mt-1.5" /><span>熱海フレンチの最高峰！静岡の旬食材とクラシック音楽が奏でる極上の夕食</span></li>
                      </ul>
                    </div>

                    <div className="bg-stone-50 p-3.5 rounded-xl border border-stone-200/60 mt-2">
                      <div className="flex items-baseline justify-between">
                        <span className="text-xs text-stone-500 font-medium">宿泊目安（1名あたり）</span>
                        <span className="text-base sm:text-lg font-bold text-stone-900">¥54,400〜</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="space-y-4 pt-4 border-t border-stone-100">
                  <p className="text-xs sm:text-sm text-stone-700 leading-relaxed">
                    伊豆山の雄大な自然に抱かれ、熱海の喧騒から離れた高台に佇む大人のための隠れ家リゾート。全客室がゆとりあるスイート仕様で、すべての部屋に弱アルカリ性の美肌温泉が満たされたプライベート風呂を備えています。冬の澄み切った夜空の下で開催される熱海海上花火大会の日には、客室のテラスやラウンジから夜空に炸裂する大輪の花火を見下ろすという、他では決して味わえない「天空の特等席」を満喫。ディナーは「食と音楽の調和」をテーマに、近海で水揚げされた伊勢海老や金目鯛、富士山麓の有機野菜を洗練された技法で昇華させた極上フレンチ。静寂と美食に癒やされる特別な記念日旅行に最適です。
                  </p>

                  <div className="bg-cyan-50/40 p-4 rounded-xl border border-cyan-100/60">
                    <h5 className="text-xs font-bold text-cyan-950 mb-1 flex items-center gap-1.5">
                      <Award className="w-3.5 h-3.5 text-cyan-700" />
                      宿泊者の生の声・クチコミ抜粋
                    </h5>
                    <p className="text-xs text-stone-600 italic leading-relaxed">
                      「とても最高です!年1のご褒美に食べ物よし、お風呂よし!眺めよし!部屋よし!ホスピタリティよし!いうことない!クチコミの詳細はこちらから https://review.travel.rakute… 2026-09-28 17:59:29投稿 つづきはこちら」
                    </p>
                  </div>
                  <div className="pt-2">
                    <a
                      href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F142952%2F142952.html"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center w-full py-3 px-6 rounded-xl text-sm font-bold text-white bg-gradient-to-r from-cyan-700 to-slate-800 hover:from-cyan-800 hover:to-slate-900 shadow-sm hover:shadow transition-all group"
                    >
                      <span>ホテルグランバッハ熱海クレッシェンド の宿泊プラン・空室状況を楽天トラベルで見る</span>
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
                    錦ヶ浦の断崖絶壁・海と一体化するインフィニティ露天
                  </span>
                  <div className="flex items-center gap-2">
                    <div className="flex items-center text-amber-500">
                      <Star className="w-4 h-4 fill-current" />
                      <span className="ml-1 text-sm font-bold text-stone-800">4.3</span>
                    </div>
                    <span className="text-xs text-stone-500">（クチコミ 3,542件）</span>
                  </div>
                </div>

                <h3 className="text-xl sm:text-2xl font-bold text-stone-900 mb-3 leading-snug">
                  <a 
                    href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F5417%2F5417.html" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="hover:text-cyan-700 transition-colors"
                  >
                    3. ホテルニューアカオ
                  </a>
                </h3>

                <p className="text-xs sm:text-sm text-stone-600 mb-6 flex items-start gap-1.5">
                  <MapPin className="w-4 h-4 text-rose-500 shrink-0 mt-0.5" />
                  <span>静岡県熱海市熱海1993-250（アクセス：宿泊棟によりフロントが異なります。【ホライゾン】⇒ホライゾン・ウイング【オーシャン】⇒オーシャン・ウイング）</span>
                </p>

                <div className="grid grid-cols-1 md:grid-cols-12 gap-6 mb-6">
                  <div className="md:col-span-5">
                    <div className="relative aspect-[4/3] rounded-xl overflow-hidden bg-stone-100 border border-stone-100 shadow-sm">
                      <Image
                        src="https://img.travel.rakuten.co.jp/share/HOTEL/5417/5417.jpg"
                        alt="ホテルニューアカオ"
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
                        <li className="flex items-start text-xs sm:text-sm text-stone-700"><span className="w-1.5 h-1.5 rounded-full bg-cyan-600 mr-2 shrink-0 mt-1.5" /><span>名勝・錦ヶ浦の波打ち際に建ち、全室オーシャンビューを誇る昭和モダンリゾート</span></li>
                        <li className="flex items-start text-xs sm:text-sm text-stone-700"><span className="w-1.5 h-1.5 rounded-full bg-cyan-600 mr-2 shrink-0 mt-1.5" /><span>海との境目が消えるパノラマ天然温泉「スパリウムニシキ」の圧倒的浮遊感</span></li>
                        <li className="flex items-start text-xs sm:text-sm text-stone-700"><span className="w-1.5 h-1.5 rounded-full bg-cyan-600 mr-2 shrink-0 mt-1.5" /><span>会場の目の前から打ち上がる熱海海上花火の大迫力を間近で体感</span></li>
                      </ul>
                    </div>

                    <div className="bg-stone-50 p-3.5 rounded-xl border border-stone-200/60 mt-2">
                      <div className="flex items-baseline justify-between">
                        <span className="text-xs text-stone-500 font-medium">宿泊目安（1名あたり）</span>
                        <span className="text-base sm:text-lg font-bold text-stone-900">¥13,900〜</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="space-y-4 pt-4 border-t border-stone-100">
                  <p className="text-xs sm:text-sm text-stone-700 leading-relaxed">
                    熱海の名勝・錦ヶ浦の断崖に寄り添うようにそびえ立ち、客室の窓一面にダイナミックな相模灘の水平線が広がる海のリゾートホテル。一番の魅力は海上に突き出すように設計された大浴場「スパリウムニシキ」。水平線と湯船がシームレスに繋がるインフィニティ露天風呂に身を沈めれば、心地よい波音と潮風に包まれながら、海に浮かんでいるかのような神秘的な感覚を味わえます。冬の熱海海上花火大会では、海上の打上台船がホテルの真正面に位置するため、窓やテラスから迫力満点の轟音と光のスペクタクルを独占。朝食は海を見下ろすメインダイニングで、静岡県産の食材をふんだんに取り入れた豪華ビュッフェを楽しめます。
                  </p>

                  <div className="bg-cyan-50/40 p-4 rounded-xl border border-cyan-100/60">
                    <h5 className="text-xs font-bold text-cyan-950 mb-1 flex items-center gap-1.5">
                      <Award className="w-3.5 h-3.5 text-cyan-700" />
                      宿泊者の生の声・クチコミ抜粋
                    </h5>
                    <p className="text-xs text-stone-600 italic leading-relaxed">
                      「食事は満足だが館内の移動が少し複雑スタッフの方々の対応は大変良かったです。夕食・朝食もビュッフェスタイルで、少し食べすぎました。ただ、ホテルの立地条件で場所の移動が大変でした。エレベーターの乗… 2026-10-01 22:37:35投稿 つづきはこちら」
                    </p>
                  </div>
                  <div className="pt-2">
                    <a
                      href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F5417%2F5417.html"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center w-full py-3 px-6 rounded-xl text-sm font-bold text-white bg-gradient-to-r from-cyan-700 to-slate-800 hover:from-cyan-800 hover:to-slate-900 shadow-sm hover:shadow transition-all group"
                    >
                      <span>ホテルニューアカオ の宿泊プラン・空室状況を楽天トラベルで見る</span>
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
                    熱海港一望・複合型スパ「Fuua」直結の大規模リゾート
                  </span>
                  <div className="flex items-center gap-2">
                    <div className="flex items-center text-amber-500">
                      <Star className="w-4 h-4 fill-current" />
                      <span className="ml-1 text-sm font-bold text-stone-800">4.4</span>
                    </div>
                    <span className="text-xs text-stone-500">（クチコミ 3,206件）</span>
                  </div>
                </div>

                <h3 className="text-xl sm:text-2xl font-bold text-stone-900 mb-3 leading-snug">
                  <a 
                    href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F1656%2F1656.html" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="hover:text-cyan-700 transition-colors"
                  >
                    4. 熱海温泉　熱海後楽園ホテル
                  </a>
                </h3>

                <p className="text-xs sm:text-sm text-stone-600 mb-6 flex items-start gap-1.5">
                  <MapPin className="w-4 h-4 text-rose-500 shrink-0 mt-0.5" />
                  <span>静岡県熱海市和田浜南町10-1（アクセス：東京から新幹線で50分！熱海駅よりタクシーで約10分。送迎バス　9:40～19:00まで40分毎）</span>
                </p>

                <div className="grid grid-cols-1 md:grid-cols-12 gap-6 mb-6">
                  <div className="md:col-span-5">
                    <div className="relative aspect-[4/3] rounded-xl overflow-hidden bg-stone-100 border border-stone-100 shadow-sm">
                      <Image
                        src="https://img.travel.rakuten.co.jp/share/HOTEL/1656/1656.jpg"
                        alt="熱海温泉　熱海後楽園ホテル"
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
                        <li className="flex items-start text-xs sm:text-sm text-stone-700"><span className="w-1.5 h-1.5 rounded-full bg-cyan-600 mr-2 shrink-0 mt-1.5" /><span>熱海港を見下ろすオーシャンフロント！日帰り温泉施設「オーシャンスパ Fuua」併設</span></li>
                        <li className="flex items-start text-xs sm:text-sm text-stone-700"><span className="w-1.5 h-1.5 rounded-full bg-cyan-600 mr-2 shrink-0 mt-1.5" /><span>日本最大級の立ち湯露天風呂から望む相模湾と熱海市街地の100万ドルの夜景</span></li>
                        <li className="flex items-start text-xs sm:text-sm text-stone-700"><span className="w-1.5 h-1.5 rounded-full bg-cyan-600 mr-2 shrink-0 mt-1.5" /><span>伊豆の海の幸やライブキッチンが充実した豪華ディナーブッフェ</span></li>
                      </ul>
                    </div>

                    <div className="bg-stone-50 p-3.5 rounded-xl border border-stone-200/60 mt-2">
                      <div className="flex items-baseline justify-between">
                        <span className="text-xs text-stone-500 font-medium">宿泊目安（1名あたり）</span>
                        <span className="text-base sm:text-lg font-bold text-stone-900">¥9,790〜</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="space-y-4 pt-4 border-t border-stone-100">
                  <p className="text-xs sm:text-sm text-stone-700 leading-relaxed">
                    熱海港のベイエリアに位置し、カップルからファミリーまで多彩な旅のスタイルに応える大型リゾート。ホテルに併設された日帰り温泉施設「オーシャンスパ Fuua」には、全長約25mにおよぶ日本最大級の露天立ち湯があり、相模湾の海原と熱海市街の美しい街灯りを一望するパノラマビューは圧巻のひと言です。夕食はスタイリッシュなブッフェレストランで、目の前で焼き上げる熱々の牛ステーキや、新鮮な地魚の握り寿司、冬ならではの温かな鍋料理がずらりと並びます。熱海駅からの無料送迎バスも頻繁に運行しており、梅園散策や来宮神社参拝への拠点としても抜群のフットワークを誇ります。
                  </p>

                  <div className="bg-cyan-50/40 p-4 rounded-xl border border-cyan-100/60">
                    <h5 className="text-xs font-bold text-cyan-950 mb-1 flex items-center gap-1.5">
                      <Award className="w-3.5 h-3.5 text-cyan-700" />
                      宿泊者の生の声・クチコミ抜粋
                    </h5>
                    <p className="text-xs text-stone-600 italic leading-relaxed">
                      「地ビールと熱海プリンケーキに大満足子ども連れは露天風呂は楽しめないシステムなので、子どもが中学生になったらまた訪れたいです。部屋は和室でゆったり過ごせました。夕食朝食共に品数が少ないような… 2026-10-03 16:34:57投稿 つづきはこちら」
                    </p>
                  </div>
                  <div className="pt-2">
                    <a
                      href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F1656%2F1656.html"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center w-full py-3 px-6 rounded-xl text-sm font-bold text-white bg-gradient-to-r from-cyan-700 to-slate-800 hover:from-cyan-800 hover:to-slate-900 shadow-sm hover:shadow transition-all group"
                    >
                      <span>熱海温泉　熱海後楽園ホテル の宿泊プラン・空室状況を楽天トラベルで見る</span>
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
                    熱海駅前商店街直結・自家源泉と岩盤浴完備の駅近拠点
                  </span>
                  <div className="flex items-center gap-2">
                    <div className="flex items-center text-amber-500">
                      <Star className="w-4 h-4 fill-current" />
                      <span className="ml-1 text-sm font-bold text-stone-800">3.6</span>
                    </div>
                    <span className="text-xs text-stone-500">（クチコミ 2,836件）</span>
                  </div>
                </div>

                <h3 className="text-xl sm:text-2xl font-bold text-stone-900 mb-3 leading-snug">
                  <a 
                    href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F108115%2F108115.html" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="hover:text-cyan-700 transition-colors"
                  >
                    5. 熱海温泉　伊東園ホテル熱海館
                  </a>
                </h3>

                <p className="text-xs sm:text-sm text-stone-600 mb-6 flex items-start gap-1.5">
                  <MapPin className="w-4 h-4 text-rose-500 shrink-0 mt-0.5" />
                  <span>静岡県熱海市田原本町4-16（アクセス：熱海駅より徒歩にて２分）</span>
                </p>

                <div className="grid grid-cols-1 md:grid-cols-12 gap-6 mb-6">
                  <div className="md:col-span-5">
                    <div className="relative aspect-[4/3] rounded-xl overflow-hidden bg-stone-100 border border-stone-100 shadow-sm">
                      <Image
                        src="https://img.travel.rakuten.co.jp/share/HOTEL/108115/108115.jpg"
                        alt="熱海温泉　伊東園ホテル熱海館"
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
                        <li className="flex items-start text-xs sm:text-sm text-stone-700"><span className="w-1.5 h-1.5 rounded-full bg-cyan-600 mr-2 shrink-0 mt-1.5" /><span>JR熱海駅から平和通り名店街を通って徒歩2分！雨の日や荷物が多い旅でも快適アクセス</span></li>
                        <li className="flex items-start text-xs sm:text-sm text-stone-700"><span className="w-1.5 h-1.5 rounded-full bg-cyan-600 mr-2 shrink-0 mt-1.5" /><span>自家源泉を引く広々とした大浴場に加えて、リフレッシュできる無料岩盤浴を完備</span></li>
                        <li className="flex items-start text-xs sm:text-sm text-stone-700"><span className="w-1.5 h-1.5 rounded-full bg-cyan-600 mr-2 shrink-0 mt-1.5" /><span>夕食バイキングではアルコール・ソフトドリンク飲み放題が標準セット</span></li>
                      </ul>
                    </div>

                    <div className="bg-stone-50 p-3.5 rounded-xl border border-stone-200/60 mt-2">
                      <div className="flex items-baseline justify-between">
                        <span className="text-xs text-stone-500 font-medium">宿泊目安（1名あたり）</span>
                        <span className="text-base sm:text-lg font-bold text-stone-900">¥6,749〜</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="space-y-4 pt-4 border-t border-stone-100">
                  <p className="text-xs sm:text-sm text-stone-700 leading-relaxed">
                    熱海駅前の「平和通り商店街」アーケードに直結し、駅改札から徒歩わずか2分という屈指の利便性を誇る温泉ホテル。館内には敷地内から汲み上げる自家源泉の天然温泉大浴場があり、旅の疲れをじんわりと癒やしてくれます。さらに宿泊者が無料で利用できる岩盤浴施設も備えており、デトックス＆リラックスにも最適。夕食は和洋中の多彩な料理が並ぶバイキング形式で、生ビールや地酒などのアルコール飲み放題が無料で付いている点も嬉しいポイントです。駅前を拠点に熱海梅園の観梅バスに乗車したり、商店街の温泉まんじゅうを食べ歩いたり、軽快な冬の熱海散策を満喫できます。
                  </p>

                  <div className="bg-cyan-50/40 p-4 rounded-xl border border-cyan-100/60">
                    <h5 className="text-xs font-bold text-cyan-950 mb-1 flex items-center gap-1.5">
                      <Award className="w-3.5 h-3.5 text-cyan-700" />
                      宿泊者の生の声・クチコミ抜粋
                    </h5>
                    <p className="text-xs text-stone-600 italic leading-relaxed">
                      「駅近で便利、平日のお風呂とサウナは快適駅近で便利です。平日のだったので、お風呂もサウナも空いていてよかったです。クチコミの詳細はこちらから https://review.travel.ra… 2026-10-03 21:10:34投稿 つづきはこちら」
                    </p>
                  </div>
                  <div className="pt-2">
                    <a
                      href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F108115%2F108115.html"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center w-full py-3 px-6 rounded-xl text-sm font-bold text-white bg-gradient-to-r from-cyan-700 to-slate-800 hover:from-cyan-800 hover:to-slate-900 shadow-sm hover:shadow transition-all group"
                    >
                      <span>熱海温泉　伊東園ホテル熱海館 の宿泊プラン・空室状況を楽天トラベルで見る</span>
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
                  静岡県の宿に実質2,000円で泊まる賢い方法
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
              冬の熱海・伊豆旅行でよくある質問（FAQ）
            </h2>

            <div className="space-y-4">
              <div className="p-4 rounded-xl bg-stone-50 border border-stone-200/70">
                <h3 className="font-bold text-stone-900 text-sm mb-2">Q1. 熱海梅園の梅まつりはいつから開催されますか？見頃は？</h3>
                <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                  熱海梅園の梅まつりは毎年1月上旬から3月上旬にかけて開催されます。日本一早咲きの梅として知られ、早咲きの品種は11月下旬〜12月に開花を始め、1月中旬から2月上旬にかけて園内全体が見頃のピークを迎えます。約60品種469本の紅白の梅が咲き誇り、甘い香りに包まれます。
                </p>
              </div>

              <div className="p-4 rounded-xl bg-stone-50 border border-stone-200/70">
                <h3 className="font-bold text-stone-900 text-sm mb-2">Q2. 冬の熱海海上花火大会の開催日や観賞のコツは？</h3>
                <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                  熱海海上花火大会は冬期（12月中旬等）にも開催されます。冬は空気が乾燥して澄み切っているため、夏以上に花火の光と色彩が鮮明に美しく見えます。すり鉢状の熱海湾の地形によって花火の音が山々に反響する大迫力も魅力。海沿いの宿の客室や露天風呂、熱海親水公園からの観賞がおすすめです。
                </p>
              </div>

              <div className="p-4 rounded-xl bg-stone-50 border border-stone-200/70">
                <h3 className="font-bold text-stone-900 text-sm mb-2">Q3. 冬の熱海温泉で味わうべき旬のグルメは何ですか？</h3>
                <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                  冬の熱海では、脂がたっぷりと乗った「金目鯛の姿煮付け」が一番の看板グルメです。濃厚な甘辛タレで煮付けた金目鯛はご飯にもお酒にも絶品。さらに相模湾の地魚（アジ、イサキ、真鯛）のお刺身や、冬が旬の伊勢海老、熱海プリン、温泉まんじゅうの食べ歩きも外せません。
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 内部リンク・関連特集セクション */}
        <section className="max-w-4xl mx-auto px-4 mb-12">
          <div className="bg-stone-100 rounded-2xl p-6 sm:p-8 border border-stone-200 space-y-4">
            <h3 className="text-base sm:text-lg font-bold text-stone-900">あわせて読みたい静岡県＆冬の厳選温泉特集</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              <Link href="/prefectures/shizuoka" className="p-3 bg-white rounded-xl border border-stone-200 text-xs font-semibold text-stone-800 hover:text-cyan-700 hover:border-cyan-300 transition flex items-center justify-between">
                <span>静岡県のおすすめ観光名所＆温泉宿一覧</span>
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
