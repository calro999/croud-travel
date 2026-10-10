import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next';
import {
  Star,
  MapPin,
  Calendar,
  ExternalLink,
  ChevronRight,
  Sparkles,
  Info,
  HelpCircle,
  Thermometer,
  Car,
  Compass
} from 'lucide-react';

export const metadata: Metadata = {
  title: '古代環濠の灯火・吉野ヶ里光の響と冬の初摘み有明海苔：2026-2027年冬の佐賀・神埼＆佐賀城下！古湯名湯と最高峰佐賀牛名宿5選 | 旅行キュレーション',
  description: '数千個のキャンドルと熱気球が幻想的に夜空を彩る12月の吉野ヶ里歴史公園「光の響」と佐賀城下町！11〜1月に旬を迎える冬の最高峰「有明海初摘み海苔」と口の中でとろける極上「佐賀牛」、ぬる湯名湯・古湯温泉に癒やされる冬の厳選名宿5選。',
  keywords: ['佐賀・吉野ヶ里・古湯', '冬旅行', '新春初詣', '温泉', '名宿', '佐賀県観光', '楽天トラベル', 'ふるさと納税'],
  openGraph: {
    title: '古代環濠の灯火・吉野ヶ里光の響と冬の初摘み有明海苔：2026-2027年冬の佐賀・神埼＆佐賀城下！古湯名湯と最高峰佐賀牛名宿5選',
    description: '数千個のキャンドルと熱気球が幻想的に夜空を彩る12月の吉野ヶ里歴史公園「光の響」と佐賀城下町！11〜1月に旬を迎える冬の最高峰「有明海初摘み海苔」と口の中でとろける極上「佐賀牛」、ぬる湯名湯・古湯温泉に癒やされる冬の厳選名宿5選。',
    images: ['https://thumb.wikimedia.org/wikipedia/commons/thumb/3/38/Yoshinogari-iseki_zenkei.JPG/1280px-Yoshinogari-iseki_zenkei.JPG?utm_source=ja.wikipedia.org&utm_campaign=api&utm_content=thumbnail'],
    type: 'article',
  },
};

