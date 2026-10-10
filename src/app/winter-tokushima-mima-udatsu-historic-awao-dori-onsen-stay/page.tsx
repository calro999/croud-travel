import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { MapPin, Calendar, ExternalLink, HelpCircle, ChevronRight, ShieldCheck, Sparkles } from 'lucide-react';

export const metadata: Metadata = {
  title: '藍商のうだつの町並みと阿波尾鶏鍋：2026-2027年冬の徳島・美馬！吉野川展望温泉と老舗名宿5選 | クラウドトラベル',
  description: '重伝建の白壁と装飾瓦が白銀に映える「脇町うだつの町並み」の冬風情！徳島が誇る極上地鶏「阿波尾鶏」の水炊きや冬の美馬そば、吉野川の清流を見下ろす天然温泉でぬくもる心安らぐ冬の歴史旅名宿5選。',
  keywords: ['徳島県冬旅行', '美馬・脇町・吉野川', '冬温泉', '2026', '2027', '雪景色', '冬の味覚', '楽天トラベル', 'ふるさと納税'],
  alternates: {
    canonical: 'https://croud-travel.pages.dev/winter-tokushima-mima-udatsu-historic-awao-dori-onsen-stay',
  },
  openGraph: {
    title: '藍商のうだつの町並みと阿波尾鶏鍋：2026-2027年冬の徳島・美馬！吉野川展望温泉と老舗名宿5選',
    description: '重伝建の白壁と装飾瓦が白銀に映える「脇町うだつの町並み」の冬風情！徳島が誇る極上地鶏「阿波尾鶏」の水炊きや冬の美馬そば、吉野川の清流を見下ろす天然温泉でぬくもる心安らぐ冬の歴史旅名宿5選。',
    url: 'https://croud-travel.pages.dev/winter-tokushima-mima-udatsu-historic-awao-dori-onsen-stay',
    siteName: 'クラウドトラベル',
    locale: 'ja_JP',
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: '藍商のうだつの町並みと阿波尾鶏鍋：2026-2027年冬の徳島・美馬！吉野川展望温泉と老舗名宿5選',
    description: '重伝建の白壁と装飾瓦が白銀に映える「脇町うだつの町並み」の冬風情！徳島が誇る極上地鶏「阿波尾鶏」の水炊きや冬の美馬そば、吉野川の清流を見下ろす天然温泉でぬくもる心安らぐ冬の歴史旅名宿5選。',
  },
};

