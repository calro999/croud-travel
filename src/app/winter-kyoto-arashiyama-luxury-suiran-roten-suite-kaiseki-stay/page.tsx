import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Metadata } from 'next';
import { 
  Calendar, MapPin, Sparkles, CheckCircle2, ChevronRight, 
  Clock, ArrowRight, Utensils, Star, Compass, Train, ShieldCheck 
} from 'lucide-react';

export const metadata: Metadata = {
  title: '【保津川渓流沿いの歴史美と嵐山温泉露天付きプライベートスイート】2026-2027年11-12月初冬の京都・嵐山！世界最高峰「翠嵐 ラグジュアリーコレクションホテル 京都」＆老舗料亭旅館・初冬の渡月橋と極上京懐石名宿5選 | クラウドトラベル',
  description: '紅葉の喧騒が落ち着き、凛とした初冬の静寂が包み込む京都・嵐山。保津川の清流沿いに佇む世界的ラグジュアリーホテル「翠嵐 ラグジュアリーコレクションホテル 京都」をはじめ、嵐山温泉の肌触り滑らかな湯を客室露天風呂で愉しむ最高峰の宿。渡月橋や竹林の小径の静かな朝散策と、伝統の技が光る繊細な京懐石・丹波牛会席。日本の美意識の粋を極めた大人の記念日ステイ厳選5選。',
  keywords: '京都府, 渡月橋, 高級旅館, 客室露天風呂, 記念日旅行, 11月旅行, 12月旅行, 楽天トラベル, ふるさと納税',
  openGraph: {
    title: '【保津川渓流沿いの歴史美と嵐山温泉露天付きプライベートスイート】2026-2027年11-12月初冬の京都・嵐山！世界最高峰「翠嵐 ラグジュアリーコレクションホテル 京都」＆老舗料亭旅館・初冬の渡月橋と極上京懐石名宿5選',
    description: '紅葉の喧騒が落ち着き、凛とした初冬の静寂が包み込む京都・嵐山。保津川の清流沿いに佇む世界的ラグジュアリーホテル「翠嵐 ラグジュアリーコレクションホテル 京都」をはじめ、嵐山温泉の肌触り滑らかな湯を客室露天風呂で愉しむ最高峰の宿。渡月橋や竹林の小径の静かな朝散策と、伝統の技が光る繊細な京懐石・丹波牛会席。日本の美意識の粋を極めた大人の記念日ステイ厳選5選。',
    url: 'https://croud-travel.pages.dev/winter-kyoto-arashiyama-luxury-suiran-roten-suite-kaiseki-stay',
    type: 'article',
    siteName: 'クラウドトラベル',
  },
  alternates: {
    canonical: 'https://croud-travel.pages.dev/winter-kyoto-arashiyama-luxury-suiran-roten-suite-kaiseki-stay',
  },
};

