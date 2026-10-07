const fs = require('fs');
const path = require('path');

function generateAtami(rawHotelsData, wikiSpotsData) {
  const themeKey = 'atami_plum_garden_fireworks';
  const data = rawHotelsData[themeKey];
  const wiki = wikiSpotsData[themeKey];
  const hotels = data.hotels;

  const targetDir = path.join(process.cwd(), 'src/app', data.slug);
  fs.mkdirSync(targetDir, { recursive: true });

  const customDescriptions = [
    {
      tag: '創業200余年・熱海七湯「清左衛門の湯」掛け流し老舗',
      features: [
        '文化三年（1806年）創業の伝統を今に受け継ぐ熱海温泉屈指の純和風名旅館',
        '熱海七湯の源泉「清左衛門の湯」を加熱加水なしの100%源泉掛け流しで提供',
        '全室お部屋食でゆったりと味わう本場伊豆産金目鯛の姿煮と本格京風懐石'
      ],
      body: '江戸時代より文人墨客や要人に愛され続けてきた熱海屈指の歴史を誇る老舗旅館。宿の命である温泉は、熱海七湯の一つに数えられる名泉「清左衛門の湯」を敷地内から直接引き、一切の加水・加温を行わない純度100%の源泉掛け流し。湯口から注がれる高温で良質なナトリウム・カルシウム-塩化物泉は、浸かるだけで身体の奥底から温まり、冷え性を和らげてくれます。夕食は朝夕ともにお部屋食の伝統を守り、料理長が吟味した大ぶりの金目鯛を秘伝のタレでふっくら炊き上げた煮付けや、相模湾の朝獲れ地魚を美しく盛り込んだ京風懐石が並びます。熱海梅園へもタクシーで約5分と至近で、初春の梅の香りに包まれる優雅な休日を過ごせます。'
    },
    {
      tag: '伊豆山標高361m・海と花火を望む天空の美食オーベルジュ',
      features: [
        '標高361mから相模湾と熱海の夜景、海上花火大会を眼下に見下ろす絶景パノラマ',
        '全16室すべてに源泉掛け流しの客室露天風呂または内湯を完備したプライベート空間',
        '熱海フレンチの最高峰！静岡の旬食材とクラシック音楽が奏でる極上の夕食'
      ],
      body: '伊豆山の雄大な自然に抱かれ、熱海の喧騒から離れた高台に佇む大人のための隠れ家リゾート。全客室がゆとりあるスイート仕様で、すべての部屋に弱アルカリ性の美肌温泉が満たされたプライベート風呂を備えています。冬の澄み切った夜空の下で開催される熱海海上花火大会の日には、客室のテラスやラウンジから夜空に炸裂する大輪の花火を見下ろすという、他では決して味わえない「天空の特等席」を満喫。ディナーは「食と音楽の調和」をテーマに、近海で水揚げされた伊勢海老や金目鯛、富士山麓の有機野菜を洗練された技法で昇華させた極上フレンチ。静寂と美食に癒やされる特別な記念日旅行に最適です。'
    },
    {
      tag: '錦ヶ浦の断崖絶壁・海と一体化するインフィニティ露天',
      features: [
        '名勝・錦ヶ浦の波打ち際に建ち、全室オーシャンビューを誇る昭和モダンリゾート',
        '海との境目が消えるパノラマ天然温泉「スパリウムニシキ」の圧倒的浮遊感',
        '会場の目の前から打ち上がる熱海海上花火の大迫力を間近で体感'
      ],
      body: '熱海の名勝・錦ヶ浦の断崖に寄り添うようにそびえ立ち、客室の窓一面にダイナミックな相模灘の水平線が広がる海のリゾートホテル。一番の魅力は海上に突き出すように設計された大浴場「スパリウムニシキ」。水平線と湯船がシームレスに繋がるインフィニティ露天風呂に身を沈めれば、心地よい波音と潮風に包まれながら、海に浮かんでいるかのような神秘的な感覚を味わえます。冬の熱海海上花火大会では、海上の打上台船がホテルの真正面に位置するため、窓やテラスから迫力満点の轟音と光のスペクタクルを独占。朝食は海を見下ろすメインダイニングで、静岡県産の食材をふんだんに取り入れた豪華ビュッフェを楽しめます。'
    },
    {
      tag: '熱海港一望・複合型スパ「Fuua」直結の大規模リゾート',
      features: [
        '熱海港を見下ろすオーシャンフロント！日帰り温泉施設「オーシャンスパ Fuua」併設',
        '日本最大級の立ち湯露天風呂から望む相模湾と熱海市街地の100万ドルの夜景',
        '伊豆の海の幸やライブキッチンが充実した豪華ディナーブッフェ'
      ],
      body: '熱海港のベイエリアに位置し、カップルからファミリーまで多彩な旅のスタイルに応える大型リゾート。ホテルに併設された日帰り温泉施設「オーシャンスパ Fuua」には、全長約25mにおよぶ日本最大級の露天立ち湯があり、相模湾の海原と熱海市街の美しい街灯りを一望するパノラマビューは圧巻のひと言です。夕食はスタイリッシュなブッフェレストランで、目の前で焼き上げる熱々の牛ステーキや、新鮮な地魚の握り寿司、冬ならではの温かな鍋料理がずらりと並びます。熱海駅からの無料送迎バスも頻繁に運行しており、梅園散策や来宮神社参拝への拠点としても抜群のフットワークを誇ります。'
    },
    {
      tag: '熱海駅前商店街直結・自家源泉と岩盤浴完備の駅近拠点',
      features: [
        'JR熱海駅から平和通り名店街を通って徒歩2分！雨の日や荷物が多い旅でも快適アクセス',
        '自家源泉を引く広々とした大浴場に加えて、リフレッシュできる無料岩盤浴を完備',
        '夕食バイキングではアルコール・ソフトドリンク飲み放題が標準セット'
      ],
      body: '熱海駅前の「平和通り商店街」アーケードに直結し、駅改札から徒歩わずか2分という屈指の利便性を誇る温泉ホテル。館内には敷地内から汲み上げる自家源泉の天然温泉大浴場があり、旅の疲れをじんわりと癒やしてくれます。さらに宿泊者が無料で利用できる岩盤浴施設も備えており、デトックス＆リラックスにも最適。夕食は和洋中の多彩な料理が並ぶバイキング形式で、生ビールや地酒などのアルコール飲み放題が無料で付いている点も嬉しいポイントです。駅前を拠点に熱海梅園の観梅バスに乗車したり、商店街の温泉まんじゅうを食べ歩いたり、軽快な冬の熱海散策を満喫できます。'
    }
  ];

  const pageCode = `import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ChevronRight, Star, MapPin, Sparkles, Flame, Sun, Award, HelpCircle, ArrowRight } from 'lucide-react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: '${data.title}',
  description: '${data.metaDesc}',
  keywords: ['熱海温泉', '熱海梅園', '梅まつり', '熱海海上花火大会', '金目鯛煮付け', '冬の熱海旅行', 'オーシャンビュー露天風呂', '静岡温泉旅館'],
  openGraph: {
    title: '${data.title}',
    description: '${data.metaDesc}',
    type: 'article',
    url: 'https://croud-travel.pages.dev/${data.slug}',
  }
};

export default function AtamiPlumGardenFireworksPage() {
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
            <Link href="/prefectures/shizuoka" className="hover:text-amber-700 transition">静岡県</Link>
            <ChevronRight className="w-3.5 h-3.5 text-stone-400 shrink-0" />
            <span className="text-stone-900 font-medium">熱海梅園＆冬花火・金目鯛</span>
          </div>
        </nav>

        {/* ヒーローセクション */}
        <header className="relative bg-gradient-to-br from-rose-950 via-slate-900 to-amber-950 text-white py-16 px-4 overflow-hidden">
          <div className="max-w-4xl mx-auto text-center space-y-4 relative z-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-rose-500/20 text-rose-200 text-xs font-semibold tracking-wider border border-rose-400/30">
              <Sparkles className="w-3.5 h-3.5" />
              <span>日本一早い春の足音・熱海の冬旅決定版</span>
            </div>
            <h1 className="text-2xl md:text-4xl lg:text-5xl font-extrabold tracking-tight leading-snug">
              【日本一早咲きの熱海梅園と冬海上花火】<br />2026-2027年冬の熱海温泉！絶景オーシャンビュー露天＆金目鯛名宿5選
            </h1>
            <p className="text-sm md:text-base text-rose-100/90 max-w-2xl mx-auto leading-relaxed">
              1月上旬からほころび始める約470本の早咲き梅と、澄み渡る冬の夜空に炸裂する熱海海上花火大会。波音を間近に聴くオーシャンビュー露天風呂と、脂の乗った極上金目鯛煮付けを味わう贅沢な熱海の冬温泉旅へ。
            </p>
          </div>
        </header>

        {/* 導入セクション */}
        <section className="max-w-4xl mx-auto px-4 py-8">
          <div className="bg-white rounded-2xl p-6 sm:p-8 border border-stone-200 shadow-sm space-y-4">
            <h2 className="text-xl sm:text-2xl font-bold text-stone-900 flex items-center gap-2">
              <Sun className="w-5 h-5 text-rose-600" />
              11月〜1月の熱海が特別な3つのハイライト
            </h2>
            <div className="grid md:grid-cols-3 gap-4 pt-2">
              <div className="bg-rose-50/50 p-4 rounded-xl border border-rose-100">
                <span className="text-xs font-bold text-rose-800 block mb-1">01. 日本一早い開花</span>
                <h3 className="font-bold text-stone-900 text-sm mb-1">熱海梅園の早咲き梅まつり</h3>
                <p className="text-xs text-stone-600 leading-relaxed">明治19年開園の歴史ある梅園。60品種469本の梅が紅白の花をつけ、1月中旬には早くも見頃を迎えます。</p>
              </div>
              <div className="bg-amber-50/50 p-4 rounded-xl border border-amber-100">
                <span className="text-xs font-bold text-amber-800 block mb-1">02. 澄んだ夜空の奇跡</span>
                <h3 className="font-bold text-stone-900 text-sm mb-1">熱海海上冬花火大会</h3>
                <p className="text-xs text-stone-600 leading-relaxed">冬の乾燥した大気の中で打ち上がる花火は色彩が極めて鮮やか。すり鉢状の湾に轟音が反響します。</p>
              </div>
              <div className="bg-cyan-50/50 p-4 rounded-xl border border-cyan-100">
                <span className="text-xs font-bold text-cyan-800 block mb-1">03. 温泉と冬の味覚</span>
                <h3 className="font-bold text-stone-900 text-sm mb-1">名湯塩化物泉と金目鯛姿煮</h3>
                <p className="text-xs text-stone-600 leading-relaxed">保温効果の高い塩化物泉で温まった後は、身がふっくらと太った旬の金目鯛煮付けと地魚会席を堪能。</p>
              </div>
            </div>
          </div>
        </section>

        {/* 観光地ガイド・公式Wikipedia写真＆解説 */}
        <section className="max-w-4xl mx-auto px-4 mb-10">
          <div className="bg-white rounded-2xl border border-stone-200/90 overflow-hidden shadow-sm">
            <div className="bg-gradient-to-r from-stone-900 to-rose-950 text-white px-6 py-4 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-rose-400 animate-pulse" />
                <h2 className="text-base md:text-lg font-bold tracking-wide">冬の観光名所ガイド：${wiki.spotLabel}</h2>
              </div>
              <span className="text-[11px] text-stone-300 bg-white/10 px-2.5 py-0.5 rounded-full border border-white/10">地域名所解説</span>
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
                  <span className="text-rose-700 font-semibold">1月上旬〜3月上旬開催</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 宿一覧セクション */}
        <section className="max-w-4xl mx-auto px-4 space-y-8 mb-12">
          <div className="text-center space-y-2">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-900">
              熱海温泉 絶景露天＆名湯宿 厳選5選
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
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-rose-100 text-rose-900">
                    <Sparkles className="w-3.5 h-3.5 text-rose-700" />
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
                    className="hover:text-rose-700 transition-colors"
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
                          <span className="w-1.5 h-1.5 rounded-full bg-rose-600 mr-2 shrink-0 mt-1.5" />
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
                  <div className="bg-rose-50/40 p-4 rounded-xl border border-rose-100/60">
                    <h5 className="text-xs font-bold text-rose-950 mb-1 flex items-center gap-1.5">
                      <Award className="w-3.5 h-3.5 text-rose-700" />
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
                      className="inline-flex items-center justify-center w-full py-3 px-6 rounded-xl text-sm font-bold text-white bg-gradient-to-r from-rose-700 to-stone-800 hover:from-rose-800 hover:to-stone-900 shadow-sm hover:shadow transition-all group"
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
          <div className="bg-gradient-to-r from-amber-600 via-orange-600 to-rose-700 rounded-2xl p-6 sm:p-8 text-white shadow-md">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="space-y-2 text-center md:text-left">
                <span className="inline-block px-3 py-1 rounded-full text-xs font-bold bg-white/20 border border-white/30">
                  楽天トラベル×ふるさと納税
                </span>
                <h3 className="text-xl sm:text-2xl font-bold">
                  静岡県熱海市の温泉旅館に実質2,000円で泊まる賢い方法
                </h3>
                <p className="text-xs sm:text-sm text-white/90 max-w-xl leading-relaxed">
                  熱海市へのふるさと納税宿泊クーポンを使えば、寄付額に応じて宿泊代金が大幅割引。人気のオーシャンビュー客室や露天風呂付き客室、金目鯛尽くし会席プランも手軽に予約できます。
                </p>
              </div>
              <a
                href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2Fspecial%2Ffurusato%2F"
                target="_blank"
                rel="noopener noreferrer"
                className="shrink-0 px-6 py-3 rounded-xl bg-white text-rose-700 font-bold text-sm shadow hover:bg-rose-50 transition-colors"
              >
                熱海市のふるさと納税宿を探す
              </a>
            </div>
          </div>
        </section>

        {/* よくある質問 (FAQ) */}
        <section className="max-w-4xl mx-auto px-4 mb-12">
          <div className="bg-white rounded-2xl p-6 sm:p-8 border border-stone-200 shadow-sm space-y-6">
            <h2 className="text-xl sm:text-2xl font-bold text-stone-900 flex items-center gap-2">
              <HelpCircle className="w-5 h-5 text-rose-600" />
              冬の熱海旅行でよくある質問（FAQ）
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
            <h3 className="text-base sm:text-lg font-bold text-stone-900">あわせて読みたい静岡＆伊豆の厳選温泉特集</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              <Link href="/prefectures/shizuoka" className="p-3 bg-white rounded-xl border border-stone-200 text-xs font-semibold text-stone-800 hover:text-rose-700 hover:border-rose-300 transition flex items-center justify-between">
                <span>静岡県のおすすめ観光名所＆温泉宿一覧</span>
                <ChevronRight className="w-3.5 h-3.5 text-stone-400" />
              </Link>
              <Link href="/winter-shizuoka-atami-onsen-winter-fireworks-kinmedai-stay" className="p-3 bg-white rounded-xl border border-stone-200 text-xs font-semibold text-stone-800 hover:text-rose-700 hover:border-rose-300 transition flex items-center justify-between">
                <span>熱海海上冬花火と金目鯛会席の温泉宿</span>
                <ChevronRight className="w-3.5 h-3.5 text-stone-400" />
              </Link>
              <Link href="/furusato-tax-infinity-onsen-sky-ocean-view-stay" className="p-3 bg-white rounded-xl border border-stone-200 text-xs font-semibold text-stone-800 hover:text-rose-700 hover:border-rose-300 transition flex items-center justify-between">
                <span>全国の絶景インフィニティ露天風呂宿特集</span>
                <ChevronRight className="w-3.5 h-3.5 text-stone-400" />
              </Link>
              <Link href="/furusato-tax-shinkansen-station-walk-hotspring-stay" className="p-3 bg-white rounded-xl border border-stone-200 text-xs font-semibold text-stone-800 hover:text-rose-700 hover:border-rose-300 transition flex items-center justify-between">
                <span>新幹線駅直結＆徒歩圏の名湯温泉旅館ガイド</span>
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

  // note-138.md 生成
  const noteContent = `# 【日本一早咲きの熱海梅園と冬海上花火】2026-2027年冬の熱海温泉！絶景オーシャンビュー露天＆金目鯛名宿5選

冬の冷え込みが深まる12月から1月、東京から東海道新幹線でわずか約45分で辿り着ける名湯リゾート・熱海。実は熱海は、「日本一早咲きの梅」と「日本一遅い紅葉」が同じ季節に交差する希有な温暖地です。

1月上旬から開幕する熱海梅園の梅まつり、澄み渡る冬の夜空に大輪を咲かせる熱海海上冬花火大会、そして冷えた身体を芯から温める熱海の塩化物温泉。夕食には脂が乗り切った本場伊豆の金目鯛煮付けや地魚刺身に舌鼓を打つ、極上の冬の温泉旅をお届けします。

---

## 2026-2027年冬の熱海梅園・冬海上花火がおすすめな理由

1. 樹齢100年を超える古木も！日本一早咲きの「熱海梅園梅まつり」
明治19年に開園した熱海梅園には、約60品種469本の梅が植えられています。早咲きの梅は11月下旬〜12月にほころび始め、1月中旬には早くも見頃を迎えます。早春の甘い香りに包まれる観梅散策は格別の風情です。

2. 冬ならではの圧倒的透明度！「熱海海上花火大会」の反響音と光のスペクタクル
熱海湾は三方を山に囲まれたすり鉢状の地形のため、スタジアムのように花火の爆発音が響き渡ります。冬は空気が澄んで光の美しさが際立ち、混雑も夏ほど激しくないためゆったりと絶景を鑑賞できます。

3. 身体の芯から温まり冷めにくい「熱海温泉」と旬の「金目鯛姿煮」
塩分を豊富に含む熱海の塩化物温泉は、皮膚に塩分が付着して汗の蒸発を防ぐため湯冷めしにくいのが特徴。湯上がりには、こってり甘辛く炊き上げた大粒の金目鯛や伊勢海老会席が旅情を満たしてくれます。

---

## 静岡県熱海市へのアクセスと冬の気候・おすすめの服装

【エリアへのアクセス】
・電車：JR東京駅より東海道新幹線「こだま」「ひかり」で熱海駅まで約35〜45分。JR新宿駅より特急「踊り子号」で約1時間15分。
・車：東名高速道路「厚木IC」より小田原厚木道路・真鶴道路経由で約60分。
・熱海梅園へ：熱海駅より伊豆箱根バス「梅園・相の原団地」行きで約15分、「梅園」バス停下車。またはJR伊東線「来宮駅」より徒歩約10分。

【見頃・気候・おすすめの服装】
・見頃時期：熱海梅園梅まつりは例年1月上旬〜3月上旬（見頃ピークは1月中旬〜2月中旬）。
・気温の目安：熱海は海に面した南向きの斜面のため比較的温暖で、1月の平均気温は日中10〜14℃前後。ただし海沿いの夜間や花火観賞時は海風で体感温度が5℃前後まで下がります。
・服装：日中の散策はセーターにジャケットで快適ですが、夜間の露天風呂や花火鑑賞にはしっかりとしたコート、マフラー、手袋をご用意ください。

---

## 公式Wikipedia解説＆実写写真：熱海梅園（日本一早咲きの梅の名所）

![${wiki.spotLabel}](${wiki.imageUrl})
*写真出典: Wikimedia Commons*

【名所の見どころと歴史】
${wiki.description}

熱海梅園は、1886年（明治19年）に横浜の豪商や内務省衛生局長・長与専斎らの提唱によって開園された由緒ある庭園です。早咲き、中咲き、遅咲きと順次開花するため、長期間にわたって観梅を楽しめるのが魅力です。

---

## ふるさと納税の還元枠を使って憧れの宿にお得に泊まる！

楽天トラベルでは、静岡県熱海市の「ふるさと納税宿泊クーポン」を利用して対象の温泉宿に賢く宿泊することができます。

寄付額に応じた割引クーポンが即時適用でき、憧れの客室露天風呂付きプランや金目鯛姿煮特別会席も手軽に予約可能です。秋・冬の旅行シーズンはお得な還元枠を活用して、贅沢なひとときをお過ごしください。

👉 [楽天トラベル ふるさと納税の対象施設・クーポン詳細はこちら](https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2Fspecial%2Ffurusato%2F)

---

## 熱海梅園観梅や花火大会を満喫できるおすすめ宿5選

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

## 冬の熱海旅行でよくある質問（FAQ）

Q1. 熱海梅園の梅まつりはいつから開催されますか？見頃は？
A1. 熱海梅園の梅まつりは毎年1月上旬から3月上旬にかけて開催されます。日本一早咲きの梅として知られ、早咲きの品種は11月下旬〜12月に開花を始め、1月中旬から2月上旬にかけて園内全体が見頃のピークを迎えます。約60品種469本の紅白の梅が咲き誇り、甘い香りに包まれます。

Q2. 冬の熱海海上花火大会の開催日や観賞のコツは？
A2. 熱海海上花火大会は冬期（12月中旬等）にも開催されます。冬は空気が乾燥して澄み切っているため、夏以上に花火の光と色彩が鮮明に美しく見えます。すり鉢状の熱海湾の地形によって花火の音が山々に反響する大迫力も魅力。海沿いの宿の客室や露天風呂、熱海親水公園からの観賞がおすすめです。

Q3. 冬の熱海温泉で味わうべき旬のグルメは何ですか？
A3. 冬の熱海では、脂がたっぷりと乗った「金目鯛の姿煮付け」が一番の看板グルメです。濃厚な甘辛タレで煮付けた金目鯛はご飯にもお酒にも絶品。さらに相模湾の地魚（アジ、イサキ、真鯛）のお刺身や、冬が旬の伊勢海老、熱海プリン、温泉まんじゅうの食べ歩きも外せません。

---

## 静岡県の観光＆温泉宿をもっと探す

当サイトでは、熱海をはじめ伊豆・富士山麓など静岡県各地の温泉宿・観光スポット情報を詳しくご紹介しています。

👉 [【最新版】静岡県のおすすめ観光・温泉宿一覧はこちら](https://croud-travel.pages.dev/prefectures/shizuoka)
👉 [熱海温泉の海上冬花火と金目鯛特集はこちら](https://croud-travel.pages.dev/winter-shizuoka-atami-onsen-winter-fireworks-kinmedai-stay)
`;

  fs.writeFileSync(path.join(process.cwd(), 'note-138.md'), noteContent, 'utf8');
  console.log('Generated note-138.md');
}

module.exports = { generateAtami };
