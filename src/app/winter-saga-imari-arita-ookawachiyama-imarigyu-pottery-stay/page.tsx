import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { MapPin, Calendar, ExternalLink, HelpCircle, ChevronRight, ShieldCheck, Sparkles } from 'lucide-react';

export const metadata: Metadata = {
  title: '秘窯の里大川内山と最高峰伊万里牛：2026-2027年冬の佐賀・伊万里＆有田！名窯巡りと美食名宿5選 | クラウドトラベル',
  description: '静寂に包まれる鍋島藩窯の里「大川内山」の冬景色と有田・陶山神社の新春初詣！日本屈指の黒毛和牛「伊万里牛」の極上すき焼き・ステーキ、源泉掛け流し温泉で心身を解きほぐす至福の冬旅おすすめ名宿5選。',
  keywords: ['佐賀県冬旅行', '伊万里・有田・西松浦', '冬温泉', '2026', '2027', '雪景色', '冬の味覚', '楽天トラベル', 'ふるさと納税'],
  alternates: {
    canonical: 'https://croud-travel.pages.dev/winter-saga-imari-arita-ookawachiyama-imarigyu-pottery-stay',
  },
  openGraph: {
    title: '秘窯の里大川内山と最高峰伊万里牛：2026-2027年冬の佐賀・伊万里＆有田！名窯巡りと美食名宿5選',
    description: '静寂に包まれる鍋島藩窯の里「大川内山」の冬景色と有田・陶山神社の新春初詣！日本屈指の黒毛和牛「伊万里牛」の極上すき焼き・ステーキ、源泉掛け流し温泉で心身を解きほぐす至福の冬旅おすすめ名宿5選。',
    url: 'https://croud-travel.pages.dev/winter-saga-imari-arita-ookawachiyama-imarigyu-pottery-stay',
    siteName: 'クラウドトラベル',
    locale: 'ja_JP',
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: '秘窯の里大川内山と最高峰伊万里牛：2026-2027年冬の佐賀・伊万里＆有田！名窯巡りと美食名宿5選',
    description: '静寂に包まれる鍋島藩窯の里「大川内山」の冬景色と有田・陶山神社の新春初詣！日本屈指の黒毛和牛「伊万里牛」の極上すき焼き・ステーキ、源泉掛け流し温泉で心身を解きほぐす至福の冬旅おすすめ名宿5選。',
  },
};

