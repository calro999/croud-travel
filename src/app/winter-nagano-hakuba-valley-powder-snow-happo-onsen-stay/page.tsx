import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ChevronRight, Star, MapPin, Sparkles, Snowflake, Mountain, Award, HelpCircle, ArrowRight } from 'lucide-react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'HAKUBA VALLEY極上パウダースノーと白馬八方温泉：2026-2027年冬の白馬山麓！高アルカリ美肌湯と信州牛名宿5選',
  description: '世界水準の極上ドライパウダースノーHAKUBA VALLEYと日本屈指の強アルカリ美肌の湯「白馬八方温泉」！白馬三山の白銀絶景パノラマ、信州プレミアム牛や信州サーモンを堪能するリゾートホテル＆名旅館5選。',
  keywords: ['長野県温泉', '白馬八方尾根スキー場', '白馬・八方尾根・栂池高原', '冬の旅行', '温泉宿5選', '楽天トラベル', 'ふるさと納税'],
  openGraph: {
    title: 'HAKUBA VALLEY極上パウダースノーと白馬八方温泉：2026-2027年冬の白馬山麓！高アルカリ美肌湯と信州牛名宿5選',
    description: '世界水準の極上ドライパウダースノーHAKUBA VALLEYと日本屈指の強アルカリ美肌の湯「白馬八方温泉」！白馬三山の白銀絶景パノラマ、信州プレミアム牛や信州サーモンを堪能するリゾートホテル＆名旅館5選。',
    type: 'article',
    url: 'https://croud-travel.pages.dev/winter-nagano-hakuba-valley-powder-snow-happo-onsen-stay',
  }
};

