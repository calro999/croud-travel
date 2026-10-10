import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { MapPin, Calendar, ExternalLink, HelpCircle, ChevronRight, ShieldCheck, Sparkles } from 'lucide-react';

export const metadata: Metadata = {
  title: '冬に透明度極まる仁淀ブルーと中津渓谷：2026-2027年冬の高知・仁淀川！渓流温泉と土佐あかうし名宿5選 | クラウドトラベル',
  description: '年間で最も透明度が高まり神秘のコバルトブルーに輝く奇跡の清流「仁淀川」の冬絶景！中津渓谷トレッキング、旨味凝縮の「幻の和牛・土佐あかうし」鍋と清流のせせらぎを聞く名湯露天風呂に癒やされる冬名宿5選。',
  keywords: ['高知県冬旅行', '仁淀川・いの町・中津渓谷', '冬温泉', '2026', '2027', '雪景色', '冬の味覚', '楽天トラベル', 'ふるさと納税'],
  alternates: {
    canonical: 'https://croud-travel.pages.dev/winter-kochi-niyodogawa-niyodoblue-nakatsu-tosa-akagyu-onsen-stay',
  },
  openGraph: {
    title: '冬に透明度極まる仁淀ブルーと中津渓谷：2026-2027年冬の高知・仁淀川！渓流温泉と土佐あかうし名宿5選',
    description: '年間で最も透明度が高まり神秘のコバルトブルーに輝く奇跡の清流「仁淀川」の冬絶景！中津渓谷トレッキング、旨味凝縮の「幻の和牛・土佐あかうし」鍋と清流のせせらぎを聞く名湯露天風呂に癒やされる冬名宿5選。',
    url: 'https://croud-travel.pages.dev/winter-kochi-niyodogawa-niyodoblue-nakatsu-tosa-akagyu-onsen-stay',
    siteName: 'クラウドトラベル',
    locale: 'ja_JP',
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: '冬に透明度極まる仁淀ブルーと中津渓谷：2026-2027年冬の高知・仁淀川！渓流温泉と土佐あかうし名宿5選',
    description: '年間で最も透明度が高まり神秘のコバルトブルーに輝く奇跡の清流「仁淀川」の冬絶景！中津渓谷トレッキング、旨味凝縮の「幻の和牛・土佐あかうし」鍋と清流のせせらぎを聞く名湯露天風呂に癒やされる冬名宿5選。',
  },
};