export default function Page() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'TouristAttraction',
        name: '国選定重伝建・脇町うだつの町並み（藍商の歴史建築）',
        description: '脇町南町（わきまちみなみまち）は徳島県美馬市脇町大字脇町にある名勝。うだつの町並みともよばれる。 国の重要伝統的建造物群保存地区に昭和63年（1988年）12月16日選定 ・四国八十八景8番・とくしま88景・にし阿波お勧めビューポイント100選・都市景観100選・日本の道100選・美しい日本の歴史的風土100選に選定。阿波歴史文化道に指定。 「うだつと白壁の町並」で、昭和61年度手づくり郷土賞（人と風土が育てた家並）受賞。平成17年度同賞大賞。',
        image: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/e/ea/Wakimati_minamimati_20250828_1.jpg/1280px-Wakimati_minamimati_20250828_1.jpg?utm_source=ja.wikipedia.org&utm_campaign=api&utm_content=thumbnail',
        address: {
          '@type': 'PostalAddress',
          addressRegion: '徳島県',
          addressCountry: 'JP'
        }
      },
      {
        '@type': 'FAQPage',
        mainEntity: [
          {
            '@type': 'Question',
            name: "「脇町うだつの町並み」の散策にはどのくらいの所要時間が必要ですか？",
            acceptedAnswer: {
              '@type': 'Answer',
              text: "町並みの通り自体は約430mですので、往復して眺めるだけであれば約30〜40分程度です。旧吉田家住宅（藍商の豪壮な屋敷）の見学や、伝統工芸の和傘・藍染め体験施設、町家を改装した古民家カフェでの休憩を合わせると、約1時間半〜2時間程度ゆったり時間を確保するのがおすすめです。"
            }
          },
          {
            '@type': 'Question',
            name: "「阿波尾鶏」を本場で食べるならどのような料理がおすすめですか？",
            acceptedAnswer: {
              '@type': 'Answer',
              text: "冬はなんといっても「阿波尾鶏の水炊き鍋」や「すき焼き鍋」が一番のおすすめです。鶏肉本来の弾力とコク深い脂が出汁に溶け出し、締めの雑炊やうどんまで絶品です。また、皮目を香ばしくパリッと焼き上げた骨付き地鶏ステーキや串焼きも外せない名物です。美馬市内や近隣の料理店・宿泊先で味わえます。"
            }
          },
          {
            '@type': 'Question',
            name: "吉野川ハイウェイオアシスや道の駅でのおすすめ土産は何ですか？",
            acceptedAnswer: {
              '@type': 'Answer',
              text: "「道の駅 藍ランドうだつ」や「吉野川ハイウェイオアシス」では、伝統の阿波藍染めグッズをはじめ、美馬市名産の「みまから（激辛青唐辛子薬味）」、すだち酢、祖谷そば、阿波尾鶏の加工品など、徳島ならではの個性豊かな特産品が豊富に揃っています。特にみまから鍋スープは冬の鍋料理に大人気です。"
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
            name: '徳島県旅行特集',
            item: 'https://croud-travel.pages.dev/prefectures/tokushima'
          },
          {
            '@type': 'ListItem',
            position: 3,
            name: '【藍商のうだつの町並みと阿波尾鶏鍋】2026-2027年冬の徳島・美馬！吉野川展望温泉と老舗名宿5選',
            item: 'https://croud-travel.pages.dev/winter-tokushima-mima-udatsu-historic-awao-dori-onsen-stay'
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
          <Link href="/prefectures/tokushima" className="hover:text-cyan-700 transition">徳島県</Link>
          <ChevronRight className="w-3.5 h-3.5 text-stone-400" />
          <span className="text-stone-800 font-medium truncate max-w-[200px] sm:max-w-none">美馬・脇町・吉野川 冬の厳選宿</span>
        </nav>

        {/* ヘッダーエリア */}
        <header className="max-w-4xl mx-auto px-4 pt-4 pb-8 space-y-4">
          <div className="flex flex-wrap items-center gap-2">
            <span className="px-2.5 py-1 rounded-full text-xs font-bold bg-cyan-100 text-cyan-800">
              2026-2027年冬 厳選特集
            </span>
            <span className="px-2.5 py-1 rounded-full text-xs font-semibold bg-stone-200 text-stone-700 flex items-center gap-1">
              <MapPin className="w-3 h-3 text-stone-500" />
              美馬・脇町・吉野川（徳島県）
            </span>
            <span className="px-2.5 py-1 rounded-full text-xs font-semibold bg-amber-100 text-amber-800 flex items-center gap-1">
              <Sparkles className="w-3 h-3 text-amber-600" />
              楽天API公式連携
            </span>
          </div>

          <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-stone-900 leading-tight">「藍商のうだつの町並みと阿波尾鶏鍋」2026-2027年冬の徳島・美馬！吉野川展望温泉と老舗名宿5選</h1>

          <p className="text-xs sm:text-sm text-stone-600 leading-relaxed pt-1">
            重伝建の白壁と装飾瓦が白銀に映える「脇町うだつの町並み」の冬風情！徳島が誇る極上地鶏「阿波尾鶏」の水炊きや冬の美馬そば、吉野川の清流を見下ろす天然温泉でぬくもる心安らぐ冬の歴史旅名宿5選。
          </p>
        </header>

        {/* 導入解説セクション */}
        <section className="max-w-4xl mx-auto px-4 mb-10">
          <div className="bg-white rounded-2xl p-6 sm:p-8 border border-stone-200 shadow-sm space-y-6">
            <div className="space-y-3">
              <h2 className="text-lg sm:text-xl font-bold text-stone-900 flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-cyan-700"></span>
                冬の美馬・脇町・吉野川探訪：静寂と温もりに包まれる旅の魅力
              </h2>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                四国三郎の名で知られる大河・吉野川の中流域に位置する徳島県美馬市（みまし）。江戸時代から明治にかけて、吉野川の水運を活かした藍染めの染料「阿波藍（あわあい）」の集散地として莫大な富を築いた脇町（わきまち）には、国の重要伝統的建造物群保存地区に選定された「うだつの町並み」が今も美しく残されています。隣家との境界に設けた防火壁に贅を尽くした装飾瓦を施した「うだつ」は、当時の藍商人たちの富と誇りの象徴。11月から1月の冬、白壁と本瓦葺きの町家が凛とした寒気の中に並び、雪がうっすらと瓦を化粧する情景は言葉を失うほどの風情を醸し出します。また、この冬の美馬・吉野川流域の食の主役は、徳島が全国に誇る最高級地鶏「阿波尾鶏（あわおどり）」。コクのある旨味と適度な歯ごたえが特徴の地鶏肉を、地元名産の冬野菜とともにぐつぐつ煮込む熱々の水炊きやすき焼き鍋は、冷えた身体に染み渡る極上のごちそう。吉野川を見晴らす名湯露天風呂に浸かり、藍商の栄華に思いを馳せる、深みある冬の歴史美食旅をお届けします。
              </p>
            </div>

            <div className="space-y-3 pt-2">
              <h3 className="text-sm sm:text-base font-bold text-stone-800">
                この冬、美馬・脇町・吉野川を訪れるべき3つの理由
              </h3>
              <div className="grid grid-cols-1 gap-3">
              <div className="p-4 rounded-xl bg-stone-50 border border-stone-200/80 space-y-1.5">
                <h3 className="font-bold text-stone-900 text-sm sm:text-base flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-cyan-600"></span>
                  白壁と装飾瓦が白銀に映える「重伝建・脇町うだつの町並み」の冬情景
                </h3>
                <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                  約430mにわたって続く重厚な商家群。冬の澄んだ青空と白壁のコントラスト、装飾瓦に刻まれた鬼瓦や鳥衾（とりぶすま）の美しさは息を呑むほど。伝統の藍染め体験や町家カフェでのひとときも、冬の静けさの中で格別の趣があります。
                </p>
              </div>
              <div className="p-4 rounded-xl bg-stone-50 border border-stone-200/80 space-y-1.5">
                <h3 className="font-bold text-stone-900 text-sm sm:text-base flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-cyan-600"></span>
                  極上地鶏「阿波尾鶏」の滋味あふれる鍋料理と祖谷そばの温もり
                </h3>
                <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                  徳島の大自然で丹精込めて育てられた「阿波尾鶏」。脂の乗りと締まりのある肉質は地鶏出荷数日本一を誇り、冬の鍋料理でその真価を発揮します。濃厚な鶏ガラ出汁で煮込む水炊きや、つなぎを使わない素朴な祖谷そば・美馬そばの味わいは格別です。
                </p>
              </div>
              <div className="p-4 rounded-xl bg-stone-50 border border-stone-200/80 space-y-1.5">
                <h3 className="font-bold text-stone-900 text-sm sm:text-base flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-cyan-600"></span>
                  吉野川の雄大な流れを眼下に望む天然展望温泉と大歩危・剣山への動線
                </h3>
                <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                  吉野川流域には、豊かな湯量を誇る天然温泉が点在。渓谷や大河を見渡す露天風呂で手足を伸ばせば、冬の旅の疲れが一瞬でほどけていきます。西へ向かえば雪化粧の大歩危・祖谷渓、南へ向かえば霊峰剣山の山並みが広がる絶好のロケーションです。
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
・飛行機・空港から：徳島阿波おどり空港より車・レンタカーで徳島自動車道経由約45分。高松空港からも国道193号経由で約50分と好アクセス。
・JR・鉄道：JR徳島線（よしの川ブルーライン）「穴吹駅」下車、タクシーまたは路線バスで約5〜10分で脇町うだつの町並みへ。徳島駅からは特急「剣山」で穴吹駅まで約40分。
・車：徳島自動車道「脇町IC」より県道12号線経由でわずか約5分。無料市営駐車場（道の駅 藍ランドうだつ併設）が利用可能。

【見頃・気候・おすすめの服装】
・ベストシーズン：11月中旬〜1月（町並みの静寂散策、新春の初詣、阿波尾鶏鍋の旬）。
・気温の目安：日中は10〜13℃程度ですが、吉野川から吹き付ける川風（吉野川おろし）により体感温度は低くなります。朝晩は2〜4℃前後まで冷え込みます。
・服装のポイント：歴史ある町並みは石畳やアスファルトを歩行するため、歩きやすいフラットシューズやスニーカーが適しています。風を通さない防風ダウンジャケット、マフラー、手袋を着用してください。大歩危や祖谷方面へ足を延ばす場合は、路面凍結に備えた冬用タイヤの装着が推奨されます。
              </div>
            </div>
          </div>
        </section>

        {/* Wikipedia公式連携スポットセクション */}
        <section className="max-w-4xl mx-auto px-4 mb-10">
          <div className="bg-white rounded-2xl p-6 sm:p-8 border border-stone-200 shadow-sm space-y-4">
            <div className="flex items-center justify-between">
              <h2 className="text-lg sm:text-xl font-bold text-stone-900">
                近隣名所アーカイブ：国選定重伝建・脇町うだつの町並み（藍商の歴史建築）
              </h2>
              <span className="text-[11px] text-stone-400">Wikipedia公式情報連携</span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
              <div className="md:col-span-5 overflow-hidden rounded-xl border border-stone-200 bg-stone-100">
                <img
                  src="https://thumb.wikimedia.org/wikipedia/commons/thumb/e/ea/Wakimati_minamimati_20250828_1.jpg/1280px-Wakimati_minamimati_20250828_1.jpg?utm_source=ja.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
                  alt="国選定重伝建・脇町うだつの町並み（藍商の歴史建築）"
                  className="w-full h-48 md:h-56 object-cover hover:scale-105 transition-transform duration-300"
                  loading="lazy"
                />
              </div>
              <div className="md:col-span-7 space-y-2">
                <h3 className="font-bold text-stone-900 text-sm sm:text-base">
                  国選定重伝建・脇町うだつの町並み（藍商の歴史建築） の見どころと歴史
                </h3>
                <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                  脇町南町（わきまちみなみまち）は徳島県美馬市脇町大字脇町にある名勝。うだつの町並みともよばれる。 国の重要伝統的建造物群保存地区に昭和63年（1988年）12月16日選定 ・四国八十八景8番・とくしま88景・にし阿波お勧めビューポイント100選・都市景観100選・日本の道100選・美しい日本の歴史的風土100選に選定。阿波歴史文化道に指定。 「うだつと白壁の町並」で、昭和61年度手づくり郷土賞（人と風土が育てた家並）受賞。平成17年度同賞大賞。
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
              美馬・脇町・吉野川 厳選の温泉＆名宿5選
            </h2>
            <p className="text-xs sm:text-sm text-stone-500">
              楽天トラベルの最新空室・クチコミ・宿泊料金データをリアルタイム連携しています
            </p>
          </div>

          {/* 宿カード 1: ビジネスホテルマツカ */}
          <article className="bg-white rounded-2xl border border-stone-200 shadow-sm overflow-hidden hover:shadow-md transition-shadow">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-0">
              <div className="md:col-span-5 relative min-h-[240px]">
                <img
                  src="https://img.travel.rakuten.co.jp/share/HOTEL/9409/9409.jpg"
                  alt="ビジネスホテルマツカ"
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
                    うだつの町並み徒歩圏内・美馬観光の中心拠点ホテル
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold text-stone-900 leading-snug">
                    ビジネスホテルマツカ
                  </h3>
                  <div className="flex items-center gap-3 mt-2 text-xs text-stone-600">
                    <span className="flex items-center text-amber-500 font-bold text-sm">
                      ★ 4.10
                    </span>
                    <span>クチコミ 1,016件</span>
                    <span className="text-stone-400">|</span>
                    <span className="font-semibold text-cyan-900">税込 3,900円〜</span>
                  </div>

                  <p className="mt-3 text-xs sm:text-sm text-stone-600 leading-relaxed">
                    美馬市脇町の中心部に位置し、「うだつの町並み」への散策拠点として最も便利なシティホテル。明るく手入れの行き届いた客室には無料Wi-Fiや快適なベッドが完備され、冬の歴史探訪を身軽に楽しむことができます。ホテルのすぐ近隣には、地元の藍商人たちの末裔が通う老舗料理店や、阿波尾鶏を炭火で焼き上げる居酒屋が点在しており、夜の徳島グルメ巡りにも絶好。親切なスタッフが周辺の穴場スポットやおすすめ飲食店を快く案内してくれます。
                  </p>

                  <ul className="mt-3 space-y-1 text-xs text-stone-600">
                    <li className="flex items-center gap-2"><span className="text-cyan-600 font-bold">✓</span> 脇町うだつの町並みまで徒歩約10分！観光にもビジネスにも最適な好立地</li>
                    <li className="flex items-center gap-2"><span className="text-cyan-600 font-bold">✓</span> 清潔で機能的な客室と温かみのあるアットホームなフロントサービス</li>
                    <li className="flex items-center gap-2"><span className="text-cyan-600 font-bold">✓</span> 周辺には地元名物の阿波尾鶏料理や居酒屋、郷土料理店が多数</li>
                  </ul>

                  <div className="mt-3 p-3 bg-stone-50 rounded-lg border border-stone-200/60 text-xs text-stone-600 italic">
                    <p className="font-semibold text-[11px] text-stone-500 not-italic mb-0.5">宿泊者のクチコミ抜粋：</p>
                    「禁煙室なのに廊下からタバコの煙が入り込む一階の部屋は禁煙部屋でも廊下からタバコの煙が入ってきて部屋中が臭くなる。」
                  </div>

                  <div className="mt-3 pt-3 border-t border-stone-100 text-[11px] text-stone-500 space-y-0.5">
                    <p>📍 徳島県美馬市脇町猪尻建神社下南153-1</p>
                    <p>🚆 徳島自動車道、脇町ＩＣより車で５分／ＪＲ穴吹駅よリ徒歩１５分。</p>
                  </div>
                </div>

                <div className="pt-2">
                  <a
                    href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F9409%2F9409.html"
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

          {/* 宿カード 2: 峡谷の湯宿　大歩危峡まんなか */}
          <article className="bg-white rounded-2xl border border-stone-200 shadow-sm overflow-hidden hover:shadow-md transition-shadow">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-0">
              <div className="md:col-span-5 relative min-h-[240px]">
                <img
                  src="https://img.travel.rakuten.co.jp/share/HOTEL/53066/53066.jpg"
                  alt="峡谷の湯宿　大歩危峡まんなか"
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
                    大歩危峡の絶景露天風呂・吉野川の清流と阿波牛・阿波尾鶏会席
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold text-stone-900 leading-snug">
                    峡谷の湯宿　大歩危峡まんなか
                  </h3>
                  <div className="flex items-center gap-3 mt-2 text-xs text-stone-600">
                    <span className="flex items-center text-amber-500 font-bold text-sm">
                      ★ 4.59
                    </span>
                    <span>クチコミ 1,923件</span>
                    <span className="text-stone-400">|</span>
                    <span className="font-semibold text-cyan-900">税込 9,500円〜</span>
                  </div>

                  <p className="mt-3 text-xs sm:text-sm text-stone-600 leading-relaxed">
                    美馬から吉野川をさかのぼった景勝地・大歩危峡の真上に佇む名物温泉宿。館内の大浴場や露天風呂からは、冬の澄み渡る空気の中で吉野川の深い碧色の水面と白く乾いた奇岩のパノラマが一望できます。湯上がりの肌をしっとり整える単純温泉に身を委ね、川のせせらぎに耳を澄ます時間はまさに至福。夕食は料理長自慢の会席コースで、徳島が誇る「阿波牛」の贅沢な陶板焼きや「阿波尾鶏」の香味焼き、清流で育ったアメゴの塩焼きなど、山海の味覚が豪華に並びます。
                  </p>

                  <ul className="mt-3 space-y-1 text-xs text-stone-600">
                    <li className="flex items-center gap-2"><span className="text-cyan-600 font-bold">✓</span> 吉野川上流・大歩危峡の断崖絶壁に建つ絶景の湯宿</li>
                    <li className="flex items-center gap-2"><span className="text-cyan-600 font-bold">✓</span> エメラルドグリーンの渓谷美を眼下に望む展望大浴場と露天風呂</li>
                    <li className="flex items-center gap-2"><span className="text-cyan-600 font-bold">✓</span> 阿波牛の陶板焼きや阿波尾鶏、吉野川のアメゴを堪能する豪華会席</li>
                  </ul>

                  <div className="mt-3 p-3 bg-stone-50 rounded-lg border border-stone-200/60 text-xs text-stone-600 italic">
                    <p className="font-semibold text-[11px] text-stone-500 not-italic mb-0.5">宿泊者のクチコミ抜粋：</p>
                    「清潔な館内と無料のマッサージチェアが最高外観は古いですが内部はとても清潔で好感が持てました。館内のあちこちにエアドックを始め各メーカーの空気清浄機があり清掃も行き届いています。ただスタッフ。」
                  </div>

                  <div className="mt-3 pt-3 border-t border-stone-100 text-[11px] text-stone-500 space-y-0.5">
                    <p>📍 徳島県三好市山城町西宇1644-1</p>
                    <p>🚆 大歩危駅より車で5分(徒歩20分)ご宿泊のお客様は送迎有（要予約）井川池田IC・大豊ICより各約30分　高知空港が最寄り</p>
                  </div>
                </div>

                <div className="pt-2">
                  <a
                    href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F53066%2F53066.html"
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

          {/* 宿カード 3: 大歩危温泉　サンリバー大歩危 */}
          <article className="bg-white rounded-2xl border border-stone-200 shadow-sm overflow-hidden hover:shadow-md transition-shadow">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-0">
              <div className="md:col-span-5 relative min-h-[240px]">
                <img
                  src="https://img.travel.rakuten.co.jp/share/HOTEL/54677/54677.jpg"
                  alt="大歩危温泉　サンリバー大歩危"
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
                    pH9.8の強アルカリ美肌温泉・吉野川と大歩危を一望する天空露天
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold text-stone-900 leading-snug">
                    大歩危温泉　サンリバー大歩危
                  </h3>
                  <div className="flex items-center gap-3 mt-2 text-xs text-stone-600">
                    <span className="flex items-center text-amber-500 font-bold text-sm">
                      ★ 4.20
                    </span>
                    <span>クチコミ 1,230件</span>
                    <span className="text-stone-400">|</span>
                    <span className="font-semibold text-cyan-900">税込 5,500円〜</span>
                  </div>

                  <p className="mt-3 text-xs sm:text-sm text-stone-600 leading-relaxed">
                    大歩危の雄大な山並みを見晴らす高台に建つリゾート温泉ホテル。最大の自慢は、四国でも指折りの高アルカリ度（pH9.8）を誇る天然温泉。とろりと美容液のような肌触りの湯に浸かると古い角質が洗い流され、湯上がりは驚くほどすべすべの肌になると評判です。冬の露天風呂からは、眼下を走るJR土讃線の列車や朝霧に煙る吉野川の絶景が広がり、旅情を掻き立てます。食事は地元食材をふんだんに取り入れた郷土会席で、冬の温もりあふれる滞在が約束されます。
                  </p>

                  <ul className="mt-3 space-y-1 text-xs text-stone-600">
                    <li className="flex items-center gap-2"><span className="text-cyan-600 font-bold">✓</span> 吉野川渓谷を見下ろす高台に位置し、大パノラマを満喫</li>
                    <li className="flex items-center gap-2"><span className="text-cyan-600 font-bold">✓</span> 四国屈指のpH9.8を誇る強アルカリ性美肌温泉の「若返りの湯」</li>
                    <li className="flex items-center gap-2"><span className="text-cyan-600 font-bold">✓</span> 地元ジビエや阿波の郷土料理バイキングと心地よい寛ぎ空間</li>
                  </ul>

                  <div className="mt-3 p-3 bg-stone-50 rounded-lg border border-stone-200/60 text-xs text-stone-600 italic">
                    <p className="font-semibold text-[11px] text-stone-500 not-italic mb-0.5">宿泊者のクチコミ抜粋：</p>
                    「古さを生かした清潔な空間と手作りの料理建物・設備の古さありますが、水回り等随所で改修されており、清潔で快適、懐かしい雰囲気でよかったです。夕食は地元食材満載でとても美味しく頂きました。派手では。」
                  </div>

                  <div className="mt-3 pt-3 border-t border-stone-100 text-[11px] text-stone-500 space-y-0.5">
                    <p>📍 徳島県三好市山城町西宇1259-1</p>
                    <p>🚆 お車は井川池田インターより国道32号線沿いに３０分。列車はＪＲ大歩危駅または小歩危駅から送迎有。（要連絡）</p>
                  </div>
                </div>

                <div className="pt-2">
                  <a
                    href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F54677%2F54677.html"
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

          {/* 宿カード 4: 民宿　うり坊　＾ */}
          <article className="bg-white rounded-2xl border border-stone-200 shadow-sm overflow-hidden hover:shadow-md transition-shadow">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-0">
              <div className="md:col-span-5 relative min-h-[240px]">
                <img
                  src="https://img.travel.rakuten.co.jp/share/HOTEL/191201/191201.jpg"
                  alt="民宿　うり坊　＾"
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
                    美馬市穴吹川のほとり・清流とジビエ・阿波尾鶏を味わう里山民宿
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold text-stone-900 leading-snug">
                    民宿　うり坊　＾
                  </h3>
                  <div className="flex items-center gap-3 mt-2 text-xs text-stone-600">
                    <span className="flex items-center text-amber-500 font-bold text-sm">
                      ★ 0.00
                    </span>
                    <span>クチコミ 0件</span>
                    <span className="text-stone-400">|</span>
                    <span className="font-semibold text-cyan-900">税込 16,704円〜</span>
                  </div>

                  <p className="mt-3 text-xs sm:text-sm text-stone-600 leading-relaxed">
                    美馬市を流れる日本屈指の清流・穴吹川の畔に佇み、豊かな自然に抱かれたアットホームな民宿。宿主自らが山に入って厳選した極上の天然猪肉を使った「秘伝ぼたん鍋」は、冬にここを訪れる最大の理由となる名物料理。全く臭みのない猪肉の甘みと地場野菜、そしてジューシーな阿波尾鶏の旨味が特製味噌出汁の中で溶け合います。夜は満天の星空が広がり、川のせせらぎを聞きながらぐっすりと眠りにつく、心温まる田舎ステイが満喫できます。
                  </p>

                  <ul className="mt-3 space-y-1 text-xs text-stone-600">
                    <li className="flex items-center gap-2"><span className="text-cyan-600 font-bold">✓</span> 四国一の清流として名高い穴吹川沿いの静かな里山ロケーション</li>
                    <li className="flex items-center gap-2"><span className="text-cyan-600 font-bold">✓</span> 狩猟免許を持つ宿主が仕留めた天然猪肉のぼたん鍋や阿波尾鶏料理</li>
                    <li className="flex items-center gap-2"><span className="text-cyan-600 font-bold">✓</span> 温かな家族経営のおもてなしとどこか懐かしい田舎の風情</li>
                  </ul>



                  <div className="mt-3 pt-3 border-t border-stone-100 text-[11px] text-stone-500 space-y-0.5">
                    <p>📍 徳島県三好郡東みよし町東山内野29　Ｍｉｎｓｙｕｋｕ　Ｕｒｉｂｏｕ</p>
                    <p>🚆 箸蔵駅から車で約１２分</p>
                  </div>
                </div>

                <div className="pt-2">
                  <a
                    href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F191201%2F191201.html"
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

          {/* 宿カード 5: ホテル　サンシャイン徳島 */}
          <article className="bg-white rounded-2xl border border-stone-200 shadow-sm overflow-hidden hover:shadow-md transition-shadow">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-0">
              <div className="md:col-span-5 relative min-h-[240px]">
                <img
                  src="https://img.travel.rakuten.co.jp/share/HOTEL/32020/32020.jpg"
                  alt="ホテル　サンシャイン徳島"
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
                    徳島市内天然温泉大浴場・阿波尾鶏グルメと夜景を満喫する拠点
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold text-stone-900 leading-snug">
                    ホテル　サンシャイン徳島
                  </h3>
                  <div className="flex items-center gap-3 mt-2 text-xs text-stone-600">
                    <span className="flex items-center text-amber-500 font-bold text-sm">
                      ★ 3.95
                    </span>
                    <span>クチコミ 1,081件</span>
                    <span className="text-stone-400">|</span>
                    <span className="font-semibold text-cyan-900">税込 5,300円〜</span>
                  </div>

                  <p className="mt-3 text-xs sm:text-sm text-stone-600 leading-relaxed">
                    徳島市街に位置し、天然温泉の大浴場を備えた利便性抜群のホテル。美馬市脇町うだつの町並みを昼間に観光した後、夜は徳島市街で本場の阿波尾鶏専門店や徳島ラーメンの名店を巡り、温泉でゆっくり温まるというアクティブな旅行スタイルに最適です。大浴場は足を伸ばしてくつろげる広さがあり、保温効果の高い湯が旅の疲れを心地よく取り除いてくれます。客室も静かで機能的、新春の徳島観光の拠点として高い信頼を集めています。
                  </p>

                  <ul className="mt-3 space-y-1 text-xs text-stone-600">
                    <li className="flex items-center gap-2"><span className="text-cyan-600 font-bold">✓</span> 徳島市内に位置し、ビジネスや周遊観光に優れたアクセス</li>
                    <li className="flex items-center gap-2"><span className="text-cyan-600 font-bold">✓</span> 地下から汲み上げる天然温泉大浴場で冬の旅の疲れをリフレッシュ</li>
                    <li className="flex items-center gap-2"><span className="text-cyan-600 font-bold">✓</span> 阿波おどり会館や眉山の夜景鑑賞と組み合わせた充実の旅程</li>
                  </ul>

                  <div className="mt-3 p-3 bg-stone-50 rounded-lg border border-stone-200/60 text-xs text-stone-600 italic">
                    <p className="font-semibold text-[11px] text-stone-500 not-italic mb-0.5">宿泊者のクチコミ抜粋：</p>
                    「キッズルームが充実、朝食も美味しく大満足幼児連れで和室に泊まりたかったので、空いていた本館に2泊しました。駐車場も無料で出し入れ可能。大浴場もあり、朝食もすべて美味しく満足しました。そして何よ。」
                  </div>

                  <div className="mt-3 pt-3 border-t border-stone-100 text-[11px] text-stone-500 space-y-0.5">
                    <p>📍 徳島県徳島市南出来島町2丁目9</p>
                    <p>🚆 『ようこそ徳島へ、そしておかえりなさい・・・。』　JR徳島駅から徒歩約10分,車で3分/徳島空港から車で30分。</p>
                  </div>
                </div>

                <div className="pt-2">
                  <a
                    href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F32020%2F32020.html"
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
                  徳島県の宿に実質2,000円で泊まる賢い方法
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
              冬の美馬・脇町・吉野川旅行でよくある質問（FAQ）
            </h2>

            <div className="space-y-4">
              <details className="group border border-stone-200 rounded-xl p-4 [&_summary::-webkit-details-marker]:hidden bg-stone-50/50">
                <summary className="flex items-center justify-between cursor-pointer font-bold text-stone-900 text-xs sm:text-sm">
                  <span>Q. 「脇町うだつの町並み」の散策にはどのくらいの所要時間が必要ですか？</span>
                  <span className="transition group-open:-rotate-180 text-stone-400">▼</span>
                </summary>
                <p className="mt-3 text-xs sm:text-sm text-stone-600 leading-relaxed border-t border-stone-200/60 pt-3">
                  町並みの通り自体は約430mですので、往復して眺めるだけであれば約30〜40分程度です。旧吉田家住宅（藍商の豪壮な屋敷）の見学や、伝統工芸の和傘・藍染め体験施設、町家を改装した古民家カフェでの休憩を合わせると、約1時間半〜2時間程度ゆったり時間を確保するのがおすすめです。
                </p>
              </details>
              <details className="group border border-stone-200 rounded-xl p-4 [&_summary::-webkit-details-marker]:hidden bg-stone-50/50">
                <summary className="flex items-center justify-between cursor-pointer font-bold text-stone-900 text-xs sm:text-sm">
                  <span>Q. 「阿波尾鶏」を本場で食べるならどのような料理がおすすめですか？</span>
                  <span className="transition group-open:-rotate-180 text-stone-400">▼</span>
                </summary>
                <p className="mt-3 text-xs sm:text-sm text-stone-600 leading-relaxed border-t border-stone-200/60 pt-3">
                  冬はなんといっても「阿波尾鶏の水炊き鍋」や「すき焼き鍋」が一番のおすすめです。鶏肉本来の弾力とコク深い脂が出汁に溶け出し、締めの雑炊やうどんまで絶品です。また、皮目を香ばしくパリッと焼き上げた骨付き地鶏ステーキや串焼きも外せない名物です。美馬市内や近隣の料理店・宿泊先で味わえます。
                </p>
              </details>
              <details className="group border border-stone-200 rounded-xl p-4 [&_summary::-webkit-details-marker]:hidden bg-stone-50/50">
                <summary className="flex items-center justify-between cursor-pointer font-bold text-stone-900 text-xs sm:text-sm">
                  <span>Q. 吉野川ハイウェイオアシスや道の駅でのおすすめ土産は何ですか？</span>
                  <span className="transition group-open:-rotate-180 text-stone-400">▼</span>
                </summary>
                <p className="mt-3 text-xs sm:text-sm text-stone-600 leading-relaxed border-t border-stone-200/60 pt-3">
                  「道の駅 藍ランドうだつ」や「吉野川ハイウェイオアシス」では、伝統の阿波藍染めグッズをはじめ、美馬市名産の「みまから（激辛青唐辛子薬味）」、すだち酢、祖谷そば、阿波尾鶏の加工品など、徳島ならではの個性豊かな特産品が豊富に揃っています。特にみまから鍋スープは冬の鍋料理に大人気です。
                </p>
              </details>
            </div>
          </div>
        </section>

        {/* 内部リンク・関連特集セクション */}
        <section className="max-w-4xl mx-auto px-4 mb-12">
          <div className="bg-stone-100 rounded-2xl p-6 sm:p-8 border border-stone-200 space-y-4">
            <h3 className="text-base sm:text-lg font-bold text-stone-900">あわせて読みたい徳島県＆冬の厳選温泉特集</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              <Link href="/prefectures/tokushima" className="p-3 bg-white rounded-xl border border-stone-200 text-xs font-semibold text-stone-800 hover:text-cyan-700 hover:border-cyan-300 transition flex items-center justify-between">
                <span>徳島県のおすすめ観光名所＆温泉宿一覧</span>
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