export default function WinterFeaturePage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    'headline': '【HAKUBA VALLEY極上パウダースノーと白馬八方温泉】2026-2027年冬の白馬山麓！高アルカリ美肌湯と信州牛名宿5選',
    'description': '世界水準の極上ドライパウダースノーHAKUBA VALLEYと日本屈指の強アルカリ美肌の湯「白馬八方温泉」！白馬三山の白銀絶景パノラマ、信州プレミアム牛や信州サーモンを堪能するリゾートホテル＆名旅館5選。',
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
        'name': '白馬八方尾根スキー場のベストシーズンと雪質の特徴は？',
        'acceptedAnswer': {
          '@type': 'Answer',
          'text': 'HAKUBA VALLEYの白馬八方尾根スキー場は、例年12月中旬から4月上旬まで滑走可能です。特に極上のドライパウダースノーを満喫できるベストシーズンは12月下旬から2月中旬。北アルプスの高標高エリアに位置するため、サラサラの粉雪（JAPOW）が降り積もり、世界中からスキーヤー・スノーボーダーが訪れます。'
        }
      },
      {
        '@type': 'Question',
        'name': '白馬八方温泉の泉質と美肌効果について教えてください。',
        'acceptedAnswer': {
          '@type': 'Answer',
          'text': '白馬八方温泉は、蛇紋岩地層から湧出するpH11.2を超える日本屈指の強アルカリ性単純温泉です。高いアルカリ成分が肌の古い角質をやさしく落とし、浸かるだけでツルツルの美肌になると評判の「美肌の湯」です。また、天然水素を含有している点でも世界的に希少な泉質です。'
        }
      },
      {
        '@type': 'Question',
        'name': '冬の白馬へ車や電車で行く際の注意点は？',
        'acceptedAnswer': {
          '@type': 'Answer',
          'text': '電車・新幹線利用の場合、北陸新幹線「長野駅」東口から特急バス（アルピコ交通）で白馬八方バスターミナルまで約75分と非常に快適です。車の場合は、長野道「安曇野IC」または上信越道「長野IC」から約60分ですが、豪雪地帯のためスタッドレスタイヤまたはタイヤチェーンの装着が絶対に不可欠です。'
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
      { '@type': 'ListItem', 'position': 3, 'name': '長野県の観光・温泉宿', 'item': 'https://croud-travel.pages.dev/prefectures/nagano/' },
      { '@type': 'ListItem', 'position': 4, 'name': '【HAKUBA VALLEY極上パウダースノーと白馬八方温泉】2026-2027年冬の白馬山麓！高アルカリ美肌湯と信州牛名宿5選', 'item': 'https://croud-travel.pages.dev/winter-nagano-hakuba-valley-powder-snow-happo-onsen-stay/' }
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
            <Link href="/prefectures/nagano" className="hover:text-amber-700 transition">長野県</Link>
            <ChevronRight className="w-3.5 h-3.5 text-stone-400 shrink-0" />
            <span className="text-stone-900 font-medium">白馬・八方尾根・栂池高原</span>
          </div>
        </nav>

        {/* ヒーローセクション */}
        <header className="relative bg-gradient-to-br from-slate-950 via-slate-900 to-indigo-950 text-white py-16 px-4 overflow-hidden">
          <div className="max-w-4xl mx-auto text-center space-y-4 relative z-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/20 text-cyan-200 text-xs font-semibold tracking-wider border border-cyan-400/30">
              <Snowflake className="w-3.5 h-3.5" />
              <span>冬の厳選旅行特集（11月・12月・1月）</span>
            </div>
            <h1 className="text-2xl md:text-4xl lg:text-5xl font-extrabold tracking-tight leading-snug">「HAKUBA VALLEY極上パウダースノーと白馬八方温泉」2026-2027年冬の白馬山麓！高アルカリ美肌湯と信州牛名宿5選</h1>
            <p className="text-sm md:text-base text-cyan-100/90 max-w-2xl mx-auto leading-relaxed">
              世界水準の極上ドライパウダースノーHAKUBA VALLEYと日本屈指の強アルカリ美肌の湯「白馬八方温泉」！白馬三山の白銀絶景パノラマ、信州プレミアム牛や信州サーモンを堪能するリゾートホテル＆名旅館5選。
            </p>
          </div>
        </header>

        {/* 導入セクション */}
        <section className="max-w-4xl mx-auto px-4 py-8">
          <div className="bg-white rounded-2xl p-6 sm:p-8 border border-stone-200 shadow-sm space-y-4">
            <h2 className="text-xl sm:text-2xl font-bold text-stone-900 flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-cyan-600" />
              冬の長野県・白馬・八方尾根・栂池高原が特別な理由
            </h2>
            <div className="grid md:grid-cols-3 gap-4 pt-2">
              <div className="bg-cyan-50/50 p-4 rounded-xl border border-cyan-100">
                <span className="text-xs font-bold text-cyan-800 block mb-1">01. 特徴</span>
                <h3 className="font-bold text-stone-900 text-sm mb-1">世界中のスキーヤーが熱狂する「JAPOW（極上ドライパウダースノー）」</h3>
                <p className="text-xs text-stone-600 leading-relaxed">北アルプスの峻険な山岳地帯に位置するため気温が低く、雪の結晶が細かく乾燥した軽やかな粉雪が降り積もります。八方尾根のパノラマコースから望む白銀の絶景は圧巻のひと言です。</p>
              </div>
              <div className="bg-cyan-50/50 p-4 rounded-xl border border-cyan-100">
                <span className="text-xs font-bold text-cyan-800 block mb-1">02. 特徴</span>
                <h3 className="font-bold text-stone-900 text-sm mb-1">pH11.2超！日本屈指の強アルカリ性を誇る「白馬八方温泉」のたまご肌効果</h3>
                <p className="text-xs text-stone-600 leading-relaxed">日本でも数少ない超高アルカリ性単純温泉は、浸かるだけで皮膚の古い角質をやさしく溶かし、すべすべの滑らかな肌に導く天然のクレンジング温泉です。天然水素も豊富に含まれています。</p>
              </div>
              <div className="bg-cyan-50/50 p-4 rounded-xl border border-cyan-100">
                <span className="text-xs font-bold text-cyan-800 block mb-1">03. 特徴</span>
                <h3 className="font-bold text-stone-900 text-sm mb-1">薪の暖炉が灯るクラシックリゾートと信州の美食会席</h3>
                <p className="text-xs text-stone-600 leading-relaxed">和田野の森に佇む本格山岳リゾートや料理自慢の温泉旅館が充実。霜降りの信州プレミアム牛ステーキや安曇野わさび、風味豊かな十割蕎麦など、北信州の豊かな食文化を堪能できます。</p>
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
                <h2 className="text-base md:text-lg font-bold tracking-wide">冬の観光名所ガイド：白馬八方尾根スキー場（HAKUBA VALLEY）</h2>
              </div>
              <span className="text-[11px] text-stone-300 bg-white/10 px-2.5 py-0.5 rounded-full border border-white/10">地域名所解説</span>
            </div>
            <div className="grid md:grid-cols-12 gap-6 p-6 items-center">
              <div className="md:col-span-5 relative h-56 md:h-64 rounded-xl overflow-hidden bg-stone-100 border border-stone-200/60 shadow-inner">
                <Image
                  src="https://thumb.wikimedia.org/wikipedia/commons/thumb/9/99/Hakuba_Happo-one_Winter_Resort.JPG/1280px-Hakuba_Happo-one_Winter_Resort.JPG?utm_source=ja.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
                  alt="白馬八方尾根スキー場（HAKUBA VALLEY）"
                  fill
                  className="object-cover hover:scale-105 transition duration-500"
                  sizes="(max-width: 768px) 100vw, 400px"
                />
                <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/75 to-transparent p-2 text-right">
                  <span className="text-[10px] text-white/90">写真出典: Wikimedia Commons</span>
                </div>
              </div>
              <div className="md:col-span-7 space-y-3">
                <h3 className="text-lg md:text-xl font-bold text-stone-900 leading-snug">白馬八方尾根スキー場（HAKUBA VALLEY）の歴史と見どころ</h3>
                <p className="text-xs md:text-sm text-stone-600 leading-relaxed">白馬八方尾根スキー場（はくばはっぽうおねスキーじょう）は、長野県北安曇郡白馬村八方にあるスキー場で、単体のスキー場としては日本国内最大級のスキー場である。「八方尾根スキー場」と呼ばれることが多い。1998年長野オリンピックの際にはアルペンスキーの高速系種目および複合の競技会場となった。 経営母体は八方尾根開発株式会社と白馬観光開発株式会社の2社。 営業期間は積雪の具合により異なるが、通常の場合は12月上旬から翌年5月のゴールデンウィーク最終日までとなる（ただし、最後まで営業す…</p>
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
              白馬・八方尾根・栂池高原 厳選の温泉＆リゾート宿5選
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
                    和田野の森・アルプス山小屋風クラシックホテル＆暖炉ラウンジ
                  </span>
                  <div className="flex items-center gap-2">
                    <div className="flex items-center text-amber-500">
                      <Star className="w-4 h-4 fill-current" />
                      <span className="ml-1 text-sm font-bold text-stone-800">4.6</span>
                    </div>
                    <span className="text-xs text-stone-500">（クチコミ 472件）</span>
                  </div>
                </div>

                <h3 className="text-xl sm:text-2xl font-bold text-stone-900 mb-3 leading-snug">
                  <a 
                    href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F1173%2F1173.html" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="hover:text-cyan-700 transition-colors"
                  >
                    1. 白馬東急ホテル
                  </a>
                </h3>

                <p className="text-xs sm:text-sm text-stone-600 mb-6 flex items-start gap-1.5">
                  <MapPin className="w-4 h-4 text-rose-500 shrink-0 mt-0.5" />
                  <span>長野県北安曇郡白馬村北城4688（アクセス：白馬駅からお車で約8分。白馬八方バスターミナルからお車で約3分。送迎はご到着の1時間前までにご依頼ください。）</span>
                </p>

                <div className="grid grid-cols-1 md:grid-cols-12 gap-6 mb-6">
                  <div className="md:col-span-5">
                    <div className="relative aspect-[4/3] rounded-xl overflow-hidden bg-stone-100 border border-stone-100 shadow-sm">
                      <Image
                        src="https://img.travel.rakuten.co.jp/share/HOTEL/1173/1173.jpg"
                        alt="白馬東急ホテル"
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
                        <li className="flex items-start text-xs sm:text-sm text-stone-700"><span className="w-1.5 h-1.5 rounded-full bg-cyan-600 mr-2 shrink-0 mt-1.5" /><span>静寂の和田野の森に佇む国際的リゾート！本物の暖炉が燃える優雅なロビーラウンジ</span></li>
                        <li className="flex items-start text-xs sm:text-sm text-stone-700"><span className="w-1.5 h-1.5 rounded-full bg-cyan-600 mr-2 shrink-0 mt-1.5" /><span>pH11を超える日本有数の強アルカリ性「白馬八方温泉」を引く庭園露天風呂</span></li>
                        <li className="flex items-start text-xs sm:text-sm text-stone-700"><span className="w-1.5 h-1.5 rounded-full bg-cyan-600 mr-2 shrink-0 mt-1.5" /><span>信州プレミアム牛肉のフィレステーキや安曇野わさびを添えた本格フランス料理</span></li>
                      </ul>
                    </div>

                    <div className="bg-stone-50 p-3.5 rounded-xl border border-stone-200/60 mt-2">
                      <div className="flex items-baseline justify-between">
                        <span className="text-xs text-stone-500 font-medium">宿泊目安（1名あたり）</span>
                        <span className="text-base sm:text-lg font-bold text-stone-900">¥13,950〜</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="space-y-4 pt-4 border-t border-stone-100">
                  <p className="text-xs sm:text-sm text-stone-700 leading-relaxed">
                    北アルプスの麓、和田野のカラマツ林に静かに佇み、上質な山岳リゾートの伝統を今に受け継ぐクラシックホテル。館内に入ると、高い吹き抜けのラウンジに本物の薪がパチパチと音を立てて燃える暖炉があり、白銀の世界から帰ってきたスキーヤーや旅人を温かく迎え入れます。宿の湯殿には、蛇紋岩地層から湧出するpH11.2という日本屈指の強アルカリ性を誇る「白馬八方温泉」が引かれており、湯船に浸かると肌の古い角質が洗い流されてつるつるの「たまご肌」に生まれ変わる驚きの美肌効果を実感できます。夕食は信州の豊かな大地が育んだ信州プレミアム牛肉や信州サーモン、季節の高原野菜をフレンチの洗練された技で仕立てた本格フルコース。白馬八方尾根スキー場への無料シャトルバスも運行し、冬の白馬ステイを最高にエレガントに彩ります。
                  </p>

                  <div className="bg-cyan-50/40 p-4 rounded-xl border border-cyan-100/60">
                    <h5 className="text-xs font-bold text-cyan-950 mb-1 flex items-center gap-1.5">
                      <Award className="w-3.5 h-3.5 text-cyan-700" />
                      宿泊者の生の声・クチコミ抜粋
                    </h5>
                    <p className="text-xs text-stone-600 italic leading-relaxed">
                      「落ち着いた心地よい空間の中、温かい温泉とおいしいお料理で日頃の疲れを癒やすことができました。」
                    </p>
                  </div>
                  <div className="pt-2">
                    <a
                      href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F1173%2F1173.html"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center w-full py-3 px-6 rounded-xl text-sm font-bold text-white bg-gradient-to-r from-cyan-700 to-slate-800 hover:from-cyan-800 hover:to-slate-900 shadow-sm hover:shadow transition-all group"
                    >
                      <span>白馬東急ホテル の宿泊プラン・空室状況を楽天トラベルで見る</span>
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
                    3万坪の森に佇む北欧風リゾート・江戸古民家の湯と無料サービス
                  </span>
                  <div className="flex items-center gap-2">
                    <div className="flex items-center text-amber-500">
                      <Star className="w-4 h-4 fill-current" />
                      <span className="ml-1 text-sm font-bold text-stone-800">4.6</span>
                    </div>
                    <span className="text-xs text-stone-500">（クチコミ 1,079件）</span>
                  </div>
                </div>

                <h3 className="text-xl sm:text-2xl font-bold text-stone-900 mb-3 leading-snug">
                  <a 
                    href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F16773%2F16773.html" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="hover:text-cyan-700 transition-colors"
                  >
                    2. 白馬みずばしょう温泉　ホテル　シェラリゾート白馬
                  </a>
                </h3>

                <p className="text-xs sm:text-sm text-stone-600 mb-6 flex items-start gap-1.5">
                  <MapPin className="w-4 h-4 text-rose-500 shrink-0 mt-0.5" />
                  <span>長野県北安曇郡白馬村北城14863-6（アクセス：JR白馬駅よりホテルバス（要予約）にて10分／長野道安曇野I.Cより60分／糸魚川I.Cより60分）</span>
                </p>

                <div className="grid grid-cols-1 md:grid-cols-12 gap-6 mb-6">
                  <div className="md:col-span-5">
                    <div className="relative aspect-[4/3] rounded-xl overflow-hidden bg-stone-100 border border-stone-100 shadow-sm">
                      <Image
                        src="https://img.travel.rakuten.co.jp/share/HOTEL/16773/16773.jpg"
                        alt="白馬みずばしょう温泉　ホテル　シェラリゾート白馬"
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
                        <li className="flex items-start text-xs sm:text-sm text-stone-700"><span className="w-1.5 h-1.5 rounded-full bg-cyan-600 mr-2 shrink-0 mt-1.5" /><span>3万坪の広大な敷地！江戸時代の古民家2棟を移築再生した総木造の「古民家の湯」</span></li>
                        <li className="flex items-start text-xs sm:text-sm text-stone-700"><span className="w-1.5 h-1.5 rounded-full bg-cyan-600 mr-2 shrink-0 mt-1.5" /><span>ラウンジでのワイン、挽きたてコーヒー、手作り夜食がすべて無料のオールインクルーシブ感</span></li>
                        <li className="flex items-start text-xs sm:text-sm text-stone-700"><span className="w-1.5 h-1.5 rounded-full bg-cyan-600 mr-2 shrink-0 mt-1.5" /><span>創作フレンチのフルコースディナーと客室から望む白銀の北アルプス絶景</span></li>
                      </ul>
                    </div>

                    <div className="bg-stone-50 p-3.5 rounded-xl border border-stone-200/60 mt-2">
                      <div className="flex items-baseline justify-between">
                        <span className="text-xs text-stone-500 font-medium">宿泊目安（1名あたり）</span>
                        <span className="text-base sm:text-lg font-bold text-stone-900">¥18,868〜</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="space-y-4 pt-4 border-t border-stone-100">
                  <p className="text-xs sm:text-sm text-stone-700 leading-relaxed">
                    白馬山麓のみずばしょう温泉エリアに広がる広大な森に抱かれた、北欧の山荘を思わせる木造建築のリゾートホテル。一番の自慢は、新潟から移築された築数百年の古民家の梁や柱をそのまま活かした「みずばしょう温泉 古民家の湯」。巨木が組まれた高い天井と雪見の露天風呂から望む白銀の森は、日本昔話の世界に迷い込んだかのような神秘的な情緒を醸し出します。滞在中は暖炉ラウンジでワインや地酒、アイスクリーム、夜には特製ラーメンなどが振る舞われ、心地よいホスピタリティが滞在を豊かに演出。夕食は旬の信州食材を自由な発想で昇華させた創作フレンチで、ワインとのマリアージュも格別です。
                  </p>

                  <div className="bg-cyan-50/40 p-4 rounded-xl border border-cyan-100/60">
                    <h5 className="text-xs font-bold text-cyan-950 mb-1 flex items-center gap-1.5">
                      <Award className="w-3.5 h-3.5 text-cyan-700" />
                      宿泊者の生の声・クチコミ抜粋
                    </h5>
                    <p className="text-xs text-stone-600 italic leading-relaxed">
                      「雰囲気と食事は良いホテル全体の雰囲気がとても素敵で、自然も豊かで、気持ちよく過ごすことができました。ただ、湿気がかなり多いせいか、部屋のカビ臭さがとても気になりました。また、貸切風呂を利用。」
                    </p>
                  </div>
                  <div className="pt-2">
                    <a
                      href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F16773%2F16773.html"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center w-full py-3 px-6 rounded-xl text-sm font-bold text-white bg-gradient-to-r from-cyan-700 to-slate-800 hover:from-cyan-800 hover:to-slate-900 shadow-sm hover:shadow transition-all group"
                    >
                      <span>白馬みずばしょう温泉　ホテル　シェラリゾート白馬 の宿泊プラン・空室状況を楽天トラベルで見る</span>
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
                    八方バスターミナル徒歩3分・自家製手打ちそばと料理自慢の温泉旅館
                  </span>
                  <div className="flex items-center gap-2">
                    <div className="flex items-center text-amber-500">
                      <Star className="w-4 h-4 fill-current" />
                      <span className="ml-1 text-sm font-bold text-stone-800">4.8</span>
                    </div>
                    <span className="text-xs text-stone-500">（クチコミ 1,172件）</span>
                  </div>
                </div>

                <h3 className="text-xl sm:text-2xl font-bold text-stone-900 mb-3 leading-snug">
                  <a 
                    href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F30808%2F30808.html" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="hover:text-cyan-700 transition-colors"
                  >
                    3. 白馬八方温泉　まるいし
                  </a>
                </h3>

                <p className="text-xs sm:text-sm text-stone-600 mb-6 flex items-start gap-1.5">
                  <MapPin className="w-4 h-4 text-rose-500 shrink-0 mt-0.5" />
                  <span>長野県北安曇郡白馬村八方5061（アクセス：・北陸新幹線長野駅からバスで約1時間白馬八方バスターミナルより徒歩5分　・　JR白馬駅より車で約8分）</span>
                </p>

                <div className="grid grid-cols-1 md:grid-cols-12 gap-6 mb-6">
                  <div className="md:col-span-5">
                    <div className="relative aspect-[4/3] rounded-xl overflow-hidden bg-stone-100 border border-stone-100 shadow-sm">
                      <Image
                        src="https://img.travel.rakuten.co.jp/share/HOTEL/30808/30808.jpg"
                        alt="白馬八方温泉　まるいし"
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
                        <li className="flex items-start text-xs sm:text-sm text-stone-700"><span className="w-1.5 h-1.5 rounded-full bg-cyan-600 mr-2 shrink-0 mt-1.5" /><span>白馬八方バスターミナルから徒歩3分の好立地！ゲレンデアクセスも極めてスムーズ</span></li>
                        <li className="flex items-start text-xs sm:text-sm text-stone-700"><span className="w-1.5 h-1.5 rounded-full bg-cyan-600 mr-2 shrink-0 mt-1.5" /><span>板長が毎朝丹精込めて手打ちする信州十割そばと、とろける信州牛ステーキ会席</span></li>
                        <li className="flex items-start text-xs sm:text-sm text-stone-700"><span className="w-1.5 h-1.5 rounded-full bg-cyan-600 mr-2 shrink-0 mt-1.5" /><span>白馬八方温泉源泉掛け流しの檜風呂でスキー・雪山散策の疲れを徹底解消</span></li>
                      </ul>
                    </div>

                    <div className="bg-stone-50 p-3.5 rounded-xl border border-stone-200/60 mt-2">
                      <div className="flex items-baseline justify-between">
                        <span className="text-xs text-stone-500 font-medium">宿泊目安（1名あたり）</span>
                        <span className="text-base sm:text-lg font-bold text-stone-900">¥9,000〜</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="space-y-4 pt-4 border-t border-stone-100">
                  <p className="text-xs sm:text-sm text-stone-700 leading-relaxed">
                    白馬八方の中心部に位置し、「とにかく料理が美味しい」と全国のリピーターから絶大な支持を集める純和風の温泉旅館。宿の真骨頂は、地元・長野県産のそば粉を使い、板長が毎朝打ち立てる喉越しの良い自家製十割そば。さらに夕食には霜降りの美しい信州牛の陶板焼きステーキや、地元農家から直接届く高原野菜の小鉢が所狭しと並び、手作りの温もりに心もお腹も満たされます。浴場には白馬八方温泉の強アルカリ原泉が贅沢に掛け流されており、木の香り爽やかな檜の浴槽で手足を伸ばす時間は至福そのもの。気取らない温かな接客も心地よく、本物の信州の味と名湯に出会える隠れた名宿です。
                  </p>

                  <div className="bg-cyan-50/40 p-4 rounded-xl border border-cyan-100/60">
                    <h5 className="text-xs font-bold text-cyan-950 mb-1 flex items-center gap-1.5">
                      <Award className="w-3.5 h-3.5 text-cyan-700" />
                      宿泊者の生の声・クチコミ抜粋
                    </h5>
                    <p className="text-xs text-stone-600 italic leading-relaxed">
                      「食事は絶品、温泉も最高のお宿本当に食事が素晴らしく美味しかった。ひとつひとつ丁寧に作られたものばかり。センスも良い。こだわりの食材を多く使い、最高に美味しい信濃ユキマスのお刺身、ホックホクの焼きた。」
                    </p>
                  </div>
                  <div className="pt-2">
                    <a
                      href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F30808%2F30808.html"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center w-full py-3 px-6 rounded-xl text-sm font-bold text-white bg-gradient-to-r from-cyan-700 to-slate-800 hover:from-cyan-800 hover:to-slate-900 shadow-sm hover:shadow transition-all group"
                    >
                      <span>白馬八方温泉　まるいし の宿泊プラン・空室状況を楽天トラベルで見る</span>
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
                    グローバルブランドの洗練・温泉付客室と暖炉バーのモダンステイ
                  </span>
                  <div className="flex items-center gap-2">
                    <div className="flex items-center text-amber-500">
                      <Star className="w-4 h-4 fill-current" />
                      <span className="ml-1 text-sm font-bold text-stone-800">3.6</span>
                    </div>
                    <span className="text-xs text-stone-500">（クチコミ 134件）</span>
                  </div>
                </div>

                <h3 className="text-xl sm:text-2xl font-bold text-stone-900 mb-3 leading-snug">
                  <a 
                    href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F68530%2F68530.html" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="hover:text-cyan-700 transition-colors"
                  >
                    4. コートヤード・バイ・マリオット　白馬
                  </a>
                </h3>

                <p className="text-xs sm:text-sm text-stone-600 mb-6 flex items-start gap-1.5">
                  <MapPin className="w-4 h-4 text-rose-500 shrink-0 mt-0.5" />
                  <span>長野県北安曇郡白馬村北城2937（アクセス：ＪＲ大糸線　白馬駅より車で約１０分）</span>
                </p>

                <div className="grid grid-cols-1 md:grid-cols-12 gap-6 mb-6">
                  <div className="md:col-span-5">
                    <div className="relative aspect-[4/3] rounded-xl overflow-hidden bg-stone-100 border border-stone-100 shadow-sm">
                      <Image
                        src="https://img.travel.rakuten.co.jp/share/HOTEL/68530/68530.jpg"
                        alt="コートヤード・バイ・マリオット　白馬"
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
                        <li className="flex items-start text-xs sm:text-sm text-stone-700"><span className="w-1.5 h-1.5 rounded-full bg-cyan-600 mr-2 shrink-0 mt-1.5" /><span>マリオットブランドの洗練されたホスピタリティと快適性を備えたモダンリゾート</span></li>
                        <li className="flex items-start text-xs sm:text-sm text-stone-700"><span className="w-1.5 h-1.5 rounded-full bg-cyan-600 mr-2 shrink-0 mt-1.5" /><span>プライベートな湯浴みが叶う客室温泉風呂（白馬姫川温泉）付きプレミアルーム</span></li>
                        <li className="flex items-start text-xs sm:text-sm text-stone-700"><span className="w-1.5 h-1.5 rounded-full bg-cyan-600 mr-2 shrink-0 mt-1.5" /><span>信州クラフトビールや信州ジビエ、グリル料理を味わうオープンキッチンダイニング</span></li>
                      </ul>
                    </div>

                    <div className="bg-stone-50 p-3.5 rounded-xl border border-stone-200/60 mt-2">
                      <div className="flex items-baseline justify-between">
                        <span className="text-xs text-stone-500 font-medium">宿泊目安（1名あたり）</span>
                        <span className="text-base sm:text-lg font-bold text-stone-900">¥19,629〜</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="space-y-4 pt-4 border-t border-stone-100">
                  <p className="text-xs sm:text-sm text-stone-700 leading-relaxed">
                    和田野の自然豊かな森の中に位置し、マリオット・インターナショナルが展開する洗練されたインターナショナルホテル。落ち着いた和モダンの客室には、ゆったりとしたシモンズ社製ベッドと最新設備が整い、贅沢なプライベート温泉内湯を備えた客室もラインナップ。スキーやスノーボードから戻った後は、誰にも邪魔されず客室で何度でも雪見風呂を愉しむことができます。開放感あふれるレストラン「LAVA ROCK」では、オープンキッチンのグリルで焼き上げる信州産牛肉や地元産ポーク、信州の地ビールや厳選ワインが楽しめ、夜はラウンジの暖炉前でカクテルを傾ける大人のチルタイムを満喫できます。
                  </p>

                  <div className="pt-2">
                    <a
                      href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F68530%2F68530.html"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center w-full py-3 px-6 rounded-xl text-sm font-bold text-white bg-gradient-to-r from-cyan-700 to-slate-800 hover:from-cyan-800 hover:to-slate-900 shadow-sm hover:shadow transition-all group"
                    >
                      <span>コートヤード・バイ・マリオット　白馬 の宿泊プラン・空室状況を楽天トラベルで見る</span>
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
                    白馬三山パノラマ特等席・展望絶景露天「天神の湯」と信州バイキング
                  </span>
                  <div className="flex items-center gap-2">
                    <div className="flex items-center text-amber-500">
                      <Star className="w-4 h-4 fill-current" />
                      <span className="ml-1 text-sm font-bold text-stone-800">4.3</span>
                    </div>
                    <span className="text-xs text-stone-500">（クチコミ 1,372件）</span>
                  </div>
                </div>

                <h3 className="text-xl sm:text-2xl font-bold text-stone-900 mb-3 leading-snug">
                  <a 
                    href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F68532%2F68532.html" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="hover:text-cyan-700 transition-colors"
                  >
                    5. 白馬姫川温泉　白馬ハイランドホテル
                  </a>
                </h3>

                <p className="text-xs sm:text-sm text-stone-600 mb-6 flex items-start gap-1.5">
                  <MapPin className="w-4 h-4 text-rose-500 shrink-0 mt-0.5" />
                  <span>長野県北安曇郡白馬村北城21582（アクセス：ＪＲ白馬駅より徒歩２０分（無料送迎あり）／長野自動車道安曇野ＩＣより６０分／上信越自動車道長野ＩＣより６０分）</span>
                </p>

                <div className="grid grid-cols-1 md:grid-cols-12 gap-6 mb-6">
                  <div className="md:col-span-5">
                    <div className="relative aspect-[4/3] rounded-xl overflow-hidden bg-stone-100 border border-stone-100 shadow-sm">
                      <Image
                        src="https://img.travel.rakuten.co.jp/share/HOTEL/68532/68532.jpg"
                        alt="白馬姫川温泉　白馬ハイランドホテル"
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
                        <li className="flex items-start text-xs sm:text-sm text-stone-700"><span className="w-1.5 h-1.5 rounded-full bg-cyan-600 mr-2 shrink-0 mt-1.5" /><span>白馬八方尾根・白馬三山の白銀大パノラマを真正面に望む高台の絶景ロケーション</span></li>
                        <li className="flex items-start text-xs sm:text-sm text-stone-700"><span className="w-1.5 h-1.5 rounded-full bg-cyan-600 mr-2 shrink-0 mt-1.5" /><span>北アルプスを正面に仰ぐ大パノラマ露天風呂「天神の湯」＆「わらび平の湯」</span></li>
                        <li className="flex items-start text-xs sm:text-sm text-stone-700"><span className="w-1.5 h-1.5 rounded-full bg-cyan-600 mr-2 shrink-0 mt-1.5" /><span>信州郷土料理や熱々の手打ち信州そば、郷土の美味が並ぶ満足バイキング</span></li>
                      </ul>
                    </div>

                    <div className="bg-stone-50 p-3.5 rounded-xl border border-stone-200/60 mt-2">
                      <div className="flex items-baseline justify-between">
                        <span className="text-xs text-stone-500 font-medium">宿泊目安（1名あたり）</span>
                        <span className="text-base sm:text-lg font-bold text-stone-900">¥9,500〜</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="space-y-4 pt-4 border-t border-stone-100">
                  <p className="text-xs sm:text-sm text-stone-700 leading-relaxed">
                    白馬村の高台に堂々と建ち、客室や露天風呂の正面に白馬三山（白馬岳・杓子岳・白馬鑓ヶ岳）の大パノラマが遮るものなく広がる絶景自慢のホテル。宿の名物「天神の湯」の露天風呂に身を浸せば、白銀に輝く北アルプスの峻険な山並みが眼前に迫り、朝日に染まるモルゲンロートの神々しい瞬間は言葉を失うほどの感動を呼びます。泉質は保温効果の高い塩化物泉「白馬姫川温泉」で、身体が芯から温まり湯冷めしません。夕食はライブ感あるバイキングで、信州そばや出来立ての天ぷら、地元のお母さんたちが手作りする信州のおばんざいが並び、アクティブに冬の白馬を楽しみたい旅人にぴったりです。
                  </p>

                  <div className="bg-cyan-50/40 p-4 rounded-xl border border-cyan-100/60">
                    <h5 className="text-xs font-bold text-cyan-950 mb-1 flex items-center gap-1.5">
                      <Award className="w-3.5 h-3.5 text-cyan-700" />
                      宿泊者の生の声・クチコミ抜粋
                    </h5>
                    <p className="text-xs text-stone-600 italic leading-relaxed">
                      「観光地への好アクセスと海の幸を堪能色々な観光地へのアクセスが最高でした。朝夕のバイキングでは海のものが美味しい。他にも地のものを沢山頂きました。バイキング会場から見える景色も良かっ。」
                    </p>
                  </div>
                  <div className="pt-2">
                    <a
                      href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F68532%2F68532.html"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center w-full py-3 px-6 rounded-xl text-sm font-bold text-white bg-gradient-to-r from-cyan-700 to-slate-800 hover:from-cyan-800 hover:to-slate-900 shadow-sm hover:shadow transition-all group"
                    >
                      <span>白馬姫川温泉　白馬ハイランドホテル の宿泊プラン・空室状況を楽天トラベルで見る</span>
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
                  長野県の宿に実質2,000円で泊まる賢い方法
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
              冬の白馬・八方尾根・栂池高原旅行でよくある質問（FAQ）
            </h2>

            <div className="space-y-4">
              <div className="p-4 rounded-xl bg-stone-50 border border-stone-200/70">
                <h3 className="font-bold text-stone-900 text-sm mb-2">Q1. 白馬八方尾根スキー場のベストシーズンと雪質の特徴は？</h3>
                <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                  HAKUBA VALLEYの白馬八方尾根スキー場は、例年12月中旬から4月上旬まで滑走可能です。特に極上のドライパウダースノーを満喫できるベストシーズンは12月下旬から2月中旬。北アルプスの高標高エリアに位置するため、サラサラの粉雪（JAPOW）が降り積もり、世界中からスキーヤー・スノーボーダーが訪れます。
                </p>
              </div>

              <div className="p-4 rounded-xl bg-stone-50 border border-stone-200/70">
                <h3 className="font-bold text-stone-900 text-sm mb-2">Q2. 白馬八方温泉の泉質と美肌効果について教えてください。</h3>
                <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                  白馬八方温泉は、蛇紋岩地層から湧出するpH11.2を超える日本屈指の強アルカリ性単純温泉です。高いアルカリ成分が肌の古い角質をやさしく落とし、浸かるだけでツルツルの美肌になると評判の「美肌の湯」です。また、天然水素を含有している点でも世界的に希少な泉質です。
                </p>
              </div>

              <div className="p-4 rounded-xl bg-stone-50 border border-stone-200/70">
                <h3 className="font-bold text-stone-900 text-sm mb-2">Q3. 冬の白馬へ車や電車で行く際の注意点は？</h3>
                <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                  電車・新幹線利用の場合、北陸新幹線「長野駅」東口から特急バス（アルピコ交通）で白馬八方バスターミナルまで約75分と非常に快適です。車の場合は、長野道「安曇野IC」または上信越道「長野IC」から約60分ですが、豪雪地帯のためスタッドレスタイヤまたはタイヤチェーンの装着が絶対に不可欠です。
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 内部リンク・関連特集セクション */}
        <section className="max-w-4xl mx-auto px-4 mb-12">
          <div className="bg-stone-100 rounded-2xl p-6 sm:p-8 border border-stone-200 space-y-4">
            <h3 className="text-base sm:text-lg font-bold text-stone-900">あわせて読みたい長野県＆冬の厳選温泉特集</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              <Link href="/prefectures/nagano" className="p-3 bg-white rounded-xl border border-stone-200 text-xs font-semibold text-stone-800 hover:text-cyan-700 hover:border-cyan-300 transition flex items-center justify-between">
                <span>長野県のおすすめ観光名所＆温泉宿一覧</span>
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