export default function Page() {
  const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      "headline": "【古代環濠の灯火・吉野ヶ里光の響と冬の初摘み有明海苔】2026-2027年冬の佐賀・神埼＆佐賀城下！古湯名湯と最高峰佐賀牛名宿5選",
      "description": "数千個のキャンドルと熱気球が幻想的に夜空を彩る12月の吉野ヶ里歴史公園「光の響」と佐賀城下町！11〜1月に旬を迎える冬の最高峰「有明海初摘み海苔」と口の中でとろける極上「佐賀牛」、ぬる湯名湯・古湯温泉に癒やされる冬の厳選名宿5選。",
      "image": [
        "https://thumb.wikimedia.org/wikipedia/commons/thumb/3/38/Yoshinogari-iseki_zenkei.JPG/1280px-Yoshinogari-iseki_zenkei.JPG?utm_source=ja.wikipedia.org&utm_campaign=api&utm_content=thumbnail",
        "https://img.travel.rakuten.co.jp/share/HOTEL/166515/166515.jpg"
      ],
      "datePublished": "",
      "dateModified": "",
      "author": {
        "@type": "Organization",
        "name": "Japan Travel Curations"
      }
    },
    {
      "@type": "ItemList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "item": {
            "@type": "Hotel",
            "name": "ガーデンテラス佐賀ホテル＆リゾート",
            "description": "佐賀市内に佇み、都会の喧騒を離れたリゾート空間を提供するハイエンドホテル。全客室が広々としたテラスを備えたスイート仕様で、木と石の温もりが調和した上質なインテリアが非日常を演出します。宿泊者専用クラブラウンジでは、佐賀の銘酒やフィンガーフードが自由に楽しめる贅沢なもてなし。夕食には専属シェフが目の前で焼き上げる最高級A5ランク佐賀牛の鉄板焼きコースを堪能でき、舌の上でとろける芳醇な肉の甘みと旨味に酔いしれる至福の夜を過ごせます。",
            "image": "https://img.travel.rakuten.co.jp/share/HOTEL/166515/166515.jpg",
            "address": {
              "@type": "PostalAddress",
              "addressRegion": "佐賀県",
              "streetAddress": "佐賀県 佐賀市新栄東3-7-8"
            },
            "aggregateRating": {
              "@type": "AggregateRating",
              "ratingValue": "4.67",
              "reviewCount": "399"
            },
            "priceRange": "¥12,710〜"
          }
        },
        {
          "@type": "ListItem",
          "position": 2,
          "item": {
            "@type": "Hotel",
            "name": "古湯温泉　旅館　杉乃家",
            "description": "古湯温泉の高台に位置し、窓の向こうに広がる山々の稜線と温泉街の静寂を一望できる老舗温泉旅館。宿自慢の展望露天風呂からは、澄み切った冬の星空と湯けむりを眺めながら、名湯「ぬる湯」に心ゆくまで浸ることができます。ph9.5を超えるアルカリ性の柔らかな湯は、まるで美容液のように肌を潤します。夕食には料理長が厳選した最高品質の佐賀牛を贅沢に使った陶板焼きやしゃぶしゃぶ、地元の清流で育った川魚料理が並び、心温まるもてなしとともに深い寛ぎを満喫できます。",
            "image": "https://img.travel.rakuten.co.jp/share/HOTEL/15108/15108.jpg",
            "address": {
              "@type": "PostalAddress",
              "addressRegion": "佐賀県",
              "streetAddress": "佐賀県 佐賀市富士町古湯温泉"
            },
            "aggregateRating": {
              "@type": "AggregateRating",
              "ratingValue": "4.54",
              "reviewCount": "186"
            },
            "priceRange": "¥19,800〜"
          }
        },
        {
          "@type": "ListItem",
          "position": 3,
          "item": {
            "@type": "Hotel",
            "name": "ホテルマリターレ創世　佐賀",
            "description": "佐賀駅北口からほど近く、イタリア・ルネサンス様式の壮麗な建築が目を引くプレミアムホテル。一歩足を踏み入れれば、ヨーロッパのクラシックホテルを訪れたかのような気品あふれるロビーと調度品が出迎えてくれます。客室は優雅でゆとりのある設計が施され、最高級の寝具が極上の眠りをお届け。館内レストランでは佐賀牛や玄界灘・有明海の新鮮食材を駆使した華やかな本格フレンチや日本料理会席が味わえ、吉野ヶ里歴史公園の光の響や佐賀城下散策の後に優雅な余韻に浸れる名宿です。",
            "image": "https://img.travel.rakuten.co.jp/share/HOTEL/79385/79385.jpg",
            "address": {
              "@type": "PostalAddress",
              "addressRegion": "佐賀県",
              "streetAddress": "佐賀県 佐賀市神野東2-5-15"
            },
            "aggregateRating": {
              "@type": "AggregateRating",
              "ratingValue": "4.53",
              "reviewCount": "388"
            },
            "priceRange": "¥3,100〜"
          }
        },
        {
          "@type": "ListItem",
          "position": 4,
          "item": {
            "@type": "Hotel",
            "name": "古湯温泉　ＯＮＣＲＩ　／　おんくり",
            "description": "古湯温泉の清らかな渓流沿いに広がる、「ジャパニーズ・コンフォート」をコンセプトにしたモダンな温泉リゾートホテル。最大の魅力は、源泉温度の異なるぬる湯やあつ湯、寝湯、打たせ湯、露天風呂など多彩な浴槽が揃う広大な大浴場「SHIORI」。時間を忘れてぬる湯に身を委ねる現代の湯治スタイルが楽しめます。館内には暖炉のあるラウンジやライブラリーが配され、冬の静かな読書時間を演出。夕食には地場産野菜や佐賀牛の旨味をシンプルかつ大胆に引き出した創作料理が振る舞われ、感度の高い大人旅に選ばれ続けています。",
            "image": "https://img.travel.rakuten.co.jp/share/HOTEL/40343/40343.jpg",
            "address": {
              "@type": "PostalAddress",
              "addressRegion": "佐賀県",
              "streetAddress": "佐賀県 佐賀市富士町古湯556"
            },
            "aggregateRating": {
              "@type": "AggregateRating",
              "ratingValue": "4.31",
              "reviewCount": "754"
            },
            "priceRange": "¥20,200〜"
          }
        },
        {
          "@type": "ListItem",
          "position": 5,
          "item": {
            "@type": "Hotel",
            "name": "ホテルニューオータニ佐賀",
            "description": "佐賀城址の歴史薫るお堀のほとりに佇み、緑豊かな自然と静寂に包まれた佐賀を代表する格式あるグランドホテル。客室の窓からは季節の移ろいを感じるお堀の風景が広がり、新春の佐賀神社参拝や佐賀城本丸歴史館へも徒歩圏内という絶好のロケーションを誇ります。ニューオータニならではの洗練されたおもてなしと安心感の中で、極上の佐賀牛料理や地元有明海の旬の恵みを堪能。落ち着いた大人の冬の佐賀滞在を約束してくれる名宿です。",
            "image": "https://img.travel.rakuten.co.jp/share/HOTEL/5830/5830.jpg",
            "address": {
              "@type": "PostalAddress",
              "addressRegion": "佐賀県",
              "streetAddress": "佐賀県 佐賀市与賀町1-2"
            },
            "aggregateRating": {
              "@type": "AggregateRating",
              "ratingValue": "4.23",
              "reviewCount": "953"
            },
            "priceRange": "¥5,200〜"
          }
        }
      ]
    },
    {
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "吉野ヶ里歴史公園「光の響」の開催時期と熱気球を見るためのコツは？",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "例年12月中旬〜下旬の土日を中心に開催されます（17:00〜21:00頃）。熱気球の夜間係留（ナイトグロー）は風の影響を受けやすいため、天候や風速の穏やかな日が最も美しく立ち上がります。点灯直後のトワイライト（マジックアワー）の時間帯から入場すると、夕景とキャンドル、熱気球の素晴らしいグラデーションを鑑賞できます。"
          }
        },
        {
          "@type": "Question",
          "name": "「古湯温泉」のぬる湯は冬でも寒くありませんか？",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "古湯温泉の源泉温度は約38℃〜40℃前後で、人間の体温に非常に近い「ぬる湯」です。最初はぬるく感じられますが、アルカリ性単純温泉の成分がじっくりと皮膚に浸透し、30分以上浸かることで血管が拡張して身体の芯からポカポカと温まり、湯冷めしにくいのが大きな特徴です。多くの宿では加温したあつ湯の浴槽も併設されているため交互浴も楽しめます。"
          }
        },
        {
          "@type": "Question",
          "name": "佐賀市内で本場の佐賀牛や初摘み海苔をお土産に購入できるスポットは？",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "佐賀駅直結の「えきマチ1丁目」や佐賀城近くの「佐賀工房」、道の駅「吉野ヶ里」で初摘み海苔の最高級品を購入できます。また、佐賀牛はJAさが直営の「佐賀牛レストラン季楽」や専門精肉店でギフト発送が可能です。"
          }
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

      <main className="min-h-screen bg-stone-50 text-stone-800 pb-20">
        {/* ヒーローヘッダー */}
        <header className="relative bg-gradient-to-b from-stone-900 via-stone-850 to-stone-800 text-white pt-16 pb-20 px-4 sm:px-6">
          <div className="max-w-4xl mx-auto space-y-4">
            <div className="flex flex-wrap items-center gap-2 text-xs text-stone-300">
              <Link href="/" className="hover:text-white transition-colors">ホーム</Link>
              <ChevronRight className="w-3.5 h-3.5 text-stone-500" />
              <Link href="/features" className="hover:text-white transition-colors">厳選特集</Link>
              <ChevronRight className="w-3.5 h-3.5 text-stone-500" />
              <Link href="/prefectures/saga" className="hover:text-white transition-colors">佐賀県</Link>
              <ChevronRight className="w-3.5 h-3.5 text-stone-500" />
              <span className="text-cyan-400 font-medium">佐賀・吉野ヶ里・古湯</span>
            </div>

            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-900/60 border border-cyan-700/50 text-cyan-300 text-xs font-semibold">
              <Sparkles className="w-3.5 h-3.5" />
              <span>2026-2027年冬（11月・12月・1月）最新厳選ガイド</span>
            </div>

            <h1 className="text-2xl sm:text-3xl md:text-4xl font-black tracking-tight leading-tight text-white">「古代環濠の灯火・吉野ヶ里光の響と冬の初摘み有明海苔」2026-2027年冬の佐賀・神埼＆佐賀城下！古湯名湯と最高峰佐賀牛名宿5選</h1>

            <p className="text-sm sm:text-base text-stone-300 leading-relaxed max-w-3xl pt-2">
              数千個のキャンドルと熱気球が幻想的に夜空を彩る12月の吉野ヶ里歴史公園「光の響」と佐賀城下町！11〜1月に旬を迎える冬の最高峰「有明海初摘み海苔」と口の中でとろける極上「佐賀牛」、ぬる湯名湯・古湯温泉に癒やされる冬の厳選名宿5選。
            </p>
          </div>
        </header>

        {/* リード文セクション */}
        <section className="max-w-4xl mx-auto px-4 -mt-10 relative z-10 mb-12">
          <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-sm border border-stone-200/80 space-y-4">
            <div className="flex items-center gap-2 text-cyan-900 font-bold text-sm sm:text-base border-b border-stone-100 pb-2">
              <Compass className="w-5 h-5 text-cyan-700" />
              <span>冬の佐賀・吉野ヶ里・古湯探訪：静寂と温もりに包まれる旅の魅力</span>
            </div>
            <p className="text-xs sm:text-sm text-stone-700 leading-relaxed">
              北は天山山系の山並みを背負い、南には日本一の干満差を誇る広大な有明海が広がる佐賀平野。古代から豊かな稲作文化が花開いたこの地で、冬の澄み渡る夜に息を呑む幻想的な世界を描き出すのが、弥生時代最大級の環濠集落「吉野ヶ里歴史公園」で開催される冬の特別祭典「吉野ヶ里・光の響（ひかりのひびき）」です。毎年12月の夕暮れ時、復元された物見櫓や主祭殿が佇む古代の広大な大地に数千個のキャンドルが灯り、闇夜に巨大な熱気球が炎を吹き上げて光り輝く「ナイトグロー（夜間係留）」の荘厳な光景は、訪れる人々の魂を揺さぶる感動に満ちています。そして、冬の佐賀の食を語る上で欠かせないのが、11月下旬から1月に一番摘みを迎える「有明海初摘み海苔（佐賀海苔）」。口に含んだ瞬間にフワリととろけ、濃厚な磯の香りと上品な甘みが広がる初摘み海苔は、21年連続日本一の生産量を誇る佐賀が世界に誇る至宝の味覚です。さらに、最高肉質等級5等級・4等級のサシが美しく入った全国屈指のブランド和牛「佐賀牛」の極上すき焼きや炭火ステーキ、佐賀藩鍋島家の歴史を今に伝える佐賀城本丸歴史館の散策、そして約2200年の開湯伝説を持つ名湯「古湯温泉」の極上のぬる湯に浸かる。心身を清め、古代のロマンと現代の美味に浸る贅沢な佐賀の冬旅へご案内します。
            </p>
          </div>
        </section>

        {/* なぜ冬に訪れるべきかの3ポイント */}
        <section className="max-w-4xl mx-auto px-4 mb-14 space-y-4">
          <div className="border-l-4 border-cyan-800 pl-3">
            <h2 className="text-xl sm:text-2xl font-bold text-stone-900">
              この冬、佐賀・吉野ヶ里・古湯を訪れるべき3つの理由
            </h2>
            <p className="text-xs sm:text-sm text-stone-500 pt-0.5">
              11月〜1月ならではの幻想的な光景、開運初詣、そして冬が一番美味しい旬の味覚
            </p>
          </div>

          <div className="space-y-4">
            <div className="bg-white rounded-2xl p-5 sm:p-6 border border-stone-200/80 shadow-sm space-y-2">
              <div className="flex items-center gap-2">
                <span className="w-6 h-6 rounded-full bg-cyan-800 text-white text-xs font-bold flex items-center justify-center flex-shrink-0">
                  1
                </span>
                <h3 className="text-base sm:text-lg font-bold text-stone-900">
                  弥生の古代集落に灯る数千のキャンドルと熱気球ナイトグロー！「吉野ヶ里・光の響」
                </h3>
              </div>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed pl-8">
                国の特別史跡・吉野ヶ里歴史公園で12月に開催される冬の風物詩。キャンドルの温かな灯籠が幾何学模様を描き、主祭殿のライトアップと巨大な熱気球バルーンが夜空を茜色に照らす姿は、現代と古代が交錯する奇跡の空間。冬の澄んだ大気の中でしか味わえない特別な体験です。
              </p>
            </div>

            <div className="bg-white rounded-2xl p-5 sm:p-6 border border-stone-200/80 shadow-sm space-y-2">
              <div className="flex items-center gap-2">
                <span className="w-6 h-6 rounded-full bg-cyan-800 text-white text-xs font-bold flex items-center justify-center flex-shrink-0">
                  2
                </span>
                <h3 className="text-base sm:text-lg font-bold text-stone-900">
                  冬が旬の最高峰「有明海初摘み海苔」と口福のブランド肉「佐賀牛」の饗宴
                </h3>
              </div>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed pl-8">
                11月中旬から1月にかけて収穫される「初摘み海苔」は、柔らかく極上の旨味と口どけを誇る海の恵み。そして、厳しい基準をクリアした最高峰「佐賀牛」の霜降り肉。美しいサシの脂は融点が低く、口に入れた瞬間にとろける極上の甘み。佐賀の誇る山海の美味が冬の食卓を飾ります。
              </p>
            </div>

            <div className="bg-white rounded-2xl p-5 sm:p-6 border border-stone-200/80 shadow-sm space-y-2">
              <div className="flex items-center gap-2">
                <span className="w-6 h-6 rounded-full bg-cyan-800 text-white text-xs font-bold flex items-center justify-center flex-shrink-0">
                  3
                </span>
                <h3 className="text-base sm:text-lg font-bold text-stone-900">
                  開湯2200年の秘湯「古湯温泉」ぬる湯浴みと佐賀城下町の歴史ロマン
                </h3>
              </div>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed pl-8">
                秦の始皇帝の命で不老長寿の薬を求めて来日した徐福が発見したと伝わる「古湯温泉」。38度前後の心地よい「ぬる湯」は、長湯しても身体に負担がなく、神経を静めて美肌へ導く奇跡の温泉です。日本最大級の木造復元建築である佐賀城本丸歴史館とともに、歴史ある大人の隠れ家を満喫できます。
              </p>
            </div>
          </div>
        </section>

        {/* アクセス・気候・服装ガイド */}
        <section className="max-w-4xl mx-auto px-4 mb-14">
          <div className="bg-cyan-950/5 border border-cyan-800/20 rounded-2xl p-6 sm:p-8 space-y-4">
            <div className="flex items-center gap-2">
              <Thermometer className="w-5 h-5 text-cyan-800" />
              <h2 className="text-lg sm:text-xl font-bold text-stone-900">
                アクセス・気候・冬の服装ガイド
              </h2>
            </div>
            <div className="text-xs sm:text-sm text-stone-700 leading-relaxed whitespace-pre-line bg-white/70 p-5 rounded-xl border border-stone-200/60">
              【エリアへのアクセス】