export default function Page() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'TouristAttraction',
        name: '奇跡の清流・仁淀川（冬に透明度極まる仁淀ブルー）',
        description: '仁淀川（によどがわ）は、四国の愛媛県・高知県を流れる一級河川で、愛媛県内では面河川（おもごがわ）と呼ばれる。流域面積1,560km2、石鎚山などの源流から太平洋に注ぐ河口までの幹川流路延長は124km、流域内市町村の数は3市6町1村である。 吉野川・四万十川に次ぐ四国第三の河川とされる。水質は全国1位（2010年）で、水面が青く美しい「仁淀ブルー」と呼ばれる淵や滝壺などがある。 中流域には四国で第2の規模である多目的ダム「大渡ダム」をはじめとして治水や水力発電のための施設も多い。',
        image: 'https://upload.wikimedia.org/wikipedia/commons/e/ea/Niyodogawa-2.jpg?utm_source=ja.wikipedia.org&utm_campaign=api&utm_content=thumbnail_unscaled',
        address: {
          '@type': 'PostalAddress',
          addressRegion: '高知県',
          addressCountry: 'JP'
        }
      },
      {
        '@type': 'FAQPage',
        mainEntity: [
          {
            '@type': 'Question',
            name: "なぜ冬が「仁淀ブルー」の一番のおすすめシーズンなのですか？",
            acceptedAnswer: {
              '@type': 'Answer',
              text: "夏期は夕立や台風、川遊びの人の影響で微細な砂が舞い上がりやすいですが、11月〜1月の冬は降水量が少なく天候が安定するため、川の水が極限まで澄み切ります。さらに冬の澄んだ太陽光が水中に深く届き、不純物のない水分子が青い光だけを反射するため、年間で最も深く鮮やかなコバルトブルーが観察できるのです。"
            }
          },
          {
            '@type': 'Question',
            name: "「中津渓谷」の散策は初心者や冬でも安全に歩けますか？",
            acceptedAnswer: {
              '@type': 'Answer',
              text: "はい、中津渓谷には川沿いに約2.3kmの整備された遊歩道があり、名所「雨竜の滝」までは片道約20分ほどで歩くことができます。アップダウンは緩やかですが、冬場は水しぶきで濡れた岩場や橋の上が滑りやすくなっている場合があるため、滑りにくい靴を履き、足元に十分注意して歩行してください。"
            }
          },
          {
            '@type': 'Question',
            name: "幻の和牛と呼ばれる「土佐あかうし」の特徴は何ですか？",
            acceptedAnswer: {
              '@type': 'Answer',
              text: "土佐あかうしは高知県内のみで生産される褐毛和種で、日本の肉用牛全体のわずか0.1%程度しか流通しない希少なブランド牛です。一般的な黒毛和牛に比べてサシが多すぎず、アミノ酸を豊富に含んだ赤身の肉汁と旨味が非常に強いのが特徴。冬のすき焼きやしゃぶしゃぶで食べると、脂っこさが全くなくいくらでも食べられる上品な美味しさです。"
            }
          }
        ]
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          {
            '@type': 'ListItem',
            position: 1,
            name: 'ホーム',
            item: 'https://croud-travel.pages.dev/'
          },
          {
            '@type': 'ListItem',
            position: 2,
            name: '高知県旅行特集',
            item: 'https://croud-travel.pages.dev/prefectures/kochi'
          },
          {
            '@type': 'ListItem',
            position: 3,
            name: '【冬に透明度極まる仁淀ブルーと中津渓谷】2026-2027年冬の高知・仁淀川！渓流温泉と土佐あかうし名宿5選',
            item: 'https://croud-travel.pages.dev/winter-kochi-niyodogawa-niyodoblue-nakatsu-tosa-akagyu-onsen-stay'
          }
        ]
      }
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <main className="min-h-screen bg-stone-50/50 pb-20">
        {/* パンくずリスト */}
        <nav className="max-w-4xl mx-auto px-4 py-4 text-xs text-stone-500 flex items-center gap-1.5 flex-wrap">
          <Link href="/" className="hover:text-cyan-700 transition">ホーム</Link>
          <ChevronRight className="w-3.5 h-3.5 text-stone-400" />
          <Link href="/prefectures/kochi" className="hover:text-cyan-700 transition">高知県</Link>
          <ChevronRight className="w-3.5 h-3.5 text-stone-400" />
          <span className="text-stone-800 font-medium truncate max-w-[200px] sm:max-w-none">仁淀川・いの町・中津渓谷 冬の厳選宿</span>
        </nav>

        {/* ヘッダーエリア */}
        <header className="max-w-4xl mx-auto px-4 pt-4 pb-8 space-y-4">
          <div className="flex flex-wrap items-center gap-2">
            <span className="px-2.5 py-1 rounded-full text-xs font-bold bg-cyan-100 text-cyan-800">
              2026-2027年冬 厳選特集
            </span>
            <span className="px-2.5 py-1 rounded-full text-xs font-semibold bg-stone-200 text-stone-700 flex items-center gap-1">
              <MapPin className="w-3 h-3 text-stone-500" />
              仁淀川・いの町・中津渓谷（高知県）
            </span>
            <span className="px-2.5 py-1 rounded-full text-xs font-semibold bg-amber-100 text-amber-800 flex items-center gap-1">
              <Sparkles className="w-3 h-3 text-amber-600" />
              楽天API公式連携
            </span>
          </div>

          <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-stone-900 leading-tight">「冬に透明度極まる仁淀ブルーと中津渓谷」2026-2027年冬の高知・仁淀川！渓流温泉と土佐あかうし名宿5選</h1>

          <p className="text-xs sm:text-sm text-stone-600 leading-relaxed pt-1">
            年間で最も透明度が高まり神秘のコバルトブルーに輝く奇跡の清流「仁淀川」の冬絶景！中津渓谷トレッキング、旨味凝縮の「幻の和牛・土佐あかうし」鍋と清流のせせらぎを聞く名湯露天風呂に癒やされる冬名宿5選。
          </p>
        </header>

        {/* 導入解説セクション */}
        <section className="max-w-4xl mx-auto px-4 mb-10">
          <div className="bg-white rounded-2xl p-6 sm:p-8 border border-stone-200 shadow-sm space-y-6">
            <div className="space-y-3">
              <h2 className="text-lg sm:text-xl font-bold text-stone-900 flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-cyan-700"></span>
                冬の仁淀川・いの町・中津渓谷探訪：静寂と温もりに包まれる旅の魅力
              </h2>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                国土交通省の全国一級河川水質調査において幾度も日本一に輝き、「奇跡の清流」と称えられる高知県・仁淀川（によどがわ）。光の反射と極限まで澄んだ水が生み出す神秘の青は「仁淀ブルー」と呼ばれ世界中の人々を魅了していますが、その仁淀ブルーが一年で最も美しく青く輝くのが、実は雨が少なく水量が安定する11月から1月の冬期です。夏場のような濁りが一切なく、水底の小石の一粒一粒や泳ぐ川魚の影までくっきり透けて見える透明度は圧巻。流域に位置する名勝「中津渓谷」や「安居渓谷」では、冬の冷気によって滝のしぶきが凍りつき、ブルーの淵と純白の氷瀑（ひょうばく）が織りなす息を呑む奇跡の冬絶景に出逢えます。さらに冬の高知・仁淀川流域のグルメの最高峰が、年間数百頭しか出荷されない幻の和牛「土佐あかうし（褐毛和種）」。赤身の濃厚な旨味と上質なサシが溶け合うあかうしのすき焼きやステーキ、仁淀川の清流で育った川魚料理を味わい、渓谷から湧き出る天然温泉の露天風呂に浸かる、五感すべてが研ぎ澄まされる至高の冬旅をご案内します。
              </p>
            </div>

            <div className="space-y-3 pt-2">
              <h3 className="text-sm sm:text-base font-bold text-stone-800">
                この冬、仁淀川・いの町・中津渓谷を訪れるべき3つの理由
              </h3>
              <div className="grid grid-cols-1 gap-3">
              <div className="p-4 rounded-xl bg-stone-50 border border-stone-200/80 space-y-1.5">
                <h3 className="font-bold text-stone-900 text-sm sm:text-base flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-cyan-600"></span>
                  年間で最も透明度が高まりエメラルドに輝く「冬の仁淀ブルー」の真髄
                </h3>
                <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                  冬は降水量が少なく水中の不純物が徹底的に沈殿するため、仁淀ブルーの青さがピークを迎えます。太陽光が差し込むとコバルトブルーからエメラルドグリーンへと刻一刻と表情を変える水面は、寒さを忘れて見惚れるほどの神聖さです。
                </p>
              </div>
              <div className="p-4 rounded-xl bg-stone-50 border border-stone-200/80 space-y-1.5">
                <h3 className="font-bold text-stone-900 text-sm sm:text-base flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-cyan-600"></span>
                  名勝「中津渓谷」の雨竜の滝と冬限定の氷瀑・奇岩トレッキング
                </h3>
                <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                  巨岩が連なる中津渓谷の遊歩道。落差約20mの「雨竜の滝」では、厳冬期に水しぶきが凍りついて氷のカーテンのような氷瀑が出現します。神秘の滝壺のブルーと白氷のコントラストは冬にしか出逢えない絶景です。
                </p>
              </div>
              <div className="p-4 rounded-xl bg-stone-50 border border-stone-200/80 space-y-1.5">
                <h3 className="font-bold text-stone-900 text-sm sm:text-base flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-cyan-600"></span>
                  幻の和牛「土佐あかうし」鍋と清流沿いの名湯露天風呂で心身を解き放つ
                </h3>
                <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                  肉本来のジューシーな赤身肉の旨味が凝縮された「土佐あかうし」。冬の特製すき焼きや網焼きステーキで味わう贅沢は格別。仁淀川のせせらぎを聞きながら浸かる天然温泉が、トレッキング後の身体を芯まで温めてくれます。
                </p>
              </div>
              </div>
            </div>

            <div className="p-4 rounded-xl bg-cyan-50/60 border border-cyan-100 space-y-2 text-xs sm:text-sm text-stone-700 leading-relaxed">
              <h3 className="font-bold text-cyan-950 flex items-center gap-1.5 text-sm">
                <Calendar className="w-4 h-4 text-cyan-700" />
                アクセス・気候・おすすめの服装
              </h3>
              <div className="whitespace-pre-line text-xs text-stone-600">
                【エリアへのアクセス】
