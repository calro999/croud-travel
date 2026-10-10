import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { MapPin, Calendar, ExternalLink, HelpCircle, ChevronRight, ShieldCheck, Sparkles } from 'lucide-react';

export const metadata: Metadata = {
  title: '標高1400mの白銀カルストと満天の星空：2026-2027年冬の愛媛・久万高原！高原温泉と冬絶景宿5選 | クラウドトラベル',
  description: '四国とは思えない白銀の別世界が広がる「四国カルスト天狗高原」と澄み切った満天の星空！四国霊場第44番大寶寺の新春初詣、滋味豊かな愛媛ブランド牛・きじ鍋と心温まる高原の名湯に寛ぐ大自然の冬名宿5選。',
  keywords: ['愛媛県冬旅行', '久万高原・四国カルスト・面河渓', '冬温泉', '2026', '2027', '雪景色', '冬の味覚', '楽天トラベル', 'ふるさと納税'],
  alternates: {
    canonical: 'https://croud-travel.pages.dev/winter-ehime-kumakogen-shikoku-karst-snow-starry-hoshifuru-stay',
  },
  openGraph: {
    title: '標高1400mの白銀カルストと満天の星空：2026-2027年冬の愛媛・久万高原！高原温泉と冬絶景宿5選',
    description: '四国とは思えない白銀の別世界が広がる「四国カルスト天狗高原」と澄み切った満天の星空！四国霊場第44番大寶寺の新春初詣、滋味豊かな愛媛ブランド牛・きじ鍋と心温まる高原の名湯に寛ぐ大自然の冬名宿5選。',
    url: 'https://croud-travel.pages.dev/winter-ehime-kumakogen-shikoku-karst-snow-starry-hoshifuru-stay',
    siteName: 'クラウドトラベル',
    locale: 'ja_JP',
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: '標高1400mの白銀カルストと満天の星空：2026-2027年冬の愛媛・久万高原！高原温泉と冬絶景宿5選',
    description: '四国とは思えない白銀の別世界が広がる「四国カルスト天狗高原」と澄み切った満天の星空！四国霊場第44番大寶寺の新春初詣、滋味豊かな愛媛ブランド牛・きじ鍋と心温まる高原の名湯に寛ぐ大自然の冬名宿5選。',
  },
};

