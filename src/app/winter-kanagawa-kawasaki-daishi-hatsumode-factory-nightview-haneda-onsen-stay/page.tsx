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
  title: '初詣300万人の厄除け霊場・川崎大師と幻想の工場夜景：2026-2027年冬の神奈川・川崎＆羽田！黒湯天然温泉と特選牛名宿5選 | 旅行キュレーション',
  description: '全国有数の初詣参拝者を誇る厄除け大本山「川崎大師（平間寺）」新春初詣！冬の澄んだ夜空に浮かび上がる「川崎工場夜景クルーズ」と羽田空港を望む展望天然温泉、名物久寿餅と上質ディナーを満喫する冬の厳選名宿5選。',
  keywords: ['川崎・羽田・京浜', '冬旅行', '新春初詣', '温泉', '名宿', '神奈川県観光', '楽天トラベル', 'ふるさと納税'],
  openGraph: {
    title: '初詣300万人の厄除け霊場・川崎大師と幻想の工場夜景：2026-2027年冬の神奈川・川崎＆羽田！黒湯天然温泉と特選牛名宿5選',
    description: '全国有数の初詣参拝者を誇る厄除け大本山「川崎大師（平間寺）」新春初詣！冬の澄んだ夜空に浮かび上がる「川崎工場夜景クルーズ」と羽田空港を望む展望天然温泉、名物久寿餅と上質ディナーを満喫する冬の厳選名宿5選。',
    images: ['https://thumb.wikimedia.org/wikipedia/commons/thumb/8/88/Kawasaki_Daishi_-_2024_Oct_1_various_19_07_54_558000.jpeg/1280px-Kawasaki_Daishi_-_2024_Oct_1_various_19_07_54_558000.jpeg?utm_source=ja.wikipedia.org&utm_campaign=api&utm_content=thumbnail'],
    type: 'article',
  },
};