export default function UltraLuxuryWinterFeaturePage() {

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "【保津川渓流沿いの歴史美と嵐山温泉露天付きプライベートスイート】2026-2027年11-12月初冬の京都・嵐山！世界最高峰「翠嵐 ラグジュアリーコレクションホテル 京都」＆老舗料亭旅館・初冬の渡月橋と極上京懐石名宿5選 | クラウドトラベル",
    "description": "紅葉の喧騒が落ち着き、凛とした初冬の静寂が包み込む京都・嵐山。保津川の清流沿いに佇む世界的ラグジュアリーホテル「翠嵐 ラグジュアリーコレクションホテル 京都」をはじめ、嵐山温泉の肌触り滑らかな湯を客室露天風呂で愉しむ最高峰の宿。渡月橋や竹林の小径の静かな朝散策と、伝統の技が光る繊細な京懐石・丹波牛会席。日本の美意識の粋を極めた大人の記念日ステイ厳選5選。",
    "image": ["https://croud-travel.pages.dev/winter-kyoto-arashiyama-luxury-suiran-roten-suite-kaiseki-stay"],
    "author": {
      "@type": "Organization",
      "name": "日本全国・旅宿クラウド",
      "url": "https://croud-travel.pages.dev/"
    },
    "publisher": {
      "@type": "Organization",
      "name": "日本全国・旅宿クラウド",
      "logo": {
        "@type": "ImageObject",
        "url": "https://croud-travel.pages.dev/favicon.ico"
      }
    },
    "datePublished": "2026-09-01T09:00:00+09:00",
    "dateModified": "2026-10-12T11:00:00+09:00",
    "mainEntityOfPage": "https://croud-travel.pages.dev/winter-kyoto-arashiyama-luxury-suiran-roten-suite-kaiseki-stay/"
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800">
      {/* 構造化データ: FAQ & Breadcrumb */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([
            {
              "@context": "https://schema.org",
              "@type": "BreadcrumbList",
              "itemListElement": [
                {
                  "@type": "ListItem",
                  "position": 1,
                  "name": "ホーム",
                  "item": "https://croud-travel.pages.dev"
                },
                {
                  "@type": "ListItem",
                  "position": 2,
                  "name": "特集一覧",
                  "item": "https://croud-travel.pages.dev/features"
                },
                {
                  "@type": "ListItem",
                  "position": 3,
                  "name": "【保津川渓流沿いの歴史美と嵐山温泉露天付きプライベートスイート】2026-2027年11-12月初冬の京都・嵐山！世界最高峰「翠嵐 ラグジュアリーコレクションホテル 京都」＆老舗料亭旅館・初冬の渡月橋と極上京懐石名宿5選",
                  "item": "https://croud-travel.pages.dev/winter-kyoto-arashiyama-luxury-suiran-roten-suite-kaiseki-stay"
                }
              ]
            },
            {
              "@context": "https://schema.org",
              "@type": "FAQPage",
              "mainEntity": [
        {
          "@type": "Question",
          "name": "嵐山温泉の泉質と特徴はどのようなものですか？",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "嵐山温泉は、地下1200mから湧出する弱アルカリ性の単純温泉です。肌の角質を優しく軟化させてすべすべにする美肌効果があり、湯あたりしにくく身体が芯から温まるのが特徴です。無色透明で微かに温泉の香りが漂い、長湯にも適しています。"
          }
        },
        {
          "@type": "Question",
          "name": "翠嵐の「シャンパンディライト」とはどのようなサービスですか？",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "『翠嵐 ラグジュアリーコレクションホテル 京都』では、宿泊者全員を対象に、夕暮れ時の17時〜19時に敷地内の「茶寮 八翠」にてシャンパンやワイン、ソフトドリンクを無料で提供する「シャンパンディライト」を開催しています。保津川の夕景を眺めながら優雅なアペリティフを楽しめる大人気サービスです。"
          }
        },
        {
          "@type": "Question",
          "name": "初冬の嵐山散策でおすすめの時間帯はいつですか？",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "断然「早朝（午前7時〜8時半）」がおすすめです。日中は観光客が訪れる竹林の小径や渡月橋も、早朝はほとんど人がおらず、竹の葉が風にそよぐ音や桂川のせせらぎだけが聞こえる幻想的な静寂を味わえます。嵐山に宿泊する最大の醍醐味がここにあります。"
          }
        }
              ]
            }
          ])
        }}
      />

      {/* パンくずリスト */}
      <div className="bg-slate-100 border-b border-slate-200 text-xs text-slate-500 py-2.5 px-4">
        <div className="max-w-5xl mx-auto flex items-center gap-1.5 flex-wrap">
          <Link href="/" className="hover:text-slate-800 transition">ホーム</Link>
          <ChevronRight className="w-3 h-3 text-slate-400" />
          <Link href="/features" className="hover:text-slate-800 transition">特集一覧</Link>
          <ChevronRight className="w-3 h-3 text-slate-400" />
          <span className="text-slate-800 font-medium truncate max-w-xs">【保津川渓流沿いの歴史美と嵐山温泉露天付きプライベートスイート】2026-2027年11-12月初冬の京都・嵐山！世界最高峰「翠嵐 ラグジュアリーコレクションホテル 京都」＆老舗料亭旅館・初冬の渡月橋と極上京懐石名宿5選</span>
        </div>
      </div>

      {/* ヒーローヘッダー */}
      <header className="relative bg-gradient-to-br from-slate-950 via-slate-900 to-amber-950 text-white py-14 px-4 overflow-hidden">
        <div className="absolute inset-0 opacity-15 bg-[radial-gradient(#f59e0b_1px,transparent_1px)] [background-size:16px_16px]"></div>
        <div className="max-w-4xl mx-auto space-y-4 relative z-10 text-center">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-amber-500/20 text-amber-300 border border-amber-500/30 rounded-full text-xs font-semibold">
            <Sparkles className="w-3.5 h-3.5" />
            <span>2026-2027年 憧れの高級宿・ラグジュアリー特選</span>
          </div>
          <h1 className="text-2xl md:text-4xl font-extrabold tracking-tight leading-snug">
            【保津川渓流沿いの歴史美と嵐山温泉露天付きプライベートスイート】2026-2027年11-12月初冬の京都・嵐山！世界最高峰「翠嵐 ラグジュアリーコレクションホテル 京都」＆老舗料亭旅館・初冬の渡月橋と極上京懐石名宿5選
          </h1>
          <p className="text-xs md:text-sm text-slate-300 max-w-2xl mx-auto leading-relaxed">
            紅葉の喧騒が落ち着き、凛とした初冬の静寂が包み込む京都・嵐山。保津川の清流沿いに佇む世界的ラグジュアリーホテル「翠嵐 ラグジュアリーコレクションホテル 京都」をはじめ、嵐山温泉の肌触り滑らかな湯を客室露天風呂で愉しむ最高峰の宿。渡月橋や竹林の小径の静かな朝散策と、伝統の技が光る繊細な京懐石・丹波牛会席。日本の美意識の粋を極めた大人の記念日ステイ厳選5選。
          </p>
        </div>
      </header>

      {/* メインコンテンツ */}
      
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <main className="max-w-4xl mx-auto px-4 py-10 space-y-12">
        
        {/* 導入解説 */}
        <section className="bg-white rounded-2xl p-6 md:p-8 shadow-sm border border-slate-200 space-y-4">
          <h2 className="text-xl md:text-2xl font-bold text-slate-900 flex items-center gap-2">
            <Compass className="w-5 h-5 text-amber-600 shrink-0" />
            <span>初冬にこの地を訪れるべき理由と風土の魅力</span>
          </h2>
          <p className="text-xs md:text-sm text-slate-700 leading-relaxed whitespace-pre-line">
            平安の貴族たちが舟遊びを愉しみ、小倉百人一首の舞台となった風光明媚な景勝地・京都『嵐山（あらしやま）』。紅葉で沸き立った秋の観光ラッシュが過ぎ去る11月下旬から12月、嵐山は息を呑むような静寂を取り戻し、朝靄が保津川（大堰川）の水面を覆う『京都が最も美しい冬の姿』を現します。凛とした冷たい大気の中、渡月橋を渡り、朝の柔らかな光が差し込む竹林の小径を歩く時間は、この時期に嵐山に宿泊した者だけが味わえる特権です。この嵐山の保津川沿いに佇むのが、マリオット・インターナショナルの最高峰ラグジュアリーブランド『翠嵐（すいらん） ラグジュアリーコレクションホテル 京都』。明治期の歴史的建造物を再生したカフェやレストランを擁し、客室の専用露天風呂にはアルカリ性で肌に吸い付くような肌触りの『嵐山温泉』が満たされています。川のせせらぎと竹林の葉音に耳を傾けながら、部屋の露天風呂で温まる湯浴みは至福そのもの。夕食には、京都の伝統的な会席料理の技法にフレンチの美意識を融合させたモダン懐石ディナー。丹波牛のフィレ炭火焼きや冬の聖護院大根、九条ネギなど京野菜が織りなす繊細な味覚は、五感を深く刺激します。宿泊には翠嵐をはじめ、趣ある佇まいの『嵐山辨慶』や老舗『渡月亭』など、大人のための静けさと日本の美意識の粋を極めた名宿を厳選。古都の歴史と世界基準のラグジュアリーが調和した初冬の嵐山は、一生の記憶に残る記念日旅行を叶えてくれます。
          </p>
          
          <div className="pt-4 space-y-3">
            <h3 className="text-sm md:text-base font-bold text-slate-900">
              ▼ 本テーマが初冬の記念日・贅沢旅に絶対おすすめな3大ポイント
            </h3>
            <div className="space-y-3">
          <div className="bg-slate-50 rounded-xl p-5 border border-slate-200/80 space-y-2">
            <h3 className="text-base md:text-lg font-bold text-slate-900 flex items-center gap-2">
              <span className="flex items-center justify-center w-6 h-6 rounded-full bg-amber-500 text-white text-xs font-black">
                1
              </span>
              <span>世界最高峰「翠嵐 ラグジュアリーコレクション」！嵐山温泉露天付きプライベートスイート</span>
            </h3>
            <p className="text-xs md:text-sm text-slate-600 leading-relaxed pl-8">
              保津川沿いの特等席に位置するラグジュアリーホテル。客室露天風呂に注ぐ柔らかな嵐山温泉と、プライベート日本庭園を望む贅を尽くした滞在が叶います。
            </p>
          </div>
          <div className="bg-slate-50 rounded-xl p-5 border border-slate-200/80 space-y-2">
            <h3 className="text-base md:text-lg font-bold text-slate-900 flex items-center gap-2">
              <span className="flex items-center justify-center w-6 h-6 rounded-full bg-amber-500 text-white text-xs font-black">
                2
              </span>
              <span>紅葉の喧騒が去った初冬の静寂美！朝の渡月橋と竹林の小径を独り占めする特権</span>
            </h3>
            <p className="text-xs md:text-sm text-slate-600 leading-relaxed pl-8">
              観光客がまばらな初冬の早朝、朝靄に包まれる渡月橋や凛とした竹林の小径を静かに散策。宿泊者だからこそ出会える、静まり返った京都本来の幽玄な美を堪能できます。
            </p>
          </div>
          <div className="bg-slate-50 rounded-xl p-5 border border-slate-200/80 space-y-2">
            <h3 className="text-base md:text-lg font-bold text-slate-900 flex items-center gap-2">
              <span className="flex items-center justify-center w-6 h-6 rounded-full bg-amber-500 text-white text-xs font-black">
                3
              </span>
              <span>伝統の京懐石とモダンフレンチの融合！冬の丹波牛と京野菜が織りなす至高の美食</span>
            </h3>
            <p className="text-xs md:text-sm text-slate-600 leading-relaxed pl-8">
              聖護院大根やかぶら、冬の寒さで甘みを蓄えた京野菜と、とろける霜降りの丹波牛。一流の料理人が仕立てる繊細で華やかな料理の数々を歴史ある空間で味わえます。
            </p>
          </div>
            </div>
          </div>
        </section>

        {/* Wikipedia連携 観光地紹介 */}
        <section className="bg-white rounded-2xl p-6 md:p-8 shadow-sm border border-slate-200 space-y-4">
          <div className="flex items-center justify-between border-b border-slate-100 pb-3">
            <h2 className="text-lg md:text-xl font-bold text-slate-900 flex items-center gap-2">
              <MapPin className="w-5 h-5 text-rose-600 shrink-0" />
              <span>近隣の必見名所：渡月橋</span>
            </h2>
            <span className="text-[11px] text-slate-400">Wikipedia・公式解説連携</span>
          </div>

          <div className="grid md:grid-cols-12 gap-6 items-center">
            <div className="md:col-span-5 relative h-52 md:h-60 rounded-xl overflow-hidden bg-slate-100 border border-slate-200">
              <Image
                src="https://thumb.wikimedia.org/wikipedia/commons/thumb/d/df/Togetsukyo_in_Kyoto_Arashiyama.jpg/1280px-Togetsukyo_in_Kyoto_Arashiyama.jpg?utm_source=ja.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
                alt="嵐山の象徴・渡月橋（桂川に架かる木肌の風情・初冬の静寂と小倉山の冬景色）"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 360px"
              />
            </div>
            <div className="md:col-span-7 space-y-2.5">
              <h3 className="text-base font-bold text-slate-900 leading-snug">
                嵐山の象徴・渡月橋（桂川に架かる木肌の風情・初冬の静寂と小倉山の冬景色）
              </h3>
              <p className="text-xs md:text-sm text-slate-600 leading-relaxed">
                京都府京都市の桂川（大堰川）に架かる橋。承和年間（834-848年）に僧・道昌によって架橋されたのが始まりとされ、亀山上皇が「くまなき月の渡るに似る」と詠んだことから「渡月橋」と名付けられました。現在の橋は1934年に完成した鉄筋コンクリート製ですが、欄干には伝統的なヒノキ材が使われており、嵐山の美しい自然景観と見事に調和しています。秋の紅葉シーズンが終わり12月を迎えると、観光の喧騒が引き、静まり返った水面と凛とした冬空に映える渡月橋本来の優美な佇まいを心静かに堪能できます。
              </p>
              <div className="bg-amber-50 rounded-lg p-3 border border-amber-200/60 text-[11px] md:text-xs text-amber-900 leading-relaxed">
                <span className="font-bold block mb-0.5">💡 周辺観光のポイント</span>
                各高級旅館からスムーズにアクセス可能。初冬の澄んだ大気のもとで、静寂と壮大な自然美を心ゆくまで堪能できます。
              </div>
            </div>
          </div>
        </section>

        {/* 楽天API厳選宿 5選 */}
        <section className="space-y-6">
          <div className="border-b border-slate-200 pb-3 flex items-end justify-between">
            <div>
              <span className="text-xs font-bold text-rose-600 tracking-wider block">RAKUTEN TRAVEL LUXURY RANKING</span>
              <h2 className="text-xl md:text-2xl font-black text-slate-900">
                一生に一度は泊まりたい最高峰名宿 5選
              </h2>
            </div>
            <span className="text-xs text-slate-500">リアルタイムAPI連携データ</span>
          </div>

          <div className="space-y-6">
        {/* 宿カード 1: 翠嵐ラグジュアリーコレクションホテル京都 */}
        <div className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden hover:shadow-md transition duration-300">
          <div className="bg-gradient-to-r from-slate-900 to-slate-800 text-white p-4 md:p-5 flex flex-wrap items-center justify-between gap-2">
            <span className="bg-amber-500 text-slate-900 font-black text-xs px-2.5 py-1 rounded-md">
              厳選第1位
            </span>
            <span className="text-xs md:text-sm font-medium text-amber-200">
              保津川沿いに佇むマリオット最高峰！嵐山温泉露天付きプライベートスイート
            </span>
            <div className="flex items-center gap-1.5 text-xs bg-slate-800/80 px-2.5 py-1 rounded-md border border-slate-700">
              <Star className="w-3.5 h-3.5 text-amber-400 fill-amber-400" />
              <span className="font-bold text-amber-300">4.71</span>
              <span className="text-slate-400">（クチコミ 31件）</span>
            </div>
          </div>
          
          <div className="p-5 md:p-6 space-y-4">
            <div className="grid md:grid-cols-12 gap-6 items-center">
              <div className="md:col-span-5 relative h-56 md:h-64 rounded-xl overflow-hidden bg-slate-100 border border-slate-100">
                <Image
                  src="https://img.travel.rakuten.co.jp/share/HOTEL/158466/158466.jpg"
                  alt="翠嵐ラグジュアリーコレクションホテル京都"
                  fill
                  className="object-cover hover:scale-105 transition duration-500"
                  sizes="(max-width: 768px) 100vw, 360px"
                />
              </div>
              <div className="md:col-span-7 space-y-3">
                <h3 className="text-xl md:text-2xl font-bold text-slate-900 leading-snug">
                  翠嵐ラグジュアリーコレクションホテル京都
                </h3>
                <div className="space-y-1 text-xs text-slate-500">
                  <p className="flex items-center gap-1">
                    <MapPin className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                    <span>京都府京都市右京区嵯峨天龍寺芒ノ馬場町12</span>
                  </p>
                  <p className="flex items-center gap-1">
                    <Train className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                    <span>京福電鉄嵐山本線 嵐山駅 より徒歩約６分　阪急嵐山線 嵐山駅  、JR山陰本線 嵯峨野線  嵯峨嵐山駅 より徒歩約15分</span>
                  </p>
                </div>
                
                <ul className="space-y-1.5 pt-2 border-t border-slate-100">
                  <li className="flex items-start gap-2 text-xs md:text-sm text-slate-700 leading-relaxed"><span className="text-amber-500 font-bold shrink-0">・</span><span>明治期の男爵別邸の跡地、保津川沿いの風光明媚な特等席に佇む世界最高峰のラグジュアリーホテル。京都の伝統美とモダンな機能美が完璧に調和しています。</span></li><li className="flex items-start gap-2 text-xs md:text-sm text-slate-700 leading-relaxed"><span className="text-amber-500 font-bold shrink-0">・</span><span>客室専用露天風呂には柔らかな嵐山温泉が注がれ、竹林や日本庭園を眺めながら極上のプライベートバスタイムを心ゆくまで堪能できます。</span></li><li className="flex items-start gap-2 text-xs md:text-sm text-slate-700 leading-relaxed"><span className="text-amber-500 font-bold shrink-0">・</span><span>夕暮れ時の無料シャンパンサービスや、京懐石とフレンチが融合した至高のディナーなど、人生の特別な記念日を完璧に彩るホスピタリティを誇ります。</span></li>
                </ul>
                
                <div className="pt-3 border-t border-slate-100 flex flex-wrap items-baseline justify-between gap-3">
                  <div>
                    <span className="text-xs text-slate-400 block">最安料金目安（2名1室利用時/1名あたり）</span>
                    <span className="text-2xl font-black text-rose-600">¥64,895</span>
                    <span className="text-xs text-slate-500 ml-1">〜（税込）</span>
                  </div>
                  <a
                    href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F158466%2F158466.html"
                    target="_blank"
                    rel="noopener noreferrer nofollow"
                    className="inline-flex items-center gap-1 px-6 py-3 bg-gradient-to-r from-rose-600 to-red-600 hover:from-rose-500 hover:to-red-500 text-white font-bold text-sm rounded-xl shadow-md transition transform active:scale-95"
                  >
                    <span>空室・プランを確認</span>
                    <ChevronRight className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 宿カード 2: 京都　嵐山温泉　花伝抄（共立リゾート）（２０２６年５月１日リニューアルオープン） */}
        <div className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden hover:shadow-md transition duration-300">
          <div className="bg-gradient-to-r from-slate-900 to-slate-800 text-white p-4 md:p-5 flex flex-wrap items-center justify-between gap-2">
            <span className="bg-amber-500 text-slate-900 font-black text-xs px-2.5 py-1 rounded-md">
              厳選第2位
            </span>
            <span className="text-xs md:text-sm font-medium text-amber-200">
              阪急嵐山駅すぐの好立地！全館畳敷きの温もりと五つの貸切風呂巡り
            </span>
            <div className="flex items-center gap-1.5 text-xs bg-slate-800/80 px-2.5 py-1 rounded-md border border-slate-700">
              <Star className="w-3.5 h-3.5 text-amber-400 fill-amber-400" />
              <span className="font-bold text-amber-300">4.46</span>
              <span className="text-slate-400">（クチコミ 1983件）</span>
            </div>
          </div>
          
          <div className="p-5 md:p-6 space-y-4">
            <div className="grid md:grid-cols-12 gap-6 items-center">
              <div className="md:col-span-5 relative h-56 md:h-64 rounded-xl overflow-hidden bg-slate-100 border border-slate-100">
                <Image
                  src="https://img.travel.rakuten.co.jp/share/HOTEL/130702/130702.jpg"
                  alt="京都　嵐山温泉　花伝抄（共立リゾート）（２０２６年５月１日リニューアルオープン）"
                  fill
                  className="object-cover hover:scale-105 transition duration-500"
                  sizes="(max-width: 768px) 100vw, 360px"
                />
              </div>
              <div className="md:col-span-7 space-y-3">
                <h3 className="text-xl md:text-2xl font-bold text-slate-900 leading-snug">
                  京都　嵐山温泉　花伝抄（共立リゾート）（２０２６年５月１日リニューアルオープン）
                </h3>
                <div className="space-y-1 text-xs text-slate-500">
                  <p className="flex items-center gap-1">
                    <MapPin className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                    <span>京都府京都市西京区嵐山西一川町5-4</span>
                  </p>
                  <p className="flex items-center gap-1">
                    <Train className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                    <span>阪急嵐山線「嵐山駅」より徒歩１分。JR「京都駅」より約30分、阪急「梅田駅」より約50分。</span>
                  </p>
                </div>
                
                <ul className="space-y-1.5 pt-2 border-t border-slate-100">
                  <li className="flex items-start gap-2 text-xs md:text-sm text-slate-700 leading-relaxed"><span className="text-amber-500 font-bold shrink-0">・</span><span>全館畳敷きの和の温もりが心地よい、共立リゾートが手掛ける上質な温泉旅館。素足で歩ける快適な空間が旅の疲れを優しく解きほぐします。</span></li><li className="flex items-start gap-2 text-xs md:text-sm text-slate-700 leading-relaxed"><span className="text-amber-500 font-bold shrink-0">・</span><span>趣の異なる5つの貸切風呂と広々とした大浴場で嵐山温泉を満喫。湯上がりの無料アイスや夜鳴きそばサービスなどのおもてなしも大好評です。</span></li><li className="flex items-start gap-2 text-xs md:text-sm text-slate-700 leading-relaxed"><span className="text-amber-500 font-bold shrink-0">・</span><span>夕食は四季の恵みを盛り込んだ和食会席。天ぷらや小鉢を選べるオーダービュッフェも楽しめ、幅広い世代に選ばれている大人気宿です。</span></li>
                </ul>
                
                <div className="pt-3 border-t border-slate-100 flex flex-wrap items-baseline justify-between gap-3">
                  <div>
                    <span className="text-xs text-slate-400 block">最安料金目安（2名1室利用時/1名あたり）</span>
                    <span className="text-2xl font-black text-rose-600">¥18,100</span>
                    <span className="text-xs text-slate-500 ml-1">〜（税込）</span>
                  </div>
                  <a
                    href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F130702%2F130702.html"
                    target="_blank"
                    rel="noopener noreferrer nofollow"
                    className="inline-flex items-center gap-1 px-6 py-3 bg-gradient-to-r from-rose-600 to-red-600 hover:from-rose-500 hover:to-red-500 text-white font-bold text-sm rounded-xl shadow-md transition transform active:scale-95"
                  >
                    <span>空室・プランを確認</span>
                    <ChevronRight className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 宿カード 3: 京都　嵐山温泉　渡月亭 */}
        <div className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden hover:shadow-md transition duration-300">
          <div className="bg-gradient-to-r from-slate-900 to-slate-800 text-white p-4 md:p-5 flex flex-wrap items-center justify-between gap-2">
            <span className="bg-amber-500 text-slate-900 font-black text-xs px-2.5 py-1 rounded-md">
              厳選第3位
            </span>
            <span className="text-xs md:text-sm font-medium text-amber-200">
              渡月橋南詰に佇む創業百余年の老舗！嵐山の歴史情緒と本格京料理
            </span>
            <div className="flex items-center gap-1.5 text-xs bg-slate-800/80 px-2.5 py-1 rounded-md border border-slate-700">
              <Star className="w-3.5 h-3.5 text-amber-400 fill-amber-400" />
              <span className="font-bold text-amber-300">3.92</span>
              <span className="text-slate-400">（クチコミ 255件）</span>
            </div>
          </div>
          
          <div className="p-5 md:p-6 space-y-4">
            <div className="grid md:grid-cols-12 gap-6 items-center">
              <div className="md:col-span-5 relative h-56 md:h-64 rounded-xl overflow-hidden bg-slate-100 border border-slate-100">
                <Image
                  src="https://img.travel.rakuten.co.jp/share/HOTEL/8838/8838.jpg"
                  alt="京都　嵐山温泉　渡月亭"
                  fill
                  className="object-cover hover:scale-105 transition duration-500"
                  sizes="(max-width: 768px) 100vw, 360px"
                />
              </div>
              <div className="md:col-span-7 space-y-3">
                <h3 className="text-xl md:text-2xl font-bold text-slate-900 leading-snug">
                  京都　嵐山温泉　渡月亭
                </h3>
                <div className="space-y-1 text-xs text-slate-500">
                  <p className="flex items-center gap-1">
                    <MapPin className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                    <span>京都府京都市西京区嵐山中尾下町54-4（渡月橋南詰め）</span>
                  </p>
                  <p className="flex items-center gap-1">
                    <Train className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                    <span>京都駅よりＪＲ嵯峨野線嵯峨嵐山駅下車徒歩１５分。阪急京都線桂駅より嵐山線嵐山駅下車徒歩５分。名神京都南ＩＣより約４０分</span>
                  </p>
                </div>
                
                <ul className="space-y-1.5 pt-2 border-t border-slate-100">
                  <li className="flex items-start gap-2 text-xs md:text-sm text-slate-700 leading-relaxed"><span className="text-amber-500 font-bold shrink-0">・</span><span>名勝・渡月橋のたもとに建ち、明治30年の創業以来、多くの文化人や旅人を迎え続けてきた歴史ある老舗料理旅館です。</span></li><li className="flex items-start gap-2 text-xs md:text-sm text-slate-700 leading-relaxed"><span className="text-amber-500 font-bold shrink-0">・</span><span>嵐山温泉の湯を引いた風情あるお風呂で温まり、窓からは四季折々に表情を変える嵐山の大自然を間近に感じられます。</span></li><li className="flex items-start gap-2 text-xs md:text-sm text-slate-700 leading-relaxed"><span className="text-amber-500 font-bold shrink-0">・</span><span>夕食は伝統の京料理会席。板前が丹精込めて仕立てる旬の美味を、落ち着いた純和風の客室でゆったりと味わうことができます。</span></li>
                </ul>
                
                <div className="pt-3 border-t border-slate-100 flex flex-wrap items-baseline justify-between gap-3">
                  <div>
                    <span className="text-xs text-slate-400 block">最安料金目安（2名1室利用時/1名あたり）</span>
                    <span className="text-2xl font-black text-rose-600">¥23,400</span>
                    <span className="text-xs text-slate-500 ml-1">〜（税込）</span>
                  </div>
                  <a
                    href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F8838%2F8838.html"
                    target="_blank"
                    rel="noopener noreferrer nofollow"
                    className="inline-flex items-center gap-1 px-6 py-3 bg-gradient-to-r from-rose-600 to-red-600 hover:from-rose-500 hover:to-red-500 text-white font-bold text-sm rounded-xl shadow-md transition transform active:scale-95"
                  >
                    <span>空室・プランを確認</span>
                    <ChevronRight className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 宿カード 4: 旅亭　嵐月 */}
        <div className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden hover:shadow-md transition duration-300">
          <div className="bg-gradient-to-r from-slate-900 to-slate-800 text-white p-4 md:p-5 flex flex-wrap items-center justify-between gap-2">
            <span className="bg-amber-500 text-slate-900 font-black text-xs px-2.5 py-1 rounded-md">
              厳選第4位
            </span>
            <span className="text-xs md:text-sm font-medium text-amber-200">
              大堰川のほとりに佇む大人の隠れ家！全室から嵐山の山並みを望む名宿
            </span>
            <div className="flex items-center gap-1.5 text-xs bg-slate-800/80 px-2.5 py-1 rounded-md border border-slate-700">
              <Star className="w-3.5 h-3.5 text-amber-400 fill-amber-400" />
              <span className="font-bold text-amber-300">4.00</span>
              <span className="text-slate-400">（クチコミ 75件）</span>
            </div>
          </div>
          
          <div className="p-5 md:p-6 space-y-4">
            <div className="grid md:grid-cols-12 gap-6 items-center">
              <div className="md:col-span-5 relative h-56 md:h-64 rounded-xl overflow-hidden bg-slate-100 border border-slate-100">
                <Image
                  src="https://img.travel.rakuten.co.jp/share/HOTEL/68098/68098.jpg"
                  alt="旅亭　嵐月"
                  fill
                  className="object-cover hover:scale-105 transition duration-500"
                  sizes="(max-width: 768px) 100vw, 360px"
                />
              </div>
              <div className="md:col-span-7 space-y-3">
                <h3 className="text-xl md:text-2xl font-bold text-slate-900 leading-snug">
                  旅亭　嵐月
                </h3>
                <div className="space-y-1 text-xs text-slate-500">
                  <p className="flex items-center gap-1">
                    <MapPin className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                    <span>京都府京都市右京区嵯峨天龍寺芒ノ馬場町7</span>
                  </p>
                  <p className="flex items-center gap-1">
                    <Train className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                    <span>JR嵯峨野線「嵯峨嵐山駅」より徒歩15分／京福「嵐山駅」より徒歩7分／阪急嵐山線「嵐山駅」より徒歩10分</span>
                  </p>
                </div>
                
                <ul className="space-y-1.5 pt-2 border-t border-slate-100">
                  <li className="flex items-start gap-2 text-xs md:text-sm text-slate-700 leading-relaxed"><span className="text-amber-500 font-bold shrink-0">・</span><span>渡月橋の上流、清流・大堰川のほとりに静かに佇む落ち着いた純和風旅館。全室から嵐山の美しい山並みと川の流れを望むことができます。</span></li><li className="flex items-start gap-2 text-xs md:text-sm text-slate-700 leading-relaxed"><span className="text-amber-500 font-bold shrink-0">・</span><span>地下から湧き出る天然温泉を満たした露天風呂付き客室も備え、静寂の中で川のせせらぎを聞きながら優雅な湯浴みを楽しめます。</span></li><li className="flex items-start gap-2 text-xs md:text-sm text-slate-700 leading-relaxed"><span className="text-amber-500 font-bold shrink-0">・</span><span>厳選された丹波牛や季節の京野菜を取り入れた本格懐石料理が評判。静かに嵐山の風情を味わいたい大人の旅に最適です。</span></li>
                </ul>
                
                <div className="pt-3 border-t border-slate-100 flex flex-wrap items-baseline justify-between gap-3">
                  <div>
                    <span className="text-xs text-slate-400 block">最安料金目安（2名1室利用時/1名あたり）</span>
                    <span className="text-2xl font-black text-rose-600">¥44,000</span>
                    <span className="text-xs text-slate-500 ml-1">〜（税込）</span>
                  </div>
                  <a
                    href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F68098%2F68098.html"
                    target="_blank"
                    rel="noopener noreferrer nofollow"
                    className="inline-flex items-center gap-1 px-6 py-3 bg-gradient-to-r from-rose-600 to-red-600 hover:from-rose-500 hover:to-red-500 text-white font-bold text-sm rounded-xl shadow-md transition transform active:scale-95"
                  >
                    <span>空室・プランを確認</span>
                    <ChevronRight className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 宿カード 5: 嵐山温泉彩四季の宿　花筏 */}
        <div className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden hover:shadow-md transition duration-300">
          <div className="bg-gradient-to-r from-slate-900 to-slate-800 text-white p-4 md:p-5 flex flex-wrap items-center justify-between gap-2">
            <span className="bg-amber-500 text-slate-900 font-black text-xs px-2.5 py-1 rounded-md">
              厳選第5位
            </span>
            <span className="text-xs md:text-sm font-medium text-amber-200">
              渡月橋を望む絶景展望露天風呂！伝統の京懐石と心温まるおもてなし
            </span>
            <div className="flex items-center gap-1.5 text-xs bg-slate-800/80 px-2.5 py-1 rounded-md border border-slate-700">
              <Star className="w-3.5 h-3.5 text-amber-400 fill-amber-400" />
              <span className="font-bold text-amber-300">4.25</span>
              <span className="text-slate-400">（クチコミ 315件）</span>
            </div>
          </div>
          
          <div className="p-5 md:p-6 space-y-4">
            <div className="grid md:grid-cols-12 gap-6 items-center">
              <div className="md:col-span-5 relative h-56 md:h-64 rounded-xl overflow-hidden bg-slate-100 border border-slate-100">
                <Image
                  src="https://img.travel.rakuten.co.jp/share/HOTEL/73923/73923.jpg"
                  alt="嵐山温泉彩四季の宿　花筏"
                  fill
                  className="object-cover hover:scale-105 transition duration-500"
                  sizes="(max-width: 768px) 100vw, 360px"
                />
              </div>
              <div className="md:col-span-7 space-y-3">
                <h3 className="text-xl md:text-2xl font-bold text-slate-900 leading-snug">
                  嵐山温泉彩四季の宿　花筏
                </h3>
                <div className="space-y-1 text-xs text-slate-500">
                  <p className="flex items-center gap-1">
                    <MapPin className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                    <span>京都府京都市西京区嵐山中尾下町57</span>
                  </p>
                  <p className="flex items-center gap-1">
                    <Train className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                    <span>阪急嵐山駅より徒歩５分（渡月橋渡らず）、ＪＲ嵯峨嵐山駅より徒歩約１５分(渡月橋渡る)。JR京都駅３０分、阪急梅田駅５０分</span>
                  </p>
                </div>
                
                <ul className="space-y-1.5 pt-2 border-t border-slate-100">
                  <li className="flex items-start gap-2 text-xs md:text-sm text-slate-700 leading-relaxed"><span className="text-amber-500 font-bold shrink-0">・</span><span>渡月橋のすぐ南側に位置し、最上階の展望露天風呂から渡月橋と嵐山の一大パノラマを一望できる風情豊かな温泉旅館です。</span></li><li className="flex items-start gap-2 text-xs md:text-sm text-slate-700 leading-relaxed"><span className="text-amber-500 font-bold shrink-0">・</span><span>肌に優しい嵐山温泉の湯に浸かりながら、夕暮れの茜色に染まる古都の絶景を眺める時間は格別の贅沢です。</span></li><li className="flex items-start gap-2 text-xs md:text-sm text-slate-700 leading-relaxed"><span className="text-amber-500 font-bold shrink-0">・</span><span>名物の自家製豆腐や旬の京野菜、近江牛を取り入れた彩り鮮やかな京懐石を提供。温かなおもてなしと便利な立地で人気を集めています。</span></li>
                </ul>
                
                <div className="pt-3 border-t border-slate-100 flex flex-wrap items-baseline justify-between gap-3">
                  <div>
                    <span className="text-xs text-slate-400 block">最安料金目安（2名1室利用時/1名あたり）</span>
                    <span className="text-2xl font-black text-rose-600">¥26,400</span>
                    <span className="text-xs text-slate-500 ml-1">〜（税込）</span>
                  </div>
                  <a
                    href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F73923%2F73923.html"
                    target="_blank"
                    rel="noopener noreferrer nofollow"
                    className="inline-flex items-center gap-1 px-6 py-3 bg-gradient-to-r from-rose-600 to-red-600 hover:from-rose-500 hover:to-red-500 text-white font-bold text-sm rounded-xl shadow-md transition transform active:scale-95"
                  >
                    <span>空室・プランを確認</span>
                    <ChevronRight className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
          </div>
        </section>

        {/* アクセス＆見頃情報 */}
        <section className="bg-slate-900 text-white rounded-2xl p-6 md:p-8 space-y-4">
          <h2 className="text-lg md:text-xl font-bold flex items-center gap-2 text-amber-300">
            <Train className="w-5 h-5 shrink-0" />
            <span>アクセスガイド・気候と服装のポイント</span>
          </h2>
          <div className="text-xs md:text-sm text-slate-300 leading-relaxed whitespace-pre-line">
            【エリアへのアクセス】
