import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next';
import { ExternalLink, Calendar, MapPin, Sparkles, ChevronRight, CheckCircle2, Info, Compass, HelpCircle } from 'lucide-react';

export const metadata: Metadata = {
  title: '【常陸国の蔵の街・真壁の町並み重伝建と筑波山神社新春初詣】2026-2027年冬の茨城・桜川＆筑波！名物常陸秋そばと常陸牛会席名宿5選 | 旅宿クラウド',
  description: '国の重伝建・登録文化財が100棟以上連なる蔵の街「真壁の町並み」の冬風情と、関東屈指の開運霊峰「筑波山神社」新春初詣！冬に風味際立つ極上「常陸秋そば」や霜降り常陸牛、筑波山温泉郷の絶景雪見露天風呂。澄み切った関東平野の冬空の下、悠久の歴史と美肌温泉に浸る厳選名宿5選。',
  keywords: ['桜川・真壁・筑波山北麓・つくば', '茨城県', '冬旅行', '温泉旅館', '楽天トラベル', 'ふるさと納税', 'ホテルおすすめ'],
  openGraph: {
    title: '【常陸国の蔵の街・真壁の町並み重伝建と筑波山神社新春初詣】2026-2027年冬の茨城・桜川＆筑波！名物常陸秋そばと常陸牛会席名宿5選 | 旅宿クラウド',
    description: '国の重伝建・登録文化財が100棟以上連なる蔵の街「真壁の町並み」の冬風情と、関東屈指の開運霊峰「筑波山神社」新春初詣！冬に風味際立つ極上「常陸秋そば」や霜降り常陸牛、筑波山温泉郷の絶景雪見露天風呂。澄み切った関東平野の冬空の下、悠久の歴史と美肌温泉に浸る厳選名宿5選。',
    url: 'https://croud-travel.pages.dev/winter-ibaraki-sakuragawa-makabe-townscape-tsukubasan-shrine-hatsumode-hitachigyu-stay',
    siteName: '旅宿クラウド',
    locale: 'ja_JP',
    type: 'article',
    images: [
      {
        url: 'https://img.travel.rakuten.co.jp/share/HOTEL/10637/10637.jpg',
        width: 1200,
        height: 630,
        alt: '【常陸国の蔵の街・真壁の町並み重伝建と筑波山神社新春初詣】2026-2027年冬の茨城・桜川＆筑波！名物常陸秋そばと常陸牛会席名宿5選',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: '【常陸国の蔵の街・真壁の町並み重伝建と筑波山神社新春初詣】2026-2027年冬の茨城・桜川＆筑波！名物常陸秋そばと常陸牛会席名宿5選',
    description: '国の重伝建・登録文化財が100棟以上連なる蔵の街「真壁の町並み」の冬風情と、関東屈指の開運霊峰「筑波山神社」新春初詣！冬に風味際立つ極上「常陸秋そば」や霜降り常陸牛、筑波山温泉郷の絶景雪見露天風呂。澄み切った関東平野の冬空の下、悠久の歴史と美肌温泉に浸る厳選名宿5選。',
  },
};

export default function FeaturePage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'TouristDestination',
    name: '桜川・真壁・筑波山北麓・つくば',
    description: '国の重伝建・登録文化財が100棟以上連なる蔵の街「真壁の町並み」の冬風情と、関東屈指の開運霊峰「筑波山神社」新春初詣！冬に風味際立つ極上「常陸秋そば」や霜降り常陸牛、筑波山温泉郷の絶景雪見露天風呂。澄み切った関東平野の冬空の下、悠久の歴史と美肌温泉に浸る厳選名宿5選。',
    url: 'https://croud-travel.pages.dev/winter-ibaraki-sakuragawa-makabe-townscape-tsukubasan-shrine-hatsumode-hitachigyu-stay',
    touristType: ['温泉旅行', 'グルメ旅行', '歴史散策', '冬旅行'],
    containedInPlace: {
      '@type': 'AdministrativeArea',
      name: '茨城県',
    },
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'おすすめ宿泊施設',
      itemListElement: [
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'LodgingBusiness',
            name: '筑波山温泉　筑波山江戸屋',
            url: 'https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F10637%2F10637.html',
            image: 'https://img.travel.rakuten.co.jp/share/HOTEL/10637/10637.jpg',
            address: '茨城県 つくば市筑波728',
            aggregateRating: {
              '@type': 'AggregateRating',
              ratingValue: '4.15',
              reviewCount: '533'
            }
          }
        },         {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'LodgingBusiness',
            name: '筑波山京成ホテル',
            url: 'https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F128427%2F128427.html',
            image: 'https://img.travel.rakuten.co.jp/share/HOTEL/128427/128427.jpg',
            address: '茨城県 つくば市筑波1',
            aggregateRating: {
              '@type': 'AggregateRating',
              ratingValue: '4.14',
              reviewCount: '573'
            }
          }
        },         {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'LodgingBusiness',
            name: 'ホテルベストランド',
            url: 'https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F68560%2F68560.html',
            image: 'https://img.travel.rakuten.co.jp/share/HOTEL/68560/68560.jpg',
            address: '茨城県 つくば市研究学園五丁目8番地4',
            aggregateRating: {
              '@type': 'AggregateRating',
              ratingValue: '4.47',
              reviewCount: '2297'
            }
          }
        },         {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'LodgingBusiness',
            name: 'ダイワロイネットホテルつくば',
            url: 'https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F79343%2F79343.html',
            image: 'https://img.travel.rakuten.co.jp/share/HOTEL/79343/79343.jpg',
            address: '茨城県 つくば市吾妻1-5-7',
            aggregateRating: {
              '@type': 'AggregateRating',
              ratingValue: '4.26',
              reviewCount: '3583'
            }
          }
        },         {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'LodgingBusiness',
            name: 'ホテル日航つくば',
            url: 'https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F1302%2F1302.html',
            image: 'https://img.travel.rakuten.co.jp/share/HOTEL/1302/1302.jpg',
            address: '茨城県 つくば市吾妻1-1364-1',
            aggregateRating: {
              '@type': 'AggregateRating',
              ratingValue: '4.07',
              reviewCount: '1975'
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
                茨城県・桜川・真壁・筑波山北麓・つくば
              </span>
            </div>

            <h1 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-tight text-white">
              【常陸国の蔵の街・真壁の町並み重伝建と筑波山神社新春初詣】2026-2027年冬の茨城・桜川＆筑波！名物常陸秋そばと常陸牛会席名宿5選
            </h1>

            <p className="text-stone-300 text-sm sm:text-base leading-relaxed">
              国の重伝建・登録文化財が100棟以上連なる蔵の街「真壁の町並み」の冬風情と、関東屈指の開運霊峰「筑波山神社」新春初詣！冬に風味際立つ極上「常陸秋そば」や霜降り常陸牛、筑波山温泉郷の絶景雪見露天風呂。澄み切った関東平野の冬空の下、悠久の歴史と美肌温泉に浸る厳選名宿5選。
            </p>

            <div className="flex flex-wrap items-center gap-4 text-xs text-stone-700 pt-2 border-t border-stone-800">
              <span className="flex items-center gap-1.5">
                <Calendar className="w-4 h-4 text-cyan-400" />
                2026-2027年 冬シーズン最新版
              </span>
              <span className="flex items-center gap-1.5">
                <MapPin className="w-4 h-4 text-rose-400" />
                桜川・真壁・筑波山北麓・つくば（茨城県）
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
                冬の桜川・真壁・筑波山北麓・つくばを旅する魅力と情話
              </h2>
            </div>
            <div className="prose prose-stone max-w-none text-stone-700 leading-relaxed text-sm sm:text-base space-y-4">
              <p className="first-letter:text-3xl first-letter:font-bold first-letter:text-cyan-800 first-letter:mr-1 float-none">
                関東の名峰・紫峰と称される霊峰「筑波山（標高877m）」の北麓に抱かれ、豊かな田園地帯が広がる茨城県桜川市・真壁（まかべ）エリア。真壁は、中世の武将・真壁氏の城下町として開かれ、江戸時代から明治・大正期にかけて常陸秋そばや米、木綿、そして銘石「真壁石」の産地として大いに栄えた商人の町です。この町最大の特徴は、国の重要伝統的建造物群保存地区に選定された町並みに、黒漆喰の見世蔵や土蔵、風格ある出桁（だしげた）造りの町家など、100棟を超える登録有形文化財が今も現役の店舗や住居として連なっていることです。冬の張り詰めた澄んだ空気の中、白雪を薄くまとった重厚な見世蔵が軒を連ねる風景は、まるで明治の商都へタイムスリップしたかのような深い情緒を醸し出します。町の旧家では、冬の終わりから春にかけて名高い「真壁のひなまつり」の準備が進み、町人文化の温もりが通りを包み込みます。真壁から筑波山へと目を転じれば、山腹には3,000年以上の歴史を誇る大和朝廷以来の古社「筑波山神社」が厳かに鎮座。男体山と女体山の二峰を神体山として仰ぎ、縁結びや厄除け、開運の神として新春の初詣には関東中から多くの参拝客が訪れます。そして冬の茨城が誇る至高の味覚といえば、玄そばの最高峰と謳われる「常陸秋そば」。冬の寒気で熟成され香り高い新そばを、根菜たっぷりの温かい醤油出汁につけていただく郷土料理「けんちんそば」は、一口啜れば五臓六腑に染み渡る滋味深さです。さらにきめ細やかな霜降りのブランド黒毛和牛「常陸牛」の会席や、関東平野の夜景を一望する筑波山温泉郷の雪見露天風呂など、冬の茨城の歴史と自然の恵みが心を満たす贅沢な休日をご案内します。
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
                  100棟を超える登録文化財！国の重伝建「真壁の町並み」の黒漆喰見世蔵と冬情話
                </h3>
              </div>
              <p className="text-sm text-stone-600 leading-relaxed pl-11">
                江戸・明治の繁栄を今に伝える真壁の商家庭園や黒漆喰見世蔵。国の重要伝統的建造物群保存地区の静かな通りを歩けば、宮大工の精緻な木組みや石畳に息づく職人技と歴史情緒を肌で感じられます。
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 border border-stone-200/80 shadow-sm space-y-3">
              <div className="flex items-center gap-3">
                <span className="w-8 h-8 rounded-full bg-cyan-800 text-white font-bold flex items-center justify-center text-sm shrink-0">
                  2
                </span>
                <h3 className="font-bold text-stone-900 text-base sm:text-lg">
                  関東屈指の霊峰で新春開運祈願！「筑波山神社」初詣と大パノラマの絶景ロープウェイ
                </h3>
              </div>
              <p className="text-sm text-stone-600 leading-relaxed pl-11">
                万葉集にも詠まれた霊峰・筑波山の神域に鎮座する筑波山神社。冬の澄んだ大気のもと男体山・女体山から関東平野や遠く富士山、スカイツリーまで見渡すパノラマビューは新春の活力をもたらします。
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 border border-stone-200/80 shadow-sm space-y-3">
              <div className="flex items-center gap-3">
                <span className="w-8 h-8 rounded-full bg-cyan-800 text-white font-bold flex items-center justify-center text-sm shrink-0">
                  3
                </span>
                <h3 className="font-bold text-stone-900 text-base sm:text-lg">
                  日本一の芳醇な香り「常陸秋そば」のけんちん汁と極上「常陸牛」＆筑波山温泉
                </h3>
              </div>
              <p className="text-sm text-stone-600 leading-relaxed pl-11">
                全国の蕎麦通が絶賛する常陸秋そば。熱々のけんちん蕎麦や最高峰常陸牛のすき焼きに舌鼓を打ち、pHの高いアルカリ性単純温泉で美肌効果抜群の筑波山温泉の露天風呂に癒やされる至福のひととき。
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
・電車・バス：つくばエクスプレス（TX）「つくば駅」より筑波山シャトルバスで約40分、「筑波山神社入口」下車。真壁町並みへはJR水戸線「岩瀬駅」より桜川市バス（ヤマザクラGO）で約30分、「真壁城跡」または「旧真壁郵便局」下車。
・車（都心から）：常磐自動車道「谷田部IC」または「土浦北IC」より国道125号線・県道経由で真壁市街まで約50分。筑波山神社へは約40分。北関東自動車道「桜川筑西IC」からは約20分。

【見頃・気候・おすすめの服装】
・ベストシーズン：11月〜1月（筑波山神社の紅葉から初詣、新そばの最盛期、澄んだ冬空の絶景パノラマが楽しめる時期）。
・気温の目安：真壁市街地は日中7〜10℃前後。筑波山の中腹（神社周辺）や山頂は0〜5℃まで下がり、降雪や凍結が見られる日もあります。
・服装のポイント：真壁の町並み散策はフラットなスニーカーで快適ですが、筑波山神社への参拝や山頂展望台へ向かう場合は、厚手の防寒ダウンジャケット、手袋、滑りにくいトレッキングシューズや防寒ブーツが必須です。
            </div>
          </section>

          {/* Wikipedia 近隣観光名所紹介 */}
          <section className="bg-white rounded-2xl p-6 sm:p-8 border border-stone-200/80 shadow-sm space-y-6">
            <div className="flex items-center gap-2 border-b border-stone-100 pb-4">
              <Info className="w-5 h-5 text-cyan-700" />
              <h2 className="text-xl sm:text-2xl font-bold text-stone-900">
                近隣の必見名所：常陸国の蔵の街・真壁の町並み（重要伝統的建造物群保存地区・潮田家見世蔵と筑波山神社初詣）
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
              <div className="md:col-span-5 relative rounded-xl overflow-hidden shadow-inner aspect-[4/3] bg-stone-100">
                <img
                  src="https://thumb.wikimedia.org/wikipedia/commons/thumb/3/3a/Ushioda-ke_House.JPG/1280px-Ushioda-ke_House.JPG?utm_source=ja.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
                  alt="真壁町"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
              <div className="md:col-span-7 space-y-3">
                <h3 className="font-bold text-stone-900 text-lg">
                  真壁町
                </h3>
                <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                  真壁町（まかべまち）は茨城県桜川市内の町である。市町村合併の前は、真壁郡にあった。
                </p>
                <div className="pt-2 text-xs">
                  <a
                    href="https://ja.wikipedia.org/wiki/%E7%9C%9F%E5%A3%81%E7%94%BA"
                    target="_blank"
                    rel="noopener noreferrer nofollow"
                    className="inline-flex items-center gap-1 text-cyan-700 hover:text-cyan-900 underline"
                  >
                    <span>出典：Wikipedia公式『真壁町』詳細情報を見る</span>
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
                桜川・真壁・筑波山北麓・つくば 厳選の温泉＆名宿5選
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
                      創業300余年の歴史を誇る老舗割烹旅館！名物杉線香風呂と極上常陸牛会席
                    </span>
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-stone-900 leading-snug">
                    <a
                      href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F10637%2F10637.html"
                      target="_blank"
                      rel="noopener noreferrer nofollow"
                      className="hover:text-cyan-800 transition-colors"
                    >
                      筑波山温泉　筑波山江戸屋
                    </a>
                  </h3>
                  <div className="flex items-center gap-2 text-sm text-amber-600 font-bold">
                    <span>★ 4.15</span>
                    <span className="text-xs text-stone-700 font-medium">(533件)</span>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
                  <div className="md:col-span-5 relative rounded-xl overflow-hidden shadow-inner aspect-[4/3]">
                    <img
                      src="https://img.travel.rakuten.co.jp/share/HOTEL/10637/10637.jpg"
                      alt="筑波山温泉　筑波山江戸屋"
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                    />
                  </div>
                  <div className="md:col-span-7 space-y-4">
                    <ul className="space-y-2">
                      <li className="flex items-start gap-2 text-xs sm:text-sm text-stone-700 font-medium"><span className="text-cyan-700 font-bold shrink-0">✔</span><span>筑波山神社拝殿のすぐ隣に位置し、霊峰の神気に包まれる静寂のロケーション</span></li>
                      <li className="flex items-start gap-2 text-xs sm:text-sm text-stone-700 font-medium"><span className="text-cyan-700 font-bold shrink-0">✔</span><span>樹齢数百年を数える御神木や巨石を配した野趣あふれる露天風呂と名物足湯</span></li>
                      <li className="flex items-start gap-2 text-xs sm:text-sm text-stone-700 font-medium"><span className="text-cyan-700 font-bold shrink-0">✔</span><span>常陸牛のサーロインや地元の旬野菜、山菜を取り入れた本格日本料理の会席膳</span></li>
                    </ul>
                    <p className="text-sm text-stone-600 leading-relaxed">
                      筑波山神社の門前に佇み、江戸時代から参拝客を迎え続けてきた由緒ある温泉旅館。宿の敷地内には豊かな緑が広がり、創業以来のおもてなしの心が隅々まで行き届いています。露天風呂では心地よい山の風を感じながら美肌の湯を堪能でき、併設の足湯カフェで名物の地酒を味わう時間も格別。夕食は茨城が誇る常陸牛をメインに据えた贅を尽くした和会席で、真壁の歴史散策と新春初詣を彩る最高峰の宿です。
                    </p>

                    <div className="bg-amber-50/70 border border-amber-200/60 rounded-lg p-3 text-xs text-stone-700 space-y-1">
                      <span className="font-bold text-amber-900 block">宿泊者のクチコミ・評判抜粋</span>
                      <p className="line-clamp-2 italic text-stone-600">「筑波山のふもとにあり、非常によい場所だったと思います。夕食、朝食ともに、良好。年寄りが1人おりましたが、おいしくいただき、たいそう喜んでおりました。温泉は私はよかったのですが、年寄にとっては、…　2026-09-28 12:31:39投稿 つづきはこちら」</p>
                    </div>
                  </div>
                </div>

                <div className="bg-stone-50 rounded-xl p-4 flex flex-wrap items-center justify-between gap-4 border border-stone-100">
                  <div className="space-y-1 text-xs text-stone-700">
                    <div className="flex items-center gap-1 font-semibold text-stone-800">
                      <MapPin className="w-3.5 h-3.5 text-rose-500" />
                      <span>茨城県 つくば市筑波728</span>
                    </div>
                    <div className="text-stone-700 pl-4.5">【筑波山神社まで徒歩５分】常磐道・土浦北Ｉ．Ｃ～Ｒ１２５を筑波山方面に30分。ＴＸつくば駅～シャトルバス</div>
                    <div className="text-stone-700 pl-4.5 font-medium">目安料金: <span className="text-cyan-800 font-bold">¥7,150〜</span>（1名あたり/時期により変動）</div>
                  </div>
                  <a
                    href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F10637%2F10637.html"
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
                      筑波山つつじヶ丘の最高峰に位置する絶景ホテル！関東平野の夜景と富士山一望
                    </span>
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-stone-900 leading-snug">
                    <a
                      href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F128427%2F128427.html"
                      target="_blank"
                      rel="noopener noreferrer nofollow"
                      className="hover:text-cyan-800 transition-colors"
                    >
                      筑波山京成ホテル
                    </a>
                  </h3>
                  <div className="flex items-center gap-2 text-sm text-amber-600 font-bold">
                    <span>★ 4.14</span>
                    <span className="text-xs text-stone-700 font-medium">(573件)</span>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
                  <div className="md:col-span-5 relative rounded-xl overflow-hidden shadow-inner aspect-[4/3]">
                    <img
                      src="https://img.travel.rakuten.co.jp/share/HOTEL/128427/128427.jpg"
                      alt="筑波山京成ホテル"
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                    />
                  </div>
                  <div className="md:col-span-7 space-y-4">
                    <ul className="space-y-2">
                      <li className="flex items-start gap-2 text-xs sm:text-sm text-stone-700 font-medium"><span className="text-cyan-700 font-bold shrink-0">✔</span><span>標高約540mのつつじヶ丘に建ち、全客室や露天風呂から関東平野の大パノラマを一望</span></li>
                      <li className="flex items-start gap-2 text-xs sm:text-sm text-stone-700 font-medium"><span className="text-cyan-700 font-bold shrink-0">✔</span><span>夜には東京タワーやスカイツリー、都心の煌めく100万ドルの夜景が眼下に広がる</span></li>
                      <li className="flex items-start gap-2 text-xs sm:text-sm text-stone-700 font-medium"><span className="text-cyan-700 font-bold shrink-0">✔</span><span>ロープウェイ乗り場に直結し、女体山山頂へのアクセスが抜群の好立地</span></li>
                    </ul>
                    <p className="text-sm text-stone-600 leading-relaxed">
                      筑波山ロープウェイの起点・つつじヶ丘に位置し、山内で最も高い標高を誇るパノラマ温泉ホテル。展望大浴場や露天風呂からは、冬の澄んだ大気のもとでどこまでも広がる関東平野を一望でき、日中は富士山、夜には息を呑むような大夜景が広がります。真壁の町並みへも車で約30分と近く、絶景と温泉を同時に手に入れたいアクティブな旅行者に絶大な支持を得ています。
                    </p>

                    <div className="bg-amber-50/70 border border-amber-200/60 rounded-lg p-3 text-xs text-stone-700 space-y-1">
                      <span className="font-bold text-amber-900 block">宿泊者のクチコミ・評判抜粋</span>
                      <p className="line-clamp-2 italic text-stone-600">「温泉からの夜景は絶景、今回は天候が残念リピーターです。温泉からの夜景が絶景。だが、今回天候がイマイチだった。クチコミの詳細はこちらから　https://review.travel.rakute…　2026-09-20 14:34:01投稿 つづきはこちら」</p>
                    </div>
                  </div>
                </div>

                <div className="bg-stone-50 rounded-xl p-4 flex flex-wrap items-center justify-between gap-4 border border-stone-100">
                  <div className="space-y-1 text-xs text-stone-700">
                    <div className="flex items-center gap-1 font-semibold text-stone-800">
                      <MapPin className="w-3.5 h-3.5 text-rose-500" />
                      <span>茨城県 つくば市筑波1</span>
                    </div>
                    <div className="text-stone-700 pl-4.5">つくばエクスプレス線つくば駅（つくばセンターバスターミナル）から筑波山シャトルバスで５０分</div>
                    <div className="text-stone-700 pl-4.5 font-medium">目安料金: <span className="text-cyan-800 font-bold">¥5,500〜</span>（1名あたり/時期により変動）</div>
                  </div>
                  <a
                    href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F128427%2F128427.html"
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
                      研究学園駅前のスタイリッシュモダンホテル！イタリアンと洗練された客室
                    </span>
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-stone-900 leading-snug">
                    <a
                      href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F68560%2F68560.html"
                      target="_blank"
                      rel="noopener noreferrer nofollow"
                      className="hover:text-cyan-800 transition-colors"
                    >
                      ホテルベストランド
                    </a>
                  </h3>
                  <div className="flex items-center gap-2 text-sm text-amber-600 font-bold">
                    <span>★ 4.47</span>
                    <span className="text-xs text-stone-700 font-medium">(2297件)</span>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
                  <div className="md:col-span-5 relative rounded-xl overflow-hidden shadow-inner aspect-[4/3]">
                    <img
                      src="https://img.travel.rakuten.co.jp/share/HOTEL/68560/68560.jpg"
                      alt="ホテルベストランド"
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                    />
                  </div>
                  <div className="md:col-span-7 space-y-4">
                    <ul className="space-y-2">
                      <li className="flex items-start gap-2 text-xs sm:text-sm text-stone-700 font-medium"><span className="text-cyan-700 font-bold shrink-0">✔</span><span>つくばエクスプレス研究学園駅徒歩1分！筑波山や真壁へのドライブ起点に最適</span></li>
                      <li className="flex items-start gap-2 text-xs sm:text-sm text-stone-700 font-medium"><span className="text-cyan-700 font-bold shrink-0">✔</span><span>シモンズ社製高級ベッドとデザイナーズ家具を配した上質で洗練された空間設計</span></li>
                      <li className="flex items-start gap-2 text-xs sm:text-sm text-stone-700 font-medium"><span className="text-cyan-700 font-bold shrink-0">✔</span><span>本格イタリアンレストランや和食処を館内に備え、厳選ワインと茨城食材を満喫</span></li>
                    </ul>
                    <p className="text-sm text-stone-600 leading-relaxed">
                      つくば市研究学園駅前に位置するハイクラスなブティックホテル。洗練された現代的な建築デザインと上質なアメニティが揃い、大人の優雅な滞在を演出します。ホテル内には地元茨城の食材を活かした本格イタリアンレストランがあり、ワインとともに極上のディナーを堪能できます。筑波山神社や真壁の町並みへも車でスムーズにアクセスでき、快適性と機能性を両立させたスマートな冬旅に最適です。
                    </p>

                    <div className="bg-amber-50/70 border border-amber-200/60 rounded-lg p-3 text-xs text-stone-700 space-y-1">
                      <span className="font-bold text-amber-900 block">宿泊者のクチコミ・評判抜粋</span>
                      <p className="line-clamp-2 italic text-stone-600">「毎回広々とした部屋で居心地よく過ごせる何度か利用させていただいていますが、毎回部屋も広く、居心地良く滞在させて頂いています。ありがとうございました。クチコミの詳細はこちらから　https://…　2026-09-27 18:53:33投稿 つづきはこちら」</p>
                    </div>
                  </div>
                </div>

                <div className="bg-stone-50 rounded-xl p-4 flex flex-wrap items-center justify-between gap-4 border border-stone-100">
                  <div className="space-y-1 text-xs text-stone-700">
                    <div className="flex items-center gap-1 font-semibold text-stone-800">
                      <MapPin className="w-3.5 h-3.5 text-rose-500" />
                      <span>茨城県 つくば市研究学園五丁目8番地4</span>
                    </div>
                    <div className="text-stone-700 pl-4.5">TX つくばエクスプレス『研究学園駅（※つくば駅から１駅隣）』北出口徒歩１分！駐車場無料！</div>
                    <div className="text-stone-700 pl-4.5 font-medium">目安料金: <span className="text-cyan-800 font-bold">¥5,939〜</span>（1名あたり/時期により変動）</div>
                  </div>
                  <a
                    href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F68560%2F68560.html"
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
                      つくば駅直結の快適シティホテル！広々とした客室と充実のアメニティ
                    </span>
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-stone-900 leading-snug">
                    <a
                      href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F79343%2F79343.html"
                      target="_blank"
                      rel="noopener noreferrer nofollow"
                      className="hover:text-cyan-800 transition-colors"
                    >
                      ダイワロイネットホテルつくば
                    </a>
                  </h3>
                  <div className="flex items-center gap-2 text-sm text-amber-600 font-bold">
                    <span>★ 4.26</span>
                    <span className="text-xs text-stone-700 font-medium">(3583件)</span>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
                  <div className="md:col-span-5 relative rounded-xl overflow-hidden shadow-inner aspect-[4/3]">
                    <img
                      src="https://img.travel.rakuten.co.jp/share/HOTEL/79343/79343.jpg"
                      alt="ダイワロイネットホテルつくば"
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                    />
                  </div>
                  <div className="md:col-span-7 space-y-4">
                    <ul className="space-y-2">
                      <li className="flex items-start gap-2 text-xs sm:text-sm text-stone-700 font-medium"><span className="text-cyan-700 font-bold shrink-0">✔</span><span>つくば駅A5出口から徒歩わずか1分！筑波山直行シャトルバス乗り場へも至近</span></li>
                      <li className="flex items-start gap-2 text-xs sm:text-sm text-stone-700 font-medium"><span className="text-cyan-700 font-bold shrink-0">✔</span><span>全室に加湿空気清浄機と個別空調を完備し、冬の旅行中も万全の快適性をキープ</span></li>
                      <li className="flex items-start gap-2 text-xs sm:text-sm text-stone-700 font-medium"><span className="text-cyan-700 font-bold shrink-0">✔</span><span>地元茨城のコシヒカリや納豆、焼きたて料理が並ぶ人気の和洋朝食ビュッフェ</span></li>
                    </ul>
                    <p className="text-sm text-stone-600 leading-relaxed">
                      つくばエクスプレス終点・つくば駅の真上に建つ安心のハイクオリティホテル。筑波山神社へ向かうシャトルバス乗り場が目の前にあり、公共交通機関を利用した旅の拠点としてこれ以上ない利便性を誇ります。客室は落ち着いたインテリアで統一され、広めのデスクと上質なベッドが快適な休息を提供。朝食では本場茨城の納豆食べ比べや滋味豊かな和洋惣菜が楽しめ、一日の活力をしっかりと補給できます。
                    </p>

                    <div className="bg-amber-50/70 border border-amber-200/60 rounded-lg p-3 text-xs text-stone-700 space-y-1">
                      <span className="font-bold text-amber-900 block">宿泊者のクチコミ・評判抜粋</span>
                      <p className="line-clamp-2 italic text-stone-600">「前回よりも朝食バイキングが良くなった朝食バイキングが前回より良かったと思いました。クチコミの詳細はこちらから　https://review.travel.rakuten.co.jp/hotel…　2026-09-28 11:42:17投稿 つづきはこちら」</p>
                    </div>
                  </div>
                </div>

                <div className="bg-stone-50 rounded-xl p-4 flex flex-wrap items-center justify-between gap-4 border border-stone-100">
                  <div className="space-y-1 text-xs text-stone-700">
                    <div className="flex items-center gap-1 font-semibold text-stone-800">
                      <MapPin className="w-3.5 h-3.5 text-rose-500" />
                      <span>茨城県 つくば市吾妻1-5-7</span>
                    </div>
                    <div className="text-stone-700 pl-4.5">つくば駅・つくばセンター徒歩1分、筑波山や主要エリアへのアクセスも便利な好立地</div>
                    <div className="text-stone-700 pl-4.5 font-medium">目安料金: <span className="text-cyan-800 font-bold">¥4,000〜</span>（1名あたり/時期により変動）</div>
                  </div>
                  <a
                    href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F79343%2F79343.html"
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
                      オークラニッコーホテルズの格式と美食！つくばを代表するフルサービスホテル
                    </span>
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-stone-900 leading-snug">
                    <a
                      href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F1302%2F1302.html"
                      target="_blank"
                      rel="noopener noreferrer nofollow"
                      className="hover:text-cyan-800 transition-colors"
                    >
                      ホテル日航つくば
                    </a>
                  </h3>
                  <div className="flex items-center gap-2 text-sm text-amber-600 font-bold">
                    <span>★ 4.07</span>
                    <span className="text-xs text-stone-700 font-medium">(1975件)</span>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
                  <div className="md:col-span-5 relative rounded-xl overflow-hidden shadow-inner aspect-[4/3]">
                    <img
                      src="https://img.travel.rakuten.co.jp/share/HOTEL/1302/1302.jpg"
                      alt="ホテル日航つくば"
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                    />
                  </div>
                  <div className="md:col-span-7 space-y-4">
                    <ul className="space-y-2">
                      <li className="flex items-start gap-2 text-xs sm:text-sm text-stone-700 font-medium"><span className="text-cyan-700 font-bold shrink-0">✔</span><span>つくば市中心部に位置し、洗練されたホスピタリティと上質な館内施設が充実</span></li>
                      <li className="flex items-start gap-2 text-xs sm:text-sm text-stone-700 font-medium"><span className="text-cyan-700 font-bold shrink-0">✔</span><span>吹き抜けのアトリウムロビーと多彩なレストラン・バーで過ごす特別なひととき</span></li>
                      <li className="flex items-start gap-2 text-xs sm:text-sm text-stone-700 font-medium"><span className="text-cyan-700 font-bold shrink-0">✔</span><span>常陸牛や茨城県産ローズポークを贅沢に味わえるディナーコースプラン</span></li>
                    </ul>
                    <p className="text-sm text-stone-600 leading-relaxed">
                      つくばエリアを代表する国際基準のシティホテル。格式あるオークラニッコーホテルズの行き届いたサービスと洗練された空間が、旅の特別感を一層高めてくれます。客室は広々としており、冬の観光で疲れた身体をゆったりと解放。館内には本格和食や中国料理、フレンチレストランが揃い、地元の高級食材・常陸牛を熟練の技で仕上げた極上ディナーを楽しめます。真壁の歴史散策を優雅に締めくくるラグジュアリーな選択肢です。
                    </p>

                    <div className="bg-amber-50/70 border border-amber-200/60 rounded-lg p-3 text-xs text-stone-700 space-y-1">
                      <span className="font-bold text-amber-900 block">宿泊者のクチコミ・評判抜粋</span>
                      <p className="line-clamp-2 italic text-stone-600">「丁寧な接客と清掃で快適な連泊に別館への宿泊でしたが、順路の説明時も新設に対応していただきました。また、連泊をさせていただきましたが、部屋の清掃及びベッドメーキングも丁寧にしていただきました。…　2026-10-03 19:34:04投稿 つづきはこちら」</p>
                    </div>
                  </div>
                </div>

                <div className="bg-stone-50 rounded-xl p-4 flex flex-wrap items-center justify-between gap-4 border border-stone-100">
                  <div className="space-y-1 text-xs text-stone-700">
                    <div className="flex items-center gap-1 font-semibold text-stone-800">
                      <MapPin className="w-3.5 h-3.5 text-rose-500" />
                      <span>茨城県 つくば市吾妻1-1364-1</span>
                    </div>
                    <div className="text-stone-700 pl-4.5">つくばエクスプレス「つくば駅」（秋葉原より快速で45分）下車、A3出口より徒歩2分</div>
                    <div className="text-stone-700 pl-4.5 font-medium">目安料金: <span className="text-cyan-800 font-bold">¥4,000〜</span>（1名あたり/時期により変動）</div>
                  </div>
                  <a
                    href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F1302%2F1302.html"
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
                冬の桜川・真壁・筑波山北麓・つくば旅行 よくある質問（FAQ）
              </h2>
            </div>
            <div className="space-y-4">

            <div className="bg-white rounded-xl p-6 border border-stone-200/80 shadow-sm space-y-2">
              <h3 className="text-base font-bold text-stone-900 flex items-start gap-2">
                <span className="text-cyan-700 font-extrabold">Q.</span>
                <span>真壁の町並み散策の所要時間と見どころは？</span>
              </h3>
              <p className="text-sm text-stone-600 leading-relaxed pl-6">
                <span className="font-semibold text-stone-800">A. </span>町並み散策の所要時間は約1時間30分〜2時間です。潮田家住宅（見世蔵）や伊勢屋旅館、旧真壁郵便局など、国の登録有形文化財が集中する下宿・上宿通りを中心に、蔵のカフェや伝統の酒蔵「西岡本店」に立ち寄るルートがおすすめです。
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 border border-stone-200/80 shadow-sm space-y-2">
              <h3 className="text-base font-bold text-stone-900 flex items-start gap-2">
                <span className="text-cyan-700 font-extrabold">Q.</span>
                <span>「常陸秋そば」の美味しさの秘密とおすすめの食べ方は？</span>
              </h3>
              <p className="text-sm text-stone-600 leading-relaxed pl-6">
                <span className="font-semibold text-stone-800">A. </span>茨城県北西部・県西部の冷涼な気候と昼夜の寒暖差が育む常陸秋そばは、粒ぞろいが良く芳醇な香りと甘みが特徴です。冬は茨城の郷土料理である根菜と豆腐、里芋を炒め煮にした具だくさんの温かい「けんちん蕎麦」で味わうのが最も贅沢です。
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 border border-stone-200/80 shadow-sm space-y-2">
              <h3 className="text-base font-bold text-stone-900 flex items-start gap-2">
                <span className="text-cyan-700 font-extrabold">Q.</span>
                <span>筑波山温泉の特徴と効能は何ですか？</span>
              </h3>
              <p className="text-sm text-stone-600 leading-relaxed pl-6">
                <span className="font-semibold text-stone-800">A. </span>筑波山温泉はアルカリ性単純温泉で、肌の角質をやさしく落としてツルツルにする「美肌の湯」として親しまれています。神経痛や冷え性の改善にも効果があり、冬の山歩きや参拝後の湯治に最適です。
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
                <Link href="/prefectures/ibaraki" className="text-cyan-800 hover:text-cyan-950 font-medium hover:underline flex items-center gap-1.5 text-sm">
                  <ChevronRight className="w-4 h-4 text-cyan-600 shrink-0" />
                  <span>茨城県のおすすめ観光名所＆温泉宿一覧</span>
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
