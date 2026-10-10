import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next';
import { ExternalLink, Calendar, MapPin, Sparkles, ChevronRight, CheckCircle2, Info, Compass, HelpCircle } from 'lucide-react';

export const metadata: Metadata = {
  title: '薩摩の小京都・知覧武家屋敷庭園と開聞岳絶景：2026-2027年冬の鹿児島・南薩摩＆枕崎！本場一本釣り鰹と鹿児島黒豚・黒牛会席名宿5選 | 旅宿クラウド',
  description: '薩摩の小京都・国の名勝「知覧武家屋敷庭園」の冬枯山水美と、薩摩富士・開聞岳を望む雄大な冬パノラマ！本場枕崎の最高級本枯節・一本釣り鰹の藁焼きタタキや、極上の鹿児島黒豚・鹿児島黒牛会席に舌鼓。温暖な南薩摩の心地よい潮風と美肌天然温泉に癒やされる厳選名宿5選。',
  keywords: ['南薩摩・知覧・枕崎・開聞岳', '鹿児島県', '冬旅行', '温泉旅館', '楽天トラベル', 'ふるさと納税', 'ホテルおすすめ'],
  openGraph: {
    title: '薩摩の小京都・知覧武家屋敷庭園と開聞岳絶景：2026-2027年冬の鹿児島・南薩摩＆枕崎！本場一本釣り鰹と鹿児島黒豚・黒牛会席名宿5選 | 旅宿クラウド',
    description: '薩摩の小京都・国の名勝「知覧武家屋敷庭園」の冬枯山水美と、薩摩富士・開聞岳を望む雄大な冬パノラマ！本場枕崎の最高級本枯節・一本釣り鰹の藁焼きタタキや、極上の鹿児島黒豚・鹿児島黒牛会席に舌鼓。温暖な南薩摩の心地よい潮風と美肌天然温泉に癒やされる厳選名宿5選。',
    url: 'https://croud-travel.pages.dev/winter-kagoshima-chiran-samurai-makurazaki-katsuo-kaimondake-kurobuta-stay',
    siteName: '旅宿クラウド',
    locale: 'ja_JP',
    type: 'article',
    images: [
      {
        url: 'https://img.travel.rakuten.co.jp/share/HOTEL/50792/50792.jpg',
        width: 1200,
        height: 630,
        alt: '【薩摩の小京都・知覧武家屋敷庭園と開聞岳絶景】2026-2027年冬の鹿児島・南薩摩＆枕崎！本場一本釣り鰹と鹿児島黒豚・黒牛会席名宿5選',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: '薩摩の小京都・知覧武家屋敷庭園と開聞岳絶景：2026-2027年冬の鹿児島・南薩摩＆枕崎！本場一本釣り鰹と鹿児島黒豚・黒牛会席名宿5選',
    description: '薩摩の小京都・国の名勝「知覧武家屋敷庭園」の冬枯山水美と、薩摩富士・開聞岳を望む雄大な冬パノラマ！本場枕崎の最高級本枯節・一本釣り鰹の藁焼きタタキや、極上の鹿児島黒豚・鹿児島黒牛会席に舌鼓。温暖な南薩摩の心地よい潮風と美肌天然温泉に癒やされる厳選名宿5選。',
  },
};

export default function FeaturePage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'TouristDestination',
    name: '南薩摩・知覧・枕崎・開聞岳',
    description: '薩摩の小京都・国の名勝「知覧武家屋敷庭園」の冬枯山水美と、薩摩富士・開聞岳を望む雄大な冬パノラマ！本場枕崎の最高級本枯節・一本釣り鰹の藁焼きタタキや、極上の鹿児島黒豚・鹿児島黒牛会席に舌鼓。温暖な南薩摩の心地よい潮風と美肌天然温泉に癒やされる厳選名宿5選。',
    url: 'https://croud-travel.pages.dev/winter-kagoshima-chiran-samurai-makurazaki-katsuo-kaimondake-kurobuta-stay',
    touristType: ['温泉旅行', 'グルメ旅行', '歴史散策', '冬旅行'],
    containedInPlace: {
      '@type': 'AdministrativeArea',
      name: '鹿児島県',
    },
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'おすすめ宿泊施設',
      itemListElement: [
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'LodgingBusiness',
            name: '空と海を臨む宿　Ocean　Hotel　Iwato（旧：枕崎観光ホテル　岩戸）',
            url: 'https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F50792%2F50792.html',
            image: 'https://img.travel.rakuten.co.jp/share/HOTEL/50792/50792.jpg',
            address: '鹿児島県 枕崎市岩戸町58',
            aggregateRating: {
              '@type': 'AggregateRating',
              ratingValue: '4.04',
              reviewCount: '249'
            }
          }
        },         {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'LodgingBusiness',
            name: '鹿児島　砂むし温泉　指宿白水館',
            url: 'https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F12529%2F12529.html',
            image: 'https://img.travel.rakuten.co.jp/share/HOTEL/12529/12529.jpg',
            address: '鹿児島県 指宿市東方12126-12',
            aggregateRating: {
              '@type': 'AggregateRating',
              ratingValue: '4.48',
              reviewCount: '2473'
            }
          }
        },         {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'LodgingBusiness',
            name: '指宿温泉　夫婦露天風呂の宿　吟松（ぎんしょう）',
            url: 'https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F49347%2F49347.html',
            image: 'https://img.travel.rakuten.co.jp/share/HOTEL/49347/49347.jpg',
            address: '鹿児島県 指宿市湯の浜5-26-29',
            aggregateRating: {
              '@type': 'AggregateRating',
              ratingValue: '4.61',
              reviewCount: '1578'
            }
          }
        },         {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'LodgingBusiness',
            name: '指宿温泉　休暇村　指宿',
            url: 'https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F8580%2F8580.html',
            image: 'https://img.travel.rakuten.co.jp/share/HOTEL/8580/8580.jpg',
            address: '鹿児島県 指宿市東方10445',
            aggregateRating: {
              '@type': 'AggregateRating',
              ratingValue: '4.29',
              reviewCount: '1207'
            }
          }
        },         {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'LodgingBusiness',
            name: '吹上砂丘荘',
            url: 'https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F198633%2F198633.html',
            image: 'https://img.travel.rakuten.co.jp/share/HOTEL/198633/198633.jpg',
            address: '鹿児島県 日置市吹上町今田1004-3',
            aggregateRating: {
              '@type': 'AggregateRating',
              ratingValue: '4.16',
              reviewCount: '19'
            }
          }
        }
      ]
    }
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <article className="min-h-screen bg-stone-50/50 pb-20">
        {/* ヒーローヘッダー */}
        <header className="relative bg-gradient-to-br from-stone-900 via-stone-850 to-stone-900 text-white pt-24 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
          <div className="absolute inset-0 opacity-20 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px]" />
          <div className="max-w-4xl mx-auto relative z-10 space-y-6">
            <div className="flex flex-wrap items-center gap-2 text-xs sm:text-sm text-cyan-300 font-semibold tracking-wider">
              <span className="bg-cyan-950/80 border border-cyan-800/60 px-3 py-1 rounded-full">
                冬の厳選特集（11月・12月・1月）
              </span>
              <span className="bg-stone-800/80 px-3 py-1 rounded-full text-stone-300">
                鹿児島県・南薩摩・知覧・枕崎・開聞岳
              </span>
            </div>

            <h1 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-tight text-white">「薩摩の小京都・知覧武家屋敷庭園と開聞岳絶景」2026-2027年冬の鹿児島・南薩摩＆枕崎！本場一本釣り鰹と鹿児島黒豚・黒牛会席名宿5選</h1>

            <p className="text-stone-300 text-sm sm:text-base leading-relaxed">
              薩摩の小京都・国の名勝「知覧武家屋敷庭園」の冬枯山水美と、薩摩富士・開聞岳を望む雄大な冬パノラマ！本場枕崎の最高級本枯節・一本釣り鰹の藁焼きタタキや、極上の鹿児島黒豚・鹿児島黒牛会席に舌鼓。温暖な南薩摩の心地よい潮風と美肌天然温泉に癒やされる厳選名宿5選。
            </p>

            <div className="flex flex-wrap items-center gap-4 text-xs text-stone-700 pt-2 border-t border-stone-800">
              <span className="flex items-center gap-1.5">
                <Calendar className="w-4 h-4 text-cyan-400" />
                2026-2027年 冬シーズン最新版
              </span>
              <span className="flex items-center gap-1.5">
                <MapPin className="w-4 h-4 text-rose-400" />
                南薩摩・知覧・枕崎・開聞岳（鹿児島県）
              </span>
              <span className="flex items-center gap-1.5">
                <Sparkles className="w-4 h-4 text-amber-400" />
                楽天トラベル最新API連携・高評価宿厳選
              </span>
            </div>
          </div>
        </header>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 space-y-16">
          {/* イントロダクション紀行文 */}
          <section className="bg-white rounded-2xl p-6 sm:p-10 border border-stone-200/80 shadow-sm space-y-6">
            <div className="border-b border-stone-100 pb-4">
              <span className="text-xs font-bold text-cyan-700 tracking-wider uppercase">Travel Narrative</span>
              <h2 className="text-xl sm:text-2xl font-bold text-stone-900 mt-1">
                冬の南薩摩・知覧・枕崎・開聞岳を旅する魅力と情話
              </h2>
            </div>
            <div className="prose prose-stone max-w-none text-stone-700 leading-relaxed text-sm sm:text-base space-y-4">
              <p className="first-letter:text-3xl first-letter:font-bold first-letter:text-cyan-800 first-letter:mr-1 float-none">
                南国の陽光が優しく降り注ぎ、真冬でも平均気温10度前後と穏やかな気候に恵まれる鹿児島県・南薩摩エリア。薩摩半島の南部に位置する南九州市知覧町は、江戸時代に薩摩藩独特の外城制度によって築かれた武家集落が今も色濃く残る『薩摩の小京都』です。約700メートルにわたる美しい通りには、端正に積み上げられた玉石垣と緑鮮やかなイヌマキの生垣がどこまでも続き、その奥には国の名勝に指定された7つの武家屋敷庭園が静かに佇んでいます。冬の澄んだ大気のもと、遠く母ヶ岳を借景にした枯山水庭園を眺めれば、四季折々の喧騒が去った静寂の中で、薩摩武士たちの美意識と哲学が胸に染み入ります。知覧から南西へ車を走らせると、日本屈指の鰹の港町・枕崎へと至ります。冬の枕崎港は、冷涼な季節風に乗って芳しい鰹節の香りが町中を包み込み、港の料理店では一本釣り鰹を豪快な藁焼きで仕上げた香ばしいタタキや、黄金色に輝く極上の本枯節出汁をふんだんに使った鍋料理が冷えた身体を芯から温めてくれます。さらに車窓の彼方には、東シナ海の青い海原から円錐形の優美な姿を立ち上げる『薩摩富士』こと開聞岳が凛然と聳え立ち、元旦の初日の出や新春のドライブに息を呑む絶景を描き出します。南薩摩の旅の締めくくりには、湯量豊富な指宿温泉の砂むし風呂や天然露天風呂に浸かり、きめ細やかなサシが入った最高峰の鹿児島黒牛や甘みたっぷりの鹿児島黒豚しゃぶしゃぶに舌鼓。歴史情緒と海の幸、雄大な火山景観が織りなす冬の南薩摩の贅沢な旅へご案内します。
              </p>
            </div>
          </section>

          {/* おすすめの理由3選 */}
          <section className="space-y-6">
            <div className="border-b border-stone-200 pb-3">
              <span className="text-xs font-bold text-cyan-700 tracking-wider uppercase">Seasonal Highlights</span>
              <h2 className="text-xl sm:text-2xl font-bold text-stone-900 mt-1">
                冬（11・12・1月）に訪れるべき3つの理由
              </h2>
            </div>
            <div className="grid grid-cols-1 gap-4">

            <div className="bg-white rounded-xl p-6 border border-stone-200/80 shadow-sm space-y-3">
              <div className="flex items-center gap-3">
                <span className="w-8 h-8 rounded-full bg-cyan-800 text-white font-bold flex items-center justify-center text-sm shrink-0">
                  1
                </span>
                <h3 className="font-bold text-stone-900 text-base sm:text-lg">
                  端正な石垣と借景枯山水が織りなす静寂の美！国の名勝「知覧武家屋敷庭園」
                </h3>
              </div>
              <p className="text-sm text-stone-600 leading-relaxed pl-11">
                江戸時代の薩摩武士が美を競い合った知覧麓の武家屋敷群。母ヶ岳を巧みに借景とした枯山水庭園や、琉球貿易の影響を感じさせる石垣の意匠を冬の澄んだ木漏れ日の中でじっくりと散策できます。
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 border border-stone-200/80 shadow-sm space-y-3">
              <div className="flex items-center gap-3">
                <span className="w-8 h-8 rounded-full bg-cyan-800 text-white font-bold flex items-center justify-center text-sm shrink-0">
                  2
                </span>
                <h3 className="font-bold text-stone-900 text-base sm:text-lg">
                  鰹節の香る港町・枕崎の極上グルメ！「一本釣り鰹の藁焼き」と最高級本枯節出汁
                </h3>
              </div>
              <p className="text-sm text-stone-600 leading-relaxed pl-11">
                全国の日本料理店を支える枕崎の本枯節。冬に旨味が凝縮する一本釣りの新鮮な鰹を炎で一気に炙る藁焼きタタキや、削りたての本枯節を贅沢に味わう鰹出汁料理はまさに至高の美味です。
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 border border-stone-200/80 shadow-sm space-y-3">
              <div className="flex items-center gap-3">
                <span className="w-8 h-8 rounded-full bg-cyan-800 text-white font-bold flex items-center justify-center text-sm shrink-0">
                  3
                </span>
                <h3 className="font-bold text-stone-900 text-base sm:text-lg">
                  薩摩富士「開聞岳」の雄大な冬パノラマと指宿名物「砂むし温泉」の極上ぬくもり
                </h3>
              </div>
              <p className="text-sm text-stone-600 leading-relaxed pl-11">
                どこまでも続く東シナ海と開聞岳の稜線美。冬でも温暖な南薩摩海岸を巡るドライブと、地下から湧き出る地熱を利用した指宿の砂むし温泉や塩化物泉が旅の疲れを心地よく解きほぐします。
              </p>
            </div>
            </div>
          </section>

          {/* アクセス・気候・服装ガイド */}
          <section className="bg-white rounded-2xl p-6 sm:p-8 border border-stone-200/80 shadow-sm space-y-6">
            <div className="flex items-center gap-2 border-b border-stone-100 pb-4">
              <Compass className="w-5 h-5 text-cyan-700" />
              <h2 className="text-xl sm:text-2xl font-bold text-stone-900">
                アクセス・ベストシーズン・おすすめの服装
              </h2>
            </div>
            <div className="text-xs sm:text-sm text-stone-600 whitespace-pre-line leading-relaxed bg-stone-50 rounded-xl p-5 border border-stone-100">
              【エリアへのアクセス】
