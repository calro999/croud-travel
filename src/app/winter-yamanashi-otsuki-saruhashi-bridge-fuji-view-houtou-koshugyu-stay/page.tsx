import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next';
import { ExternalLink, Calendar, MapPin, Sparkles, ChevronRight, CheckCircle2, Info, Compass, HelpCircle } from 'lucide-react';

export const metadata: Metadata = {
  title: '【日本三奇橋・名勝猿橋の冬峡谷美と霊峰富士パノラマ】2026-2027年冬の山梨・大月＆都留！名物手打ちほうとうと甲州牛会席名宿5選 | 旅宿クラウド',
  description: '歌川広重の浮世絵にも描かれた日本三奇橋・国の名勝「猿橋」の冬峡谷雪景色と、岩殿山から仰ぐ秀麗富嶽十二景・冠雪の富士山大パノラマ！熱々の名物手打ちかぼちゃほうとうや甲州富士桜ポーク、最高峰甲州牛会席。都留の美肌天然温泉「より道の湯」や快適ホテルで寛ぐ冬の東山梨厳選名宿5選。',
  keywords: ['大月・都留・富士東部・上野原', '山梨県', '冬旅行', '温泉旅館', '楽天トラベル', 'ふるさと納税', 'ホテルおすすめ'],
  openGraph: {
    title: '【日本三奇橋・名勝猿橋の冬峡谷美と霊峰富士パノラマ】2026-2027年冬の山梨・大月＆都留！名物手打ちほうとうと甲州牛会席名宿5選 | 旅宿クラウド',
    description: '歌川広重の浮世絵にも描かれた日本三奇橋・国の名勝「猿橋」の冬峡谷雪景色と、岩殿山から仰ぐ秀麗富嶽十二景・冠雪の富士山大パノラマ！熱々の名物手打ちかぼちゃほうとうや甲州富士桜ポーク、最高峰甲州牛会席。都留の美肌天然温泉「より道の湯」や快適ホテルで寛ぐ冬の東山梨厳選名宿5選。',
    url: 'https://croud-travel.pages.dev/winter-yamanashi-otsuki-saruhashi-bridge-fuji-view-houtou-koshugyu-stay',
    siteName: '旅宿クラウド',
    locale: 'ja_JP',
    type: 'article',
    images: [
      {
        url: 'https://img.travel.rakuten.co.jp/share/HOTEL/183891/183891.jpg',
        width: 1200,
        height: 630,
        alt: '【日本三奇橋・名勝猿橋の冬峡谷美と霊峰富士パノラマ】2026-2027年冬の山梨・大月＆都留！名物手打ちほうとうと甲州牛会席名宿5選',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: '【日本三奇橋・名勝猿橋の冬峡谷美と霊峰富士パノラマ】2026-2027年冬の山梨・大月＆都留！名物手打ちほうとうと甲州牛会席名宿5選',
    description: '歌川広重の浮世絵にも描かれた日本三奇橋・国の名勝「猿橋」の冬峡谷雪景色と、岩殿山から仰ぐ秀麗富嶽十二景・冠雪の富士山大パノラマ！熱々の名物手打ちかぼちゃほうとうや甲州富士桜ポーク、最高峰甲州牛会席。都留の美肌天然温泉「より道の湯」や快適ホテルで寛ぐ冬の東山梨厳選名宿5選。',
  },
};

export default function FeaturePage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'TouristDestination',
    name: '大月・都留・富士東部・上野原',
    description: '歌川広重の浮世絵にも描かれた日本三奇橋・国の名勝「猿橋」の冬峡谷雪景色と、岩殿山から仰ぐ秀麗富嶽十二景・冠雪の富士山大パノラマ！熱々の名物手打ちかぼちゃほうとうや甲州富士桜ポーク、最高峰甲州牛会席。都留の美肌天然温泉「より道の湯」や快適ホテルで寛ぐ冬の東山梨厳選名宿5選。',
    url: 'https://croud-travel.pages.dev/winter-yamanashi-otsuki-saruhashi-bridge-fuji-view-houtou-koshugyu-stay',
    touristType: ['温泉旅行', 'グルメ旅行', '歴史散策', '冬旅行'],
    containedInPlace: {
      '@type': 'AdministrativeArea',
      name: '山梨県',
    },
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'おすすめ宿泊施設',
      itemListElement: [
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'LodgingBusiness',
            name: '東横ＩＮＮ富士山大月駅',
            url: 'https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F183891%2F183891.html',
            image: 'https://img.travel.rakuten.co.jp/share/HOTEL/183891/183891.jpg',
            address: '山梨県 大月市御太刀2-3-1',
            aggregateRating: {
              '@type': 'AggregateRating',
              ratingValue: '4.03',
              reviewCount: '492'
            }
          }
        },         {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'LodgingBusiness',
            name: '山梨泊まれる温泉　より道の湯',
            url: 'https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F167096%2F167096.html',
            image: 'https://img.travel.rakuten.co.jp/share/HOTEL/167096/167096.jpg',
            address: '山梨県 都留市つる1-13-31',
            aggregateRating: {
              '@type': 'AggregateRating',
              ratingValue: '4.34',
              reviewCount: '580'
            }
          }
        },         {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'LodgingBusiness',
            name: '庭園と感動の宿　富士山温泉　ホテル鐘山苑',
            url: 'https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F19206%2F19206.html',
            image: 'https://img.travel.rakuten.co.jp/share/HOTEL/19206/19206.jpg',
            address: '山梨県 富士吉田市上吉田東9-1-18',
            aggregateRating: {
              '@type': 'AggregateRating',
              ratingValue: '4.69',
              reviewCount: '1160'
            }
          }
        },         {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'LodgingBusiness',
            name: 'ホテルマイステイズ富士山　展望温泉',
            url: 'https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F158471%2F158471.html',
            image: 'https://img.travel.rakuten.co.jp/share/HOTEL/158471/158471.jpg',
            address: '山梨県 富士吉田市新倉2654',
            aggregateRating: {
              '@type': 'AggregateRating',
              ratingValue: '4.36',
              reviewCount: '1131'
            }
          }
        },         {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'LodgingBusiness',
            name: '富士山と湖を望むリゾート　ホテル　マウント富士',
            url: 'https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F75376%2F75376.html',
            image: 'https://img.travel.rakuten.co.jp/share/HOTEL/75376/75376.jpg',
            address: '山梨県 南都留郡山中湖村山中1360-83',
            aggregateRating: {
              '@type': 'AggregateRating',
              ratingValue: '4.35',
              reviewCount: '1465'
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
                山梨県・大月・都留・富士東部・上野原
              </span>
            </div>

            <h1 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-tight text-white">
              【日本三奇橋・名勝猿橋の冬峡谷美と霊峰富士パノラマ】2026-2027年冬の山梨・大月＆都留！名物手打ちほうとうと甲州牛会席名宿5選
            </h1>

            <p className="text-stone-300 text-sm sm:text-base leading-relaxed">
              歌川広重の浮世絵にも描かれた日本三奇橋・国の名勝「猿橋」の冬峡谷雪景色と、岩殿山から仰ぐ秀麗富嶽十二景・冠雪の富士山大パノラマ！熱々の名物手打ちかぼちゃほうとうや甲州富士桜ポーク、最高峰甲州牛会席。都留の美肌天然温泉「より道の湯」や快適ホテルで寛ぐ冬の東山梨厳選名宿5選。
            </p>

            <div className="flex flex-wrap items-center gap-4 text-xs text-stone-700 pt-2 border-t border-stone-800">
              <span className="flex items-center gap-1.5">
                <Calendar className="w-4 h-4 text-cyan-400" />
                2026-2027年 冬シーズン最新版
              </span>
              <span className="flex items-center gap-1.5">
                <MapPin className="w-4 h-4 text-rose-400" />
                大月・都留・富士東部・上野原（山梨県）
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
                冬の大月・都留・富士東部・上野原を旅する魅力と情話
              </h2>
            </div>
            <div className="prose prose-stone max-w-none text-stone-700 leading-relaxed text-sm sm:text-base space-y-4">
              <p className="first-letter:text-3xl first-letter:font-bold first-letter:text-cyan-800 first-letter:mr-1 float-none">
                富士山を水源とする清流・桂川が深い渓谷を刻み、冬の澄んだ大気の中に白銀の霊峰富士が圧倒的な存在感で聳え立つ山梨県東部・大月＆都留エリア。大月市猿橋町に架かる「猿橋（さるはし）」は、山口県の錦帯橋、富山県の愛本橋（現在は消失）とともに『日本三奇橋』のひとつに数えられる国の名勝です。川床から約31メートルの高さがある深い断崖絶壁に対し、水中に橋脚を一本も立てることなく、両岸の岩盤から張り出させた四層の「刎木（はねぎ）」によって橋桁を支える構造は、世界でも類を見ない古代・中世の土木技術の結晶。江戸時代の浮世絵師・歌川広重が名作『甲陽猿橋之図』に描き、十返舎一九や松尾芭蕉ら多くの文人墨客が足を止めたこの地は、冬になると深いエメラルドグリーンの淵と白雪をまとった渓谷の岩肌が息を呑むほどの水墨画の世界を描き出します。大月市街地を見下ろす「岩殿山（標高634m）」は、かつて武田氏の重臣・小山田信茂が築いた難攻不落の山城跡であり、大月市が誇る「秀麗富嶽十二景」の第一番山頂。澄み切った冬晴れの朝、岩殿山の展望台から仰ぐ雪化粧の富士山は、裾野まで一望できる富士鑑賞の最高峰パノラマです。冷えた身体を優しく包み込んでくれるのは、山梨の冬を代表する郷土料理「ほうとう」。かぼちゃや山菜、キノコ、自家製味噌で煮込んだ極太の手打ち麺は、一口ごとに身体を芯から温めてくれます。さらにきめ細やかな肉質と甘い脂が自慢の「甲州富士桜ポーク」や、最高ランクの黒毛和牛「甲州牛」、都留市に湧く美肌の天然温泉「より道の湯」のぬくもりが待つ、冬の甲斐路・大月と都留の豊かな旅へご案内します。
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
                  世界に誇る架橋技術と浮世絵の情景！日本三奇橋・国の名勝「猿橋」の冬峡谷美
                </h3>
              </div>
              <p className="text-sm text-stone-600 leading-relaxed pl-11">
                歌川広重の浮世絵そのままの渓谷美を誇る猿橋。四層の刎木が幾重にも重なる精緻な木組み構造と、桂川の深いエメラルドグリーンの水面、冬の雪景色が織りなす神秘的な絶景を間近で鑑賞できます。
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 border border-stone-200/80 shadow-sm space-y-3">
              <div className="flex items-center gap-3">
                <span className="w-8 h-8 rounded-full bg-cyan-800 text-white font-bold flex items-center justify-center text-sm shrink-0">
                  2
                </span>
                <h3 className="font-bold text-stone-900 text-base sm:text-lg">
                  秀麗富嶽十二景の筆頭！岩殿山から望む冠雪の富士山大パノラマと武田の山城跡
                </h3>
              </div>
              <p className="text-sm text-stone-600 leading-relaxed pl-11">
                東京スカイツリーと同じ標高634mの岩殿山。冬の澄み渡る寒空のもと、富士山の雄大な全景を真正面に捉える大展望と、かつて難攻不落を誇った戦国時代の岩山城郭の歴史探訪を同時に楽しめます。
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 border border-stone-200/80 shadow-sm space-y-3">
              <div className="flex items-center gap-3">
                <span className="w-8 h-8 rounded-full bg-cyan-800 text-white font-bold flex items-center justify-center text-sm shrink-0">
                  3
                </span>
                <h3 className="font-bold text-stone-900 text-base sm:text-lg">
                  湯気立ちのぼる熱々「手打ちかぼちゃほうとう」と甲州牛会席＆都留の美肌天然温泉
                </h3>
              </div>
              <p className="text-sm text-stone-600 leading-relaxed pl-11">
                コク深い味噌出汁とかぼちゃの甘みが溶け合う冬のほうとう。霜降り甲州牛や富士桜ポークに舌鼓を打ち、pHの高い高濃度炭酸泉や天然温泉で身体を芯まで温める至福の冬の湯治ステイが叶います。
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
・電車：JR中央本線特急「あずさ」「かいじ」で新宿駅から大月駅まで約1時間（乗り換えなし）。大月駅から名勝猿橋へは富士急バスで約15分「猿橋」下車、またはJR中央本線普通列車で猿橋駅下車、徒歩約15分。
・車（都心から）：中央自動車道「大月IC」または「都留IC」より約10〜15分。高井戸ICから大月ICまで約1時間。
・富士五湖方面へ：大月駅より富士急行線特急（富士回遊など）で富士山駅・河口湖駅まで約45分〜50分。

【見頃・気候・おすすめの服装】
・ベストシーズン：11月〜1月（空気が一年で最も澄み渡り、富士山の冠雪が美しく映える季節。猿橋周辺の冬景色や星空鑑賞に最適）。
・気温の目安：盆地・山間部のため冬の寒さは厳しく、日中は5〜9℃前後、朝晩は氷点下（-2〜-5℃）まで冷え込みます。
・服装のポイント：しっかりとした厚手の防寒ダウンジャケット、手袋、マフラー、ニット帽が必要です。猿橋の遊歩道や岩殿山の散策路は石段や勾配があるため、滑りにくいトレッキングシューズやスニーカーを着用してください。
            </div>
          </section>

          {/* Wikipedia 近隣観光名所紹介 */}
          <section className="bg-white rounded-2xl p-6 sm:p-8 border border-stone-200/80 shadow-sm space-y-6">
            <div className="flex items-center gap-2 border-b border-stone-100 pb-4">
              <Info className="w-5 h-5 text-cyan-700" />
              <h2 className="text-xl sm:text-2xl font-bold text-stone-900">
                近隣の必見名所：日本三奇橋・名勝猿橋（桂川の深い渓谷美と浮世絵の情景・秀麗富嶽富士パノラマ）
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
              <div className="md:col-span-5 relative rounded-xl overflow-hidden shadow-inner aspect-[4/3] bg-stone-100">
                <img
                  src="https://thumb.wikimedia.org/wikipedia/commons/thumb/1/15/Saru_hashi-1a.jpg/1280px-Saru_hashi-1a.jpg?utm_source=ja.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
                  alt="猿橋"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
              <div className="md:col-span-7 space-y-3">
                <h3 className="font-bold text-stone-900 text-lg">
                  猿橋
                </h3>
                <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                  猿橋（さるはし、えんきょう）は、山梨県大月市猿橋町猿橋の桂川に架かる刎橋。 日本三奇橋に数えられ、国の名勝に指定されている。
                </p>
                <div className="pt-2 text-xs">
                  <a
                    href="https://ja.wikipedia.org/wiki/%E7%8C%BF%E6%A9%8B"
                    target="_blank"
                    rel="noopener noreferrer nofollow"
                    className="inline-flex items-center gap-1 text-cyan-700 hover:text-cyan-900 underline"
                  >
                    <span>出典：Wikipedia公式『猿橋』詳細情報を見る</span>
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
                大月・都留・富士東部・上野原 厳選の温泉＆名宿5選
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
                      大月駅の目の前に建つ最高のアクセス！猿橋観光と富士五湖ドライブの拠点
                    </span>
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-stone-900 leading-snug">
                    <a
                      href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F183891%2F183891.html"
                      target="_blank"
                      rel="noopener noreferrer nofollow"
                      className="hover:text-cyan-800 transition-colors"
                    >
                      東横ＩＮＮ富士山大月駅
                    </a>
                  </h3>
                  <div className="flex items-center gap-2 text-sm text-amber-600 font-bold">
                    <span>★ 4.03</span>
                    <span className="text-xs text-stone-700 font-medium">(492件)</span>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
                  <div className="md:col-span-5 relative rounded-xl overflow-hidden shadow-inner aspect-[4/3]">
                    <img
                      src="https://img.travel.rakuten.co.jp/share/HOTEL/183891/183891.jpg"
                      alt="東横ＩＮＮ富士山大月駅"
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                    />
                  </div>
                  <div className="md:col-span-7 space-y-4">
                    <ul className="space-y-2">
                      <li className="flex items-start gap-2 text-xs sm:text-sm text-stone-700 font-medium"><span className="text-cyan-700 font-bold shrink-0">✔</span><span>JR中央線・富士急行線「大月駅」から徒歩わずか1分の抜群の好立地</span></li>
                      <li className="flex items-start gap-2 text-xs sm:text-sm text-stone-700 font-medium"><span className="text-cyan-700 font-bold shrink-0">✔</span><span>客室の窓から富士山を望む富士山ビュールームを用意（天候による）</span></li>
                      <li className="flex items-start gap-2 text-xs sm:text-sm text-stone-700 font-medium"><span className="text-cyan-700 font-bold shrink-0">✔</span><span>清潔で機能的な客室と、毎朝無料で提供される温かい和洋朝食サービス</span></li>
                    </ul>
                    <p className="text-sm text-stone-600 leading-relaxed">
                      JR大月駅の駅前に位置し、名勝猿橋や岩殿山への観光拠点として圧倒的な利便性を誇る駅前ホテル。新宿から特急で1時間、富士急行線への乗り換え地点でもあり、電車旅にもレンタカードライブにも最適です。客室は清潔でベッドの寝心地も良く、高層階の客室からは雪化粧の富士山を望めることも。周辺には名物ほうとうを提供する郷土料理店が点在し、身軽に甲斐路の冬旅を満喫できます。
                    </p>

                    <div className="bg-amber-50/70 border border-amber-200/60 rounded-lg p-3 text-xs text-stone-700 space-y-1">
                      <span className="font-bold text-amber-900 block">宿泊者のクチコミ・評判抜粋</span>
                      <p className="line-clamp-2 italic text-stone-600">「道は迷ったが、施設は綺麗で接客も丁寧初めて利用した駅ということもあって、ホテルまでの道が少し迷いましたが、とても綺麗で接客がとても丁寧でした。」</p>
                    </div>
                  </div>
                </div>

                <div className="bg-stone-50 rounded-xl p-4 flex flex-wrap items-center justify-between gap-4 border border-stone-100">
                  <div className="space-y-1 text-xs text-stone-700">
                    <div className="flex items-center gap-1 font-semibold text-stone-800">
                      <MapPin className="w-3.5 h-3.5 text-rose-500" />
                      <span>山梨県 大月市御太刀2-3-1</span>
                    </div>
                    <div className="text-stone-700 pl-4.5">JR中央本線・富士急行線「大月駅」から徒歩5分</div>
                    <div className="text-stone-700 pl-4.5 font-medium">目安料金: <span className="text-cyan-800 font-bold">¥6,825〜</span>（1名あたり/時期により変動）</div>
                  </div>
                  <a
                    href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F183891%2F183891.html"
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
                      都留市駅前の泊まれる本格温泉！極上サウナと源泉かけ流し露天風呂の宿
                    </span>
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-stone-900 leading-snug">
                    <a
                      href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F167096%2F167096.html"
                      target="_blank"
                      rel="noopener noreferrer nofollow"
                      className="hover:text-cyan-800 transition-colors"
                    >
                      山梨泊まれる温泉　より道の湯
                    </a>
                  </h3>
                  <div className="flex items-center gap-2 text-sm text-amber-600 font-bold">
                    <span>★ 4.34</span>
                    <span className="text-xs text-stone-700 font-medium">(580件)</span>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
                  <div className="md:col-span-5 relative rounded-xl overflow-hidden shadow-inner aspect-[4/3]">
                    <img
                      src="https://img.travel.rakuten.co.jp/share/HOTEL/167096/167096.jpg"
                      alt="山梨泊まれる温泉　より道の湯"
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                    />
                  </div>
                  <div className="md:col-span-7 space-y-4">
                    <ul className="space-y-2">
                      <li className="flex items-start gap-2 text-xs sm:text-sm text-stone-700 font-medium"><span className="text-cyan-700 font-bold shrink-0">✔</span><span>富士急行線「都留市駅」から徒歩1分！地下1,500mから湧く上質な天然温泉</span></li>
                      <li className="flex items-start gap-2 text-xs sm:text-sm text-stone-700 font-medium"><span className="text-cyan-700 font-bold shrink-0">✔</span><span>露天風呂・高濃度炭酸泉・ロウリュサウナ・岩盤浴など充実の温浴施設を完備</span></li>
                      <li className="flex items-start gap-2 text-xs sm:text-sm text-stone-700 font-medium"><span className="text-cyan-700 font-bold shrink-0">✔</span><span>山梨県産の甲州ワイン鱒や富士桜ポークを味わえる本格和食ダイニング</span></li>
                    </ul>
                    <p className="text-sm text-stone-600 leading-relaxed">
                      大月駅から富士急行線でわずか十数分、都留市駅前に位置する人気の本格温泉宿。館内には自家源泉を使用した露天風呂や広々とした内湯、名物の超高濃度炭酸泉、本格ロウリュサウナが備わり、日帰り温泉施設としても大人気です。客室は和モダンで落ち着きがあり、温泉旅館のような寛ぎを約束。冬の猿橋散策の後に温泉とサウナで極上のととのい体験を味わいたい旅人にとって、これ以上のない選択肢です。
                    </p>

                    <div className="bg-amber-50/70 border border-amber-200/60 rounded-lg p-3 text-xs text-stone-700 space-y-1">
                      <span className="font-bold text-amber-900 block">宿泊者のクチコミ・評判抜粋</span>
                      <p className="line-clamp-2 italic text-stone-600">「温泉とサウナが最高、アロマの香りに癒される温泉の泉質が良いです。サウナは広く、オートロウリュウもあり、熱さも抜群。朝食も美味しく、何泊もしたくなる宿です。また、アロマの匂いが所々感じられ癒。」</p>
                    </div>
                  </div>
                </div>

                <div className="bg-stone-50 rounded-xl p-4 flex flex-wrap items-center justify-between gap-4 border border-stone-100">
                  <div className="space-y-1 text-xs text-stone-700">
                    <div className="flex items-center gap-1 font-semibold text-stone-800">
                      <MapPin className="w-3.5 h-3.5 text-rose-500" />
                      <span>山梨県 都留市つる1-13-31</span>
                    </div>
                    <div className="text-stone-700 pl-4.5">富士急行線　都留市駅より徒歩にて約１分</div>
                    <div className="text-stone-700 pl-4.5 font-medium">目安料金: <span className="text-cyan-800 font-bold">¥7,300〜</span>（1名あたり/時期により変動）</div>
                  </div>
                  <a
                    href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F167096%2F167096.html"
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
                      2万5千坪の日本庭園越しに霊峰富士を仰ぐ！最高峰の温泉旅館とおもてなし
                    </span>
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-stone-900 leading-snug">
                    <a
                      href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F19206%2F19206.html"
                      target="_blank"
                      rel="noopener noreferrer nofollow"
                      className="hover:text-cyan-800 transition-colors"
                    >
                      庭園と感動の宿　富士山温泉　ホテル鐘山苑
                    </a>
                  </h3>
                  <div className="flex items-center gap-2 text-sm text-amber-600 font-bold">
                    <span>★ 4.69</span>
                    <span className="text-xs text-stone-700 font-medium">(1160件)</span>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
                  <div className="md:col-span-5 relative rounded-xl overflow-hidden shadow-inner aspect-[4/3]">
                    <img
                      src="https://img.travel.rakuten.co.jp/share/HOTEL/19206/19206.jpg"
                      alt="庭園と感動の宿　富士山温泉　ホテル鐘山苑"
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                    />
                  </div>
                  <div className="md:col-span-7 space-y-4">
                    <ul className="space-y-2">
                      <li className="flex items-start gap-2 text-xs sm:text-sm text-stone-700 font-medium"><span className="text-cyan-700 font-bold shrink-0">✔</span><span>四季の美を映す壮大な日本庭園と、最上階の露天風呂から望む感動の富士山ビュー</span></li>
                      <li className="flex items-start gap-2 text-xs sm:text-sm text-stone-700 font-medium"><span className="text-cyan-700 font-bold shrink-0">✔</span><span>名湯「富士山温泉」の大浴場や庭園露天風呂で楽しむ贅を尽くした湯浴み</span></li>
                      <li className="flex items-start gap-2 text-xs sm:text-sm text-stone-700 font-medium"><span className="text-cyan-700 font-bold shrink-0">✔</span><span>甲州牛のステーキや旬の味覚を彩り豊かに盛り込んだ匠の極上懐石料理</span></li>
                    </ul>
                    <p className="text-sm text-stone-600 leading-relaxed">
                      富士山の裾野、広大な日本庭園を有する甲信越屈指の高級温泉旅館。大月・都留エリアから車で約25〜30分、富士山温泉を代表する名宿です。客室や露天風呂からは裾野まで広がる冠雪の富士山をパノラマで望め、冬の澄んだ大気の中で夕暮れに赤く染まる紅富士は圧巻の一言。夕食は最高ランクの甲州牛をはじめ山梨の美食を凝縮した贅沢な懐石料理。特別な冬の記念日旅行に最高の贅沢を提供します。
                    </p>

                    <div className="bg-amber-50/70 border border-amber-200/60 rounded-lg p-3 text-xs text-stone-700 space-y-1">
                      <span className="font-bold text-amber-900 block">宿泊者のクチコミ・評判抜粋</span>
                      <p className="line-clamp-2 italic text-stone-600">「夕食と富士山に感動、スタッフの対応も素敵夕飯がとても美味しかったです。担当してくれた仲居さんがとても素晴らしく さらに満足な夕食でした。大浴場の洗い場が30人分以上で40近いかもしれませんので。」</p>
                    </div>
                  </div>
                </div>

                <div className="bg-stone-50 rounded-xl p-4 flex flex-wrap items-center justify-between gap-4 border border-stone-100">
                  <div className="space-y-1 text-xs text-stone-700">
                    <div className="flex items-center gap-1 font-semibold text-stone-800">
                      <MapPin className="w-3.5 h-3.5 text-rose-500" />
                      <span>山梨県 富士吉田市上吉田東9-1-18</span>
                    </div>
                    <div className="text-stone-700 pl-4.5">富士急行線富士山駅より１３時～１８時の間無料送迎あり／車８分／駅到着時にお電話下さい／翌日のお送りは８：００より３０分毎</div>
                    <div className="text-stone-700 pl-4.5 font-medium">目安料金: <span className="text-cyan-800 font-bold">¥22,000〜</span>（1名あたり/時期により変動）</div>
                  </div>
                  <a
                    href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F19206%2F19206.html"
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
                      最上階展望温泉から富士山を一望！モダンでスタイリッシュなリゾートホテル
                    </span>
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-stone-900 leading-snug">
                    <a
                      href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F158471%2F158471.html"
                      target="_blank"
                      rel="noopener noreferrer nofollow"
                      className="hover:text-cyan-800 transition-colors"
                    >
                      ホテルマイステイズ富士山　展望温泉
                    </a>
                  </h3>
                  <div className="flex items-center gap-2 text-sm text-amber-600 font-bold">
                    <span>★ 4.36</span>
                    <span className="text-xs text-stone-700 font-medium">(1131件)</span>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
                  <div className="md:col-span-5 relative rounded-xl overflow-hidden shadow-inner aspect-[4/3]">
                    <img
                      src="https://img.travel.rakuten.co.jp/share/HOTEL/158471/158471.jpg"
                      alt="ホテルマイステイズ富士山　展望温泉"
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                    />
                  </div>
                  <div className="md:col-span-7 space-y-4">
                    <ul className="space-y-2">
                      <li className="flex items-start gap-2 text-xs sm:text-sm text-stone-700 font-medium"><span className="text-cyan-700 font-bold shrink-0">✔</span><span>富士急ハイランド駅近く！大月・都留からのアクセスも良好なリゾート拠点</span></li>
                      <li className="flex items-start gap-2 text-xs sm:text-sm text-stone-700 font-medium"><span className="text-cyan-700 font-bold shrink-0">✔</span><span>最上階の展望露天風呂からさえぎるもののない大迫力の富士山パノラマを満喫</span></li>
                      <li className="flex items-start gap-2 text-xs sm:text-sm text-stone-700 font-medium"><span className="text-cyan-700 font-bold shrink-0">✔</span><span>山梨の郷土料理や地元の新鮮野菜を取り入れたバラエティ豊かなディナービュッフェ</span></li>
                    </ul>
                    <p className="text-sm text-stone-600 leading-relaxed">
                      富士山の絶景を楽しむために設計されたスタイリッシュな温泉リゾートホテル。最大の自慢は最上階に位置する展望大浴場と露天風呂で、湯船に浸かりながら冬の白銀に輝く富士山の大パノラマを正面に眺められます。客室はモダンで清潔感にあふれ、バルコニー付きの部屋も用意。大月の猿橋を巡った後に足を伸ばして、富士の絶景と温泉を心ゆくまで堪能したい方に絶大な人気を誇ります。
                    </p>

                    <div className="bg-amber-50/70 border border-amber-200/60 rounded-lg p-3 text-xs text-stone-700 space-y-1">
                      <span className="font-bold text-amber-900 block">宿泊者のクチコミ・評判抜粋</span>
                      <p className="line-clamp-2 italic text-stone-600">「割高バイキングは良かったですが、部屋の広さとお風呂の狭さが気になりました。2部屋で15万は高すぎでしたね。」</p>
                    </div>
                  </div>
                </div>

                <div className="bg-stone-50 rounded-xl p-4 flex flex-wrap items-center justify-between gap-4 border border-stone-100">
                  <div className="space-y-1 text-xs text-stone-700">
                    <div className="flex items-center gap-1 font-semibold text-stone-800">
                      <MapPin className="w-3.5 h-3.5 text-rose-500" />
                      <span>山梨県 富士吉田市新倉2654</span>
                    </div>
                    <div className="text-stone-700 pl-4.5">富士急ハイランド駅より徒歩５分♪ 　富士急行線河口湖駅より徒歩１６分 　中央自動車道河口湖ICより車で１０分</div>
                    <div className="text-stone-700 pl-4.5 font-medium">目安料金: <span className="text-cyan-800 font-bold">¥10,870〜</span>（1名あたり/時期により変動）</div>
                  </div>
                  <a
                    href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F158471%2F158471.html"
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
                      山中湖畔の高台に建つクラシックリゾート！絶景温泉露天と美食フレンチ
                    </span>
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-stone-900 leading-snug">
                    <a
                      href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F75376%2F75376.html"
                      target="_blank"
                      rel="noopener noreferrer nofollow"
                      className="hover:text-cyan-800 transition-colors"
                    >
                      富士山と湖を望むリゾート　ホテル　マウント富士
                    </a>
                  </h3>
                  <div className="flex items-center gap-2 text-sm text-amber-600 font-bold">
                    <span>★ 4.35</span>
                    <span className="text-xs text-stone-700 font-medium">(1465件)</span>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
                  <div className="md:col-span-5 relative rounded-xl overflow-hidden shadow-inner aspect-[4/3]">
                    <img
                      src="https://img.travel.rakuten.co.jp/share/HOTEL/75376/75376.jpg"
                      alt="富士山と湖を望むリゾート　ホテル　マウント富士"
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                    />
                  </div>
                  <div className="md:col-span-7 space-y-4">
                    <ul className="space-y-2">
                      <li className="flex items-start gap-2 text-xs sm:text-sm text-stone-700 font-medium"><span className="text-cyan-700 font-bold shrink-0">✔</span><span>山中湖と富士山を眼下に見下ろす標高1,100mの絶景パノラマロケーション</span></li>
                      <li className="flex items-start gap-2 text-xs sm:text-sm text-stone-700 font-medium"><span className="text-cyan-700 font-bold shrink-0">✔</span><span>美肌の湯として名高い天然温泉「満天星の湯」の露天風呂から望む冬富士と星空</span></li>
                      <li className="flex items-start gap-2 text-xs sm:text-sm text-stone-700 font-medium"><span className="text-cyan-700 font-bold shrink-0">✔</span><span>山梨の旬食材と甲州ワインのマリアージュを楽しむ本格フレンチ＆和食会席</span></li>
                    </ul>
                    <p className="text-sm text-stone-600 leading-relaxed">
                      山中湖を見晴らす緑豊かな高台に建つ、伝統と格式を誇るクラシックリゾートホテル。大月ICから車で約35分、澄み切った高原の空気の中で雄大な富士山と山中湖を同時に見渡す特等席のロケーションです。露天風呂「満天星の湯」からは冬の満天の星空と富士山のシルエットが広がり、日常を忘れさせる至福の湯浴みを体験できます。熟練シェフが手がけるディナーも絶品で、大人の冬のリトリートに最適です。
                    </p>

                    <div className="bg-amber-50/70 border border-amber-200/60 rounded-lg p-3 text-xs text-stone-700 space-y-1">
                      <span className="font-bold text-amber-900 block">宿泊者のクチコミ・評判抜粋</span>
                      <p className="line-clamp-2 italic text-stone-600">「サウナ増設に感激、食事は満足だが改善点も3年ぶりの宿泊。富嶽サウナ増設知らず感激。天候は恵まれず次会に期待。妻は女性軽視と落胆。交替入浴検討しては。夕食ルーブル満足。朝食ビュッフェはアイテム減って。」</p>
                    </div>
                  </div>
                </div>

                <div className="bg-stone-50 rounded-xl p-4 flex flex-wrap items-center justify-between gap-4 border border-stone-100">
                  <div className="space-y-1 text-xs text-stone-700">
                    <div className="flex items-center gap-1 font-semibold text-stone-800">
                      <MapPin className="w-3.5 h-3.5 text-rose-500" />
                      <span>山梨県 南都留郡山中湖村山中1360-83</span>
                    </div>
                    <div className="text-stone-700 pl-4.5">富士山駅より御殿場方面の路線バスへ乗り、ホテルマウント富士入口にて下車。バス停まで送迎バスあり。（要連絡）</div>
                    <div className="text-stone-700 pl-4.5 font-medium">目安料金: <span className="text-cyan-800 font-bold">¥12,400〜</span>（1名あたり/時期により変動）</div>
                  </div>
                  <a
                    href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F75376%2F75376.html"
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
                冬の大月・都留・富士東部・上野原旅行 よくある質問（FAQ）
              </h2>
            </div>
            <div className="space-y-4">

            <div className="bg-white rounded-xl p-6 border border-stone-200/80 shadow-sm space-y-2">
              <h3 className="text-base font-bold text-stone-900 flex items-start gap-2">
                <span className="text-cyan-700 font-extrabold">Q.</span>
                <span>名勝「猿橋」の構造を最もよく見学できるポイントはどこですか？</span>
              </h3>
              <p className="text-sm text-stone-600 leading-relaxed pl-6">
                <span className="font-semibold text-stone-800">A. </span>猿橋のすぐ下流に架かる歩行者専用橋「八ツ沢発電所一号水路橋」や「新猿橋」から見下ろすアングルが最もおすすめで、四層に張り出した刎木（はねぎ）の複雑な木組みと桂川の深い谷のスケールを鮮明に観察できます。また、遊歩道で川沿いの展望デッキまで降りることも可能です。
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 border border-stone-200/80 shadow-sm space-y-2">
              <h3 className="text-base font-bold text-stone-900 flex items-start gap-2">
                <span className="text-cyan-700 font-extrabold">Q.</span>
                <span>岩殿山への登山や見学にかかる所要時間はどれくらいですか？</span>
              </h3>
              <p className="text-sm text-stone-600 leading-relaxed pl-6">
                <span className="font-semibold text-stone-800">A. </span>大月駅から岩殿山ふれあいの館（中腹の展望スポット）までは徒歩約20〜25分。ふれあいの館周辺だけでも素晴らしい富士山の展望を楽しめます。山頂（本丸跡）まで登る場合は片道約40〜50分、往復で約1時間30分程度が目安です。
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 border border-stone-200/80 shadow-sm space-y-2">
              <h3 className="text-base font-bold text-stone-900 flex items-start gap-2">
                <span className="text-cyan-700 font-extrabold">Q.</span>
                <span>大月や都留で本場のほうとうを味わえるおすすめのタイミングは？</span>
              </h3>
              <p className="text-sm text-stone-600 leading-relaxed pl-6">
                <span className="font-semibold text-stone-800">A. </span>ほうとうは注文が入ってから生の平打ち麺を野菜とともに煮込むため、提供まで15〜20分ほど時間がかかります。冬の冷え込んだお昼時や散策後の夕食に、熱々の鉄鍋で提供される出来立てをふうふうと冷ましながら食べるのが最高の醍醐味です。
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
                <Link href="/prefectures/yamanashi" className="text-cyan-800 hover:text-cyan-950 font-medium hover:underline flex items-center gap-1.5 text-sm">
                  <ChevronRight className="w-4 h-4 text-cyan-600 shrink-0" />
                  <span>山梨県のおすすめ観光名所＆温泉宿一覧</span>
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
