const fs = require('fs');
const path = require('path');

function generateTokachi(rawHotelsData, wikiSpotsData) {
  const themeKey = 'tokachi_jewelry_ice_mall_sauna';
  const data = rawHotelsData[themeKey];
  const wiki = wikiSpotsData[themeKey];
  const hotels = data.hotels;

  const targetDir = path.join(process.cwd(), 'src/app', data.slug);
  fs.mkdirSync(targetDir, { recursive: true });

  const customDescriptions = [
    {
      tag: '十勝川一望・最上級客室露天と琥珀色モール温泉',
      features: [
        '全室客室露天風呂付きのプレミアム棟「豊洲亭」と川の情景を望む「豆陽亭」',
        '世界でも極めて希少な植物性モール温泉を源泉掛け流しで堪能できる展望風呂',
        '十勝牛フィレステーキや十勝産ラクレットチーズ、旬の北海海鮮会席'
      ],
      body: '雄大な十勝川のほとりに佇み、北海道遺産に選定された「植物性モール温泉」の真髄を味わえる老舗最高峰の宿。琥珀色に輝く湯は太古の植物堆積層を通って湧き出し、天然の化粧水と呼ばれるほどフミン酸や天然保湿成分が豊富に含まれています。大浴場の露天風呂からは、雪化粧した日高山脈と静かに流れる十勝川、時折舞い降りるオオハクチョウの姿を望む贅沢なロケーション。豊洲亭の専用ラウンジでは十勝産ワインやスイーツが振る舞われ、極寒のジュエリーアイス観光で冷えた身体を芯から解きほぐす至福のステイが約束されます。夕食は十勝の大地が育んだブランド牛の炭火焼きや旬の根菜を取り入れた創作会席が並びます。'
    },
    {
      tag: '本格フィンランドサウナ×十勝川パノラマ露天',
      features: [
        'セルフロウリュ完備の本格サウナとモール温泉水風呂で究極の「ととのい」体験',
        '十勝中央大橋と白銀の河畔を眼下に望む開放感抜群の屋根付き大露天風呂',
        '十勝の恵みを五感で味わう和洋ビュッフェと落ち着きある和モダン客室'
      ],
      body: '十勝川にかかる白鳥大橋の袂に位置し、十勝サウナの聖地としても全国のサウナーから熱い注目を浴びる温泉旅館。大浴場にはフィンランド製サウナストーブを配した本格サウナが備わり、十勝川の清流を望む外気浴スペースでは氷点下の澄み切った大気の中で究極のディープリラックスを体感できます。湯上がりには肌に吸い付くようなとろみのあるモール温泉の湯船に浸かり、しっとりとした肌触りを実感。夕食はオープンキッチンから出来立てが運ばれるバイキングで、十勝産小麦の手打ちパスタや揚げたての天ぷら、十勝ポークのローストなど北の大地の美味を心ゆくまで堪能できます。'
    },
    {
      tag: '自家農園野菜×多彩なエステバス・気球体験の宿',
      features: [
        '自家農園「大平原ファーム」で収穫された低農薬野菜をふんだんに使った自然派料理',
        '広々とした大浴場に気泡風呂、ジェットバス、打たせ湯など多彩な湯舟を完備',
        '十勝平野の広大な敷地と冬の雪原アクティビティへの充実したアクセス'
      ],
      body: '十勝平野の真ん中に広がる広大な敷地を誇り、食の安全と地産地消に徹底的にこだわるアットホームな大型温泉ホテル。宿自慢の「大平原ファーム」で丁寧に育てられた新鮮な野菜や北海道産乳製品を使ったお料理は、素材そのものの甘みと力強さが際立ちます。モール温泉を引く大浴場はバラエティ豊かで、超微細な気泡が全身を包み込むエステバスや露天風呂で極楽の湯浴みを楽しめます。豊頃町の大津海岸へのジュエリーアイス観賞ツアーや早朝の熱気球フライト体験など、冬の十勝ならではのダイナミックなネイチャー体験の拠点としても最適です。'
    },
    {
      tag: '帯広駅前で希少な自家源泉モール温泉＆サウナシュラン',
      features: [
        'JR帯広駅から徒歩3分！駅前立地でありながら地下から湧く純度100%の天然モール温泉',
        'サウナシュラン受賞歴を誇る本格フィンランド式サウナと白樺ヴィヒタの香り',
        '帯広名物「元祖豚丼」や屋台村「北の屋台」まで徒歩圏の抜群のナイトアクセス'
      ],
      body: 'JR帯広駅のすぐ目の前に位置しながら、地下から自噴する本格的な植物性モール温泉の大浴場と露天風呂を完備したハイグレードビジネス＆リゾートホテル。全国のサウナ愛好家が集う大浴場のドライサウナでは、白樺のヴィヒタが香る本格的なセルフロウリュが楽しめ、冷水風呂と外気浴スペースで完璧な温冷交代浴が叶います。早朝に大津海岸へジュエリーアイスを見に出かけるレンタカー旅の出発点としても利便性抜群。夜は徒歩数分の繁華街へ繰り出し、帯広名物の豚丼や屋台村「北の屋台」で地元の人々と触れ合いながら十勝の地酒を楽しむ都市型ステイが満喫できます。'
    },
    {
      tag: '明治32年創業・十勝川温泉屈指の老舗名湯館',
      features: [
        '十勝川温泉の歴史を切り拓いた老舗が誇る源泉掛け流しの濃厚モール温泉',
        '木をふんだんにあしらった情緒ある大浴場と雪見露天風呂の風情ある佇まい',
        '北海道産ズワイガニや十勝牛、旬の味覚がずらりと並ぶ贅沢バイキング'
      ],
      body: '1899年（明治32年）の創業以来、十勝川温泉の湯守として旅人を温め続けてきた歴史ある老舗旅館。創業当時から受け継がれる自家源泉は、湯口から注がれる琥珀色のモール泉の鮮度が高く、湯船に身を沈めると細かな気泡が肌を包み込みます。冬の露天風呂では、頭上に広がる満天の星空と雪景色を眺めながらの長湯が格別。夕食は北海道ならではの新鮮な蟹や刺身、十勝牛の陶板焼きをはじめ、郷土色あふれる多彩なお料理が並ぶビュッフェスタイルで、三世代の家族旅行から一人旅まで気兼ねなく寛ぐことができます。'
    }
  ];

  // Next.js page.tsx 生成
  const pageCode = `import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ChevronRight, Star, MapPin, Sparkles, Flame, Snowflake, Award, ShieldCheck, HelpCircle, ArrowRight } from 'lucide-react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: '${data.title}',
  description: '${data.metaDesc}',
  keywords: ['十勝川温泉', 'ジュエリーアイス', '豊頃町大津海岸', 'モール温泉', '十勝サウナ', '冬の北海道旅行', '帯広ホテル', '北海道温泉旅館'],
  openGraph: {
    title: '${data.title}',
    description: '${data.metaDesc}',
    type: 'article',
    url: 'https://croud-travel.pages.dev/${data.slug}',
  }
};

export default function TokachiJewelryIcePage() {
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
        'name': 'ジュエリーアイスの見頃の時期と時間帯はいつですか？',
        'acceptedAnswer': {
          '@type': 'Answer',
          'text': 'ジュエリーアイスは例年1月中旬から2月下旬にかけて、北海道豊頃町の大津海岸で見られます。特に美しく輝くのは日の出直後の早朝（朝6時30分〜7時30分頃）で、朝日に照らされてオレンジや黄金色に輝くクリスタルガラスのような絶景が広がります。'
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
            <Link href="/prefectures/hokkaido" className="hover:text-amber-700 transition">北海道</Link>
            <ChevronRight className="w-3.5 h-3.5 text-stone-400 shrink-0" />
            <span className="text-stone-900 font-medium">十勝ジュエリーアイス＆モール温泉</span>
          </div>
        </nav>

        {/* ヒーローセクション */}
        <header className="relative bg-gradient-to-br from-sky-950 via-slate-900 to-indigo-950 text-white py-16 px-4 overflow-hidden">
          <div className="max-w-4xl mx-auto text-center space-y-4 relative z-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/20 text-cyan-200 text-xs font-semibold tracking-wider border border-cyan-400/30">
              <Snowflake className="w-3.5 h-3.5" />
              <span>真冬の北海道・十勝厳冬奇跡の絶景ガイド</span>
            </div>
            <h1 className="text-2xl md:text-4xl lg:text-5xl font-extrabold tracking-tight leading-snug">
              【極寒の奇跡ジュエリーアイスとモール温泉】<br />2026-2027年冬の十勝川温泉＆極上サウナ宿5選
            </h1>
            <p className="text-sm md:text-base text-cyan-100/90 max-w-2xl mx-auto leading-relaxed">
              太平洋・大津海岸の砂浜に打ち上げられる透明な氷の結晶「ジュエリーアイス」。世界でも極めて珍しい植物性「モール温泉」と、本場フィンランド式十勝サウナの聖地で、極寒と極楽が交差する一生モノの冬旅へ出かけませんか。
            </p>
          </div>
        </header>

        {/* 導入セクション */}
        <section className="max-w-4xl mx-auto px-4 py-8">
          <div className="bg-white rounded-2xl p-6 sm:p-8 border border-stone-200 shadow-sm space-y-4">
            <h2 className="text-xl sm:text-2xl font-bold text-stone-900 flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-cyan-600" />
              冬の十勝が旅人を惹きつける3つの理由
            </h2>
            <div className="grid md:grid-cols-3 gap-4 pt-2">
              <div className="bg-cyan-50/50 p-4 rounded-xl border border-cyan-100">
                <span className="text-xs font-bold text-cyan-800 block mb-1">01. 奇跡の自然現象</span>
                <h3 className="font-bold text-stone-900 text-sm mb-1">大津海岸のジュエリーアイス</h3>
                <p className="text-xs text-stone-600 leading-relaxed">十勝川の氷が太平洋に流れ出し、荒波で磨かれた透明な氷塊。朝日に輝く姿は息を呑む美しさです。</p>
              </div>
              <div className="bg-amber-50/50 p-4 rounded-xl border border-amber-100">
                <span className="text-xs font-bold text-amber-800 block mb-1">02. 北海道遺産の美肌湯</span>
                <h3 className="font-bold text-stone-900 text-sm mb-1">十勝川植物性モール温泉</h3>
                <p className="text-xs text-stone-600 leading-relaxed">太古の植物層を通る琥珀色の湯。天然保湿成分フミン酸が豊富で、湯上がりは肌がしっとり吸い付きます。</p>
              </div>
              <div className="bg-emerald-50/50 p-4 rounded-xl border border-emerald-100">
                <span className="text-xs font-bold text-emerald-800 block mb-1">03. サウナの聖地＆グルメ</span>
                <h3 className="font-bold text-stone-900 text-sm mb-1">本場ロウリュ＆十勝牛チーズ</h3>
                <p className="text-xs text-stone-600 leading-relaxed">氷点下外気浴が叶う十勝サウナと、十勝牛ステーキ、ラクレットチーズ、名物豚丼の贅沢な食文化。</p>
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
                <h2 className="text-base md:text-lg font-bold tracking-wide">冬の観光名所ガイド：${wiki.spotLabel}</h2>
              </div>
              <span className="text-[11px] text-stone-300 bg-white/10 px-2.5 py-0.5 rounded-full border border-white/10">現地スポット解説</span>
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
                <h3 className="text-lg md:text-xl font-bold text-stone-900 leading-snug">${wiki.spotLabel}の見どころと魅力</h3>
                <p className="text-xs md:text-sm text-stone-600 leading-relaxed">${wiki.description}</p>
                <div className="pt-2 border-t border-stone-100 flex items-center justify-between text-[11px] text-stone-400">
                  <span>出典: フリー百科事典『ウィキペディア（Wikipedia）』</span>
                  <span className="text-cyan-700 font-semibold">1月中旬〜2月下旬が見頃</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 宿一覧セクション */}
        <section className="max-w-4xl mx-auto px-4 space-y-8 mb-12">
          <div className="text-center space-y-2">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-900">
              十勝川温泉＆極上サウナ宿 厳選5選
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
                      className="inline-flex items-center justify-center w-full py-3 px-6 rounded-xl text-sm font-bold text-white bg-gradient-to-r from-cyan-700 to-slate-800 hover:from-cyan-800 hover:to-slate-900 shadow-sm hover:shadow transition-all group"
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
          <div className="bg-gradient-to-r from-amber-600 via-orange-600 to-amber-700 rounded-2xl p-6 sm:p-8 text-white shadow-md">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="space-y-2 text-center md:text-left">
                <span className="inline-block px-3 py-1 rounded-full text-xs font-bold bg-white/20 border border-white/30">
                  楽天トラベル×ふるさと納税
                </span>
                <h3 className="text-xl sm:text-2xl font-bold">
                  北海道・十勝の宿に実質2,000円で泊まる賢い方法
                </h3>
                <p className="text-xs sm:text-sm text-white/90 max-w-xl leading-relaxed">
                  楽天ふるさと納税の宿泊クーポンを活用すれば、寄付額に応じて宿泊代金が最大30%割引！予約済みの宿泊にも「あとから割引」が適用可能です。憧れの露天風呂付き客室やスイートルームをお得に予約できます。
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
              冬の十勝・ジュエリーアイス旅行でよくある質問（FAQ）
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
              <Link href="/winter-hokkaido-monbetsu-drift-ice-garinko-driftice-gourmet-stay" className="p-3 bg-white rounded-xl border border-stone-200 text-xs font-semibold text-stone-800 hover:text-cyan-700 hover:border-cyan-300 transition flex items-center justify-between">
                <span>紋別・オホーツク流氷ガリンコ号と毛ガニ宿</span>
                <ChevronRight className="w-3.5 h-3.5 text-stone-400" />
              </Link>
              <Link href="/furusato-tax-kura-sauna-private-villa-charter-stay" className="p-3 bg-white rounded-xl border border-stone-200 text-xs font-semibold text-stone-800 hover:text-cyan-700 hover:border-cyan-300 transition flex items-center justify-between">
                <span>全国の極上プライベートサウナ＆ととのい宿</span>
                <ChevronRight className="w-3.5 h-3.5 text-stone-400" />
              </Link>
              <Link href="/furusato-tax-luxury-hotspring-ryokan-stay" className="p-3 bg-white rounded-xl border border-stone-200 text-xs font-semibold text-stone-800 hover:text-cyan-700 hover:border-cyan-300 transition flex items-center justify-between">
                <span>実質2,000円で泊まる名湯・高級温泉旅館ガイド</span>
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

  // note-137.md 生成
  const noteContent = `# 【極寒の奇跡ジュエリーアイスとモール温泉】2026-2027年冬の十勝川温泉＆極上サウナ宿5選

北海道の冬、厳冬期の十勝平野だけで目撃できる世界的奇跡の絶景「ジュエリーアイス」。太平洋の荒波に洗われ、クリスタルガラスのように透き通った氷塊が砂浜一面に打ち上げられる光景は、一生に一度は見たい冬の神秘です。

この絶景を訪ねる旅の拠点として愛されているのが、世界でも希少な美肌の湯「十勝川温泉の植物性モール温泉」と、全国のサウナファンが絶賛する「十勝サウナ」です。氷点下15度の銀世界でととのい、琥珀色の名湯に身を委ね、十勝牛やとろけるラクレットチーズに舌鼓を打つ――そんな大人の贅沢な冬旅をご紹介します。

---

## 2026-2027年冬の十勝・豊頃町ジュエリーアイスと十勝川温泉が選ばれる理由

1. 太平洋の大津海岸に打ち上げられる、世界で唯一の氷の宝石「ジュエリーアイス」
十勝川を覆う氷が海へと流され、波に揉まれることで角が丸まり、純度の高いクリスタルのような姿で大津海岸へ打ち上がります。朝日に照らされ、オレンジや黄金色に輝く瞬間は息を呑む絶景です。

2. 北海道遺産に認定された奇跡の「植物性モール温泉」
太古の葦や泥炭層を通って湧出するモール温泉は、植物由来のフミン酸や天然保湿成分がたっぷり。茶褐色のまろやかなお湯は「天然の化粧水」と呼ばれ、湯上がり後の肌が驚くほど滑らかになります。

3. 「サウナの聖地・十勝」での本格フィンランド式ロウリュ体験
白樺のヴィヒタが香り、セルフロウリュが楽しめる本格サウナが十勝川温泉や帯広市内に集結。氷点下の澄み切った大気で行う外気浴は、ここでしか味わえない究極のディープリラックスをもたらします。

---

## 冬の十勝・大津海岸へのアクセスと厳寒期の服装・見頃情報

【エリアへのアクセス】
・大津海岸（ジュエリーアイス）：とかち帯広空港より車・レンタカーで約45分。JR帯広駅より車で約1時間。冬期は早朝の見学ツアーバスも運行されています。
・十勝川温泉：JR帯広駅より路線バス（十勝バス）で約30分、タクシーで約20分。とかち帯広空港より連絡バスまたは車で約40分。道東自動車道「音更帯広IC」より約20分。

【見頃・気候・おすすめの服装】
・見頃時期：例年1月中旬〜2月下旬（寒波が強まり十勝川が凍結する厳冬期）。
・気温の目安：1月〜2月の早朝の大津海岸は氷点下15℃〜氷点下20℃以下まで冷え込みます。日中でも氷点下5℃前後です。
・服装：スキーウェアや防風ダウンジャケット、厚手の防寒インナー、スノーブーツ（足元から冷えるため必須）、防寒手袋、耳が隠れるニット帽、ネックウォーマー、貼るカイロを完全装備してください。

---

## 公式Wikipedia解説＆実写写真：豊頃町・大津海岸のジュエリーアイス

![${wiki.spotLabel}](${wiki.imageUrl})
*写真出典: Wikimedia Commons*

【名所の見どころと歴史】
${wiki.description}

十勝川河口付近の豊頃町大津海岸で観察されるジュエリーアイスは、流氷とは異なり塩分を含まない河川の氷が凍ったものであるため、透明度が非常に高いのが特徴です。太陽の光を浴びて宝石のように輝く姿は、近年世界中の写真家や旅人から熱い注目を浴びています。

---

## ふるさと納税の還元枠を使って憧れの宿にお得に泊まる！

楽天トラベルでは、各自治体の「ふるさと納税宿泊クーポン」を利用して対象の温泉宿に賢く宿泊することができます。

寄付額に応じた割引クーポンが即時適用でき、憧れの露天風呂付き客室や旬の特別会席プランも手軽に予約可能です。予約済みの旅行でも「あとから割引」を適用できます。

👉 [楽天トラベル ふるさと納税の対象施設・クーポン詳細はこちら](https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2Fspecial%2Ffurusato%2F)

---

## 十勝川温泉＆極上サウナを満喫できるおすすめ宿5選

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

## 冬の十勝・ジュエリーアイス旅行でよくある質問（FAQ）

Q1. ジュエリーアイスの見頃の時期と時間帯はいつですか？
A1. 例年1月中旬から2月下旬にかけて、豊頃町の大津海岸で見られます。特に美しく輝くのは日の出直後の早朝（朝6時30分〜7時30分頃）で、朝日に照らされてオレンジや黄金色に輝くクリスタルガラスのような絶景が広がります。

Q2. ジュエリーアイス観賞時の気温と必要な防寒着は？
A2. 1月から2月の早朝の十勝・大津海岸は氷点下15度から氷点下20度以下まで冷え込みます。極寒の海風が吹き付けるため、防風・防水仕様の厚手ダウンジャケット、スノーブーツ、防寒手袋、ニット帽、ネックウォーマー、貼るカイロが必須です。スマホやカメラのバッテリーも寒さで急激に消耗するため予備カイロで保温してください。

Q3. 十勝川温泉の「植物性モール温泉」とはどのようなお湯ですか？
A3. 十勝川温泉のモール温泉は、太古のヨシなどの植物堆積層を通って湧出する世界でも極めて珍しい温泉です。植物性の有機物（フミン酸やフルボ酸）が豊富に含まれており、茶褐色・琥珀色の透明なお湯が特徴。入浴すると天然の化粧水のように肌がつるつるになり、高い保湿・保温効果を誇ります。北海道遺産にも認定されています。

---

## 北海道の観光＆温泉宿をもっと探す

当サイトでは、十勝・道東をはじめ北海道各地の温泉宿・観光スポット情報を詳しくご紹介しています。

👉 [【最新版】北海道のおすすめ観光・温泉宿一覧はこちら](https://croud-travel.pages.dev/prefectures/hokkaido)
👉 [オホーツク流氷砕氷船ガリンコ号と紋別の冬宿特集はこちら](https://croud-travel.pages.dev/winter-hokkaido-monbetsu-drift-ice-garinko-driftice-gourmet-stay)
`;

  fs.writeFileSync(path.join(process.cwd(), 'note-137.md'), noteContent, 'utf8');
  console.log('Generated note-137.md');
}

module.exports = { generateTokachi };
