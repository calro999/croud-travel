import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next';
import { ExternalLink, Calendar, MapPin, Sparkles, ChevronRight, CheckCircle2, Info, Compass, HelpCircle } from 'lucide-react';

export const metadata: Metadata = {
  title: '【肥前浜宿の酒蔵通り重伝建と日本三大稲荷・祐徳稲荷神社新春初詣】2026-2027年冬の佐賀・鹿島＆嬉野！冬の新酒仕込みと佐賀牛・有明海苔名宿5選 | 旅宿クラウド',
  description: '国の重伝建・白壁土蔵が連なる「肥前浜宿酒蔵通り」の冬新酒仕込み情緒と、日本三大稲荷「祐徳稲荷神社」新春開運初詣！有明海の初摘み極上海苔や冬の竹崎カニ、最高峰佐賀牛会席。日本三大美肌の湯・嬉野温泉や武雄温泉の名湯に浸かり、芳醇な佐賀の銘酒を味わう至福の冬厳選名宿5選。',
  keywords: ['鹿島・肥前浜宿・祐徳門前・嬉野', '佐賀県', '冬旅行', '温泉旅館', '楽天トラベル', 'ふるさと納税', 'ホテルおすすめ'],
  openGraph: {
    title: '【肥前浜宿の酒蔵通り重伝建と日本三大稲荷・祐徳稲荷神社新春初詣】2026-2027年冬の佐賀・鹿島＆嬉野！冬の新酒仕込みと佐賀牛・有明海苔名宿5選 | 旅宿クラウド',
    description: '国の重伝建・白壁土蔵が連なる「肥前浜宿酒蔵通り」の冬新酒仕込み情緒と、日本三大稲荷「祐徳稲荷神社」新春開運初詣！有明海の初摘み極上海苔や冬の竹崎カニ、最高峰佐賀牛会席。日本三大美肌の湯・嬉野温泉や武雄温泉の名湯に浸かり、芳醇な佐賀の銘酒を味わう至福の冬厳選名宿5選。',
    url: 'https://croud-travel.pages.dev/winter-saga-kashima-hizenhamashuku-yutoku-inari-hatsumode-sagagyu-stay',
    siteName: '旅宿クラウド',
    locale: 'ja_JP',
    type: 'article',
    images: [
      {
        url: 'https://img.travel.rakuten.co.jp/share/HOTEL/6006/6006.jpg',
        width: 1200,
        height: 630,
        alt: '【肥前浜宿の酒蔵通り重伝建と日本三大稲荷・祐徳稲荷神社新春初詣】2026-2027年冬の佐賀・鹿島＆嬉野！冬の新酒仕込みと佐賀牛・有明海苔名宿5選',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: '【肥前浜宿の酒蔵通り重伝建と日本三大稲荷・祐徳稲荷神社新春初詣】2026-2027年冬の佐賀・鹿島＆嬉野！冬の新酒仕込みと佐賀牛・有明海苔名宿5選',
    description: '国の重伝建・白壁土蔵が連なる「肥前浜宿酒蔵通り」の冬新酒仕込み情緒と、日本三大稲荷「祐徳稲荷神社」新春開運初詣！有明海の初摘み極上海苔や冬の竹崎カニ、最高峰佐賀牛会席。日本三大美肌の湯・嬉野温泉や武雄温泉の名湯に浸かり、芳醇な佐賀の銘酒を味わう至福の冬厳選名宿5選。',
  },
};

export default function FeaturePage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'TouristDestination',
    name: '鹿島・肥前浜宿・祐徳門前・嬉野',
    description: '国の重伝建・白壁土蔵が連なる「肥前浜宿酒蔵通り」の冬新酒仕込み情緒と、日本三大稲荷「祐徳稲荷神社」新春開運初詣！有明海の初摘み極上海苔や冬の竹崎カニ、最高峰佐賀牛会席。日本三大美肌の湯・嬉野温泉や武雄温泉の名湯に浸かり、芳醇な佐賀の銘酒を味わう至福の冬厳選名宿5選。',
    url: 'https://croud-travel.pages.dev/winter-saga-kashima-hizenhamashuku-yutoku-inari-hatsumode-sagagyu-stay',
    touristType: ['温泉旅行', 'グルメ旅行', '歴史散策', '冬旅行'],
    containedInPlace: {
      '@type': 'AdministrativeArea',
      name: '佐賀県',
    },
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'おすすめ宿泊施設',
      itemListElement: [
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'LodgingBusiness',
            name: '竹崎かにと日本酒の宿　鶴荘',
            url: 'https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F6006%2F6006.html',
            image: 'https://img.travel.rakuten.co.jp/share/HOTEL/6006/6006.jpg',
            address: '佐賀県 藤津郡太良町大浦丙928',
            aggregateRating: {
              '@type': 'AggregateRating',
              ratingValue: '4.63',
              reviewCount: '303'
            }
          }
        },         {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'LodgingBusiness',
            name: '嬉野温泉　和多屋別荘',
            url: 'https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F40527%2F40527.html',
            image: 'https://img.travel.rakuten.co.jp/share/HOTEL/40527/40527.jpg',
            address: '佐賀県 嬉野市嬉野町下宿乙738',
            aggregateRating: {
              '@type': 'AggregateRating',
              ratingValue: '4.12',
              reviewCount: '1364'
            }
          }
        },         {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'LodgingBusiness',
            name: '嬉野温泉　大正屋',
            url: 'https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F19923%2F19923.html',
            image: 'https://img.travel.rakuten.co.jp/share/HOTEL/19923/19923.jpg',
            address: '佐賀県 嬉野市嬉野町下宿乙2276-1　',
            aggregateRating: {
              '@type': 'AggregateRating',
              ratingValue: '4.46',
              reviewCount: '1270'
            }
          }
        },         {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'LodgingBusiness',
            name: '嬉野温泉　茶心の宿　和楽園',
            url: 'https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F52858%2F52858.html',
            image: 'https://img.travel.rakuten.co.jp/share/HOTEL/52858/52858.jpg',
            address: '佐賀県 嬉野市嬉野町下野甲33',
            aggregateRating: {
              '@type': 'AggregateRating',
              ratingValue: '4.39',
              reviewCount: '651'
            }
          }
        },         {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'LodgingBusiness',
            name: '武雄温泉　御船山楽園ホテル',
            url: 'https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F13417%2F13417.html',
            image: 'https://img.travel.rakuten.co.jp/share/HOTEL/13417/13417.jpg',
            address: '佐賀県 武雄市武雄町武雄4100',
            aggregateRating: {
              '@type': 'AggregateRating',
              ratingValue: '4.57',
              reviewCount: '1217'
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
                佐賀県・鹿島・肥前浜宿・祐徳門前・嬉野
              </span>
            </div>

            <h1 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-tight text-white">
              【肥前浜宿の酒蔵通り重伝建と日本三大稲荷・祐徳稲荷神社新春初詣】2026-2027年冬の佐賀・鹿島＆嬉野！冬の新酒仕込みと佐賀牛・有明海苔名宿5選
            </h1>

            <p className="text-stone-300 text-sm sm:text-base leading-relaxed">
              国の重伝建・白壁土蔵が連なる「肥前浜宿酒蔵通り」の冬新酒仕込み情緒と、日本三大稲荷「祐徳稲荷神社」新春開運初詣！有明海の初摘み極上海苔や冬の竹崎カニ、最高峰佐賀牛会席。日本三大美肌の湯・嬉野温泉や武雄温泉の名湯に浸かり、芳醇な佐賀の銘酒を味わう至福の冬厳選名宿5選。
            </p>

            <div className="flex flex-wrap items-center gap-4 text-xs text-stone-700 pt-2 border-t border-stone-800">
              <span className="flex items-center gap-1.5">
                <Calendar className="w-4 h-4 text-cyan-400" />
                2026-2027年 冬シーズン最新版
              </span>
              <span className="flex items-center gap-1.5">
                <MapPin className="w-4 h-4 text-rose-400" />
                鹿島・肥前浜宿・祐徳門前・嬉野（佐賀県）
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
                冬の鹿島・肥前浜宿・祐徳門前・嬉野を旅する魅力と情話
              </h2>
            </div>
            <div className="prose prose-stone max-w-none text-stone-700 leading-relaxed text-sm sm:text-base space-y-4">
              <p className="first-letter:text-3xl first-letter:font-bold first-letter:text-cyan-800 first-letter:mr-1 float-none">
                最大6メートルという日本一の干満差を誇る有明海の穏やかな干潟を望み、多良岳山系の清らかな名水が大地を潤す佐賀県南部・鹿島＆嬉野エリア。鹿島市浜町に位置する「肥前浜宿（ひぜんはましゅく）」は、江戸時代に長崎街道の宿場町、そして有明海に面した港町として栄えた歴史ある集落です。国の重要伝統的建造物群保存地区に選定された「酒蔵通り」には、白壁土蔵造りの巨大な酒蔵や武家風町家、茅葺き町家が約600メートルにわたって連なり、昔ながらの佇まいを色濃く残しています。冬は、酒造りの職人（蔵人）たちが寒仕込みの新酒造りに情熱を注ぐ季節。町中には蒸米の湯気と新酒の芳醇な吟醸香が漂い、試飲ができる酒蔵では搾りたてならではのピチピチとした微発泡の新酒を味わう贅沢な体験が待っています。肥前浜宿から車で約10分の山麓に鎮座する「祐徳稲荷神社（ゆうとくいなりじんじゃ）」は、伏見稲荷・笠間稲荷と並び『日本三大稲荷』のひとつに数えられる大社。山の斜面にそびえ立つ朱塗りの舞台造り（懸造り）本殿は、日光東照宮を彷彿とさせる極彩色の美しさから「鎮西日光」とも称されます。新春の初詣には商売繁盛や家内安全を願う参拝客が全国から300万人近く訪れ、朱塗りの楼門と白銀の冬枯れの杜が神秘的な開運の気を放ちます。冬の佐賀の食卓を飾るのは、まさにこの時期に一番摘みを迎える香り高い「有明海苔」、冬に身が締まり濃厚な内子を蓄える「竹崎カニ」、そしてきめ細やかなサシと芳醇な風味がとろける最高峰の「佐賀牛」。さらに車で30分圏内には、日本三大美肌の湯として名高い「嬉野温泉」や1,300年の歴史を誇る「武雄温泉」の名湯が湧き出します。芳醇な新酒と名湯、開運の祈りが心を温める冬の佐賀紀行をご堪能ください。
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
                  白壁土蔵が連なる酒蔵の町！国の重伝建「肥前浜宿」の冬新酒仕込みと蔵めぐり
                </h3>
              </div>
              <p className="text-sm text-stone-600 leading-relaxed pl-11">
                江戸・明治の巨大な酒蔵が建ち並ぶ肥前浜宿酒蔵通り。冬の寒造り真っ只中の仕込み風景や、搾りたての新酒の試飲、蔵人たちの熱気あふれる職人技に触れられる日本酒の聖地です。
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 border border-stone-200/80 shadow-sm space-y-3">
              <div className="flex items-center gap-3">
                <span className="w-8 h-8 rounded-full bg-cyan-800 text-white font-bold flex items-center justify-center text-sm shrink-0">
                  2
                </span>
                <h3 className="font-bold text-stone-900 text-base sm:text-lg">
                  年間300万人が訪れる日本三大稲荷！「祐徳稲荷神社」新春開運初詣と極彩色の本殿
                </h3>
              </div>
              <p className="text-sm text-stone-600 leading-relaxed pl-11">
                京都の清水寺本堂を思わせる壮大な懸造りの朱塗り本殿。冬の澄んだ大気の中に浮かび上がる極彩色の楼門や奥の院からの有明海パノラマビューは新春の開運パワースポットとして圧巻です。
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 border border-stone-200/80 shadow-sm space-y-3">
              <div className="flex items-center gap-3">
                <span className="w-8 h-8 rounded-full bg-cyan-800 text-white font-bold flex items-center justify-center text-sm shrink-0">
                  3
                </span>
                <h3 className="font-bold text-stone-900 text-base sm:text-lg">
                  冬の味覚の王様「竹崎カニ」と極上「佐賀牛」＆日本三大美肌の湯「嬉野温泉」
                </h3>
              </div>
              <p className="text-sm text-stone-600 leading-relaxed pl-11">
                冬に濃厚な蟹味噌と内子を抱く有明海名物・竹崎カニの塩茹でや極上佐賀牛の陶板焼き。名湯・嬉野温泉のとろとろの美肌湯と名物「温泉湯豆腐」で心も身体もとろける至福の時間を過ごせます。
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
・電車：JR西九州新幹線「武雄温泉駅」またはJR長崎本線「肥前鹿島駅」下車。博多駅より特急列車（かささぎ・リレーかもめ等）で肥前鹿島駅まで約1時間。肥前鹿島駅より肥前浜宿へはJR普通列車で1駅（肥前浜駅下車、徒歩約5分）。祐徳稲荷神社へは肥前鹿島駅前バスセンターより祐徳バスで約10〜15分。
・車（長崎道から）：長崎自動車道「武雄北方IC」または「嬉野IC」より国道34号・498号・444号線経由で約30〜35分。
・飛行機・有明佐賀空港から：佐賀空港より車・レンタカーで有明海沿岸道路経由で約45分。

【見頃・気候・おすすめの服装】
・ベストシーズン：11月下旬〜1月（酒蔵通りの新酒仕込み開始、祐徳稲荷神社の新春初詣、竹崎カニや有明海苔の最旬シーズン）。
・気温の目安：九州北部のため日中は9〜13℃前後ですが、有明海からの冷たい海風が吹き込み、朝晩は3〜0℃近くまで冷え込みます。
・服装のポイント：祐徳稲荷神社の奥の院へ登る場合は石段が続くため、滑りにくいスニーカーが必須です。防風性の高いコートやダウンジャケット、手袋を準備してください。
            </div>
          </section>

          {/* Wikipedia 近隣観光名所紹介 */}
          <section className="bg-white rounded-2xl p-6 sm:p-8 border border-stone-200/80 shadow-sm space-y-6">
            <div className="flex items-center gap-2 border-b border-stone-100 pb-4">
              <Info className="w-5 h-5 text-cyan-700" />
              <h2 className="text-xl sm:text-2xl font-bold text-stone-900">
                近隣の必見名所：肥前浜宿酒蔵通り（重要伝統的建造物群保存地区・白壁土蔵の冬新酒情緒と祐徳稲荷新春初詣）
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
              <div className="md:col-span-5 relative rounded-xl overflow-hidden shadow-inner aspect-[4/3] bg-stone-100">
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/e/e0/Hamasyuku_kashima_saga_japan.JPG?utm_source=ja.wikipedia.org&utm_campaign=api&utm_content=thumbnail_unscaled"
                  alt="鹿島市浜庄津町浜金屋町"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
              <div className="md:col-span-7 space-y-3">
                <h3 className="font-bold text-stone-900 text-lg">
                  鹿島市浜庄津町浜金屋町
                </h3>
                <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                  鹿島市浜庄津町浜金屋町（かしましはましょうづまちはまかなやまち）は、佐賀県鹿島市にある重要伝統的建造物群保存地区。鹿島市浜町の一部、約2.0haの範囲である。
                </p>
                <div className="pt-2 text-xs">
                  <a
                    href="https://ja.wikipedia.org/wiki/%E9%B9%BF%E5%B3%B6%E5%B8%82%E6%B5%9C%E5%BA%84%E6%B4%A5%E7%94%BA%E6%B5%9C%E9%87%91%E5%B1%8B%E7%94%BA"
                    target="_blank"
                    rel="noopener noreferrer nofollow"
                    className="inline-flex items-center gap-1 text-cyan-700 hover:text-cyan-900 underline"
                  >
                    <span>出典：Wikipedia公式『鹿島市浜庄津町浜金屋町』詳細情報を見る</span>
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
                鹿島・肥前浜宿・祐徳門前・嬉野 厳選の温泉＆名宿5選
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
                      有明海の竹崎カニと地酒のペアリング！絶景露天風呂と海の恵みを味わう美食宿
                    </span>
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-stone-900 leading-snug">
                    <a
                      href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F6006%2F6006.html"
                      target="_blank"
                      rel="noopener noreferrer nofollow"
                      className="hover:text-cyan-800 transition-colors"
                    >
                      竹崎かにと日本酒の宿　鶴荘
                    </a>
                  </h3>
                  <div className="flex items-center gap-2 text-sm text-amber-600 font-bold">
                    <span>★ 4.63</span>
                    <span className="text-xs text-stone-700 font-medium">(303件)</span>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
                  <div className="md:col-span-5 relative rounded-xl overflow-hidden shadow-inner aspect-[4/3]">
                    <img
                      src="https://img.travel.rakuten.co.jp/share/HOTEL/6006/6006.jpg"
                      alt="竹崎かにと日本酒の宿　鶴荘"
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                    />
                  </div>
                  <div className="md:col-span-7 space-y-4">
                    <ul className="space-y-2">
                      <li className="flex items-start gap-2 text-xs sm:text-sm text-stone-700 font-medium"><span className="text-cyan-700 font-bold shrink-0">✔</span><span>有明海を一望する太良町の海岸沿いに建ち、名物竹崎カニ料理で圧倒的な評価を誇る宿</span></li>
                      <li className="flex items-start gap-2 text-xs sm:text-sm text-stone-700 font-medium"><span className="text-cyan-700 font-bold shrink-0">✔</span><span>冬に旨味が凝縮する活竹崎カニの茹で・焼き・刺身と、佐賀の厳選地酒ペアリング</span></li>
                      <li className="flex items-start gap-2 text-xs sm:text-sm text-stone-700 font-medium"><span className="text-cyan-700 font-bold shrink-0">✔</span><span>有明海の満ち引きを眺めながらゆったり浸かれる貸切露天風呂と展望大浴場</span></li>
                    </ul>
                    <p className="text-sm text-stone-600 leading-relaxed">
                      鹿島市のすぐ隣、太良町の有明海沿いに位置する竹崎カニと日本酒に特化した料理自慢の宿。冬の竹崎カニは濃厚な蟹味噌と甘みのある身、内子がぎっしりと詰まった最高の旬を迎えます。宿では生きたまま茹で上げる絶妙な塩加減のカニ料理とともに、肥前浜宿をはじめとする佐賀の銘酒を豊富に取り揃えており、贅沢なペアリングを堪能できます。海を望む露天風呂での湯浴みも格別で、食通の旅人に愛される名宿です。
                    </p>

                    <div className="bg-amber-50/70 border border-amber-200/60 rounded-lg p-3 text-xs text-stone-700 space-y-1">
                      <span className="font-bold text-amber-900 block">宿泊者のクチコミ・評判抜粋</span>
                      <p className="line-clamp-2 italic text-stone-600">「有明海を望む静かな宿、食事も温泉も大満足有明海を望む好立地にも関わらず静かで穏やかな宿です。最近リニューアルされた内装は木材の良さを生かした落ち着きがありそれでいて明るく快適でした。客室には独特な。」</p>
                    </div>
                  </div>
                </div>

                <div className="bg-stone-50 rounded-xl p-4 flex flex-wrap items-center justify-between gap-4 border border-stone-100">
                  <div className="space-y-1 text-xs text-stone-700">
                    <div className="flex items-center gap-1 font-semibold text-stone-800">
                      <MapPin className="w-3.5 h-3.5 text-rose-500" />
                      <span>佐賀県 藤津郡太良町大浦丙928</span>
                    </div>
                    <div className="text-stone-700 pl-4.5">ＪＲ長崎線肥前大浦駅下車無料送迎あり（要予約）／九州自動車道長崎武雄北方ＩＣ下車国道２０７を塩田、鹿島へ1時間</div>
                    <div className="text-stone-700 pl-4.5 font-medium">目安料金: <span className="text-cyan-800 font-bold">¥10,450〜</span>（1名あたり/時期により変動）</div>
                  </div>
                  <a
                    href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F6006%2F6006.html"
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
                      日本三大美肌の湯を誇る嬉野の名門旅館！広大な敷地と現代アートの融合
                    </span>
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-stone-900 leading-snug">
                    <a
                      href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F40527%2F40527.html"
                      target="_blank"
                      rel="noopener noreferrer nofollow"
                      className="hover:text-cyan-800 transition-colors"
                    >
                      嬉野温泉　和多屋別荘
                    </a>
                  </h3>
                  <div className="flex items-center gap-2 text-sm text-amber-600 font-bold">
                    <span>★ 4.12</span>
                    <span className="text-xs text-stone-700 font-medium">(1364件)</span>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
                  <div className="md:col-span-5 relative rounded-xl overflow-hidden shadow-inner aspect-[4/3]">
                    <img
                      src="https://img.travel.rakuten.co.jp/share/HOTEL/40527/40527.jpg"
                      alt="嬉野温泉　和多屋別荘"
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                    />
                  </div>
                  <div className="md:col-span-7 space-y-4">
                    <ul className="space-y-2">
                      <li className="flex items-start gap-2 text-xs sm:text-sm text-stone-700 font-medium"><span className="text-cyan-700 font-bold shrink-0">✔</span><span>嬉野川沿いに広がる2万坪の広大な敷地！日本庭園とモダンな美空間が調和</span></li>
                      <li className="flex items-start gap-2 text-xs sm:text-sm text-stone-700 font-medium"><span className="text-cyan-700 font-bold shrink-0">✔</span><span>自家源泉から湧き出るトロトロの美肌温泉「大浴場御影殿」と野趣あふれる露天風呂</span></li>
                      <li className="flex items-start gap-2 text-xs sm:text-sm text-stone-700 font-medium"><span className="text-cyan-700 font-bold shrink-0">✔</span><span>最高峰佐賀牛の鉄板焼きや伝統の温泉湯豆腐を堪能する極上美食ディナー</span></li>
                    </ul>
                    <p className="text-sm text-stone-600 leading-relaxed">
                      嬉野温泉の中心に位置し、世界的な評価を受ける歴史ある老舗温泉旅館。広大な敷地内には足湯やブックカフェ、茶室が点在し、滞在そのものが上質な旅の体験となります。宿自慢の温泉は重曹を豊富に含み、湯上がりの肌がしっとりと潤う奇跡の美肌湯。夕食は最高級佐賀牛のステーキや旬の地魚、名物嬉野温泉湯豆腐を個室ダイニングで心ゆくまで味わえ、祐徳稲荷初詣の贅沢な宿泊先に最適です。
                    </p>

                    <div className="bg-amber-50/70 border border-amber-200/60 rounded-lg p-3 text-xs text-stone-700 space-y-1">
                      <span className="font-bold text-amber-900 block">宿泊者のクチコミ・評判抜粋</span>
                      <p className="line-clamp-2 italic text-stone-600">「」</p>
                    </div>
                  </div>
                </div>

                <div className="bg-stone-50 rounded-xl p-4 flex flex-wrap items-center justify-between gap-4 border border-stone-100">
                  <div className="space-y-1 text-xs text-stone-700">
                    <div className="flex items-center gap-1 font-semibold text-stone-800">
                      <MapPin className="w-3.5 h-3.5 text-rose-500" />
                      <span>佐賀県 嬉野市嬉野町下宿乙738</span>
                    </div>
                    <div className="text-stone-700 pl-4.5">JR嬉野温泉駅から車で5分/長崎自動車道 嬉野ICより約5分</div>
                    <div className="text-stone-700 pl-4.5 font-medium">目安料金: <span className="text-cyan-800 font-bold">¥9,900〜</span>（1名あたり/時期により変動）</div>
                  </div>
                  <a
                    href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F40527%2F40527.html"
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
                      大正十四年創業の嬉野を代表する格式高い名宿！滝の湯と伝統会席のおもてなし
                    </span>
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-stone-900 leading-snug">
                    <a
                      href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F19923%2F19923.html"
                      target="_blank"
                      rel="noopener noreferrer nofollow"
                      className="hover:text-cyan-800 transition-colors"
                    >
                      嬉野温泉　大正屋
                    </a>
                  </h3>
                  <div className="flex items-center gap-2 text-sm text-amber-600 font-bold">
                    <span>★ 4.46</span>
                    <span className="text-xs text-stone-700 font-medium">(1270件)</span>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
                  <div className="md:col-span-5 relative rounded-xl overflow-hidden shadow-inner aspect-[4/3]">
                    <img
                      src="https://img.travel.rakuten.co.jp/share/HOTEL/19923/19923.jpg"
                      alt="嬉野温泉　大正屋"
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                    />
                  </div>
                  <div className="md:col-span-7 space-y-4">
                    <ul className="space-y-2">
                      <li className="flex items-start gap-2 text-xs sm:text-sm text-stone-700 font-medium"><span className="text-cyan-700 font-bold shrink-0">✔</span><span>創業大正14年！皇族や文人墨客にも愛されてきた嬉野温泉最高峰の老舗旅館</span></li>
                      <li className="flex items-start gap-2 text-xs sm:text-sm text-stone-700 font-medium"><span className="text-cyan-700 font-bold shrink-0">✔</span><span>美しく手入れされた日本庭園を眺める大浴場「四季の湯」や名物「滝の湯」の美肌泉</span></li>
                      <li className="flex items-start gap-2 text-xs sm:text-sm text-stone-700 font-medium"><span className="text-cyan-700 font-bold shrink-0">✔</span><span>佐賀牛のしゃぶしゃぶやすき焼き、有明海の旬の恵みを盛り込んだ伝統の会席料理</span></li>
                    </ul>
                    <p className="text-sm text-stone-600 leading-relaxed">
                      嬉野温泉の歴史を紡いできた風格あふれる純和風旅館。手入れの行き届いた日本庭園を取り囲むように配された館内には、静寂と凛とした気品が満ちています。滝を望む大浴場「滝の湯」では、とろみのある極上の美肌温泉に浸かりながら冬の澄んだ庭園景色を鑑賞。熟練の板前が腕を振るう京風会席料理は素材の旨味が際立ち、肥前浜宿の新酒とともに忘れられない美食の夜を演出してくれます。
                    </p>

                    <div className="bg-amber-50/70 border border-amber-200/60 rounded-lg p-3 text-xs text-stone-700 space-y-1">
                      <span className="font-bold text-amber-900 block">宿泊者のクチコミ・評判抜粋</span>
                      <p className="line-clamp-2 italic text-stone-600">「部屋の扉もそうですが、クッション材を付けるなどして開け閉めの。」</p>
                    </div>
                  </div>
                </div>

                <div className="bg-stone-50 rounded-xl p-4 flex flex-wrap items-center justify-between gap-4 border border-stone-100">
                  <div className="space-y-1 text-xs text-stone-700">
                    <div className="flex items-center gap-1 font-semibold text-stone-800">
                      <MapPin className="w-3.5 h-3.5 text-rose-500" />
                      <span>佐賀県 嬉野市嬉野町下宿乙2276-1　</span>
                    </div>
                    <div className="text-stone-700 pl-4.5">西九州新幹線嬉野温泉駅よりタクシー約5分／九州長崎自動車道 嬉野ICより約10分/ 博多駅交通センターより高速バス2時間</div>
                    <div className="text-stone-700 pl-4.5 font-medium">目安料金: <span className="text-cyan-800 font-bold">¥13,915〜</span>（1名あたり/時期により変動）</div>
                  </div>
                  <a
                    href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F19923%2F19923.html"
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
                      名産「嬉野茶」を五感で楽しむ癒やしの宿！お茶を浸した名物露天風呂
                    </span>
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-stone-900 leading-snug">
                    <a
                      href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F52858%2F52858.html"
                      target="_blank"
                      rel="noopener noreferrer nofollow"
                      className="hover:text-cyan-800 transition-colors"
                    >
                      嬉野温泉　茶心の宿　和楽園
                    </a>
                  </h3>
                  <div className="flex items-center gap-2 text-sm text-amber-600 font-bold">
                    <span>★ 4.39</span>
                    <span className="text-xs text-stone-700 font-medium">(651件)</span>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
                  <div className="md:col-span-5 relative rounded-xl overflow-hidden shadow-inner aspect-[4/3]">
                    <img
                      src="https://img.travel.rakuten.co.jp/share/HOTEL/52858/52858.jpg"
                      alt="嬉野温泉　茶心の宿　和楽園"
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                    />
                  </div>
                  <div className="md:col-span-7 space-y-4">
                    <ul className="space-y-2">
                      <li className="flex items-start gap-2 text-xs sm:text-sm text-stone-700 font-medium"><span className="text-cyan-700 font-bold shrink-0">✔</span><span>嬉野名産の緑茶をテーマにした個性豊かな温泉宿！ロビーに漂う茶香炉の心地よい香り</span></li>
                      <li className="flex items-start gap-2 text-xs sm:text-sm text-stone-700 font-medium"><span className="text-cyan-700 font-bold shrink-0">✔</span><span>大きな茶壺からお茶のエキスが注がれる名物「お茶露天風呂」で至福のスキンケア</span></li>
                      <li className="flex items-start gap-2 text-xs sm:text-sm text-stone-700 font-medium"><span className="text-cyan-700 font-bold shrink-0">✔</span><span>嬉野茶を使った特製茶粥や佐賀牛の陶板焼きなどアイデアあふれる創作料理</span></li>
                    </ul>
                    <p className="text-sm text-stone-600 leading-relaxed">
                      日本有数の茶所・嬉野ならではの「お茶」の魅力とおもてなしが詰まったユニークな温泉旅館。館内には茶香炉の芳しい香りが漂い、一歩足を踏み入れた瞬間から深いリラックスに包まれます。名物の「お茶露天風呂」は、カテキンとビタミンCを豊富に含んだ緑茶の成分が美肌温泉と溶け合い、美肌効果が倍増。夕食には佐賀牛のほかにお茶を取り入れた独創的な料理が並び、心温まる冬の滞在を叶えます。
                    </p>

                    <div className="bg-amber-50/70 border border-amber-200/60 rounded-lg p-3 text-xs text-stone-700 space-y-1">
                      <span className="font-bold text-amber-900 block">宿泊者のクチコミ・評判抜粋</span>
                      <p className="line-clamp-2 italic text-stone-600">「夜は神秘的な雰囲気、お茶風呂も最高!露天風呂、夜は神秘的な雰囲気でお茶風呂にもでき最高!」</p>
                    </div>
                  </div>
                </div>

                <div className="bg-stone-50 rounded-xl p-4 flex flex-wrap items-center justify-between gap-4 border border-stone-100">
                  <div className="space-y-1 text-xs text-stone-700">
                    <div className="flex items-center gap-1 font-semibold text-stone-800">
                      <MapPin className="w-3.5 h-3.5 text-rose-500" />
                      <span>佐賀県 嬉野市嬉野町下野甲33</span>
                    </div>
                    <div className="text-stone-700 pl-4.5">ＪＲ　嬉野温泉駅より車で約５分／長崎自動車道　嬉野ＩＣより約５分</div>
                    <div className="text-stone-700 pl-4.5 font-medium">目安料金: <span className="text-cyan-800 font-bold">¥9,400〜</span>（1名あたり/時期により変動）</div>
                  </div>
                  <a
                    href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F52858%2F52858.html"
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
                      チームラボのデジタルアートが常設！15万坪の庭園を抱く武雄温泉の幻想リゾート
                    </span>
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-stone-900 leading-snug">
                    <a
                      href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F13417%2F13417.html"
                      target="_blank"
                      rel="noopener noreferrer nofollow"
                      className="hover:text-cyan-800 transition-colors"
                    >
                      武雄温泉　御船山楽園ホテル
                    </a>
                  </h3>
                  <div className="flex items-center gap-2 text-sm text-amber-600 font-bold">
                    <span>★ 4.57</span>
                    <span className="text-xs text-stone-700 font-medium">(1217件)</span>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
                  <div className="md:col-span-5 relative rounded-xl overflow-hidden shadow-inner aspect-[4/3]">
                    <img
                      src="https://img.travel.rakuten.co.jp/share/HOTEL/13417/13417.jpg"
                      alt="武雄温泉　御船山楽園ホテル"
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                    />
                  </div>
                  <div className="md:col-span-7 space-y-4">
                    <ul className="space-y-2">
                      <li className="flex items-start gap-2 text-xs sm:text-sm text-stone-700 font-medium"><span className="text-cyan-700 font-bold shrink-0">✔</span><span>国登録記念物「御船山楽園」の広大な自然に囲まれた唯一無二のロケーション</span></li>
                      <li className="flex items-start gap-2 text-xs sm:text-sm text-stone-700 font-medium"><span className="text-cyan-700 font-bold shrink-0">✔</span><span>チームラボによるランプの森のアート空間と、世界大会受賞の本格サウナ「らかんの湯」</span></li>
                      <li className="flex items-start gap-2 text-xs sm:text-sm text-stone-700 font-medium"><span className="text-cyan-700 font-bold shrink-0">✔</span><span>佐賀牛をはじめとする九州・佐賀の厳選食材を味わう洗練された季節の会席料理</span></li>
                    </ul>
                    <p className="text-sm text-stone-600 leading-relaxed">
                      武雄温泉のシンボル・御船山の断崖を背に佇む、アートと自然が融合した革新的な温泉リゾート。ロビーにはチームラボの幻想的なランプの森が広がり、訪れる者を別世界へと誘います。敷地内の「らかんの湯」は全国サウナランキングで複数回グランプリを獲得した世界最高峰のサウナ施設で、薬草スチームサウナや武雄の名水水風呂が完備。肥前浜宿や祐徳稲荷神社へも車で約30分と近く、最高の感動を届けてくれます。
                    </p>

                    <div className="bg-amber-50/70 border border-amber-200/60 rounded-lg p-3 text-xs text-stone-700 space-y-1">
                      <span className="font-bold text-amber-900 block">宿泊者のクチコミ・評判抜粋</span>
                      <p className="line-clamp-2 italic text-stone-600">「食事大満足です。 」</p>
                    </div>
                  </div>
                </div>

                <div className="bg-stone-50 rounded-xl p-4 flex flex-wrap items-center justify-between gap-4 border border-stone-100">
                  <div className="space-y-1 text-xs text-stone-700">
                    <div className="flex items-center gap-1 font-semibold text-stone-800">
                      <MapPin className="w-3.5 h-3.5 text-rose-500" />
                      <span>佐賀県 武雄市武雄町武雄4100</span>
                    </div>
                    <div className="text-stone-700 pl-4.5">JR佐世保線「武雄温泉駅」より車で５分 / 長崎自動車道 武雄・北方ICより嬉野方面へ約５km</div>
                    <div className="text-stone-700 pl-4.5 font-medium">目安料金: <span className="text-cyan-800 font-bold">¥22,550〜</span>（1名あたり/時期により変動）</div>
                  </div>
                  <a
                    href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F13417%2F13417.html"
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
                冬の鹿島・肥前浜宿・祐徳門前・嬉野旅行 よくある質問（FAQ）
              </h2>
            </div>
            <div className="space-y-4">

            <div className="bg-white rounded-xl p-6 border border-stone-200/80 shadow-sm space-y-2">
              <h3 className="text-base font-bold text-stone-900 flex items-start gap-2">
                <span className="text-cyan-700 font-extrabold">Q.</span>
                <span>肥前浜宿の酒蔵通りで見学や試飲ができるおすすめの酒蔵は？</span>
              </h3>
              <p className="text-sm text-stone-600 leading-relaxed pl-6">
                <span className="font-semibold text-stone-800">A. </span>「肥前屋（峰松酒造場）」では、昭和の酒蔵見学や多彩な銘酒の無料試飲が楽しめる観光酒蔵として大人気です。また「富久千代酒造（鍋島）」など世界的な鑑評会でチャンピオンに輝いた名蔵が点在し、街道沿いのショップで限定酒を購入できます。
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 border border-stone-200/80 shadow-sm space-y-2">
              <h3 className="text-base font-bold text-stone-900 flex items-start gap-2">
                <span className="text-cyan-700 font-extrabold">Q.</span>
                <span>祐徳稲荷神社の初詣の混雑状況と参拝のコツは？</span>
              </h3>
              <p className="text-sm text-stone-600 leading-relaxed pl-6">
                <span className="font-semibold text-stone-800">A. </span>正月三が日は例年非常に多くの参拝客で賑わい、周辺道路や駐車場が混雑します。元旦の早朝（6:00〜8:00頃）または夕方以降の参拝が比較的スムーズです。本殿から奥の院までは約200段の石段が続くため、無理のないペースで登りましょう。
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 border border-stone-200/80 shadow-sm space-y-2">
              <h3 className="text-base font-bold text-stone-900 flex items-start gap-2">
                <span className="text-cyan-700 font-extrabold">Q.</span>
                <span>嬉野温泉の「温泉湯豆腐」はなぜあんなにとろとろになるのですか？</span>
              </h3>
              <p className="text-sm text-stone-600 leading-relaxed pl-6">
                <span className="font-semibold text-stone-800">A. </span>嬉野温泉の泉質は重曹を多く含む弱アルカリ性単純温泉です。この特殊な温泉水で豆腐をコトコト煮込むと、温泉成分と豆腐のにがりが反応して豆腐の表面が溶け出し、スープが白濁してトロトロの極上食感に変化します。冬の朝食や夕食に欠かせない名物料理です。
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
                <Link href="/prefectures/saga" className="text-cyan-800 hover:text-cyan-950 font-medium hover:underline flex items-center gap-1.5 text-sm">
                  <ChevronRight className="w-4 h-4 text-cyan-600 shrink-0" />
                  <span>佐賀県のおすすめ観光名所＆温泉宿一覧</span>
                </Link>
              </li>
              <li>
                <Link href="/features" className="text-cyan-800 hover:text-cyan-950 font-medium hover:underline flex items-center gap-1.5 text-sm">
                  <ChevronRight className="w-4 h-4 text-cyan-600 shrink-0" />
                  <span>全国の季節・目的別旅行特集一覧</span>
                </Link>
              </li>

              <li>
                <Link href="/winter-kagoshima-chiran-samurai-makurazaki-katsuo-kaimondake-kurobuta-stay" className="text-cyan-800 hover:text-cyan-950 font-medium hover:underline flex items-center gap-1.5 text-sm">
                  <ChevronRight className="w-4 h-4 text-cyan-600 shrink-0" />
                  <span>2026-2027年冬の鹿児島・南薩摩＆枕崎！本場一本釣り鰹と鹿児島黒豚・黒牛会席名宿5選</span>
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
