import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next';
import { 
  Sparkles, 
  MapPin, 
  Star, 
  Calendar, 
  Clock, 
  CheckCircle2, 
  Compass, 
  Camera, 
  ChevronRight, 
  Heart, 
  Thermometer, 
  Snowflake,
  ShieldAlert,
  Car,
  Footprints,
  Info
} from 'lucide-react';

export const metadata: Metadata = {
  title: '【志賀高原＆地獄谷野猿公苑】スノーモンキーと極上パウダースノー！湯田中・渋温泉郷の九湯めぐり＆信州牛を堪能する冬の名宿5選',
  description: '世界が息を呑む奇跡の光景「温泉に入る雪猿（スノーモンキー）」地獄谷野猿公苑の冬攻略完全ガイド。白銀の横手山・焼額山パウダースノー、渋温泉の石畳九湯めぐり、登録有形文化財の名湯「桃山風呂」や老舗金具屋など、冬の北信濃を満喫する厳選ホテル・温泉旅館5選を徹底特集。雪道アクセスや防寒対策も詳しく解説。',
  keywords: '志賀高原, 地獄谷野猿公苑, スノーモンキー, 湯田中温泉, 渋温泉, 志賀高原プリンスホテル, 金具屋, よろづや, 九湯めぐり, 信州牛, 冬旅行, スキー',
  alternates: {
    canonical: 'https://croud-travel.pages.dev/winter-nagano-shiga-kogen-snow-monkey-jigokudani-onsen-stay',
  },
  openGraph: {
    title: '【志賀高原＆地獄谷野猿公苑】スノーモンキーと極上パウダースノー！湯田中・渋温泉郷の九湯めぐり＆信州牛を堪能する冬の名宿5選',
    description: '世界が息を呑む奇跡の光景「温泉に入る雪猿（スノーモンキー）」地獄谷野猿公苑の冬攻略完全ガイド。白銀の横手山・焼額山パウダースノー、渋温泉の石畳九湯めぐり、登録有形文化財の名湯「桃山風呂」や老舗金具屋など、冬の北信濃を満喫する厳選ホテル・温泉旅館5選を徹底特集。',
    url: 'https://croud-travel.pages.dev/winter-nagano-shiga-kogen-snow-monkey-jigokudani-onsen-stay',
    siteName: 'トラベルマップ - 日本の観光名所＆ホテル厳選ガイド',
    locale: 'ja_JP',
    type: 'article',
    images: [
      {
        url: 'https://img.travel.rakuten.co.jp/share/HOTEL/30695/30695.jpg',
        width: 1200,
        height: 630,
        alt: '冬の志賀高原と地獄谷野猿公苑・湯田中渋温泉郷特集',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: '【志賀高原＆地獄谷野猿公苑】スノーモンキーと極上パウダースノー！湯田中・渋温泉郷の九湯めぐり＆信州牛を堪能する冬の名宿5選',
    description: '世界が息を呑む奇跡の光景「温泉に入る雪猿（スノーモンキー）」地獄谷野猿公苑の冬攻略完全ガイド。白銀の横手山・焼額山パウダースノー、渋温泉の石畳九湯めぐり、登録有形文化財の名湯「桃山風呂」や老舗金具屋など、冬の北信濃を満喫する厳選ホテル・温泉旅館5選を徹底特集。',
    images: ['https://img.travel.rakuten.co.jp/share/HOTEL/30695/30695.jpg'],
  },
};

export default function ShigaKogenSnowMonkeyPage() {
  const jsonLdArticle = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: '【志賀高原＆地獄谷野猿公苑】スノーモンキーと極上パウダースノー！湯田中・渋温泉郷の九湯めぐり＆信州牛を堪能する冬の名宿5選',
    description: '世界が息を呑む奇跡の光景「温泉に入る雪猿（スノーモンキー）」地獄谷野猿公苑の冬攻略完全ガイド。白銀の横手山・焼額山パウダースノー、渋温泉の石畳九湯めぐり、登録有形文化財の名湯「桃山風呂」や老舗金具屋など、冬の北信濃を満喫する厳選ホテル・温泉旅館5選。',
    image: 'https://img.travel.rakuten.co.jp/share/HOTEL/30695/30695.jpg',
    datePublished: '2026-10-06T00:00:00+09:00',
    dateModified: '2026-10-06T00:00:00+09:00',
    author: {
      '@type': 'Organization',
      name: 'トラベルマップ編集部',
      url: 'https://croud-travel.pages.dev',
    },
    publisher: {
      '@type': 'Organization',
      name: 'トラベルマップ',
      logo: {
        '@type': 'ImageObject',
        url: 'https://croud-travel.pages.dev/logo.png',
      },
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': 'https://croud-travel.pages.dev/winter-nagano-shiga-kogen-snow-monkey-jigokudani-onsen-stay',
    },
  };

  const jsonLdBreadcrumb = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'ホーム',
        item: 'https://croud-travel.pages.dev',
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: '特集一覧',
        item: 'https://croud-travel.pages.dev/features',
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: '志賀高原＆地獄谷スノーモンキー冬特集',
        item: 'https://croud-travel.pages.dev/winter-nagano-shiga-kogen-snow-monkey-jigokudani-onsen-stay',
      },
    ],
  };

  const faqItems = [
    {
      q: '地獄谷野猿公苑でスノーモンキーが温泉に入る姿を見るおすすめの時間帯や時期は？',
      a: '12月下旬から2月の厳冬期が最も遭遇率が高くなります。特に朝一番の開園直後（午前9時〜10時頃）や、気温が氷点下までグッと下がる冷え込んだ日中は、猿たちが暖を求めて長時間温泉に浸かる姿を見られます。午後の遅い時間になると山へ帰ってしまう群れもあるため、午前中の訪問が最も確実です。'
    },
    {
      q: '地獄谷野猿公苑への冬道トレッキングで必要な靴や服装・持ち物は？',
      a: '上林温泉の無料駐車場やバス停から野猿公苑までは、雪に覆われた山道を片道約1.6km（徒歩約30分）歩きます。圧雪や凍結で滑りやすいため、滑り止めの効くスノーブーツや簡易アイゼン（スノースパイク）の装着を強く推奨します。スニーカーやヒールは極めて危険です。防寒着、手袋、ニット帽、防水スプレーを施した上着が必須です。'
    },
    {
      q: '渋温泉の「外湯めぐり（九湯めぐり）」は宿泊者以外でも利用できますか？',
      a: '九湯ある外湯のうち「一番湯・初湯」から「八番湯・神明滝の湯」までは渋温泉旅館組合加盟宿の宿泊者専用となっており、宿泊客に貸し出されるマスターキーでのみ入浴可能です。唯一「九番湯・大湯」のみ、渋温泉旅館組合の案内所で入浴券（有料）を購入すれば日帰り客も利用できます。九湯すべてを満喫したい場合は、渋温泉街の宿泊が絶対条件となります。'
    },
    {
      q: '冬の志賀高原・湯田中渋温泉へ車でアクセスする場合のタイヤ装備は？',
      a: '湯田中・渋温泉街周辺でも積雪・凍結路面となりますが、さらに標高の高い志賀高原スキー場エリアへ登る国道292号線は完全な雪道・アイスバーンが続きます。四輪駆動（4WD）車に新品スタッドレスタイヤの装着が基本となり、2WD車の場合は金属タイヤチェーンの携行が必須です。運転に不安がある方は長野駅から運行されている直通急行バス「志賀高原線」の利用が安心です。'
    }
  ];

  const jsonLdFaq = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqItems.map(item => ({
      '@type': 'Question',
      name: item.q,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.a,
      },
    })),
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdArticle) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdBreadcrumb) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdFaq) }}
      />

      {/* パンくずリスト */}
      <nav className="bg-white border-b border-slate-200">
        <div className="max-w-6xl mx-auto px-4 py-3 text-xs sm:text-sm text-slate-600 flex items-center gap-1.5 flex-wrap">
          <Link href="/" className="hover:text-blue-600 transition-colors">ホーム</Link>
          <span className="text-slate-400">/</span>
          <Link href="/features" className="hover:text-blue-600 transition-colors">特集一覧</Link>
          <span className="text-slate-400">/</span>
          <span className="text-slate-900 font-medium">志賀高原＆地獄谷スノーモンキー冬特集</span>
        </div>
      </nav>

      {/* ヒーローセクション */}
      <header className="relative bg-gradient-to-b from-slate-900 via-slate-800 to-indigo-950 text-white py-16 sm:py-24 px-4 overflow-hidden">
        <div className="absolute inset-0 opacity-20 bg-[radial-gradient(#38bdf8_1px,transparent_1px)] [background-size:16px_16px]" />
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-500/20 border border-blue-400/30 text-blue-200 text-xs sm:text-sm font-semibold mb-6">
            <Snowflake className="w-4 h-4 text-blue-300" />
            <span>12月・1月・2月 北信濃の白銀ハイシーズン特集</span>
          </div>

          <h1 className="text-2xl sm:text-4xl md:text-5xl font-extrabold tracking-tight leading-tight sm:leading-tight mb-6">
            【志賀高原＆地獄谷野猿公苑】<br className="hidden sm:inline" />
            世界が息を呑むスノーモンキーと極上パウダースノー！<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-200 via-sky-200 to-amber-200">
              湯田中・渋温泉郷の九湯めぐり＆信州牛会席を満喫する名宿5選
            </span>
          </h1>

          <p className="text-sm sm:text-lg text-slate-300 leading-relaxed max-w-3xl mx-auto mb-8">
            氷点下の山奥、白銀の世界でうっとりと温泉に浸かる野生の日本猿「スノーモンキー」。世界中の旅人を魅了する奇跡の地獄谷野猿公苑と、標高2,000m級がもたらす極上ドライパウダースノーの志賀高原。大正・昭和の木造建築が残る渋温泉の石畳街道で名物「外湯九湯めぐり」に癒やされ、信州プレミアム牛肉と旬の地酒に舌鼓を打つ、冬の極上旅情をお届けします。
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 text-xs sm:text-sm text-slate-300">
            <span className="flex items-center gap-1.5"><Calendar className="w-4 h-4 text-amber-400" /> 最適期: 12月下旬〜2月下旬</span>
            <span className="flex items-center gap-1.5"><Thermometer className="w-4 h-4 text-sky-400" /> 気温: -5℃〜-15℃（防寒・滑り止め必須）</span>
            <span className="flex items-center gap-1.5"><MapPin className="w-4 h-4 text-rose-400" /> エリア: 長野県山ノ内町（上信越高原国立公園）</span>
          </div>
        </div>
      </header>

      {/* メインコンテンツ */}
      <main className="max-w-5xl mx-auto px-4 py-12">
        {/* リード文・見どころ詳細解説 */}
        <section className="bg-white rounded-2xl p-6 sm:p-10 border border-slate-200 shadow-sm mb-12">
          <h2 className="text-xl sm:text-2xl font-bold text-slate-950 mb-6 flex items-center gap-2.5 border-b border-slate-100 pb-4">
            <Camera className="w-6 h-6 text-blue-600" />
            白銀の北信濃が魅せる二大奇跡：スノーモンキーと国内屈指のパウダースノー
          </h2>

          <div className="space-y-5 text-sm sm:text-base text-slate-700 leading-relaxed">
            <p>
              長野県北東部、上信越高原国立公園の中核をなす山ノ内町。冬になると日本海からの湿った季節風が志賀連峰にぶつかり、標高1,500mから2,300mに及ぶ高原地帯には、湿り気のないサラサラとした世界最高水準の「プラチナパウダースノー」が降り積もります。全18ものスキー場が連結し、単一のリゾートエリアとしては日本最大規模を誇る志賀高原は、パウダースノーを愛するスキーヤー・スノーボーダーにとって紛れもない冬の聖地です。信州の冬旅では、門前町が賑わう<Link href="/winter-nagano-zenkoji-hatsumode-soba-onsen-stay" className="text-blue-600 hover:underline font-bold">長野・善光寺の初詣</Link>や、隣接する<Link href="/winter-nagano-obuse-shibu-onsen-shinshugyu-apple-stay" className="text-blue-600 hover:underline font-bold">小布施の栗と渋温泉</Link>、さらには歴史ある<Link href="/nagano-nozawa-solo-retreat-onsen-stay" className="text-blue-600 hover:underline font-bold">野沢温泉の外湯めぐり</Link>と組み合わせた周遊ルートも絶大な人気を集めています。
            </p>
            <p>
              その志賀高原の麓、横湯川の険しい渓谷沿いに位置するのが世界的に知られる「地獄谷野猿公苑（Jigokudani Monkey Park）」です。冬の厳しい寒さと豪雪を耐え抜くため、野生のニホンザルが天然露天風呂に肩まで浸かって目を細める姿は、米TIME誌の表紙を飾るなど地球上で唯一無二の絶景として知られます。頭の上に雪を積もらせながら仲間同士で身を寄せ合い、湯煙の中で温まる愛らしい姿は、厳しい自然の中で生きる生命の温もりを直に感じさせてくれます。
            </p>
            <p>
              そして散策の拠点は、開湯1350年以上の歴史を誇る「湯田中温泉」と「渋温泉」。石畳の小路に木造三階・四階建ての老舗旅館が軒を連ね、夕暮れ時には軒先に灯る橙色の提灯と立ち上る温泉の湯煙が、まるでタイムスリップしたかのようなノスタルジックな世界を作り出します。渋温泉名物の厄除け「九湯めぐり」で熱めの源泉に浸かり、湯上がりに下駄の音を響かせながら地元の居酒屋で信州そばや岩魚の塩焼き、信州牛を味わう時間は、日本が誇る冬の温泉旅の極致と言えます。
            </p>
          </div>

          {/* 現地攻略インフォボックス */}
          <div className="mt-8 bg-sky-50/70 border border-sky-100 rounded-xl p-5 sm:p-6">
            <h3 className="text-base font-bold text-sky-950 mb-3 flex items-center gap-2">
              <Info className="w-5 h-5 text-sky-600" />
              冬の地獄谷野猿公苑・志賀高原散策：知っておくべき3つの鉄則
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs sm:text-sm text-sky-900">
              <div className="bg-white p-3.5 rounded-lg border border-sky-100">
                <span className="font-bold text-sky-700 block mb-1">1. 足元はスノーブーツ必須</span>
                <p>上林温泉駐車場から野猿公苑までは片道約1.6kmの雪道山歩き（徒歩約30分）。圧雪路や凍結箇所が多いため、防水スノーブーツや簡易アイゼンが必須です。</p>
              </div>
              <div className="bg-white p-3.5 rounded-lg border border-sky-100">
                <span className="font-bold text-sky-700 block mb-1">2. 猿の入浴は午前中がベスト</span>
                <p>猿たちは日中の気温変化や天候によって山へ移動します。冷え込みが強く暖を求める朝一番（開園直後〜11時頃）が最も温泉に浸かる確率が高くなります。</p>
              </div>
              <div className="bg-white p-3.5 rounded-lg border border-sky-100">
                <span className="font-bold text-sky-700 block mb-1">3. 国道292号は4WDスタッドレス</span>
                <p>湯田中から志賀高原へ登る山道は完全なアイスバーンが連続します。冬用タイヤ必須、2WD車は金属チェーン必携。不安なら長野駅発の急行バスが賢明です。</p>
              </div>
            </div>
          </div>
        </section>

        {/* 厳選ホテルセクション */}
        <section className="mb-14">
          <div className="text-center mb-10">
            <span className="text-xs sm:text-sm font-extrabold text-blue-600 tracking-wider uppercase bg-blue-50 px-3.5 py-1.5 rounded-full border border-blue-100">
              Selected 5 Winter Accommodations
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-3">
              志賀高原・湯田中渋温泉郷を満喫する厳選ホテル・老舗温泉宿5選
            </h2>
            <p className="text-sm text-slate-600 mt-2 max-w-2xl mx-auto">
              ゲレンデ直結の高原メガリゾートから、登録有形文化財の木造建築、展望露天風呂の美食宿まで、冬の滞在を至福にする名宿を厳選しました。
            </p>
          </div>

          <div className="space-y-8">
            
            {/* ホテルカード 1 */}
            <article className="bg-white rounded-2xl shadow-sm border border-slate-200/80 overflow-hidden hover:shadow-md transition-shadow duration-300">
              <div className="p-6 sm:p-8">
                <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-amber-100 text-amber-900">
                    <Sparkles className="w-3.5 h-3.5" />
                    ゲレンデ直結・白銀のスノーリゾート
                  </span>
                  <div className="flex items-center gap-2">
                    <div className="flex items-center text-amber-500">
                      <Star className="w-4 h-4 fill-current" />
                      <span className="ml-1 text-sm font-bold text-slate-800">4.0</span>
                    </div>
                    <span className="text-xs text-slate-500">（クチコミ 551件）</span>
                  </div>
                </div>

                <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mb-3 leading-snug">
                  <a 
                    href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F30695%2F30695.html" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="hover:text-blue-600 transition-colors"
                  >
                    志賀高原プリンスホテル
                  </a>
                </h3>

                <p className="text-sm text-slate-600 mb-6 flex items-start gap-1.5">
                  <MapPin className="w-4 h-4 text-rose-500 shrink-0 mt-0.5" />
                  <span>長野県下高井郡山ノ内町志賀高原焼額山（ＪＲ長野駅より急行バス・志賀高原行で約１時間40分／上信越自動車道、信州中野ＩＣからＲ２９２経由で約３０ｋｍ。）</span>
                </p>

                <div className="grid grid-cols-1 md:grid-cols-12 gap-6 mb-6">
                  <div className="md:col-span-5">
                    <div className="relative aspect-[4/3] rounded-xl overflow-hidden bg-slate-100 border border-slate-100">
                      <img 
                        src="https://img.travel.rakuten.co.jp/share/HOTEL/30695/30695.jpg" 
                        alt="志賀高原プリンスホテル 外観・客室イメージ" 
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                        loading="lazy"
                      />
                    </div>
                  </div>

                  <div className="md:col-span-7 flex flex-col justify-between">
                    <div>
                      <h4 className="text-sm font-bold text-slate-800 mb-2 flex items-center gap-1.5">
                        <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                        この宿の注目ポイント
                      </h4>
                      <ul className="space-y-1.5 mb-4 text-xs sm:text-sm text-slate-600">
                        <li className="flex items-start gap-2"><span className="text-emerald-500 font-bold">•</span><span>焼額山スキー場が目の前！スキーイン・スキーアウト可能な圧倒的利便性</span></li>
                        <li className="flex items-start gap-2"><span className="text-emerald-500 font-bold">•</span><span>標高1,500mを超える高地ならではの極上ドライパウダースノーを堪能</span></li>
                        <li className="flex items-start gap-2"><span className="text-emerald-500 font-bold">•</span><span>東館・南館・西館の多彩な客室棟と信州食材の本格ディナーブッフェ</span></li>
                      </ul>
                    </div>

                    <div className="p-3.5 bg-slate-50 rounded-xl border border-slate-100">
                      <p className="text-xs text-slate-500 mb-1">参考宿泊料金（目安）</p>
                      <div className="flex items-baseline justify-between">
                        <span className="text-lg sm:text-xl font-extrabold text-blue-600">プランにより変動（要確認）</span>
                        <span className="text-xs text-slate-500">2名1室利用時・1名あたり</span>
                      </div>
                    </div>
                  </div>
                </div>

                <p className="text-sm sm:text-base text-slate-700 leading-relaxed mb-6 bg-amber-50/40 p-4 rounded-xl border border-amber-100/60">
                  志賀高原の最深部に位置し、国内外のスキーヤー・スノーボーダーから絶大な支持を集める名門リゾートホテル。客室を出ればすぐに雪質日本屈指のゲレンデへ飛び出せるロケーションは冬旅最大の贅沢です。朝一番のピステンバーンを独占するファーストトラックを楽しんだ後は、暖炉のあるラウンジで信州ワインや温かいカフェラテを片手に白銀の山々を望む優雅なひととき。夕食には信州サーモンのカルパッチョや地元ブランドポークのグリルなど、高原の豊かな恵みを味わう多彩なメニューが揃います。
                </p>

                <div className="flex flex-col sm:flex-row gap-3">
                  <a
                    href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F30695%2F30695.html"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-gradient-to-r from-red-600 to-rose-600 hover:from-red-700 hover:to-rose-700 text-white font-bold text-sm sm:text-base rounded-xl shadow-sm hover:shadow transition-all text-center"
                  >
                    <span>楽天トラベルで空室・宿泊プランを見る</span>
                    <ChevronRight className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </article>
    

            {/* ホテルカード 2 */}
            <article className="bg-white rounded-2xl shadow-sm border border-slate-200/80 overflow-hidden hover:shadow-md transition-shadow duration-300">
              <div className="p-6 sm:p-8">
                <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-amber-100 text-amber-900">
                    <Sparkles className="w-3.5 h-3.5" />
                    国登録有形文化財・名湯「桃山風呂」
                  </span>
                  <div className="flex items-center gap-2">
                    <div className="flex items-center text-amber-500">
                      <Star className="w-4 h-4 fill-current" />
                      <span className="ml-1 text-sm font-bold text-slate-800">4.6</span>
                    </div>
                    <span className="text-xs text-slate-500">（クチコミ 1,211件）</span>
                  </div>
                </div>

                <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mb-3 leading-snug">
                  <a 
                    href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F52848%2F52848.html" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="hover:text-blue-600 transition-colors"
                  >
                    湯田中温泉　よろづや
                  </a>
                </h3>

                <p className="text-sm text-slate-600 mb-6 flex items-start gap-1.5">
                  <MapPin className="w-4 h-4 text-rose-500 shrink-0 mt-0.5" />
                  <span>長野県下高井郡山ノ内町平穏3137（長野電鉄 湯田中駅より 徒歩7分　【地獄谷野猿公苑入口まで車で20分】）</span>
                </p>

                <div className="grid grid-cols-1 md:grid-cols-12 gap-6 mb-6">
                  <div className="md:col-span-5">
                    <div className="relative aspect-[4/3] rounded-xl overflow-hidden bg-slate-100 border border-slate-100">
                      <img 
                        src="https://img.travel.rakuten.co.jp/share/HOTEL/52848/52848.jpg" 
                        alt="湯田中温泉　よろづや 外観・客室イメージ" 
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                        loading="lazy"
                      />
                    </div>
                  </div>

                  <div className="md:col-span-7 flex flex-col justify-between">
                    <div>
                      <h4 className="text-sm font-bold text-slate-800 mb-2 flex items-center gap-1.5">
                        <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                        この宿の注目ポイント
                      </h4>
                      <ul className="space-y-1.5 mb-4 text-xs sm:text-sm text-slate-600">
                        <li className="flex items-start gap-2"><span className="text-emerald-500 font-bold">•</span><span>日本の温泉文化を象徴する総木造の伽藍建築「桃山風呂」の圧倒的風格</span></li>
                        <li className="flex items-start gap-2"><span className="text-emerald-500 font-bold">•</span><span>自家源泉3本を保有し、毎分豊富な湯量を誇る純度100%の源泉掛け流し</span></li>
                        <li className="flex items-start gap-2"><span className="text-emerald-500 font-bold">•</span><span>創業230年余の歴史が息づく静寂の日本庭園と信州牛すき焼き会席</span></li>
                      </ul>
                    </div>

                    <div className="p-3.5 bg-slate-50 rounded-xl border border-slate-100">
                      <p className="text-xs text-slate-500 mb-1">参考宿泊料金（目安）</p>
                      <div className="flex items-baseline justify-between">
                        <span className="text-lg sm:text-xl font-extrabold text-blue-600">¥17,000〜</span>
                        <span className="text-xs text-slate-500">2名1室利用時・1名あたり</span>
                      </div>
                    </div>
                  </div>
                </div>

                <p className="text-sm sm:text-base text-slate-700 leading-relaxed mb-6 bg-amber-50/40 p-4 rounded-xl border border-amber-100/60">
                  寛政年間に創業し、数多くの文人墨客や皇族に愛されてきた湯田中温泉を代表する老舗旅館。国の登録有形文化財に指定されている「桃山風呂」は、日本の伝統的な神社仏閣建築の意匠を極めた総木造の湯殿で、湯気の中に浮かび上がる欅の柱や格天井は息を呑む美しさです。地獄谷野猿公苑散策で冷え切った身体を、まろやかな名湯が芯から解きほぐしてくれます。夕食は信州プレミアム牛肉のすき焼きを中心に、北信濃の旬の味覚を職人技で仕立てた本格懐石が旅情を一層高めます。
                </p>

                <div className="flex flex-col sm:flex-row gap-3">
                  <a
                    href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F52848%2F52848.html"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-gradient-to-r from-red-600 to-rose-600 hover:from-red-700 hover:to-rose-700 text-white font-bold text-sm sm:text-base rounded-xl shadow-sm hover:shadow transition-all text-center"
                  >
                    <span>楽天トラベルで空室・宿泊プランを見る</span>
                    <ChevronRight className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </article>
    

            {/* ホテルカード 3 */}
            <article className="bg-white rounded-2xl shadow-sm border border-slate-200/80 overflow-hidden hover:shadow-md transition-shadow duration-300">
              <div className="p-6 sm:p-8">
                <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-amber-100 text-amber-900">
                    <Sparkles className="w-3.5 h-3.5" />
                    木造四階建て文化財建築・歴史の生きた博物館
                  </span>
                  <div className="flex items-center gap-2">
                    <div className="flex items-center text-amber-500">
                      <Star className="w-4 h-4 fill-current" />
                      <span className="ml-1 text-sm font-bold text-slate-800">4.5</span>
                    </div>
                    <span className="text-xs text-slate-500">（クチコミ 1,026件）</span>
                  </div>
                </div>

                <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mb-3 leading-snug">
                  <a 
                    href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F32044%2F32044.html" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="hover:text-blue-600 transition-colors"
                  >
                    渋温泉　歴史の宿　金具屋
                  </a>
                </h3>

                <p className="text-sm text-slate-600 mb-6 flex items-start gap-1.5">
                  <MapPin className="w-4 h-4 text-rose-500 shrink-0 mt-0.5" />
                  <span>長野県下高井郡山ノ内町平穏2202（長野電鉄線　湯田中駅／上信越自動車道　信州中野ＩＣより国道２９２号線を志賀高原方面へ約１５分）</span>
                </p>

                <div className="grid grid-cols-1 md:grid-cols-12 gap-6 mb-6">
                  <div className="md:col-span-5">
                    <div className="relative aspect-[4/3] rounded-xl overflow-hidden bg-slate-100 border border-slate-100">
                      <img 
                        src="https://img.travel.rakuten.co.jp/share/HOTEL/32044/32044.jpg" 
                        alt="渋温泉　歴史の宿　金具屋 外観・客室イメージ" 
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                        loading="lazy"
                      />
                    </div>
                  </div>

                  <div className="md:col-span-7 flex flex-col justify-between">
                    <div>
                      <h4 className="text-sm font-bold text-slate-800 mb-2 flex items-center gap-1.5">
                        <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                        この宿の注目ポイント
                      </h4>
                      <ul className="space-y-1.5 mb-4 text-xs sm:text-sm text-slate-600">
                        <li className="flex items-start gap-2"><span className="text-emerald-500 font-bold">•</span><span>昭和初期の宮大工の技が凝縮された木造四階建て「斉月楼」の圧巻の佇まい</span></li>
                        <li className="flex items-start gap-2"><span className="text-emerald-500 font-bold">•</span><span>館内だけで湯めぐりが完結する「八つの風呂（浪漫風呂・鎌倉風呂等）」</span></li>
                        <li className="flex items-start gap-2"><span className="text-emerald-500 font-bold">•</span><span>文化財案内ツアーで紐解かれる建築美と、渋温泉名物「九湯めぐり」の一等拠点</span></li>
                      </ul>
                    </div>

                    <div className="p-3.5 bg-slate-50 rounded-xl border border-slate-100">
                      <p className="text-xs text-slate-500 mb-1">参考宿泊料金（目安）</p>
                      <div className="flex items-baseline justify-between">
                        <span className="text-lg sm:text-xl font-extrabold text-blue-600">¥18,700〜</span>
                        <span className="text-xs text-slate-500">2名1室利用時・1名あたり</span>
                      </div>
                    </div>
                  </div>
                </div>

                <p className="text-sm sm:text-base text-slate-700 leading-relaxed mb-6 bg-amber-50/40 p-4 rounded-xl border border-amber-100/60">
                  渋温泉の石畳通りに堂々とそびえ立ち、ジブリ映画の舞台を彷彿とさせる神秘的な外観で知られる金具屋。釘を使わずに組み上げられた宮大工の粋を集めた建築は、建物そのものが息づく文化遺産です。館内にはローマの公衆浴場を模したステンドグラス輝く「浪漫風呂」や、源頼朝伝説にちなむ「鎌倉風呂」など趣の異なる8つの湯殿があり、すべて源泉掛け流し。夜にはライトアップされた木造楼閣が温かい光を放ち、雪の降る石畳をカランコロンと下駄を鳴らして歩く冬の湯街情緒は格別です。
                </p>

                <div className="flex flex-col sm:flex-row gap-3">
                  <a
                    href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F32044%2F32044.html"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-gradient-to-r from-red-600 to-rose-600 hover:from-red-700 hover:to-rose-700 text-white font-bold text-sm sm:text-base rounded-xl shadow-sm hover:shadow transition-all text-center"
                  >
                    <span>楽天トラベルで空室・宿泊プランを見る</span>
                    <ChevronRight className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </article>
    

            {/* ホテルカード 4 */}
            <article className="bg-white rounded-2xl shadow-sm border border-slate-200/80 overflow-hidden hover:shadow-md transition-shadow duration-300">
              <div className="p-6 sm:p-8">
                <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-amber-100 text-amber-900">
                    <Sparkles className="w-3.5 h-3.5" />
                    湯田中温泉・屋上絶景露天とモダン寛ぎ空間
                  </span>
                  <div className="flex items-center gap-2">
                    <div className="flex items-center text-amber-500">
                      <Star className="w-4 h-4 fill-current" />
                      <span className="ml-1 text-sm font-bold text-slate-800">4.6</span>
                    </div>
                    <span className="text-xs text-slate-500">（クチコミ 571件）</span>
                  </div>
                </div>

                <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mb-3 leading-snug">
                  <a 
                    href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F4720%2F4720.html" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="hover:text-blue-600 transition-colors"
                  >
                    湯田中温泉　ホテル椿野
                  </a>
                </h3>

                <p className="text-sm text-slate-600 mb-6 flex items-start gap-1.5">
                  <MapPin className="w-4 h-4 text-rose-500 shrink-0 mt-0.5" />
                  <span>長野県下高井郡山ノ内町大字平穏3294番地（ＪＲ長野駅より乗換４５分、湯田中駅より徒歩２分。）</span>
                </p>

                <div className="grid grid-cols-1 md:grid-cols-12 gap-6 mb-6">
                  <div className="md:col-span-5">
                    <div className="relative aspect-[4/3] rounded-xl overflow-hidden bg-slate-100 border border-slate-100">
                      <img 
                        src="https://img.travel.rakuten.co.jp/share/HOTEL/4720/4720.jpg" 
                        alt="湯田中温泉　ホテル椿野 外観・客室イメージ" 
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                        loading="lazy"
                      />
                    </div>
                  </div>

                  <div className="md:col-span-7 flex flex-col justify-between">
                    <div>
                      <h4 className="text-sm font-bold text-slate-800 mb-2 flex items-center gap-1.5">
                        <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                        この宿の注目ポイント
                      </h4>
                      <ul className="space-y-1.5 mb-4 text-xs sm:text-sm text-slate-600">
                        <li className="flex items-start gap-2"><span className="text-emerald-500 font-bold">•</span><span>最上階展望露天風呂から北信五岳と湯田中の街並みを一望するパノラマビュー</span></li>
                        <li className="flex items-start gap-2"><span className="text-emerald-500 font-bold">•</span><span>北信州の旬食材を彩り豊かに盛り込んだ創作和会席と地酒のペアリング</span></li>
                        <li className="flex items-start gap-2"><span className="text-emerald-500 font-bold">•</span><span>和モダンにリニューアルされた洗練の客室と細やかなホスピタリティ</span></li>
                      </ul>
                    </div>

                    <div className="p-3.5 bg-slate-50 rounded-xl border border-slate-100">
                      <p className="text-xs text-slate-500 mb-1">参考宿泊料金（目安）</p>
                      <div className="flex items-baseline justify-between">
                        <span className="text-lg sm:text-xl font-extrabold text-blue-600">¥8,100〜</span>
                        <span className="text-xs text-slate-500">2名1室利用時・1名あたり</span>
                      </div>
                    </div>
                  </div>
                </div>

                <p className="text-sm sm:text-base text-slate-700 leading-relaxed mb-6 bg-amber-50/40 p-4 rounded-xl border border-amber-100/60">
                  湯田中駅から徒歩わずか3分という好立地にありながら、館内に入ると落ち着いた和モダンの静寂が広がる上質な湯宿。宿の自慢は最上階に設けられた展望露天風呂で、雪を冠した北信五岳の雄大な稜線と温泉街の湯けむりを眼下に眺めながらの湯浴みは開放感抜群です。夕食には信州牛の石焼きや地元農家直送の高原野菜を取り入れた月替わりの創作会席が並び、目と舌で信州の冬を贅沢に味わえます。地獄谷野猿公苑へのアクセス拠点としても抜群の使い勝手を誇ります。
                </p>

                <div className="flex flex-col sm:flex-row gap-3">
                  <a
                    href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F4720%2F4720.html"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-gradient-to-r from-red-600 to-rose-600 hover:from-red-700 hover:to-rose-700 text-white font-bold text-sm sm:text-base rounded-xl shadow-sm hover:shadow transition-all text-center"
                  >
                    <span>楽天トラベルで空室・宿泊プランを見る</span>
                    <ChevronRight className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </article>
    

            {/* ホテルカード 5 */}
            <article className="bg-white rounded-2xl shadow-sm border border-slate-200/80 overflow-hidden hover:shadow-md transition-shadow duration-300">
              <div className="p-6 sm:p-8">
                <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-amber-100 text-amber-900">
                    <Sparkles className="w-3.5 h-3.5" />
                    標高1,700mほたる温泉・アクティブステイの拠点
                  </span>
                  <div className="flex items-center gap-2">
                    <div className="flex items-center text-amber-500">
                      <Star className="w-4 h-4 fill-current" />
                      <span className="ml-1 text-sm font-bold text-slate-800">3.4</span>
                    </div>
                    <span className="text-xs text-slate-500">（クチコミ 283件）</span>
                  </div>
                </div>

                <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mb-3 leading-snug">
                  <a 
                    href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F30822%2F30822.html" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="hover:text-blue-600 transition-colors"
                  >
                    志賀パレスホテル
                  </a>
                </h3>

                <p className="text-sm text-slate-600 mb-6 flex items-start gap-1.5">
                  <MapPin className="w-4 h-4 text-rose-500 shrink-0 mt-0.5" />
                  <span>長野県下高井郡山ノ内町志賀高原横手山１番地（長野電鉄湯田中駅　／　湯田中より長電バスにて５０分）</span>
                </p>

                <div className="grid grid-cols-1 md:grid-cols-12 gap-6 mb-6">
                  <div className="md:col-span-5">
                    <div className="relative aspect-[4/3] rounded-xl overflow-hidden bg-slate-100 border border-slate-100">
                      <img 
                        src="https://img.travel.rakuten.co.jp/share/HOTEL/30822/30822.jpg" 
                        alt="志賀パレスホテル 外観・客室イメージ" 
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                        loading="lazy"
                      />
                    </div>
                  </div>

                  <div className="md:col-span-7 flex flex-col justify-between">
                    <div>
                      <h4 className="text-sm font-bold text-slate-800 mb-2 flex items-center gap-1.5">
                        <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                        この宿の注目ポイント
                      </h4>
                      <ul className="space-y-1.5 mb-4 text-xs sm:text-sm text-slate-600">
                        <li className="flex items-start gap-2"><span className="text-emerald-500 font-bold">•</span><span>天然記念物・ゲンジボタル生息地として知られる天然温泉「ほたる温泉」</span></li>
                        <li className="flex items-start gap-2"><span className="text-emerald-500 font-bold">•</span><span>横手山・熊の湯スキー場至近！標高1,700mの澄み切った満天の星空</span></li>
                        <li className="flex items-start gap-2"><span className="text-emerald-500 font-bold">•</span><span>バイキングスタイルで気兼ねなく楽しめるボリューム満点の食事</span></li>
                      </ul>
                    </div>

                    <div className="p-3.5 bg-slate-50 rounded-xl border border-slate-100">
                      <p className="text-xs text-slate-500 mb-1">参考宿泊料金（目安）</p>
                      <div className="flex items-baseline justify-between">
                        <span className="text-lg sm:text-xl font-extrabold text-blue-600">¥8,250〜</span>
                        <span className="text-xs text-slate-500">2名1室利用時・1名あたり</span>
                      </div>
                    </div>
                  </div>
                </div>

                <p className="text-sm sm:text-base text-slate-700 leading-relaxed mb-6 bg-amber-50/40 p-4 rounded-xl border border-amber-100/60">
                  志賀高原の中でも高標高エリアに位置し、日本屈指の雪質を誇る横手山・熊の湯エリアへのアクセスに優れた温泉ホテル。自家源泉から引く「ほたる温泉」は弱アルカリ性のやさしい泉質で、スキーやスノーモンキートレッキングで疲れた筋肉を心地よく癒やしてくれます。夜には都市部では決して見ることのできない、澄み切った極寒の夜空に瞬く無数の天の川と星座のパノラマが広がります。リーズナブルな価格設定と機能的な館内設備で、冬のロングステイにも最適です。
                </p>

                <div className="flex flex-col sm:flex-row gap-3">
                  <a
                    href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F30822%2F30822.html"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-gradient-to-r from-red-600 to-rose-600 hover:from-red-700 hover:to-rose-700 text-white font-bold text-sm sm:text-base rounded-xl shadow-sm hover:shadow transition-all text-center"
                  >
                    <span>楽天トラベルで空室・宿泊プランを見る</span>
                    <ChevronRight className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </article>
    
          </div>
        </section>

        {/* 1泊2日モデルコース */}
        <section className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-sm mb-12">
          <h2 className="text-xl sm:text-2xl font-bold text-slate-900 mb-6 flex items-center gap-2.5">
            <Compass className="w-6 h-6 text-amber-600" />
            【1泊2日】スノーモンキーと白銀パウダースノー＆渋温泉九湯めぐりモデルコース
          </h2>

          <div className="space-y-6">
            <div className="border-l-2 border-blue-500 pl-4 sm:pl-6 relative">
              <span className="absolute -left-2 top-0 w-3.5 h-3.5 rounded-full bg-blue-500 ring-4 ring-white" />
              <div className="text-xs font-bold text-blue-600 uppercase tracking-wider mb-1">1日目：午前〜午後</div>
              <h3 className="text-base sm:text-lg font-bold text-slate-900 mb-2">
                JR長野駅到着 ➔ 長野電鉄スノーモンキー号で湯田中へ ➔ 地獄谷野猿公苑でスノーモンキー見学
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                北陸新幹線で長野駅へ到着後、長野電鉄の特急「スノーモンキー」に乗り換え終点の湯田中駅へ。駅前から路線バスで上林温泉へ移動し、白銀の杉木立に囲まれた遊歩道を30分トレッキング。湯烟立ち込める地獄谷野猿公苑で、温泉に浸かる野生猿たちの愛らしい表情を間近で観察・撮影します。
              </p>
            </div>

            <div className="border-l-2 border-indigo-500 pl-4 sm:pl-6 relative">
              <span className="absolute -left-2 top-0 w-3.5 h-3.5 rounded-full bg-indigo-500 ring-4 ring-white" />
              <div className="text-xs font-bold text-indigo-600 uppercase tracking-wider mb-1">1日目：夕方〜夜</div>
              <h3 className="text-base sm:text-lg font-bold text-slate-900 mb-2">
                渋温泉・湯田中温泉の宿へチェックイン ➔ 石畳街の「九湯めぐり」と信州牛懐石
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                チェックイン後、浴衣と丹前を羽織り、宿で借りた専用鍵を持って渋温泉の共同浴場「九湯めぐり」へ。一番湯から九番湯の大湯まで巡り厄除け祈願。夜は宿で信州プレミアム牛肉のすき焼きや信州サーモン、地酒「縁喜（えんぎ）」を堪能。雪化粧した木造建築のライトアップを眺めて情緒に浸ります。
              </p>
            </div>

            <div className="border-l-2 border-emerald-500 pl-4 sm:pl-6 relative">
              <span className="absolute -left-2 top-0 w-3.5 h-3.5 rounded-full bg-emerald-500 ring-4 ring-white" />
              <div className="text-xs font-bold text-emerald-600 uppercase tracking-wider mb-1">2日目：終日</div>
              <h3 className="text-base sm:text-lg font-bold text-slate-900 mb-2">
                志賀高原スキー場へ移動 ➔ 焼額山・横手山でパウダースノー滑走 ➔ 温泉で温まり帰路へ
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                朝食後、シャトルバスで志賀高原エリアへ。標高2,000mを超える横手山や焼額山で、サラサラの極上パウダースノーを満喫。スキーやスノーボードをしない方も、横手山頂展望台の「満天ビューテラス」へリフトで登り、雲海と北アルプスの大パノラマを楽しめます。午後、湯田中駅前で名物温泉まんじゅうをお土産に購入し帰路へ。
              </p>
            </div>
          </div>
        </section>

        {/* よくある質問（FAQ） */}
        

        {/* 内部リンク・関連特集セクション */}
        <section className="bg-slate-900 text-white rounded-2xl p-6 sm:p-8 border border-slate-800 shadow-md">
          <h2 className="text-lg sm:text-xl font-bold mb-4 flex items-center gap-2">
            <Heart className="w-5 h-5 text-rose-400" />
            あわせて読みたい！冬の甲信越・北陸・温泉旅おすすめ特集
          </h2>
          <p className="text-xs sm:text-sm text-slate-300 mb-6 leading-relaxed">
            冬の信州や近隣エリアには、雪見露天風呂や初詣、歴史ある街並みが広がる魅力的な観光地が数多くあります。ぜひ次の旅行プランの参考にしてください。
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm">
            <Link 
              href="/winter-nagano-zenkoji-hatsumode-soba-onsen-stay"
              className="p-3 bg-slate-800/80 hover:bg-slate-700/80 rounded-xl border border-slate-700 transition-colors flex items-center justify-between"
            >
              <span>長野・善光寺新春初詣＆戸隠そば・信州温泉名宿</span>
              <ChevronRight className="w-4 h-4 text-slate-400 shrink-0" />
            </Link>
            <Link 
              href="/winter-nagano-obuse-shibu-onsen-shinshugyu-apple-stay"
              className="p-3 bg-slate-800/80 hover:bg-slate-700/80 rounded-xl border border-slate-700 transition-colors flex items-center justify-between"
            >
              <span>長野・小布施栗の小径散策＆渋温泉・信州牛美食名宿</span>
              <ChevronRight className="w-4 h-4 text-slate-400 shrink-0" />
            </Link>
            <Link 
              href="/winter-nagano-tateshina-onsen-yatsugatake-snow-shinshu-beef-stay"
              className="p-3 bg-slate-800/80 hover:bg-slate-700/80 rounded-xl border border-slate-700 transition-colors flex items-center justify-between"
            >
              <span>長野・蓼科温泉＆八ヶ岳雪景色・信州牛ローストビーフ名宿</span>
              <ChevronRight className="w-4 h-4 text-slate-400 shrink-0" />
            </Link>
            <Link 
              href="/nagano-nozawa-solo-retreat-onsen-stay"
              className="p-3 bg-slate-800/80 hover:bg-slate-700/80 rounded-xl border border-slate-700 transition-colors flex items-center justify-between"
            >
              <span>長野・野沢温泉十三外湯めぐり＆名物野沢菜一人旅名宿</span>
              <ChevronRight className="w-4 h-4 text-slate-400 shrink-0" />
            </Link>
          </div>
        </section>
      </main>
    </div>
  );
}
