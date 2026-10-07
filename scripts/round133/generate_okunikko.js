const fs = require('fs');
const path = require('path');

function generateOkunikko(rawHotelsData, wikiSpotsData) {
  const themeKey = 'okunikko_kegon_falls_ice_yumoto_snow';
  const data = rawHotelsData[themeKey];
  const wiki = wikiSpotsData[themeKey];
  const hotels = data.hotels;

  const targetDir = path.join(process.cwd(), 'src/app', data.slug);
  fs.mkdirSync(targetDir, { recursive: true });

  const customDescriptions = [
    {
      tag: '湯の湖畔の静寂・日本最大級のエメラルド濁り湯大露天風呂',
      features: [
        '国民保養温泉地第1号！硫黄濃度日本屈指の源泉掛け流し乳白色・翠緑色の露天風呂',
        '北欧風の洗練された木造建築と中庭の雪景色を望む足湯テラス',
        '極上のとちぎ和牛フィレ肉と手作り日光湯波を盛り込んだ豪華創作会席'
      ],
      body: '標高約1,500m、白銀の湯の湖の森に静かに佇む北欧スタイルの上質なマウンテンリゾート。宿の一番の自慢は、日光湯元温泉の豊富な自家源泉を惜しみなく注ぎ込む日本最大級の広さを誇る大露天風呂「森の湯」。湧出時は無色透明な湯が、空気に触れることでエメラルドグリーンから白濁した乳白色へと変化する神秘の硫黄泉で、濃厚な湯花が舞う湯船に身を沈めれば、極寒の奥日光散策で冷え切った身体が芯から解きほぐされます。夕食は地産地消にこだわり、とろけるような肉質の「とちぎ和牛」の陶板焼きや、伝統の技が光る日光生湯波、寒締め高原野菜を取り入れた月替わりの創作会席。雪に包まれた静寂の森で、日常の喧騒を完全に忘れる贅沢なひとときを約束します。'
    },
    {
      tag: '標高1,500mからまつ林の雪景色・囲炉裏会席と白濁名湯',
      features: [
        'からまつの原生林に囲まれた静寂の一軒宿！一面の銀世界を一望する雪見露天風呂',
        '毎分豊富な湯量を誇る源泉掛け流しの硫黄泉を24時間いつでも堪能',
        '囲炉裏端で香ばしく焼き上げる川魚の塩焼きや栃木の山の幸会席'
      ],
      body: '湯元温泉のからまつ林に囲まれ、冬になるとあたり一面が深いパウダースノーに覆われる高原の一軒宿。男女別の大浴場と露天風呂には、湯元温泉の源泉地から引湯する濃厚な含硫黄-カルシウム・ナトリウム-硫酸塩・炭酸水素塩温泉が絶え間なく掛け流されています。露天風呂の縁に積もる真っ白な雪と、エメラルドグリーンから乳白色に濁る名湯とのコントラストは冬旅の真骨頂。夕食は素朴ながらも滋味あふれる山の恵み会席で、香ばしいイワナの塩焼きや栃木県産豚の雪見鍋、手作りの湯波料理など、身体を内側からぽかぽかと温めてくれるおもてなし料理が並びます。'
    },
    {
      tag: '木の温もり溢れるアットホーム宿・無料貸切内湯と乳白色露天',
      features: [
        '湯元温泉街の中心に位置し、良質な硫黄泉を贅沢に注ぐアットホームな湯宿',
        '空いていれば何度でも無料で利用できる総木造の貸切温泉風呂を完備',
        '若女将・板前が心を込めて手作りする日光湯波と季節の家庭風郷土料理'
      ],
      body: '日光湯元温泉の湯畑にほど近い場所に佇み、温かなおもてなしと良質な温泉で高いリピート率を誇る全客室数控えめな隠れ家的温泉宿。館内にはヒノキの香りが漂う貸切風呂があり、乳白色の濃厚な硫黄泉をプライベートな空間で気兼ねなく満喫できます。硫黄の香りに包まれる湯船からは窓の外にしんしんと降る雪を眺めることができ、湯上がり後も肌につるつるとした潤いとしっとり感が持続。夕食は日光名物の生湯波を使ったお造りや煮物、地元栃木の銘柄肉を使った温かな鍋など、手作りの温もりが染み渡る心づくしの会席料理。気取らない一人旅やカップルの雪見温泉旅行に最適です。'
    },
    {
      tag: '中禅寺湖畔の森に佇む木造クラシックホテル・白濁露天「空ぶろ」',
      features: [
        '中禅寺湖のほとり、木立の中に佇む創業80余年の歴史ある木造クラシックホテル',
        '奥日光湯元温泉からパイプで直接引湯する白濁硫黄泉の露天風呂「空ぶろ」',
        '伝統の金谷ホテルレシピを受け継ぐ本格クラシックフレンチディナー'
      ],
      body: '日本屈指のクラシックホテル「日光金谷ホテル」の別館として、中禅寺湖畔の豊かな自然林の中に昭和初期に誕生した名門リゾート。カナディアン杉を使った山小屋風の木造建築は、暖炉のあるラウンジや格調高いメインダイニングなど、どこを切り取っても絵になる優雅な佇まいです。ホテル自慢の温泉露天風呂「空ぶろ（からぶろ）」は、約12km離れた奥日光湯元の源泉から引き湯した良質な白濁硫黄泉。夜には頭上に冬の澄み切った満天の星が瞬き、湖畔の静けさと相まって至高のリラクゼーションを提供します。夕食は伝統の技を受け継ぐ金谷フレンチで、日光虹鱒のソテーや国産牛のローストなど、歴史の重みを感じる優美な一皿一皿を堪能できます。'
    },
    {
      tag: '自家源泉2本保有・総檜造りの雪見露天風呂と日光湯波しゃぶ',
      features: [
        '湯元温泉でも希少な2本の自家源泉を所有し、圧倒的な湯量と鮮度を誇る名湯',
        '木の香りに癒やされる総檜造りの大浴場「中庭風呂」とダイナミックな雪見露天',
        '日光名物「引き上げ湯波」のしゃぶしゃぶやとちぎ霜降高原牛の陶板焼き'
      ],
      body: '日光国立公園の最奥部、標高1,500mの白根山山麓に位置する大型の温泉高原ホテル。この宿最大の強みは、敷地内に湧く2本の自家源泉。湯量豊富な乳白色の硫黄泉が広々とした総檜造りの大浴場や開放的な露天風呂へと贅沢に掛け流されており、日によって緑がかった乳白色や青みを帯びた白色へと表情を変える天然温泉の奥深さを味わえます。冬の露天風呂では、頭や肩に舞い散る雪を受けながらの雪見風呂が最高に贅沢。夕食は日光名産の引き上げ湯波をさっと出汁にくぐらせていただく湯波しゃぶしゃぶや、とちぎ霜降高原牛のステーキなど、滋味豊かな北関東の美味を心ゆくまで堪能できます。'
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
  keywords: ['奥日光湯元温泉', '華厳の滝', 'ブルーアイス', '氷瀑', '日光温泉', '中禅寺湖ホテル', 'とちぎ和牛', '日光湯波会席'],
  openGraph: {
    title: '${data.title}',
    description: '${data.metaDesc}',
    type: 'article',
    url: 'https://croud-travel.pages.dev/${data.slug}',
  }
};

export default function OkunikkoKegonFallsPage() {
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
            <Link href="/prefectures/tochigi" className="hover:text-amber-700 transition">栃木県</Link>
            <ChevronRight className="w-3.5 h-3.5 text-stone-400 shrink-0" />
            <span className="text-stone-900 font-medium">奥日光華厳の滝ブルーアイス＆湯元温泉</span>
          </div>
        </nav>

        {/* ヒーローセクション */}
        <header className="relative bg-gradient-to-br from-cyan-950 via-slate-900 to-indigo-950 text-white py-16 px-4 overflow-hidden">
          <div className="max-w-4xl mx-auto text-center space-y-4 relative z-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/20 text-cyan-200 text-xs font-semibold tracking-wider border border-cyan-400/30">
              <Snowflake className="w-3.5 h-3.5" />
              <span>日本三名瀑の巨大氷瀑＆国民保養温泉地第1号の名湯</span>
            </div>
            <h1 className="text-2xl md:text-4xl lg:text-5xl font-extrabold tracking-tight leading-snug">
              【奥日光華厳の滝ブルーアイス氷瀑と乳白色硫黄泉】<br />2026-2027年冬の日光湯元温泉！雪見露天ととちぎ和牛名宿5選
            </h1>
            <p className="text-sm md:text-base text-cyan-100/90 max-w-2xl mx-auto leading-relaxed">
              落差97mの大瀑布が青く凍りつく「華厳の滝ブルーアイス」と中禅寺湖の雪景色。標高1,500mの奥日光湯元温泉が誇る濃厚な乳白色硫黄泉で雪見露天を満喫し、とちぎ和牛と伝統の日光湯波会席に舌鼓を打つ冬の奥日光リトリート。
            </p>
          </div>
        </header>

        {/* 導入セクション */}
        <section className="max-w-4xl mx-auto px-4 py-8">
          <div className="bg-white rounded-2xl p-6 sm:p-8 border border-stone-200 shadow-sm space-y-4">
            <h2 className="text-xl sm:text-2xl font-bold text-stone-900 flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-cyan-600" />
              冬の奥日光が旅人を魅了する3つの理由
            </h2>
            <div className="grid md:grid-cols-3 gap-4 pt-2">
              <div className="bg-cyan-50/50 p-4 rounded-xl border border-cyan-100">
                <span className="text-xs font-bold text-cyan-800 block mb-1">01. 巨大な青の氷瀑</span>
                <h3 className="font-bold text-stone-900 text-sm mb-1">華厳の滝ブルーアイス</h3>
                <p className="text-xs text-stone-600 leading-relaxed">落差97mの岸壁が幾重にも凍りつき青く輝く冬の芸術。観瀑台から見上げる氷瀑の迫力は圧巻です。</p>
              </div>
              <div className="bg-emerald-50/50 p-4 rounded-xl border border-emerald-100">
                <span className="text-xs font-bold text-emerald-800 block mb-1">02. 日本屈指の硫黄泉</span>
                <h3 className="font-bold text-stone-900 text-sm mb-1">日光湯元温泉の乳白色濁り湯</h3>
                <p className="text-xs text-stone-600 leading-relaxed">国民保養温泉地第1号。エメラルドグリーンから乳白色へと色を変える濃厚硫黄泉で極上の雪見風呂。</p>
              </div>
              <div className="bg-amber-50/50 p-4 rounded-xl border border-amber-100">
                <span className="text-xs font-bold text-amber-800 block mb-1">03. 栃木の贅沢味覚</span>
                <h3 className="font-bold text-stone-900 text-sm mb-1">とちぎ和牛と伝統の日光湯波</h3>
                <p className="text-xs text-stone-600 leading-relaxed">とろける霜降りのとちぎ和牛ステーキや陶板焼き、職人が一枚ずつ引き上げる風味豊かな日光生湯波を堪能。</p>
              </div>
            </div>
          </div>
        </section>

        {/* 観光地ガイド・公式Wikipedia写真＆解説 */}
        <section className="max-w-4xl mx-auto px-4 mb-10">
          <div className="bg-white rounded-2xl border border-stone-200/90 overflow-hidden shadow-sm">
            <div className="bg-gradient-to-r from-stone-900 to-cyan-950 text-white px-6 py-4 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-cyan-400 animate-pulse" />
                <h2 className="text-base md:text-lg font-bold tracking-wide">冬の観光名所ガイド：${wiki.spotLabel}</h2>
              </div>
              <span className="text-[11px] text-stone-300 bg-white/10 px-2.5 py-0.5 rounded-full border border-white/10">日本三名瀑</span>
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
                  <span className="text-cyan-700 font-semibold">1月中旬〜2月中旬氷瀑シーズン</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 宿一覧セクション */}
        <section className="max-w-4xl mx-auto px-4 space-y-8 mb-12">
          <div className="text-center space-y-2">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-900">
              奥日光湯元温泉＆中禅寺湖 厳選名宿5選
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
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-cyan-100 text-cyan-900">
                    <Sparkles className="w-3.5 h-3.5 text-cyan-700" />
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
                    className="hover:text-cyan-700 transition-colors"
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
                          <span className="w-1.5 h-1.5 rounded-full bg-cyan-600 mr-2 shrink-0 mt-1.5" />
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
                  <div className="bg-cyan-50/40 p-4 rounded-xl border border-cyan-100/60">
                    <h5 className="text-xs font-bold text-cyan-950 mb-1 flex items-center gap-1.5">
                      <Award className="w-3.5 h-3.5 text-cyan-700" />
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
                      className="inline-flex items-center justify-center w-full py-3 px-6 rounded-xl text-sm font-bold text-white bg-gradient-to-r from-cyan-700 to-stone-800 hover:from-cyan-800 hover:to-stone-900 shadow-sm hover:shadow transition-all group"
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
          <div className="bg-gradient-to-r from-cyan-600 via-indigo-600 to-slate-700 rounded-2xl p-6 sm:p-8 text-white shadow-md">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="space-y-2 text-center md:text-left">
                <span className="inline-block px-3 py-1 rounded-full text-xs font-bold bg-white/20 border border-white/30">
                  楽天トラベル×ふるさと納税
                </span>
                <h3 className="text-xl sm:text-2xl font-bold">
                  栃木県日光市の温泉旅館に実質2,000円で泊まる賢い方法
                </h3>
                <p className="text-xs sm:text-sm text-white/90 max-w-xl leading-relaxed">
                  日光市へのふるさと納税宿泊クーポンを使えば、寄付額に応じて宿泊代金が大幅割引。雪見露天風呂付き客室や、とちぎ和牛＆日光湯波会席プランも手軽にお得に予約できます。
                </p>
              </div>
              <a
                href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2Fspecial%2Ffurusato%2F"
                target="_blank"
                rel="noopener noreferrer"
                className="shrink-0 px-6 py-3 rounded-xl bg-white text-cyan-700 font-bold text-sm shadow hover:bg-cyan-50 transition-colors"
              >
                日光市のふるさと納税宿を探す
              </a>
            </div>
          </div>
        </section>

        {/* よくある質問 (FAQ) */}
        <section className="max-w-4xl mx-auto px-4 mb-12">
          <div className="bg-white rounded-2xl p-6 sm:p-8 border border-stone-200 shadow-sm space-y-6">
            <h2 className="text-xl sm:text-2xl font-bold text-stone-900 flex items-center gap-2">
              <HelpCircle className="w-5 h-5 text-cyan-600" />
              冬の奥日光旅行でよくある質問（FAQ）
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
            <h3 className="text-base sm:text-lg font-bold text-stone-900">あわせて読みたい栃木＆日光・北関東の厳選温泉特集</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              <Link href="/prefectures/tochigi" className="p-3 bg-white rounded-xl border border-stone-200 text-xs font-semibold text-stone-800 hover:text-cyan-700 hover:border-cyan-300 transition flex items-center justify-between">
                <span>栃木県のおすすめ観光名所＆温泉宿一覧</span>
                <ChevronRight className="w-3.5 h-3.5 text-stone-400" />
              </Link>
              <Link href="/winter-tochigi-okunikko-yumoto-snow-onsen-stay" className="p-3 bg-white rounded-xl border border-stone-200 text-xs font-semibold text-stone-800 hover:text-cyan-700 hover:border-cyan-300 transition flex items-center justify-between">
                <span>奥日光湯元の雪見温泉と冬の湯治宿ガイド</span>
                <ChevronRight className="w-3.5 h-3.5 text-stone-400" />
              </Link>
              <Link href="/furusato-tax-waterfall-river-gorge-healing-onsen-stay" className="p-3 bg-white rounded-xl border border-stone-200 text-xs font-semibold text-stone-800 hover:text-cyan-700 hover:border-cyan-300 transition flex items-center justify-between">
                <span>清流渓谷＆名瀑ヒーリング温泉宿特集</span>
                <ChevronRight className="w-3.5 h-3.5 text-stone-400" />
              </Link>
              <Link href="/furusato-tax-secret-hotspring-lamp-retreat-stay" className="p-3 bg-white rounded-xl border border-stone-200 text-xs font-semibold text-stone-800 hover:text-cyan-700 hover:border-cyan-300 transition flex items-center justify-between">
                <span>秘湯・ランプの宿×デジタルデトックス温泉旅</span>
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

  // note-141.md 生成
  const noteContent = `# 【奥日光華厳の滝ブルーアイス氷瀑と乳白色硫黄泉】2026-2027年冬の日光湯元温泉！雪見露天ととちぎ和牛名宿5選

世界遺産の街・日光。いろは坂を登り切った標高1,300m〜1,500mに広がる奥日光は、冬になると静寂と白銀の別世界へと姿を変えます。

冬の奥日光を象徴する最大の見どころが、日本三名瀑の一つ「華厳の滝」が落差97mの断崖ごと青く凍結する神秘の「ブルーアイス（氷瀑）」。そして極寒の絶景を満喫した後は、国民保養温泉地第1号に選定された「日光湯元温泉」へ。エメラルドグリーンから乳白色へと色を変える濃厚な硫黄泉に身を委ね、雪見露天風呂を満喫し、とちぎ和牛や伝統の日光湯波会席に舌鼓を打つ――心洗われる奥日光の冬旅をご紹介します。

---

## 2026-2027年冬の奥日光・華厳の滝氷瀑と湯元温泉がおすすめな理由

1. 落差97mの日本三名瀑が青く凍りつく「華厳の滝ブルーアイス」
1月中旬から2月中旬の厳寒期、岸壁から染み出る細い無数の滝が一面凍結し、巨大な青い氷柱のシャンデリアのような姿に変貌します。観瀑台から見上げる氷瀑のスケールは息を呑む迫力です。

2. 国民保養温泉地第1号！硫黄濃度日本屈指の「日光湯元温泉・乳白色濁り湯」
湯畑から湧き出る濃厚な硫黄泉は、湧出時は透明、空気に触れるとエメラルドグリーンや乳白色へと濁る神秘の名湯。湯花がたっぷり舞う湯船は温まり効果が高く、白銀のからまつ林を望む雪見露天は冬旅の最高峰です。

3. とろける霜降り「とちぎ和牛」と職人技が光る伝統の「日光湯波」会席
寒い冬だからこそ美味しい、とちぎ和牛のすき焼きや陶板焼きステーキ。さらに生湯波のお造りや湯波しゃぶしゃぶなど、日光ならではの身体に優しく滋味深い美食ディナーを堪能できます。

---

## 栃木県日光市・奥日光へのアクセスと冬の気候・服装

【エリアへのアクセス】
・公共交通機関：JR日光駅または東武日光駅より東武バス「中禅寺温泉・湯元温泉行き」に乗車。中禅寺温泉（華厳の滝）まで約45分、湯元温泉まで約75〜85分（冬期も通年運行）。
・車：日光宇都宮道路「清滝IC」より国道120号・第二いろは坂経由で中禅寺湖まで約30分、湯元温泉まで約45分。

【見頃・気候・おすすめの服装】
・見頃時期：華厳の滝の氷瀑は例年1月中旬〜2月中旬。日光湯元温泉の雪あかり・雪まつりは例年1月下旬〜2月。
・気温の目安：奥日光は標高1,500mの高原のため、1月〜2月の気温は日中で−2〜2℃、朝晩は−10〜−15℃以下まで冷え込みます。
・服装：防風・防水の厚手ダウンジャケット、スノーブーツ（圧雪・凍結路面のため必須）、厚手の手袋、ニット帽、ネックウォーマー、貼るカイロを装備してください。車の場合はスタッドレスタイヤ装着が必須です。

---

## 公式Wikipedia解説＆実写写真：奥日光・華厳の滝（冬のブルーアイス氷瀑）

![${wiki.spotLabel}](${wiki.imageUrl})
*写真出典: Wikimedia Commons*

【名所の見どころと歴史】
${wiki.description}

中禅寺湖の流出口に位置し、勝道上人によって発見されたと伝わる華厳の滝。エレベーターで100m下った観瀑台からは、滝壺の迫力ある飛沫とともに、厳冬期にしか見られない巨大な青い氷のカーテンを間近に拝観できます。

---

## ふるさと納税の還元枠を使って憧れの宿にお得に泊まる！

楽天トラベルでは、栃木県日光市の「ふるさと納税宿泊クーポン」を利用して対象の温泉旅館・リゾートホテルに賢く宿泊することができます。

寄付額に応じた割引クーポンが即時適用でき、憧れの雪見露天風呂付き客室やとちぎ和牛・日光湯波贅沢会席プランも手軽に予約可能です。秋・冬の旅行シーズンはお得な還元枠を活用して、贅沢なひとときをお過ごしください。

👉 [楽天トラベル ふるさと納税の対象施設・クーポン詳細はこちら](https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2Fspecial%2Ffurusato%2F)

---

## 奥日光華厳の滝氷瀑と乳白色硫黄泉を満喫できるおすすめ宿5選

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

## 冬の奥日光旅行でよくある質問（FAQ）

Q1. 華厳の滝が青く凍る「ブルーアイス氷瀑」の見頃時期は？
A1. 日本三名瀑・華厳の滝が凍結する「氷瀑」は、例年1月中旬から2月中旬にかけての厳寒期に見られます。落差97mの岩壁から流れ落ちる細い無数の滝が一面青く凍りつき、まるで巨大な氷のシャンデリアのような神秘的な絶景を作り出します。エレベーターで行く観瀑台からの眺めが圧巻です。

Q2. 日光湯元温泉の泉質と雪見風呂の魅力について教えてください。
A2. 奥日光湯元温泉は、国民保養温泉地第1号に指定された日本有数の名湯です。泉質は含硫黄-カルシウム・ナトリウム-硫酸塩・炭酸水素塩温泉。湧出時は透明ですが空気に触れるとエメラルドグリーンや乳白色に濁るのが特徴で、高い保温効果と美肌効果を誇ります。標高1,500mの白銀の森に包まれた雪見露天風呂は格別の風情です。

Q3. 冬の奥日光（いろは坂・中禅寺湖・湯元）へのアクセス注意点は？
A3. 車で向かう場合、第二いろは坂（上り）および中禅寺湖から湯元温泉にかけては完全な圧雪・凍結路面になります。必ずスタッドレスタイヤまたはタイヤチェーンを装備してください。公共交通機関利用の場合は、JR日光駅・東武日光駅より東武バス「湯元温泉行き」が通年運行しており（約75〜85分）、雪道運転の不安なくアクセス可能です。

---

## 栃木県の観光＆温泉宿をもっと探す

当サイトでは、奥日光・中禅寺湖をはじめ鬼怒川温泉・那須高原など栃木県各地の温泉宿・観光スポット情報を詳しくご紹介しています。

👉 [【最新版】栃木県のおすすめ観光・温泉宿一覧はこちら](https://croud-travel.pages.dev/prefectures/tochigi)
👉 [奥日光湯元の雪見温泉と冬の湯治宿特集はこちら](https://croud-travel.pages.dev/winter-tochigi-okunikko-yumoto-snow-onsen-stay)
`;

  fs.writeFileSync(path.join(process.cwd(), 'note-141.md'), noteContent, 'utf8');
  console.log('Generated note-141.md');
}

module.exports = { generateOkunikko };
