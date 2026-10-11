import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { MapPin, Calendar, ExternalLink, HelpCircle, ChevronRight, ShieldCheck, Sparkles } from 'lucide-react';

export const metadata: Metadata = {
  title: '世界遺産金峯山寺蔵王堂の新春初詣と雪の吉野山：2026-2027年冬の吉野温泉！大和肉鶏と本葛鍋名宿5選 | クラウドトラベル',
  description: '雪化粧に染まる修験道の聖地・世界遺産「吉野山」と金峯山寺蔵王堂の新春初詣！歴史薫る吉野温泉のぬくもり、滋味あふれる大和肉鶏の水炊きや吉野本葛料理、大和牛を味わう静寂の冬名旅館5選。',
  keywords: ['奈良県冬旅行', '吉野山・金峯山寺・吉野温泉', '冬温泉', '2026', '2027', '雪景色', '冬の味覚', '楽天トラベル', 'ふるさと納税'],
  alternates: {
    canonical: 'https://croud-travel.pages.dev/winter-nara-yoshinoyama-kinpusenji-snow-temple-onsen-yamatotori-stay',
  },
  openGraph: {
    title: '世界遺産金峯山寺蔵王堂の新春初詣と雪の吉野山：2026-2027年冬の吉野温泉！大和肉鶏と本葛鍋名宿5選',
    description: '雪化粧に染まる修験道の聖地・世界遺産「吉野山」と金峯山寺蔵王堂の新春初詣！歴史薫る吉野温泉のぬくもり、滋味あふれる大和肉鶏の水炊きや吉野本葛料理、大和牛を味わう静寂の冬名旅館5選。',
    url: 'https://croud-travel.pages.dev/winter-nara-yoshinoyama-kinpusenji-snow-temple-onsen-yamatotori-stay',
    siteName: 'クラウドトラベル',
    locale: 'ja_JP',
    type: 'article',
    images: [
      {
        url: 'https://img.travel.rakuten.co.jp/share/HOTEL/8787/8787.jpg',
        width: 1200,
        height: 630,
        alt: '【世界遺産金峯山寺蔵王堂の新春初詣と雪の吉野山】2026-2027年冬の吉野温泉！大和肉鶏と本葛鍋名宿5選',
      },
    ],
  },
};