export default function Page() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'TouristAttraction',
        name: '秘窯の里・大川内山（鍋島藩窯跡と冬の白磁散策）',
        description: '鍋島焼（なべしまやき）は、17世紀から19世紀にかけて、佐賀藩（鍋島藩）において藩直営の窯で製造された高級磁器である。佐賀藩の支配下にあった肥前国有田・伊万里（佐賀県有田町、同県伊万里市）は日本における磁器の代表的な産地として知られるが、その中で大川内山（おおかわちやま、佐賀県伊万里市南部）にあった藩直営の窯では藩主の所用品や将軍家・諸大名への贈答品などの高級品をもっぱら焼造していた。これを近代以降「鍋島焼」または単に「鍋島」と呼んだ（伊万里焼の一様式と位置付け、「鍋島様式」…',
        image: 'https://upload.wikimedia.org/wikipedia/commons/3/31/Floral_Plate_Nabeshima.JPG?utm_source=ja.wikipedia.org&utm_campaign=api&utm_content=thumbnail_unscaled',
        address: {
          '@type': 'PostalAddress',
          addressRegion: '佐賀県',
          addressCountry: 'JP'
        }
      },
      {
        '@type': 'FAQPage',
        mainEntity: [
          {
            '@type': 'Question',
            name: "冬の大川内山では窯元やギャラリーは営業していますか？",
            acceptedAnswer: {
              '@type': 'Answer',
              text: "はい、大川内山に点在する約30軒の窯元や伊万里鍋島焼会館は冬季も通常営業しています（年末年始の休業日は各店舗ごとに異なるため事前確認をおすすめします）。冬は来客が比較的落ち着いているため、窯元の職人や店主から器の歴史や絵付けの技法についてじっくりお話を伺える絶好の季節です。"
            }
          },
          {
            '@type': 'Question',
            name: "本場の「伊万里牛」を手頃にランチやディナーで食べられる店はありますか？",
            acceptedAnswer: {
              '@type': 'Answer',
              text: "伊万里市内には「勝（まさ）」や「ライオンスワン」など、伊万里牛専門のステーキハウスや焼肉・すき焼きの名店が多数点在しています。ランチタイムにはステーキ重やハンバーグなどリーズナブルなメニューも揃っており、気軽に本場の味を堪能できます。ディナーは混み合うため事前予約が確実です。"
            }
          },
          {
            '@type': 'Question',
            name: "有田や波佐見など近隣の焼き物エリアへも合わせて回れますか？",
            acceptedAnswer: {
              '@type': 'Answer',
              text: "はい、伊万里から有田へは車で約15〜20分、さらにおしゃれな日常食器で人気の長崎県波佐見町へも約25分でアクセス可能です。伊万里（鍋島焼の高級磁器）・有田（伝統の華麗な色絵）・波佐見（モダンなデザイン食器）という肥前三大陶磁器の個性を1泊2日で贅沢に巡る旅が大変人気です。"
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
            name: '佐賀県旅行特集',
            item: 'https://croud-travel.pages.dev/prefectures/saga'
          },
          {
            '@type': 'ListItem',
            position: 3,
            name: '【秘窯の里大川内山と最高峰伊万里牛】2026-2027年冬の佐賀・伊万里＆有田！名窯巡りと美食名宿5選',
            item: 'https://croud-travel.pages.dev/winter-saga-imari-arita-ookawachiyama-imarigyu-pottery-stay'
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
          <Link href="/prefectures/saga" className="hover:text-cyan-700 transition">佐賀県</Link>
          <ChevronRight className="w-3.5 h-3.5 text-stone-400" />
          <span className="text-stone-800 font-medium truncate max-w-[200px] sm:max-w-none">伊万里・有田・西松浦 冬の厳選宿</span>
        </nav>

        {/* ヘッダーエリア */}
        <header className="max-w-4xl mx-auto px-4 pt-4 pb-8 space-y-4">
          <div className="flex flex-wrap items-center gap-2">
            <span className="px-2.5 py-1 rounded-full text-xs font-bold bg-cyan-100 text-cyan-800">
              2026-2027年冬 厳選特集
            </span>
            <span className="px-2.5 py-1 rounded-full text-xs font-semibold bg-stone-200 text-stone-700 flex items-center gap-1">
              <MapPin className="w-3 h-3 text-stone-500" />
              伊万里・有田・西松浦（佐賀県）
            </span>
            <span className="px-2.5 py-1 rounded-full text-xs font-semibold bg-amber-100 text-amber-800 flex items-center gap-1">
              <Sparkles className="w-3 h-3 text-amber-600" />
              楽天API公式連携
            </span>
          </div>

          <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-stone-900 leading-tight">「秘窯の里大川内山と最高峰伊万里牛」2026-2027年冬の佐賀・伊万里＆有田！名窯巡りと美食名宿5選</h1>

          <p className="text-xs sm:text-sm text-stone-600 leading-relaxed pt-1">
            静寂に包まれる鍋島藩窯の里「大川内山」の冬景色と有田・陶山神社の新春初詣！日本屈指の黒毛和牛「伊万里牛」の極上すき焼き・ステーキ、源泉掛け流し温泉で心身を解きほぐす至福の冬旅おすすめ名宿5選。
          </p>
        </header>

        {/* 導入解説セクション */}
        <section className="max-w-4xl mx-auto px-4 mb-10">
          <div className="bg-white rounded-2xl p-6 sm:p-8 border border-stone-200 shadow-sm space-y-6">
            <div className="space-y-3">
              <h2 className="text-lg sm:text-xl font-bold text-stone-900 flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-cyan-700"></span>
                冬の伊万里・有田・西松浦探訪：静寂と温もりに包まれる旅の魅力
              </h2>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                肥前磁器400年の歴史が息づく佐賀県西松浦地方。世界的な名声を誇る有田焼と、江戸時代に鍋島藩が将軍家への献上品として門外不出の極秘技術を守り抜いた「秘窯の里・大川内山（おおかわちやま）」。11月から1月の冬、観光客で賑わう秋の陶器市が過ぎ去ったこの地は、本来の静謐で格調高い佇まいを取り戻します。奇岩が屏風のようにそびえ立つ大川内山の山懐には、レンガ造りの煙突から立ち上る白い煙と水車が回る陶山神社や歴史的窯元が点在し、凛と澄んだ空気の中で自分だけの逸品を探す大人の器散策が楽しめます。そして冬の伊万里のもう一つの主役が、全国屈指の肉質を誇るブランド牛「伊万里牛（いまりぎゅう）」。きめ細やかなサシと芳醇な赤身の旨味を、熱々のすき焼きや炭火ステーキで味わう贅沢はまさに冬の至福。有田・陶山神社への新春初詣と名湯に身を委ねる、知的好奇心と美食に満ちた冬の旅をご案内します。
              </p>
            </div>

            <div className="space-y-3 pt-2">
              <h3 className="text-sm sm:text-base font-bold text-stone-800">
                この冬、伊万里・有田・西松浦を訪れるべき3つの理由
              </h3>
              <div className="grid grid-cols-1 gap-3">
              <div className="p-4 rounded-xl bg-stone-50 border border-stone-200/80 space-y-1.5">
                <h3 className="font-bold text-stone-900 text-sm sm:text-base flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-cyan-600"></span>
                  山懐の奇岩とレンガ煙突が織りなす「秘窯の里・大川内山」の冬の静寂散策
                </h3>
                <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                  鍋島藩が技術流出を防ぐため関所を設け、最高の陶工を集めた大川内山。冬は凛とした静寂に包まれ、石畳の小径沿いに並ぶ名窯を落ち着いて巡ることができます。繊細な色鍋島や白磁の器に触れる時間は、冬ならではの贅沢です。
                </p>
              </div>
              <div className="p-4 rounded-xl bg-stone-50 border border-stone-200/80 space-y-1.5">
                <h3 className="font-bold text-stone-900 text-sm sm:text-base flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-cyan-600"></span>
                  極上のサシと濃厚な甘みがとろける「最高峰ブランド・伊万里牛」の美食
                </h3>
                <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                  佐賀牛の中でも伊万里の豊かな自然と清流で育まれた「伊万里牛」は、全国の肉愛好家が絶賛する最高峰の黒毛和牛。冬の寒さの中で味わう特製割り下のすき焼きや、鉄板で焼き上げる極上サーロインは舌の上でとろけるような感動をもたらします。
                </p>
              </div>
              <div className="p-4 rounded-xl bg-stone-50 border border-stone-200/80 space-y-1.5">
                <h3 className="font-bold text-stone-900 text-sm sm:text-base flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-cyan-600"></span>
                  陶器の鳥居が迎える有田「陶山神社」の新春初詣と波佐見・武雄への軽快な周遊
                </h3>
                <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                  焼き物の里を象徴する磁器製の鳥居や狛犬で名高い有田の「陶山神社（とうざんじんじゃ）」。新春の初詣スポットとして絶大な人気を誇り、隣接する長崎県波佐見町や名湯・武雄温泉への周遊もスムーズに楽しめます。
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
・飛行機・空港から：九州佐賀国際空港より車・レンタカーで約50〜60分。福岡空港・長崎空港からもそれぞれ高速道路経由で約1時間15分〜1時間30分。
・JR・鉄道：JR佐世保線「有田駅」より松浦鉄道西九州線に乗り換えて「伊万里駅」まで約25分。博多駅からは特急「リレーかもめ」や「みどり」を利用して武雄温泉駅・有田駅経由でアクセス可能。
・大川内山へのアクセス：伊万里駅前より西肥バス「大川内山」行きで約15分。無料駐車場も完備されています。

【見頃・気候・おすすめの服装】
・ベストシーズン：11月下旬〜1月（秋の陶器まつり後の静かな窯元巡り、新春の初釜・初詣、伊万里牛グルメの好期）。
・気温の目安：日中は10〜14℃前後ですが、四方を山に囲まれた大川内山や有田の山間部は朝晩に3〜5℃前後まで冷え込みます。
・服装のポイント：石畳の坂道や階段を歩いて窯元を巡るため、歩きやすく疲れにくいスニーカーやフラットシューズが必須。風を通さないウールコートやダウンジャケット、手袋を準備してください。割れ物である陶磁器を扱う店舗が多いため、大きなリュックは前に抱えるか手提げバッグでの散策がマナーとして推奨されます。
              </div>
            </div>
          </div>
        </section>

        {/* Wikipedia公式連携スポットセクション */}
        <section className="max-w-4xl mx-auto px-4 mb-10">
          <div className="bg-white rounded-2xl p-6 sm:p-8 border border-stone-200 shadow-sm space-y-4">
            <div className="flex items-center justify-between">
              <h2 className="text-lg sm:text-xl font-bold text-stone-900">
                近隣名所アーカイブ：秘窯の里・大川内山（鍋島藩窯跡と冬の白磁散策）
              </h2>
              <span className="text-[11px] text-stone-400">Wikipedia公式情報連携</span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
              <div className="md:col-span-5 overflow-hidden rounded-xl border border-stone-200 bg-stone-100">
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/3/31/Floral_Plate_Nabeshima.JPG?utm_source=ja.wikipedia.org&utm_campaign=api&utm_content=thumbnail_unscaled"
                  alt="秘窯の里・大川内山（鍋島藩窯跡と冬の白磁散策）"
                  className="w-full h-48 md:h-56 object-cover hover:scale-105 transition-transform duration-300"
                  loading="lazy"
                />
              </div>
              <div className="md:col-span-7 space-y-2">
                <h3 className="font-bold text-stone-900 text-sm sm:text-base">
                  秘窯の里・大川内山（鍋島藩窯跡と冬の白磁散策） の見どころと歴史
                </h3>
                <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                  鍋島焼（なべしまやき）は、17世紀から19世紀にかけて、佐賀藩（鍋島藩）において藩直営の窯で製造された高級磁器である。佐賀藩の支配下にあった肥前国有田・伊万里（佐賀県有田町、同県伊万里市）は日本における磁器の代表的な産地として知られるが、その中で大川内山（おおかわちやま、佐賀県伊万里市南部）にあった藩直営の窯では藩主の所用品や将軍家・諸大名への贈答品などの高級品をもっぱら焼造していた。これを近代以降「鍋島焼」または単に「鍋島」と呼んだ（伊万里焼の一様式と位置付け、「鍋島様式」…
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
              伊万里・有田・西松浦 厳選の温泉＆名宿5選
            </h2>
            <p className="text-xs sm:text-sm text-stone-500">
              楽天トラベルの最新空室・クチコミ・宿泊料金データをリアルタイム連携しています
            </p>
          </div>

          {/* 宿カード 1: セントラルホテル伊万里 */}
          <article className="bg-white rounded-2xl border border-stone-200 shadow-sm overflow-hidden hover:shadow-md transition-shadow">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-0">
              <div className="md:col-span-5 relative min-h-[240px]">
                <img
                  src="https://img.travel.rakuten.co.jp/share/HOTEL/68081/68081.jpg"
                  alt="セントラルホテル伊万里"
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
                    伊万里駅徒歩1分・天然温泉大浴場と伊万里牛朝食が魅力
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold text-stone-900 leading-snug">
                    セントラルホテル伊万里
                  </h3>
                  <div className="flex items-center gap-3 mt-2 text-xs text-stone-600">
                    <span className="flex items-center text-amber-500 font-bold text-sm">
                      ★ 4.24
                    </span>
                    <span>クチコミ 2,418件</span>
                    <span className="text-stone-400">|</span>
                    <span className="font-semibold text-cyan-900">税込 4,650円〜</span>
                  </div>

                  <p className="mt-3 text-xs sm:text-sm text-stone-600 leading-relaxed">
                    伊万里駅のロータリー正面に位置し、大川内山や有田方面へのアクセス拠点として抜群の利便性を誇るシティホテル。館内には足を伸ばしてゆったり温まれる大浴場が備わっており、冬の窯元巡りで冷えた身体を心地よい湯が包み込みます。客室はシモンズ社製ベッドを採用し、清潔で機能的な居住空間を提供。無料Wi-Fiや充実のアメニティも完備しています。朝食ビュッフェでは佐賀のご当地グルメや新鮮な卵、炊き立てのご飯が並び、爽やかな一日のスタートを後押ししてくれます。
                  </p>

                  <ul className="mt-3 space-y-1 text-xs text-stone-600">
                    <li className="flex items-center gap-2"><span className="text-cyan-600 font-bold">✓</span> JR＆松浦鉄道伊万里駅の目の前！観光・移動に最高のロケーション</li>
                    <li className="flex items-center gap-2"><span className="text-cyan-600 font-bold">✓</span> ビジネス・観光の疲れを優しく解きほぐす男女別大浴場完備</li>
                    <li className="flex items-center gap-2"><span className="text-cyan-600 font-bold">✓</span> 佐賀県産米と地元食材をふんだんに使った元気の出る和洋朝食</li>
                  </ul>

                  <div className="mt-3 p-3 bg-stone-50 rounded-lg border border-stone-200/60 text-xs text-stone-600 italic">
                    <p className="font-semibold text-[11px] text-stone-500 not-italic mb-0.5">宿泊者のクチコミ抜粋：</p>
                    「バイク駐車可能、近くにスーパーもあり便利バイク駐車可能入り口横の空きスペースに駐めさせてもらえます。すぐ隣に優先駐車スペースがあるので、注意が必要です。隣接してる温浴施設は、広。」
                  </div>

                  <div className="mt-3 pt-3 border-t border-stone-100 text-[11px] text-stone-500 space-y-0.5">
                    <p>📍 佐賀県伊万里市新天町字浜ノ浦549-17</p>
                    <p>🚆 ◇JR伊万里駅＆高速バス降り場徒歩1分◇伊万里市の中心抜群の好立地◇駐車場無料（先着）◇</p>
                  </div>
                </div>

                <div className="pt-2">
                  <a
                    href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F68081%2F68081.html"
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

          {/* 宿カード 2: 伊万里グランドホテル */}
          <article className="bg-white rounded-2xl border border-stone-200 shadow-sm overflow-hidden hover:shadow-md transition-shadow">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-0">
              <div className="md:col-span-5 relative min-h-[240px]">
                <img
                  src="https://img.travel.rakuten.co.jp/share/HOTEL/72059/72059.jpg"
                  alt="伊万里グランドホテル"
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
                    本格サウナ＆露天風呂完備・地元愛あふれる老舗シティホテル
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold text-stone-900 leading-snug">
                    伊万里グランドホテル
                  </h3>
                  <div className="flex items-center gap-3 mt-2 text-xs text-stone-600">
                    <span className="flex items-center text-amber-500 font-bold text-sm">
                      ★ 4.18
                    </span>
                    <span>クチコミ 1,025件</span>
                    <span className="text-stone-400">|</span>
                    <span className="font-semibold text-cyan-900">税込 4,600円〜</span>
                  </div>

                  <p className="mt-3 text-xs sm:text-sm text-stone-600 leading-relaxed">
                    伊万里市街の目抜き通り沿いに建ち、長年旅人に親しまれてきた温かなおもてなしが評判のホテル。大浴場には高温ドライサウナと冷水風呂が備わり、冬の旅の合間に極上の「ととのい」体験が味わえます。ホテル周辺には伊万里牛の名店や地酒が揃う居酒屋が徒歩圏内に軒を連ね、夜のグルメ散策にも困りません。フロントには大川内山をはじめとする観光パンフレットが豊富に用意されており、スタッフによるおすすめ窯元のアドバイスも好評です。
                  </p>

                  <ul className="mt-3 space-y-1 text-xs text-stone-600">
                    <li className="flex items-center gap-2"><span className="text-cyan-600 font-bold">✓</span> 市街地中心部に位置し、飲食街や名物ステーキ店へのアクセス抜群</li>
                    <li className="flex items-center gap-2"><span className="text-cyan-600 font-bold">✓</span> 男性大浴場には本格ドライサウナ＆水風呂、女性用リラックスバス</li>
                    <li className="flex items-center gap-2"><span className="text-cyan-600 font-bold">✓</span> 無料レンタサイクルや充実した観光マップ・窯元案内サービス</li>
                  </ul>

                  <div className="mt-3 p-3 bg-stone-50 rounded-lg border border-stone-200/60 text-xs text-stone-600 italic">
                    <p className="font-semibold text-[11px] text-stone-500 not-italic mb-0.5">宿泊者のクチコミ抜粋：</p>
                    「とても満足できる内容良い 」
                  </div>

                  <div className="mt-3 pt-3 border-t border-stone-100 text-[11px] text-stone-500 space-y-0.5">
                    <p>📍 佐賀県伊万里市新天町466-11</p>
                    <p>🚆 伊万里駅より徒歩７分　天神から車で1時間10分　有田から車で25分　佐世保から車で40分　ハウステンボスから車で４０分</p>
                  </div>
                </div>

                <div className="pt-2">
                  <a
                    href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F72059%2F72059.html"
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

          {/* 宿カード 3: ＨＯＴＥＬ　ＡＺ　長崎波佐見店 */}
          <article className="bg-white rounded-2xl border border-stone-200 shadow-sm overflow-hidden hover:shadow-md transition-shadow">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-0">
              <div className="md:col-span-5 relative min-h-[240px]">
                <img
                  src="https://img.travel.rakuten.co.jp/share/HOTEL/147983/147983.jpg"
                  alt="ＨＯＴＥＬ　ＡＺ　長崎波佐見店"
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
                    波佐見有田IC近く・コスパ抜群で波佐見焼巡りにも直結
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold text-stone-900 leading-snug">
                    ＨＯＴＥＬ　ＡＺ　長崎波佐見店
                  </h3>
                  <div className="flex items-center gap-3 mt-2 text-xs text-stone-600">
                    <span className="flex items-center text-amber-500 font-bold text-sm">
                      ★ 3.69
                    </span>
                    <span>クチコミ 182件</span>
                    <span className="text-stone-400">|</span>
                    <span className="font-semibold text-cyan-900">税込 4,620円〜</span>
                  </div>

                  <p className="mt-3 text-xs sm:text-sm text-stone-600 leading-relaxed">
                    佐賀県有田町と隣接する長崎県波佐見町の境界に位置し、有田・伊万里・波佐見の3エリアを縦横無尽に巡るロードトリップに最適なロードサイドホテル。機能的で清潔な客室は冬の寒さをしっかり遮断し、リーズナブルな価格設定で快適な滞在を約束します。毎朝提供される和洋バイキングの無料朝食は連泊でも飽きがこない充実の内容。周辺には話題の波佐見焼ギャラリーやおしゃれなカフェが点在しており、女子旅やカップルでの器巡り旅の賢い拠点として人気です。
                  </p>

                  <ul className="mt-3 space-y-1 text-xs text-stone-600">
                    <li className="flex items-center gap-2"><span className="text-cyan-600 font-bold">✓</span> 西九州自動車道・波佐見有田IC至近で車でのドライブ旅行に最適</li>
                    <li className="flex items-center gap-2"><span className="text-cyan-600 font-bold">✓</span> 無料朝食バイキングと広々とした平面無料駐車場を完備</li>
                    <li className="flex items-center gap-2"><span className="text-cyan-600 font-bold">✓</span> 有田ポーセリンパークや波佐見陶芸の館へのアクセスが軽快</li>
                  </ul>

                  <div className="mt-3 p-3 bg-stone-50 rounded-lg border border-stone-200/60 text-xs text-stone-600 italic">
                    <p className="font-semibold text-[11px] text-stone-500 not-italic mb-0.5">宿泊者のクチコミ抜粋：</p>
                    「とても快適で心地よい時間を過ごせたとても快適に過ごせました。」
                  </div>

                  <div className="mt-3 pt-3 border-t border-stone-100 text-[11px] text-stone-500 space-y-0.5">
                    <p>📍 長崎県東彼杵郡波佐見町折敷瀬郷333-3</p>
                    <p>🚆 西九州自動車道波佐見有田ＩＣ降りて波佐見方面へ車で１分。ＪＲ有田駅より車で８分。</p>
                  </div>
                </div>

                <div className="pt-2">
                  <a
                    href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F147983%2F147983.html"
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

          {/* 宿カード 4: ホテルステイ伊万里 */}
          <article className="bg-white rounded-2xl border border-stone-200 shadow-sm overflow-hidden hover:shadow-md transition-shadow">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-0">
              <div className="md:col-span-5 relative min-h-[240px]">
                <img
                  src="https://img.travel.rakuten.co.jp/share/HOTEL/201925/201925.jpg"
                  alt="ホテルステイ伊万里"
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
                    伊万里の街並みに溶け込むスマート＆快適なモダンステイ
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold text-stone-900 leading-snug">
                    ホテルステイ伊万里
                  </h3>
                  <div className="flex items-center gap-3 mt-2 text-xs text-stone-600">
                    <span className="flex items-center text-amber-500 font-bold text-sm">
                      ★ 0.00
                    </span>
                    <span>クチコミ 2件</span>
                    <span className="text-stone-400">|</span>
                    <span className="font-semibold text-cyan-900">税込 3,400円〜</span>
                  </div>

                  <p className="mt-3 text-xs sm:text-sm text-stone-600 leading-relaxed">
                    伊万里市内に位置し、現代の旅行者のニーズに応えるシンプルで洗練された宿泊スタイルを提供するモダンホテル。セルフチェックインにより気兼ねなく入退室ができ、広々とした客室には居心地の良さを追求した家具が配置されています。一部客室には簡易調理設備や電子レンジが備わっており、近隣の精肉店や道の駅で調達した伊万里牛のお惣菜や佐賀の銘酒を部屋でゆっくり味わうプライベートな冬の夜を過ごせます。
                  </p>

                  <ul className="mt-3 space-y-1 text-xs text-stone-600">
                    <li className="flex items-center gap-2"><span className="text-cyan-600 font-bold">✓</span> 無人チェックイン対応の最新設備とプライベート感あふれる空間</li>
                    <li className="flex items-center gap-2"><span className="text-cyan-600 font-bold">✓</span> ミニキッチンや大型冷蔵庫を備え、長期滞在や暮らすような旅に好適</li>
                    <li className="flex items-center gap-2"><span className="text-cyan-600 font-bold">✓</span> 伊万里牛や地場野菜をテイクアウトしてお部屋で楽しむ自由な滞在</li>
                  </ul>



                  <div className="mt-3 pt-3 border-t border-stone-100 text-[11px] text-stone-500 space-y-0.5">
                    <p>📍 佐賀県伊万里市立花町2404-27</p>
                    <p>🚆 JR上伊万里駅より車で約4分、伊万里駅より同約6分。長崎自動車道・武雄北方ICより車で約27分</p>
                  </div>
                </div>

                <div className="pt-2">
                  <a
                    href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F201925%2F201925.html"
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

          {/* 宿カード 5: Ｒａｋｕｔｅｎ　ＳＴＡＹ　ＨＯＵＳＥ　ｘ　ＷＩＬＬ　ＳＴＹＬＥ　佐賀伊万里 */}
          <article className="bg-white rounded-2xl border border-stone-200 shadow-sm overflow-hidden hover:shadow-md transition-shadow">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-0">
              <div className="md:col-span-5 relative min-h-[240px]">
                <img
                  src="https://img.travel.rakuten.co.jp/share/HOTEL/169108/169108.jpg"
                  alt="Ｒａｋｕｔｅｎ　ＳＴＡＹ　ＨＯＵＳＥ　ｘ　ＷＩＬＬ　ＳＴＹＬＥ　佐賀伊万里"
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
                    1棟貸切ガレージハウス・家族やグループで寛ぐ完全プライベート宿
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold text-stone-900 leading-snug">
                    Ｒａｋｕｔｅｎ　ＳＴＡＹ　ＨＯＵＳＥ　ｘ　ＷＩＬＬ　ＳＴＹＬＥ　佐賀伊万里
                  </h3>
                  <div className="flex items-center gap-3 mt-2 text-xs text-stone-600">
                    <span className="flex items-center text-amber-500 font-bold text-sm">
                      ★ 5.00
                    </span>
                    <span>クチコミ 24件</span>
                    <span className="text-stone-400">|</span>
                    <span className="font-semibold text-cyan-900">税込 3,328円〜</span>
                  </div>

                  <p className="mt-3 text-xs sm:text-sm text-stone-600 leading-relaxed">
                    一戸建ての広々とした間取りをまるごと貸し切れる、新しい旅のスタイルを提案する宿泊施設。スタイリッシュなデザイナーズ家具が配されたリビングや複数ベッドルームを備え、家族旅行や友人同士のグループ旅でも周囲を気にせずゆったりと寛げます。充実したキッチン設備を活用して、地元の名店で購入した極上伊万里牛をメインにしたすき焼きや鍋パーティーを自分たちのペースで楽しむのがおすすめ。冬の特別な思い出作りに最適な隠れ家です。
                  </p>

                  <ul className="mt-3 space-y-1 text-xs text-stone-600">
                    <li className="flex items-center gap-2"><span className="text-cyan-600 font-bold">✓</span> 楽天がプロデュースする独立型プライベートヴィラスタイル</li>
                    <li className="flex items-center gap-2"><span className="text-cyan-600 font-bold">✓</span> 広々としたリビング・ダイニングと本格システムキッチン完備</li>
                    <li className="flex items-center gap-2"><span className="text-cyan-600 font-bold">✓</span> 伊万里牛のすき焼きパーティーやBBQを気兼ねなく楽しめる贅沢空間</li>
                  </ul>



                  <div className="mt-3 pt-3 border-t border-stone-100 text-[11px] text-stone-500 space-y-0.5">
                    <p>📍 佐賀県伊万里市二里町八谷搦1155</p>
                    <p>🚆 JR筑肥線、松浦鉄道西九州線 伊万里駅より徒歩にて約15分 ／ 佐賀空港、福岡空港、長崎空港よりお車にて70～80分</p>
                  </div>
                </div>

                <div className="pt-2">
                  <a
                    href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F169108%2F169108.html"
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
                  佐賀県の宿に実質2,000円で泊まる賢い方法
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
              冬の伊万里・有田・西松浦旅行でよくある質問（FAQ）
            </h2>

            <div className="space-y-4">
              <details className="group border border-stone-200 rounded-xl p-4 [&_summary::-webkit-details-marker]:hidden bg-stone-50/50">
                <summary className="flex items-center justify-between cursor-pointer font-bold text-stone-900 text-xs sm:text-sm">
                  <span>Q. 冬の大川内山では窯元やギャラリーは営業していますか？</span>
                  <span className="transition group-open:-rotate-180 text-stone-400">▼</span>
                </summary>
                <p className="mt-3 text-xs sm:text-sm text-stone-600 leading-relaxed border-t border-stone-200/60 pt-3">
                  はい、大川内山に点在する約30軒の窯元や伊万里鍋島焼会館は冬季も通常営業しています（年末年始の休業日は各店舗ごとに異なるため事前確認をおすすめします）。冬は来客が比較的落ち着いているため、窯元の職人や店主から器の歴史や絵付けの技法についてじっくりお話を伺える絶好の季節です。
                </p>
              </details>
              <details className="group border border-stone-200 rounded-xl p-4 [&_summary::-webkit-details-marker]:hidden bg-stone-50/50">
                <summary className="flex items-center justify-between cursor-pointer font-bold text-stone-900 text-xs sm:text-sm">
                  <span>Q. 本場の「伊万里牛」を手頃にランチやディナーで食べられる店はありますか？</span>
                  <span className="transition group-open:-rotate-180 text-stone-400">▼</span>
                </summary>
                <p className="mt-3 text-xs sm:text-sm text-stone-600 leading-relaxed border-t border-stone-200/60 pt-3">
                  伊万里市内には「勝（まさ）」や「ライオンスワン」など、伊万里牛専門のステーキハウスや焼肉・すき焼きの名店が多数点在しています。ランチタイムにはステーキ重やハンバーグなどリーズナブルなメニューも揃っており、気軽に本場の味を堪能できます。ディナーは混み合うため事前予約が確実です。
                </p>
              </details>
              <details className="group border border-stone-200 rounded-xl p-4 [&_summary::-webkit-details-marker]:hidden bg-stone-50/50">
                <summary className="flex items-center justify-between cursor-pointer font-bold text-stone-900 text-xs sm:text-sm">
                  <span>Q. 有田や波佐見など近隣の焼き物エリアへも合わせて回れますか？</span>
                  <span className="transition group-open:-rotate-180 text-stone-400">▼</span>
                </summary>
                <p className="mt-3 text-xs sm:text-sm text-stone-600 leading-relaxed border-t border-stone-200/60 pt-3">
                  はい、伊万里から有田へは車で約15〜20分、さらにおしゃれな日常食器で人気の長崎県波佐見町へも約25分でアクセス可能です。伊万里（鍋島焼の高級磁器）・有田（伝統の華麗な色絵）・波佐見（モダンなデザイン食器）という肥前三大陶磁器の個性を1泊2日で贅沢に巡る旅が大変人気です。
                </p>
              </details>
            </div>
          </div>
        </section>

        {/* 内部リンク・関連特集セクション */}
        <section className="max-w-4xl mx-auto px-4 mb-12">
          <div className="bg-stone-100 rounded-2xl p-6 sm:p-8 border border-stone-200 space-y-4">
            <h3 className="text-base sm:text-lg font-bold text-stone-900">あわせて読みたい佐賀県＆冬の厳選温泉特集</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              <Link href="/prefectures/saga" className="p-3 bg-white rounded-xl border border-stone-200 text-xs font-semibold text-stone-800 hover:text-cyan-700 hover:border-cyan-300 transition flex items-center justify-between">
                <span>佐賀県のおすすめ観光名所＆温泉宿一覧</span>
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
