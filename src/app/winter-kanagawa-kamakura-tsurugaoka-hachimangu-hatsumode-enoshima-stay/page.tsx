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
  Flower2,
  Gem,
  UtensilsCrossed,
  ShieldAlert,
  Info
} from 'lucide-react';

export const metadata: Metadata = {
  title: '【鎌倉・鶴岡八幡宮初詣】冬牡丹咲く古都の祈りと江の島！名宿5選',
  description: '源氏ゆかりの武家古都「鶴岡八幡宮」の新春初詣と神苑ぼたん庭園に咲く可憐な冬牡丹（正月牡丹）。関東三大イルミネーション「江の島 湘南の宝石」シ。楽天トラベルの最新空室状況・限定割引プランを徹底比較！',
  keywords: '鎌倉, 鶴岡八幡宮, 初詣, 冬牡丹, 小町通り, 江の島, 湘南の宝石, シーキャンドル, 鎌倉プリンスホテル, ホテルメトロポリタン鎌倉, ブレスホテル, イルミネーション, 新春旅行',
  alternates: {
    canonical: 'https://croud-travel.pages.dev/winter-kanagawa-kamakura-tsurugaoka-hachimangu-hatsumode-enoshima-stay',
  },
  openGraph: {
    title: '【鎌倉・鶴岡八幡宮初詣】冬牡丹咲く古都の祈りと江の島！名宿5選',
    description: '源氏ゆかりの武家古都「鶴岡八幡宮」の新春初詣と神苑ぼたん庭園に咲く可憐な冬牡丹（正月牡丹）。関東三大イルミネーション「江の島 湘南の宝石」シ。楽天トラベルの最新空室状況・限定割引プランを徹底比較！',
    url: 'https://croud-travel.pages.dev/winter-kanagawa-kamakura-tsurugaoka-hachimangu-hatsumode-enoshima-stay',
    siteName: 'トラベルマップ - 日本の観光名所＆ホテル厳選ガイド',
    locale: 'ja_JP',
    type: 'article',
    images: [
      {
        url: 'https://img.travel.rakuten.co.jp/share/HOTEL/1679/1679.jpg',
        width: 1200,
        height: 630,
        alt: '冬の鎌倉鶴岡八幡宮初詣と江の島湘南の宝石特集',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: '【鎌倉・鶴岡八幡宮初詣＆湘南の宝石】冬牡丹咲く古都の祈りと江の島イルミネーション！小町通り冬グルメ＆相模湾絶景宿5選',
    description: '源氏ゆかりの武家古都「鶴岡八幡宮」の新春初詣と神苑ぼたん庭園に咲く可憐な冬牡丹（正月牡丹）。関東三大イルミネーション「江の島 湘南の宝石」シーキャンドルの光の大空間、小町通りの焼きたて団子と相模湾の冬魚グルメ。鎌倉・七里ヶ浜・由比ヶ浜・江の島島内の厳選ホテル5選。',
    images: ['https://img.travel.rakuten.co.jp/share/HOTEL/1679/1679.jpg'],
  },
};

export default function KamakuraTsurugaokaPage() {
  const jsonLdArticle = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: '【鎌倉・鶴岡八幡宮初詣＆湘南の宝石】冬牡丹咲く古都の祈りと江の島イルミネーション！小町通り冬グルメ＆相模湾絶景宿5選',
    description: '源氏ゆかりの武家古都「鶴岡八幡宮」の新春初詣と神苑ぼたん庭園に咲く可憐な冬牡丹（正月牡丹）。関東三大イルミネーション「江の島 湘南の宝石」シーキャンドルの光の大空間、小町通りの焼きたて団子と相模湾の冬魚グルメ。鎌倉・七里ヶ浜・由比ヶ浜・江の島島内の厳選ホテル5選。',
    image: 'https://img.travel.rakuten.co.jp/share/HOTEL/1679/1679.jpg',
    datePublished: 'T00:00:00+09:00',
    dateModified: 'T00:00:00+09:00',
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
      '@id': 'https://croud-travel.pages.dev/winter-kanagawa-kamakura-tsurugaoka-hachimangu-hatsumode-enoshima-stay',
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
        name: '鎌倉鶴岡八幡宮初詣＆江の島冬特集',
        item: 'https://croud-travel.pages.dev/winter-kanagawa-kamakura-tsurugaoka-hachimangu-hatsumode-enoshima-stay',
      },
    ],
  };

  const faqItems = [
    {
      q: '鶴岡八幡宮の初詣で混雑を回避して快適に参拝できる時間帯は？',
      a: '正月三が日（1月1日〜3日）は例年250万人近くが訪れ、若宮大路から大石段にかけて入場規制が敷かれます。混雑を避けるなら「早朝6時〜8時頃」の澄み切った朝参拝、もしくは「夕方18時以降」の夜間参拝がおすすめです。特に早朝は静謐な空気の中で清々しく手を合わせることができ、写真撮影や神苑ぼたん庭園の観賞もスムーズです。'
    },
    {
      q: '鶴岡八幡宮「神苑ぼたん庭園」の冬牡丹の見頃時期と開園時間は？',
      a: '冬牡丹（正月ぼたん）の見頃は「1月1日〜2月中旬頃」です。雪除けの藁囲い（わらぼっち）の中で寒さに耐えて咲き誇る大輪の牡丹は、新春の風物詩として格別の美しさを誇ります。開園時間は午前9時〜午後16時30分頃、拝観料は大人500円です。'
    },
    {
      q: '江の島「湘南の宝石」イルミネーションの点灯時間と見どころは？',
      a: '例年11月下旬から翌年2月中旬まで開催されます。点灯時間は平日17時〜20時、土日祝・年末年始は17時〜21時です。見どころは江の島サムエル・コッキング苑内のクリスタルビーズが輝く光のトンネル「湘南シャンデリア」と、江の島シーキャンドル（展望灯台）から広がる360度の光の大空間。日没直後の夕富士とイルミネーションのグラデーションは圧巻です。'
    },
    {
      q: '鎌倉・江の島間の冬の移動手段とおすすめの切符は？',
      a: '鎌倉から江の島への移動は「江ノ電（江ノ島電鉄）」が風情抜群で最も便利です（所要約25分）。全線乗り降り自由の1日乗車券「のりおりくん」を購入すれば、長谷寺や極楽寺、七里ヶ浜など途中下車の旅も自由自在です。正月三が日は周辺道路が極度の渋滞となるため、公共交通機関の利用が絶対の鉄則です。'
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
          <span className="text-slate-900 font-medium">鎌倉鶴岡八幡宮初詣＆江の島冬特集</span>
        </div>
      </nav>

      {/* ヒーローセクション */}
      <header className="relative bg-gradient-to-b from-slate-950 via-rose-950 to-slate-900 text-white py-16 sm:py-24 px-4 overflow-hidden">
        <div className="absolute inset-0 opacity-20 bg-[radial-gradient(#fb7185_1px,transparent_1px)] [background-size:16px_16px]" />
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-rose-500/20 border border-rose-400/30 text-rose-200 text-xs sm:text-sm font-semibold mb-6">
            <Flower2 className="w-4 h-4 text-rose-300" />
            <span>12月・1月・2月 古都鎌倉の新春祈願＆光の祭典特集</span>
          </div>

          <h1 className="text-2xl sm:text-4xl md:text-5xl font-extrabold tracking-tight leading-tight sm:leading-tight mb-6">
            【鎌倉・鶴岡八幡宮初詣＆湘南の宝石】<br className="hidden sm:inline" />
            冬牡丹咲く古都の祈りと江の島シーキャンドルの光！<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-200 via-pink-200 to-amber-200">
              小町通り冬グルメ＆相模湾絶景を味わう上質宿5選
            </span>
          </h1>

          <p className="text-sm sm:text-lg text-slate-300 leading-relaxed max-w-3xl mx-auto mb-8">
            源頼朝が拓いた武家古都の象徴「鶴岡八幡宮」で清らかな新春を祈る初詣。源平池の畔、藁囲いの中で健気に花開く「神苑ぼたん庭園」の冬牡丹。江ノ電に揺られて海沿いを進めば、関東三大イルミネーション「江の島 湘南の宝石」が放つ宝石のような煌めきと茜色の夕富士。焼きたて団子や相模湾の冬魚を味わい、海辺のリゾートホテルで心洗われる冬旅を。
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 text-xs sm:text-sm text-slate-300">
            <span className="flex items-center gap-1.5"><Calendar className="w-4 h-4 text-amber-400" /> 最適期: 12月下旬〜2月中旬</span>
            <span className="flex items-center gap-1.5"><Thermometer className="w-4 h-4 text-rose-400" /> 冬の気候: 昼5〜10℃・夜0〜5℃（海風防寒）</span>
            <span className="flex items-center gap-1.5"><MapPin className="w-4 h-4 text-sky-400" /> エリア: 神奈川県鎌倉市・藤沢市（湘南エリア）</span>
          </div>
        </div>
      </header>

      {/* メインコンテンツ */}
      <main className="max-w-5xl mx-auto px-4 py-12">
        {/* リード文・見どころ詳細解説 */}
        <section className="bg-white rounded-2xl p-6 sm:p-10 border border-slate-200 shadow-sm mb-12">
          <h2 className="text-xl sm:text-2xl font-bold text-slate-950 mb-6 flex items-center gap-2.5 border-b border-slate-100 pb-4">
            <Gem className="w-6 h-6 text-rose-600" />
            祈りと光が交差する冬の湘南・鎌倉：新春の厳かさと夜景の幻想美
          </h2>

          <div className="space-y-5 text-sm sm:text-base text-slate-700 leading-relaxed">
            <p>
              新春の冷涼な空気に包まれる古都・鎌倉。若宮大路の長い参道を抜けると、朱色の大鳥居の向こうにそびえ立つのが、鎌倉幕府の守護神「鶴岡八幡宮」です。大石段を登り切った本宮（上宮）から見下ろす鎌倉の街並みと由比ヶ浜へとまっすぐ伸びる若宮大路は、千年の時を超えた風格を漂わせます。
            </p>
            <p>
              新春の境内で見逃せないのが、源平池のほとりに位置する「神苑ぼたん庭園」です。寒風を避けるために一つひとつ丁寧に編まれた「藁囲い（わらぼっち）」の中で、白、紅、紫と色鮮やかな大輪を咲かせる「冬牡丹（正月牡丹）」の姿は、まさに新春の寿ぎを告げる気品ある芸術品。静けさの中で雪や冷気に耐えて凛と咲く姿は、見る者の心を深く打たれます。
            </p>
            <p>
              小町通りで温かい湯気が立ち上る焼きたてのお団子や鎌倉コロッケを味わい、江ノ電に乗り込んで湘南海岸へ。海沿いのカーブを抜ける車窓には、冬の澄んだ水平線の向こうに雪化粧した富士山の秀麗なシルエットが浮かび上がります。
            </p>
            <p>
              そして夕暮れ、江の島へ渡れば、関東三大イルミネーションとして名高い「湘南の宝石」の幕開けです。江の島シーキャンドル（展望灯台）を中心に島全体がクリスタルビーズと最高峰のイルミネーションに包まれ、頭上から降り注ぐ光のシャンデリアと、足元に広がる相模湾の夜景パノラマが融合。歴史ある古都の厳粛な祈りと、最先端の光のエンターテインメントが織りなす冬のコントラストは、この地ならではの唯一無二の贅沢です。神奈川・首都圏の冬旅では、湖畔に鳥居が映える<Link href="/winter-kanagawa-hakone-jinja-hatsumode-ashinoko-fujisan-stay" className="text-rose-600 hover:underline font-bold">箱根神社・九頭龍神社の初詣</Link>や、厄除けで名高い<Link href="/winter-kanagawa-kawasaki-daishi-hatsumode-kuzumochi-onsen-stay" className="text-rose-600 hover:underline font-bold">川崎大師の初詣</Link>、華やかな夜景が広がる<Link href="/winter-kanagawa-yokohama-minatomirai-illumination-chinatown-stay" className="text-rose-600 hover:underline font-bold">横浜みなとみらいのイルミネーション</Link>と組み合わせた湘南・神奈川周遊も大変おすすめです。
            </p>
          </div>

          {/* 現地攻略インフォボックス */}
          <div className="mt-8 bg-rose-50/70 border border-rose-100 rounded-xl p-5 sm:p-6">
            <h3 className="text-base font-bold text-rose-950 mb-3 flex items-center gap-2">
              <Info className="w-5 h-5 text-rose-600" />
              鎌倉初詣＆湘南の宝石：スマートに楽しむ3つの裏技
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs sm:text-sm text-rose-900">
              <div className="bg-white p-3.5 rounded-lg border border-rose-100">
                <span className="font-bold text-rose-700 block mb-1">1. 初詣は早朝6〜8時が快適の極み</span>
                <p>三が日の日中は入場規制で大混雑しますが、早朝は人影もまばらで清々しく参拝可能。朝日の差し込む境内と神苑ぼたん庭園を独占気分で鑑賞できます。</p>
              </div>
              <div className="bg-white p-3.5 rounded-lg border border-rose-100">
                <span className="font-bold text-rose-700 block mb-1">2. 江ノ電1日乗車券「のりおりくん」を活用</span>
                <p>鎌倉〜長谷〜七里ヶ浜〜江ノ島を自由に巡るなら「のりおりくん」（大人800円）がお得。日没前後の移動は混雑するため余裕を持ったスケジュールを。</p>
              </div>
              <div className="bg-white p-3.5 rounded-lg border border-rose-100">
                <span className="font-bold text-rose-700 block mb-1">3. 海沿いの強い風に防寒対策を</span>
                <p>由比ヶ浜や七里ヶ浜、江の島展望台は強い海風が吹き込みます。マフラーや風を通さないコート、帽子で防風対策を徹底して出かけましょう。</p>
              </div>
            </div>
          </div>
        </section>

        {/* 厳選ホテルセクション */}
        <section className="mb-14">
          <div className="text-center mb-10">
            <span className="text-xs sm:text-sm font-extrabold text-rose-600 tracking-wider uppercase bg-rose-50 px-3.5 py-1.5 rounded-full border border-rose-100">
              Selected 5 Kamakura & Enoshima Accommodations
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-3">
              鎌倉初詣と湘南の宝石を満喫する海辺の厳選ホテル5選
            </h2>
            <p className="text-sm text-slate-600 mt-2 max-w-2xl mx-auto">
              七里ヶ浜の全室オーシャンビューホテルから、若宮大路沿いの洗練モダン邸宅、由比ヶ浜の天然温泉宿、江の島島内の絶景ホテルまで、大人の冬旅に最適な名宿を厳選しました。
            </p>
          </div>

          <div className="space-y-8">
            
            {/* ホテルカード 1 */}
            <article className="bg-white rounded-2xl shadow-sm border border-slate-200/80 overflow-hidden hover:shadow-md transition-shadow duration-300">
              <div className="p-6 sm:p-8">
                <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-rose-100 text-rose-900">
                    <Sparkles className="w-3.5 h-3.5" />
                    七里ヶ浜の高台・全室相模湾オーシャンビュー
                  </span>
                  <div className="flex items-center gap-2">
                    <div className="flex items-center text-amber-500">
                      <Star className="w-4 h-4 fill-current" />
                      <span className="ml-1 text-sm font-bold text-slate-800">4.4</span>
                    </div>
                    <span className="text-xs text-slate-500">（クチコミ 1,822件）</span>
                  </div>
                </div>

                <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mb-3 leading-snug">
                  <a 
                    href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F1679%2F1679.html" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="hover:text-rose-600 transition-colors"
                  >
                    鎌倉プリンスホテル
                  </a>
                </h3>

                <p className="text-sm text-slate-600 mb-6 flex items-start gap-1.5">
                  <MapPin className="w-4 h-4 text-rose-500 shrink-0 mt-0.5" />
                  <span>神奈川県鎌倉市七里ヶ浜東1-2-18（江ノ島電鉄七里ヶ浜駅～徒歩約8分。無料送迎バスあり。または有料バスにて潮騒通り下車徒歩約1分。）</span>
                </p>

                <div className="grid grid-cols-1 md:grid-cols-12 gap-6 mb-6">
                  <div className="md:col-span-5">
                    <div className="relative aspect-[4/3] rounded-xl overflow-hidden bg-slate-100 border border-slate-100">
                      <img 
                        src="https://img.travel.rakuten.co.jp/share/HOTEL/1679/1679.jpg" 
                        alt="鎌倉プリンスホテル 外観・客室イメージ" 
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                        loading="lazy"
                      />
                    </div>
                  </div>

                  <div className="md:col-span-7 flex flex-col justify-between">
                    <div>
                      <h4 className="text-sm font-bold text-slate-800 mb-2 flex items-center gap-1.5">
                        <CheckCircle2 className="w-4 h-4 text-rose-600" />
                        この宿の注目ポイント
                      </h4>
                      <ul className="space-y-1.5 mb-4 text-xs sm:text-sm text-slate-600">
                        <li className="flex items-start gap-2"><span className="text-rose-500 font-bold">•</span><span>全客室から相模湾と江の島、冬の澄んだ青空に映える富士山を一望</span></li>
                        <li className="flex items-start gap-2"><span className="text-rose-500 font-bold">•</span><span>江ノ電「七里ヶ浜駅」徒歩8分！冬の湘南海岸ドライブにも最適な立地</span></li>
                        <li className="flex items-start gap-2"><span className="text-rose-500 font-bold">•</span><span>フレンチ「ル・トリアノン」で味わう相模湾の新鮮魚介と三浦野菜のディナー</span></li>
                      </ul>
                    </div>

                    <div className="p-3.5 bg-slate-50 rounded-xl border border-slate-100">
                      <p className="text-xs text-slate-500 mb-1">参考宿泊料金（目安）</p>
                      <div className="flex items-baseline justify-between">
                        <span className="text-lg sm:text-xl font-extrabold text-blue-600">¥11,236〜</span>
                        <span className="text-xs text-slate-500">2名1室利用時・1名あたり</span>
                      </div>
                    </div>
                  </div>
                </div>

                <p className="text-sm sm:text-base text-slate-700 leading-relaxed mb-6 bg-rose-50/40 p-4 rounded-xl border border-rose-100/60">
                  湘南・七里ヶ浜の小高い丘に佇み、すべての客室の窓から紺碧の相模湾を見晴らす名門リゾートホテル。冬の時期は空気が澄み渡り、夕暮れ時には江の島のシルエットと茜色に染まる富士山のシルエットが織りなす絶景のトワイライトを部屋にいながら独占できます。鎌倉駅へも江ノ電で一本、初詣と湘南の宝石イルミネーションの双方へ快適にアクセス可能。レストランでは相模湾の旬魚や三浦半島の新鮮野菜を贅沢に取り入れたクラシカルなフランス料理を味わえます。
                </p>

                <div className="flex flex-col sm:flex-row gap-3">
                  <a
                    href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F1679%2F1679.html"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-gradient-to-r from-rose-600 to-pink-600 hover:from-rose-700 hover:to-pink-700 text-white font-bold text-sm sm:text-base rounded-xl shadow-sm hover:shadow transition-all text-center"
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
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-rose-100 text-rose-900">
                    <Sparkles className="w-3.5 h-3.5" />
                    鶴岡八幡宮徒歩圏・若宮大路沿いの洗練モダン
                  </span>
                  <div className="flex items-center gap-2">
                    <div className="flex items-center text-amber-500">
                      <Star className="w-4 h-4 fill-current" />
                      <span className="ml-1 text-sm font-bold text-slate-800">4.7</span>
                    </div>
                    <span className="text-xs text-slate-500">（クチコミ 1,635件）</span>
                  </div>
                </div>

                <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mb-3 leading-snug">
                  <a 
                    href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F177689%2F177689.html" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="hover:text-rose-600 transition-colors"
                  >
                    ホテルメトロポリタン鎌倉
                  </a>
                </h3>

                <p className="text-sm text-slate-600 mb-6 flex items-start gap-1.5">
                  <MapPin className="w-4 h-4 text-rose-500 shrink-0 mt-0.5" />
                  <span>神奈川県鎌倉市小町1-8-1（JR鎌倉駅東口より徒歩にて約２分）</span>
                </p>

                <div className="grid grid-cols-1 md:grid-cols-12 gap-6 mb-6">
                  <div className="md:col-span-5">
                    <div className="relative aspect-[4/3] rounded-xl overflow-hidden bg-slate-100 border border-slate-100">
                      <img 
                        src="https://img.travel.rakuten.co.jp/share/HOTEL/177689/177689.jpg" 
                        alt="ホテルメトロポリタン鎌倉 外観・客室イメージ" 
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                        loading="lazy"
                      />
                    </div>
                  </div>

                  <div className="md:col-span-7 flex flex-col justify-between">
                    <div>
                      <h4 className="text-sm font-bold text-slate-800 mb-2 flex items-center gap-1.5">
                        <CheckCircle2 className="w-4 h-4 text-rose-600" />
                        この宿の注目ポイント
                      </h4>
                      <ul className="space-y-1.5 mb-4 text-xs sm:text-sm text-slate-600">
                        <li className="flex items-start gap-2"><span className="text-rose-500 font-bold">•</span><span>鎌倉駅東口徒歩2分・鶴岡八幡宮の参道「若宮大路」沿いの一等ロケーション</span></li>
                        <li className="flex items-start gap-2"><span className="text-rose-500 font-bold">•</span><span>古都鎌倉の自然と歴史に調和する木の温もりあふれるモダンなデザイン客室</span></li>
                        <li className="flex items-start gap-2"><span className="text-rose-500 font-bold">•</span><span>「Café&Meal MUJI」での滋味深い朝食と徒歩での快適な初詣散策</span></li>
                      </ul>
                    </div>

                    <div className="p-3.5 bg-slate-50 rounded-xl border border-slate-100">
                      <p className="text-xs text-slate-500 mb-1">参考宿泊料金（目安）</p>
                      <div className="flex items-baseline justify-between">
                        <span className="text-lg sm:text-xl font-extrabold text-blue-600">¥11,970〜</span>
                        <span className="text-xs text-slate-500">2名1室利用時・1名あたり</span>
                      </div>
                    </div>
                  </div>
                </div>

                <p className="text-sm sm:text-base text-slate-700 leading-relaxed mb-6 bg-rose-50/40 p-4 rounded-xl border border-rose-100/60">
                  鎌倉駅から鶴岡八幡宮へと続くメインストリート「若宮大路」に面し、新春初詣の拠点としてこれ以上ない抜群の利便性を誇るシティホテル。暖簾をくぐると、古都の風情を感じさせる中庭と木の温もりを生かした上質な空間が広がります。元旦の早朝参拝や、夕方の人混みが落ち着いた時間帯の参拝も、ホテルから徒歩数分で気軽に足を運べるのが最大の特権。全室バス・トイレセパレートで、散策の疲れをゆったりと癒やすことができます。
                </p>

                <div className="flex flex-col sm:flex-row gap-3">
                  <a
                    href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F177689%2F177689.html"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-gradient-to-r from-rose-600 to-pink-600 hover:from-rose-700 hover:to-pink-700 text-white font-bold text-sm sm:text-base rounded-xl shadow-sm hover:shadow transition-all text-center"
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
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-rose-100 text-rose-900">
                    <Sparkles className="w-3.5 h-3.5" />
                    由比ガ浜海岸徒歩2分・熱海直送の天然温泉
                  </span>
                  <div className="flex items-center gap-2">
                    <div className="flex items-center text-amber-500">
                      <Star className="w-4 h-4 fill-current" />
                      <span className="ml-1 text-sm font-bold text-slate-800">4.4</span>
                    </div>
                    <span className="text-xs text-slate-500">（クチコミ 458件）</span>
                  </div>
                </div>

                <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mb-3 leading-snug">
                  <a 
                    href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F68515%2F68515.html" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="hover:text-rose-600 transition-colors"
                  >
                    ＫＫＲ鎌倉わかみや（国家公務員共済組合連合会鎌倉保養所）
                  </a>
                </h3>

                <p className="text-sm text-slate-600 mb-6 flex items-start gap-1.5">
                  <MapPin className="w-4 h-4 text-rose-500 shrink-0 mt-0.5" />
                  <span>神奈川県鎌倉市由比ガ浜4-6-13（江ノ島電鉄　由比ヶ浜駅より徒歩５分／ＪＲ　鎌倉駅より車で約５分）</span>
                </p>

                <div className="grid grid-cols-1 md:grid-cols-12 gap-6 mb-6">
                  <div className="md:col-span-5">
                    <div className="relative aspect-[4/3] rounded-xl overflow-hidden bg-slate-100 border border-slate-100">
                      <img 
                        src="https://img.travel.rakuten.co.jp/share/HOTEL/68515/68515.jpg" 
                        alt="ＫＫＲ鎌倉わかみや（国家公務員共済組合連合会鎌倉保養所） 外観・客室イメージ" 
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                        loading="lazy"
                      />
                    </div>
                  </div>

                  <div className="md:col-span-7 flex flex-col justify-between">
                    <div>
                      <h4 className="text-sm font-bold text-slate-800 mb-2 flex items-center gap-1.5">
                        <CheckCircle2 className="w-4 h-4 text-rose-600" />
                        この宿の注目ポイント
                      </h4>
                      <ul className="space-y-1.5 mb-4 text-xs sm:text-sm text-slate-600">
                        <li className="flex items-start gap-2"><span className="text-rose-500 font-bold">•</span><span>鎌倉エリアでは極めて希少な「熱海温泉」から毎日直送される天然温泉大浴場</span></li>
                        <li className="flex items-start gap-2"><span className="text-rose-500 font-bold">•</span><span>由比ガ浜の静かな海辺まで徒歩2分！海風を感じるリゾートステイ</span></li>
                        <li className="flex items-start gap-2"><span className="text-rose-500 font-bold">•</span><span>相模湾の地魚と旬の食材を丁寧に盛り込んだ伝統的な本格和食会席</span></li>
                      </ul>
                    </div>

                    <div className="p-3.5 bg-slate-50 rounded-xl border border-slate-100">
                      <p className="text-xs text-slate-500 mb-1">参考宿泊料金（目安）</p>
                      <div className="flex items-baseline justify-between">
                        <span className="text-lg sm:text-xl font-extrabold text-blue-600">¥10,500〜</span>
                        <span className="text-xs text-slate-500">2名1室利用時・1名あたり</span>
                      </div>
                    </div>
                  </div>
                </div>

                <p className="text-sm sm:text-base text-slate-700 leading-relaxed mb-6 bg-rose-50/40 p-4 rounded-xl border border-rose-100/60">
                  由比ガ浜海岸のすぐそばに位置し、湘南の穏やかな潮騒を感じられる落ち着いた和風リゾート。鎌倉エリアでは珍しい天然温泉の大浴場を備えており、伊豆・熱海温泉から毎日運ばれる良質な塩化物泉の湯が、冷え切った身体の芯まで温もりを届けてくれます。夕食には相模湾で揚がった鮮魚のお造りや季節の炊き合わせなど、職人が手間を惜しまず仕立てた本格和食会席膳が提供され、心安らぐ美食ステイが叶います。
                </p>

                <div className="flex flex-col sm:flex-row gap-3">
                  <a
                    href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F68515%2F68515.html"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-gradient-to-r from-rose-600 to-pink-600 hover:from-rose-700 hover:to-pink-700 text-white font-bold text-sm sm:text-base rounded-xl shadow-sm hover:shadow transition-all text-center"
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
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-rose-100 text-rose-900">
                    <Sparkles className="w-3.5 h-3.5" />
                    江の島島内・相模湾一望の天然温泉アイランドスパ
                  </span>
                  <div className="flex items-center gap-2">
                    <div className="flex items-center text-amber-500">
                      <Star className="w-4 h-4 fill-current" />
                      <span className="ml-1 text-sm font-bold text-slate-800">4.2</span>
                    </div>
                    <span className="text-xs text-slate-500">（クチコミ 184件）</span>
                  </div>
                </div>

                <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mb-3 leading-snug">
                  <a 
                    href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F179415%2F179415.html" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="hover:text-rose-600 transition-colors"
                  >
                    江の島ホテル
                  </a>
                </h3>

                <p className="text-sm text-slate-600 mb-6 flex items-start gap-1.5">
                  <MapPin className="w-4 h-4 text-rose-500 shrink-0 mt-0.5" />
                  <span>神奈川県藤沢市江の島-1-3-8（小田急江ノ島線～片瀬江ノ島駅より徒歩約１０分）</span>
                </p>

                <div className="grid grid-cols-1 md:grid-cols-12 gap-6 mb-6">
                  <div className="md:col-span-5">
                    <div className="relative aspect-[4/3] rounded-xl overflow-hidden bg-slate-100 border border-slate-100">
                      <img 
                        src="https://img.travel.rakuten.co.jp/share/HOTEL/179415/179415.jpg" 
                        alt="江の島ホテル 外観・客室イメージ" 
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                        loading="lazy"
                      />
                    </div>
                  </div>

                  <div className="md:col-span-7 flex flex-col justify-between">
                    <div>
                      <h4 className="text-sm font-bold text-slate-800 mb-2 flex items-center gap-1.5">
                        <CheckCircle2 className="w-4 h-4 text-rose-600" />
                        この宿の注目ポイント
                      </h4>
                      <ul className="space-y-1.5 mb-4 text-xs sm:text-sm text-slate-600">
                        <li className="flex items-start gap-2"><span className="text-rose-500 font-bold">•</span><span>江の島島内に位置し「湘南の宝石」シーキャンドルまで徒歩で直行可能</span></li>
                        <li className="flex items-start gap-2"><span className="text-rose-500 font-bold">•</span><span>天然温泉「江の島アイランドスパ（えのすぱ）」の絶景展望風呂を堪能</span></li>
                        <li className="flex items-start gap-2"><span className="text-rose-500 font-bold">•</span><span>湘南の海と富士山を望むオーシャンビュー客室と島内散策の圧倒的自由度</span></li>
                      </ul>
                    </div>

                    <div className="p-3.5 bg-slate-50 rounded-xl border border-slate-100">
                      <p className="text-xs text-slate-500 mb-1">参考宿泊料金（目安）</p>
                      <div className="flex items-baseline justify-between">
                        <span className="text-lg sm:text-xl font-extrabold text-blue-600">¥11,400〜</span>
                        <span className="text-xs text-slate-500">2名1室利用時・1名あたり</span>
                      </div>
                    </div>
                  </div>
                </div>

                <p className="text-sm sm:text-base text-slate-700 leading-relaxed mb-6 bg-rose-50/40 p-4 rounded-xl border border-rose-100/60">
                  江の島弁天橋を渡った島内に佇み、冬の一大イベント「湘南の宝石」イルミネーションを夜遅くまで存分に満喫できる唯一無二のロケーション。宿泊者は地下1,500mから湧き出る天然温泉施設「江の島アイランドスパ」を利用でき、相模湾の波打ち際を見下ろすインフィニティ温泉露天から、富士山と夕日の雄大なコラボレーションを堪能できます。イルミネーション観賞後は混雑する橋を渡ることなく、そのまま島内で静かな夜を過ごせる贅沢が魅力です。
                </p>

                <div className="flex flex-col sm:flex-row gap-3">
                  <a
                    href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F179415%2F179415.html"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-gradient-to-r from-rose-600 to-pink-600 hover:from-rose-700 hover:to-pink-700 text-white font-bold text-sm sm:text-base rounded-xl shadow-sm hover:shadow transition-all text-center"
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
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-rose-100 text-rose-900">
                    <Sparkles className="w-3.5 h-3.5" />
                    鵠沼海岸・全室スパスイートの大人の隠れ家
                  </span>
                  <div className="flex items-center gap-2">
                    <div className="flex items-center text-amber-500">
                      <Star className="w-4 h-4 fill-current" />
                      <span className="ml-1 text-sm font-bold text-slate-800">4.8</span>
                    </div>
                    <span className="text-xs text-slate-500">（クチコミ 502件）</span>
                  </div>
                </div>

                <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mb-3 leading-snug">
                  <a 
                    href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F147040%2F147040.html" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="hover:text-rose-600 transition-colors"
                  >
                    ＢＲＥＡＴＨ　ＨＯＴＥＬ（ブレスホテル）
                  </a>
                </h3>

                <p className="text-sm text-slate-600 mb-6 flex items-start gap-1.5">
                  <MapPin className="w-4 h-4 text-rose-500 shrink-0 mt-0.5" />
                  <span>神奈川県藤沢市鵠沼海岸1-7-11（鵠沼海岸駅より徒歩15分）</span>
                </p>

                <div className="grid grid-cols-1 md:grid-cols-12 gap-6 mb-6">
                  <div className="md:col-span-5">
                    <div className="relative aspect-[4/3] rounded-xl overflow-hidden bg-slate-100 border border-slate-100">
                      <img 
                        src="https://img.travel.rakuten.co.jp/share/HOTEL/147040/147040.jpg" 
                        alt="ＢＲＥＡＴＨ　ＨＯＴＥＬ（ブレスホテル） 外観・客室イメージ" 
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                        loading="lazy"
                      />
                    </div>
                  </div>

                  <div className="md:col-span-7 flex flex-col justify-between">
                    <div>
                      <h4 className="text-sm font-bold text-slate-800 mb-2 flex items-center gap-1.5">
                        <CheckCircle2 className="w-4 h-4 text-rose-600" />
                        この宿の注目ポイント
                      </h4>
                      <ul className="space-y-1.5 mb-4 text-xs sm:text-sm text-slate-600">
                        <li className="flex items-start gap-2"><span className="text-rose-500 font-bold">•</span><span>全室に大型ジャグジーバス・マイクロバブル・ミストサウナを完備した極上スパ</span></li>
                        <li className="flex items-start gap-2"><span className="text-rose-500 font-bold">•</span><span>湘南海岸の静かな松林に佇み、客室バルコニーから海と江の島を望む特等席</span></li>
                        <li className="flex items-start gap-2"><span className="text-rose-500 font-bold">•</span><span>オーダーメイド感覚のホスピタリティと厳選食材のヘルシー朝食</span></li>
                      </ul>
                    </div>

                    <div className="p-3.5 bg-slate-50 rounded-xl border border-slate-100">
                      <p className="text-xs text-slate-500 mb-1">参考宿泊料金（目安）</p>
                      <div className="flex items-baseline justify-between">
                        <span className="text-lg sm:text-xl font-extrabold text-blue-600">¥12,650〜</span>
                        <span className="text-xs text-slate-500">2名1室利用時・1名あたり</span>
                      </div>
                    </div>
                  </div>
                </div>

                <p className="text-sm sm:text-base text-slate-700 leading-relaxed mb-6 bg-rose-50/40 p-4 rounded-xl border border-rose-100/60">
                  江の島を望む湘南・鵠沼海岸の静寂な松林のそばに佇み、「心呼吸」をコンセプトにした全室スパスイートのデザイナーズホテル。すべての客室に大型ブロアジャグジーバスやミストサウナが完備され、冬の海風に包まれた後の極上バスタイムを心ゆくまで満喫できます。洗練されたアメニティやフリードリンクなど細部にまで贅を尽くしたサービスが光り、大切な人との新春記念旅行や大人のご褒美ステイに最高のひとときを約束します。
                </p>

                <div className="flex flex-col sm:flex-row gap-3">
                  <a
                    href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F147040%2F147040.html"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-gradient-to-r from-rose-600 to-pink-600 hover:from-rose-700 hover:to-pink-700 text-white font-bold text-sm sm:text-base rounded-xl shadow-sm hover:shadow transition-all text-center"
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
            【1泊2日】鶴岡八幡宮の初詣・冬牡丹と湘南の宝石イルミネーションモデルコース
          </h2>

          <div className="space-y-6">
            <div className="border-l-2 border-rose-500 pl-4 sm:pl-6 relative">
              <span className="absolute -left-2 top-0 w-3.5 h-3.5 rounded-full bg-rose-500 ring-4 ring-white" />
              <div className="text-xs font-bold text-rose-600 uppercase tracking-wider mb-1">1日目：午前〜午後</div>
              <h3 className="text-base sm:text-lg font-bold text-slate-900 mb-2">
                JR鎌倉駅到着 ➔ 鶴岡八幡宮で新春初詣 ➔ 神苑ぼたん庭園で冬牡丹観賞 ➔ 小町通り食べ歩き
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                午前中に鎌倉駅へ到着し、若宮大路を歩いて鶴岡八幡宮へ。本宮で新春のご祈祷や初詣を済ませ、源平池の「神苑ぼたん庭園」で藁囲いの中の愛らしい冬牡丹を愛でます。お昼は小町通りの老舗店で熱々のけんちん汁や釜揚げしらす丼、焼きたてのお団子を堪能します。
              </p>
            </div>

            <div className="border-l-2 border-pink-500 pl-4 sm:pl-6 relative">
              <span className="absolute -left-2 top-0 w-3.5 h-3.5 rounded-full bg-pink-500 ring-4 ring-white" />
              <div className="text-xs font-bold text-pink-600 uppercase tracking-wider mb-1">1日目：夕方〜夜</div>
              <h3 className="text-base sm:text-lg font-bold text-slate-900 mb-2">
                江ノ電で江の島へ移動 ➔ シーキャンドル「湘南の宝石」点灯＆夕富士鑑賞 ➔ 海辺ホテルへ
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                江ノ電に揺られながら江ノ島駅へ。日没前に江の島サムエル・コッキング苑へ入り、茜色に染まる海と富士山の絶景トワイライトを鑑賞。17時の点灯とともに「湘南の宝石」の光のトンネルとシーキャンドルの大迫力イルミネーションに包まれます。ホテルへチェックインし、相模湾の冬魚料理や温泉で至福の夜を。
              </p>
            </div>

            <div className="border-l-2 border-indigo-500 pl-4 sm:pl-6 relative">
              <span className="absolute -left-2 top-0 w-3.5 h-3.5 rounded-full bg-indigo-500 ring-4 ring-white" />
              <div className="text-xs font-bold text-indigo-600 uppercase tracking-wider mb-1">2日目：午前〜午後</div>
              <h3 className="text-base sm:text-lg font-bold text-slate-900 mb-2">
                七里ヶ浜の朝カフェ ➔ 長谷寺で冬の境内散策＆十一面観音参拝 ➔ 帰路へ
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                朝、七里ヶ浜のオーシャンビューカフェで波音を聴きながらパンケーキやコーヒーのブレックファスト。江ノ電で長谷へ移動し、花の寺として名高い長谷寺へ。見晴台から由比ヶ浜の海を一望し、十一面観世音菩薩に参拝。お土産に鎌倉銘菓・鳩サブレーを購入し、心地よい余韻とともに帰路につきます。
              </p>
            </div>
          </div>
        </section>

        {/* よくある質問（FAQ） */}
        

        {/* 内部リンク・関連特集セクション */}
        <section className="bg-slate-900 text-white rounded-2xl p-6 sm:p-8 border border-slate-800 shadow-md">
          <h2 className="text-lg sm:text-xl font-bold mb-4 flex items-center gap-2">
            <Heart className="w-5 h-5 text-rose-400" />
            あわせて読みたい！冬の神奈川・関東初詣＆イルミネーション特集
          </h2>
          <p className="text-xs sm:text-sm text-slate-300 mb-6 leading-relaxed">
            神奈川・首都圏には、歴史ある社寺の初詣やみなとみらいの夜景、箱根の温泉など、冬の週末を特別にするデスティネーションが揃っています。
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm">
            <Link 
              href="/winter-kanagawa-hakone-jinja-hatsumode-ashinoko-fujisan-stay"
              className="p-3 bg-slate-800/80 hover:bg-slate-700/80 rounded-xl border border-slate-700 transition-colors flex items-center justify-between"
            >
              <span>箱根神社・九頭龍神社新春初詣＆芦ノ湖雪景色・名湯名宿</span>
              <ChevronRight className="w-4 h-4 text-slate-400 shrink-0" />
            </Link>
            <Link 
              href="/winter-kanagawa-kawasaki-daishi-hatsumode-kuzumochi-onsen-stay"
              className="p-3 bg-slate-800/80 hover:bg-slate-700/80 rounded-xl border border-slate-700 transition-colors flex items-center justify-between"
            >
              <span>川崎大師（平間寺）厄除け初詣＆名物久寿餅・黒湯温泉名宿</span>
              <ChevronRight className="w-4 h-4 text-slate-400 shrink-0" />
            </Link>
            <Link 
              href="/winter-kanagawa-yokohama-minatomirai-illumination-chinatown-stay"
              className="p-3 bg-slate-800/80 hover:bg-slate-700/80 rounded-xl border border-slate-700 transition-colors flex items-center justify-between"
            >
              <span>横浜みなとみらい夜景イルミネーション＆中華街冬グルメ名宿</span>
              <ChevronRight className="w-4 h-4 text-slate-400 shrink-0" />
            </Link>
            <Link 
              href="/furusato-tax-yokohama-minatomirai-nightview-luxury-stay"
              className="p-3 bg-slate-800/80 hover:bg-slate-700/80 rounded-xl border border-slate-700 transition-colors flex items-center justify-between"
            >
              <span>横浜みなとみらい煌めく夜景とラグジュアリーホテルステイ</span>
              <ChevronRight className="w-4 h-4 text-slate-400 shrink-0" />
            </Link>
          </div>
        </section>
      </main>
    </div>
  );
}