export default function WinterFeaturePage() {
  const faqJsonLd = {"@context": "https://schema.org", "@type": "FAQPage", "mainEntity": [{"@type": "Question", "name": "冬の吉野山は車で行けますか？スタッドレスタイヤは必要ですか？", "acceptedAnswer": {"@type": "Answer", "text": "12月から2月の吉野山は急な降雪や夜間の路面凍結が発生します。特に中千本から上千本へ登る坂道は急勾配のため、冬期に車で訪れる場合は必ずスタッドレスタイヤ（またはタイヤチェーン）を装着してください。運転に不安がある方は、近鉄吉野線を利用し、吉野駅から旅館の送迎バスや路線バスを利用するのが最も安全です。"}}, {"@type": "Question", "name": "冬期の金峯山寺蔵王堂は拝観できますか？", "acceptedAnswer": {"@type": "Answer", "text": "はい、冬期も毎日拝観可能です（開門時間は通常8:30〜16:30、年中無休）。特に年末年始は新春初詣の参拝者で賑わい、元旦未明から初護摩祈祷が厳修されます。雪の日の蔵王堂は息を呑むほど神聖な雰囲気に包まれ、四季の中で最も修験道の厳かな空気感を実感できる時期と言えます。"}}, {"@type": "Question", "name": "冬の吉野山でおすすめのランチや郷土料理は？", "acceptedAnswer": {"@type": "Answer", "text": "吉野名物の「柿の葉寿司」はもちろん、冬には温かい「吉野葛うどん」や「葛餅」、大和肉鶏を使った温かい鍋料理がおすすめです。門前町には冬でも営業している老舗食事処や茶屋があり、雪景色を眺めながら温かい葛湯や甘酒を味わう休憩も冬旅の醍醐味です。"}}]};
  const breadcrumbJsonLd = {"@context": "https://schema.org", "@type": "BreadcrumbList", "itemListElement": [{"@type": "ListItem", "position": 1, "name": "ホーム", "item": "https://croud-travel.pages.dev"}, {"@type": "ListItem", "position": 2, "name": "奈良県の観光・温泉宿", "item": "https://croud-travel.pages.dev/prefectures/nara"}, {"@type": "ListItem", "position": 3, "name": "【世界遺産金峯山寺蔵王堂の新春初詣と雪の吉野山】2026-2027年冬の吉野温泉！大和肉鶏と本葛鍋名宿5選", "item": "https://croud-travel.pages.dev/winter-nara-yoshinoyama-kinpusenji-snow-temple-onsen-yamatotori-stay"}]};

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />

      <main className="min-h-screen bg-stone-50/50 text-stone-800 pb-16">
        {/* パンくずリスト */}
        <div className="bg-white border-b border-stone-200">
          <div className="max-w-4xl mx-auto px-4 py-2.5 text-xs text-stone-500 flex items-center gap-1.5 overflow-x-auto whitespace-nowrap">
            <Link href="/" className="hover:text-cyan-700 transition">ホーム</Link>
            <ChevronRight className="w-3 h-3 text-stone-400" />
            <Link href="/prefectures/nara" className="hover:text-cyan-700 transition">奈良県の観光宿</Link>
            <ChevronRight className="w-3 h-3 text-stone-400" />
            <span className="text-stone-800 font-semibold">吉野山・金峯山寺・吉野温泉冬特集</span>
          </div>
        </div>

        {/* ヒーローセクション */}
        <header className="bg-gradient-to-b from-stone-900 via-stone-800 to-stone-900 text-white py-12 sm:py-16 px-4">
          <div className="max-w-4xl mx-auto space-y-4 text-center">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-cyan-500/20 text-cyan-300 border border-cyan-400/30">
              <Sparkles className="w-3.5 h-3.5" />
              <span>2026-2027年 冬季限定・厳選名宿特集</span>
            </div>
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight leading-tight text-balance">「世界遺産金峯山寺蔵王堂の新春初詣と雪の吉野山」2026-2027年冬の吉野温泉！大和肉鶏と本葛鍋名宿5選</h1>
            <p className="max-w-2xl mx-auto text-xs sm:text-sm text-stone-300 leading-relaxed text-pretty">
              春の一目千本桜で全国にその名を知られる奈良県・吉野山。しかし、本当の旅好きが息を呑むのは、11月から1月の厳冬期に見せる「白銀の吉野山」の幽玄な美しさです。桜の葉が落ち、観光客の喧騒が嘘のように静まり返った山内には、冷涼な大気と修験道の神聖な祈りの気配だけが漂います。標高差によって中千本・上千本が白く雪化粧する中、世界遺産・金峯山寺（きんぷせんじ）の国宝本堂「蔵王堂」が純白の雪を被り屹立する光景は、東大寺大仏殿にも匹敵する圧倒的な荘厳さを誇ります。新春初詣の護摩祈祷に心身を清め、島崎藤村ゆかりの吉野温泉の鉄分を含んだにごり湯に浸かり、奈良の地鶏「大和肉鶏」の水炊きや吉野本葛鍋に舌鼓を打つ――大人の感性を揺さぶる静寂の冬旅をご案内します。
            </p>
            <div className="pt-2 flex flex-wrap items-center justify-center gap-4 text-xs text-stone-400">
              <span className="flex items-center gap-1">
                <MapPin className="w-3.5 h-3.5 text-cyan-400" />
                奈良県 吉野山・金峯山寺・吉野温泉
              </span>
              <span className="flex items-center gap-1">
                <Calendar className="w-3.5 h-3.5 text-cyan-400" />
                ベストシーズン: 11月・12月・1月
              </span>
            </div>
          </div>
        </header>

        {/* 魅力・おすすめ理由 */}
        <section className="max-w-4xl mx-auto px-4 py-10">
          <div className="bg-white rounded-2xl p-6 sm:p-8 border border-stone-200 shadow-sm space-y-6">
            <div className="space-y-1">
              <h2 className="text-xl sm:text-2xl font-bold text-stone-900">
                2026-2027年冬の吉野山・金峯山寺・吉野温泉が格別な理由
              </h2>
              <p className="text-xs sm:text-sm text-stone-500">
                冬ならではの絶景・温泉・美食のハイライト
              </p>
            </div>
            <div className="grid grid-cols-1 gap-4">
              <div className="p-4 rounded-xl bg-stone-50 border border-stone-200/80 space-y-1.5">
                <h3 className="font-bold text-stone-900 text-sm sm:text-base flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-cyan-600"></span>
                  白雪に浮かび上がる世界遺産・金峯山寺蔵王堂の圧倒的威容と新春初詣
                </h3>
                <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                  木造建築として日本有数の規模を誇る国宝・蔵王堂。冬の雪をまとった大屋根と重厚な柱の姿は、修験道の霊場にふさわしい神秘的な迫力に満ちています。新春の護摩祈祷では太鼓と法螺貝の音が山内に響き渡り、清らかな新年を迎えることができます。
                </p>
              </div>
              <div className="p-4 rounded-xl bg-stone-50 border border-stone-200/80 space-y-1.5">
                <h3 className="font-bold text-stone-900 text-sm sm:text-base flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-cyan-600"></span>
                  文豪が愛した秘湯「吉野温泉」のにごり湯と雪見風呂
                </h3>
                <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                  吉野山深くの谷あいに湧く吉野温泉は、鉄分と炭酸を豊富に含み、空気に触れると赤褐色や黄金色に濁る名湯。文豪・島崎藤村が滞在して名作を構想したことでも知られ、冬の雪景色を眺めながらの湯浴みは旅情の極みです。
                </p>
              </div>
              <div className="p-4 rounded-xl bg-stone-50 border border-stone-200/80 space-y-1.5">
                <h3 className="font-bold text-stone-900 text-sm sm:text-base flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-cyan-600"></span>
                  奈良の至宝「大和肉鶏」と体を芯から温める「吉野本葛鍋」
                </h3>
                <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                  大和の豊かな自然で長期飼育された地鶏「大和肉鶏」は、引き締まった肉質と噛むほどに溢れる深いコクが特徴。吉野葛を用いたとろみ出汁の鍋料理や西行鍋は、葛の保温効果で身体の芯までぽかぽかに温めてくれます。
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* アクセス・気候・服装ガイド */}
        <section className="max-w-4xl mx-auto px-4 mb-10">
          <div className="bg-white rounded-2xl p-6 sm:p-8 border border-stone-200 shadow-sm space-y-4">
            <h2 className="text-lg sm:text-xl font-bold text-stone-900 flex items-center gap-2">
              <ShieldCheck className="w-5 h-5 text-cyan-600" />
              冬のアクセス・気候とおすすめの服装
            </h2>
            <div className="text-xs sm:text-sm text-stone-600 whitespace-pre-line leading-relaxed bg-stone-50 p-4 rounded-xl border border-stone-200/60">
              【エリアへのアクセス】