・電車：JR山陰本線（嵯峨野線）「嵯峨嵐山駅」下車、徒歩約12〜15分。JR京都駅より快速で約11分、普通で約17分。
・私鉄：阪急嵐山線「嵐山駅」より徒歩約8〜12分。京福電鉄（嵐電）「嵐山駅」より徒歩約5〜8分。
・車：名神高速道路「京都南IC」より国道1号線経由で約40分。または京都縦貫自動車道「沓掛IC」より約25分。
・新幹線：JR京都駅よりタクシーで約30〜40分。翠嵐など一部の高級ホテルでは京都駅からの人力車またはタクシー片道無料送迎サービスも用意されています。

【見頃・気候・おすすめの服装】
・ベストシーズン：11月下旬〜12月（紅葉の混雑が落ち着き、静寂の古都情緒が最も深まる大人の狙い目シーズン。冬の嵐山花灯路やライトアップの余韻も楽しめます）。
・気温の目安：京都盆地の底冷えが始まる時期で、11月は日中12〜16℃、朝晩は5〜8℃。12月に入ると日中でも8〜11℃、朝晩は1〜4℃前後まで冷え込みます。
・服装のポイント：厚手のウールコートや上品なダウンコート、マフラー、手袋をご用意ください。足元から底冷えするため、厚手の靴下や歩きやすいブーツが適しています。
          </div>
        </section>

        {/* よくある質問 (FAQ) */}
        <section className="bg-slate-100 rounded-2xl p-6 md:p-8 space-y-4">
          <h2 className="text-lg md:text-xl font-bold text-slate-900 flex items-center gap-2">
            <ShieldCheck className="w-5 h-5 text-indigo-600 shrink-0" />
            <span>よくある質問（FAQ）</span>
          </h2>
          <div className="space-y-3">
          <div className="bg-white rounded-xl p-5 border border-slate-200 space-y-2 shadow-sm">
            <h4 className="text-sm md:text-base font-bold text-slate-900 flex items-start gap-2">
              <span className="text-rose-600 font-black shrink-0">Q.</span>
              <span>嵐山温泉の泉質と特徴はどのようなものですか？</span>
            </h4>
            <p className="text-xs md:text-sm text-slate-600 leading-relaxed pl-6">
              嵐山温泉は、地下1200mから湧出する弱アルカリ性の単純温泉です。肌の角質を優しく軟化させてすべすべにする美肌効果があり、湯あたりしにくく身体が芯から温まるのが特徴です。無色透明で微かに温泉の香りが漂い、長湯にも適しています。
            </p>
          </div>
          <div className="bg-white rounded-xl p-5 border border-slate-200 space-y-2 shadow-sm">
            <h4 className="text-sm md:text-base font-bold text-slate-900 flex items-start gap-2">
              <span className="text-rose-600 font-black shrink-0">Q.</span>
              <span>翠嵐の「シャンパンディライト」とはどのようなサービスですか？</span>
            </h4>
            <p className="text-xs md:text-sm text-slate-600 leading-relaxed pl-6">
              『翠嵐 ラグジュアリーコレクションホテル 京都』では、宿泊者全員を対象に、夕暮れ時の17時〜19時に敷地内の「茶寮 八翠」にてシャンパンやワイン、ソフトドリンクを無料で提供する「シャンパンディライト」を開催しています。保津川の夕景を眺めながら優雅なアペリティフを楽しめる大人気サービスです。
            </p>
          </div>
          <div className="bg-white rounded-xl p-5 border border-slate-200 space-y-2 shadow-sm">
            <h4 className="text-sm md:text-base font-bold text-slate-900 flex items-start gap-2">
              <span className="text-rose-600 font-black shrink-0">Q.</span>
              <span>初冬の嵐山散策でおすすめの時間帯はいつですか？</span>
            </h4>
            <p className="text-xs md:text-sm text-slate-600 leading-relaxed pl-6">
              断然「早朝（午前7時〜8時半）」がおすすめです。日中は観光客が訪れる竹林の小径や渡月橋も、早朝はほとんど人がおらず、竹の葉が風にそよぐ音や桂川のせせらぎだけが聞こえる幻想的な静寂を味わえます。嵐山に宿泊する最大の醍醐味がここにあります。
            </p>
          </div>
          </div>
        </section>

        {/* ふるさと納税・関連リンク */}
        <section className="bg-gradient-to-r from-amber-500 to-orange-500 text-slate-950 rounded-2xl p-6 md:p-8 space-y-3 text-center">
          <h2 className="text-xl md:text-2xl font-black">
            楽天トラベル ふるさと納税で最大30%お得に予約！
          </h2>
          <p className="text-xs md:text-sm max-w-xl mx-auto font-medium">
            高価格帯の高級宿だからこそ、楽天トラベルふるさと納税クーポンの割引効果は絶大。実質2,000円の自己負担で憧れのスイートルームに宿泊できます。
          </p>
          <div className="pt-2">
            <a
              href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2Fspecial%2Ffurusato%2F"
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="inline-flex items-center gap-1.5 px-8 py-3.5 bg-slate-950 text-white font-black text-sm rounded-xl shadow-lg hover:bg-slate-900 transition transform active:scale-95"
            >
              <span>楽天トラベル ふるさと納税クーポンをチェック</span>
              <ChevronRight className="w-4 h-4 text-amber-400" />
            </a>
          </div>
        </section>

      </main>
    </div>
  );
}
