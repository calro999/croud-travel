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
  title: '旭川＆旭山動物園：冬のペンギンの散歩と美瑛青い池ライトアップ！名宿5選',
  description: '冬の北海道・旭川観光の完全攻略ガイド。積雪期限定の旭山動物園「ペンギンの散歩」の実施時間や見学のコツ。楽天トラベルの最新空室状況・限定割引プランを徹底比較！',
  keywords: '旭山動物園, ペンギンの散歩, 旭川観光, 美瑛 青い池 ライトアップ, 白ひげの滝, 旭川ラーメン, 旭川 ホテル 温泉, 冬 北海道 旅行, OMO7旭川, JRイン旭川',
  alternates: {
    canonical: 'https://croud-travel.pages.dev/winter-hokkaido-asahikawa-asahiyama-zoo-penguin-walk-stay',
  },
  openGraph: {
    title: '旭川＆旭山動物園：冬のペンギンの散歩と美瑛青い池ライトアップ！名宿5選',
    description: '冬の北海道・旭川観光の完全攻略ガイド。積雪期限定の旭山動物園「ペンギンの散歩」の実施時間や見学のコツ。楽天トラベルの最新空室状況・限定割引プランを徹底比較！',
    url: 'https://croud-travel.pages.dev/winter-hokkaido-asahikawa-asahiyama-zoo-penguin-walk-stay',
    siteName: 'トラベルマップ - 日本の観光名所＆ホテル厳選ガイド',
    locale: 'ja_JP',
    type: 'article',
    images: [
      {
        url: 'https://img.travel.rakuten.co.jp/share/HOTEL/148897/148897.jpg',
        width: 1200,
        height: 630,
        alt: '冬の旭川・旭山動物園ペンギンの散歩と美瑛青い池ライトアップ特集',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: '旭川＆旭山動物園：冬のペンギンの散歩と美瑛青い池ライトアップ！旭川ラーメン＆天然温泉サウナを満喫する名宿5選',
    description: '冬の北海道・旭川観光の完全攻略ガイド。積雪期限定の旭山動物園「ペンギンの散歩」の実施時間や見学のコツ、氷点下の美瑛「白金青い池・白ひげの滝」幻想ライトアップ、熱々旭川醤油ラーメンの名店、そして冷えた身体を癒やす天然温泉＆サウナ付き厳選ホテル5選。',
    images: ['https://img.travel.rakuten.co.jp/share/HOTEL/148897/148897.jpg'],
  },
};

export default function AsahikawaPenguinWinterPage() {
  const jsonLdArticle = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: '旭川＆旭山動物園：冬のペンギンの散歩と美瑛青い池ライトアップ！旭川ラーメン＆天然温泉サウナを満喫する名宿5選',
    description: '冬の北海道・旭川観光の完全攻略ガイド。積雪期限定の旭山動物園「ペンギンの散歩」の実施時間や見学のコツ、氷点下の美瑛「白金青い池・白ひげの滝」幻想ライトアップ、熱々旭川醤油ラーメンの名店、そして冷えた身体を癒やす天然温泉＆サウナ付き厳選ホテル5選。',
    image: 'https://img.travel.rakuten.co.jp/share/HOTEL/148897/148897.jpg',
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
      '@id': 'https://croud-travel.pages.dev/winter-hokkaido-asahikawa-asahiyama-zoo-penguin-walk-stay',
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
        name: '旭川＆旭山動物園冬特集',
        item: 'https://croud-travel.pages.dev/winter-hokkaido-asahikawa-asahiyama-zoo-penguin-walk-stay',
      },
    ],
  };

  const faqItems = [
    {
      q: '旭山動物園の「ペンギンの散歩」は冬なら毎日見られますか？実施期間と時間帯は？',
      a: '「ペンギンの散歩」は園内の雪が十分に積もってから（例年12月下旬頃）スタートし、積雪がなくなる3月中旬頃まで毎日実施されます。12月下旬〜2月は午前11:00と午後14:30の1日2回、3月に入ると午前11:00の1回のみとなるのが通例です。天候やペンギンの体調、積雪状況によって中止やコース短縮となる場合があるため、当日の公式HPや園内アナウンスの確認が推奨されます。'
    },
    {
      q: 'ペンギンの散歩を見るおすすめの観覧ポイントと待ち時間の注意点は？',
      a: 'ぺんぎん館を出発して園内の雪道を約30〜40分かけて往復します。赤と白の境界ロープ沿いに立ち止まって見学するルールです。出発直後の坂道エリアやすれ違いポイントが特に人気ですが、散歩の後半コース（あざらし館前付近）は比較的混雑が穏やかでおすすめです。開始20分前にはロープ沿いに待機列ができるため、足元にカイロを入れ、防寒ブーツと手袋・耳あてで万全の防寒対策をして待ちましょう。フラッシュ撮影はペンギンの目を傷めるため固く禁止されています。'
    },
    {
      q: '旭川駅から旭山動物園、美瑛「青い池」へのアクセス方法は？冬道レンタカーは危険？',
      a: '旭川駅前バスターミナル（6番のりば）から旭川電気軌道バス［旭山動物園線41・47番］が約30分間隔で運行しており、所要約40分で動物園正門に直着します。美瑛の青い池ライトアップへは、冬期運行される美瑛発着の「BIEI VIEW BUS（美遊バス・ライトアップコース）。」の利用が最も安全です。真冬の旭川・美瑛エリアはブラックアイスバーンや地吹雪が頻発するため、雪道運転に不慣れな方のレンタカー利用は極めて危険です。公共交通機関や観光周遊バスの活用を強くおすすめします。'
    },
    {
      q: '真冬の旭川観光で絶対に外せないご当地グルメは？',
      a: '氷点下の寒さの中で食べる熱々の「旭川醤油ラーメン」は外せません。豚骨と魚介（煮干し・鯵節）のダブルスープにラードの油膜が張られ、極寒でもスープが冷めないのが特徴です（「蜂屋」や「梅光軒」「あさひかわラーメン村」が有名）。また、新鮮な生ラムを七輪で香ばしく焼き上げる「成吉思汗（ジンギスカン）」や、塩ホルモン、若鶏の半身揚げ「新子焼き（しんこやき）」も旭川ならではの絶品ソウルフードです。'
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
    <>
      {/* 構造化データ */}
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

      <div className="min-h-screen bg-slate-50 text-slate-800 antialiased">
        {/* パンくずリスト */}
        <nav className="max-w-6xl mx-auto px-4 sm:px-6 pt-4 pb-2 text-xs text-slate-500 flex items-center gap-1.5 overflow-x-auto">
          <Link href="/" className="hover:text-sky-600 transition">ホーム</Link>
          <span>/</span>
          <Link href="/features" className="hover:text-sky-600 transition">特集一覧</Link>
          <span>/</span>
          <span className="text-slate-800 font-semibold whitespace-nowrap">旭川＆旭山動物園冬特集</span>
        </nav>

        {/* ヒーローセクション */}
        <header className="relative bg-gradient-to-br from-sky-950 via-slate-900 to-cyan-950 text-white py-16 sm:py-24 overflow-hidden">
          <div className="absolute inset-0 opacity-15 bg-[radial-gradient(#38bdf8_1px,transparent_1px)] [background-size:20px_20px]" />
          <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-sky-500/20 border border-sky-400/30 text-sky-200 text-xs sm:text-sm font-semibold mb-4 backdrop-blur-sm">
              <Snowflake className="w-4 h-4 text-sky-300 animate-spin-slow" />
              <span>道北の冬絶景・12月・1月・2月ハイシーズン完全攻略</span>
            </div>
            
            <h1 className="text-2xl sm:text-4xl md:text-5xl font-black tracking-tight leading-tight sm:leading-snug mb-6">「旭川＆旭山動物園」冬のペンギンの散歩と美瑛青い池ライトアップ！旭川ラーメン＆天然温泉サウナを満喫する名宿5選</h1>
            
            <p className="text-base sm:text-lg text-slate-200 max-w-3xl leading-relaxed mb-8">
              白銀の雪原をヨチヨチと行進する愛らしいペンギンたちの姿。氷点下15度以下が創り出す美瑛「白金青い池」の幻想的なライティング。そして極寒に凍てついた身体を芯から蘇らせる、熱々の旭川醤油ラーメンと天然温泉サウナ。冬の道北だからこそ味わえる感動の体験と、厳選された拠点宿の滞在プランを徹底解説します。
            </p>

            <div className="flex flex-wrap items-center gap-4 text-xs sm:text-sm text-slate-300">
              <span className="flex items-center gap-1.5">
                <Calendar className="w-4 h-4 text-sky-400" />
                ベストシーズン：12月下旬〜2月下旬
              </span>
              <span className="flex items-center gap-1.5">
                <MapPin className="w-4 h-4 text-rose-400" />
                北海道 旭川市・美瑛町
              </span>
              <span className="flex items-center gap-1.5">
                <Thermometer className="w-4 h-4 text-amber-400" />
                平均気温：-5℃〜-15℃（完全防寒推奨）
              </span>
            </div>
          </div>
        </header>

        {/* メインコンテンツ */}
        <main className="max-w-6xl mx-auto px-4 sm:px-6 py-12 space-y-16">
          
          {/* 見どころガイドセクション */}
          <section className="bg-white rounded-3xl p-6 sm:p-10 shadow-sm border border-slate-200/80 space-y-8">
            <div className="border-b border-slate-100 pb-6">
              <span className="text-xs font-bold uppercase tracking-wider text-sky-600 block mb-1">HIGHLIGHTS & GUIDE</span>
              <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">
                冬の旭川＆美瑛が魅せる奇跡の銀世界・3大ハイライト
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="space-y-3">
                <div className="w-10 h-10 rounded-2xl bg-sky-100 text-sky-700 flex items-center justify-center font-black text-lg">
                  1
                </div>
                <h3 className="text-lg font-bold text-slate-900">
                  旭山動物園「ペンギンの散歩」
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  運動不足解消を目的に積雪期限定で実施される冬の目玉。キングペンギンたちが雪の感触を確かめるように胸を張って目の前をトコトコ歩く姿は、思わず笑みがこぼれる可愛らしさです。雪の中を腹ばいで滑る「トボガン滑り」が見られることも！
                </p>
              </div>

              <div className="space-y-3">
                <div className="w-10 h-10 rounded-2xl bg-indigo-100 text-indigo-700 flex items-center justify-center font-black text-lg">
                  2
                </div>
                <h3 className="text-lg font-bold text-slate-900">
                  美瑛「白金青い池＆白ひげの滝」ライトアップ
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  冬の青い池は水面が凍結し、純白の雪に覆われます。夜間はコンピュータ制御の様々な光の演出が施され、立ち枯れのカラマツが静寂の闇に浮かび上がる光景は息を呑む幽玄の美。近くの「白ひげの滝」では、青く澄んだ美瑛川（ブルーリバー）と巨大な氷瀑が幻想的に照らし出されます。
                </p>
              </div>

              <div className="space-y-3">
                <div className="w-10 h-10 rounded-2xl bg-amber-100 text-amber-700 flex items-center justify-center font-black text-lg">
                  3
                </div>
                <h3 className="text-lg font-bold text-slate-900">
                  冷えた身体に染み渡る旭川グルメ＆天然温泉
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  極寒の散策後は、表面を覆う厚いラードの油膜で最後まで熱々が続く「旭川醤油ラーメン」でエネルギー補給。夜は駅前の天然温泉ホテルで、雪見露天風呂とサウナで極上のととのい体験を満喫。海鮮勝手丼の贅沢朝食も旅の大きな醍醐味です。
                </p>
              </div>
            </div>

            {/* 防寒＆服装アドバイスBOX */}
            <div className="bg-sky-50/70 border border-sky-200/80 rounded-2xl p-6 sm:p-7 space-y-3">
              <h4 className="text-base font-bold text-sky-950 flex items-center gap-2">
                <ShieldAlert className="w-5 h-5 text-sky-600 shrink-0" />
                現地編集部直伝！冬の旭川・美瑛を快適に楽しむ防寒・装備チェックリスト
              </h4>
              <p className="text-sm text-slate-700 leading-relaxed">
                旭川の冬は日中でも氷点下5℃〜10℃、夜間や朝方は氷点下15℃〜20℃近くまで冷え込みます。屋外での見学時間が長くなるため、以下の装備を必ず用意しましょう。
              </p>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs sm:text-sm text-slate-700">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span><strong>靴：</strong>底に深い溝がある防滑・防水スノーブーツ（靴底スパイクが最適）</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span><strong>アウター：</strong>風を通さないロング丈のダウンコートまたはスキーウェア</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span><strong>インナー：</strong>吸湿発熱インナー＋フリースやウールセーターの重ね着</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span><strong>小物：</strong>耳まで隠れるニット帽、厚手の手袋、ネックウォーマー、貼るカイロ</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span><strong>スマホ対策：</strong>極寒でバッテリーが急激に減るため、モバイルバッテリー必携</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span><strong>移動：</strong>冬道運転はスリップの危険が高いため、路線バスや定期観光バスを推奨</span>
                </li>
              </ul>
            </div>
          </section>

          {/* 厳選ホテルセクション */}
          <section className="space-y-8">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-slate-200/80 pb-6">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-sky-600 block mb-1">STAY & RELAX</span>
                <h2 className="text-2xl sm:text-3xl font-black text-slate-900">
                  旭川＆旭山動物園を満喫するおすすめ厳選名宿5選
                </h2>
              </div>
              <p className="text-xs sm:text-sm text-slate-500 max-w-md">
                楽天トラベルAPIより最新の空室・料金・レビュー情報を反映。駅直結・天然温泉・極上朝食を備えたハイパフォーマンスホテルを厳選。
              </p>
            </div>

            <div className="space-y-6">
              
            {/* ホテルカード 1 */}
            <article className="bg-white rounded-2xl shadow-sm border border-slate-200/80 overflow-hidden hover:shadow-md transition-shadow duration-300">
              <div className="p-6 sm:p-8">
                <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-sky-100 text-sky-900">
                    <Sparkles className="w-3.5 h-3.5" />
                    天然温泉「みなぴりかの湯」＆極上朝食ビュッフェ
                  </span>
                  <div className="flex items-center gap-2">
                    <div className="flex items-center text-amber-500">
                      <Star className="w-4 h-4 fill-current" />
                      <span className="ml-1 text-sm font-bold text-slate-800">4.3</span>
                    </div>
                    <span className="text-xs text-slate-500">（クチコミ 1,520件）</span>
                  </div>
                </div>

                <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mb-3 leading-snug">
                  <a 
                    href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F148897%2F148897.html" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="hover:text-sky-600 transition-colors"
                  >
                    ホテルＷＢＦグランデ旭川
                  </a>
                </h3>

                <p className="text-sm text-slate-600 mb-6 flex items-start gap-1.5">
                  <MapPin className="w-4 h-4 text-rose-500 shrink-0 mt-0.5" />
                  <span>北海道旭川市宮下通10丁目3-3（ＪＲ旭川駅東口より徒歩２分）</span>
                </p>

                <div className="grid grid-cols-1 md:grid-cols-12 gap-6 mb-6">
                  <div className="md:col-span-5">
                    <div className="relative aspect-[4/3] rounded-xl overflow-hidden bg-slate-100 border border-slate-100">
                      <img 
                        src="https://img.travel.rakuten.co.jp/share/HOTEL/148897/148897.jpg" 
                        alt="ホテルＷＢＦグランデ旭川の外観・客室イメージ" 
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                        loading="lazy"
                      />
                    </div>
                  </div>
                  <div className="md:col-span-7 flex flex-col justify-between">
                    <div className="space-y-3">
                      <div className="bg-sky-50/60 p-3.5 rounded-xl border border-sky-100 text-xs sm:text-sm text-slate-700">
                        <p className="font-bold text-sky-950 mb-1 flex items-center gap-1">
                          <CheckCircle2 className="w-4 h-4 text-sky-600" />
                          宿の注目ポイント
                        </p>
                        <ul className="list-disc list-inside space-y-1 text-slate-600">
                          <li>旭川駅東口徒歩2分！岩盤浴や炭酸泉を揃えた天然温泉「みなぴりかの湯」完備</li>
                          <li>いくら・ホタテ・甘エビなど北海道の海の幸が山盛りの豪華朝食ビュッフェ</li>
                          <li>家族連れに嬉しい広々キッズスペース＆ゆったりモダン客室</li>
                        </ul>
                      </div>
                      <p className="text-sm text-slate-700 leading-relaxed">
                        旭川駅東口から歩いてすぐの好立地に位置し、旅の疲れを本格的に癒やせる天然温泉施設「みなぴりかの湯」を併設した人気ホテル。低温サウナや炭酸泉、露天風呂など多彩な浴槽が揃い、極寒の旭山動物園や美瑛散策で芯まで冷えた身体をじっくりと解きほぐせます。朝食ビュッフェでは、プチプチと弾けるいくらや新鮮な魚介を好きなだけのせられる名物勝手丼をはじめ、旭川近郊の旬の味覚を贅沢に味わえます。駅前バスターミナルへも徒歩3分圏内で、旭山動物園行き直行バスの乗車にも極めて便利です。
                      </p>
                    </div>

                    <div className="mt-5 pt-4 border-t border-slate-100 flex flex-wrap items-baseline justify-between gap-3">
                      <div>
                        <span className="text-xs text-slate-500 block">参考宿泊料金（1名あたり）</span>
                        <span className="text-xl sm:text-2xl font-black text-rose-600">¥5,000〜</span>
                      </div>
                      <div className="flex gap-2">
                        <a 
                          href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F148897%2F148897.html" 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="inline-flex items-center justify-center px-5 py-2.5 rounded-xl bg-sky-600 hover:bg-sky-700 text-white font-bold text-sm shadow-sm transition-all shadow-sky-600/20"
                        >
                          空室・宿泊プランを確認
                          <ChevronRight className="w-4 h-4 ml-1" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </article>


            {/* ホテルカード 2 */}
            <article className="bg-white rounded-2xl shadow-sm border border-slate-200/80 overflow-hidden hover:shadow-md transition-shadow duration-300">
              <div className="p-6 sm:p-8">
                <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-sky-100 text-sky-900">
                    <Sparkles className="w-3.5 h-3.5" />
                    JR旭川駅＆イオンモール直結の圧倒的快適アクセス
                  </span>
                  <div className="flex items-center gap-2">
                    <div className="flex items-center text-amber-500">
                      <Star className="w-4 h-4 fill-current" />
                      <span className="ml-1 text-sm font-bold text-slate-800">4.4</span>
                    </div>
                    <span className="text-xs text-slate-500">（クチコミ 1,907件）</span>
                  </div>
                </div>

                <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mb-3 leading-snug">
                  <a 
                    href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F147739%2F147739.html" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="hover:text-sky-600 transition-colors"
                  >
                    ＪＲイン旭川
                  </a>
                </h3>

                <p className="text-sm text-slate-600 mb-6 flex items-start gap-1.5">
                  <MapPin className="w-4 h-4 text-rose-500 shrink-0 mt-0.5" />
                  <span>北海道旭川市宮下通7丁目2番5号（■JR旭川駅直結■　旭川空港、旭山動物園行きバス停はホテルの目の前　繁華街も徒歩圏内です♪）</span>
                </p>

                <div className="grid grid-cols-1 md:grid-cols-12 gap-6 mb-6">
                  <div className="md:col-span-5">
                    <div className="relative aspect-[4/3] rounded-xl overflow-hidden bg-slate-100 border border-slate-100">
                      <img 
                        src="https://img.travel.rakuten.co.jp/share/HOTEL/147739/147739.jpg" 
                        alt="ＪＲイン旭川の外観・客室イメージ" 
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                        loading="lazy"
                      />
                    </div>
                  </div>
                  <div className="md:col-span-7 flex flex-col justify-between">
                    <div className="space-y-3">
                      <div className="bg-sky-50/60 p-3.5 rounded-xl border border-sky-100 text-xs sm:text-sm text-slate-700">
                        <p className="font-bold text-sky-950 mb-1 flex items-center gap-1">
                          <CheckCircle2 className="w-4 h-4 text-sky-600" />
                          宿の注目ポイント
                        </p>
                        <ul className="list-disc list-inside space-y-1 text-slate-600">
                          <li>JR旭川駅直結！外に出ることなくチェックインできる真冬の最強ロケーション</li>
                          <li>イオンモール直結で防寒具の調達やお土産選び、道産スイーツの買い出しも万全</li>
                          <li>シモンズ社製高級ベッドと宿泊者専用ラウンジ・大浴場で極上のくつろぎ</li>
                        </ul>
                      </div>
                      <p className="text-sm text-slate-700 leading-relaxed">
                        JR旭川駅の改札から一度も雪道や氷点下の屋外に出ることなくフロントへ直結する、冬の北海道旅行において圧倒的な安心感を誇るハイクオリティホテル。巨大ショッピングモール「イオンモール旭川駅前」とも直結しており、急なカイロや滑り止めスパイクの買い足し、北海道限定のお土産選びにも困りません。館内には宿泊者専用の広々とした大浴場と半露天風呂、選べる枕コーナーを完備。全室にシモンズ社製特注マットレスが配され、翌日の観光に向けて最上級の快眠を約束してくれます。
                      </p>
                    </div>

                    <div className="mt-5 pt-4 border-t border-slate-100 flex flex-wrap items-baseline justify-between gap-3">
                      <div>
                        <span className="text-xs text-slate-500 block">参考宿泊料金（1名あたり）</span>
                        <span className="text-xl sm:text-2xl font-black text-rose-600">¥5,350〜</span>
                      </div>
                      <div className="flex gap-2">
                        <a 
                          href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F147739%2F147739.html" 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="inline-flex items-center justify-center px-5 py-2.5 rounded-xl bg-sky-600 hover:bg-sky-700 text-white font-bold text-sm shadow-sm transition-all shadow-sky-600/20"
                        >
                          空室・宿泊プランを確認
                          <ChevronRight className="w-4 h-4 ml-1" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </article>


            {/* ホテルカード 3 */}
            <article className="bg-white rounded-2xl shadow-sm border border-slate-200/80 overflow-hidden hover:shadow-md transition-shadow duration-300">
              <div className="p-6 sm:p-8">
                <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-sky-100 text-sky-900">
                    <Sparkles className="w-3.5 h-3.5" />
                    最上階展望レストラン＆本格スパサウナ「みなも」
                  </span>
                  <div className="flex items-center gap-2">
                    <div className="flex items-center text-amber-500">
                      <Star className="w-4 h-4 fill-current" />
                      <span className="ml-1 text-sm font-bold text-slate-800">4.3</span>
                    </div>
                    <span className="text-xs text-slate-500">（クチコミ 3,046件）</span>
                  </div>
                </div>

                <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mb-3 leading-snug">
                  <a 
                    href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F224%2F224.html" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="hover:text-sky-600 transition-colors"
                  >
                    アートホテル旭川
                  </a>
                </h3>

                <p className="text-sm text-slate-600 mb-6 flex items-start gap-1.5">
                  <MapPin className="w-4 h-4 text-rose-500 shrink-0 mt-0.5" />
                  <span>北海道旭川市7条通6丁目29番地2（旭川駅西側北口より車で5分。旭川鷹栖ＩＣより車で15分。旭川空港よりバスで40分（7条昭和通停留所 ホテル前））</span>
                </p>

                <div className="grid grid-cols-1 md:grid-cols-12 gap-6 mb-6">
                  <div className="md:col-span-5">
                    <div className="relative aspect-[4/3] rounded-xl overflow-hidden bg-slate-100 border border-slate-100">
                      <img 
                        src="https://img.travel.rakuten.co.jp/share/HOTEL/224/224.jpg" 
                        alt="アートホテル旭川の外観・客室イメージ" 
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                        loading="lazy"
                      />
                    </div>
                  </div>
                  <div className="md:col-span-7 flex flex-col justify-between">
                    <div className="space-y-3">
                      <div className="bg-sky-50/60 p-3.5 rounded-xl border border-sky-100 text-xs sm:text-sm text-slate-700">
                        <p className="font-bold text-sky-950 mb-1 flex items-center gap-1">
                          <CheckCircle2 className="w-4 h-4 text-sky-600" />
                          宿の注目ポイント
                        </p>
                        <ul className="list-disc list-inside space-y-1 text-slate-600">
                          <li>大雪山連峰と旭川市街を一望！最上階展望ビュッフェダイニング「嵐山」</li>
                          <li>本格ドライサウナ・スチームサウナと冷水風呂を備えた充実の温浴スパ</li>
                          <li>旭川中心街の昭和通りに面し、3・6街の美食居酒屋や旭川ラーメンの名店が徒歩圏</li>
                        </ul>
                      </div>
                      <p className="text-sm text-slate-700 leading-relaxed">
                        旭川の街並みと雄大な大雪山連峰を望む高層シティホテル。ホテル自慢のスパ「みなも」には、本格的な高温ドライサウナやハーブスチームサウナ、ジェットバスが揃い、サウナーからも絶大な評価を集めています。最上階にあるレストランでの朝食ビュッフェは、シェフが目の前で焼き上げるオムレツや焼き立てクロワッサン、北海道産牛乳の飲み比べなど洗練された味わいが魅力。旭川屈指の歓楽街「さんろく街」まで徒歩数分で、夜は老舗の旭川成吉思汗や地酒バー巡りを存分に堪能できます。
                      </p>
                    </div>

                    <div className="mt-5 pt-4 border-t border-slate-100 flex flex-wrap items-baseline justify-between gap-3">
                      <div>
                        <span className="text-xs text-slate-500 block">参考宿泊料金（1名あたり）</span>
                        <span className="text-xl sm:text-2xl font-black text-rose-600">¥2,840〜</span>
                      </div>
                      <div className="flex gap-2">
                        <a 
                          href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F224%2F224.html" 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="inline-flex items-center justify-center px-5 py-2.5 rounded-xl bg-sky-600 hover:bg-sky-700 text-white font-bold text-sm shadow-sm transition-all shadow-sky-600/20"
                        >
                          空室・宿泊プランを確認
                          <ChevronRight className="w-4 h-4 ml-1" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </article>


            {/* ホテルカード 4 */}
            <article className="bg-white rounded-2xl shadow-sm border border-slate-200/80 overflow-hidden hover:shadow-md transition-shadow duration-300">
              <div className="p-6 sm:p-8">
                <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-sky-100 text-sky-900">
                    <Sparkles className="w-3.5 h-3.5" />
                    クチコミ朝食4.4獲得・特製旭川しょうゆプリン
                  </span>
                  <div className="flex items-center gap-2">
                    <div className="flex items-center text-amber-500">
                      <Star className="w-4 h-4 fill-current" />
                      <span className="ml-1 text-sm font-bold text-slate-800">4.0</span>
                    </div>
                    <span className="text-xs text-slate-500">（クチコミ 1,718件）</span>
                  </div>
                </div>

                <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mb-3 leading-snug">
                  <a 
                    href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F4652%2F4652.html" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="hover:text-sky-600 transition-colors"
                  >
                    ホテルクレッセント旭川
                  </a>
                </h3>

                <p className="text-sm text-slate-600 mb-6 flex items-start gap-1.5">
                  <MapPin className="w-4 h-4 text-rose-500 shrink-0 mt-0.5" />
                  <span>北海道旭川市５条８丁目緑橋通（ＪＲ函館本線旭川駅より徒歩約１２分。道央道旭川鷹栖ＩＣから車で１５分。旭川空港からのバス停留所も徒歩２分にございます。）</span>
                </p>

                <div className="grid grid-cols-1 md:grid-cols-12 gap-6 mb-6">
                  <div className="md:col-span-5">
                    <div className="relative aspect-[4/3] rounded-xl overflow-hidden bg-slate-100 border border-slate-100">
                      <img 
                        src="https://img.travel.rakuten.co.jp/share/HOTEL/4652/4652.jpg" 
                        alt="ホテルクレッセント旭川の外観・客室イメージ" 
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                        loading="lazy"
                      />
                    </div>
                  </div>
                  <div className="md:col-span-7 flex flex-col justify-between">
                    <div className="space-y-3">
                      <div className="bg-sky-50/60 p-3.5 rounded-xl border border-sky-100 text-xs sm:text-sm text-slate-700">
                        <p className="font-bold text-sky-950 mb-1 flex items-center gap-1">
                          <CheckCircle2 className="w-4 h-4 text-sky-600" />
                          宿の注目ポイント
                        </p>
                        <ul className="list-disc list-inside space-y-1 text-slate-600">
                          <li>楽天トラベル朝食部門で高評価連発！手作り郷土料理と名物プリンの朝食</li>
                          <li>緑橋通り沿いの落ち着いたロケーションで、出張・観光ともに抜群の使い勝手</li>
                          <li>広々とした客室設計と細やかなおもてなしでリピーター多数</li>
                        </ul>
                      </div>
                      <p className="text-sm text-slate-700 leading-relaxed">
                        旭川市街の中心を南北に貫く緑橋通りに面し、長年旅行者に親しまれている温もりあるシティホテル。特に名高いのが楽天トラベルでも朝食評価4.4を誇る朝食ビュッフェで、地元養鶏場の新鮮卵を使った出来立て料理や、香ばしいカラメルと濃厚なコクがたまらない自家製しょうゆプリンは必食の逸品です。ツインルームや和洋室などゆとりのある客室構成で、スキー板や厚手のスノーウェアなどの荷物が多くなりがちな冬旅でもストレスなくゆったり過ごせます。
                      </p>
                    </div>

                    <div className="mt-5 pt-4 border-t border-slate-100 flex flex-wrap items-baseline justify-between gap-3">
                      <div>
                        <span className="text-xs text-slate-500 block">参考宿泊料金（1名あたり）</span>
                        <span className="text-xl sm:text-2xl font-black text-rose-600">¥3,100〜</span>
                      </div>
                      <div className="flex gap-2">
                        <a 
                          href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F4652%2F4652.html" 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="inline-flex items-center justify-center px-5 py-2.5 rounded-xl bg-sky-600 hover:bg-sky-700 text-white font-bold text-sm shadow-sm transition-all shadow-sky-600/20"
                        >
                          空室・宿泊プランを確認
                          <ChevronRight className="w-4 h-4 ml-1" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </article>


            {/* ホテルカード 5 */}
            <article className="bg-white rounded-2xl shadow-sm border border-slate-200/80 overflow-hidden hover:shadow-md transition-shadow duration-300">
              <div className="p-6 sm:p-8">
                <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-sky-100 text-sky-900">
                    <Sparkles className="w-3.5 h-3.5" />
                    駅前唯一の天然温泉露天風呂「神楽の湯」＆名物海鮮丼
                  </span>
                  <div className="flex items-center gap-2">
                    <div className="flex items-center text-amber-500">
                      <Star className="w-4 h-4 fill-current" />
                      <span className="ml-1 text-sm font-bold text-slate-800">4.2</span>
                    </div>
                    <span className="text-xs text-slate-500">（クチコミ 5,323件）</span>
                  </div>
                </div>

                <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mb-3 leading-snug">
                  <a 
                    href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F50750%2F50750.html" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="hover:text-sky-600 transition-colors"
                  >
                    天然温泉プレミアホテル―ＣＡＢＩＮ―旭川
                  </a>
                </h3>

                <p className="text-sm text-slate-600 mb-6 flex items-start gap-1.5">
                  <MapPin className="w-4 h-4 text-rose-500 shrink-0 mt-0.5" />
                  <span>北海道旭川市1条通7丁目（ＪＲ旭川駅『北口(西側)』より徒歩３分）</span>
                </p>

                <div className="grid grid-cols-1 md:grid-cols-12 gap-6 mb-6">
                  <div className="md:col-span-5">
                    <div className="relative aspect-[4/3] rounded-xl overflow-hidden bg-slate-100 border border-slate-100">
                      <img 
                        src="https://img.travel.rakuten.co.jp/share/HOTEL/50750/50750.jpg" 
                        alt="天然温泉プレミアホテル―ＣＡＢＩＮ―旭川の外観・客室イメージ" 
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                        loading="lazy"
                      />
                    </div>
                  </div>
                  <div className="md:col-span-7 flex flex-col justify-between">
                    <div className="space-y-3">
                      <div className="bg-sky-50/60 p-3.5 rounded-xl border border-sky-100 text-xs sm:text-sm text-slate-700">
                        <p className="font-bold text-sky-950 mb-1 flex items-center gap-1">
                          <CheckCircle2 className="w-4 h-4 text-sky-600" />
                          宿の注目ポイント
                        </p>
                        <ul className="list-disc list-inside space-y-1 text-slate-600">
                          <li>地下から湧き出る自家源泉の天然温泉！雪見露天風呂と高温ととのいサウナ</li>
                          <li>朝食バイキングで毎日提供されるいくら・サーモン・帆立の盛り放題丼</li>
                          <li>旭川駅前広場から徒歩3分、全室シモンズベッド＆加湿空気清浄機完備</li>
                        </ul>
                      </div>
                      <p className="text-sm text-slate-700 leading-relaxed">
                        旭川駅前の目抜き通り沿いに位置し、本格的な天然温泉大浴場「神楽の湯」を備えたビジネス＆観光の特等席ホテル。鉄分やミネラルを含んだ茶褐色の天然温泉は保温効果が極めて高く、湯上がり後もポカポカ感が長く持続します。雪が舞い散る露天風呂での外気浴は、北海道ならではの爽快な冬のととのい体験。朝食バイキングでは、ツヤツヤの北海道米「ゆめぴりか」に大粒いくらや甘エビ、タコを豪快に盛り付けるオリジナル海鮮丼が大人気で、朝から北海道の豊穣な幸を満喫できます。
                      </p>
                    </div>

                    <div className="mt-5 pt-4 border-t border-slate-100 flex flex-wrap items-baseline justify-between gap-3">
                      <div>
                        <span className="text-xs text-slate-500 block">参考宿泊料金（1名あたり）</span>
                        <span className="text-xl sm:text-2xl font-black text-rose-600">¥2,592〜</span>
                      </div>
                      <div className="flex gap-2">
                        <a 
                          href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F50750%2F50750.html" 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="inline-flex items-center justify-center px-5 py-2.5 rounded-xl bg-sky-600 hover:bg-sky-700 text-white font-bold text-sm shadow-sm transition-all shadow-sky-600/20"
                        >
                          空室・宿泊プランを確認
                          <ChevronRight className="w-4 h-4 ml-1" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </article>

            </div>
          </section>

          {/* 1泊2日モデルコース */}
          <section className="bg-white rounded-3xl p-6 sm:p-10 shadow-sm border border-slate-200/80 space-y-6">
            <div className="border-b border-slate-100 pb-4">
              <span className="text-xs font-bold uppercase tracking-wider text-sky-600 block mb-1">MODEL ITINERARY</span>
              <h2 className="text-2xl font-bold text-slate-900">
                【1泊2日】旭山動物園ペンギンの散歩＆美瑛青い池ライトアップ満喫モデルコース
              </h2>
            </div>

            <div className="relative border-l-2 border-sky-200 ml-4 pl-6 space-y-8 my-6">
              <div className="relative">
                <span className="absolute -left-[31px] top-0.5 w-4 h-4 rounded-full bg-sky-600 border-4 border-white shadow-sm" />
                <span className="text-xs font-bold text-sky-600 bg-sky-50 px-2 py-0.5 rounded">1日目 午前</span>
                <h3 className="text-base font-bold text-slate-900 mt-1">旭川空港またはJR旭川駅到着 → 旭川ラーメンで昼食</h3>
                <p className="text-sm text-slate-600 mt-1">
                  旭川駅前のホテルに荷物を預けたら、市内の老舗ラーメン店（「梅光軒」や「蜂屋」）で温かい旭川醤油ラーメンを堪能。ラードの膜で熱々が閉じ込められた深いコクに感動。
                </p>
              </div>

              <div className="relative">
                <span className="absolute -left-[31px] top-0.5 w-4 h-4 rounded-full bg-sky-600 border-4 border-white shadow-sm" />
                <span className="text-xs font-bold text-sky-600 bg-sky-50 px-2 py-0.5 rounded">1日目 午後</span>
                <h3 className="text-base font-bold text-slate-900 mt-1">旭川電気軌道バスで旭山動物園へ → 「ペンギンの散歩（14:30回）」を見学</h3>
                <p className="text-sm text-slate-600 mt-1">
                  旭川駅から直行バスで約40分。午後の「ペンギンの散歩」を見学。ホッキョクグマのダイナミックな水中ダイブやアザラシの円柱水槽、雪の中のシンリンオオカミなど、冬ならではの活発な動物たちの行動展示を満喫。
                </p>
              </div>

              <div className="relative">
                <span className="absolute -left-[31px] top-0.5 w-4 h-4 rounded-full bg-indigo-600 border-4 border-white shadow-sm" />
                <span className="text-xs font-bold text-indigo-600 bg-indigo-50 px-2 py-0.5 rounded">1日目 夕方〜夜</span>
                <h3 className="text-base font-bold text-slate-900 mt-1">美瑛へ移動 → 「白金青い池＆白ひげの滝」幻想ライトアップ鑑賞</h3>
                <p className="text-sm text-slate-600 mt-1">
                  旭川駅発の観光周遊バスや美瑛駅からの周遊バスを利用して、雪原に浮かぶライトアップされた青い池と白ひげの滝へ。凍てつく空気の中に浮かび上がるコバルトブルーと純白の氷瀑に圧倒。
                </p>
              </div>

              <div className="relative">
                <span className="absolute -left-[31px] top-0.5 w-4 h-4 rounded-full bg-amber-600 border-4 border-white shadow-sm" />
                <span className="text-xs font-bold text-amber-600 bg-amber-50 px-2 py-0.5 rounded">1日目 夜</span>
                <h3 className="text-base font-bold text-slate-900 mt-1">旭川市街「3・6街」で成吉思汗ディナー → ホテルの天然温泉＆サウナ</h3>
                <p className="text-sm text-slate-600 mt-1">
                  新鮮な生ラムを炭火七輪で香ばしく焼き上げる名店（「大黒屋」など）で夕食。ホテルに戻り、天然温泉とサウナで極限まで冷えた手足をポカポカに温めて快眠。
                </p>
              </div>

              <div className="relative">
                <span className="absolute -left-[31px] top-0.5 w-4 h-4 rounded-full bg-sky-600 border-4 border-white shadow-sm" />
                <span className="text-xs font-bold text-sky-600 bg-sky-50 px-2 py-0.5 rounded">2日目 朝〜午前</span>
                <h3 className="text-base font-bold text-slate-900 mt-1">名物いくら海鮮丼朝食 → 旭川家具・クラフトショップ巡りやお土産購入</h3>
                <p className="text-sm text-slate-600 mt-1">
                  ホテルの名物朝食ビュッフェで海鮮丼を満喫。チェックアウト後は駅直結のイオンモールや「道の駅 あさひかわ」、旭川デザインセンター等で木工クラフトや銘菓「き花の杜」などをお買い物。
                </p>
              </div>
            </div>
          </section>

          {/* よくある質問 FAQ */}
          <section className="bg-white rounded-3xl p-6 sm:p-10 shadow-sm border border-slate-200/80 space-y-6">
            <div className="border-b border-slate-100 pb-4">
              <span className="text-xs font-bold uppercase tracking-wider text-sky-600 block mb-1">FAQ</span>
              <h2 className="text-2xl font-bold text-slate-900">
                冬の旭川＆旭山動物園観光 よくある質問
              </h2>
            </div>

            <div className="space-y-4">
              {faqItems.map((item, idx) => (
                <div key={idx} className="bg-slate-50 rounded-2xl p-5 border border-slate-100">
                  <h3 className="font-bold text-slate-900 flex items-start gap-2 text-base">
                    <span className="text-sky-600 font-black shrink-0">Q.</span>
                    <span>{item.q}</span>
                  </h3>
                  <p className="mt-2 text-sm text-slate-600 leading-relaxed pl-6">
                    {item.a}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* 内部リンク・関連特集セクション */}
          <section className="bg-gradient-to-r from-sky-900 via-slate-900 to-indigo-950 rounded-3xl p-8 sm:p-10 text-white space-y-6 shadow-md">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-sky-300 block mb-1">RELATED WINTER FEATURES</span>
              <h2 className="text-2xl font-black">
                あわせて読みたい！冬の厳選旅行特集
              </h2>
              <p className="text-sm text-slate-300 mt-1">
                北海道の他の冬絶景や、全国の冬の温泉・雪景色特集をチェックして次の旅先を見つけましょう。
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              <Link 
                href="/winter-hokkaido-monbetsu-drift-ice-garinko-driftice-gourmet-stay"
                className="bg-white/10 hover:bg-white/20 p-4 rounded-2xl border border-white/15 transition group flex flex-col justify-between"
              >
                <div>
                  <span className="text-[10px] font-bold bg-sky-400/30 text-sky-200 px-2 py-0.5 rounded-full inline-block mb-2">オホーツク流氷</span>
                  <h3 className="font-bold text-sm text-white group-hover:text-sky-200 transition">紋別・ガリンコ号＆毛ガニ名宿</h3>
                  <p className="text-xs text-slate-300 mt-1 line-clamp-2">氷をドリルで砕く迫力の流氷砕氷船ガリンコ号とオホーツクタワー、冬毛ガニ尽くし。</p>
                </div>
                <span className="text-xs text-sky-300 font-bold mt-3 flex items-center gap-1">詳しく見る →</span>
              </Link>

              <Link 
                href="/winter-nagano-shiga-kogen-snow-monkey-jigokudani-onsen-stay"
                className="bg-white/10 hover:bg-white/20 p-4 rounded-2xl border border-white/15 transition group flex flex-col justify-between"
              >
                <div>
                  <span className="text-[10px] font-bold bg-amber-400/30 text-amber-200 px-2 py-0.5 rounded-full inline-block mb-2">温泉に入る雪猿</span>
                  <h3 className="font-bold text-sm text-white group-hover:text-amber-200 transition">志賀高原＆地獄谷スノーモンキー</h3>
                  <p className="text-xs text-slate-300 mt-1 line-clamp-2">世界が息を呑む温泉サルと標高2000mパウダースノー、渋温泉九湯めぐり老舗名宿。</p>
                </div>
                <span className="text-xs text-amber-300 font-bold mt-3 flex items-center gap-1">詳しく見る →</span>
              </Link>

              <Link 
                href="/winter-tottori-sand-dunes-snow-matsubagani-hakuto-shrine-stay"
                className="bg-white/10 hover:bg-white/20 p-4 rounded-2xl border border-white/15 transition group flex flex-col justify-between"
              >
                <div>
                  <span className="text-[10px] font-bold bg-rose-400/30 text-rose-200 px-2 py-0.5 rounded-full inline-block mb-2">山陰冬の奇跡</span>
                  <h3 className="font-bold text-sm text-white group-hover:text-rose-200 transition">鳥取砂丘・雪砂丘＆本場松葉ガニ</h3>
                  <p className="text-xs text-slate-300 mt-1 line-clamp-2">日本海の寒風が織りなす白銀の雪砂丘と風紋、解禁直後の本場松葉ガニフルコース。</p>
                </div>
                <span className="text-xs text-rose-300 font-bold mt-3 flex items-center gap-1">詳しく見る →</span>
              </Link>

              <Link 
                href="/winter-shizuoka-gotemba-tokinosumika-illumination-fuji-onsen-stay"
                className="bg-white/10 hover:bg-white/20 p-4 rounded-2xl border border-white/15 transition group flex flex-col justify-between"
              >
                <div>
                  <span className="text-[10px] font-bold bg-emerald-400/30 text-emerald-200 px-2 py-0.5 rounded-full inline-block mb-2">光の祭典＆富士山</span>
                  <h3 className="font-bold text-sm text-white group-hover:text-emerald-200 transition">御殿場・時之栖イルミネーション</h3>
                  <p className="text-xs text-slate-300 mt-1 line-clamp-2">550万球が輝くひかりのすみかと噴水レーザーショー、御殿場高原ビール＆天然温泉。</p>
                </div>
                <span className="text-xs text-emerald-300 font-bold mt-3 flex items-center gap-1">詳しく見る →</span>
              </Link>
            </div>

            <div className="pt-4 border-t border-white/10 text-center">
              <Link 
                href="/features"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white text-slate-900 font-bold text-sm hover:bg-slate-100 transition shadow-sm"
              >
                全国の特集・まとめ記事一覧を見る
                <ChevronRight className="w-4 h-4" />
              </Link>
            </div>
          </section>

        </main>
      </div>
    </>
  );
}