・電車・JR：JR長崎本線「佐賀駅」または「吉野ヶ里公園駅」下車。博多駅から佐賀駅まで特急（リレーかもめ・みどり・かささぎ）で約35〜40分、吉野ヶ里公園駅まで普通列車で約45分。佐賀空港から佐賀駅前までリムジンバスで約35分。
・車・マイカー：長崎自動車道「東脊振IC」より吉野ヶ里歴史公園まで約5分、「佐賀大和IC」より佐賀市街まで約15分、古湯温泉まで約15分。福岡市内（太宰府IC）から東脊振ICまで約35分。
・古湯温泉へのアクセス：佐賀駅バスセンターより昭和バス「古湯・富士支所」行きで約45分。

【見頃・気候・おすすめの服装】
・ベストシーズン：11月下旬〜1月下旬（吉野ヶ里光の響（12月）、有明海初摘み海苔のシーズン、佐賀神社新春初詣、古湯温泉の旬）。
・気温の目安：佐賀平野は温暖な気候ですが、冬期は脊振山地からの冷たい吹き下ろし風があり、夜間や山間部の古湯温泉は氷点下近くまで冷え込みます。日中は8〜12℃前後。
・服装のポイント：吉野ヶ里歴史公園は広大な屋外フィールドのため、夜間のイベント鑑賞には風を通さない厚手のダウンジャケット、手袋、マフラー、ニット帽が必須です。歩道が広いため歩きやすいスニーカーでお出かけください。
            </div>
          </div>
        </section>

        {/* 近隣名所アーカイブ（Wikipedia連携） */}
        <section className="max-w-4xl mx-auto px-4 mb-14">
          <div className="bg-gradient-to-br from-stone-900 to-stone-800 rounded-2xl text-white p-6 sm:p-8 shadow-sm">
            <div className="flex items-center gap-2 text-cyan-400 text-xs font-bold uppercase tracking-wider mb-2">
              <MapPin className="w-4 h-4" />
              <span>近隣名所アーカイブ＆公式百科事典連携</span>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
              <div className="md:col-span-5 relative h-56 rounded-xl overflow-hidden bg-stone-800">
                <img
                  src="https://thumb.wikimedia.org/wikipedia/commons/thumb/3/38/Yoshinogari-iseki_zenkei.JPG/1280px-Yoshinogari-iseki_zenkei.JPG?utm_source=ja.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
                  alt="国指定特別史跡・吉野ヶ里歴史公園（弥生の大集落と冬の幻想祭典「光の響」）"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
              <div className="md:col-span-7 space-y-3">
                <div>
                  <span className="text-[11px] text-cyan-300 font-mono">Spot Spotlight</span>
                  <h3 className="text-lg sm:text-xl font-bold text-white">
                    国指定特別史跡・吉野ヶ里歴史公園（弥生の大集落と冬の幻想祭典「光の響」）
                  </h3>
                  <p className="text-xs text-stone-300 leading-relaxed mt-2">
                    吉野ヶ里遺跡（よしのがりいせき）は、佐賀県神埼郡吉野ヶ里町と神埼市にまたがる吉野ヶ里丘陵にある遺跡。国の特別史跡に指定されている。 およそ117ヘクタールにわたって残る弥生時代の大規模な環濠集落（環壕集落）跡で知られる。1986年（昭和61年）からの発掘調査によって発見された。現在は国営吉野ヶ里歴史公園として一部を国が管理する公園である。
                  </p>
                </div>
                <div className="text-[11px] text-stone-400 pt-2 border-t border-stone-700 flex items-center justify-between">
                  <span>出典：ウィキペディア（Wikipedia）公式情報</span>
                  <a
                    href="https://ja.wikipedia.org/wiki/吉野ヶ里遺跡"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-cyan-400 hover:underline flex items-center gap-1"
                  >
                    <span>詳細百科事典</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 厳選名宿一覧 */}
        <section className="max-w-4xl mx-auto px-4 space-y-6 mb-14">
          <div className="border-l-4 border-cyan-800 pl-3">
            <h2 className="text-xl sm:text-2xl font-bold text-stone-900">
              佐賀・吉野ヶ里・古湯 厳選の温泉＆名宿5選
            </h2>
            <p className="text-xs sm:text-sm text-stone-500 pt-0.5">
              楽天トラベルの最新実データより厳選。料理・温泉・立地に秀でた極上宿
            </p>
          </div>

          <div className="space-y-6">
            {/* 宿1: ガーデンテラス佐賀ホテル＆リゾート */}
            <div className="bg-white rounded-2xl border border-stone-200/80 shadow-sm overflow-hidden hover:shadow-md transition-shadow">
              <div className="p-5 sm:p-6 space-y-4">
                <div className="flex flex-wrap items-center justify-between gap-2 border-b border-stone-100 pb-3">
                  <span className="bg-cyan-800 text-white text-[11px] font-bold px-2.5 py-0.5 rounded-full">
                    厳選名宿 1
                  </span>
                  <div className="flex items-center gap-1 text-amber-500 font-bold text-sm">
                    <Star className="w-4 h-4 fill-current" />
                    <span>4.67</span>
                    <span className="text-stone-400 text-xs font-normal">（399件）</span>
                  </div>
                </div>

                <div>
                  <h3 className="text-lg sm:text-xl font-bold text-stone-900 leading-snug">
                    ガーデンテラス佐賀ホテル＆リゾート
                  </h3>
                  <p className="text-xs sm:text-sm text-cyan-800 font-medium mt-1">
                    プライベートテラス付きデザイナーズスイート・極上佐賀牛鉄板焼き
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-center">
                  <div className="md:col-span-5 relative h-48 sm:h-52 rounded-xl overflow-hidden bg-stone-100">
                    <img
                      src="https://img.travel.rakuten.co.jp/share/HOTEL/166515/166515.jpg"
                      alt="ガーデンテラス佐賀ホテル＆リゾート"
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                  </div>
                  <div className="md:col-span-7 space-y-3">
                    <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                      佐賀市内に佇み、都会の喧騒を離れたリゾート空間を提供するハイエンドホテル。全客室が広々としたテラスを備えたスイート仕様で、木と石の温もりが調和した上質なインテリアが非日常を演出します。宿泊者専用クラブラウンジでは、佐賀の銘酒やフィンガーフードが自由に楽しめる贅沢なもてなし。夕食には専属シェフが目の前で焼き上げる最高級A5ランク佐賀牛の鉄板焼きコースを堪能でき、舌の上でとろける芳醇な肉の甘みと旨味に酔いしれる至福の夜を過ごせます。
                    </p>
                    <ul className="text-xs text-stone-700 space-y-1 bg-stone-50 p-3 rounded-xl border border-stone-100">
                      <li className="flex items-start gap-1.5"><span className="text-cyan-700 font-bold">✓</span><span>全室テラス付きのラグジュアリーリゾート！クラブラウンジで優雅なフリーフロー</span></li><li className="flex items-start gap-1.5"><span className="text-cyan-700 font-bold">✓</span><span>鉄板焼きレストランで味わう最上級A5ランク佐賀牛と有明海の海の幸</span></li><li className="flex items-start gap-1.5"><span className="text-cyan-700 font-bold">✓</span><span>フィンランドサウナや屋外プールを望む洗練された大人のモダン空間</span></li>
                    </ul>
                  </div>
                </div>

                <div className="bg-amber-50/70 border border-amber-200/60 rounded-xl p-3 text-xs text-stone-700">
                  <span className="font-bold text-amber-900 mr-1">宿泊者の声：</span>
                  <span>{"「スタッフの対応と充実の飲み物、日本酒風呂に大満足スタッフの方の対応も良く、清潔感もあって、とても過ごしやすかったです!飲み物のサービスがとても充実していて、楽しく美味しくいただけました。日。」"}</span>
                </div>

                <div className="pt-2 flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-t border-stone-100">
                  <div className="text-xs text-stone-500">
                    <span className="block text-[11px] text-stone-400">参考料金（1名）</span>
                    <span className="text-stone-800 font-bold text-sm sm:text-base">税込 12,710円〜</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <a
                      href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F166515%2F166515.html"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-cyan-800 hover:bg-cyan-900 text-white font-bold text-xs sm:text-sm px-5 py-2.5 rounded-xl transition-colors flex items-center gap-1.5 shadow-sm"
                    >
                      <span>楽天トラベルで空室・プランを見る</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* 宿2: 古湯温泉　旅館　杉乃家 */}
            <div className="bg-white rounded-2xl border border-stone-200/80 shadow-sm overflow-hidden hover:shadow-md transition-shadow">
              <div className="p-5 sm:p-6 space-y-4">
                <div className="flex flex-wrap items-center justify-between gap-2 border-b border-stone-100 pb-3">
                  <span className="bg-cyan-800 text-white text-[11px] font-bold px-2.5 py-0.5 rounded-full">
                    厳選名宿 2
                  </span>
                  <div className="flex items-center gap-1 text-amber-500 font-bold text-sm">
                    <Star className="w-4 h-4 fill-current" />
                    <span>4.54</span>
                    <span className="text-stone-400 text-xs font-normal">（186件）</span>
                  </div>
                </div>

                <div>
                  <h3 className="text-lg sm:text-xl font-bold text-stone-900 leading-snug">
                    古湯温泉　旅館　杉乃家
                  </h3>
                  <p className="text-xs sm:text-sm text-cyan-800 font-medium mt-1">
                    古湯温泉の高台に佇む絶景老舗旅館・展望露天風呂と自家製佐賀牛会席
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-center">
                  <div className="md:col-span-5 relative h-48 sm:h-52 rounded-xl overflow-hidden bg-stone-100">
                    <img
                      src="https://img.travel.rakuten.co.jp/share/HOTEL/15108/15108.jpg"
                      alt="古湯温泉　旅館　杉乃家"
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                  </div>
                  <div className="md:col-span-7 space-y-3">
                    <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                      古湯温泉の高台に位置し、窓の向こうに広がる山々の稜線と温泉街の静寂を一望できる老舗温泉旅館。宿自慢の展望露天風呂からは、澄み切った冬の星空と湯けむりを眺めながら、名湯「ぬる湯」に心ゆくまで浸ることができます。ph9.5を超えるアルカリ性の柔らかな湯は、まるで美容液のように肌を潤します。夕食には料理長が厳選した最高品質の佐賀牛を贅沢に使った陶板焼きやしゃぶしゃぶ、地元の清流で育った川魚料理が並び、心温まるもてなしとともに深い寛ぎを満喫できます。
                    </p>
                    <ul className="text-xs text-stone-700 space-y-1 bg-stone-50 p-3 rounded-xl border border-stone-100">
                      <li className="flex items-start gap-1.5"><span className="text-cyan-700 font-bold">✓</span><span>古湯温泉街と山並みを見晴らす高台のパノラマ展望大浴場＆露天風呂</span></li><li className="flex items-start gap-1.5"><span className="text-cyan-700 font-bold">✓</span><span>創業以来愛される美肌の「ぬる湯」源泉かけ流しで心身を解きほぐす至福</span></li><li className="flex items-start gap-1.5"><span className="text-cyan-700 font-bold">✓</span><span>厳選された極上佐賀牛のしゃぶしゃぶや旬の山里料理が並ぶ手作り会席</span></li>
                    </ul>
                  </div>
                </div>

                <div className="bg-amber-50/70 border border-amber-200/60 rounded-xl p-3 text-xs text-stone-700">
                  <span className="font-bold text-amber-900 mr-1">宿泊者の声：</span>
                  <span>{"「最高の温泉と部屋部屋風呂と朝夕の食事は感激しました。部屋からの眺め、温泉からの眺めも思ってた以上に良くて、都会とは違った雰囲気を味わえました。」"}</span>
                </div>

                <div className="pt-2 flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-t border-stone-100">
                  <div className="text-xs text-stone-500">
                    <span className="block text-[11px] text-stone-400">参考料金（1名）</span>
                    <span className="text-stone-800 font-bold text-sm sm:text-base">税込 19,800円〜</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <a
                      href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F15108%2F15108.html"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-cyan-800 hover:bg-cyan-900 text-white font-bold text-xs sm:text-sm px-5 py-2.5 rounded-xl transition-colors flex items-center gap-1.5 shadow-sm"
                    >
                      <span>楽天トラベルで空室・プランを見る</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* 宿3: ホテルマリターレ創世　佐賀 */}
            <div className="bg-white rounded-2xl border border-stone-200/80 shadow-sm overflow-hidden hover:shadow-md transition-shadow">
              <div className="p-5 sm:p-6 space-y-4">
                <div className="flex flex-wrap items-center justify-between gap-2 border-b border-stone-100 pb-3">
                  <span className="bg-cyan-800 text-white text-[11px] font-bold px-2.5 py-0.5 rounded-full">
                    厳選名宿 3
                  </span>
                  <div className="flex items-center gap-1 text-amber-500 font-bold text-sm">
                    <Star className="w-4 h-4 fill-current" />
                    <span>4.53</span>
                    <span className="text-stone-400 text-xs font-normal">（388件）</span>
                  </div>
                </div>

                <div>
                  <h3 className="text-lg sm:text-xl font-bold text-stone-900 leading-snug">
                    ホテルマリターレ創世　佐賀
                  </h3>
                  <p className="text-xs sm:text-sm text-cyan-800 font-medium mt-1">
                    イタリアルネサンス建築の優美なホテル・本格スパと美食の館
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-center">
                  <div className="md:col-span-5 relative h-48 sm:h-52 rounded-xl overflow-hidden bg-stone-100">
                    <img
                      src="https://img.travel.rakuten.co.jp/share/HOTEL/79385/79385.jpg"
                      alt="ホテルマリターレ創世　佐賀"
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                  </div>
                  <div className="md:col-span-7 space-y-3">
                    <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                      佐賀駅北口からほど近く、イタリア・ルネサンス様式の壮麗な建築が目を引くプレミアムホテル。一歩足を踏み入れれば、ヨーロッパのクラシックホテルを訪れたかのような気品あふれるロビーと調度品が出迎えてくれます。客室は優雅でゆとりのある設計が施され、最高級の寝具が極上の眠りをお届け。館内レストランでは佐賀牛や玄界灘・有明海の新鮮食材を駆使した華やかな本格フレンチや日本料理会席が味わえ、吉野ヶ里歴史公園の光の響や佐賀城下散策の後に優雅な余韻に浸れる名宿です。
                    </p>
                    <ul className="text-xs text-stone-700 space-y-1 bg-stone-50 p-3 rounded-xl border border-stone-100">
                      <li className="flex items-start gap-1.5"><span className="text-cyan-700 font-bold">✓</span><span>ヨーロッパの宮殿を思わせるクラシカルで壮麗なイタリア調建築美</span></li><li className="flex items-start gap-1.5"><span className="text-cyan-700 font-bold">✓</span><span>広々としたラグジュアリー客室と充実の本格スパ・トリートメント施設</span></li><li className="flex items-start gap-1.5"><span className="text-cyan-700 font-bold">✓</span><span>フランス料理・日本料理の熟練シェフが織りなす佐賀牛特選フルコース</span></li>
                    </ul>
                  </div>
                </div>

                <div className="bg-amber-50/70 border border-amber-200/60 rounded-xl p-3 text-xs text-stone-700">
                  <span className="font-bold text-amber-900 mr-1">宿泊者の声：</span>
                  <span>{"「佐賀出張の定宿、駐車場無料で部屋も快適佐賀出張の時はいつも利用しています。駐車場も無料で利用でき、部屋も広く快適です。風呂の設備も充実しており、ゆっくりくつろげます。また機会があれば利用しようと思。」"}</span>
                </div>

                <div className="pt-2 flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-t border-stone-100">
                  <div className="text-xs text-stone-500">
                    <span className="block text-[11px] text-stone-400">参考料金（1名）</span>
                    <span className="text-stone-800 font-bold text-sm sm:text-base">税込 3,100円〜</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <a
                      href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F79385%2F79385.html"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-cyan-800 hover:bg-cyan-900 text-white font-bold text-xs sm:text-sm px-5 py-2.5 rounded-xl transition-colors flex items-center gap-1.5 shadow-sm"
                    >
                      <span>楽天トラベルで空室・プランを見る</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* 宿4: 古湯温泉　ＯＮＣＲＩ　／　おんくり */}
            <div className="bg-white rounded-2xl border border-stone-200/80 shadow-sm overflow-hidden hover:shadow-md transition-shadow">
              <div className="p-5 sm:p-6 space-y-4">
                <div className="flex flex-wrap items-center justify-between gap-2 border-b border-stone-100 pb-3">
                  <span className="bg-cyan-800 text-white text-[11px] font-bold px-2.5 py-0.5 rounded-full">
                    厳選名宿 4
                  </span>
                  <div className="flex items-center gap-1 text-amber-500 font-bold text-sm">
                    <Star className="w-4 h-4 fill-current" />
                    <span>4.31</span>
                    <span className="text-stone-400 text-xs font-normal">（754件）</span>
                  </div>
                </div>

                <div>
                  <h3 className="text-lg sm:text-xl font-bold text-stone-900 leading-snug">
                    古湯温泉　ＯＮＣＲＩ　／　おんくり
                  </h3>
                  <p className="text-xs sm:text-sm text-cyan-800 font-medium mt-1">
                    自然と調和する山峡の湯治リゾート・十数種の湯巡りとバー＆ライブラリ
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-center">
                  <div className="md:col-span-5 relative h-48 sm:h-52 rounded-xl overflow-hidden bg-stone-100">
                    <img
                      src="https://img.travel.rakuten.co.jp/share/HOTEL/40343/40343.jpg"
                      alt="古湯温泉　ＯＮＣＲＩ　／　おんくり"
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                  </div>
                  <div className="md:col-span-7 space-y-3">
                    <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                      古湯温泉の清らかな渓流沿いに広がる、「ジャパニーズ・コンフォート」をコンセプトにしたモダンな温泉リゾートホテル。最大の魅力は、源泉温度の異なるぬる湯やあつ湯、寝湯、打たせ湯、露天風呂など多彩な浴槽が揃う広大な大浴場「SHIORI」。時間を忘れてぬる湯に身を委ねる現代の湯治スタイルが楽しめます。館内には暖炉のあるラウンジやライブラリーが配され、冬の静かな読書時間を演出。夕食には地場産野菜や佐賀牛の旨味をシンプルかつ大胆に引き出した創作料理が振る舞われ、感度の高い大人旅に選ばれ続けています。
                    </p>
                    <ul className="text-xs text-stone-700 space-y-1 bg-stone-50 p-3 rounded-xl border border-stone-100">
                      <li className="flex items-start gap-1.5"><span className="text-cyan-700 font-bold">✓</span><span>「ぬる湯治」をテーマにした広大な大浴場！天然温泉の十数種類の湯巡り</span></li><li className="flex items-start gap-1.5"><span className="text-cyan-700 font-bold">✓</span><span>デザイン賞受賞のモダンな建築とゆったり読書が楽しめるブックラウンジ</span></li><li className="flex items-start gap-1.5"><span className="text-cyan-700 font-bold">✓</span><span>佐賀の豊かな風土を五感で味わうナチュラルイタリアン＆炭火和食会席</span></li>
                    </ul>
                  </div>
                </div>

                <div className="bg-amber-50/70 border border-amber-200/60 rounded-xl p-3 text-xs text-stone-700">
                  <span className="font-bold text-amber-900 mr-1">宿泊者の声：</span>
                  <span>{"「部屋は離れのじぼう2。元は家族風呂と言うことで広々としたかけ流しの温泉が楽しめました。部屋はやや狭い。」"}</span>
                </div>

                <div className="pt-2 flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-t border-stone-100">
                  <div className="text-xs text-stone-500">
                    <span className="block text-[11px] text-stone-400">参考料金（1名）</span>
                    <span className="text-stone-800 font-bold text-sm sm:text-base">税込 20,200円〜</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <a
                      href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F40343%2F40343.html"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-cyan-800 hover:bg-cyan-900 text-white font-bold text-xs sm:text-sm px-5 py-2.5 rounded-xl transition-colors flex items-center gap-1.5 shadow-sm"
                    >
                      <span>楽天トラベルで空室・プランを見る</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* 宿5: ホテルニューオータニ佐賀 */}
            <div className="bg-white rounded-2xl border border-stone-200/80 shadow-sm overflow-hidden hover:shadow-md transition-shadow">
              <div className="p-5 sm:p-6 space-y-4">
                <div className="flex flex-wrap items-center justify-between gap-2 border-b border-stone-100 pb-3">
                  <span className="bg-cyan-800 text-white text-[11px] font-bold px-2.5 py-0.5 rounded-full">
                    厳選名宿 5
                  </span>
                  <div className="flex items-center gap-1 text-amber-500 font-bold text-sm">
                    <Star className="w-4 h-4 fill-current" />
                    <span>4.23</span>
                    <span className="text-stone-400 text-xs font-normal">（953件）</span>
                  </div>
                </div>

                <div>
                  <h3 className="text-lg sm:text-xl font-bold text-stone-900 leading-snug">
                    ホテルニューオータニ佐賀
                  </h3>
                  <p className="text-xs sm:text-sm text-cyan-800 font-medium mt-1">
                    佐賀城のお堀端に佇む格式ある名門ホテル・緑と水に囲まれた静寂
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-center">
                  <div className="md:col-span-5 relative h-48 sm:h-52 rounded-xl overflow-hidden bg-stone-100">
                    <img
                      src="https://img.travel.rakuten.co.jp/share/HOTEL/5830/5830.jpg"
                      alt="ホテルニューオータニ佐賀"
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                  </div>
                  <div className="md:col-span-7 space-y-3">
                    <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                      佐賀城址の歴史薫るお堀のほとりに佇み、緑豊かな自然と静寂に包まれた佐賀を代表する格式あるグランドホテル。客室の窓からは季節の移ろいを感じるお堀の風景が広がり、新春の佐賀神社参拝や佐賀城本丸歴史館へも徒歩圏内という絶好のロケーションを誇ります。ニューオータニならではの洗練されたおもてなしと安心感の中で、極上の佐賀牛料理や地元有明海の旬の恵みを堪能。落ち着いた大人の冬の佐賀滞在を約束してくれる名宿です。
                    </p>
                    <ul className="text-xs text-stone-700 space-y-1 bg-stone-50 p-3 rounded-xl border border-stone-100">
                      <li className="flex items-start gap-1.5"><span className="text-cyan-700 font-bold">✓</span><span>佐賀城跡のお堀に面した美しいロケーションと緑豊かな日本庭園</span></li><li className="flex items-start gap-1.5"><span className="text-cyan-700 font-bold">✓</span><span>ニューオータニの伝統を受け継ぐ洗練されたホスピタリティと快適な客室</span></li><li className="flex items-start gap-1.5"><span className="text-cyan-700 font-bold">✓</span><span>佐賀牛ステーキやすき焼き・地元郷土料理を取り揃えた老舗レストラン</span></li>
                    </ul>
                  </div>
                </div>

                <div className="bg-amber-50/70 border border-amber-200/60 rounded-xl p-3 text-xs text-stone-700">
                  <span className="font-bold text-amber-900 mr-1">宿泊者の声：</span>
                  <span>{"「スタッフの丁寧な対応と綺麗な部屋に満足急遽泊まることにしたので、外食のお店を聞いたら、自分の要望に合う美味しいお店を紹介頂けました。スタッフの皆さんも丁寧で嬉しかったです。知人からオススメ。」"}</span>
                </div>

                <div className="pt-2 flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-t border-stone-100">
                  <div className="text-xs text-stone-500">
                    <span className="block text-[11px] text-stone-400">参考料金（1名）</span>
                    <span className="text-stone-800 font-bold text-sm sm:text-base">税込 5,200円〜</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <a
                      href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F5830%2F5830.html"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-cyan-800 hover:bg-cyan-900 text-white font-bold text-xs sm:text-sm px-5 py-2.5 rounded-xl transition-colors flex items-center gap-1.5 shadow-sm"
                    >
                      <span>楽天トラベルで空室・プランを見る</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ふるさと納税セクション */}
        <section className="max-w-4xl mx-auto px-4 mb-12">
          <div className="bg-gradient-to-br from-amber-500/10 via-amber-500/5 to-transparent rounded-2xl p-6 sm:p-8 border border-amber-500/20 shadow-sm flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="space-y-2 text-center md:text-left">
              <span className="bg-amber-600 text-white text-[10px] font-bold px-2 py-0.5 rounded-full uppercase">
                Furusato Tax
              </span>
              <h3 className="text-lg sm:text-xl font-bold text-stone-900">
                楽天ふるさと納税で実質2,000円！お得に泊まる賢い旅行術
              </h3>
              <p className="text-xs sm:text-sm text-stone-600 max-w-xl leading-relaxed">
                旅行先の自治体へ寄付することで、最大30%相当の楽天トラベル宿泊クーポンが返礼品として付与されます。予約済みの日程にも「あとから割引」で適用可能！
              </p>
            </div>
            <a
              href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2Fspecial%2Ffurusato%2F"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-amber-600 hover:bg-amber-700 text-white font-bold text-xs sm:text-sm px-6 py-3 rounded-xl flex items-center gap-2 flex-shrink-0 transition-colors shadow-md shadow-amber-600/20"
            >
              <span>対象宿・クーポンを見る</span>
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>
        </section>

        {/* FAQセクション */}
        <section className="max-w-4xl mx-auto px-4 mb-14">
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <HelpCircle className="w-5 h-5 text-cyan-700" />
              <h2 className="text-lg sm:text-xl font-bold text-stone-900">
                冬の佐賀・吉野ヶ里・古湯旅行 よくある質問（FAQ）
              </h2>
            </div>
            <div className="space-y-3">
            <div className="bg-white rounded-xl p-5 border border-stone-200/80 space-y-2">
              <h3 className="font-bold text-stone-900 text-sm sm:text-base flex items-start gap-2">
                <span className="text-cyan-800 font-black">Q.</span>
                <span>吉野ヶ里歴史公園「光の響」の開催時期と熱気球を見るためのコツは？</span>
              </h3>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed pl-5">
                例年12月中旬〜下旬の土日を中心に開催されます（17:00〜21:00頃）。熱気球の夜間係留（ナイトグロー）は風の影響を受けやすいため、天候や風速の穏やかな日が最も美しく立ち上がります。点灯直後のトワイライト（マジックアワー）の時間帯から入場すると、夕景とキャンドル、熱気球の素晴らしいグラデーションを鑑賞できます。
              </p>
            </div>

            <div className="bg-white rounded-xl p-5 border border-stone-200/80 space-y-2">
              <h3 className="font-bold text-stone-900 text-sm sm:text-base flex items-start gap-2">
                <span className="text-cyan-800 font-black">Q.</span>
                <span>「古湯温泉」のぬる湯は冬でも寒くありませんか？</span>
              </h3>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed pl-5">
                古湯温泉の源泉温度は約38℃〜40℃前後で、人間の体温に非常に近い「ぬる湯」です。最初はぬるく感じられますが、アルカリ性単純温泉の成分がじっくりと皮膚に浸透し、30分以上浸かることで血管が拡張して身体の芯からポカポカと温まり、湯冷めしにくいのが大きな特徴です。多くの宿では加温したあつ湯の浴槽も併設されているため交互浴も楽しめます。
              </p>
            </div>

            <div className="bg-white rounded-xl p-5 border border-stone-200/80 space-y-2">
              <h3 className="font-bold text-stone-900 text-sm sm:text-base flex items-start gap-2">
                <span className="text-cyan-800 font-black">Q.</span>
                <span>佐賀市内で本場の佐賀牛や初摘み海苔をお土産に購入できるスポットは？</span>
              </h3>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed pl-5">
                佐賀駅直結の「えきマチ1丁目」や佐賀城近くの「佐賀工房」、道の駅「吉野ヶ里」で初摘み海苔の最高級品を購入できます。また、佐賀牛はJAさが直営の「佐賀牛レストラン季楽」や専門精肉店でギフト発送が可能です。
              </p>
            </div>
            </div>
          </div>
        </section>

        {/* 内部リンク・関連回遊ナビゲーション */}
        <section className="max-w-4xl mx-auto px-4">
          <div className="bg-white rounded-2xl p-6 border border-stone-200 space-y-4">
            <h3 className="text-sm font-bold text-stone-900 border-b border-stone-100 pb-2">
              あわせて読みたい関連旅行ガイド
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
              <Link
                href="/prefectures/saga"
                className="p-3 rounded-xl bg-stone-50 hover:bg-cyan-50 hover:text-cyan-800 transition-colors flex items-center justify-between font-medium text-stone-700 border border-stone-200/60"
              >
                <span>佐賀県のおすすめ温泉宿・ホテル一覧</span>
                <ChevronRight className="w-4 h-4 text-stone-400" />
              </Link>
              <Link
                href="/features"
                className="p-3 rounded-xl bg-stone-50 hover:bg-cyan-50 hover:text-cyan-800 transition-colors flex items-center justify-between font-medium text-stone-700 border border-stone-200/60"
              >
                <span>全国の季節・目的別厳選特集一覧</span>
                <ChevronRight className="w-4 h-4 text-stone-400" />
              </Link>
              <Link
                href="/furusato-tax-luxury-hotspring-ryokan-stay"
                className="p-3 rounded-xl bg-stone-50 hover:bg-cyan-50 hover:text-cyan-800 transition-colors flex items-center justify-between font-medium text-stone-700 border border-stone-200/60"
              >
                <span>実質2,000円で泊まる高級温泉旅館ガイド</span>
                <ChevronRight className="w-4 h-4 text-stone-400" />
              </Link>
              <Link
                href="/furusato-tax-local-gourmet-inn-stay"
                className="p-3 rounded-xl bg-stone-50 hover:bg-cyan-50 hover:text-cyan-800 transition-colors flex items-center justify-between font-medium text-stone-700 border border-stone-200/60"
              >
                <span>ご当地グルメを堪能する全国美食旅特集</span>
                <ChevronRight className="w-4 h-4 text-stone-400" />
              </Link>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