export default function Page() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'TouristAttraction',
        name: '標高1,400mの白銀パノラマ・四国カルスト天狗高原',
        description: '四国カルスト（しこくかるすと）は、「四国山地」の南西部、愛媛県と高知県との県境部に位置し、標高；約1100～1400ｍの、石灰岩からなる高原状のカルスト台地である。  山口県の「秋吉台」、福岡県の「平尾台」と共に、しばしば「日本三大カルスト」の一つ、と呼ばれる。',
        image: 'https://upload.wikimedia.org/wikipedia/commons/b/bc/Shikokukarusuto01.jpg?utm_source=ja.wikipedia.org&utm_campaign=api&utm_content=thumbnail_unscaled',
        address: {
          '@type': 'PostalAddress',
          addressRegion: '愛媛県',
          addressCountry: 'JP'
        }
      },
      {
        '@type': 'FAQPage',
        mainEntity: [
          {
            '@type': 'Question',
            name: "冬の四国カルスト天狗高原へノーマルタイヤのレンタカーで行けますか？",
            acceptedAnswer: {
              '@type': 'Answer',
              text: "絶対にノーマルタイヤでは行けません。12月から3月にかけての四国カルスト周辺の道路は、四国であっても完全に積雪・アイスバーン凍結します。レンタカーを利用する場合は必ずスタッドレスタイヤ装着指定の車両を予約してください。また積雪の深さによっては通行止め規制がかかる場合があるため、宿泊施設（星ふるヴィレッジTENGU等）へ当日の道路状況を事前連絡して確認してください。"
            }
          },
          {
            '@type': 'Question',
            name: "「星ふるヴィレッジTENGU」では冬でも星空観測ツアーを行っていますか？",
            acceptedAnswer: {
              '@type': 'Answer',
              text: "はい、施設内にはプラネタリウムや天文台が完備されており、宿泊者向けの星空案内プログラムが実施されています。天候に恵まれれば氷点下の展望デッキから肉眼で天の川や冬の大三角を鑑賞でき、万が一天候が崩れた場合でも館内の本格プラネタリウムで専門スタッフによる星空解説を楽しめます。"
            }
          },
          {
            '@type': 'Question',
            name: "久万高原名物の「きじ鍋（雉鍋）」とはどのような味ですか？",
            acceptedAnswer: {
              '@type': 'Answer',
              text: "キジ肉は古来より日本の貴族や文人に愛されてきた高級食材で、鶏肉よりもコク深い濃厚な出汁が出るのが特徴です。脂身が少なく高タンパク・低カロリーで、臭みは一切なく上品な旨味が口いっぱいに広がります。久万高原の地元野菜やキノコと一緒に煮込む熱々の醤油・味噌仕立ての鍋は、冬の寒さを一瞬で忘れさせてくれる滋味あふれる名物です。"
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
            name: '愛媛県旅行特集',
            item: 'https://croud-travel.pages.dev/prefectures/ehime'
          },
          {
            '@type': 'ListItem',
            position: 3,
            name: '【標高1400mの白銀カルストと満天の星空】2026-2027年冬の愛媛・久万高原！高原温泉と冬絶景宿5選',
            item: 'https://croud-travel.pages.dev/winter-ehime-kumakogen-shikoku-karst-snow-starry-hoshifuru-stay'
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
          <Link href="/prefectures/ehime" className="hover:text-cyan-700 transition">愛媛県</Link>
          <ChevronRight className="w-3.5 h-3.5 text-stone-400" />
          <span className="text-stone-800 font-medium truncate max-w-[200px] sm:max-w-none">久万高原・四国カルスト・面河渓 冬の厳選宿</span>
        </nav>

        {/* ヘッダーエリア */}
        <header className="max-w-4xl mx-auto px-4 pt-4 pb-8 space-y-4">
          <div className="flex flex-wrap items-center gap-2">
            <span className="px-2.5 py-1 rounded-full text-xs font-bold bg-cyan-100 text-cyan-800">
              2026-2027年冬 厳選特集
            </span>
            <span className="px-2.5 py-1 rounded-full text-xs font-semibold bg-stone-200 text-stone-700 flex items-center gap-1">
              <MapPin className="w-3 h-3 text-stone-500" />
              久万高原・四国カルスト・面河渓（愛媛県）
            </span>
            <span className="px-2.5 py-1 rounded-full text-xs font-semibold bg-amber-100 text-amber-800 flex items-center gap-1">
              <Sparkles className="w-3 h-3 text-amber-600" />
              楽天API公式連携
            </span>
          </div>

          <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-stone-900 leading-tight">「標高1400mの白銀カルストと満天の星空」2026-2027年冬の愛媛・久万高原！高原温泉と冬絶景宿5選</h1>

          <p className="text-xs sm:text-sm text-stone-600 leading-relaxed pt-1">
            四国とは思えない白銀の別世界が広がる「四国カルスト天狗高原」と澄み切った満天の星空！四国霊場第44番大寶寺の新春初詣、滋味豊かな愛媛ブランド牛・きじ鍋と心温まる高原の名湯に寛ぐ大自然の冬名宿5選。
          </p>
        </header>

        {/* 導入解説セクション */}
        <section className="max-w-4xl mx-auto px-4 mb-10">
          <div className="bg-white rounded-2xl p-6 sm:p-8 border border-stone-200 shadow-sm space-y-6">
            <div className="space-y-3">
              <h2 className="text-lg sm:text-xl font-bold text-stone-900 flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-cyan-700"></span>
                冬の久万高原・四国カルスト・面河渓探訪：静寂と温もりに包まれる旅の魅力
              </h2>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                温暖な瀬戸内海のイメージが強い四国において、標高1,000m〜1,400mの天空に広がる別世界・愛媛県「久万高原（くまこうげん）」と「四国カルスト天狗高原」。11月から1月の冬、ここは四国随一のパウダースノーが降り積もる純白の白銀世界へと一変します。日本三大カルストの一つに数えられる雄大な石灰岩のカルスト台地は雪に覆われ、まるでアルプスを思わせる雄大な雪原パノラマが出現。大気が極限まで澄み渡る冬の夜には、標高1,400mの頭上に手が届きそうなほど無数の星々が瞬き、天の川がくっきりと肉眼で浮かび上がる奇跡の天体ショーが繰り広げられます。さらに久万高原の山懐には、四国霊場第44番札所・菅生山大寶寺（たいほうじ）が鎮座し、冬の杉木立の中で厳かな新春の初詣を迎えます。冷え切った身体を包み込むのは、古岩屋や高原に湧く名湯温泉と、滋味豊かな愛媛ブランド牛「伊予牛」や名物の温かいきじ鍋。南国四国の知られざる白銀の秘境リゾートへとご案内します。
              </p>
            </div>

            <div className="space-y-3 pt-2">
              <h3 className="text-sm sm:text-base font-bold text-stone-800">
                この冬、久万高原・四国カルスト・面河渓を訪れるべき3つの理由
              </h3>
              <div className="grid grid-cols-1 gap-3">
              <div className="p-4 rounded-xl bg-stone-50 border border-stone-200/80 space-y-1.5">
                <h3 className="font-bold text-stone-900 text-sm sm:text-base flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-cyan-600"></span>
                  四国とは思えない標高1,400mの白銀雪原と「四国カルスト」の冬絶景
                </h3>
                <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                  見渡す限りの白銀の丘陵に白い石灰岩が点在するカルストの冬景色。冬晴れの日には青空と雪原の圧倒的なコントラストが広がり、霧氷に輝くブナの原生林など四国最高峰の冬の自然美を体感できます。
                </p>
              </div>
              <div className="p-4 rounded-xl bg-stone-50 border border-stone-200/80 space-y-1.5">
                <h3 className="font-bold text-stone-900 text-sm sm:text-base flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-cyan-600"></span>
                  大気が極限まで澄み渡る冬の夜空！肉眼で天の川を望む満天の星空観測
                </h3>
                <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                  人工の光が一切届かない四国カルスト天狗高原。冬は水蒸気が少なく大気透明度が年間で最も高まるため、プラネタリウムを遥かに超える圧巻の星空が広がります。星空観察に特化したリゾート施設での滞在は一生の思い出になります。
                </p>
              </div>
              <div className="p-4 rounded-xl bg-stone-50 border border-stone-200/80 space-y-1.5">
                <h3 className="font-bold text-stone-900 text-sm sm:text-base flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-cyan-600"></span>
                  弘法大師ゆかりの霊場「大寶寺」の新春初詣と名物きじ鍋・伊予牛の温もり
                </h3>
                <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                  樹齢数百年の巨杉に囲まれた四国霊場・大寶寺での神聖な初詣。冷えた身体には、久万高原名物の低カロリー高タンパクな「きじ鍋」や、とろける甘みの「伊予牛」が染み渡ります。名勝・古岩屋温泉のぬくもりも格別です。
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
・飛行機・空港から：松山空港より車・レンタカーで国道33号経由、久万高原町中心部まで約45分。四国カルスト天狗高原までは約1時間30分〜1時間45分。
・JR・路線バス：JR予讃線「松山駅」よりJR四国バス「久万高原」行きで約1時間10分。久万高原町内からは町営バスが運行。
・車（四国カルスト方面）：松山自動車道「松山IC」より国道33号・国道440号経由。

【見頃・気候・おすすめの服装】
・ベストシーズン：11月下旬〜1月（白銀の雪景色、星空観測の最高峰、新春初詣、鍋料理の旬）。
・気温の目安：久万高原町中心部（標高500m前後）は松山市街より3〜5℃低く、真冬の朝晩は氷点下に達します。標高1,400mの四国カルスト天狗高原は真冬の最高気温でも氷点下となる「完全な真冬日」が多く、強風時は体感温度マイナス10℃以下になります。
・服装・装備のポイント：スキー場と同等レベルの完全防寒装備（極暖インナー、フリース、厚手ダウンジャケット、防風パンツ、ニット帽、ネックウォーマー、厚手手袋、スノーブーツ等）が必須です。四国カルストへ向かう道路（県道383号・国道440号等）は積雪・凍結するため、スタッドレスタイヤ装着（＋金属チェーン携行）または4WD車でのアクセスが絶対条件となります。気象台の積雪情報や道路規制情報を必ず事前に確認してください。
              </div>
            </div>
          </div>
        </section>

        {/* Wikipedia公式連携スポットセクション */}
        <section className="max-w-4xl mx-auto px-4 mb-10">
          <div className="bg-white rounded-2xl p-6 sm:p-8 border border-stone-200 shadow-sm space-y-4">
            <div className="flex items-center justify-between">
              <h2 className="text-lg sm:text-xl font-bold text-stone-900">
                近隣名所アーカイブ：標高1,400mの白銀パノラマ・四国カルスト天狗高原
              </h2>
              <span className="text-[11px] text-stone-400">Wikipedia公式情報連携</span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
              <div className="md:col-span-5 overflow-hidden rounded-xl border border-stone-200 bg-stone-100">
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/b/bc/Shikokukarusuto01.jpg?utm_source=ja.wikipedia.org&utm_campaign=api&utm_content=thumbnail_unscaled"
                  alt="標高1,400mの白銀パノラマ・四国カルスト天狗高原"
                  className="w-full h-48 md:h-56 object-cover hover:scale-105 transition-transform duration-300"
                  loading="lazy"
                />
              </div>
              <div className="md:col-span-7 space-y-2">
                <h3 className="font-bold text-stone-900 text-sm sm:text-base">
                  標高1,400mの白銀パノラマ・四国カルスト天狗高原 の見どころと歴史
                </h3>
                <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                  四国カルスト（しこくかるすと）は、「四国山地」の南西部、愛媛県と高知県との県境部に位置し、標高；約1100～1400ｍの、石灰岩からなる高原状のカルスト台地である。  山口県の「秋吉台」、福岡県の「平尾台」と共に、しばしば「日本三大カルスト」の一つ、と呼ばれる。
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
              久万高原・四国カルスト・面河渓 厳選の温泉＆名宿5選
            </h2>
            <p className="text-xs sm:text-sm text-stone-500">
              楽天トラベルの最新空室・クチコミ・宿泊料金データをリアルタイム連携しています
            </p>
          </div>

          {/* 宿カード 1: 星ふるヴィレッジＴＥＮＧＵ */}
          <article className="bg-white rounded-2xl border border-stone-200 shadow-sm overflow-hidden hover:shadow-md transition-shadow">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-0">
              <div className="md:col-span-5 relative min-h-[240px]">
                <img
                  src="https://img.travel.rakuten.co.jp/share/HOTEL/129993/129993.jpg"
                  alt="星ふるヴィレッジＴＥＮＧＵ"
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
                    標高1400mの天空リゾート・プラネタリウム＆星空露天の最高峰
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold text-stone-900 leading-snug">
                    星ふるヴィレッジＴＥＮＧＵ
                  </h3>
                  <div className="flex items-center gap-3 mt-2 text-xs text-stone-600">
                    <span className="flex items-center text-amber-500 font-bold text-sm">
                      ★ 4.46
                    </span>
                    <span>クチコミ 395件</span>
                    <span className="text-stone-400">|</span>
                    <span className="font-semibold text-cyan-900">税込 13,600円〜</span>
                  </div>

                  <p className="mt-3 text-xs sm:text-sm text-stone-600 leading-relaxed">
                    標高1,400mの四国カルスト天狗高原に位置し、大自然の真ん中で星と遊ぶためにリニューアルされた大人気リゾートホテル。客室の大きな窓からは見渡す限りの白銀の山並みや幻想的な雲海が広がり、夜になれば頭上一面に手が届くような星空が煌めきます。館内には本格的なプラネタリウムシアターが併設され、寒さを気にせず星空解説を楽しめるのも大きな魅力。夕食は愛媛と高知の県境ならではの厳選食材を用いた創作コースで、土佐あかうしや地元野菜の温かい料理に舌鼓を打てます。
                  </p>

                  <ul className="mt-3 space-y-1 text-xs text-stone-600">
                    <li className="flex items-center gap-2"><span className="text-cyan-600 font-bold">✓</span> 四国カルスト天狗高原の頂に建つ唯一無二の絶景ロケーション</li>
                    <li className="flex items-center gap-2"><span className="text-cyan-600 font-bold">✓</span> 館内に本格プラネタリウム＆星空デッキ完備！満天の冬星観測</li>
                    <li className="flex items-center gap-2"><span className="text-cyan-600 font-bold">✓</span> 愛媛・高知の旬素材を使った贅沢なディナーコースと白銀パノラマ</li>
                  </ul>

                  <div className="mt-3 p-3 bg-stone-50 rounded-lg border border-stone-200/60 text-xs text-stone-600 italic">
                    <p className="font-semibold text-[11px] text-stone-500 not-italic mb-0.5">宿泊者のクチコミ抜粋：</p>
                    「ライダーへの配慮と温かい接客に感謝!ツーリング旅で四国カルストへ。ただ天候が不安定だったので、予定時間よりかなり早く到着してしまったのにも関わらず、ガレージにバイクを入れさせてもらい非常に助かりま。」
                  </div>

                  <div className="mt-3 pt-3 border-t border-stone-100 text-[11px] text-stone-500 space-y-0.5">
                    <p>📍 高知県高岡郡津野町芳生野乙4921-22</p>
                    <p>🚆 須崎東ICより国道197号線を津野町役場西庁舎目印に国道439号線へ。須崎東ICより約80分</p>
                  </div>
                </div>

                <div className="pt-2">
                  <a
                    href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F129993%2F129993.html"
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

          {/* 宿カード 2: 国民宿舎　古岩屋荘 */}
          <article className="bg-white rounded-2xl border border-stone-200 shadow-sm overflow-hidden hover:shadow-md transition-shadow">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-0">
              <div className="md:col-span-5 relative min-h-[240px]">
                <img
                  src="https://img.travel.rakuten.co.jp/share/HOTEL/104672/104672.jpg"
                  alt="国民宿舎　古岩屋荘"
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
                    巨岩奇勝の国指定名勝・硫黄香る名湯古岩屋温泉と郷土会席
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold text-stone-900 leading-snug">
                    国民宿舎　古岩屋荘
                  </h3>
                  <div className="flex items-center gap-3 mt-2 text-xs text-stone-600">
                    <span className="flex items-center text-amber-500 font-bold text-sm">
                      ★ 3.80
                    </span>
                    <span>クチコミ 167件</span>
                    <span className="text-stone-400">|</span>
                    <span className="font-semibold text-cyan-900">税込 5,900円〜</span>
                  </div>

                  <p className="mt-3 text-xs sm:text-sm text-stone-600 leading-relaxed">
                    巨岩が林立する国の名勝・古岩屋の懐に佇む静かな温泉宿。大浴場に満たされる湯は久万高原でも極めて貴重な天然温泉で、ほんのりと硫黄の香りが漂い、体の芯までじんわりと温めてくれる名湯です。冬の澄んだ空気の中、雪化粧した巨岩を眺めながら湯に浸かる風情は格別。食事は地元特産の「きじ肉」を贅沢に使った名物きじ鍋が自慢で、キジガラから取った極上の出汁と柔らかな肉の旨味が鍋いっぱいに広がります。大寶寺への参拝拠点としても最適です。
                  </p>

                  <ul className="mt-3 space-y-1 text-xs text-stone-600">
                    <li className="flex items-center gap-2"><span className="text-cyan-600 font-bold">✓</span> 国の名勝「古岩屋」の奇岩絶壁を間近に望む静寂のロケーション</li>
                    <li className="flex items-center gap-2"><span className="text-cyan-600 font-bold">✓</span> 久万高原随一の天然温泉！硫黄の香るやわらかな濁り湯大浴場</li>
                    <li className="flex items-center gap-2"><span className="text-cyan-600 font-bold">✓</span> 名物きじ鍋や愛媛産川魚・山菜料理を味わう滋味豊かな郷土膳</li>
                  </ul>

                  <div className="mt-3 p-3 bg-stone-50 rounded-lg border border-stone-200/60 text-xs text-stone-600 italic">
                    <p className="font-semibold text-[11px] text-stone-500 not-italic mb-0.5">宿泊者のクチコミ抜粋：</p>
                    「部屋に冷蔵庫もトイレ洗面も無く廊下に出ると虫だらけ。」
                  </div>

                  <div className="mt-3 pt-3 border-t border-stone-100 text-[11px] text-stone-500 space-y-0.5">
                    <p>📍 愛媛県上浮穴郡久万高原町直瀬乙1636</p>
                    <p>🚆 松山自動車道・松山IC→国道33号線→県道12号線（車で約45分）45番札所岩屋寺まで3km、44番札所大宝寺まで9km</p>
                  </div>
                </div>

                <div className="pt-2">
                  <a
                    href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F104672%2F104672.html"
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

          {/* 宿カード 3: 久万高原ふるさと旅行村 */}
          <article className="bg-white rounded-2xl border border-stone-200 shadow-sm overflow-hidden hover:shadow-md transition-shadow">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-0">
              <div className="md:col-span-5 relative min-h-[240px]">
                <img
                  src="https://img.travel.rakuten.co.jp/share/HOTEL/199055/199055.jpg"
                  alt="久万高原ふるさと旅行村"
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
                    久万高原の自然体験型宿泊・古民家棟やコテージで冬ごもり
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold text-stone-900 leading-snug">
                    久万高原ふるさと旅行村
                  </h3>
                  <div className="flex items-center gap-3 mt-2 text-xs text-stone-600">
                    <span className="flex items-center text-amber-500 font-bold text-sm">
                      ★ 0.00
                    </span>
                    <span>クチコミ 0件</span>
                    <span className="text-stone-400">|</span>
                    <span className="font-semibold text-cyan-900">プランにより変動（要確認）</span>
                  </div>

                  <p className="mt-3 text-xs sm:text-sm text-stone-600 leading-relaxed">
                    久万高原の美しい里山に位置し、昔ながらの日本の農村風景を再現した宿泊施設。広々とした敷地内には囲炉裏や木造の温もりが心地よいコテージや宿泊棟が点在し、冬の静かな山里で暮らすように滞在できます。夜には余計な街灯がないため満天の星空が広がり、家族連れや友人同士で温かい鍋を囲む団らんのひとときに最適。久万高原の澄み切った大気と雪景色の中で、心洗われる休日を過ごせます。
                  </p>

                  <ul className="mt-3 space-y-1 text-xs text-stone-600">
                    <li className="flex items-center gap-2"><span className="text-cyan-600 font-bold">✓</span> 広大な敷地に日本の原風景が広がる自然豊かな体験型リゾート</li>
                    <li className="flex items-center gap-2"><span className="text-cyan-600 font-bold">✓</span> 薪ストーブや囲炉裏を備えたコテージで気兼ねないグループ滞在</li>
                    <li className="flex items-center gap-2"><span className="text-cyan-600 font-bold">✓</span> 星空観賞や澄んだ空気の森の散策を満喫できるのどかな環境</li>
                  </ul>



                  <div className="mt-3 pt-3 border-t border-stone-100 text-[11px] text-stone-500 space-y-0.5">
                    <p>📍 愛媛県上浮穴郡久万高原町下畑野川乙488</p>
                    <p>🚆 松山ICから車で40分</p>
                  </div>
                </div>

                <div className="pt-2">
                  <a
                    href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F199055%2F199055.html"
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

          {/* 宿カード 4: やすらぎの宿　でんこ */}
          <article className="bg-white rounded-2xl border border-stone-200 shadow-sm overflow-hidden hover:shadow-md transition-shadow">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-0">
              <div className="md:col-span-5 relative min-h-[240px]">
                <img
                  src="https://img.travel.rakuten.co.jp/share/HOTEL/128621/128621.jpg"
                  alt="やすらぎの宿　でんこ"
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
                    四国霊場巡礼と登山客を迎える温かなおもてなしの和風宿
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold text-stone-900 leading-snug">
                    やすらぎの宿　でんこ
                  </h3>
                  <div className="flex items-center gap-3 mt-2 text-xs text-stone-600">
                    <span className="flex items-center text-amber-500 font-bold text-sm">
                      ★ 3.00
                    </span>
                    <span>クチコミ 53件</span>
                    <span className="text-stone-400">|</span>
                    <span className="font-semibold text-cyan-900">税込 5,500円〜</span>
                  </div>

                  <p className="mt-3 text-xs sm:text-sm text-stone-600 leading-relaxed">
                    久万高原町で四国八十八ヶ所巡りの遍路旅や登山客を温かく迎え続けている家庭的な名宿。歴史ある霊場・大寶寺へもほど近く、新春の初詣参拝の拠点として重宝されています。女将さんの真心のこもった料理は、地元の新鮮な野菜や山の幸をふんだんに使った滋味深い和食膳で、寒さで冷えた身体を優しくいたわってくれます。実家に帰ってきたかのような安らぎに満ちた空間で、静かに冬の夜を過ごしたい旅人に愛されています。
                  </p>

                  <ul className="mt-3 space-y-1 text-xs text-stone-600">
                    <li className="flex items-center gap-2"><span className="text-cyan-600 font-bold">✓</span> 久万高原町中心部に位置し、大寶寺や岩屋寺への巡拝に好立地</li>
                    <li className="flex items-center gap-2"><span className="text-cyan-600 font-bold">✓</span> 地元のお母さんが腕を振るう栄養満点の家庭的な郷土料理</li>
                    <li className="flex items-center gap-2"><span className="text-cyan-600 font-bold">✓</span> 清潔な和室と細やかな気配りで一人旅でも安心のぬくもり空間</li>
                  </ul>



                  <div className="mt-3 pt-3 border-t border-stone-100 text-[11px] text-stone-500 space-y-0.5">
                    <p>📍 愛媛県上浮穴郡久万高原町入野1363-1</p>
                    <p>🚆 ＪＲバス松山～久万高原町・落出行き「藤の棚」バス停下車すぐ。／松山ＩＣから国道３３号線経由３０分</p>
                  </div>
                </div>

                <div className="pt-2">
                  <a
                    href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F128621%2F128621.html"
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

          {/* 宿カード 5: 道後温泉　ホテル椿館 */}
          <article className="bg-white rounded-2xl border border-stone-200 shadow-sm overflow-hidden hover:shadow-md transition-shadow">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-0">
              <div className="md:col-span-5 relative min-h-[240px]">
                <img
                  src="https://img.travel.rakuten.co.jp/share/HOTEL/13653/13653.jpg"
                  alt="道後温泉　ホテル椿館"
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
                    久万高原から車で約45分・名湯道後温泉の明治レトロ老舗旅館
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold text-stone-900 leading-snug">
                    道後温泉　ホテル椿館
                  </h3>
                  <div className="flex items-center gap-3 mt-2 text-xs text-stone-600">
                    <span className="flex items-center text-amber-500 font-bold text-sm">
                      ★ 4.53
                    </span>
                    <span>クチコミ 2,218件</span>
                    <span className="text-stone-400">|</span>
                    <span className="font-semibold text-cyan-900">税込 9,900円〜</span>
                  </div>

                  <p className="mt-3 text-xs sm:text-sm text-stone-600 leading-relaxed">
                    久万高原や四国カルストの白銀の絶景ドライブを満喫したあと、山を降りて名湯・道後温泉で極上の宿時間を過ごす贅沢なプランに最適な名旅館。明治の文明開化を思わせるマドンナや坊っちゃんの世界観が漂う優雅な館内では、道後温泉の良質な引き湯を広々とした大浴場や露天風呂で心ゆくまで堪能できます。夕食は愛媛が誇る伊予牛のステーキや瀬戸内海の旬の鮮魚が並ぶ豪華な会席で、冬の愛媛の魅力を完璧に締めくくってくれます。
                  </p>

                  <ul className="mt-3 space-y-1 text-xs text-stone-600">
                    <li className="flex items-center gap-2"><span className="text-cyan-600 font-bold">✓</span> 道後温泉本館まで徒歩圏内！明治ロマンあふれる格式高い名旅館</li>
                    <li className="flex items-center gap-2"><span className="text-cyan-600 font-bold">✓</span> 日本最古の名湯・道後温泉の引き湯大浴場と風情ある露天風呂</li>
                    <li className="flex items-center gap-2"><span className="text-cyan-600 font-bold">✓</span> 伊予牛や瀬戸内の新鮮魚介を堪能する豪華会席ビュッフェ</li>
                  </ul>

                  <div className="mt-3 p-3 bg-stone-50 rounded-lg border border-stone-200/60 text-xs text-stone-600 italic">
                    <p className="font-semibold text-[11px] text-stone-500 not-italic mb-0.5">宿泊者のクチコミ抜粋：</p>
                    「バイキングと立地が最高、駐車場も助かったバイキングが想像以上で美味しかったです。入り口で見かけた飲み放題を注文し、ビールと食事を堪能しました。お部屋は古かったですが、全体的に満足です。道後温泉の観。」
                  </div>

                  <div className="mt-3 pt-3 border-t border-stone-100 text-[11px] text-stone-500 space-y-0.5">
                    <p>📍 愛媛県松山市道後鷺谷町5-32</p>
                    <p>🚆 JR松山駅より伊予鉄道にて道後温泉駅下車 / 松山自動車道 松山ICより３０分</p>
                  </div>
                </div>

                <div className="pt-2">
                  <a
                    href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F13653%2F13653.html"
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
                  愛媛県の宿に実質2,000円で泊まる賢い方法
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
              冬の久万高原・四国カルスト・面河渓旅行でよくある質問（FAQ）
            </h2>

            <div className="space-y-4">
              <details className="group border border-stone-200 rounded-xl p-4 [&_summary::-webkit-details-marker]:hidden bg-stone-50/50">
                <summary className="flex items-center justify-between cursor-pointer font-bold text-stone-900 text-xs sm:text-sm">
                  <span>Q. 冬の四国カルスト天狗高原へノーマルタイヤのレンタカーで行けますか？</span>
                  <span className="transition group-open:-rotate-180 text-stone-400">▼</span>
                </summary>
                <p className="mt-3 text-xs sm:text-sm text-stone-600 leading-relaxed border-t border-stone-200/60 pt-3">
                  絶対にノーマルタイヤでは行けません。12月から3月にかけての四国カルスト周辺の道路は、四国であっても完全に積雪・アイスバーン凍結します。レンタカーを利用する場合は必ずスタッドレスタイヤ装着指定の車両を予約してください。また積雪の深さによっては通行止め規制がかかる場合があるため、宿泊施設（星ふるヴィレッジTENGU等）へ当日の道路状況を事前連絡して確認してください。
                </p>
              </details>
              <details className="group border border-stone-200 rounded-xl p-4 [&_summary::-webkit-details-marker]:hidden bg-stone-50/50">
                <summary className="flex items-center justify-between cursor-pointer font-bold text-stone-900 text-xs sm:text-sm">
                  <span>Q. 「星ふるヴィレッジTENGU」では冬でも星空観測ツアーを行っていますか？</span>
                  <span className="transition group-open:-rotate-180 text-stone-400">▼</span>
                </summary>
                <p className="mt-3 text-xs sm:text-sm text-stone-600 leading-relaxed border-t border-stone-200/60 pt-3">
                  はい、施設内にはプラネタリウムや天文台が完備されており、宿泊者向けの星空案内プログラムが実施されています。天候に恵まれれば氷点下の展望デッキから肉眼で天の川や冬の大三角を鑑賞でき、万が一天候が崩れた場合でも館内の本格プラネタリウムで専門スタッフによる星空解説を楽しめます。
                </p>
              </details>
              <details className="group border border-stone-200 rounded-xl p-4 [&_summary::-webkit-details-marker]:hidden bg-stone-50/50">
                <summary className="flex items-center justify-between cursor-pointer font-bold text-stone-900 text-xs sm:text-sm">
                  <span>Q. 久万高原名物の「きじ鍋（雉鍋）」とはどのような味ですか？</span>
                  <span className="transition group-open:-rotate-180 text-stone-400">▼</span>
                </summary>
                <p className="mt-3 text-xs sm:text-sm text-stone-600 leading-relaxed border-t border-stone-200/60 pt-3">
                  キジ肉は古来より日本の貴族や文人に愛されてきた高級食材で、鶏肉よりもコク深い濃厚な出汁が出るのが特徴です。脂身が少なく高タンパク・低カロリーで、臭みは一切なく上品な旨味が口いっぱいに広がります。久万高原の地元野菜やキノコと一緒に煮込む熱々の醤油・味噌仕立ての鍋は、冬の寒さを一瞬で忘れさせてくれる滋味あふれる名物です。
                </p>
              </details>
            </div>
          </div>
        </section>

        {/* 内部リンク・関連特集セクション */}
        <section className="max-w-4xl mx-auto px-4 mb-12">
          <div className="bg-stone-100 rounded-2xl p-6 sm:p-8 border border-stone-200 space-y-4">
            <h3 className="text-base sm:text-lg font-bold text-stone-900">あわせて読みたい愛媛県＆冬の厳選温泉特集</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              <Link href="/prefectures/ehime" className="p-3 bg-white rounded-xl border border-stone-200 text-xs font-semibold text-stone-800 hover:text-cyan-700 hover:border-cyan-300 transition flex items-center justify-between">
                <span>愛媛県のおすすめ観光名所＆温泉宿一覧</span>
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
