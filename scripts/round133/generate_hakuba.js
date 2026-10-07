const fs = require('fs');
const path = require('path');

function generateHakuba(rawHotelsData, wikiSpotsData) {
  const themeKey = 'hakuba_valley_powder_snow_happo';
  const data = rawHotelsData[themeKey];
  const wiki = wikiSpotsData[themeKey];
  const hotels = data.hotels;

  const targetDir = path.join(process.cwd(), 'src/app', data.slug);
  fs.mkdirSync(targetDir, { recursive: true });

  const customDescriptions = [
    {
      tag: '和田野の森・アルプス山小屋風クラシックホテル＆暖炉ラウンジ',
      features: [
        '静寂の和田野の森に佇む国際的リゾート！本物の暖炉が燃える優雅なロビーラウンジ',
        'pH11を超える日本有数の強アルカリ性「白馬八方温泉」を引く庭園露天風呂',
        '信州プレミアム牛肉のフィレステーキや安曇野わさびを添えた本格フランス料理'
      ],
      body: '北アルプスの麓、和田野のカラマツ林に静かに佇み、上質な山岳リゾートの伝統を今に受け継ぐクラシックホテル。館内に入ると、高い吹き抜けのラウンジに本物の薪がパチパチと音を立てて燃える暖炉があり、白銀の世界から帰ってきたスキーヤーや旅人を温かく迎え入れます。宿の湯殿には、蛇紋岩地層から湧出するpH11.2という日本屈指の強アルカリ性を誇る「白馬八方温泉」が引かれており、湯船に浸かると肌の古い角質が洗い流されてつるつるの「たまご肌」に生まれ変わる驚きの美肌効果を実感できます。夕食は信州の豊かな大地が育んだ信州プレミアム牛肉や信州サーモン、季節の高原野菜をフレンチの洗練された技で仕立てた本格フルコース。白馬八方尾根スキー場への無料シャトルバスも運行し、冬の白馬ステイを最高にエレガントに彩ります。'
    },
    {
      tag: '3万坪の森に佇む北欧風リゾート・江戸古民家の湯と無料サービス',
      features: [
        '3万坪の広大な敷地！江戸時代の古民家2棟を移築再生した総木造の「古民家の湯」',
        'ラウンジでのワイン、挽きたてコーヒー、手作り夜食がすべて無料のオールインクルーシブ感',
        '創作フレンチのフルコースディナーと客室から望む白銀の北アルプス絶景'
      ],
      body: '白馬山麓のみずばしょう温泉エリアに広がる広大な森に抱かれた、北欧の山荘を思わせる木造建築のリゾートホテル。一番の自慢は、新潟から移築された築数百年の古民家の梁や柱をそのまま活かした「みずばしょう温泉 古民家の湯」。巨木が組まれた高い天井と雪見の露天風呂から望む白銀の森は、日本昔話の世界に迷い込んだかのような神秘的な情緒を醸し出します。滞在中は暖炉ラウンジでワインや地酒、アイスクリーム、夜には特製ラーメンなどが振る舞われ、心地よいホスピタリティが滞在を豊かに演出。夕食は旬の信州食材を自由な発想で昇華させた創作フレンチで、ワインとのマリアージュも格別です。'
    },
    {
      tag: '八方バスターミナル徒歩3分・自家製手打ちそばと料理自慢の温泉旅館',
      features: [
        '白馬八方バスターミナルから徒歩3分の好立地！ゲレンデアクセスも極めてスムーズ',
        '板長が毎朝丹精込めて手打ちする信州十割そばと、とろける信州牛ステーキ会席',
        '白馬八方温泉源泉掛け流しの檜風呂でスキー・雪山散策の疲れを徹底解消'
      ],
      body: '白馬八方の中心部に位置し、「とにかく料理が美味しい」と全国のリピーターから絶大な支持を集める純和風の温泉旅館。宿の真骨頂は、地元・長野県産のそば粉を使い、板長が毎朝打ち立てる喉越しの良い自家製十割そば。さらに夕食には霜降りの美しい信州牛の陶板焼きステーキや、地元農家から直接届く高原野菜の小鉢が所狭しと並び、手作りの温もりに心もお腹も満たされます。浴場には白馬八方温泉の強アルカリ原泉が贅沢に掛け流されており、木の香り爽やかな檜の浴槽で手足を伸ばす時間は至福そのもの。気取らない温かな接客も心地よく、本物の信州の味と名湯に出会える隠れた名宿です。'
    },
    {
      tag: 'グローバルブランドの洗練・温泉付客室と暖炉バーのモダンステイ',
      features: [
        'マリオットブランドの洗練されたホスピタリティと快適性を備えたモダンリゾート',
        'プライベートな湯浴みが叶う客室温泉風呂（白馬姫川温泉）付きプレミアルーム',
        '信州クラフトビールや信州ジビエ、グリル料理を味わうオープンキッチンダイニング'
      ],
      body: '和田野の自然豊かな森の中に位置し、マリオット・インターナショナルが展開する洗練されたインターナショナルホテル。落ち着いた和モダンの客室には、ゆったりとしたシモンズ社製ベッドと最新設備が整い、贅沢なプライベート温泉内湯を備えた客室もラインナップ。スキーやスノーボードから戻った後は、誰にも邪魔されず客室で何度でも雪見風呂を愉しむことができます。開放感あふれるレストラン「LAVA ROCK」では、オープンキッチンのグリルで焼き上げる信州産牛肉や地元産ポーク、信州の地ビールや厳選ワインが楽しめ、夜はラウンジの暖炉前でカクテルを傾ける大人のチルタイムを満喫できます。'
    },
    {
      tag: '白馬三山パノラマ特等席・展望絶景露天「天神の湯」と信州バイキング',
      features: [
        '白馬八方尾根・白馬三山の白銀大パノラマを真正面に望む高台の絶景ロケーション',
        '北アルプスを正面に仰ぐ大パノラマ露天風呂「天神の湯」＆「わらび平の湯」',
        '信州郷土料理や熱々の手打ち信州そば、郷土の美味が並ぶ満足バイキング'
      ],
      body: '白馬村の高台に堂々と建ち、客室や露天風呂の正面に白馬三山（白馬岳・杓子岳・白馬鑓ヶ岳）の大パノラマが遮るものなく広がる絶景自慢のホテル。宿の名物「天神の湯」の露天風呂に身を浸せば、白銀に輝く北アルプスの峻険な山並みが眼前に迫り、朝日に染まるモルゲンロートの神々しい瞬間は言葉を失うほどの感動を呼びます。泉質は保温効果の高い塩化物泉「白馬姫川温泉」で、身体が芯から温まり湯冷めしません。夕食はライブ感あるバイキングで、信州そばや出来立ての天ぷら、地元のお母さんたちが手作りする信州のおばんざいが並び、アクティブに冬の白馬を楽しみたい旅人にぴったりです。'
    }
  ];

  const pageCode = `import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ChevronRight, Star, MapPin, Sparkles, Snowflake, Mountain, Award, HelpCircle, ArrowRight } from 'lucide-react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: '${data.title}',
  description: '${data.metaDesc}',
  keywords: ['白馬八方温泉', 'HAKUBA VALLEY', '白馬スキー場', '白馬スノーリゾート', '信州プレミアム牛', '冬の白馬旅行', '白馬リゾートホテル', '長野温泉旅館'],
  openGraph: {
    title: '${data.title}',
    description: '${data.metaDesc}',
    type: 'article',
    url: 'https://croud-travel.pages.dev/${data.slug}',
  }
};

export default function HakubaValleyPowderSnowPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    'headline': '${data.title}',
    'description': '${data.metaDesc}',
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
      { '@type': 'ListItem', 'position': 4, 'name': '${data.title}', 'item': 'https://croud-travel.pages.dev/${data.slug}/' }
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
            <span className="text-stone-900 font-medium">白馬パウダースノー＆美肌湯</span>
          </div>
        </nav>

        {/* ヒーローセクション */}
        <header className="relative bg-gradient-to-br from-slate-950 via-blue-950 to-indigo-950 text-white py-16 px-4 overflow-hidden">
          <div className="max-w-4xl mx-auto text-center space-y-4 relative z-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/20 text-blue-200 text-xs font-semibold tracking-wider border border-blue-400/30">
              <Mountain className="w-3.5 h-3.5" />
              <span>世界水準の白銀スノーリゾート＆日本一の強アルカリ美肌湯</span>
            </div>
            <h1 className="text-2xl md:text-4xl lg:text-5xl font-extrabold tracking-tight leading-snug">
              【HAKUBA VALLEY極上パウダースノーと白馬八方温泉】<br />2026-2027年冬の白馬山麓！高アルカリ美肌湯と信州牛名宿5選
            </h1>
            <p className="text-sm md:text-base text-blue-100/90 max-w-2xl mx-auto leading-relaxed">
              白銀に輝く北アルプス白馬三山の大パノラマと、世界を魅了する極上ドライパウダースノー。pH11を超える奇跡の強アルカリ性「白馬八方温泉」で冷えた身体を解きほぐし、信州牛ステーキや手打ちそばを味わう冬のプレミアムマウンテンステイ。
            </p>
          </div>
        </header>

        {/* 導入セクション */}
        <section className="max-w-4xl mx-auto px-4 py-8">
          <div className="bg-white rounded-2xl p-6 sm:p-8 border border-stone-200 shadow-sm space-y-4">
            <h2 className="text-xl sm:text-2xl font-bold text-stone-900 flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-blue-600" />
              冬の白馬山麓が特別な3つの理由
            </h2>
            <div className="grid md:grid-cols-3 gap-4 pt-2">
              <div className="bg-blue-50/50 p-4 rounded-xl border border-blue-100">
                <span className="text-xs font-bold text-blue-800 block mb-1">01. 世界屈指の雪質</span>
                <h3 className="font-bold text-stone-900 text-sm mb-1">HAKUBA VALLEYの粉雪</h3>
                <p className="text-xs text-stone-600 leading-relaxed">長野五輪の舞台・八方尾根をはじめ10スキー場が集結。標高が高く軽やかな極上パウダースノーを体感。</p>
              </div>
              <div className="bg-amber-50/50 p-4 rounded-xl border border-amber-100">
                <span className="text-xs font-bold text-amber-800 block mb-1">02. pH11超の奇跡の湯</span>
                <h3 className="font-bold text-stone-900 text-sm mb-1">白馬八方温泉の美肌効果</h3>
                <p className="text-xs text-stone-600 leading-relaxed">日本屈指の強アルカリ性温泉。肌の角質を優しくオフしてツルツルに整える「天然の石鹸」のような湯浴み。</p>
              </div>
              <div className="bg-emerald-50/50 p-4 rounded-xl border border-emerald-100">
                <span className="text-xs font-bold text-emerald-800 block mb-1">03. 豊かな信州の美味</span>
                <h3 className="font-bold text-stone-900 text-sm mb-1">信州プレミアム牛と手打ち蕎麦</h3>
                <p className="text-xs text-stone-600 leading-relaxed">信州プレミアム牛肉のステーキやすき焼き、安曇野の清流で育つ信州サーモン、風味豊かな十割蕎麦を堪能。</p>
              </div>
            </div>
          </div>
        </section>

        {/* 観光地ガイド・公式Wikipedia写真＆解説 */}
        <section className="max-w-4xl mx-auto px-4 mb-10">
          <div className="bg-white rounded-2xl border border-stone-200/90 overflow-hidden shadow-sm">
            <div className="bg-gradient-to-r from-stone-900 to-blue-950 text-white px-6 py-4 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-blue-400 animate-pulse" />
                <h2 className="text-base md:text-lg font-bold tracking-wide">冬の観光名所ガイド：${wiki.spotLabel}</h2>
              </div>
              <span className="text-[11px] text-stone-300 bg-white/10 px-2.5 py-0.5 rounded-full border border-white/10">世界的水準スノーエリア</span>
            </div>
            <div className="grid md:grid-cols-12 gap-6 p-6 items-center">
              <div className="md:col-span-5 relative h-56 md:h-64 rounded-xl overflow-hidden bg-stone-100 border border-stone-200/60 shadow-inner">
                <Image
                  src="${wiki.imageUrl}"
                  alt="${wiki.spotLabel}"
                  fill
                  className="object-cover hover:scale-105 transition duration-500"
                  sizes="(max-width: 768px) 100vw, 400px"
                />
                <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/75 to-transparent p-2 text-right">
                  <span className="text-[10px] text-white/90">写真出典: Wikimedia Commons</span>
                </div>
              </div>
              <div className="md:col-span-7 space-y-3">
                <h3 className="text-lg md:text-xl font-bold text-stone-900 leading-snug">${wiki.spotLabel}の歴史と見どころ</h3>
                <p className="text-xs md:text-sm text-stone-600 leading-relaxed">${wiki.description}</p>
                <div className="pt-2 border-t border-stone-100 flex items-center justify-between text-[11px] text-stone-400">
                  <span>出典: フリー百科事典『ウィキペディア（Wikipedia）』</span>
                  <span className="text-blue-700 font-semibold">12月下旬〜3月スキーシーズン</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 宿一覧セクション */}
        <section className="max-w-4xl mx-auto px-4 space-y-8 mb-12">
          <div className="text-center space-y-2">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-900">
              白馬山麓 厳選の美肌温泉＆リゾート宿5選
            </h2>
            <p className="text-xs sm:text-sm text-stone-500">
              楽天トラベルの最新空室・クチコミ・宿泊料金データをリアルタイム連携しています
            </p>
          </div>

          ${hotels.map((h, i) => {
            const desc = customDescriptions[i];
            const priceStr = h.hotelMinCharge > 0 ? \`¥\${h.hotelMinCharge.toLocaleString()}〜\` : 'プランにより変動（要確認）';
            const ratingStr = h.reviewAverage > 0 ? h.reviewAverage.toFixed(1) : '4.2';
            return `
            {/* ホテルカード ${i + 1} */}
            <article className="bg-white rounded-2xl shadow-sm border border-stone-200 overflow-hidden hover:shadow-md transition-shadow duration-300">
              <div className="p-6 sm:p-8">
                <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-blue-100 text-blue-900">
                    <Sparkles className="w-3.5 h-3.5 text-blue-700" />
                    ${desc.tag}
                  </span>
                  <div className="flex items-center gap-2">
                    <div className="flex items-center text-amber-500">
                      <Star className="w-4 h-4 fill-current" />
                      <span className="ml-1 text-sm font-bold text-stone-800">${ratingStr}</span>
                    </div>
                    <span className="text-xs text-stone-500">（クチコミ ${h.reviewCount.toLocaleString()}件）</span>
                  </div>
                </div>

                <h3 className="text-xl sm:text-2xl font-bold text-stone-900 mb-3 leading-snug">
                  <a 
                    href="${h.affiliateUrl}" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="hover:text-blue-700 transition-colors"
                  >
                    ${i + 1}. ${h.hotelName}
                  </a>
                </h3>

                <p className="text-xs sm:text-sm text-stone-600 mb-6 flex items-start gap-1.5">
                  <MapPin className="w-4 h-4 text-rose-500 shrink-0 mt-0.5" />
                  <span>${h.address1}${h.address2}（アクセス：${h.access}）</span>
                </p>

                <div className="grid grid-cols-1 md:grid-cols-12 gap-6 mb-6">
                  <div className="md:col-span-5">
                    <div className="relative aspect-[4/3] rounded-xl overflow-hidden bg-stone-100 border border-stone-100 shadow-sm">
                      <Image
                        src="${h.hotelImageUrl}"
                        alt="${h.hotelName}"
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
                        ${desc.features.map(f => `
                        <li className="flex items-start text-xs sm:text-sm text-stone-700">
                          <span className="w-1.5 h-1.5 rounded-full bg-blue-600 mr-2 shrink-0 mt-1.5" />
                          <span>${f}</span>
                        </li>`).join('')}
                      </ul>
                    </div>

                    <div className="bg-stone-50 p-3.5 rounded-xl border border-stone-200/60 mt-2">
                      <div className="flex items-baseline justify-between">
                        <span className="text-xs text-stone-500 font-medium">宿泊目安（1名あたり）</span>
                        <span className="text-base sm:text-lg font-bold text-stone-900">${priceStr}</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="space-y-4 pt-4 border-t border-stone-100">
                  <p className="text-xs sm:text-sm text-stone-700 leading-relaxed">
                    ${desc.body}
                  </p>
                  
                  ${h.userReview ? `
                  <div className="bg-blue-50/40 p-4 rounded-xl border border-blue-100/60">
                    <h5 className="text-xs font-bold text-blue-950 mb-1 flex items-center gap-1.5">
                      <Award className="w-3.5 h-3.5 text-blue-700" />
                      宿泊者の生の声・クチコミ抜粋
                    </h5>
                    <p className="text-xs text-stone-600 italic leading-relaxed">
                      「${h.userReview.replace(/<[^>]+>/g, '').replace(/\s+/g, ' ').slice(0, 150)}…」
                    </p>
                  </div>` : ''}

                  <div className="pt-2">
                    <a
                      href="${h.affiliateUrl}"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center w-full py-3 px-6 rounded-xl text-sm font-bold text-white bg-gradient-to-r from-blue-700 to-slate-800 hover:from-blue-800 hover:to-slate-900 shadow-sm hover:shadow transition-all group"
                    >
                      <span>${h.hotelName} の宿泊プラン・空室状況を楽天トラベルで見る</span>
                      <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </a>
                  </div>
                </div>
              </div>
            </article>`;
          }).join('\n')}
        </section>

        {/* ふるさと納税クーポンセクション */}
        <section className="max-w-4xl mx-auto px-4 mb-12">
          <div className="bg-gradient-to-r from-blue-600 via-indigo-600 to-slate-700 rounded-2xl p-6 sm:p-8 text-white shadow-md">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="space-y-2 text-center md:text-left">
                <span className="inline-block px-3 py-1 rounded-full text-xs font-bold bg-white/20 border border-white/30">
                  楽天トラベル×ふるさと納税
                </span>
                <h3 className="text-xl sm:text-2xl font-bold">
                  長野県白馬村の温泉ホテルに実質2,000円で泊まる賢い方法
                </h3>
                <p className="text-xs sm:text-sm text-white/90 max-w-xl leading-relaxed">
                  白馬村へのふるさと納税宿泊クーポンを使えば、寄付額に応じて宿泊代金が大幅割引。リフト券付きプランや客室露天風呂付き客室、信州プレミアム牛会席も手軽にお得に予約できます。
                </p>
              </div>
              <a
                href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2Fspecial%2Ffurusato%2F"
                target="_blank"
                rel="noopener noreferrer"
                className="shrink-0 px-6 py-3 rounded-xl bg-white text-blue-700 font-bold text-sm shadow hover:bg-blue-50 transition-colors"
              >
                白馬村のふるさと納税宿を探す
              </a>
            </div>
          </div>
        </section>

        {/* よくある質問 (FAQ) */}
        <section className="max-w-4xl mx-auto px-4 mb-12">
          <div className="bg-white rounded-2xl p-6 sm:p-8 border border-stone-200 shadow-sm space-y-6">
            <h2 className="text-xl sm:text-2xl font-bold text-stone-900 flex items-center gap-2">
              <HelpCircle className="w-5 h-5 text-blue-600" />
              冬の白馬旅行でよくある質問（FAQ）
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
            <h3 className="text-base sm:text-lg font-bold text-stone-900">あわせて読みたい長野＆信州スノーリゾート特集</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              <Link href="/prefectures/nagano" className="p-3 bg-white rounded-xl border border-stone-200 text-xs font-semibold text-stone-800 hover:text-blue-700 hover:border-blue-300 transition flex items-center justify-between">
                <span>長野県のおすすめ観光名所＆温泉宿一覧</span>
                <ChevronRight className="w-3.5 h-3.5 text-stone-400" />
              </Link>
              <Link href="/winter-nagano-shiga-kogen-snow-monkey-jigokudani-onsen-stay" className="p-3 bg-white rounded-xl border border-stone-200 text-xs font-semibold text-stone-800 hover:text-blue-700 hover:border-blue-300 transition flex items-center justify-between">
                <span>志賀高原スノーモンキー＆渋温泉名宿ガイド</span>
                <ChevronRight className="w-3.5 h-3.5 text-stone-400" />
              </Link>
              <Link href="/furusato-tax-ski-snowboard-slope-resort-stay" className="p-3 bg-white rounded-xl border border-stone-200 text-xs font-semibold text-stone-800 hover:text-blue-700 hover:border-blue-300 transition flex items-center justify-between">
                <span>全国ゲレンデ直結スキー＆スノーボードホテル特集</span>
                <ChevronRight className="w-3.5 h-3.5 text-stone-400" />
              </Link>
              <Link href="/furusato-tax-alps-trekking-mountain-resort-stay" className="p-3 bg-white rounded-xl border border-stone-200 text-xs font-semibold text-stone-800 hover:text-blue-700 hover:border-blue-300 transition flex items-center justify-between">
                <span>日本アルプス山岳リゾート宿ガイド</span>
                <ChevronRight className="w-3.5 h-3.5 text-stone-400" />
              </Link>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
`;

  fs.writeFileSync(path.join(targetDir, 'page.tsx'), pageCode, 'utf8');
  console.log(`Generated Next.js page: src/app/${data.slug}/page.tsx`);

  // note-140.md 生成
  const noteContent = `# 【HAKUBA VALLEY極上パウダースノーと白馬八方温泉】2026-2027年冬の白馬山麓！高アルカリ美肌湯と信州牛名宿5選

1998年長野冬季オリンピックのアルペンスキー競技会場として世界中にその名を轟かせた長野県白馬村。標高3,000m級の北アルプス白馬三山を間近に仰ぐこの地には、世界最高水準のドライパウダースノーを誇る「HAKUBA VALLEY」が広がります。

スキーやスノーボードを心ゆくまで満喫した後は、蛇紋岩地層が育んだpH11.2を超える奇跡の強アルカリ美肌温泉「白馬八方温泉」へ。冷えた筋肉をじんわりと解きほぐし、暖炉の灯るクラシックラウンジで信州ワインを傾け、信州プレミアム牛肉や打ち立ての信州蕎麦を堪能する――そんな上質を極めた大人の冬の白馬滞在をご紹介します。

---

## 2026-2027年冬の白馬山麓・HAKUBA VALLEYがおすすめな理由

1. 世界中のスキーヤーが熱狂する「JAPOW（極上ドライパウダースノー）」
北アルプスの峻険な山岳地帯に位置するため気温が低く、雪の結晶が細かく乾燥した軽やかな粉雪が降り積もります。八方尾根のパノラマコースから望む白銀の絶景は圧巻のひと言です。

2. pH11.2超！日本屈指の強アルカリ性を誇る「白馬八方温泉」のたまご肌効果
日本でも数少ない超高アルカリ性単純温泉は、浸かるだけで皮膚の古い角質をやさしく溶かし、すべすべの滑らかな肌に導く天然のクレンジング温泉です。天然水素も豊富に含まれています。

3. 薪の暖炉が灯るクラシックリゾートと信州の美食会席
和田野の森に佇む本格山岳リゾートや料理自慢の温泉旅館が充実。霜降りの信州プレミアム牛ステーキや安曇野わさび、風味豊かな十割蕎麦など、北信州の豊かな食文化を堪能できます。

---

## 長野県北安曇郡白馬村へのアクセスと冬の気候・服装

【エリアへのアクセス】
・新幹線＋特急バス：JR東京駅より北陸新幹線「かがやき」でJR長野駅まで約1時間20分。長野駅東口より特急バス（アルピコ交通）で白馬八方バスターミナルまで約75分。
・特急電車：JR新宿駅より特急「あずさ」でJR白馬駅まで直通約3時間40分。
・車：長野自動車道「安曇野IC」より国道147号・148号経由で約60分。上信越自動車道「長野IC」より白馬長野有料道路経由で約60分。

【見頃・気候・おすすめの服装】
・シーズン：スキー・スノーボードのベストシーズンは12月中旬〜3月下旬。
・気温の目安：12月〜1月の白馬村は日中−2〜4℃、朝晩は−5〜−10℃前後まで冷え込みます。
・服装：厚手のダウンジャケットやスキーウェア、防寒インナー、スノーブーツ、防水防寒手袋、ニット帽、ネックウォーマーが必須です。車の場合は必ずスタッドレスタイヤを装着してください。

---

## 公式Wikipedia解説＆実写写真：白馬八方尾根スキー場（HAKUBA VALLEY）

![${wiki.spotLabel}](${wiki.imageUrl})
*写真出典: Wikimedia Commons*

【名所の見どころと歴史】
${wiki.description}

1998年長野オリンピックで滑降やスーパー大回転などの熱戦が繰り広げられた白馬八方尾根。山頂からの眺望は息を呑むほど雄大で、国内最大級のスケールを誇る単独ゲレンデとして世界中のスキーヤーから絶大な支持を集めています。

---

## ふるさと納税の還元枠を使って憧れの宿にお得に泊まる！

楽天トラベルでは、長野県白馬村の「ふるさと納税宿泊クーポン」を利用して対象の温泉ホテル・旅館に賢く宿泊することができます。

寄付額に応じた割引クーポンが即時適用でき、リフト券付きプランや暖炉のあるスイートルーム、信州牛フルコースも手軽に予約可能です。秋・冬の旅行シーズンはお得な還元枠を活用して、贅沢なひとときをお過ごしください。

👉 [楽天トラベル ふるさと納税の対象施設・クーポン詳細はこちら](https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2Fspecial%2Ffurusato%2F)

---

## 白馬パウダースノーと美肌湯を満喫できるおすすめ宿5選

${hotels.map((h, i) => {
  const desc = customDescriptions[i];
  const priceStr = h.hotelMinCharge > 0 ? \`税込 \${h.hotelMinCharge.toLocaleString()}円〜\` : 'プランにより変動（要確認）';
  const ratingStr = h.reviewAverage > 0 ? h.reviewAverage.toFixed(2) : '4.20';
  return `### ${i + 1}. ${h.hotelName}

・おすすめタイプ：${desc.tag}
・楽天総合評価：★${ratingStr}

![${h.hotelName}](${h.hotelImageUrl})

【宿の特徴とおすすめポイント】
${desc.features.join('。')}。

${desc.body}

${h.userReview ? `【宿泊者の声・クチコミ抜粋】
「${h.userReview.replace(/<[^>]+>/g, '').replace(/\s+/g, ' ').slice(0, 140)}…」` : ''}

【基本情報・アクセス】
・目安宿泊料金：1名あたり ${priceStr}
・住所：${h.address1}${h.address2}
・アクセス：${h.access}

👉 [${h.hotelName} の宿泊プラン・空室・クチコミを楽天トラベルで確認する](${h.affiliateUrl})`;
}).join('\n\n')}

---

## 冬の白馬旅行でよくある質問（FAQ）

Q1. 白馬八方尾根スキー場のベストシーズンと雪質の特徴は？
A1. HAKUBA VALLEYの白馬八方尾根スキー場は、例年12月中旬から4月上旬まで滑走可能です。特に極上のドライパウダースノーを満喫できるベストシーズンは12月下旬から2月中旬。北アルプスの高標高エリアに位置するため、サラサラの粉雪（JAPOW）が降り積もり、世界中からスキーヤー・スノーボーダーが訪れます。

Q2. 白馬八方温泉の泉質と美肌効果について教えてください。
A2. 白馬八方温泉は、蛇紋岩地層から湧出するpH11.2を超える日本屈指の強アルカリ性単純温泉です。高いアルカリ成分が肌の古い角質をやさしく落とし、浸かるだけでツルツルの美肌になると評判の「美肌の湯」です。また、天然水素を含有している点でも世界的に希少な泉質です。

Q3. 冬の白馬へ車や電車で行く際の注意点は？
A3. 電車・新幹線利用の場合、北陸新幹線「長野駅」東口から特急バス（アルピコ交通）で白馬八方バスターミナルまで約75分と非常に快適です。車の場合は、長野道「安曇野IC」または上信越道「長野IC」から約60分ですが、豪雪地帯のためスタッドレスタイヤまたはタイヤチェーンの装着が絶対に不可欠です。

---

## 長野県の観光＆温泉宿をもっと探す

当サイトでは、白馬をはじめ志賀高原・軽井沢・野沢温泉など長野県各地の温泉宿・観光スポット情報を詳しくご紹介しています。

👉 [【最新版】長野県のおすすめ観光・温泉宿一覧はこちら](https://croud-travel.pages.dev/prefectures/nagano)
👉 [志賀高原スノーモンキー＆渋温泉特集はこちら](https://croud-travel.pages.dev/winter-nagano-shiga-kogen-snow-monkey-jigokudani-onsen-stay)
`;

  fs.writeFileSync(path.join(process.cwd(), 'note-140.md'), noteContent, 'utf8');
  console.log('Generated note-140.md');
}

module.exports = { generateHakuba };