・飛行機・空港から：高知龍馬空港より車・レンタカーで高知東部道路経由約45分でいの町、約1時間15分で中津渓谷（仁淀川町）へ。
・JR・鉄道：JR土讃線「高知駅」より特急「あしずり」で「伊野駅」まで約15分。伊野駅より仁淀川沿いを走る「とさでん交通バス」や町民バスへ乗り換え可能。
・車：高知自動車道「伊野IC」より国道33号線を仁淀川沿いに西へ。土佐和紙工芸村くらうどまで約20分、中津渓谷まで約50分。

【見頃・気候・おすすめの服装】
・ベストシーズン：11月中旬〜1月（降水量が少なく仁淀ブルーの透明度が年間最高潮、中津渓谷の氷瀑鑑賞、土佐あかうし鍋の旬）。
・気温の目安：高知市街地は温暖ですが、仁淀川の中・上流域（いの町上八川や仁淀川町中津など）は標高が高く山に囲まれているため、冬の日中は8〜12℃、朝晩は0〜2℃程度まで冷え込みます。
・服装のポイント：中津渓谷や安居渓谷の遊歩道は水辺沿いで濡れた岩場や階段があるため、グリップ力の高いスニーカーやトレッキングシューズが必須です。防風性の高いダウンジャケット、フリース、手袋、ニット帽を着用してください。車での移動は国道33号は整備されていますが、寒波到来時の山間部道路凍結に備えてスタッドレスタイヤ装着が推奨されます。
              </div>
            </div>
          </div>
        </section>

        {/* Wikipedia公式連携スポットセクション */}
        <section className="max-w-4xl mx-auto px-4 mb-10">
          <div className="bg-white rounded-2xl p-6 sm:p-8 border border-stone-200 shadow-sm space-y-4">
            <div className="flex items-center justify-between">
              <h2 className="text-lg sm:text-xl font-bold text-stone-900">
                近隣名所アーカイブ：奇跡の清流・仁淀川（冬に透明度極まる仁淀ブルー）
              </h2>
              <span className="text-[11px] text-stone-400">Wikipedia公式情報連携</span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
              <div className="md:col-span-5 overflow-hidden rounded-xl border border-stone-200 bg-stone-100">
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/e/ea/Niyodogawa-2.jpg?utm_source=ja.wikipedia.org&utm_campaign=api&utm_content=thumbnail_unscaled"
                  alt="奇跡の清流・仁淀川（冬に透明度極まる仁淀ブルー）"
                  className="w-full h-48 md:h-56 object-cover hover:scale-105 transition-transform duration-300"
                  loading="lazy"
                />
              </div>
              <div className="md:col-span-7 space-y-2">
                <h3 className="font-bold text-stone-900 text-sm sm:text-base">
                  奇跡の清流・仁淀川（冬に透明度極まる仁淀ブルー） の見どころと歴史
                </h3>
                <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                  仁淀川（によどがわ）は、四国の愛媛県・高知県を流れる一級河川で、愛媛県内では面河川（おもごがわ）と呼ばれる。流域面積1,560km2、石鎚山などの源流から太平洋に注ぐ河口までの幹川流路延長は124km、流域内市町村の数は3市6町1村である。 吉野川・四万十川に次ぐ四国第三の河川とされる。水質は全国1位（2010年）で、水面が青く美しい「仁淀ブルー」と呼ばれる淵や滝壺などがある。 中流域には四国で第2の規模である多目的ダム「大渡ダム」をはじめとして治水や水力発電のための施設も多い。
                </p>
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
              仁淀川・いの町・中津渓谷 厳選の温泉＆名宿5選
            </h2>
            <p className="text-xs sm:text-sm text-stone-500">
              楽天トラベルの最新空室・クチコミ・宿泊料金データをリアルタイム連携しています
            </p>
          </div>

          {/* 宿カード 1: 中津渓谷　ゆの森 */}
          <article className="bg-white rounded-2xl border border-stone-200 shadow-sm overflow-hidden hover:shadow-md transition-shadow">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-0">
              <div className="md:col-span-5 relative min-h-[240px]">
                <img
                  src="https://img.travel.rakuten.co.jp/share/HOTEL/107685/107685.jpg"
                  alt="中津渓谷　ゆの森"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
                <div className="absolute top-3 left-3 bg-stone-900/80 backdrop-blur text-white px-2.5 py-1 rounded-full text-xs font-semibold">
                  第1位
                </div>
              </div>
              <div className="md:col-span-7 p-5 sm:p-6 flex flex-col justify-between space-y-4">
                <div>
                  <div className="inline-block px-2.5 py-0.5 rounded-full text-[11px] font-bold bg-cyan-50 text-cyan-800 border border-cyan-200 mb-2">
                    中津渓谷直結・仁淀ブルーに一番近い隠れ家名湯オーベルジュ
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold text-stone-900 leading-snug">
                    中津渓谷　ゆの森
                  </h3>
                  <div className="flex items-center gap-3 mt-2 text-xs text-stone-600">
                    <span className="flex items-center text-amber-500 font-bold text-sm">
                      ★ 4.58
                    </span>
                    <span>クチコミ 114件</span>
                    <span className="text-stone-400">|</span>
                    <span className="font-semibold text-cyan-900">税込 8,545円〜</span>
                  </div>

                  <p className="mt-3 text-xs sm:text-sm text-stone-600 leading-relaxed">
                    中津渓谷の遊歩道入口に位置し、冬の仁淀ブルー探訪の拠点としてこれ以上ない最高の宿。客室は木の温もりがあふれる落ち着いた造りで、窓の外には清らかな中津川のせせらぎが広がります。館内の温泉は肌に優しいアルカリ性単純温泉で、冬の渓谷トレッキングで冷えた身体をぽかぽかに温めてくれます。特筆すべきは食事のクオリティで、幻の「土佐あかうし」をメインにしたコース料理や地元の旬素材を使った独創的な皿が並び、美食家のリピーターを魅了しています。
                  </p>

                  <ul className="mt-3 space-y-1 text-xs text-stone-600">
                    <li className="flex items-center gap-2"><span className="text-cyan-600 font-bold">✓</span> 名勝「中津渓谷」の入口に佇む唯一無二のロケーション</li>
                    <li className="flex items-center gap-2"><span className="text-cyan-600 font-bold">✓</span> 中津川の渓流を望むアルカリ性単純温泉の露天風呂とサウナ</li>
                    <li className="flex items-center gap-2"><span className="text-cyan-600 font-bold">✓</span> 土佐あかうしや地元清流の恵みを盛り込んだ本格創作フレンチ・会席</li>
                  </ul>

                  <div className="mt-3 p-3 bg-stone-50 rounded-lg border border-stone-200/60 text-xs text-stone-600 italic">
                    <p className="font-semibold text-[11px] text-stone-500 not-italic mb-0.5">宿泊者のクチコミ抜粋：</p>
                    「料理と景色が最高、エレベーターがあれば完璧料理がとてもよかったです。景色もとてもよかったです。エレベーターがあればもっとよかったです。また、泊まりたいと思います。」
                  </div>

                  <div className="mt-3 pt-3 border-t border-stone-100 text-[11px] text-stone-500 space-y-0.5">
                    <p>📍 高知県吾川郡仁淀川町名野川258-1</p>
                    <p>🚆 ＪＲ　佐川駅より黒岩観光バスで名野川まで３７分。県道（坂道）を徒歩１０分。</p>
                  </div>
                </div>

                <div className="pt-2">
                  <a
                    href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F107685%2F107685.html"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-gradient-to-r from-cyan-700 to-cyan-800 hover:from-cyan-800 hover:to-cyan-900 text-white font-bold text-xs sm:text-sm shadow transition-all"
                  >
                    <span>楽天トラベルで空室・プラン・クチコミを見る</span>
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>
          </article>

          {/* 宿カード 2: 亀の井ホテル　高知 */}
          <article className="bg-white rounded-2xl border border-stone-200 shadow-sm overflow-hidden hover:shadow-md transition-shadow">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-0">
              <div className="md:col-span-5 relative min-h-[240px]">
                <img
                  src="https://img.travel.rakuten.co.jp/share/HOTEL/44261/44261.jpg"
                  alt="亀の井ホテル　高知"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
                <div className="absolute top-3 left-3 bg-stone-900/80 backdrop-blur text-white px-2.5 py-1 rounded-full text-xs font-semibold">
                  第2位
                </div>
              </div>
              <div className="md:col-span-7 p-5 sm:p-6 flex flex-col justify-between space-y-4">
                <div>
                  <div className="inline-block px-2.5 py-0.5 rounded-full text-[11px] font-bold bg-cyan-50 text-cyan-800 border border-cyan-200 mb-2">
                    仁淀川の清流を一望・大浴場露天風呂と充実のバイキング
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold text-stone-900 leading-snug">
                    亀の井ホテル　高知
                  </h3>
                  <div className="flex items-center gap-3 mt-2 text-xs text-stone-600">
                    <span className="flex items-center text-amber-500 font-bold text-sm">
                      ★ 4.15
                    </span>
                    <span>クチコミ 1,111件</span>
                    <span className="text-stone-400">|</span>
                    <span className="font-semibold text-cyan-900">税込 6,153円〜</span>
                  </div>

                  <p className="mt-3 text-xs sm:text-sm text-stone-600 leading-relaxed">
                    高知市街からもアクセスしやすい、いの町の仁淀川を見下ろす高台に位置する温泉ホテル。館内の展望露天風呂に浸かれば、冬の青空を映して静かに流れる仁淀川の絶景が広がり、日常のストレスから解き放たれます。夕食は高知名物のカツオの藁焼きタタキをはじめ、地元の山海の幸をふんだんに取り入れた豪華バイキングまたは季節会席。ファミリーからご年配の方まで誰もが快適に過ごせる充実した施設とサービスが魅力です。
                  </p>

                  <ul className="mt-3 space-y-1 text-xs text-stone-600">
                    <li className="flex items-center gap-2"><span className="text-cyan-600 font-bold">✓</span> いの町の高台に建ち、雄大な仁淀川の流れを一望するパノラマビュー</li>
                    <li className="flex items-center gap-2"><span className="text-cyan-600 font-bold">✓</span> 開放感あふれる天然温泉大浴場と冬の澄んだ風が心地よい露天風呂</li>
                    <li className="flex items-center gap-2"><span className="text-cyan-600 font-bold">✓</span> カツオの藁焼きタタキや土佐の山海グルメが並ぶ大人気ディナー</li>
                  </ul>

                  <div className="mt-3 p-3 bg-stone-50 rounded-lg border border-stone-200/60 text-xs text-stone-600 italic">
                    <p className="font-semibold text-[11px] text-stone-500 not-italic mb-0.5">宿泊者のクチコミ抜粋：</p>
                    「息子とお酒の飲み比べと美味しい朝食に大満足20歳になった息子とラウンジで色んなお酒を飲み比べどれが好きそう?と一口づつ試したり飲み方変えたりできて大エンジョイ雨だったのでずっとお部屋。」
                  </div>

                  <div className="mt-3 pt-3 border-t border-stone-100 text-[11px] text-stone-500 space-y-0.5">
                    <p>📍 高知県吾川郡いの町波川1569</p>
                    <p>🚆 ＪＲ土讃線　伊野駅より車で約５分（約２．５キロ）／高知自動車道　伊野ＩＣより国道３３号線を松山方面へ約１５分（約６ｋｍ）</p>
                  </div>
                </div>

                <div className="pt-2">
                  <a
                    href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F44261%2F44261.html"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-gradient-to-r from-cyan-700 to-cyan-800 hover:from-cyan-800 hover:to-cyan-900 text-white font-bold text-xs sm:text-sm shadow transition-all"
                  >
                    <span>楽天トラベルで空室・プラン・クチコミを見る</span>
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>
          </article>

          {/* 宿カード 3: 土佐和紙工芸村「くらうど」 */}
          <article className="bg-white rounded-2xl border border-stone-200 shadow-sm overflow-hidden hover:shadow-md transition-shadow">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-0">
              <div className="md:col-span-5 relative min-h-[240px]">
                <img
                  src="https://img.travel.rakuten.co.jp/share/HOTEL/75287/75287.jpg"
                  alt="土佐和紙工芸村「くらうど」"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
                <div className="absolute top-3 left-3 bg-stone-900/80 backdrop-blur text-white px-2.5 py-1 rounded-full text-xs font-semibold">
                  第3位
                </div>
              </div>
              <div className="md:col-span-7 p-5 sm:p-6 flex flex-col justify-between space-y-4">
                <div>
                  <div className="inline-block px-2.5 py-0.5 rounded-full text-[11px] font-bold bg-cyan-50 text-cyan-800 border border-cyan-200 mb-2">
                    仁淀川カヌー・和紙漉き体験・薬草風呂スパを備えた道の駅リゾート
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold text-stone-900 leading-snug">
                    土佐和紙工芸村「くらうど」
                  </h3>
                  <div className="flex items-center gap-3 mt-2 text-xs text-stone-600">
                    <span className="flex items-center text-amber-500 font-bold text-sm">
                      ★ 4.38
                    </span>
                    <span>クチコミ 280件</span>
                    <span className="text-stone-400">|</span>
                    <span className="font-semibold text-cyan-900">税込 9,000円〜</span>
                  </div>

                  <p className="mt-3 text-xs sm:text-sm text-stone-600 leading-relaxed">
                    伝統の土佐和紙の里・いの町にあり、仁淀川の清流のすぐそばに佇む複合リゾート施設。館内には伝統的な和紙漉きが体験できる工房やクラフトビール醸造所が併設され、冬の知的な文化体験を満喫できます。宿泊者専用のクアハウスには、地元産の薬草を用いた薪焚き風呂や露天風呂が完備され、薬草の心地よい香りに包まれて芯から温まれます。食事は地元契約農家の冬野菜やあかうしを使ったフレンチ会席が提供されます。
                  </p>

                  <ul className="mt-3 space-y-1 text-xs text-stone-600">
                    <li className="flex items-center gap-2"><span className="text-cyan-600 font-bold">✓</span> 仁淀川のすぐ畔に位置する総合体験型リゾートホテル</li>
                    <li className="flex items-center gap-2"><span className="text-cyan-600 font-bold">✓</span> 本格的な和紙漉き体験工房やカヌーツアーデスクを併設</li>
                    <li className="flex items-center gap-2"><span className="text-cyan-600 font-bold">✓</span> 薪焚きの薬草風呂と露天風呂で心身をリフレッシュするクアハウス</li>
                  </ul>

                  <div className="mt-3 p-3 bg-stone-50 rounded-lg border border-stone-200/60 text-xs text-stone-600 italic">
                    <p className="font-semibold text-[11px] text-stone-500 not-italic mb-0.5">宿泊者のクチコミ抜粋：</p>
                    「接客とロケーションが最高、食事も大満足接客対応がとても素晴らしくロケーションも抜群でした。朝食、夕食ともとても美味しく是非また利用したいです。色々、高知の宿を迷いましたが、ここにして良かったです。」
                  </div>

                  <div className="mt-3 pt-3 border-t border-stone-100 text-[11px] text-stone-500 space-y-0.5">
                    <p>📍 高知県吾川郡いの町鹿敷1226</p>
                    <p>🚆 JR伊野駅より北部交通バスで15分、岩村下車すぐ/高知市内より車で30分</p>
                  </div>
                </div>

                <div className="pt-2">
                  <a
                    href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F75287%2F75287.html"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-gradient-to-r from-cyan-700 to-cyan-800 hover:from-cyan-800 hover:to-cyan-900 text-white font-bold text-xs sm:text-sm shadow transition-all"
                  >
                    <span>楽天トラベルで空室・プラン・クチコミを見る</span>
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>
          </article>

          {/* 宿カード 4: サザンシティホテル */}
          <article className="bg-white rounded-2xl border border-stone-200 shadow-sm overflow-hidden hover:shadow-md transition-shadow">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-0">
              <div className="md:col-span-5 relative min-h-[240px]">
                <img
                  src="https://img.travel.rakuten.co.jp/share/HOTEL/1807/1807.jpg"
                  alt="サザンシティホテル"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
                <div className="absolute top-3 left-3 bg-stone-900/80 backdrop-blur text-white px-2.5 py-1 rounded-full text-xs font-semibold">
                  第4位
                </div>
              </div>
              <div className="md:col-span-7 p-5 sm:p-6 flex flex-col justify-between space-y-4">
                <div>
                  <div className="inline-block px-2.5 py-0.5 rounded-full text-[11px] font-bold bg-cyan-50 text-cyan-800 border border-cyan-200 mb-2">
                    高知春野の自然に囲まれた天然温泉スパ＆シティリゾート
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold text-stone-900 leading-snug">
                    サザンシティホテル
                  </h3>
                  <div className="flex items-center gap-3 mt-2 text-xs text-stone-600">
                    <span className="flex items-center text-amber-500 font-bold text-sm">
                      ★ 4.38
                    </span>
                    <span>クチコミ 1,910件</span>
                    <span className="text-stone-400">|</span>
                    <span className="font-semibold text-cyan-900">税込 5,400円〜</span>
                  </div>

                  <p className="mt-3 text-xs sm:text-sm text-stone-600 leading-relaxed">
                    高知市南部・春野地区に位置し、天然温泉スパ施設「はるのの湯」を併設したリフレッシュホテル。仁淀川河口域やいの町方面へのアクセスが良く、冬のドライブ観光の拠点として高い人気を誇ります。自慢の大浴場には岩露天風呂や寝湯、薬湯、高温サウナなど多彩な浴槽が揃い、冬の冷えをしっかりと撃退。リーズナブルで広々とした洋室は長期滞在や一人旅にも適しており、快適なステイが楽しめます。
                  </p>

                  <ul className="mt-3 space-y-1 text-xs text-stone-600">
                    <li className="flex items-center gap-2"><span className="text-cyan-600 font-bold">✓</span> 春野の豊かな自然環境に建ち、高知市街と仁淀川の中間に位置</li>
                    <li className="flex items-center gap-2"><span className="text-cyan-600 font-bold">✓</span> 天然温泉「はるのの湯」直結！多彩な湯船と本格サウナ完備</li>
                    <li className="flex items-center gap-2"><span className="text-cyan-600 font-bold">✓</span> 広々とした客室と地元の新鮮野菜を取り入れた朝食バイキング</li>
                  </ul>

                  <div className="mt-3 p-3 bg-stone-50 rounded-lg border border-stone-200/60 text-xs text-stone-600 italic">
                    <p className="font-semibold text-[11px] text-stone-500 not-italic mb-0.5">宿泊者のクチコミ抜粋：</p>
                    「広く綺麗で大満足の空間広く綺麗で大満足です。」
                  </div>

                  <div className="mt-3 pt-3 border-t border-stone-100 text-[11px] text-stone-500 space-y-0.5">
                    <p>📍 高知県南国市明見933</p>
                    <p>🚆 高知市内より車で15分☆ 高知空港・南国インターチェンジより車で10分☆</p>
                  </div>
                </div>

                <div className="pt-2">
                  <a
                    href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F1807%2F1807.html"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-gradient-to-r from-cyan-700 to-cyan-800 hover:from-cyan-800 hover:to-cyan-900 text-white font-bold text-xs sm:text-sm shadow transition-all"
                  >
                    <span>楽天トラベルで空室・プラン・クチコミを見る</span>
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>
          </article>

          {/* 宿カード 5: 高知市国民宿舎桂浜荘 */}
          <article className="bg-white rounded-2xl border border-stone-200 shadow-sm overflow-hidden hover:shadow-md transition-shadow">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-0">
              <div className="md:col-span-5 relative min-h-[240px]">
                <img
                  src="https://img.travel.rakuten.co.jp/share/HOTEL/76826/76826.jpg"
                  alt="高知市国民宿舎桂浜荘"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
                <div className="absolute top-3 left-3 bg-stone-900/80 backdrop-blur text-white px-2.5 py-1 rounded-full text-xs font-semibold">
                  第5位
                </div>
              </div>
              <div className="md:col-span-7 p-5 sm:p-6 flex flex-col justify-between space-y-4">
                <div>
                  <div className="inline-block px-2.5 py-0.5 rounded-full text-[11px] font-bold bg-cyan-50 text-cyan-800 border border-cyan-200 mb-2">
                    桂浜の海を見下ろす高台・絶景の朝日に出逢う冬の国民宿舎
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold text-stone-900 leading-snug">
                    高知市国民宿舎桂浜荘
                  </h3>
                  <div className="flex items-center gap-3 mt-2 text-xs text-stone-600">
                    <span className="flex items-center text-amber-500 font-bold text-sm">
                      ★ 0.00
                    </span>
                    <span>クチコミ 116件</span>
                    <span className="text-stone-400">|</span>
                    <span className="font-semibold text-cyan-900">プランにより変動（要確認）</span>
                  </div>

                  <p className="mt-3 text-xs sm:text-sm text-stone-600 leading-relaxed">
                    坂本龍馬像で名高い名勝・桂浜の丘の上に建ち、雄大な太平洋を見晴らす絶景の宿。仁淀川河口からも近く、仁淀ブルー探訪と桂浜の海岸美を両方楽しむ欲張りな旅の拠点として愛されています。全室から海が見渡せ、冬の澄んだ大気の中で水平線から昇る朝日は息を呑むほどの美しさ。新春の初日の出スポットとしても絶大な人気を誇ります。夕食には本場高知の豪快な藁焼きカツオや冬の鮮魚が供され、南国土佐の活気あふれる夜を演出します。
                  </p>

                  <ul className="mt-3 space-y-1 text-xs text-stone-600">
                    <li className="flex items-center gap-2"><span className="text-cyan-600 font-bold">✓</span> 名勝・桂浜の断崖の上に位置し、太平洋の水平線を180度一望</li>
                    <li className="flex items-center gap-2"><span className="text-cyan-600 font-bold">✓</span> 全室オーシャンビュー！水平線から昇る感動的な初日の出スポット</li>
                    <li className="flex items-center gap-2"><span className="text-cyan-600 font-bold">✓</span> 高知名物カツオのタタキや皿鉢料理を堪能する太平洋の美食</li>
                  </ul>



                  <div className="mt-3 pt-3 border-t border-stone-100 text-[11px] text-stone-500 space-y-0.5">
                    <p>📍 高知県高知市浦戸830-25</p>
                    <p>🚆 ＪＲ高知駅より路線バスにて３５分/高知自動車道・高知ICより約30分（県道44号線経由）</p>
                  </div>
                </div>

                <div className="pt-2">
                  <a
                    href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F76826%2F76826.html"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-gradient-to-r from-cyan-700 to-cyan-800 hover:from-cyan-800 hover:to-cyan-900 text-white font-bold text-xs sm:text-sm shadow transition-all"
                  >
                    <span>楽天トラベルで空室・プラン・クチコミを見る</span>
                    <ExternalLink className="w-4 h-4" />
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
                  高知県の宿に実質2,000円で泊まる賢い方法
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
              冬の仁淀川・いの町・中津渓谷旅行でよくある質問（FAQ）
            </h2>

            <div className="space-y-4">
              <details className="group border border-stone-200 rounded-xl p-4 [&_summary::-webkit-details-marker]:hidden bg-stone-50/50">
                <summary className="flex items-center justify-between cursor-pointer font-bold text-stone-900 text-xs sm:text-sm">
                  <span>Q. なぜ冬が「仁淀ブルー」の一番のおすすめシーズンなのですか？</span>
                  <span className="transition group-open:-rotate-180 text-stone-400">▼</span>
                </summary>
                <p className="mt-3 text-xs sm:text-sm text-stone-600 leading-relaxed border-t border-stone-200/60 pt-3">
                  夏期は夕立や台風、川遊びの人の影響で微細な砂が舞い上がりやすいですが、11月〜1月の冬は降水量が少なく天候が安定するため、川の水が極限まで澄み切ります。さらに冬の澄んだ太陽光が水中に深く届き、不純物のない水分子が青い光だけを反射するため、年間で最も深く鮮やかなコバルトブルーが観察できるのです。
                </p>
              </details>
              <details className="group border border-stone-200 rounded-xl p-4 [&_summary::-webkit-details-marker]:hidden bg-stone-50/50">
                <summary className="flex items-center justify-between cursor-pointer font-bold text-stone-900 text-xs sm:text-sm">
                  <span>Q. 「中津渓谷」の散策は初心者や冬でも安全に歩けますか？</span>
                  <span className="transition group-open:-rotate-180 text-stone-400">▼</span>
                </summary>
                <p className="mt-3 text-xs sm:text-sm text-stone-600 leading-relaxed border-t border-stone-200/60 pt-3">
                  はい、中津渓谷には川沿いに約2.3kmの整備された遊歩道があり、名所「雨竜の滝」までは片道約20分ほどで歩くことができます。アップダウンは緩やかですが、冬場は水しぶきで濡れた岩場や橋の上が滑りやすくなっている場合があるため、滑りにくい靴を履き、足元に十分注意して歩行してください。
                </p>
              </details>
              <details className="group border border-stone-200 rounded-xl p-4 [&_summary::-webkit-details-marker]:hidden bg-stone-50/50">
                <summary className="flex items-center justify-between cursor-pointer font-bold text-stone-900 text-xs sm:text-sm">
                  <span>Q. 幻の和牛と呼ばれる「土佐あかうし」の特徴は何ですか？</span>
                  <span className="transition group-open:-rotate-180 text-stone-400">▼</span>
                </summary>
                <p className="mt-3 text-xs sm:text-sm text-stone-600 leading-relaxed border-t border-stone-200/60 pt-3">
                  土佐あかうしは高知県内のみで生産される褐毛和種で、日本の肉用牛全体のわずか0.1%程度しか流通しない希少なブランド牛です。一般的な黒毛和牛に比べてサシが多すぎず、アミノ酸を豊富に含んだ赤身の肉汁と旨味が非常に強いのが特徴。冬のすき焼きやしゃぶしゃぶで食べると、脂っこさが全くなくいくらでも食べられる上品な美味しさです。
                </p>
              </details>
            </div>
          </div>
        </section>

        {/* 内部リンク・関連特集セクション */}
        <section className="max-w-4xl mx-auto px-4 mb-12">
          <div className="bg-stone-100 rounded-2xl p-6 sm:p-8 border border-stone-200 space-y-4">
            <h3 className="text-base sm:text-lg font-bold text-stone-900">あわせて読みたい高知県＆冬の厳選温泉特集</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              <Link href="/prefectures/kochi" className="p-3 bg-white rounded-xl border border-stone-200 text-xs font-semibold text-stone-800 hover:text-cyan-700 hover:border-cyan-300 transition flex items-center justify-between">
                <span>高知県のおすすめ観光名所＆温泉宿一覧</span>
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
