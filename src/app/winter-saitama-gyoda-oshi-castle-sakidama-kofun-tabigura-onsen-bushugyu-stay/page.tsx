import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next';
import { ExternalLink, Calendar, MapPin, Sparkles, ChevronRight, CheckCircle2, Info, Compass, HelpCircle } from 'lucide-react';

export const metadata: Metadata = {
  title: '【のぼうの城・行田忍城雪景色と足袋蔵の街重伝建】2026-2027年冬の埼玉・行田＆熊谷！行田天然温泉と武州牛・加須手打ちうどん名宿5選 | 旅宿クラウド',
  description: '映画『のぼうの城』の舞台・浮き城「忍城」御三階櫓の冬晴れ雪景色と、日本遺産「足袋蔵のまち」レトロ散策！古代のロマン漂うさきたま古墳群や源泉かけ流し行田天然温泉。冬の身体を芯から温める加須手打ちうどん・行田ゼリーフライと極上武州牛を堪能する冬の北埼玉厳選名宿5選。',
  keywords: ['行田・熊谷・加須・羽生', '埼玉県', '冬旅行', '温泉旅館', '楽天トラベル', 'ふるさと納税', 'ホテルおすすめ'],
  openGraph: {
    title: '【のぼうの城・行田忍城雪景色と足袋蔵の街重伝建】2026-2027年冬の埼玉・行田＆熊谷！行田天然温泉と武州牛・加須手打ちうどん名宿5選 | 旅宿クラウド',
    description: '映画『のぼうの城』の舞台・浮き城「忍城」御三階櫓の冬晴れ雪景色と、日本遺産「足袋蔵のまち」レトロ散策！古代のロマン漂うさきたま古墳群や源泉かけ流し行田天然温泉。冬の身体を芯から温める加須手打ちうどん・行田ゼリーフライと極上武州牛を堪能する冬の北埼玉厳選名宿5選。',
    url: 'https://croud-travel.pages.dev/winter-saitama-gyoda-oshi-castle-sakidama-kofun-tabigura-onsen-bushugyu-stay',
    siteName: '旅宿クラウド',
    locale: 'ja_JP',
    type: 'article',
    images: [
      {
        url: 'https://img.travel.rakuten.co.jp/share/HOTEL/18683/18683.jpg',
        width: 1200,
        height: 630,
        alt: '【のぼうの城・行田忍城雪景色と足袋蔵の街重伝建】2026-2027年冬の埼玉・行田＆熊谷！行田天然温泉と武州牛・加須手打ちうどん名宿5選',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: '【のぼうの城・行田忍城雪景色と足袋蔵の街重伝建】2026-2027年冬の埼玉・行田＆熊谷！行田天然温泉と武州牛・加須手打ちうどん名宿5選',
    description: '映画『のぼうの城』の舞台・浮き城「忍城」御三階櫓の冬晴れ雪景色と、日本遺産「足袋蔵のまち」レトロ散策！古代のロマン漂うさきたま古墳群や源泉かけ流し行田天然温泉。冬の身体を芯から温める加須手打ちうどん・行田ゼリーフライと極上武州牛を堪能する冬の北埼玉厳選名宿5選。',
  },
};

export default function FeaturePage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'TouristDestination',
    name: '行田・熊谷・加須・羽生',
    description: '映画『のぼうの城』の舞台・浮き城「忍城」御三階櫓の冬晴れ雪景色と、日本遺産「足袋蔵のまち」レトロ散策！古代のロマン漂うさきたま古墳群や源泉かけ流し行田天然温泉。冬の身体を芯から温める加須手打ちうどん・行田ゼリーフライと極上武州牛を堪能する冬の北埼玉厳選名宿5選。',
    url: 'https://croud-travel.pages.dev/winter-saitama-gyoda-oshi-castle-sakidama-kofun-tabigura-onsen-bushugyu-stay',
    touristType: ['温泉旅行', 'グルメ旅行', '歴史散策', '冬旅行'],
    containedInPlace: {
      '@type': 'AdministrativeArea',
      name: '埼玉県',
    },
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'おすすめ宿泊施設',
      itemListElement: [
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'LodgingBusiness',
            name: '羽生天然温泉ルートイングランティア羽生ＳＰＡ　ＲＥＳＯＲＴ',
            url: 'https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F18683%2F18683.html',
            image: 'https://img.travel.rakuten.co.jp/share/HOTEL/18683/18683.jpg',
            address: '埼玉県 羽生市西3-19-3',
            aggregateRating: {
              '@type': 'AggregateRating',
              ratingValue: '4.26',
              reviewCount: '1427'
            }
          }
        },         {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'LodgingBusiness',
            name: 'キングアンバサダーホテル熊谷',
            url: 'https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F72808%2F72808.html',
            image: 'https://img.travel.rakuten.co.jp/share/HOTEL/72808/72808.jpg',
            address: '埼玉県 熊谷市筑波1-99-1',
            aggregateRating: {
              '@type': 'AggregateRating',
              ratingValue: '4.12',
              reviewCount: '3145'
            }
          }
        },         {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'LodgingBusiness',
            name: 'ホテルルートイン熊谷',
            url: 'https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F161022%2F161022.html',
            image: 'https://img.travel.rakuten.co.jp/share/HOTEL/161022/161022.jpg',
            address: '埼玉県 熊谷市石原1193番地1',
            aggregateRating: {
              '@type': 'AggregateRating',
              ratingValue: '4.27',
              reviewCount: '385'
            }
          }
        },         {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'LodgingBusiness',
            name: 'サウナ付鉱泉浴大浴場付『ホテルグランワイズ熊谷駅前プレミア』',
            url: 'https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F181831%2F181831.html',
            image: 'https://img.travel.rakuten.co.jp/share/HOTEL/181831/181831.jpg',
            address: '埼玉県 熊谷市桜木町1-77',
            aggregateRating: {
              '@type': 'AggregateRating',
              ratingValue: '4.17',
              reviewCount: '1227'
            }
          }
        },         {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'LodgingBusiness',
            name: 'スマイルホテル熊谷',
            url: 'https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F1486%2F1486.html',
            image: 'https://img.travel.rakuten.co.jp/share/HOTEL/1486/1486.jpg',
            address: '埼玉県 熊谷市筑波1-138',
            aggregateRating: {
              '@type': 'AggregateRating',
              ratingValue: '3.93',
              reviewCount: '2015'
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
                埼玉県・行田・熊谷・加須・羽生
              </span>
            </div>

            <h1 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-tight text-white">
              【のぼうの城・行田忍城雪景色と足袋蔵の街重伝建】2026-2027年冬の埼玉・行田＆熊谷！行田天然温泉と武州牛・加須手打ちうどん名宿5選
            </h1>

            <p className="text-stone-300 text-sm sm:text-base leading-relaxed">
              映画『のぼうの城』の舞台・浮き城「忍城」御三階櫓の冬晴れ雪景色と、日本遺産「足袋蔵のまち」レトロ散策！古代のロマン漂うさきたま古墳群や源泉かけ流し行田天然温泉。冬の身体を芯から温める加須手打ちうどん・行田ゼリーフライと極上武州牛を堪能する冬の北埼玉厳選名宿5選。
            </p>

            <div className="flex flex-wrap items-center gap-4 text-xs text-stone-700 pt-2 border-t border-stone-800">
              <span className="flex items-center gap-1.5">
                <Calendar className="w-4 h-4 text-cyan-400" />
                2026-2027年 冬シーズン最新版
              </span>
              <span className="flex items-center gap-1.5">
                <MapPin className="w-4 h-4 text-rose-400" />
                行田・熊谷・加須・羽生（埼玉県）
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
                冬の行田・熊谷・加須・羽生を旅する魅力と情話
              </h2>
            </div>
            <div className="prose prose-stone max-w-none text-stone-700 leading-relaxed text-sm sm:text-base space-y-4">
              <p className="first-letter:text-3xl first-letter:font-bold first-letter:text-cyan-800 first-letter:mr-1 float-none">
                冬の関東平野に広がる抜けるような青空と、北風が遠く日光連山や秩父の山並みをくっきりと浮かび上がらせる埼玉県北部・行田＆熊谷エリア。行田市は、戦国時代に成田氏が築き、豊臣秀吉の小田原征伐において石田三成による決死の水攻めにも屈しなかった不落の名城『忍城（おしじょう）』の城下町です。小説や映画『のぼうの城』の舞台として全国に名を馳せた忍城は、周囲を沼地と自然堤防に守られたまさに「浮き城」。冬の澄み渡る寒空のもと、再建された白壁の御三階櫓とお堀の水面に映る雪化粧の木々は、戦国武将たちの誇りと武勇を今に伝える気品に満ちています。さらに行田は、日本屈指の生産量を誇った「足袋蔵のまち」として文化庁の日本遺産第一号に認定された歴史都市。重厚な木造や土蔵造り、大谷石造りの足袋蔵がレトロな町並みを作り出し、蔵を改装した古民家カフェや工房を巡る冬の路地散策は格別の風情があります。町の東部には、日本最大の円墳「丸墓山古墳」をはじめ大型古墳が群生する特別史跡「さきたま古墳群」が広がり、古代東国のロマンを冬枯れの芝生の丘の上から静かに体感できます。冬の散策で冷えた身体を温めてくれるのは、行田名物の熱々ご当地グルメ「ゼリーフライ（おからとジャガイモの素揚げコロッケ）」や「行田フライ」、そして隣接する加須市の伝統手打ち「加須うどん」。さらに地下深くから湧き出る琥珀色の行田天然温泉に浸かり、武州の大地が育んだ極上の黒毛和牛「武州牛」のすき焼きに舌鼓を打つ、心温まる冬の北埼玉紀行をお届けします。
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
                  水攻めに耐えた不落の名城！「忍城」御三階櫓の冬晴れ雪景色と戦国ロマン
                </h3>
              </div>
              <p className="text-sm text-stone-600 leading-relaxed pl-11">
                石田三成の水攻めを跳ね返した浮き城・忍城。冬の澄んだ青空に凛と聳える御三階櫓と東門の木橋、堀端の風情は戦国史好き必見の美しさ。併設の行田市郷土博物館で歴史探訪も楽しめます。
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 border border-stone-200/80 shadow-sm space-y-3">
              <div className="flex items-center gap-3">
                <span className="w-8 h-8 rounded-full bg-cyan-800 text-white font-bold flex items-center justify-center text-sm shrink-0">
                  2
                </span>
                <h3 className="font-bold text-stone-900 text-base sm:text-lg">
                  日本遺産第1号！レトロな「足袋蔵のまち」散策と古代の息吹「さきたま古墳群」
                </h3>
              </div>
              <p className="text-sm text-stone-600 leading-relaxed pl-11">
                江戸から昭和にかけて日本の足袋の約8割を生産した行田の足袋蔵群。国宝の金錯銘鉄剣が出土した稲荷山古墳など9基の大型古墳が並ぶさきたま古墳群の冬景色は圧巻のスケールです。
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 border border-stone-200/80 shadow-sm space-y-3">
              <div className="flex items-center gap-3">
                <span className="w-8 h-8 rounded-full bg-cyan-800 text-white font-bold flex items-center justify-center text-sm shrink-0">
                  3
                </span>
                <h3 className="font-bold text-stone-900 text-base sm:text-lg">
                  湯量豊富な「行田天然温泉」のぬくもりと名物「加須うどん」＆極上「武州牛」
                </h3>
              </div>
              <p className="text-sm text-stone-600 leading-relaxed pl-11">
                地下約1,200mから湧出する源泉かけ流しの天然温泉。冬の寒風で冷えた身体を芯から温めた後は、強いコシが自慢の加須手打ちうどんや、霜降りの甘みが広がる武州牛会席を満喫できます。
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
・電車：JR高崎線「行田駅」または「熊谷駅」下車。行田駅東口より市内循環バスで約15分、「忍城バスターミナル」下車すぐ。秩父鉄道「行田市駅」からは徒歩約15分。
・車：東北自動車道「加須IC」または「羽生IC」より国道125号線経由で約25〜30分。関越自動車道「東松山IC」からは約35分。
・都心から：東京駅・上野駅からJR高崎線（上野東京ライン等）で熊谷駅・行田駅まで乗り換えなし約1時間。

【見頃・気候・おすすめの服装】
・ベストシーズン：11月〜1月（関東特有のからっ風が吹き抜けるものの晴天率が非常に高く、冬晴れの澄んだ青空と名城の対比が美しい季節）。
・気温の目安：日中は8〜12℃前後ですが、赤城おろし（北西の季節風）が強く吹く日は体感温度が氷点下近くまで下がります。
・服装のポイント：風を通しにくい防風コートやダウンジャケット、手袋、マフラーが必須です。さきたま古墳群や忍城の敷地は平坦ですが歩く距離が長いため、歩き慣れた防寒仕様の靴が適しています。
            </div>
          </section>

          {/* Wikipedia 近隣観光名所紹介 */}
          <section className="bg-white rounded-2xl p-6 sm:p-8 border border-stone-200/80 shadow-sm space-y-6">
            <div className="flex items-center gap-2 border-b border-stone-100 pb-4">
              <Info className="w-5 h-5 text-cyan-700" />
              <h2 className="text-xl sm:text-2xl font-bold text-stone-900">
                近隣の必見名所：武蔵国屈指の名城・忍城（のぼうの城の舞台・御三階櫓の雪景色と足袋蔵の街並み）
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
              <div className="md:col-span-5 relative rounded-xl overflow-hidden shadow-inner aspect-[4/3] bg-stone-100">
                <img
                  src="https://thumb.wikimedia.org/wikipedia/commons/thumb/4/45/Oshi-jo.JPG/1280px-Oshi-jo.JPG?utm_source=ja.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
                  alt="忍城"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
              <div className="md:col-span-7 space-y-3">
                <h3 className="font-bold text-stone-900 text-lg">
                  忍城
                </h3>
                <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                  忍城（おしじょう）は、埼玉県行田市（武蔵国埼玉郡忍）にあった日本の城。埼玉県指定旧跡。 室町時代中期の文明年間に成田氏によって築城されたと伝えられており、北を利根川、南を荒川に挟まれた扇状地に点在する広大な沼地と自然堤防を生かした構造となっている。数度の城攻めを受けて、一度も落城しなかった要害堅固な城として知られる。戦国時代には関東七名城の一つとされ、1590年（天正18年）に豊臣秀吉の小田原征伐に伴い発生した攻城戦豊臣に際し、豊臣方の水攻めに耐え抜いた逸話から浮き城または亀城と称された。 江戸時代に入ると忍藩の藩庁あるいは徳川氏の譜…
                </p>
                <div className="pt-2 text-xs">
                  <a
                    href="https://ja.wikipedia.org/wiki/%E5%BF%8D%E5%9F%8E"
                    target="_blank"
                    rel="noopener noreferrer nofollow"
                    className="inline-flex items-center gap-1 text-cyan-700 hover:text-cyan-900 underline"
                  >
                    <span>出典：Wikipedia公式『忍城』詳細情報を見る</span>
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
                行田・熊谷・加須・羽生 厳選の温泉＆名宿5選
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
                      源泉かけ流し天然温泉SPAを完備！羽生IC至近の極上リラクゼーションホテル
                    </span>
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-stone-900 leading-snug">
                    <a
                      href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F18683%2F18683.html"
                      target="_blank"
                      rel="noopener noreferrer nofollow"
                      className="hover:text-cyan-800 transition-colors"
                    >
                      羽生天然温泉ルートイングランティア羽生ＳＰＡ　ＲＥＳＯＲＴ
                    </a>
                  </h3>
                  <div className="flex items-center gap-2 text-sm text-amber-600 font-bold">
                    <span>★ 4.26</span>
                    <span className="text-xs text-stone-700 font-medium">(1427件)</span>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
                  <div className="md:col-span-5 relative rounded-xl overflow-hidden shadow-inner aspect-[4/3]">
                    <img
                      src="https://img.travel.rakuten.co.jp/share/HOTEL/18683/18683.jpg"
                      alt="羽生天然温泉ルートイングランティア羽生ＳＰＡ　ＲＥＳＯＲＴ"
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                    />
                  </div>
                  <div className="md:col-span-7 space-y-4">
                    <ul className="space-y-2">
                      <li className="flex items-start gap-2 text-xs sm:text-sm text-stone-700 font-medium"><span className="text-cyan-700 font-bold shrink-0">✔</span><span>地下から湧く本格天然温泉「羽生温泉」の大浴場・露天風呂・サウナ施設を完備</span></li>
                      <li className="flex items-start gap-2 text-xs sm:text-sm text-stone-700 font-medium"><span className="text-cyan-700 font-bold shrink-0">✔</span><span>行田の忍城やさきたま古墳群、羽生水郷公園への車でのアクセスが極めてスムーズ</span></li>
                      <li className="flex items-start gap-2 text-xs sm:text-sm text-stone-700 font-medium"><span className="text-cyan-700 font-bold shrink-0">✔</span><span>ビジネスからファミリーまでゆったり寛げる広々とした客室と充実の和洋朝食バイキング</span></li>
                    </ul>
                    <p className="text-sm text-stone-600 leading-relaxed">
                      羽生ICから車ですぐ、行田市への観光拠点として抜群のロケーションを誇るルートイングループの温泉リゾートホテル。最大の魅力は館内に広がる本格的な日帰り温泉SPA施設。茶褐色の良質な天然温泉が源泉かけ流しで注がれ、露天風呂や多彩な内湯、サウナで冬の旅の疲れを心ゆくまで癒やせます。客室も清潔で居心地がよく、加須の手打ちうどんや行田の歴史探訪を組み合わせた冬旅に最適です。
                    </p>

                    <div className="bg-amber-50/70 border border-amber-200/60 rounded-lg p-3 text-xs text-stone-700 space-y-1">
                      <span className="font-bold text-amber-900 block">宿泊者のクチコミ・評判抜粋</span>
                      <p className="line-clamp-2 italic text-stone-600">「天然温泉と生演奏に癒やされる特別な空間ルートインなんですが、他のルートインとは全然違います。もろ、健康ランド(笑)しかもちゃんと天然温泉の浴槽があります。湯船の縁に析出物がついていて、…　2026-09-30 19:48:16投稿 つづきはこちら」</p>
                    </div>
                  </div>
                </div>

                <div className="bg-stone-50 rounded-xl p-4 flex flex-wrap items-center justify-between gap-4 border border-stone-100">
                  <div className="space-y-1 text-xs text-stone-700">
                    <div className="flex items-center gap-1 font-semibold text-stone-800">
                      <MapPin className="w-3.5 h-3.5 text-rose-500" />
                      <span>埼玉県 羽生市西3-19-3</span>
                    </div>
                    <div className="text-stone-700 pl-4.5">羽生駅西口より徒歩3分/加須より電車で10分/久喜、行田より電車で20分/熊谷より電車で30分/大宮より電車で45分/</div>
                    <div className="text-stone-700 pl-4.5 font-medium">目安料金: <span className="text-cyan-800 font-bold">¥6,950〜</span>（1名あたり/時期により変動）</div>
                  </div>
                  <a
                    href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F18683%2F18683.html"
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
                      熊谷駅直結のハイクラスシティホテル！開放感あふれる客室と優雅なレストラン
                    </span>
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-stone-900 leading-snug">
                    <a
                      href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F72808%2F72808.html"
                      target="_blank"
                      rel="noopener noreferrer nofollow"
                      className="hover:text-cyan-800 transition-colors"
                    >
                      キングアンバサダーホテル熊谷
                    </a>
                  </h3>
                  <div className="flex items-center gap-2 text-sm text-amber-600 font-bold">
                    <span>★ 4.12</span>
                    <span className="text-xs text-stone-700 font-medium">(3145件)</span>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
                  <div className="md:col-span-5 relative rounded-xl overflow-hidden shadow-inner aspect-[4/3]">
                    <img
                      src="https://img.travel.rakuten.co.jp/share/HOTEL/72808/72808.jpg"
                      alt="キングアンバサダーホテル熊谷"
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                    />
                  </div>
                  <div className="md:col-span-7 space-y-4">
                    <ul className="space-y-2">
                      <li className="flex items-start gap-2 text-xs sm:text-sm text-stone-700 font-medium"><span className="text-cyan-700 font-bold shrink-0">✔</span><span>JR熊谷駅から徒歩至近！新幹線や高崎線を利用した都心からのアクセスも抜群</span></li>
                      <li className="flex items-start gap-2 text-xs sm:text-sm text-stone-700 font-medium"><span className="text-cyan-700 font-bold shrink-0">✔</span><span>ゆとりある広さを誇る洗練された客室と高級ベッドで快適な睡眠をサポート</span></li>
                      <li className="flex items-start gap-2 text-xs sm:text-sm text-stone-700 font-medium"><span className="text-cyan-700 font-bold shrink-0">✔</span><span>地元埼玉の新鮮食材や武州牛を取り入れたシェフ自慢の和洋ディナーコース</span></li>
                    </ul>
                    <p className="text-sm text-stone-600 leading-relaxed">
                      新幹線停車駅・熊谷駅のすぐそばに位置し、北埼玉観光の拠点として高いステータスを誇るランドマークホテル。モダンで落ち着きのある館内には、ゆったりとした広さの客室が揃い、冬の寒さを忘れさせる上質な空間が広がります。館内レストランでは武州牛をはじめとする埼玉の旬の恵みを贅沢に活かした料理を提供。忍城へも車や秩父鉄道でスムーズにアクセスでき、ワンランク上の冬旅を演出します。
                    </p>

                    <div className="bg-amber-50/70 border border-amber-200/60 rounded-lg p-3 text-xs text-stone-700 space-y-1">
                      <span className="font-bold text-amber-900 block">宿泊者のクチコミ・評判抜粋</span>
                      <p className="line-clamp-2 italic text-stone-600">「広い部屋と美味しい朝食ブッフェに満足部屋も広くリーズナブルな宿泊代とブッフェ形式の朝ごはんが美味しいです。クチコミの詳細はこちらから　https://review.travel.rakuten…　2026-09-28 11:46:41投稿 つづきはこちら」</p>
                    </div>
                  </div>
                </div>

                <div className="bg-stone-50 rounded-xl p-4 flex flex-wrap items-center justify-between gap-4 border border-stone-100">
                  <div className="space-y-1 text-xs text-stone-700">
                    <div className="flex items-center gap-1 font-semibold text-stone-800">
                      <MapPin className="w-3.5 h-3.5 text-rose-500" />
                      <span>埼玉県 熊谷市筑波1-99-1</span>
                    </div>
                    <div className="text-stone-700 pl-4.5">ＪＲ熊谷駅 北口より徒歩5分・国道１７号線沿い「筑波交差点」横</div>
                    <div className="text-stone-700 pl-4.5 font-medium">目安料金: <span className="text-cyan-800 font-bold">¥4,300〜</span>（1名あたり/時期により変動）</div>
                  </div>
                  <a
                    href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F72808%2F72808.html"
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
                      熊谷バイパス沿いの好立地！旅人のオアシスとなる快適大浴場と充実サービス
                    </span>
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-stone-900 leading-snug">
                    <a
                      href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F161022%2F161022.html"
                      target="_blank"
                      rel="noopener noreferrer nofollow"
                      className="hover:text-cyan-800 transition-colors"
                    >
                      ホテルルートイン熊谷
                    </a>
                  </h3>
                  <div className="flex items-center gap-2 text-sm text-amber-600 font-bold">
                    <span>★ 4.27</span>
                    <span className="text-xs text-stone-700 font-medium">(385件)</span>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
                  <div className="md:col-span-5 relative rounded-xl overflow-hidden shadow-inner aspect-[4/3]">
                    <img
                      src="https://img.travel.rakuten.co.jp/share/HOTEL/161022/161022.jpg"
                      alt="ホテルルートイン熊谷"
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                    />
                  </div>
                  <div className="md:col-span-7 space-y-4">
                    <ul className="space-y-2">
                      <li className="flex items-start gap-2 text-xs sm:text-sm text-stone-700 font-medium"><span className="text-cyan-700 font-bold shrink-0">✔</span><span>無料駐車場を完備し、行田の忍城やさきたま古墳群へのマイカードライブに最適</span></li>
                      <li className="flex items-start gap-2 text-xs sm:text-sm text-stone-700 font-medium"><span className="text-cyan-700 font-bold shrink-0">✔</span><span>足を伸ばして温まれるラジウム人工温泉大浴場「旅人の湯」でリフレッシュ</span></li>
                      <li className="flex items-start gap-2 text-xs sm:text-sm text-stone-700 font-medium"><span className="text-cyan-700 font-bold shrink-0">✔</span><span>焼き立てパンや温かいお惣菜が並ぶ大好評の無料和洋朝食バイキング</span></li>
                    </ul>
                    <p className="text-sm text-stone-600 leading-relaxed">
                      熊谷市の主要幹線道路沿いに位置し、行田エリアや秩父方面へのドライブ旅行に最適なビジネス・観光ホテル。無料の平面駐車場を完備しており、車での旅に極めて便利です。館内には清潔な人工温泉大浴場が備わっており、冬の忍城散策や古墳巡りで冷えた身体をのんびり温められます。毎朝提供されるバラエティ豊かな朝食バイキングも好評で、アクティブな旅行者に強く支持されています。
                    </p>

                    <div className="bg-amber-50/70 border border-amber-200/60 rounded-lg p-3 text-xs text-stone-700 space-y-1">
                      <span className="font-bold text-amber-900 block">宿泊者のクチコミ・評判抜粋</span>
                      <p className="line-clamp-2 italic text-stone-600">「1000円で飲み放題が最高でした。クチコミの詳細はこちらから　https://review.travel.rakuten.co.jp/hotel/voice/161022?reviewId=331…　2026-09-24 19:50:59投稿 つづきはこちら」</p>
                    </div>
                  </div>
                </div>

                <div className="bg-stone-50 rounded-xl p-4 flex flex-wrap items-center justify-between gap-4 border border-stone-100">
                  <div className="space-y-1 text-xs text-stone-700">
                    <div className="flex items-center gap-1 font-semibold text-stone-800">
                      <MapPin className="w-3.5 h-3.5 text-rose-500" />
                      <span>埼玉県 熊谷市石原1193番地1</span>
                    </div>
                    <div className="text-stone-700 pl-4.5">★花園IC・東松山ICより車で約22分★ＪＲ熊谷駅より3.9km★JR高崎線：籠原駅より5.2km</div>
                    <div className="text-stone-700 pl-4.5 font-medium">目安料金: <span className="text-cyan-800 font-bold">¥5,350〜</span>（1名あたり/時期により変動）</div>
                  </div>
                  <a
                    href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F161022%2F161022.html"
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
                      熊谷駅前プレミアム！サウナ付き鉱泉浴大浴場で極上のととのい体験
                    </span>
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-stone-900 leading-snug">
                    <a
                      href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F181831%2F181831.html"
                      target="_blank"
                      rel="noopener noreferrer nofollow"
                      className="hover:text-cyan-800 transition-colors"
                    >
                      サウナ付鉱泉浴大浴場付『ホテルグランワイズ熊谷駅前プレミア』
                    </a>
                  </h3>
                  <div className="flex items-center gap-2 text-sm text-amber-600 font-bold">
                    <span>★ 4.17</span>
                    <span className="text-xs text-stone-700 font-medium">(1227件)</span>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
                  <div className="md:col-span-5 relative rounded-xl overflow-hidden shadow-inner aspect-[4/3]">
                    <img
                      src="https://img.travel.rakuten.co.jp/share/HOTEL/181831/181831.jpg"
                      alt="サウナ付鉱泉浴大浴場付『ホテルグランワイズ熊谷駅前プレミア』"
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                    />
                  </div>
                  <div className="md:col-span-7 space-y-4">
                    <ul className="space-y-2">
                      <li className="flex items-start gap-2 text-xs sm:text-sm text-stone-700 font-medium"><span className="text-cyan-700 font-bold shrink-0">✔</span><span>熊谷駅徒歩圏内！駅前の飲食店街や商業施設へのアクセスが抜群の好立地</span></li>
                      <li className="flex items-start gap-2 text-xs sm:text-sm text-stone-700 font-medium"><span className="text-cyan-700 font-bold shrink-0">✔</span><span>本格サウナと鉱泉浴大浴場を完備し、出張や観光の疲れを最高にととのえる</span></li>
                      <li className="flex items-start gap-2 text-xs sm:text-sm text-stone-700 font-medium"><span className="text-cyan-700 font-bold shrink-0">✔</span><span>コストパフォーマンス抜群の宿泊料金と快適なベッド設備で快眠を約束</span></li>
                    </ul>
                    <p className="text-sm text-stone-600 leading-relaxed">
                      熊谷駅前の至近に位置し、最新の温浴設備を備えた快適ホテル。男女別の大浴場には鉱泉浴と高温サウナが完備されており、冬の冷たい北風を受けた身体を温め、極上のととのい時間を過ごせます。シンプルながら機能的な客室設計で居心地がよく、周辺には熊谷や行田の名物料理を提供する飲食店が多数点在。リーズナブルに北埼玉の冬の味覚と歴史散策を楽しみたい旅人にぴったりです。
                    </p>

                    <div className="bg-amber-50/70 border border-amber-200/60 rounded-lg p-3 text-xs text-stone-700 space-y-1">
                      <span className="font-bold text-amber-900 block">宿泊者のクチコミ・評判抜粋</span>
                      <p className="line-clamp-2 italic text-stone-600">「女性用サウナの利用時間が短く残念サウナ付きお風呂を楽しみに行ったのですが、女性が利用できる時間が非常に限られていて30分くらいしか入れず残念でしたクチコミの詳細はこちらから　https://r…　2026-10-03 16:05:38投稿 つづきはこちら」</p>
                    </div>
                  </div>
                </div>

                <div className="bg-stone-50 rounded-xl p-4 flex flex-wrap items-center justify-between gap-4 border border-stone-100">
                  <div className="space-y-1 text-xs text-stone-700">
                    <div className="flex items-center gap-1 font-semibold text-stone-800">
                      <MapPin className="w-3.5 h-3.5 text-rose-500" />
                      <span>埼玉県 熊谷市桜木町1-77</span>
                    </div>
                    <div className="text-stone-700 pl-4.5">熊谷駅南口より徒歩2分。ロータリーからトヨタレンタカー先突き当たりを左へ　サクラギ薬局さん手前</div>
                    <div className="text-stone-700 pl-4.5 font-medium">目安料金: <span className="text-cyan-800 font-bold">¥2,480〜</span>（1名あたり/時期により変動）</div>
                  </div>
                  <a
                    href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F181831%2F181831.html"
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
                      熊谷駅北口から徒歩すぐ！アットホームな笑顔と清潔感あふれる快適空間
                    </span>
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-stone-900 leading-snug">
                    <a
                      href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F1486%2F1486.html"
                      target="_blank"
                      rel="noopener noreferrer nofollow"
                      className="hover:text-cyan-800 transition-colors"
                    >
                      スマイルホテル熊谷
                    </a>
                  </h3>
                  <div className="flex items-center gap-2 text-sm text-amber-600 font-bold">
                    <span>★ 3.93</span>
                    <span className="text-xs text-stone-700 font-medium">(2015件)</span>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
                  <div className="md:col-span-5 relative rounded-xl overflow-hidden shadow-inner aspect-[4/3]">
                    <img
                      src="https://img.travel.rakuten.co.jp/share/HOTEL/1486/1486.jpg"
                      alt="スマイルホテル熊谷"
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                    />
                  </div>
                  <div className="md:col-span-7 space-y-4">
                    <ul className="space-y-2">
                      <li className="flex items-start gap-2 text-xs sm:text-sm text-stone-700 font-medium"><span className="text-cyan-700 font-bold shrink-0">✔</span><span>JR熊谷駅北口から徒歩約2分の駅前立地で電車利用の旅に圧倒的な利便性</span></li>
                      <li className="flex items-start gap-2 text-xs sm:text-sm text-stone-700 font-medium"><span className="text-cyan-700 font-bold shrink-0">✔</span><span>全室に高速Wi-Fiと加湿空気清浄機を完備し、冬の乾燥シーズンも安心快適</span></li>
                      <li className="flex items-start gap-2 text-xs sm:text-sm text-stone-700 font-medium"><span className="text-cyan-700 font-bold shrink-0">✔</span><span>周辺に行田名物ゼリーフライや熊谷うどんの名店が揃う便利なロケーション</span></li>
                    </ul>
                    <p className="text-sm text-stone-600 leading-relaxed">
                      熊谷駅北口の目の前に建つ、安心と信頼の全国チェーンホテル。駅からのアクセスが抜群で、荷物を預けて身軽に行田の忍城やさきたま古墳群へ向かうことができます。客室は清潔に保たれており、アットホームなスタッフの接客が旅人を温かく迎えてくれます。熊谷名物の小麦文化が息づく手打ちうどん店や郷土料理居酒屋も徒歩圏内に充実しており、気軽な埼玉冬旅の拠点として活躍します。
                    </p>

                    <div className="bg-amber-50/70 border border-amber-200/60 rounded-lg p-3 text-xs text-stone-700 space-y-1">
                      <span className="font-bold text-amber-900 block">宿泊者のクチコミ・評判抜粋</span>
                      <p className="line-clamp-2 italic text-stone-600">「気分転換の滞在で疲れがしっかり取れた素泊まりでした気分短観したくてホテル滞在しましたお陰で色々疲れが取れましたお世話になりましたクチコミの詳細はこちらから　https://review…　2026-09-29 22:55:35投稿 つづきはこちら」</p>
                    </div>
                  </div>
                </div>

                <div className="bg-stone-50 rounded-xl p-4 flex flex-wrap items-center justify-between gap-4 border border-stone-100">
                  <div className="space-y-1 text-xs text-stone-700">
                    <div className="flex items-center gap-1 font-semibold text-stone-800">
                      <MapPin className="w-3.5 h-3.5 text-rose-500" />
                      <span>埼玉県 熊谷市筑波1-138</span>
                    </div>
                    <div className="text-stone-700 pl-4.5">JR「熊谷駅」北口より徒歩5分（国道17号沿い）</div>
                    <div className="text-stone-700 pl-4.5 font-medium">目安料金: <span className="text-cyan-800 font-bold">¥3,135〜</span>（1名あたり/時期により変動）</div>
                  </div>
                  <a
                    href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F1486%2F1486.html"
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
                冬の行田・熊谷・加須・羽生旅行 よくある質問（FAQ）
              </h2>
            </div>
            <div className="space-y-4">

            <div className="bg-white rounded-xl p-6 border border-stone-200/80 shadow-sm space-y-2">
              <h3 className="text-base font-bold text-stone-900 flex items-start gap-2">
                <span className="text-cyan-700 font-extrabold">Q.</span>
                <span>忍城御三階櫓の中に入ることはできますか？</span>
              </h3>
              <p className="text-sm text-stone-600 leading-relaxed pl-6">
                <span className="font-semibold text-stone-800">A. </span>はい、御三階櫓の内部は行田市郷土博物館の一部となっており入館可能です。最上階の展望室からは行田市内を一望でき、冬の晴れた日には遠く富士山や秩父連山の雄大な稜線も見渡せます。
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 border border-stone-200/80 shadow-sm space-y-2">
              <h3 className="text-base font-bold text-stone-900 flex items-start gap-2">
                <span className="text-cyan-700 font-extrabold">Q.</span>
                <span>行田名物の「ゼリーフライ」と「フライ」の違いは何ですか？</span>
              </h3>
              <p className="text-sm text-stone-600 leading-relaxed pl-6">
                <span className="font-semibold text-stone-800">A. </span>「ゼリーフライ」はおからと蒸したジャガイモ、人参などを練り合わせ、衣をつけずに素揚げして特製ソースをくぐらせた小判形のおやつ（銭フライが訛ったもの）。一方「フライ」は水で溶いた小麦粉に豚肉やネギを乗せて鉄板で薄く焼き、ソースや醤油を塗ったお好み焼き風の軽食です。
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 border border-stone-200/80 shadow-sm space-y-2">
              <h3 className="text-base font-bold text-stone-900 flex items-start gap-2">
                <span className="text-cyan-700 font-extrabold">Q.</span>
                <span>さきたま古墳群の見学に必要な所要時間はどれくらいですか？</span>
              </h3>
              <p className="text-sm text-stone-600 leading-relaxed pl-6">
                <span className="font-semibold text-stone-800">A. </span>主要な丸墓山古墳や稲荷山古墳、さきたま史跡博物館をじっくり巡る場合、約1時間30分〜2時間程度が目安です。丸墓山古墳の頂上からは忍城方面を見渡すことができ、石田三成が陣を敷いた歴史の現場を体感できます。
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
                <Link href="/prefectures/saitama" className="text-cyan-800 hover:text-cyan-950 font-medium hover:underline flex items-center gap-1.5 text-sm">
                  <ChevronRight className="w-4 h-4 text-cyan-600 shrink-0" />
                  <span>埼玉県のおすすめ観光名所＆温泉宿一覧</span>
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