・電車：近鉄大阪阿部野橋駅より近鉄特急で吉野駅まで約1時間15分。近鉄京都駅より橿原神宮前駅乗り換えで約1時間40分。吉野駅より吉野山ロープウェイ（冬期運休日は代行バスあり）または徒歩・旅館送迎。
・車：西名阪自動車道「郡山IC」または京奈和自動車道「橿原高田IC」より国道169号線経由で約50〜60分。

【見頃・気候・おすすめの服装】
・見頃時期：12月下旬〜2月中旬（例年冬期は降雪があり、山頂の上千本・奥千本エリアは美しい積雪景観が広がります）。
・気温の目安：12月〜1月の吉野山は日中でも3〜7℃前後、朝晩は氷点下1〜氷点下4℃まで下がります。
・服装：防寒性に優れたダウンコート、マフラー、手袋、ニット帽を着用してください。吉野山の坂道や石段は雪や朝晩の凍結で滑りやすくなるため、溝の深い防滑スノーブーツまたは歩きやすいトレッキングシューズでお越しください。
            </div>
          </div>
        </section>

        {/* 公式Wikipedia解説＆実写写真セクション */}
        <section className="max-w-4xl mx-auto px-4 mb-10">
          <div className="bg-white rounded-2xl p-6 sm:p-8 border border-stone-200 shadow-sm space-y-4">
            <div className="flex items-center justify-between">
              <h2 className="text-lg sm:text-xl font-bold text-stone-900">
                近隣名所アーカイブ：世界遺産・金峯山寺蔵王堂（吉野山修験道の総本山）
              </h2>
              <span className="text-[11px] text-stone-400">Wikipedia公式情報連携</span>
            </div>

            <div className="flex flex-col gap-5">
              <div className="w-full overflow-hidden rounded-xl border border-stone-200 bg-stone-100 aspect-[16/9] sm:aspect-[21/9]">
                <img
                  src="https://thumb.wikimedia.org/wikipedia/commons/thumb/0/03/Kinpusenji_Yoshino_Nara02n4272.jpg/1280px-Kinpusenji_Yoshino_Nara02n4272.jpg?utm_source=ja.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
                  alt="世界遺産・金峯山寺蔵王堂（吉野山修験道の総本山）"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  loading="lazy"
                />
              </div>
              <div className="w-full space-y-3">
                <h3 className="font-bold text-stone-900 text-sm sm:text-base">
                  世界遺産・金峯山寺蔵王堂（吉野山修験道の総本山） の見どころと歴史
                </h3>
                <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                  金峯山寺（きんぷせんじ）は、奈良県吉野郡吉野町吉野山にある金峯山修験本宗（修験道）の総本山の寺院。山号は国軸山。開基（創立者）は役小角と伝える。かつては「山下（さんげ）の蔵王堂」と呼ばれていた。本尊は蔵王堂に安置される蔵王権現立像3躯。本尊は巨像として著名で中尊は約7mもあり、普段は非公開（秘仏）であることから「日本最大の秘仏」とも称される。現存の蔵王堂は、天正18年（1590年）に豊臣秀吉の寄進によって再建されたもので、蔵王権現立像3躯の造仏は、秀吉の発願した方広寺大仏（京…
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
              吉野山・金峯山寺・吉野温泉 厳選の温泉＆リゾート宿5選
            </h2>
            <p className="text-xs sm:text-sm text-stone-500">
              楽天トラベルの最新空室・クチコミ・宿泊料金データをリアルタイム連携しています
            </p>
          </div>

          {/* Hotel Card 1 */}
          <article className="bg-white rounded-2xl border border-stone-200 shadow-sm overflow-hidden hover:shadow-md transition-shadow">
            <div className="flex flex-col">
              <div className="md:col-span-5 relative min-h-[240px] md:min-h-full">
                <img
                  src="https://img.travel.rakuten.co.jp/share/HOTEL/8787/8787.jpg"
                  alt="景勝の宿　芳雲館"
                  className="w-full h-full object-cover absolute inset-0"
                  loading="lazy"
                />
                <div className="absolute top-3 left-3 bg-stone-900/80 backdrop-blur text-white px-2.5 py-1 rounded-full text-xs font-semibold">
                  第1位
                </div>
              </div>
              <div className="md:col-span-7 p-5 sm:p-6 flex flex-col justify-between space-y-4">
                <div>
                  <div className="inline-block px-2.5 py-0.5 rounded-full text-[11px] font-bold bg-cyan-50 text-cyan-800 border border-cyan-200 mb-2">
                    中千本の絶景高台・吉野山パノラマ露天風呂と季節会席
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold text-stone-900 leading-snug">
                    景勝の宿　芳雲館
                  </h3>
                  <div className="flex items-center gap-3 mt-2 text-xs text-stone-600">
                    <span className="flex items-center text-amber-500 font-bold text-sm">
                      ★ 4.44
                    </span>
                    <span>クチコミ 113件</span>
                    <span className="text-stone-400">|</span>
                    <span className="font-semibold text-cyan-900">¥13,200〜</span>
                  </div>

                  <p className="mt-3 text-xs sm:text-sm text-stone-600 leading-relaxed">
                    吉野山中千本の見晴らしの良い高台に位置し、創業以来の歴史を誇る名旅館。客室の大きな窓や展望テラスからは、吉野の深い谷と対岸の尾根がパノラマで広がり、冬には一面の雪景色が静かに息づく絶景を独占できます。大浴場と併設された露天風呂からは、澄み渡る冬の空と雪山を眺めながらゆったりと湯に浸かることができ、日頃の疲れがすっきりと洗い流されます。夕食は大和肉鶏の滋味あふれるスープで仕立てた小鍋や、上質な大和牛の陶板焼き、吉野葛を練り込んだ手延べうどんなど、奈良の豊かな食材を丁寧に活かした会席料理が並びます。
                  </p>

                  <ul className="mt-3 space-y-1 text-xs text-stone-600">
                    <li className="flex items-start gap-1.5"><span className="text-cyan-600 font-bold">✓</span><span>中千本の尾根沿いに建ち吉野山の山並みと谷を一望する絶景の宿</span></li><li className="flex items-start gap-1.5"><span className="text-cyan-600 font-bold">✓</span><span>露天風呂から白雪に覆われた吉野の峰々を見渡す極上の雪見風呂</span></li><li className="flex items-start gap-1.5"><span className="text-cyan-600 font-bold">✓</span><span>大和肉鶏や大和牛、吉野本葛をふんだんに取り入れた料理自慢の老舗</span></li>
                  </ul>


            <div className="bg-amber-50/70 border border-amber-200/60 rounded-xl p-3 text-xs text-stone-700 leading-relaxed">
              <span className="font-bold text-amber-900 block mb-1">宿泊者のクチコミ抜粋:</span>
              「丁寧な対応と美味しい食事で心地よい時間とても丁寧に対応いただき、細かな配慮もありがたく、心地よく過ごすことができました。お食事も美味しく、とても良い時間を過ごせました。クチコミの詳細はこち。」
            </div>

                  <div className="mt-3 pt-3 border-t border-stone-100 text-[11px] text-stone-500 space-y-0.5">
                    <p>📍 奈良県吉野郡吉野町吉野山2340</p>
                    <p>🚆 近鉄吉野駅からケーブル3分、バス7分。徒歩30分 ※４月の観桜期に関しましては送迎を行っておりません。</p>
                  </div>
                </div>

                <div className="pt-2">
                  <a
                    href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F8787%2F8787.html"
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

          {/* Hotel Card 2 */}
          <article className="bg-white rounded-2xl border border-stone-200 shadow-sm overflow-hidden hover:shadow-md transition-shadow">
            <div className="flex flex-col">
              <div className="md:col-span-5 relative min-h-[240px] md:min-h-full">
                <img
                  src="https://img.travel.rakuten.co.jp/share/HOTEL/10706/10706.jpg"
                  alt="竹林院群芳園"
                  className="w-full h-full object-cover absolute inset-0"
                  loading="lazy"
                />
                <div className="absolute top-3 left-3 bg-stone-900/80 backdrop-blur text-white px-2.5 py-1 rounded-full text-xs font-semibold">
                  第2位
                </div>
              </div>
              <div className="md:col-span-7 p-5 sm:p-6 flex flex-col justify-between space-y-4">
                <div>
                  <div className="inline-block px-2.5 py-0.5 rounded-full text-[11px] font-bold bg-cyan-50 text-cyan-800 border border-cyan-200 mb-2">
                    豊臣秀吉ゆかりの名勝庭園「群芳園」と格調高い宿坊旅館
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold text-stone-900 leading-snug">
                    竹林院群芳園
                  </h3>
                  <div className="flex items-center gap-3 mt-2 text-xs text-stone-600">
                    <span className="flex items-center text-amber-500 font-bold text-sm">
                      ★ 3.80
                    </span>
                    <span>クチコミ 211件</span>
                    <span className="text-stone-400">|</span>
                    <span className="font-semibold text-cyan-900">¥14,550〜</span>
                  </div>

                  <p className="mt-3 text-xs sm:text-sm text-stone-600 leading-relaxed">
                    聖徳太子の創建と伝わる竹林院に端を発し、豊臣秀吉をはじめ幾多の文人墨客が訪れた由緒ある名門旅館。宿の敷地内には秀吉が自ら手を加えたと伝わる名勝庭園「群芳園」が広がり、池や築山に雪が静かに降り積もる冬の情景は、一幅の山水画のような静寂の美を湛えています。歴史の重みを感じさせる格調高い客室で寛いだ後は、大浴場で温かい湯浴みを。夕食には吉野本葛の滑らかな舌触りが際立つ名物葛鍋や、大和の旬魚・旬菜を彩り豊かに盛り込んだ伝統会席が供され、歴史のロマンに浸る特別な夜を演出してくれます。
                  </p>

                  <ul className="mt-3 space-y-1 text-xs text-stone-600">
                    <li className="flex items-start gap-1.5"><span className="text-cyan-600 font-bold">✓</span><span>太閤秀吉が吉野花見の際に設計させたと伝わる名勝大和三名園を擁する宿</span></li><li className="flex items-start gap-1.5"><span className="text-cyan-600 font-bold">✓</span><span>聖徳太子開基と伝わる名刹・竹林院の寺格を受け継ぐ格式高い建築美</span></li><li className="flex items-start gap-1.5"><span className="text-cyan-600 font-bold">✓</span><span>吉野葛鍋や山菜料理、地元特産品を盛り込んだ伝統の会席膳</span></li>
                  </ul>



                  <div className="mt-3 pt-3 border-t border-stone-100 text-[11px] text-stone-500 space-y-0.5">
                    <p>📍 奈良県吉野郡吉野町吉野山2142</p>
                    <p>🚆 近鉄南大阪線吉野神宮駅からタクシー約１０分（吉野駅まで送迎有り１４：３０～１８：００、４月除）</p>
                  </div>
                </div>

                <div className="pt-2">
                  <a
                    href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F10706%2F10706.html"
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

          {/* Hotel Card 3 */}
          <article className="bg-white rounded-2xl border border-stone-200 shadow-sm overflow-hidden hover:shadow-md transition-shadow">
            <div className="flex flex-col">
              <div className="md:col-span-5 relative min-h-[240px] md:min-h-full">
                <img
                  src="https://img.travel.rakuten.co.jp/share/HOTEL/56233/56233.jpg"
                  alt="吉野温泉元湯"
                  className="w-full h-full object-cover absolute inset-0"
                  loading="lazy"
                />
                <div className="absolute top-3 left-3 bg-stone-900/80 backdrop-blur text-white px-2.5 py-1 rounded-full text-xs font-semibold">
                  第3位
                </div>
              </div>
              <div className="md:col-span-7 p-5 sm:p-6 flex flex-col justify-between space-y-4">
                <div>
                  <div className="inline-block px-2.5 py-0.5 rounded-full text-[11px] font-bold bg-cyan-50 text-cyan-800 border border-cyan-200 mb-2">
                    島崎藤村の逗留の地・谷あいに自噴する秘湯にごり湯の元湯
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold text-stone-900 leading-snug">
                    吉野温泉元湯
                  </h3>
                  <div className="flex items-center gap-3 mt-2 text-xs text-stone-600">
                    <span className="flex items-center text-amber-500 font-bold text-sm">
                      ★ 4.70
                    </span>
                    <span>クチコミ 212件</span>
                    <span className="text-stone-400">|</span>
                    <span className="font-semibold text-cyan-900">¥19,250〜</span>
                  </div>

                  <p className="mt-3 text-xs sm:text-sm text-stone-600 leading-relaxed">
                    吉野山の尾根から少し谷へと下った清流沿いにひっそりと佇む、吉野温泉唯一の元湯宿。島崎藤村がここに籠もり、静寂の中で名作『破戒』の構想を練ったことでも広く知られています。宿の真骨頂は、地下から自然湧出する鉄分と遊離炭酸が濃厚な自家源泉。空気に触れることで赤褐色に色づくにごり湯は、浸かると肌に心地よい刺激があり、身体の奥深くから芯までぽかぽかと温まります。夕食は冬のぼたん鍋や大和肉鶏の炭火焼き、山菜や川魚を取り入れた野趣あふれる会席で、文豪が愛した静けさと本物の名湯を心ゆくまで堪能できます。
                  </p>

                  <ul className="mt-3 space-y-1 text-xs text-stone-600">
                    <li className="flex items-start gap-1.5"><span className="text-cyan-600 font-bold">✓</span><span>文豪・島崎藤村が名作を執筆するために逗留した歴史ある谷あいの秘湯宿</span></li><li className="flex items-start gap-1.5"><span className="text-cyan-600 font-bold">✓</span><span>鉄分・炭酸を豊富に含む赤褐色の自家源泉掛け流しのにごり湯</span></li><li className="flex items-start gap-1.5"><span className="text-cyan-600 font-bold">✓</span><span>吉野川水系の旬魚や大和地鶏、猪肉を使った野趣あふれる山里料理</span></li>
                  </ul>


            <div className="bg-amber-50/70 border border-amber-200/60 rounded-xl p-3 text-xs text-stone-700 leading-relaxed">
              <span className="font-bold text-amber-900 block mb-1">宿泊者のクチコミ抜粋:</span>
              「吉野山散策の食事と心遣いに大満足吉野山散策の折に友人とお世話になりました。お食事がとても良かったです!夜は量少なめのプランでしたが友人ともども大満足でした。個性的なお料理で美味しかったです。送迎も。」
            </div>

                  <div className="mt-3 pt-3 border-t border-stone-100 text-[11px] text-stone-500 space-y-0.5">
                    <p>📍 奈良県吉野郡吉野町吉野山902-1</p>
                    <p>🚆 近鉄　吉野駅より徒歩にて２０分、送迎車あり</p>
                  </div>
                </div>

                <div className="pt-2">
                  <a
                    href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F56233%2F56233.html"
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

          {/* Hotel Card 4 */}
          <article className="bg-white rounded-2xl border border-stone-200 shadow-sm overflow-hidden hover:shadow-md transition-shadow">
            <div className="flex flex-col">
              <div className="md:col-span-5 relative min-h-[240px] md:min-h-full">
                <img
                  src="https://img.travel.rakuten.co.jp/share/HOTEL/104591/104591.jpg"
                  alt="世界遺産吉野山　吉野荘湯川屋"
                  className="w-full h-full object-cover absolute inset-0"
                  loading="lazy"
                />
                <div className="absolute top-3 left-3 bg-stone-900/80 backdrop-blur text-white px-2.5 py-1 rounded-full text-xs font-semibold">
                  第4位
                </div>
              </div>
              <div className="md:col-span-7 p-5 sm:p-6 flex flex-col justify-between space-y-4">
                <div>
                  <div className="inline-block px-2.5 py-0.5 rounded-full text-[11px] font-bold bg-cyan-50 text-cyan-800 border border-cyan-200 mb-2">
                    金峯山寺蔵王堂徒歩3分・名物「西行鍋」と大和牛の老舗割烹
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold text-stone-900 leading-snug">
                    世界遺産吉野山　吉野荘湯川屋
                  </h3>
                  <div className="flex items-center gap-3 mt-2 text-xs text-stone-600">
                    <span className="flex items-center text-amber-500 font-bold text-sm">
                      ★ 4.50
                    </span>
                    <span>クチコミ 172件</span>
                    <span className="text-stone-400">|</span>
                    <span className="font-semibold text-cyan-900">¥14,960〜</span>
                  </div>

                  <p className="mt-3 text-xs sm:text-sm text-stone-600 leading-relaxed">
                    世界遺産・金峯山寺蔵王堂まで歩いてわずか3分という門前町の一等地に建つ、創業300余年の老舗料理旅館。吉野山を愛した平安の歌人・西行法師にちなんで考案された名物「西行鍋」は、特製の合わせ味噌出汁に吉野本葛でとろみをつけ、大和肉鶏や大和ポーク、地場野菜を煮込む絶品鍋で、冷えた身体に染み渡る極上の温もりを与えてくれます。大浴場で旅の疲れを癒やした後は、吉野杉の香る和室で静かな夜を。早朝には澄み切った空気の中、雪の蔵王堂へ朝の勤行や参拝に出かけられるのもこの宿ならではの大きな魅力です。
                  </p>

                  <ul className="mt-3 space-y-1 text-xs text-stone-600">
                    <li className="flex items-start gap-1.5"><span className="text-cyan-600 font-bold">✓</span><span>国宝・蔵王堂の門前町に位置し新春初詣や参拝に最高のロケーション</span></li><li className="flex items-start gap-1.5"><span className="text-cyan-600 font-bold">✓</span><span>吉野葛と白味噌の絶妙なコクがたまらない名物「西行鍋」発祥の宿</span></li><li className="flex items-start gap-1.5"><span className="text-cyan-600 font-bold">✓</span><span>吉野杉の温もりあふれる館内と温かい家族的なおもてなし</span></li>
                  </ul>


            <div className="bg-amber-50/70 border border-amber-200/60 rounded-xl p-3 text-xs text-stone-700 leading-relaxed">
              <span className="font-bold text-amber-900 block mb-1">宿泊者のクチコミ抜粋:</span>
              「一品一品丁寧に作られており、見た目も綺麗で味もとても美味しく、食材も地のものが色々使われていたり、鹿のたたきなんかもあってどれも。」
            </div>

                  <div className="mt-3 pt-3 border-t border-stone-100 text-[11px] text-stone-500 space-y-0.5">
                    <p>📍 奈良県吉野郡吉野町吉野山440</p>
                    <p>🚆 〇近鉄「吉野駅」から無料送迎サービス有り（要予約／観桜期は交通規制の為、送迎不可）〇車の場合、無料駐車場有り</p>
                  </div>
                </div>

                <div className="pt-2">
                  <a
                    href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F104591%2F104591.html"
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

          {/* Hotel Card 5 */}
          <article className="bg-white rounded-2xl border border-stone-200 shadow-sm overflow-hidden hover:shadow-md transition-shadow">
            <div className="flex flex-col">
              <div className="md:col-span-5 relative min-h-[240px] md:min-h-full">
                <img
                  src="https://img.travel.rakuten.co.jp/share/HOTEL/145484/145484.jpg"
                  alt="世界遺産・吉野山　眺望風呂と桜の宿　一休庵"
                  className="w-full h-full object-cover absolute inset-0"
                  loading="lazy"
                />
                <div className="absolute top-3 left-3 bg-stone-900/80 backdrop-blur text-white px-2.5 py-1 rounded-full text-xs font-semibold">
                  第5位
                </div>
              </div>
              <div className="md:col-span-7 p-5 sm:p-6 flex flex-col justify-between space-y-4">
                <div>
                  <div className="inline-block px-2.5 py-0.5 rounded-full text-[11px] font-bold bg-cyan-50 text-cyan-800 border border-cyan-200 mb-2">
                    中千本の好立地・絶景展望風呂と吉野郷土の味覚を愉しむ宿
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold text-stone-900 leading-snug">
                    世界遺産・吉野山　眺望風呂と桜の宿　一休庵
                  </h3>
                  <div className="flex items-center gap-3 mt-2 text-xs text-stone-600">
                    <span className="flex items-center text-amber-500 font-bold text-sm">
                      ★ 4.60
                    </span>
                    <span>クチコミ 48件</span>
                    <span className="text-stone-400">|</span>
                    <span className="font-semibold text-cyan-900">プラン要確認</span>
                  </div>

                  <p className="mt-3 text-xs sm:text-sm text-stone-600 leading-relaxed">
                    吉野山中千本の風情ある石畳通り沿いに佇み、アットホームな居心地の良さと景観の良さで人気の温泉宿。館内の展望風呂からは、冬の澄んだ空気の中に浮かび上がる吉野の稜線を眺めることができ、ゆったりとお湯に浸かりながら旅の余韻に浸れます。夕食は厳選された大和牛の柔らかな旨みを味わうすき焼きやステーキ、職人が丹精込めて練り上げる自家製ごま豆腐、吉野葛の小鉢など、手作りの温かさが伝わる料理が並びます。金峯山寺や吉水神社への散策にも便利で、冬の吉野山をゆったりと楽しむ拠点として最適です。
                  </p>

                  <ul className="mt-3 space-y-1 text-xs text-stone-600">
                    <li className="flex items-start gap-1.5"><span className="text-cyan-600 font-bold">✓</span><span>吉野山中千本の中心に位置し吉野山ロープウェイや名所へのアクセス抜群</span></li><li className="flex items-start gap-1.5"><span className="text-cyan-600 font-bold">✓</span><span>吉野の峰々を見渡す展望風呂から眺める冬の山並みパノラマ</span></li><li className="flex items-start gap-1.5"><span className="text-cyan-600 font-bold">✓</span><span>大和牛のすき焼きや陶板焼き、手作りごま豆腐が好評の会席膳</span></li>
                  </ul>



                  <div className="mt-3 pt-3 border-t border-stone-100 text-[11px] text-stone-500 space-y-0.5">
                    <p>📍 奈良県吉野郡吉野町吉野山966</p>
                    <p>🚆 近鉄　吉野駅よりお車にて約１２分</p>
                  </div>
                </div>

                <div className="pt-2">
                  <a
                    href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F145484%2F145484.html"
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
                  奈良県の宿に実質2,000円で泊まる賢い方法
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
              冬の吉野山・金峯山寺・吉野温泉旅行でよくある質問（FAQ）
            </h2>

            <div className="space-y-4">
              <details className="group border border-stone-200 rounded-xl p-4 [&_summary::-webkit-details-marker]:hidden bg-stone-50/50">
                <summary className="flex items-center justify-between cursor-pointer font-bold text-stone-900 text-xs sm:text-sm">
                  <span>Q. 冬の吉野山は車で行けますか？スタッドレスタイヤは必要ですか？</span>
                  <span className="transition group-open:-rotate-180 text-stone-400">▼</span>
                </summary>
                <p className="mt-3 text-xs sm:text-sm text-stone-600 leading-relaxed border-t border-stone-200/60 pt-3">
                  12月から2月の吉野山は急な降雪や夜間の路面凍結が発生します。特に中千本から上千本へ登る坂道は急勾配のため、冬期に車で訪れる場合は必ずスタッドレスタイヤ（またはタイヤチェーン）を装着してください。運転に不安がある方は、近鉄吉野線を利用し、吉野駅から旅館の送迎バスや路線バスを利用するのが最も安全です。
                </p>
              </details>
              <details className="group border border-stone-200 rounded-xl p-4 [&_summary::-webkit-details-marker]:hidden bg-stone-50/50">
                <summary className="flex items-center justify-between cursor-pointer font-bold text-stone-900 text-xs sm:text-sm">
                  <span>Q. 冬期の金峯山寺蔵王堂は拝観できますか？</span>
                  <span className="transition group-open:-rotate-180 text-stone-400">▼</span>
                </summary>
                <p className="mt-3 text-xs sm:text-sm text-stone-600 leading-relaxed border-t border-stone-200/60 pt-3">
                  はい、冬期も毎日拝観可能です（開門時間は通常8:30〜16:30、年中無休）。特に年末年始は新春初詣の参拝者で賑わい、元旦未明から初護摩祈祷が厳修されます。雪の日の蔵王堂は息を呑むほど神聖な雰囲気に包まれ、四季の中で最も修験道の厳かな空気感を実感できる時期と言えます。
                </p>
              </details>
              <details className="group border border-stone-200 rounded-xl p-4 [&_summary::-webkit-details-marker]:hidden bg-stone-50/50">
                <summary className="flex items-center justify-between cursor-pointer font-bold text-stone-900 text-xs sm:text-sm">
                  <span>Q. 冬の吉野山でおすすめのランチや郷土料理は？</span>
                  <span className="transition group-open:-rotate-180 text-stone-400">▼</span>
                </summary>
                <p className="mt-3 text-xs sm:text-sm text-stone-600 leading-relaxed border-t border-stone-200/60 pt-3">
                  吉野名物の「柿の葉寿司」はもちろん、冬には温かい「吉野葛うどん」や「葛餅」、大和肉鶏を使った温かい鍋料理がおすすめです。門前町には冬でも営業している老舗食事処や茶屋があり、雪景色を眺めながら温かい葛湯や甘酒を味わう休憩も冬旅の醍醐味です。
                </p>
              </details>
            </div>
          </div>
        </section>

        {/* 内部リンク・関連特集セクション */}
        <section className="max-w-4xl mx-auto px-4 mb-12">
          <div className="bg-stone-100 rounded-2xl p-6 sm:p-8 border border-stone-200 space-y-4">
            <h3 className="text-base sm:text-lg font-bold text-stone-900">あわせて読みたい奈良県＆冬の厳選温泉特集</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              <Link href="/prefectures/nara" className="p-3 bg-white rounded-xl border border-stone-200 text-xs font-semibold text-stone-800 hover:text-cyan-700 hover:border-cyan-300 transition flex items-center justify-between">
                <span>奈良県のおすすめ観光名所＆温泉宿一覧</span>
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