・飛行機・鹿児島空港から：鹿児島空港より車・レンタカーで九州自動車道・指宿スカイライン（知覧IC経由）を利用し、知覧武家屋敷通りまで約1時間15分。枕崎までは約1時間35分。
・電車・バス：JR鹿児島中央駅より指宿枕崎線で喜入駅または指宿駅へ。鹿児島中央駅前バスターミナルより鹿児島交通バス（知覧行き）で約1時間15分、「武家屋敷入口」バス停下車すぐ。
・車（指宿方面から）：指宿温泉街から知覧武家屋敷まで県道23号線経由で約35分。枕崎港へは約40分。

【見頃・気候・おすすめの服装】
・ベストシーズン：11月〜1月（真冬でも日中は10〜15℃前後と比較的温暖で、雨が少なく空気が澄み渡るため開聞岳の景観や散策に最適）。
・気温の目安：南国鹿児島ですが、朝晩や海岸線では東シナ海からの強い季節風が吹くため体感温度は5℃以下まで下がります。
・服装のポイント：日中の武家屋敷散策はウールのセーターやジャケットで快適ですが、早朝の海岸線散策や夕暮れ時には風を通さない防風ダウンやストールをご用意ください。庭園散策は砂利道や石畳が続くためスニーカーが必須です。
            </div>
          </section>

          {/* Wikipedia 近隣観光名所紹介 */}
          <section className="bg-white rounded-2xl p-6 sm:p-8 border border-stone-200/80 shadow-sm space-y-6">
            <div className="flex items-center gap-2 border-b border-stone-100 pb-4">
              <Info className="w-5 h-5 text-cyan-700" />
              <h2 className="text-xl sm:text-2xl font-bold text-stone-900">
                近隣の必見名所：薩摩の小京都・知覧武家屋敷庭園（国の名勝・生垣と枯山水美・開聞岳パノラマ）
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
              <div className="md:col-span-5 relative rounded-xl overflow-hidden shadow-inner aspect-[4/3] bg-stone-100">
                <img
                  src="https://thumb.wikimedia.org/wikipedia/commons/thumb/d/d4/Chiran_Fumoto_01.JPG/1280px-Chiran_Fumoto_01.JPG?utm_source=ja.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
                  alt="武家屋敷通り (南九州市)"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
              <div className="md:col-span-7 space-y-3">
                <h3 className="font-bold text-stone-900 text-lg">
                  武家屋敷通り (南九州市)
                </h3>
                <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                  武家屋敷通り（ぶけやしきどおり）は、鹿児島県南九州市知覧町郡にある道路。行政上の正式な路線名は、南九州市道城馬場線（しろばばせん）、通称・武家屋敷通り線という。重要伝統的建造物群保存地区の中を東西に通る延長約0.8kmの侍町の通りであり、薩摩藩による藩政時代は、鹿児島への往来に使われた街道でもある。
                </p>
                <div className="pt-2 text-xs">
                  <a
                    href="https://ja.wikipedia.org/wiki/%E6%AD%A6%E5%AE%B6%E5%B1%8B%E6%95%B7%E9%80%9A%E3%82%8A%20%28%E5%8D%97%E4%B9%9D%E5%B7%9E%E5%B8%82%29"
                    target="_blank"
                    rel="noopener noreferrer nofollow"
                    className="inline-flex items-center gap-1 text-cyan-700 hover:text-cyan-900 underline"
                  >
                    <span>出典：Wikipedia公式『武家屋敷通り (南九州市)』詳細情報を見る</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </div>
            </div>
          </section>

          {/* 厳選名宿5選 */}
          <section className="space-y-8">
            <div className="border-b border-stone-200 pb-4">
              <span className="text-xs font-bold text-cyan-700 tracking-wider uppercase">Rakuten Travel Selected</span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-900 mt-1">
                南薩摩・知覧・枕崎・開聞岳 厳選の温泉＆名宿5選
              </h2>
              <p className="text-sm text-stone-600 mt-2">
                楽天トラベルの最新口コミ評価・立地・冬の特別会席プランを徹底精査したおすすめ宿です。
              </p>
            </div>

            <div className="space-y-8">

            <div className="bg-white rounded-2xl border border-stone-200/90 shadow-sm overflow-hidden hover:shadow-md transition-shadow">
              <div className="p-6 sm:p-8 space-y-6">
                <div className="space-y-2">
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <span className="inline-block bg-cyan-900 text-white text-xs font-bold px-3 py-1 rounded-full">
                      第1位
                    </span>
                    <span className="text-xs font-semibold text-cyan-800 bg-cyan-50 px-2.5 py-1 rounded-md border border-cyan-200/60">
                      枕崎港と東シナ海を眼下に見晴らす絶景ホテル！名物鰹会席と展望大浴場
                    </span>
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-stone-900 leading-snug">
                    <a
                      href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F50792%2F50792.html"
                      target="_blank"
                      rel="noopener noreferrer nofollow"
                      className="hover:text-cyan-800 transition-colors"
                    >
                      空と海を臨む宿　Ocean　Hotel　Iwato（旧：枕崎観光ホテル　岩戸）
                    </a>
                  </h3>
                  <div className="flex items-center gap-2 text-sm text-amber-600 font-bold">
                    <span>★ 4.04</span>
                    <span className="text-xs text-stone-700 font-medium">(249件)</span>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
                  <div className="md:col-span-5 relative rounded-xl overflow-hidden shadow-inner aspect-[4/3]">
                    <img
                      src="https://img.travel.rakuten.co.jp/share/HOTEL/50792/50792.jpg"
                      alt="空と海を臨む宿　Ocean　Hotel　Iwato（旧：枕崎観光ホテル　岩戸）"
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                    />
                  </div>
                  <div className="md:col-span-7 space-y-4">
                    <ul className="space-y-2">
                      <li className="flex items-start gap-2 text-xs sm:text-sm text-stone-700 font-medium"><span className="text-cyan-700 font-bold shrink-0">✔</span><span>全室から東シナ海と立神岩の奇勝を一望するパノラマオーシャンビュー</span></li>
                      <li className="flex items-start gap-2 text-xs sm:text-sm text-stone-700 font-medium"><span className="text-cyan-700 font-bold shrink-0">✔</span><span>夕食には本場枕崎の一本釣り鰹の藁焼きタタキや地魚刺身・黒豚会席を堪能</span></li>
                      <li className="flex items-start gap-2 text-xs sm:text-sm text-stone-700 font-medium"><span className="text-cyan-700 font-bold shrink-0">✔</span><span>海風を感じながらのんびり寛げる展望大浴場と旅情あふれる港町のおもてなし</span></li>
                    </ul>
                    <p className="text-sm text-stone-600 leading-relaxed">
                      枕崎の海岸沿い、立神岩を見晴らす高台に建つ名門ホテル。窓の外には雄大な東シナ海が広がり、夕暮れ時には海を黄金色に染め上げる見事なサンセットを客室から望めます。宿自慢の夕食は、鰹の町ならではの豪快な藁焼き鰹タタキや、削りたての本枯節を贅沢に使った郷土料理会席。知覧武家屋敷へも車で約30分とアクセス良好で、南薩摩の海の幸と歴史探訪を満喫したい旅人に絶大な人気を誇ります。
                    </p>

                    <div className="bg-amber-50/70 border border-amber-200/60 rounded-lg p-3 text-xs text-stone-700 space-y-1">
                      <span className="font-bold text-amber-900 block">宿泊者のクチコミ・評判抜粋</span>
                      <p className="line-clamp-2 italic text-stone-600">「景色が最高で素晴らしい眺め景色最高でした。」</p>
                    </div>
                  </div>
                </div>

                <div className="bg-stone-50 rounded-xl p-4 flex flex-wrap items-center justify-between gap-4 border border-stone-100">
                  <div className="space-y-1 text-xs text-stone-700">
                    <div className="flex items-center gap-1 font-semibold text-stone-800">
                      <MapPin className="w-3.5 h-3.5 text-rose-500" />
                      <span>鹿児島県 枕崎市岩戸町58</span>
                    </div>
                    <div className="text-stone-700 pl-4.5">枕崎駅より車で５分／鹿児島市内より車で１時間半/九州自動車道・鹿児島ＩＣより1時間40分</div>
                    <div className="text-stone-700 pl-4.5 font-medium">目安料金: <span className="text-cyan-800 font-bold">¥7,700〜</span>（1名あたり/時期により変動）</div>
                  </div>
                  <a
                    href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F50792%2F50792.html"
                    target="_blank"
                    rel="noopener noreferrer nofollow"
                    className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-red-600 to-rose-600 hover:from-red-700 hover:to-rose-700 text-white font-bold px-6 py-3 rounded-xl shadow-md hover:shadow-lg transition-all text-sm shrink-0"
                  >
                    <span>空室確認・宿泊プランを見る</span>
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl border border-stone-200/90 shadow-sm overflow-hidden hover:shadow-md transition-shadow">
              <div className="p-6 sm:p-8 space-y-6">
                <div className="space-y-2">
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <span className="inline-block bg-cyan-900 text-white text-xs font-bold px-3 py-1 rounded-full">
                      第2位
                    </span>
                    <span className="text-xs font-semibold text-cyan-800 bg-cyan-50 px-2.5 py-1 rounded-md border border-cyan-200/60">
                      日本伝統の雅を極めた指宿屈指の温泉旅館！圧巻の元禄風呂と砂むし温泉
                    </span>
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-stone-900 leading-snug">
                    <a
                      href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F12529%2F12529.html"
                      target="_blank"
                      rel="noopener noreferrer nofollow"
                      className="hover:text-cyan-800 transition-colors"
                    >
                      鹿児島　砂むし温泉　指宿白水館
                    </a>
                  </h3>
                  <div className="flex items-center gap-2 text-sm text-amber-600 font-bold">
                    <span>★ 4.48</span>
                    <span className="text-xs text-stone-700 font-medium">(2473件)</span>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
                  <div className="md:col-span-5 relative rounded-xl overflow-hidden shadow-inner aspect-[4/3]">
                    <img
                      src="https://img.travel.rakuten.co.jp/share/HOTEL/12529/12529.jpg"
                      alt="鹿児島　砂むし温泉　指宿白水館"
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                    />
                  </div>
                  <div className="md:col-span-7 space-y-4">
                    <ul className="space-y-2">
                      <li className="flex items-start gap-2 text-xs sm:text-sm text-stone-700 font-medium"><span className="text-cyan-700 font-bold shrink-0">✔</span><span>敷地内に広大な日本庭園と薩摩の歴史を伝える薩摩伝承館を併設した格式ある名宿</span></li>
                      <li className="flex items-start gap-2 text-xs sm:text-sm text-stone-700 font-medium"><span className="text-cyan-700 font-bold shrink-0">✔</span><span>江戸の銭湯や浮世絵を再現した千坪の「元禄風呂」と館内併設の本格「砂むし温泉」</span></li>
                      <li className="flex items-start gap-2 text-xs sm:text-sm text-stone-700 font-medium"><span className="text-cyan-700 font-bold shrink-0">✔</span><span>錦江湾の旬の地魚や最高ランク鹿児島黒牛・黒豚を贅沢に盛り込んだ匠の京風会席</span></li>
                    </ul>
                    <p className="text-sm text-stone-600 leading-relaxed">
                      広大な松林と錦江湾の渚に佇む、鹿児島を代表する最高峰の名旅館。宿最大の名物「元禄風呂」は江戸時代の湯小屋を再現した大浴場で、打たせ湯や泡風呂、露天風呂など多彩な湯巡りが楽しめます。館内専用の砂むし温泉施設も完備し、波の音を聴きながら心身をリフレッシュ。知覧や枕崎への南薩摩周遊ドライブの贅沢な宿泊拠点として、一生の思い出に残る極上の滞在を約束してくれます。
                    </p>

                    <div className="bg-amber-50/70 border border-amber-200/60 rounded-lg p-3 text-xs text-stone-700 space-y-1">
                      <span className="font-bold text-amber-900 block">宿泊者のクチコミ・評判抜粋</span>
                      <p className="line-clamp-2 italic text-stone-600">「砂蒸し温泉と丁寧なおもてなしに大満足白水館とても良かったです。車を玄関近くまで入ることができ、お出迎えしていただきました。部屋も海辺が見え眺めが良かったです。何より温泉は広く砂蒸しも指宿の潮の香り。」</p>
                    </div>
                  </div>
                </div>

                <div className="bg-stone-50 rounded-xl p-4 flex flex-wrap items-center justify-between gap-4 border border-stone-100">
                  <div className="space-y-1 text-xs text-stone-700">
                    <div className="flex items-center gap-1 font-semibold text-stone-800">
                      <MapPin className="w-3.5 h-3.5 text-rose-500" />
                      <span>鹿児島県 指宿市東方12126-12</span>
                    </div>
                    <div className="text-stone-700 pl-4.5">ＪＲ指宿駅下車、タクシー７分、無料送迎バスあり。 空港直行バス（JR指宿駅下車）</div>
                    <div className="text-stone-700 pl-4.5 font-medium">目安料金: <span className="text-cyan-800 font-bold">¥15,400〜</span>（1名あたり/時期により変動）</div>
                  </div>
                  <a
                    href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F12529%2F12529.html"
                    target="_blank"
                    rel="noopener noreferrer nofollow"
                    className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-red-600 to-rose-600 hover:from-red-700 hover:to-rose-700 text-white font-bold px-6 py-3 rounded-xl shadow-md hover:shadow-lg transition-all text-sm shrink-0"
                  >
                    <span>空室確認・宿泊プランを見る</span>
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl border border-stone-200/90 shadow-sm overflow-hidden hover:shadow-md transition-shadow">
              <div className="p-6 sm:p-8 space-y-6">
                <div className="space-y-2">
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <span className="inline-block bg-cyan-900 text-white text-xs font-bold px-3 py-1 rounded-full">
                      第3位
                    </span>
                    <span className="text-xs font-semibold text-cyan-800 bg-cyan-50 px-2.5 py-1 rounded-md border border-cyan-200/60">
                      全室温泉露天風呂付きの大人のおこもり宿！錦江湾の波打ち際で過ごす極上の休日
                    </span>
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-stone-900 leading-snug">
                    <a
                      href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F49347%2F49347.html"
                      target="_blank"
                      rel="noopener noreferrer nofollow"
                      className="hover:text-cyan-800 transition-colors"
                    >
                      指宿温泉　夫婦露天風呂の宿　吟松（ぎんしょう）
                    </a>
                  </h3>
                  <div className="flex items-center gap-2 text-sm text-amber-600 font-bold">
                    <span>★ 4.61</span>
                    <span className="text-xs text-stone-700 font-medium">(1578件)</span>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
                  <div className="md:col-span-5 relative rounded-xl overflow-hidden shadow-inner aspect-[4/3]">
                    <img
                      src="https://img.travel.rakuten.co.jp/share/HOTEL/49347/49347.jpg"
                      alt="指宿温泉　夫婦露天風呂の宿　吟松（ぎんしょう）"
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                    />
                  </div>
                  <div className="md:col-span-7 space-y-4">
                    <ul className="space-y-2">
                      <li className="flex items-start gap-2 text-xs sm:text-sm text-stone-700 font-medium"><span className="text-cyan-700 font-bold shrink-0">✔</span><span>目の前が錦江湾の砂浜！全室に源泉かけ流しの客室専用露天風呂を完備</span></li>
                      <li className="flex items-start gap-2 text-xs sm:text-sm text-stone-700 font-medium"><span className="text-cyan-700 font-bold shrink-0">✔</span><span>宿の名物「砂浜露天風呂」や海と一体化するインフィニティ展望露天風呂</span></li>
                      <li className="flex items-start gap-2 text-xs sm:text-sm text-stone-700 font-medium"><span className="text-cyan-700 font-bold shrink-0">✔</span><span>目の前で揚がるきびなごや黒豚しゃぶしゃぶ、温泉卓で楽しむ温かい郷土懐石</span></li>
                    </ul>
                    <p className="text-sm text-stone-600 leading-relaxed">
                      指宿の砂浜のすぐそばに佇む、夫婦やカップルの記念日旅行に高い評価を受ける温泉旅館。全客室にしつらえられた露天風呂からは、打ち寄せる波の音を間近に聴きながらいつでもプライベートな湯浴みが楽しめます。屋上のインフィニティ露天風呂からは朝日に輝く海原を一望。夕食は特製の温泉水で仕込む黒豚しゃぶしゃぶなど、鹿児島の豊かな美味を落ち着いた個室でじっくり味わえます。
                    </p>

                    <div className="bg-amber-50/70 border border-amber-200/60 rounded-lg p-3 text-xs text-stone-700 space-y-1">
                      <span className="font-bold text-amber-900 block">宿泊者のクチコミ・評判抜粋</span>
                      <p className="line-clamp-2 italic text-stone-600">「部屋露天風呂からの絶景と揚げたて薩摩揚げ初の鹿児島宿泊に吟松を選びました。理由は1源泉掛け流しの部屋露天風呂からの眺望2目の前で作られる薩摩揚げ3砂蒸温泉部屋露天風呂:眼下に海(錦。」</p>
                    </div>
                  </div>
                </div>

                <div className="bg-stone-50 rounded-xl p-4 flex flex-wrap items-center justify-between gap-4 border border-stone-100">
                  <div className="space-y-1 text-xs text-stone-700">
                    <div className="flex items-center gap-1 font-semibold text-stone-800">
                      <MapPin className="w-3.5 h-3.5 text-rose-500" />
                      <span>鹿児島県 指宿市湯の浜5-26-29</span>
                    </div>
                    <div className="text-stone-700 pl-4.5">車やレンタカー：カーナビに31をご設定下さい　タクシー：ＪＲ指宿駅から４分　</div>
                    <div className="text-stone-700 pl-4.5 font-medium">目安料金: <span className="text-cyan-800 font-bold">¥14,300〜</span>（1名あたり/時期により変動）</div>
                  </div>
                  <a
                    href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F49347%2F49347.html"
                    target="_blank"
                    rel="noopener noreferrer nofollow"
                    className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-red-600 to-rose-600 hover:from-red-700 hover:to-rose-700 text-white font-bold px-6 py-3 rounded-xl shadow-md hover:shadow-lg transition-all text-sm shrink-0"
                  >
                    <span>空室確認・宿泊プランを見る</span>
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl border border-stone-200/90 shadow-sm overflow-hidden hover:shadow-md transition-shadow">
              <div className="p-6 sm:p-8 space-y-6">
                <div className="space-y-2">
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <span className="inline-block bg-cyan-900 text-white text-xs font-bold px-3 py-1 rounded-full">
                      第4位
                    </span>
                    <span className="text-xs font-semibold text-cyan-800 bg-cyan-50 px-2.5 py-1 rounded-md border border-cyan-200/60">
                      錦江湾と大隅半島を望むオーシャンリゾート！名物砂むし温泉とビュッフェ
                    </span>
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-stone-900 leading-snug">
                    <a
                      href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F8580%2F8580.html"
                      target="_blank"
                      rel="noopener noreferrer nofollow"
                      className="hover:text-cyan-800 transition-colors"
                    >
                      指宿温泉　休暇村　指宿
                    </a>
                  </h3>
                  <div className="flex items-center gap-2 text-sm text-amber-600 font-bold">
                    <span>★ 4.29</span>
                    <span className="text-xs text-stone-700 font-medium">(1207件)</span>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
                  <div className="md:col-span-5 relative rounded-xl overflow-hidden shadow-inner aspect-[4/3]">
                    <img
                      src="https://img.travel.rakuten.co.jp/share/HOTEL/8580/8580.jpg"
                      alt="指宿温泉　休暇村　指宿"
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                    />
                  </div>
                  <div className="md:col-span-7 space-y-4">
                    <ul className="space-y-2">
                      <li className="flex items-start gap-2 text-xs sm:text-sm text-stone-700 font-medium"><span className="text-cyan-700 font-bold shrink-0">✔</span><span>錦江湾に面した開放的なリゾートロケーションと美しく手入れされた椰子の庭園</span></li>
                      <li className="flex items-start gap-2 text-xs sm:text-sm text-stone-700 font-medium"><span className="text-cyan-700 font-bold shrink-0">✔</span><span>宿専用の砂むし温泉と、潮風が吹き抜ける源泉かけ流しの半露天大浴場</span></li>
                      <li className="flex items-start gap-2 text-xs sm:text-sm text-stone-700 font-medium"><span className="text-cyan-700 font-bold shrink-0">✔</span><span>鹿児島黒豚や地鶏、錦江湾の海の幸をふんだんに味わえる充実のディナービュッフェ</span></li>
                    </ul>
                    <p className="text-sm text-stone-600 leading-relaxed">
                      南国情緒漂う指宿の海岸に位置する人気の公共リゾートホテル。館内に砂むし温泉を完備しており、気軽に指宿名物の砂むし体験ができるのが大きな魅力です。敷地内からは朝日が昇る錦江湾の雄大なパノラマを望み、早朝の海岸散策も爽快そのもの。南薩摩の知覧武家屋敷や開聞岳登山へのアクセスもスムーズで、家族連れからアクティブな一人旅まで幅広く支持されています。
                    </p>

                    <div className="bg-amber-50/70 border border-amber-200/60 rounded-lg p-3 text-xs text-stone-700 space-y-1">
                      <span className="font-bold text-amber-900 block">宿泊者のクチコミ・評判抜粋</span>
                      <p className="line-clamp-2 italic text-stone-600">「家族旅行で使用しました名高い指宿温泉ですがちょっと市街地からは離れているので静かです近くにコンビニはないので予め買っておくのが良いでしょう駐車場は施設の前で安心ですお部屋は海側できれいな景色でした温泉。」</p>
                    </div>
                  </div>
                </div>

                <div className="bg-stone-50 rounded-xl p-4 flex flex-wrap items-center justify-between gap-4 border border-stone-100">
                  <div className="space-y-1 text-xs text-stone-700">
                    <div className="flex items-center gap-1 font-semibold text-stone-800">
                      <MapPin className="w-3.5 h-3.5 text-rose-500" />
                      <span>鹿児島県 指宿市東方10445</span>
                    </div>
                    <div className="text-stone-700 pl-4.5">指宿スカイライン谷山ICより産業道路・国道226号線を経て約1時間。</div>
                    <div className="text-stone-700 pl-4.5 font-medium">目安料金: <span className="text-cyan-800 font-bold">¥12,000〜</span>（1名あたり/時期により変動）</div>
                  </div>
                  <a
                    href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F8580%2F8580.html"
                    target="_blank"
                    rel="noopener noreferrer nofollow"
                    className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-red-600 to-rose-600 hover:from-red-700 hover:to-rose-700 text-white font-bold px-6 py-3 rounded-xl shadow-md hover:shadow-lg transition-all text-sm shrink-0"
                  >
                    <span>空室確認・宿泊プランを見る</span>
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl border border-stone-200/90 shadow-sm overflow-hidden hover:shadow-md transition-shadow">
              <div className="p-6 sm:p-8 space-y-6">
                <div className="space-y-2">
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <span className="inline-block bg-cyan-900 text-white text-xs font-bold px-3 py-1 rounded-full">
                      第5位
                    </span>
                    <span className="text-xs font-semibold text-cyan-800 bg-cyan-50 px-2.5 py-1 rounded-md border border-cyan-200/60">
                      日本三大砂丘・吹上浜に佇む静かな公共の宿！広大な松林と天然温泉の寛ぎ
                    </span>
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-stone-900 leading-snug">
                    <a
                      href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F198633%2F198633.html"
                      target="_blank"
                      rel="noopener noreferrer nofollow"
                      className="hover:text-cyan-800 transition-colors"
                    >
                      吹上砂丘荘
                    </a>
                  </h3>
                  <div className="flex items-center gap-2 text-sm text-amber-600 font-bold">
                    <span>★ 4.16</span>
                    <span className="text-xs text-stone-700 font-medium">(19件)</span>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
                  <div className="md:col-span-5 relative rounded-xl overflow-hidden shadow-inner aspect-[4/3]">
                    <img
                      src="https://img.travel.rakuten.co.jp/share/HOTEL/198633/198633.jpg"
                      alt="吹上砂丘荘"
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                    />
                  </div>
                  <div className="md:col-span-7 space-y-4">
                    <ul className="space-y-2">
                      <li className="flex items-start gap-2 text-xs sm:text-sm text-stone-700 font-medium"><span className="text-cyan-700 font-bold shrink-0">✔</span><span>白砂青松が続く吹上浜に隣接！松林の澄んだ空気と静寂に包まれる隠れ家ロケーション</span></li>
                      <li className="flex items-start gap-2 text-xs sm:text-sm text-stone-700 font-medium"><span className="text-cyan-700 font-bold shrink-0">✔</span><span>身体の芯から温まる美肌の天然温泉大浴場とサウナで日頃の疲労を爽快にリセット</span></li>
                      <li className="flex items-start gap-2 text-xs sm:text-sm text-stone-700 font-medium"><span className="text-cyan-700 font-bold shrink-0">✔</span><span>鹿児島県産の旬魚介や黒豚をリーズナブルに味わえる心温まる手作り会席料理</span></li>
                    </ul>
                    <p className="text-sm text-stone-600 leading-relaxed">
                      日本三大砂丘のひとつ「吹上浜」の松林の中に位置する落ち着いた公共の宿。南薩摩の西海岸に位置し、知覧武家屋敷通りへ車で約40分と快適にアクセスできます。館内の天然温泉は無色透明の柔らかな肌触りで、湯上がり後もポカポカ感が持続。喧騒から完全に離れた静かな環境で、松の木立を吹き抜ける風の音を聴きながら、穏やかな冬の南九州の休日を心静かに過ごせます。
                    </p>

                    <div className="bg-amber-50/70 border border-amber-200/60 rounded-lg p-3 text-xs text-stone-700 space-y-1">
                      <span className="font-bold text-amber-900 block">宿泊者のクチコミ・評判抜粋</span>
                      <p className="line-clamp-2 italic text-stone-600">「リニューアルされてキレイ夕食のお刺身が新鮮でおいしかった。」</p>
                    </div>
                  </div>
                </div>

                <div className="bg-stone-50 rounded-xl p-4 flex flex-wrap items-center justify-between gap-4 border border-stone-100">
                  <div className="space-y-1 text-xs text-stone-700">
                    <div className="flex items-center gap-1 font-semibold text-stone-800">
                      <MapPin className="w-3.5 h-3.5 text-rose-500" />
                      <span>鹿児島県 日置市吹上町今田1004-3</span>
                    </div>
                    <div className="text-stone-700 pl-4.5">鹿児島市内から…車で約40分、鹿児島空港から...車で約1時間、JR伊集院駅(鹿児島本線)よりお車で約24分</div>
                    <div className="text-stone-700 pl-4.5 font-medium">目安料金: <span className="text-cyan-800 font-bold">¥4,000〜</span>（1名あたり/時期により変動）</div>
                  </div>
                  <a
                    href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F198633%2F198633.html"
                    target="_blank"
                    rel="noopener noreferrer nofollow"
                    className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-red-600 to-rose-600 hover:from-red-700 hover:to-rose-700 text-white font-bold px-6 py-3 rounded-xl shadow-md hover:shadow-lg transition-all text-sm shrink-0"
                  >
                    <span>空室確認・宿泊プランを見る</span>
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>
            </div>
          </section>

          {/* 楽天ふるさと納税 案内 */}
          <section className="bg-gradient-to-br from-amber-500/10 via-amber-500/5 to-transparent border border-amber-300/60 rounded-2xl p-6 sm:p-8 space-y-4">
            <div className="flex items-center gap-3">
              <Sparkles className="w-6 h-6 text-amber-600" />
              <h3 className="text-lg sm:text-xl font-bold text-amber-950">
                楽天ふるさと納税で賢くお得に泊まる方法
              </h3>
            </div>
            <p className="text-sm text-amber-950/90 leading-relaxed">
              楽天ふるさと納税を活用すると、寄付金額に応じた宿泊クーポンが返礼品として付与され、実質自己負担2,000円で憧れの高級温泉旅館や特別会席プランに宿泊できます。
              すでに予約済みの宿泊であっても「あとから割引」が適用可能なため、旅行の計画に合わせて手軽に節税とお得なステイを両立できます。
            </p>
            <div className="pt-2">
              <a
                href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2Fspecial%2Ffurusato%2F"
                target="_blank"
                rel="noopener noreferrer nofollow"
                className="inline-flex items-center gap-2 bg-amber-600 hover:bg-amber-700 text-white font-bold px-6 py-2.5 rounded-xl shadow-sm text-sm transition-colors"
              >
                <span>楽天トラベル×ふるさと納税 対象宿一覧・クーポン取得はこちら</span>
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          </section>

          {/* FAQ セクション */}
          <section className="bg-white rounded-2xl p-6 sm:p-8 border border-stone-200/80 shadow-sm space-y-6">
            <div className="border-b border-stone-100 pb-4">
              <span className="text-xs font-bold text-cyan-700 tracking-wider uppercase">Frequently Asked Questions</span>
              <h2 className="text-xl sm:text-2xl font-bold text-stone-900 mt-1">
                冬の南薩摩・知覧・枕崎・開聞岳旅行 よくある質問（FAQ）
              </h2>
            </div>
            <div className="space-y-4">

            <div className="bg-white rounded-xl p-6 border border-stone-200/80 shadow-sm space-y-2">
              <h3 className="text-base font-bold text-stone-900 flex items-start gap-2">
                <span className="text-cyan-700 font-extrabold">Q.</span>
                <span>知覧武家屋敷庭園を巡る所要時間と拝観のコツは？</span>
              </h3>
              <p className="text-sm text-stone-600 leading-relaxed pl-6">
                <span className="font-semibold text-stone-800">A. </span>7つの公開庭園と武家屋敷通り全体をゆっくり鑑賞する場合、所要時間は約1時間30分〜2時間です。各庭園ごとに築山や枯滝、石組みの趣が異なるため、入口で配布される共通拝観券の解説マップを手に巡るのがおすすめです。
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 border border-stone-200/80 shadow-sm space-y-2">
              <h3 className="text-base font-bold text-stone-900 flex items-start gap-2">
                <span className="text-cyan-700 font-extrabold">Q.</span>
                <span>冬の枕崎で味わうべきおすすめの鰹料理は何ですか？</span>
              </h3>
              <p className="text-sm text-stone-600 leading-relaxed pl-6">
                <span className="font-semibold text-stone-800">A. </span>冬の枕崎では、脂がほどよく乗った戻り鰹の一本釣りをその場で藁焼きにした香ばしいタタキはもちろん、最高級本枯節を削りたてで山盛りに乗せた「枕崎鰹船人めし」や、鰹のビンタ（頭）煮、鰹節出汁のしゃぶしゃぶが絶品です。
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 border border-stone-200/80 shadow-sm space-y-2">
              <h3 className="text-base font-bold text-stone-900 flex items-start gap-2">
                <span className="text-cyan-700 font-extrabold">Q.</span>
                <span>指宿の砂むし温泉は冬でも体験できますか？</span>
              </h3>
              <p className="text-sm text-stone-600 leading-relaxed pl-6">
                <span className="font-semibold text-stone-800">A. </span>砂むし温泉は一年中体験可能です。むしろ外気温が低い冬こそ、約50〜55℃の温かい天然砂に全身を包まれる快感とデトックス効果、湯上がりの心地よさが際立ち、最もおすすめのシーズンです。
              </p>
            </div>
            </div>
          </section>

          {/* 関連特集リンク */}
          <section className="bg-white rounded-2xl p-6 sm:p-8 border border-stone-200/80 shadow-sm space-y-4">
            <h3 className="text-lg font-bold text-stone-900 border-b border-stone-100 pb-3">
              あわせて読みたい関連特集
            </h3>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <li>
                <Link href="/prefectures/kagoshima" className="text-cyan-800 hover:text-cyan-950 font-medium hover:underline flex items-center gap-1.5 text-sm">
                  <ChevronRight className="w-4 h-4 text-cyan-600 shrink-0" />
                  <span>鹿児島県のおすすめ観光名所＆温泉宿一覧</span>
                </Link>
              </li>
              <li>
                <Link href="/features" className="text-cyan-800 hover:text-cyan-950 font-medium hover:underline flex items-center gap-1.5 text-sm">
                  <ChevronRight className="w-4 h-4 text-cyan-600 shrink-0" />
                  <span>全国の季節・目的別旅行特集一覧</span>
                </Link>
              </li>

              <li>
                <Link href="/winter-saitama-gyoda-oshi-castle-sakidama-kofun-tabigura-onsen-bushugyu-stay" className="text-cyan-800 hover:text-cyan-950 font-medium hover:underline flex items-center gap-1.5 text-sm">
                  <ChevronRight className="w-4 h-4 text-cyan-600 shrink-0" />
                  <span>2026-2027年冬の埼玉・行田＆熊谷！行田天然温泉と武州牛・加須手打ちうどん名宿5選</span>
                </Link>
              </li>

              <li>
                <Link href="/winter-ibaraki-sakuragawa-makabe-townscape-tsukubasan-shrine-hatsumode-hitachigyu-stay" className="text-cyan-800 hover:text-cyan-950 font-medium hover:underline flex items-center gap-1.5 text-sm">
                  <ChevronRight className="w-4 h-4 text-cyan-600 shrink-0" />
                  <span>2026-2027年冬の茨城・桜川＆筑波！名物常陸秋そばと常陸牛会席名宿5選</span>
                </Link>
              </li>

              <li>
                <Link href="/winter-yamanashi-otsuki-saruhashi-bridge-fuji-view-houtou-koshugyu-stay" className="text-cyan-800 hover:text-cyan-950 font-medium hover:underline flex items-center gap-1.5 text-sm">
                  <ChevronRight className="w-4 h-4 text-cyan-600 shrink-0" />
                  <span>2026-2027年冬の山梨・大月＆都留！名物手打ちほうとうと甲州牛会席名宿5選</span>
                </Link>
              </li>

              <li>
                <Link href="/winter-saga-kashima-hizenhamashuku-yutoku-inari-hatsumode-sagagyu-stay" className="text-cyan-800 hover:text-cyan-950 font-medium hover:underline flex items-center gap-1.5 text-sm">
                  <ChevronRight className="w-4 h-4 text-cyan-600 shrink-0" />
                  <span>2026-2027年冬の佐賀・鹿島＆嬉野！冬の新酒仕込みと佐賀牛・有明海苔名宿5選</span>
                </Link>
              </li>
              <li>
                <Link href="/furusato-tax-luxury-hotspring-ryokan-stay" className="text-cyan-800 hover:text-cyan-950 font-medium hover:underline flex items-center gap-1.5 text-sm">
                  <ChevronRight className="w-4 h-4 text-cyan-600 shrink-0" />
                  <span>実質2,000円で泊まる名湯・高級温泉旅館ガイド</span>
                </Link>
              </li>
              <li>
                <Link href="/furusato-tax-local-gourmet-inn-stay" className="text-cyan-800 hover:text-cyan-950 font-medium hover:underline flex items-center gap-1.5 text-sm">
                  <ChevronRight className="w-4 h-4 text-cyan-600 shrink-0" />
                  <span>ご当地グルメを堪能する全国美食旅特集</span>
                </Link>
              </li>
            </ul>
          </section>
        </div>
      </article>
    </>
  );
}