export default function Page() {
  const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      "headline": "【初詣300万人の厄除け霊場・川崎大師と幻想の工場夜景】2026-2027年冬の神奈川・川崎＆羽田！黒湯天然温泉と特選牛名宿5選",
      "description": "全国有数の初詣参拝者を誇る厄除け大本山「川崎大師（平間寺）」新春初詣！冬の澄んだ夜空に浮かび上がる「川崎工場夜景クルーズ」と羽田空港を望む展望天然温泉、名物久寿餅と上質ディナーを満喫する冬の厳選名宿5選。",
      "image": [
        "https://thumb.wikimedia.org/wikipedia/commons/thumb/8/88/Kawasaki_Daishi_-_2024_Oct_1_various_19_07_54_558000.jpeg/1280px-Kawasaki_Daishi_-_2024_Oct_1_various_19_07_54_558000.jpeg?utm_source=ja.wikipedia.org&utm_campaign=api&utm_content=thumbnail",
        "https://img.travel.rakuten.co.jp/share/HOTEL/177946/177946.jpg"
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
            "name": "ホテルメトロポリタン川崎",
            "description": "JR川崎駅西口から屋根付きデッキ直結という抜群の利便性を誇るハイクラス・シティホテル。「出会いと物語が始まる場所」をコンセプトに、音楽のまち川崎にふさわしいレコードやアートが配された洗練された空間が広がります。すべての客室に独立した洗い場付きバスルームとシモンズ製特注ベッドが備わり、都会の喧騒を忘れさせるプライベートな安らぎを提供。レストランではオープンキッチンから出来立てが運ばれるグリル料理や神奈川県産野菜の朝食ビュッフェが楽しめ、川崎大師への新春初詣と工場夜景鑑賞を優雅に楽しむ最高峰の拠点です。",
            "image": "https://img.travel.rakuten.co.jp/share/HOTEL/177946/177946.jpg",
            "address": {
              "@type": "PostalAddress",
              "addressRegion": "神奈川県",
              "streetAddress": "神奈川県 川崎市幸区大宮町1-5"
            },
            "aggregateRating": {
              "@type": "AggregateRating",
              "ratingValue": "4.64",
              "reviewCount": "591"
            },
            "priceRange": "¥9,060〜"
          }
        },
        {
          "@type": "ListItem",
          "position": 2,
          "item": {
            "@type": "Hotel",
            "name": "天然温泉　扇浜の湯　ドーミーイン川崎（ドーミーイン・御宿野乃　ホテルズグループ）",
            "description": "川崎の中心街に位置し、最上階の15階に本格的な自家源泉の天然温泉大浴場を備えた大人気ホテル。地下から湧き出る温泉は漆黒の「黒湯」で、肌をなめらかに整える重曹泉。澄んだ冬空を仰ぐ展望露天風呂や、オートロウリュサウナで極上のととのいを体験できます。お風呂上がりにはアイスや乳酸菌飲料の無料サービス、夜遅くにはお馴染みの「夜鳴きそば（醤油ラーメン）」の振る舞いも。朝食にはいくらや海鮮を好きなだけ盛り付けられる海鮮丼が並び、温泉好き・サウナ好きにはたまらない滞在を約束します。",
            "image": "https://img.travel.rakuten.co.jp/share/HOTEL/176996/176996.jpg",
            "address": {
              "@type": "PostalAddress",
              "addressRegion": "神奈川県",
              "streetAddress": "神奈川県 川崎市川崎区東田町9-3"
            },
            "aggregateRating": {
              "@type": "AggregateRating",
              "ratingValue": "4.54",
              "reviewCount": "2281"
            },
            "priceRange": "¥6,825〜"
          }
        },
        {
          "@type": "ListItem",
          "position": 3,
          "item": {
            "@type": "Hotel",
            "name": "川崎日航ホテル",
            "description": "JR川崎駅東口の目の前にそびえ立ち、長年多くの旅人やビジネス客に愛され続けてきた格式ある老舗ホテル。地下街アゼリアと直結しているため、冬の寒風に晒されることなくスムーズに移動できます。客室は高層階に位置し、夜には京浜工業地帯や東京湾方面のきらびやかな夜景を一望。ホテルオークラグループの確かな技術を受け継ぐレストランでは、季節の厳選素材を活かした西洋料理や和食が楽しめ、初詣や夜景ツアーの後にゆったりと寛ぐ安心感あふれるひとときを提供します。",
            "image": "https://img.travel.rakuten.co.jp/share/HOTEL/2056/2056.jpg",
            "address": {
              "@type": "PostalAddress",
              "addressRegion": "神奈川県",
              "streetAddress": "神奈川県 川崎市川崎区日進町１"
            },
            "aggregateRating": {
              "@type": "AggregateRating",
              "ratingValue": "4.35",
              "reviewCount": "4152"
            },
            "priceRange": "¥6,400〜"
          }
        },
        {
          "@type": "ListItem",
          "position": 4,
          "item": {
            "@type": "Hotel",
            "name": "ホテル縁道",
            "description": "東海道五十三次の宿場町「川崎宿」の歴史を現代の感性で再解釈した、ユニークで温かみあふれるコンセプトホテル。館内には旅人と地元の人々の「縁」をつなぐ仕掛けが随所に散りばめられ、シンプルながら質感の高い木を基調とした客室が心地よい寛ぎをもたらします。1階のレストラン「縁道食堂」では、香ばしい炭火焼き料理や地元神奈川の銘酒、クラフトビールが楽しめ、チェーンホテルにはない温かなストーリーを感じながら冬の川崎滞在を深く楽しむことができます。",
            "image": "https://img.travel.rakuten.co.jp/share/HOTEL/179577/179577.jpg",
            "address": {
              "@type": "PostalAddress",
              "addressRegion": "神奈川県",
              "streetAddress": "神奈川県 川崎市川崎区宮本町2-25"
            },
            "aggregateRating": {
              "@type": "AggregateRating",
              "ratingValue": "4.32",
              "reviewCount": "1300"
            },
            "priceRange": "¥5,350〜"
          }
        },
        {
          "@type": "ListItem",
          "position": 5,
          "item": {
            "@type": "Hotel",
            "name": "相鉄フレッサイン　川崎駅東口",
            "description": "川崎駅東口の賑やかな繁華街のほど近くにあり、観光にもビジネスにも抜群のフットワークを誇るスタイリッシュなホテル。全室に導入されたシモンズ製高級ベッドが上質な眠りをサポートし、冬の乾燥する季節に嬉しい全室加湿機能付き空気清浄機を完備。フロント前のアメニティバーには豊富なスキンケア用品や入浴剤が用意されており、手ぶらでも快適に宿泊できます。京急大師線への乗り換えも至近で、川崎大師への早朝参拝にも最適なフットワークを誇ります。",
            "image": "https://img.travel.rakuten.co.jp/share/HOTEL/51214/51214.jpg",
            "address": {
              "@type": "PostalAddress",
              "addressRegion": "神奈川県",
              "streetAddress": "神奈川県 川崎市川崎区砂子2-11-17"
            },
            "aggregateRating": {
              "@type": "AggregateRating",
              "ratingValue": "4.21",
              "reviewCount": "3657"
            },
            "priceRange": "¥6,075〜"
          }
        }
      ]
    },
    {
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "川崎大師の初詣で混雑を避けるためのおすすめ時間帯や日程は？",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "元旦の深夜（除夜の鐘直後）や正月三が日の日中（10:00〜15:00）は大本堂前の入場規制がかかるほど混雑します。ゆっくり参拝したい場合は、早朝（朝6:00〜8:30）または夕方（16:30以降）の参拝が狙い目です。また、1月4日以降の平日や、1月20日・21日の「初大師（縁日）」の午前中も比較的スムーズにお参りできます。"
          }
        },
        {
          "@type": "Question",
          "name": "川崎の工場夜景を効率よく鑑賞する方法は？",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "川崎駅から定期運行されている「川崎工場夜景屋形船クルーズ」や「はとバス工場夜景ツアー」を利用するのが最も手軽で安全です。マイカーの場合は千鳥町の日本触媒前や浮島町、川崎マリエン展望室（入場無料・夜間開放）が定番の名所。夜間は大型車両の往来が多いため、安全に十分配慮して鑑賞してください。"
          }
        },
        {
          "@type": "Question",
          "name": "川崎大師名物の「久寿餅」と「葛餅」の違いは何ですか？",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "川崎大師の「久寿餅（くずもち）」は、マメ科の葛粉を使う関西の葛餅とは異なり、小麦粉のデンプンを1年以上じっくり乳酸発酵させて蒸し上げた関東特有の発酵和菓子です。モチモチとした独特の弾力とほのかな酸味、香ばしいきな粉と濃厚な黒蜜のハーモニーが絶妙で、無添加の身体に優しい名物です。"
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
              <Link href="/prefectures/kanagawa" className="hover:text-white transition-colors">神奈川県</Link>
              <ChevronRight className="w-3.5 h-3.5 text-stone-500" />
              <span className="text-cyan-400 font-medium">川崎・羽田・京浜</span>
            </div>

            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-900/60 border border-cyan-700/50 text-cyan-300 text-xs font-semibold">
              <Sparkles className="w-3.5 h-3.5" />
              <span>2026-2027年冬（11月・12月・1月）最新厳選ガイド</span>
            </div>

            <h1 className="text-2xl sm:text-3xl md:text-4xl font-black tracking-tight leading-tight text-white">「初詣300万人の厄除け霊場・川崎大師と幻想の工場夜景」2026-2027年冬の神奈川・川崎＆羽田！黒湯天然温泉と特選牛名宿5選</h1>

            <p className="text-sm sm:text-base text-stone-300 leading-relaxed max-w-3xl pt-2">
              全国有数の初詣参拝者を誇る厄除け大本山「川崎大師（平間寺）」新春初詣！冬の澄んだ夜空に浮かび上がる「川崎工場夜景クルーズ」と羽田空港を望む展望天然温泉、名物久寿餅と上質ディナーを満喫する冬の厳選名宿5選。
            </p>
          </div>
        </header>

        {/* リード文セクション */}
        <section className="max-w-4xl mx-auto px-4 -mt-10 relative z-10 mb-12">
          <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-sm border border-stone-200/80 space-y-4">
            <div className="flex items-center gap-2 text-cyan-900 font-bold text-sm sm:text-base border-b border-stone-100 pb-2">
              <Compass className="w-5 h-5 text-cyan-700" />
              <span>冬の川崎・羽田・京浜探訪：静寂と温もりに包まれる旅の魅力</span>
            </div>
            <p className="text-xs sm:text-sm text-stone-700 leading-relaxed">
              多摩川を挟んで東京都心と隣接し、京浜工業地帯の力強い鼓動と古き良き門前町の情緒が交錯する神奈川県川崎市。冬の訪れとともにこの街が最も輝きを放つのが、正月三が日に約300万人もの参拝客を迎える「川崎大師（金剛山金乗院平間寺）」の新春厄除け初詣です。平安末期の大治3年（1128年）開創と伝わる平間寺は、弘法大師空海を祀る真言宗智山派の大本山。「厄除けのお大師さま」として全国から篤い信仰を集め、荘厳な大本堂で焚かれる護摩祈祷の炎と立ち込める香煙は、新年の災厄を祓い福を招く圧倒的な霊気に満ちています。参道に連なる仲見世通りからは、リズミカルに飴を切る「トントン」という音が響き、名物の久寿餅（くずもち）や厄除けダルマが新春の活気を彩ります。そして冬の夜、冷たく澄み切った大気の中に浮かび上がるのが、SF映画の近未来都市のような「川崎工場夜景」。京浜運河を巡るクルーズ船から望む白銀のコンビナート照明は、冬こそが一番美しいドラマチックな光の芸術です。参拝後は多摩川越しに富士山や羽田空港の飛行機を望む展望天然温泉で温まり、厳選黒毛和牛や東京湾の海の幸を堪能する、大人の冬のショートトリップをご提案します。
            </p>
          </div>
        </section>

        {/* なぜ冬に訪れるべきかの3ポイント */}
        <section className="max-w-4xl mx-auto px-4 mb-14 space-y-4">
          <div className="border-l-4 border-cyan-800 pl-3">
            <h2 className="text-xl sm:text-2xl font-bold text-stone-900">
              この冬、川崎・羽田・京浜を訪れるべき3つの理由
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
                  全国屈指の参拝者数300万人！厄除け大本山「川崎大師」の大本堂大護摩祈祷
                </h3>
              </div>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed pl-8">
                成田山新勝寺・高尾山薬王院と並ぶ真言宗智山派の関東三大本山。大本堂で厳修される護摩祈祷では、太鼓の響きとともに燃え盛る護摩の炎にお札をかざし、一年の厄難消除と開運を祈願します。仲見世通りの活気と名物久寿餅の素朴な甘みが新春の参拝を華やかに彩ります。
              </p>
            </div>

            <div className="bg-white rounded-2xl p-5 sm:p-6 border border-stone-200/80 shadow-sm space-y-2">
              <div className="flex items-center gap-2">
                <span className="w-6 h-6 rounded-full bg-cyan-800 text-white text-xs font-bold flex items-center justify-center flex-shrink-0">
                  2
                </span>
                <h3 className="text-base sm:text-lg font-bold text-stone-900">
                  冬の澄んだ夜空に煌めく光の要塞！幻想の「川崎工場夜景」と京浜運河クルーズ
                </h3>
              </div>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed pl-8">
                冬期は湿度が低く空気が極めて澄み渡るため、プラントのメタリックな輝きや煙突から揺らめく水蒸気が息を呑むほど鮮明に輝きます。運河を行く夜景クルーズや千鳥町・水江町のビュースポットから眺める景色は、まるで未来都市に迷い込んだかのような幻想的な美しさです。
              </p>
            </div>

            <div className="bg-white rounded-2xl p-5 sm:p-6 border border-stone-200/80 shadow-sm space-y-2">
              <div className="flex items-center gap-2">
                <span className="w-6 h-6 rounded-full bg-cyan-800 text-white text-xs font-bold flex items-center justify-center flex-shrink-0">
                  3
                </span>
                <h3 className="text-base sm:text-lg font-bold text-stone-900">
                  漆黒の美肌湯「黒湯天然温泉」と羽田空港・多摩川のリバーサイド絶景ステイ
                </h3>
              </div>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed pl-8">
                川崎・京浜エリアの地下には、太古の植物成分が溶け込んだ琥珀色〜漆黒の「黒湯天然温泉」が豊かに湧出。保温効果が極めて高く、冷えた身体を芯からポカポカに温めてくれます。空港の滑走路を離着陸する航空機の灯りを眺めながら寛ぐ贅沢な夜が待っています。
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
・電車・京急・JR：JR東海道線・京浜東北線・南武線「川崎駅」、京急本線「京急川崎駅」下車。川崎大師へは京急大師線に乗り換えて約5分の「川崎大師駅」より徒歩約8分。品川駅から川崎駅までJR東海道線で約9分、羽田空港第3ターミナル駅から京急空港線・本線で京急川崎駅まで約15分。
・車・マイカー：首都高速横羽線「大師IC」より川崎大師まで約3分、首都高速湾岸線「東扇島IC」より川崎臨海部・工場夜景エリアまで約10分。都心（銀座）から約25分。
・羽田空港方面へのアクセス：川崎駅前・キングスカイフロントから羽田空港第3ターミナルへは多摩川スカイブリッジ（歩道・車道）経由で車で約10分。

【見頃・気候・おすすめの服装】
・ベストシーズン：12月上旬〜1月下旬（川崎大師新春厄除け初詣、冬の工場夜景のベストシーズン、冬の澄んだ夜空）。
・気温の目安：東京湾沿岸部に位置するため極端な積雪は稀ですが、冬の海風や多摩川からの川風が冷たく、夜間の体感温度は3〜5℃前後まで下がります。日中は9〜13℃前後。
・服装のポイント：川崎大師の境内や工場夜景クルーズのデッキ上は風を直接受けるため、防風・防寒性の高いロングコートやダウン、マフラー、手袋、カイロの持参を強く推奨します。境内散策に適した歩きやすい靴でお越しください。
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
                  src="https://thumb.wikimedia.org/wikipedia/commons/thumb/8/88/Kawasaki_Daishi_-_2024_Oct_1_various_19_07_54_558000.jpeg/1280px-Kawasaki_Daishi_-_2024_Oct_1_various_19_07_54_558000.jpeg?utm_source=ja.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
                  alt="厄除弘法大師・金剛山金乗院平間寺（川崎大師・新春初詣300万人の大本山）"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
              <div className="md:col-span-7 space-y-3">
                <div>
                  <span className="text-[11px] text-cyan-300 font-mono">Spot Spotlight</span>
                  <h3 className="text-lg sm:text-xl font-bold text-white">
                    厄除弘法大師・金剛山金乗院平間寺（川崎大師・新春初詣300万人の大本山）
                  </h3>
                  <p className="text-xs text-stone-300 leading-relaxed mt-2">
                    平間寺（へいけんじ）は、神奈川県川崎市川崎区にある、真言宗智山派の大本山。1128年（大治3年）建立。川崎大師（かわさきだいし）という通称で知られる。山号は金剛山。院号は金乗院（きんじょういん）。尊賢（そんけん）を開山、平間兼乗（ひらまかねのり）を開基とする。2022年（令和4年）時点の貫首は第45世・中興第2世藤田隆乗が務める。
                  </p>
                </div>
                <div className="text-[11px] text-stone-400 pt-2 border-t border-stone-700 flex items-center justify-between">
                  <span>出典：ウィキペディア（Wikipedia）公式情報</span>
                  <a
                    href="https://ja.wikipedia.org/wiki/平間寺"
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
              川崎・羽田・京浜 厳選の温泉＆名宿5選
            </h2>
            <p className="text-xs sm:text-sm text-stone-500 pt-0.5">
              楽天トラベルの最新実データより厳選。料理・温泉・立地に秀でた極上宿
            </p>
          </div>

          <div className="space-y-6">
            {/* 宿1: ホテルメトロポリタン川崎 */}
            <div className="bg-white rounded-2xl border border-stone-200/80 shadow-sm overflow-hidden hover:shadow-md transition-shadow">
              <div className="p-5 sm:p-6 space-y-4">
                <div className="flex flex-wrap items-center justify-between gap-2 border-b border-stone-100 pb-3">
                  <span className="bg-cyan-800 text-white text-[11px] font-bold px-2.5 py-0.5 rounded-full">
                    厳選名宿 1
                  </span>
                  <div className="flex items-center gap-1 text-amber-500 font-bold text-sm">
                    <Star className="w-4 h-4 fill-current" />
                    <span>4.64</span>
                    <span className="text-stone-400 text-xs font-normal">（591件）</span>
                  </div>
                </div>

                <div>
                  <h3 className="text-lg sm:text-xl font-bold text-stone-900 leading-snug">
                    ホテルメトロポリタン川崎
                  </h3>
                  <p className="text-xs sm:text-sm text-cyan-800 font-medium mt-1">
                    JR川崎駅直結のラグジュアリーホテル・音楽とアートが彩る贅沢ステイ
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-center">
                  <div className="md:col-span-5 relative h-48 sm:h-52 rounded-xl overflow-hidden bg-stone-100">
                    <img
                      src="https://img.travel.rakuten.co.jp/share/HOTEL/177946/177946.jpg"
                      alt="ホテルメトロポリタン川崎"
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                  </div>
                  <div className="md:col-span-7 space-y-3">
                    <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                      JR川崎駅西口から屋根付きデッキ直結という抜群の利便性を誇るハイクラス・シティホテル。「出会いと物語が始まる場所」をコンセプトに、音楽のまち川崎にふさわしいレコードやアートが配された洗練された空間が広がります。すべての客室に独立した洗い場付きバスルームとシモンズ製特注ベッドが備わり、都会の喧騒を忘れさせるプライベートな安らぎを提供。レストランではオープンキッチンから出来立てが運ばれるグリル料理や神奈川県産野菜の朝食ビュッフェが楽しめ、川崎大師への新春初詣と工場夜景鑑賞を優雅に楽しむ最高峰の拠点です。
                    </p>
                    <ul className="text-xs text-stone-700 space-y-1 bg-stone-50 p-3 rounded-xl border border-stone-100">
                      <li className="flex items-start gap-1.5"><span className="text-cyan-700 font-bold">✓</span><span>JR川崎駅西口徒歩1分！駅前ペデストリアンデッキ直結の抜群の立地</span></li><li className="flex items-start gap-1.5"><span className="text-cyan-700 font-bold">✓</span><span>全室洗い場付きバスルーム完備の上質でモダンなデザイナーズ客室</span></li><li className="flex items-start gap-1.5"><span className="text-cyan-700 font-bold">✓</span><span>地元神奈川の厳選食材とシェフ特製の本格グリルディナー＆朝食ブッフェ</span></li>
                    </ul>
                  </div>
                </div>

                <div className="bg-amber-50/70 border border-amber-200/60 rounded-xl p-3 text-xs text-stone-700">
                  <span className="font-bold text-amber-900 mr-1">宿泊者の声：</span>
                  <span>{"「川崎駅直結で綺麗、コスパも抜群の拠点新しいホテルで部屋も綺麗で清潔に保たれています。ビジネス、観光の拠点としても川崎駅直結なので大変便利です。価格も都内、横浜市内と比較してもコスパが良いと思います。」"}</span>
                </div>

                <div className="pt-2 flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-t border-stone-100">
                  <div className="text-xs text-stone-500">
                    <span className="block text-[11px] text-stone-400">参考料金（1名）</span>
                    <span className="text-stone-800 font-bold text-sm sm:text-base">税込 9,060円〜</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <a
                      href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F177946%2F177946.html"
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

            {/* 宿2: 天然温泉　扇浜の湯　ドーミーイン川崎（ドーミーイン・御宿野乃　ホテルズグループ） */}
            <div className="bg-white rounded-2xl border border-stone-200/80 shadow-sm overflow-hidden hover:shadow-md transition-shadow">
              <div className="p-5 sm:p-6 space-y-4">
                <div className="flex flex-wrap items-center justify-between gap-2 border-b border-stone-100 pb-3">
                  <span className="bg-cyan-800 text-white text-[11px] font-bold px-2.5 py-0.5 rounded-full">
                    厳選名宿 2
                  </span>
                  <div className="flex items-center gap-1 text-amber-500 font-bold text-sm">
                    <Star className="w-4 h-4 fill-current" />
                    <span>4.54</span>
                    <span className="text-stone-400 text-xs font-normal">（2281件）</span>
                  </div>
                </div>

                <div>
                  <h3 className="text-lg sm:text-xl font-bold text-stone-900 leading-snug">
                    天然温泉　扇浜の湯　ドーミーイン川崎（ドーミーイン・御宿野乃　ホテルズグループ）
                  </h3>
                  <p className="text-xs sm:text-sm text-cyan-800 font-medium mt-1">
                    最上階に自家源泉の黒湯天然温泉とオートロウリュサウナ・夜鳴きそば
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-center">
                  <div className="md:col-span-5 relative h-48 sm:h-52 rounded-xl overflow-hidden bg-stone-100">
                    <img
                      src="https://img.travel.rakuten.co.jp/share/HOTEL/176996/176996.jpg"
                      alt="天然温泉　扇浜の湯　ドーミーイン川崎（ドーミーイン・御宿野乃　ホテルズグループ）"
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                  </div>
                  <div className="md:col-span-7 space-y-3">
                    <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                      川崎の中心街に位置し、最上階の15階に本格的な自家源泉の天然温泉大浴場を備えた大人気ホテル。地下から湧き出る温泉は漆黒の「黒湯」で、肌をなめらかに整える重曹泉。澄んだ冬空を仰ぐ展望露天風呂や、オートロウリュサウナで極上のととのいを体験できます。お風呂上がりにはアイスや乳酸菌飲料の無料サービス、夜遅くにはお馴染みの「夜鳴きそば（醤油ラーメン）」の振る舞いも。朝食にはいくらや海鮮を好きなだけ盛り付けられる海鮮丼が並び、温泉好き・サウナ好きにはたまらない滞在を約束します。
                    </p>
                    <ul className="text-xs text-stone-700 space-y-1 bg-stone-50 p-3 rounded-xl border border-stone-100">
                      <li className="flex items-start gap-1.5"><span className="text-cyan-700 font-bold">✓</span><span>最上階15階に男女別自家源泉「扇浜の湯」天然温泉大浴場＆展望露天風呂</span></li><li className="flex items-start gap-1.5"><span className="text-cyan-700 font-bold">✓</span><span>本格的な高温ドライサウナ・オートロウリュと水風呂・外気浴ととのいスペース</span></li><li className="flex items-start gap-1.5"><span className="text-cyan-700 font-bold">✓</span><span>名物「夜鳴きそば」の無料サービスといくら盛り放題の豪華朝食バイキング</span></li>
                    </ul>
                  </div>
                </div>

                <div className="bg-amber-50/70 border border-amber-200/60 rounded-xl p-3 text-xs text-stone-700">
                  <span className="font-bold text-amber-900 mr-1">宿泊者の声：</span>
                  <span>{"「ドーミーイン好きですが。ドーミーインが好きなので良く利用しています。スタッフの方々は、テキパキと動かれており。」"}</span>
                </div>

                <div className="pt-2 flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-t border-stone-100">
                  <div className="text-xs text-stone-500">
                    <span className="block text-[11px] text-stone-400">参考料金（1名）</span>
                    <span className="text-stone-800 font-bold text-sm sm:text-base">税込 6,825円〜</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <a
                      href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F176996%2F176996.html"
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

            {/* 宿3: 川崎日航ホテル */}
            <div className="bg-white rounded-2xl border border-stone-200/80 shadow-sm overflow-hidden hover:shadow-md transition-shadow">
              <div className="p-5 sm:p-6 space-y-4">
                <div className="flex flex-wrap items-center justify-between gap-2 border-b border-stone-100 pb-3">
                  <span className="bg-cyan-800 text-white text-[11px] font-bold px-2.5 py-0.5 rounded-full">
                    厳選名宿 3
                  </span>
                  <div className="flex items-center gap-1 text-amber-500 font-bold text-sm">
                    <Star className="w-4 h-4 fill-current" />
                    <span>4.35</span>
                    <span className="text-stone-400 text-xs font-normal">（4152件）</span>
                  </div>
                </div>

                <div>
                  <h3 className="text-lg sm:text-xl font-bold text-stone-900 leading-snug">
                    川崎日航ホテル
                  </h3>
                  <p className="text-xs sm:text-sm text-cyan-800 font-medium mt-1">
                    川崎駅直結の伝統ホテル・高層階からの夜景と老舗ならではの真心
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-center">
                  <div className="md:col-span-5 relative h-48 sm:h-52 rounded-xl overflow-hidden bg-stone-100">
                    <img
                      src="https://img.travel.rakuten.co.jp/share/HOTEL/2056/2056.jpg"
                      alt="川崎日航ホテル"
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                  </div>
                  <div className="md:col-span-7 space-y-3">
                    <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                      JR川崎駅東口の目の前にそびえ立ち、長年多くの旅人やビジネス客に愛され続けてきた格式ある老舗ホテル。地下街アゼリアと直結しているため、冬の寒風に晒されることなくスムーズに移動できます。客室は高層階に位置し、夜には京浜工業地帯や東京湾方面のきらびやかな夜景を一望。ホテルオークラグループの確かな技術を受け継ぐレストランでは、季節の厳選素材を活かした西洋料理や和食が楽しめ、初詣や夜景ツアーの後にゆったりと寛ぐ安心感あふれるひとときを提供します。
                    </p>
                    <ul className="text-xs text-stone-700 space-y-1 bg-stone-50 p-3 rounded-xl border border-stone-100">
                      <li className="flex items-start gap-1.5"><span className="text-cyan-700 font-bold">✓</span><span>JR川崎駅東口直結！地下街アゼリア直結で雨や寒風に濡れずにチェックイン</span></li><li className="flex items-start gap-1.5"><span className="text-cyan-700 font-bold">✓</span><span>高層階客室から望む川崎のダイナミックな街並みと遠く東京湾の夜景</span></li><li className="flex items-start gap-1.5"><span className="text-cyan-700 font-bold">✓</span><span>伝統のホテルオークラグループが誇る安心のホスピタリティと上質レストラン</span></li>
                    </ul>
                  </div>
                </div>

                <div className="bg-amber-50/70 border border-amber-200/60 rounded-xl p-3 text-xs text-stone-700">
                  <span className="font-bold text-amber-900 mr-1">宿泊者の声：</span>
                  <span>{"「リニューアルされた清潔な部屋と高層階の景色3連休初日の土曜日に急遽宿泊が必要になり、夕方の予約の上利用させて頂きました。チェックイン時刻に間に合いそうになく、連絡をした際にもとても丁寧に対応頂。」"}</span>
                </div>

                <div className="pt-2 flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-t border-stone-100">
                  <div className="text-xs text-stone-500">
                    <span className="block text-[11px] text-stone-400">参考料金（1名）</span>
                    <span className="text-stone-800 font-bold text-sm sm:text-base">税込 6,400円〜</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <a
                      href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F2056%2F2056.html"
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

            {/* 宿4: ホテル縁道 */}
            <div className="bg-white rounded-2xl border border-stone-200/80 shadow-sm overflow-hidden hover:shadow-md transition-shadow">
              <div className="p-5 sm:p-6 space-y-4">
                <div className="flex flex-wrap items-center justify-between gap-2 border-b border-stone-100 pb-3">
                  <span className="bg-cyan-800 text-white text-[11px] font-bold px-2.5 py-0.5 rounded-full">
                    厳選名宿 4
                  </span>
                  <div className="flex items-center gap-1 text-amber-500 font-bold text-sm">
                    <Star className="w-4 h-4 fill-current" />
                    <span>4.32</span>
                    <span className="text-stone-400 text-xs font-normal">（1300件）</span>
                  </div>
                </div>

                <div>
                  <h3 className="text-lg sm:text-xl font-bold text-stone-900 leading-snug">
                    ホテル縁道
                  </h3>
                  <p className="text-xs sm:text-sm text-cyan-800 font-medium mt-1">
                    東海道川崎宿の歴史と縁を紡ぐ・和モダン空間と炭火焼きの美食
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-center">
                  <div className="md:col-span-5 relative h-48 sm:h-52 rounded-xl overflow-hidden bg-stone-100">
                    <img
                      src="https://img.travel.rakuten.co.jp/share/HOTEL/179577/179577.jpg"
                      alt="ホテル縁道"
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                  </div>
                  <div className="md:col-span-7 space-y-3">
                    <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                      東海道五十三次の宿場町「川崎宿」の歴史を現代の感性で再解釈した、ユニークで温かみあふれるコンセプトホテル。館内には旅人と地元の人々の「縁」をつなぐ仕掛けが随所に散りばめられ、シンプルながら質感の高い木を基調とした客室が心地よい寛ぎをもたらします。1階のレストラン「縁道食堂」では、香ばしい炭火焼き料理や地元神奈川の銘酒、クラフトビールが楽しめ、チェーンホテルにはない温かなストーリーを感じながら冬の川崎滞在を深く楽しむことができます。
                    </p>
                    <ul className="text-xs text-stone-700 space-y-1 bg-stone-50 p-3 rounded-xl border border-stone-100">
                      <li className="flex items-start gap-1.5"><span className="text-cyan-700 font-bold">✓</span><span>かつての東海道川崎宿の歴史を受け継ぐ新感覚のコミュニティホテル</span></li><li className="flex items-start gap-1.5"><span className="text-cyan-700 font-bold">✓</span><span>温もりある木と和の美意識が調和したスタイリッシュなデザイナーズ客室</span></li><li className="flex items-start gap-1.5"><span className="text-cyan-700 font-bold">✓</span><span>炭火で香ばしく焼き上げる地元旬食材の料理とクラフトビールの饗宴</span></li>
                    </ul>
                  </div>
                </div>

                <div className="bg-amber-50/70 border border-amber-200/60 rounded-xl p-3 text-xs text-stone-700">
                  <span className="font-bold text-amber-900 mr-1">宿泊者の声：</span>
                  <span>{"「部屋もお風呂もきれいで快適な空間部屋やお風呂がきれいで気持ちよく宿泊できました。」"}</span>
                </div>

                <div className="pt-2 flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-t border-stone-100">
                  <div className="text-xs text-stone-500">
                    <span className="block text-[11px] text-stone-400">参考料金（1名）</span>
                    <span className="text-stone-800 font-bold text-sm sm:text-base">税込 5,350円〜</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <a
                      href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F179577%2F179577.html"
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

            {/* 宿5: 相鉄フレッサイン　川崎駅東口 */}
            <div className="bg-white rounded-2xl border border-stone-200/80 shadow-sm overflow-hidden hover:shadow-md transition-shadow">
              <div className="p-5 sm:p-6 space-y-4">
                <div className="flex flex-wrap items-center justify-between gap-2 border-b border-stone-100 pb-3">
                  <span className="bg-cyan-800 text-white text-[11px] font-bold px-2.5 py-0.5 rounded-full">
                    厳選名宿 5
                  </span>
                  <div className="flex items-center gap-1 text-amber-500 font-bold text-sm">
                    <Star className="w-4 h-4 fill-current" />
                    <span>4.21</span>
                    <span className="text-stone-400 text-xs font-normal">（3657件）</span>
                  </div>
                </div>

                <div>
                  <h3 className="text-lg sm:text-xl font-bold text-stone-900 leading-snug">
                    相鉄フレッサイン　川崎駅東口
                  </h3>
                  <p className="text-xs sm:text-sm text-cyan-800 font-medium mt-1">
                    川崎駅東口徒歩5分！快適なシモンズベッドと充実のアメニティバー
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-center">
                  <div className="md:col-span-5 relative h-48 sm:h-52 rounded-xl overflow-hidden bg-stone-100">
                    <img
                      src="https://img.travel.rakuten.co.jp/share/HOTEL/51214/51214.jpg"
                      alt="相鉄フレッサイン　川崎駅東口"
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                  </div>
                  <div className="md:col-span-7 space-y-3">
                    <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                      川崎駅東口の賑やかな繁華街のほど近くにあり、観光にもビジネスにも抜群のフットワークを誇るスタイリッシュなホテル。全室に導入されたシモンズ製高級ベッドが上質な眠りをサポートし、冬の乾燥する季節に嬉しい全室加湿機能付き空気清浄機を完備。フロント前のアメニティバーには豊富なスキンケア用品や入浴剤が用意されており、手ぶらでも快適に宿泊できます。京急大師線への乗り換えも至近で、川崎大師への早朝参拝にも最適なフットワークを誇ります。
                    </p>
                    <ul className="text-xs text-stone-700 space-y-1 bg-stone-50 p-3 rounded-xl border border-stone-100">
                      <li className="flex items-start gap-1.5"><span className="text-cyan-700 font-bold">✓</span><span>JR川崎駅東口および京急川崎駅から徒歩5分の便利なロケーション</span></li><li className="flex items-start gap-1.5"><span className="text-cyan-700 font-bold">✓</span><span>全室にシモンズ社製ベッドと加湿空気清浄機を完備した快適空間</span></li><li className="flex items-start gap-1.5"><span className="text-cyan-700 font-bold">✓</span><span>フリーアメニティバーや充実した設備でストレスフリーな滞在</span></li>
                    </ul>
                  </div>
                </div>

                <div className="bg-amber-50/70 border border-amber-200/60 rounded-xl p-3 text-xs text-stone-700">
                  <span className="font-bold text-amber-900 mr-1">宿泊者の声：</span>
                  <span>{"「駅近で飲食店も多く、接客も素晴らしい駅から近く、コンビニ、飲食店も多数あり、また利用したいです。接客がとてもよかったです。」"}</span>
                </div>

                <div className="pt-2 flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-t border-stone-100">
                  <div className="text-xs text-stone-500">
                    <span className="block text-[11px] text-stone-400">参考料金（1名）</span>
                    <span className="text-stone-800 font-bold text-sm sm:text-base">税込 6,075円〜</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <a
                      href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F51214%2F51214.html"
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
                冬の川崎・羽田・京浜旅行 よくある質問（FAQ）
              </h2>
            </div>
            <div className="space-y-3">
            <div className="bg-white rounded-xl p-5 border border-stone-200/80 space-y-2">
              <h3 className="font-bold text-stone-900 text-sm sm:text-base flex items-start gap-2">
                <span className="text-cyan-800 font-black">Q.</span>
                <span>川崎大師の初詣で混雑を避けるためのおすすめ時間帯や日程は？</span>
              </h3>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed pl-5">
                元旦の深夜（除夜の鐘直後）や正月三が日の日中（10:00〜15:00）は大本堂前の入場規制がかかるほど混雑します。ゆっくり参拝したい場合は、早朝（朝6:00〜8:30）または夕方（16:30以降）の参拝が狙い目です。また、1月4日以降の平日や、1月20日・21日の「初大師（縁日）」の午前中も比較的スムーズにお参りできます。
              </p>
            </div>

            <div className="bg-white rounded-xl p-5 border border-stone-200/80 space-y-2">
              <h3 className="font-bold text-stone-900 text-sm sm:text-base flex items-start gap-2">
                <span className="text-cyan-800 font-black">Q.</span>
                <span>川崎の工場夜景を効率よく鑑賞する方法は？</span>
              </h3>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed pl-5">
                川崎駅から定期運行されている「川崎工場夜景屋形船クルーズ」や「はとバス工場夜景ツアー」を利用するのが最も手軽で安全です。マイカーの場合は千鳥町の日本触媒前や浮島町、川崎マリエン展望室（入場無料・夜間開放）が定番の名所。夜間は大型車両の往来が多いため、安全に十分配慮して鑑賞してください。
              </p>
            </div>

            <div className="bg-white rounded-xl p-5 border border-stone-200/80 space-y-2">
              <h3 className="font-bold text-stone-900 text-sm sm:text-base flex items-start gap-2">
                <span className="text-cyan-800 font-black">Q.</span>
                <span>川崎大師名物の「久寿餅」と「葛餅」の違いは何ですか？</span>
              </h3>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed pl-5">
                川崎大師の「久寿餅（くずもち）」は、マメ科の葛粉を使う関西の葛餅とは異なり、小麦粉のデンプンを1年以上じっくり乳酸発酵させて蒸し上げた関東特有の発酵和菓子です。モチモチとした独特の弾力とほのかな酸味、香ばしいきな粉と濃厚な黒蜜のハーモニーが絶妙で、無添加の身体に優しい名物です。
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
                href="/prefectures/kanagawa"
                className="p-3 rounded-xl bg-stone-50 hover:bg-cyan-50 hover:text-cyan-800 transition-colors flex items-center justify-between font-medium text-stone-700 border border-stone-200/60"
              >
                <span>神奈川県のおすすめ温泉宿・ホテル一覧</span>
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
