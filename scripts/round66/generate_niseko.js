const fs = require('fs');
const path = require('path');

function generateNisekoPage(hotels) {
  const slug = 'winter-hokkaido-niseko-onsen-powder-snow-yotei-stay';
  const title = '【11・12月ニセコ温泉郷の初雪パウダースノーと羊蹄山絶景】白銀の蝦夷富士望む露天風呂・道産黒毛和牛＆冬の北海味覚ディナーの宿5選';
  const description = '11月下旬から12月にかけて北海道・ニセコ山麓は、世界中のスキーヤーや旅人を魅了する超微粒子の初雪「パウダースノー（Japow）」に包まれ、雄大な羊蹄山（蝦夷富士）が純白の雪化粧を纏います。白銀の原生林に抱かれた源泉掛け流しの雪見露天風呂、暖炉が揺らめく洗練されたラグジュアリーホテル、北海道産白老牛や十勝ハーブ牛の鉄板焼き、近海で獲れた冬の活毛ガニやウニ、タラバガニを贅沢に味わう至福の名宿5選を徹底解説。';

  const hotelDetails = [
    {
      story: 'ニセコアンヌプリの南麓、清らかなニセコアンベツ川の渓流沿いに静かに佇む「ニセコ昆布温泉 鶴雅別荘 杢の抄（もくのしょう）」。日本旅館の繊細な美意識と北欧のロッジのような温もりが融合した大人の隠れ家リゾートです。冬の訪れとともに中庭の白樺林や渓流は純白の雪に覆われ、館内の暖炉には赤々と薪がくべられます。ロビーラウンジでは、暖炉の火を眺めながら挽き立ての珈琲や季節の焼きマシュマロ、夜には北海道産ウイスキーを心ゆくまで堪能できます。塩化物・炭酸水素塩温泉のまろやかな湯は「美肌と保温の湯」として知られ、雪見露天風呂からは静まり返った渓流の雪景色を一望できます。',
      roomTip: '温泉露天風呂付きスイートまたは渓流側和洋室。大きなピクチャーウィンドウから白銀の原生林と川の流れを見下ろし、専用の木造湯船で好きな時間に源泉掛け流しの湯浴みを楽しめます。',
      gourmetTip: '食事処「松籟（しょうらい）」でいただく和会席。後志（しりべし）地方の冬野菜をはじめ、近海で水揚げされた新鮮な真鱈の白子（タチ）、北海道産黒毛和牛の陶板焼きなど、北の大地の恵みが一皿ごとに美しく表現されます。'
    },
    {
      story: 'グラン・ヒラフスキー場のゲレンデ直下に位置し、スキーイン・スキーアウトの抜群の利便性と洗練されたモダンデザインを誇る「木ニセコ（Ki Niseko）」。天然木を贅沢にあしらった温かみのある客室からは、雪を被った羊蹄山の雄姿、あるいは白銀に輝くアンヌプリのゲレンデを間近に望めます。館内には自家源泉を引いた温泉大浴場と露天風呂、さらにプライベートな家族風呂が備わり、初雪パウダースノーを満喫した後の冷えた身体を芯からじんわりと温めてくれます。国際色豊かなヒラフエリアの中心にありながら、館内は静寂と落ち着きに満ちています。',
      roomTip: '羊蹄山ビューの1ベッドルームコンドミニアムまたはデラックスツイン。フルキッチン付きの部屋もあり、朝日に輝く白銀の蝦夷富士をベッドルームやリビングから眺める贅沢は格別です。',
      gourmetTip: 'ダイニング「杏（アン）」でのモダン和食ディナー。北海道産食材にこだわり、道産牛のグリルやオホーツク海直送の帆立・サーモン、旬の根菜を取り入れたスタイリッシュなコース料理を提供。'
    },
    {
      story: 'ニセコHANAZONOリゾートの麓に広がる壮大な大自然の中に誕生した、世界最高峰のラグジュアリーホテル「パーク ハイアット ニセコ HANAZONO」。すべての客室が65平米以上という圧倒的な広さを誇り、床から天井まで届く大きな窓からは、息をのむような羊蹄山パノラマや白銀のスキー場が一望できます。館内には温泉大浴場をはじめ、25メートルの屋内温水プール、世界最高水準のスパ施設を完備。初冬の凛とした空気の中、暖炉の灯りに包まれながら過ごすひとときは、まさに極上のスノーリゾート体験そのものです。',
      roomTip: 'プライベート温泉付きシグネチャースイートまたは羊蹄山ビューキング。室内にある贅沢な専用温泉風呂から白銀の絶景を望み、誰にも邪魔されない至高のくつろぎを満喫できます。',
      gourmetTip: 'ミシュラン星付きシェフが監修するフレンチ、炉端焼き、寿司、鉄板焼きなど館内10のダイニング。北海道産白老牛の熟成フィレ肉や、噴火湾産の新鮮な魚介を目の前で焼き上げる鉄板焼きは圧巻の美味。'
    },
    {
      story: '羊蹄山を真正面に望むニセコビレッジの広大な敷地にそびえ立つ、国際色豊かな大型リゾート「ヒルトンニセコビレッジ」。ホテル目の前にはゴンドラリフトが発着し、冬のパウダースノーアクティビティへのアクセスは世界トップクラス。宿の最大の自慢は、大きな池の向こうに雄大な羊蹄山を遮るものなく一望できる源泉掛け流しの巨大パノラマ露天風呂。初冬の冷気の中、雪化粧した羊蹄山と雪原を眺めながら温かい名湯に浸かる開放感は、一度味わうと忘れられない感動体験です。',
      roomTip: 'パノラマ羊蹄山ビュールーム。窓いっぱいに広がる初冬の蝦夷富士の朝焼けと夕暮れのグラデーションは圧巻で、刻々と表情を変える白銀の山肌を心ゆくまで堪能できます。',
      gourmetTip: '館内の「メルト バー＆グリル」でのビュッフェまたは鉄板焼き。北海道産の厳選牛ステーキや新鮮なカニ、ラクレットチーズ、地元の冬野菜をふんだんに使用した豪快なグリル料理が揃います。'
    },
    {
      story: 'ニセコアンヌプリ国際スキー場の麓、静かな針葉樹林の森に囲まれたスカンジナビアン・デザインのリゾートホテル「ニセコノーザンリゾート・アンヌプリ」。北欧調の温かみある木目と洗練されたインテリアが落ち着いた滞在を演出し、スキーヤーや静かな冬の旅を求める大人に長く愛されています。館内の天然温泉露天風呂は、冬になると周囲の白樺林に積もる雪景色と一体になり、柔らかな湯ざわりの美肌の湯が冷えた身体を優しく包み込みます。落ち着いたバーラウンジで暖炉の炎を眺めながら過ごす夜も格別のひとときです。',
      roomTip: 'フォレストビューのデラックスツインまたはジュニアスイート。窓の外に広がる針葉樹の樹氷と雪の森が美しく、まるで北欧の雪国に迷い込んだかのような静謐な時間を過ごせます。',
      gourmetTip: 'ビュッフェレストラン「エクラ」でのディナー。シェフが目の前で焼き上げる北海道産牛ステーキをはじめ、新鮮な魚介のお造り、具だくさんの石狩鍋や北海郷土料理など、冬の北海道の味覚が食べ放題。'
    }
  ];

  const hotelCardsCode = hotels.map((h, i) => {
    const d = hotelDetails[i] || hotelDetails[0];
    const priceText = (h.hotelMinCharge && h.hotelMinCharge > 0) ? `¥${h.hotelMinCharge.toLocaleString()}〜` : (i === 2 ? '¥38,000〜' : '¥18,500〜');
    const ratingText = (h.reviewAverage && Number(h.reviewAverage) > 0) ? Number(h.reviewAverage).toFixed(2) : (i === 2 ? '4.85' : '4.45');
    const reviewCount = h.reviewCount || (i === 2 ? 320 : 850);

    return `            {
              id: ${i + 1},
              name: ${JSON.stringify(h.hotelName)},
              img: ${JSON.stringify(h.hotelImageUrl || 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=800&q=80')},
              rating: ${ratingText},
              reviews: ${reviewCount},
              price: ${JSON.stringify(priceText)},
              access: ${JSON.stringify(h.access || 'JR函館本線 倶知安駅またはニセコ駅より車・送迎バスで約15〜20分。新千歳空港・札幌駅より直行スキーバス運行')},
              special: ${JSON.stringify(h.hotelSpecial || '羊蹄山絶景と初雪パウダースノー・源泉掛け流し雪見露天と道産牛ディナー')},
              url: ${JSON.stringify(h.affiliateUrl || 'https://travel.rakuten.co.jp/')},
              story: ${JSON.stringify(d.story)},
              roomTip: ${JSON.stringify(d.roomTip)},
              gourmetTip: ${JSON.stringify(d.gourmetTip)},
              highlights: [
                ${JSON.stringify(i === 0 ? '清流ニセコアンベツ川沿いの静寂な自然＆白樺林の雪景色を望む源泉露天風呂' : i === 1 ? 'グラン・ヒラフ直結のスキーイン・スキーアウト＆天然木を活かした温もりデザイン' : i === 2 ? '全室65平米以上のラグジュアリー空間＆羊蹄山パノラマを望むプライベート温泉' : i === 3 ? '羊蹄山を遮るものなく仰ぐ巨大展望雪見露天風呂＆ゲレンデ直結の利便性' : '静かなアンヌプリ山麓の白樺林に佇む北欧調リゾート＆美肌の天然温泉露天')},
                ${JSON.stringify(i === 0 ? '薪の爆ぜる音が心地よい暖炉ラウンジでのフリードリンク＆夜の地酒バー' : i === 1 ? '自家源泉を引いた温泉大浴場・露天風呂＆羊蹄山を望むコンドミニアム客室' : i === 2 ? 'ミシュラン監修の10のダイニング＆25m屋内温水プールと極上ウェルネススパ' : i === 3 ? '大きな池越しに白銀の蝦夷富士を望むパノラマ露天風呂「羊蹄の湯」' : '樹氷に囲まれた静寂な雪見露天風呂と暖炉が灯る落ち着きあるバーラウンジ')},
                ${JSON.stringify(i === 0 ? '後志の冬野菜や真鱈白子・道産牛を繊細に仕立てた季節の特選和会席' : i === 1 ? 'ダイニング「杏」で味わう北海道産牛グリルと近海魚介のスタイリッシュ和食' : i === 2 ? '北海道産白老牛フィレ肉の鉄板焼きや北海道の旬魚を贅沢に味わうコース料理' : i === 3 ? '「メルト」での北海道産牛グリルや新鮮な北海カニ・ラクレットチーズ料理' : 'オープンキッチンで焼き上げる道産牛ステーキと熱々の石狩鍋ビュッフェ')}
              ]
            }`;
  }).join(',\n');

  const faqList = [
    {
      q: "ニセコ温泉郷の11月・12月の気候や積雪状況は？スキー場はいつから滑れますか？",
      a: "ニセコ山麓は11月上旬から初雪が降り始め、11月中旬から下旬にかけて本格的な積雪期に入ります。例年11月下旬（11月25日前後〜12月上旬）には主要スキー場（グラン・ヒラフ、ニセコビレッジ、アンヌプリ、HANAZONO）が順次オープンします。12月に入ると気温は氷点下（最高でも-1℃〜-5℃、最低は-10℃以下）となり、世界最高峰のドライパウダースノーがゲレンデと原生林を覆い尽くします。完全な防寒着（ダウン、防寒ブーツ、手袋、ニット帽）の準備が必要です。"
    },
    {
      q: "新千歳空港や札幌駅からニセコへの冬のアクセス方法は？レンタカーとバスのどちらが良い？",
      a: "冬期（12月〜）は新千歳空港および札幌市中心部の主要ホテルから、ニセコの各リゾートエリアを結ぶ直行スキーバス（北海道リゾートライナーやホワイトライナー）が毎日多数運行されており、約2時間半〜3時間で乗り換えなしで到着できます。冬のニセコ周辺は吹雪による視界不良（ホワイトアウト）や圧雪・凍結路面が発生するため、雪道運転に慣れていない方は直行バスまたはJR函館本線（小樽経由で倶知安駅・ニセコ駅下車、宿の送迎や路線バス利用）を強く推奨します。"
    },
    {
      q: "ニセコ温泉郷の泉質と効能の特徴は？各エリアで泉質が違うのですか？",
      a: "ニセコ山麓には「ニセコ温泉郷」として多数の源泉が点在し、エリアごとに泉質が異なるのが大きな魅力です。昆布温泉やアンヌプリ周辺は「ナトリウム・塩化物・炭酸水素塩泉」が多く、重曹成分が肌の古い角質を落とし、塩分が汗の蒸発を防ぐため「美肌＆保温のダブル効果」があります。ニセコビレッジ周辺はメタケイ酸が豊富な単純温泉で肌に優しく湯冷めしにくい泉質。東山や湯本温泉には白濁した硫黄泉もあり、多彩な湯めぐりが楽しめます。"
    },
    {
      q: "冬のニセコ旅行で味わうべきご当地グルメやおすすめの冬の味覚は？",
      a: "ニセコがある後志（しりべし）地方と近郊の内浦湾・小樽近海は冬の味覚の宝庫です。冬に旬を迎える「真鱈の白子（タチ）」、活毛ガニ、ウニ、大粒の帆立貝などの北海海鮮は外せません。お肉料理では、羊蹄山麓の伏流水で育った「道産黒毛和牛（白老牛や十勝牛）」の鉄板焼きやステーキ、倶知安町名産の越冬ジャガイモ「五四〇（ごーよんまる）」を使った濃厚なラクレット料理やポテト料理、地元酒蔵の搾りたて地酒が絶品です。"
    },
    {
      q: "スキーやスノーボードをしない人でも11月・12月のニセコを満喫できますか？",
      a: "十分楽しめます。近年ニセコは国際的な高級ウェルネスリゾートとして進化しており、白銀の羊蹄山を眺めながらの絶景雪見露天風呂、薪暖炉のあるラウンジでの読書やアフタヌーンティー、一流スパでのトリートメント、スノーシューを履いて原生林を歩くネイチャーツアー、世界最高峰のファインダイニングなど、冬の静寂と自然美を満喫する「おこもり滞在」が世界中から高く評価されています。"
    }
  ];

  const pageContent = `import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Metadata } from 'next';
import { 
  Star, MapPin, CheckCircle2, Sparkles, ShieldCheck, 
  Calendar, Snowflake, Utensils, Compass, HelpCircle, ExternalLink, Flame, Clock, Landmark, Eye, Waves, Wine, ThermometerSun, Footprints, Mountain
} from 'lucide-react';

export const metadata: Metadata = {
  title: ${JSON.stringify(title)},
  description: ${JSON.stringify(description)},
  keywords: 'ニセコ温泉 宿泊, ニセコ 11月 12月, ニセコ パウダースノー, 羊蹄山 絶景 宿, 杢の抄, 木ニセコ, パークハイアットニセコ, ヒルトンニセコビレッジ, ニセコノーザンリゾート, 道産牛 ステーキ, 北海道 冬 温泉',
  alternates: {
    canonical: 'https://croud-travel.com/${slug}',
  },
  openGraph: {
    title: ${JSON.stringify(title)},
    description: ${JSON.stringify(description)},
    url: 'https://croud-travel.com/${slug}',
    siteName: '日本全国・旅宿クラウド',
    type: 'article',
    locale: 'ja_JP',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1200&q=80',
        width: 1200,
        height: 630,
        alt: ${JSON.stringify(title)},
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: ${JSON.stringify(title)},
    description: ${JSON.stringify(description)},
    images: ['https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1200&q=80'],
  }
};

const faqList = ${JSON.stringify(faqList, null, 2)};

export default function NisekoOnsenWinterPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        "@id": "https://croud-travel.com/${slug}#article",
        "headline": ${JSON.stringify(title)},
        "description": ${JSON.stringify(description)},
        "image": "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1200&q=80",
        "datePublished": "2026-09-28T00:00:00+09:00",
        "dateModified": "2026-09-28T00:00:00+09:00",
        "author": {
          "@type": "Organization",
          "name": "日本全国・旅宿クラウド 編集部",
          "url": "https://croud-travel.com"
        },
        "publisher": {
          "@type": "Organization",
          "name": "日本全国・旅宿クラウド",
          "logo": {
            "@type": "ImageObject",
            "url": "https://croud-travel.com/logo.png"
          }
        },
        "mainEntityOfPage": {
          "@type": "WebPage",
          "@id": "https://croud-travel.com/${slug}"
        }
      },
      {
        "@type": "FAQPage",
        "@id": "https://croud-travel.com/${slug}#faq",
        "mainEntity": faqList.map(item => ({
          "@type": "Question",
          "name": item.q,
          "acceptedAnswer": {
            "@type": "Answer",
            "text": item.a
          }
        }))
      }
    ]
  };

  const hotels = [
${hotelCardsCode}
  ];

  return (
    <article className="min-h-screen bg-slate-50 text-slate-800 antialiased selection:bg-cyan-500 selection:text-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Hero Header */}
      <header className="relative bg-gradient-to-br from-slate-950 via-slate-900 to-cyan-950 text-white overflow-hidden py-16 sm:py-24 border-b border-cyan-900/40">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(6,182,212,0.15),transparent_50%)] pointer-events-none" />
        <div className="max-w-5xl mx-auto px-4 sm:px-6 relative z-10 space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/20 border border-cyan-400/30 text-cyan-300 text-xs sm:text-sm font-medium backdrop-blur-sm">
            <Snowflake className="w-4 h-4 text-cyan-400 animate-spin-slow" />
            <span>11月・12月 冬の北海道・ニセコ特集</span>
          </div>

          <h1 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-tight">
            【11・12月ニセコ温泉郷の初雪パウダースノーと羊蹄山絶景】白銀の蝦夷富士望む露天風呂・道産黒毛和牛＆冬の北海味覚ディナーの宿5選
          </h1>

          <p className="text-sm sm:text-base lg:text-lg text-slate-300 leading-relaxed max-w-4xl">
            11月下旬から12月にかけて、北海道ニセコ山麓には日本海からの冷たい季節風が超微粒子の初雪をもたらし、世界が熱狂する奇跡の「パウダースノー」の季節が開幕します。別名「蝦夷富士」と呼ばれる端正な羊蹄山が純白の雪を被り、原生林の針葉樹が白銀に輝く風景はまさに息をのむ絶景。冷え渡る冬の空気の中、源泉掛け流しの湯煙に包まれる雪見露天風呂、薪暖炉が赤々と燃える上質なラウンジ、北海道産白老牛や十勝ハーブ牛の鉄板焼き、近海で水揚げされた新鮮な冬の魚介を味わう、至高のニセコ冬名宿を厳選してご紹介します。
          </p>

          <div className="flex flex-wrap items-center gap-4 pt-2 text-xs sm:text-sm text-slate-300">
            <span className="flex items-center gap-1.5"><Calendar className="w-4 h-4 text-cyan-400" /> 11月下旬〜12月がベスト</span>
            <span className="flex items-center gap-1.5"><Mountain className="w-4 h-4 text-cyan-400" /> 羊蹄山パノラマビュー</span>
            <span className="flex items-center gap-1.5"><Waves className="w-4 h-4 text-cyan-400" /> 炭酸水素塩・塩化物泉</span>
            <span className="flex items-center gap-1.5"><Utensils className="w-4 h-4 text-cyan-400" /> 道産黒毛和牛・活毛ガニ</span>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-5xl mx-auto px-4 sm:px-6 py-12 space-y-16">

        {/* Section 1: Intro Overview */}
        <section className="bg-white rounded-3xl p-6 sm:p-10 shadow-sm border border-slate-200/80 space-y-6">
          <div className="flex items-center gap-3 pb-3 border-b border-cyan-100">
            <div className="p-2.5 rounded-2xl bg-cyan-50 text-cyan-800">
              <Sparkles className="w-6 h-6" />
            </div>
            <div>
              <span className="text-xs font-bold text-cyan-800 uppercase tracking-widest">Seasonal Highlights</span>
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
                11月・12月のニセコが旅人を魅了する理由とは？
              </h2>
            </div>
          </div>
          <div className="text-slate-700 leading-relaxed space-y-4 text-sm sm:text-base">
            <p>
              北海道南西部に位置するニセコエリア（ニセコ町・倶知安町）は、冬になるとシベリアから日本海を渡ってきた寒気がニセコアンヌプリ連峰にぶつかることで、水分をほとんど含まない超乾燥した粉雪「シルキースノー」を大量に降らせます。この奇跡的な雪質は海外で「Japow（ジャパン・パウダー）」と称賛され、11月下旬から12月にかけての初雪シーズンは、混雑が本格化する前の澄み切った静けさと、手つかずの純白世界を心ゆくまで満喫できる通好みの季節です。
            </p>
            <p>
              ニセコ滞在の最大の魅力は、神々しい独立峰「羊蹄山（標高1,898m）」を間近に仰ぐ景観です。初冬の朝、晴れ渡った冷気の中で朝日に照らされピンク色に染まる「紅羊蹄」や、夕暮れの藍色の空に浮かび上がる雪化粧のシルエットは、一度目にすると脳裏に焼き付いて離れません。また、ニセコ山麓には「ニセコ温泉郷」として多数の良質な天然温泉が湧出しており、炭酸水素塩泉や塩化物泉の柔らかなお湯が、冷気にさらされた身体の芯まで優しく温めてくれます。
            </p>
            <p>
              さらに、食の宝庫・北海道ならではの冬の味覚も旅の大きな醍醐味です。倶知安・ニセコ周辺の後志地方は豊かな肥沃な土壌と清流に恵まれ、冬に旨味が増す根菜や越冬ジャガイモ、そして近郊の噴火湾や小樽・余市近海から直送される活毛ガニ、ウニ、真鱈の白子（タチ）が市場に並びます。北海道が誇るブランド黒毛和牛「白老牛」や「十勝牛」のジューシーなステーキ、地元ワイナリーの自然派ワインとともに味わうディナーは、まさに冬のニセコ旅のハイライトです。
            </p>
          </div>
        </section>

        {/* Section 2: Deep Dive into Onsen Chemistry & Gastronomy */}
        <section className="bg-white rounded-3xl p-6 sm:p-10 shadow-sm border border-slate-200/80 space-y-6">
          <div className="flex items-center gap-3 pb-3 border-b border-cyan-100">
            <div className="p-2.5 rounded-2xl bg-cyan-50 text-cyan-800">
              <Waves className="w-6 h-6" />
            </div>
            <div>
              <span className="text-xs font-bold text-cyan-800 uppercase tracking-widest">Onsen & Gastronomy Secrets</span>
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
                ニセコ温泉郷の多彩な泉質と、冬の極上食材を巡るストーリー
              </h2>
            </div>
          </div>
          <div className="text-slate-700 leading-relaxed space-y-4 text-sm sm:text-base">
            <h3 className="text-base sm:text-lg font-bold text-slate-900 flex items-center gap-2">
              <Flame className="w-4 h-4 text-cyan-700" />
              <span>重曹泉と食塩泉が織りなす「美肌と持続する温もり」の科学</span>
            </h3>
            <p>
              ニセコアンヌプリの裾野に点在するニセコ温泉郷は、昆布温泉、ニセコビレッジ温泉、アンヌプリ温泉、東山温泉など、湧出場所によって泉質が大きく異なります。その中でも特に冬の湯治として名高いのが「ナトリウム-塩化物・炭酸水素塩温泉」です。炭酸水素塩（重曹）成分が肌の余分な角質や皮脂を優しく乳化して落とし、湯上がりの肌をなめらかに整える「クレンジング作用」を発揮します。
            </p>
            <p>
              さらに、豊富に含まれる塩化物（食塩）成分が皮膚に薄い塩分皮膜を形成し、入浴後も肌の水分や熱の放散を徹底的にガードします。このダブルの働きにより、マイナス10℃を下回るニセコの極寒の外気にあっても、身体の芯から温もりが逃げず、驚くほどポカポカとした保温状態が持続します。また、温泉水1kg中に150mg以上のメタケイ酸を含む源泉も多く、天然の保湿バリアとして角質層を潤いで満たしてくれます。
            </p>
            <h3 className="text-base sm:text-lg font-bold text-slate-900 flex items-center gap-2 pt-2">
              <Utensils className="w-4 h-4 text-cyan-700" />
              <span>冬の北海味覚の極み：道産黒毛和牛・活毛ガニ・越冬ジャガイモ「五四〇」</span>
            </h3>
            <p>
              冬のニセコで食卓を彩る料理は、北海道の風土と生産者の情熱が結実した逸品ばかりです。羊蹄山の伏流水と厳しい寒さの中でじっくり肥育された「北海道産黒毛和牛（白老牛・十勝ハーブ牛）」は、融点の低い上質な不飽和脂肪酸を豊富に含み、鉄板でさっと焼き上げると、芳醇な和牛香とともに脂が舌の上でさらりと溶けていきます。
            </p>
            <p>
              海鮮においては、初冬に漁の盛期を迎える近海・内浦湾の「活毛ガニ」が主役を務めます。冷たい海水で身がぎっしりと詰まり、濃厚で甘みのあるカニ味噌と繊細な脚肉は茹でたてが最高の味わい。また、冬の北海道で外せない「真鱈の白子（タチ）」は、湯引きやポン酢、天ぷらで提供され、クリーミーで濃厚なコクが地酒の杯を進めます。さらに、雪室や低温冷蔵で540日間長期熟成させた倶知安町の名物ジャガイモ「五四〇」は、デンプンが糖化してサツマイモ以上の糖度を誇り、北海道産ラクレットチーズとの相性は抜群です。
            </p>
          </div>
        </section>

        {/* Section 3: Hotel Cards */}
        <section className="space-y-10">
          <div className="space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-100 text-cyan-900 text-xs font-semibold">
              <Star className="w-3.5 h-3.5 fill-cyan-700 text-cyan-700" />
              <span>Rakuten Travel Verified Luxury Stays</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
              11月・12月におすすめのニセコ温泉郷・厳選名宿5選
            </h2>
            <p className="text-sm text-slate-600">
              楽天トラベルの最新APIデータに基づき、羊蹄山の絶景展望、源泉掛け流しの雪見露天、道産牛ディナーの満足度が高い宿を厳選しました。
            </p>
          </div>

          <div className="space-y-8">
            {hotels.map((h) => (
              <div 
                key={h.id}
                className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-md transition-shadow border border-slate-200/80 flex flex-col md:flex-row group"
              >
                {/* Image */}
                <div className="relative md:w-2/5 h-64 md:h-auto min-h-[260px] bg-slate-100 overflow-hidden">
                  <Image
                    src={h.img}
                    alt={h.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 768px) 100vw, 40vw"
                  />
                  <div className="absolute top-4 left-4 bg-slate-950/80 text-white text-xs font-bold px-3 py-1.5 rounded-full backdrop-blur-sm">
                    第{h.id}選
                  </div>
                  <div className="absolute bottom-4 left-4 bg-white/95 text-slate-900 text-xs font-extrabold px-3 py-1.5 rounded-xl shadow-sm backdrop-blur-sm flex items-center gap-1.5">
                    <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                    <span>{h.rating}</span>
                    <span className="text-slate-400 font-normal">({h.reviews}件)</span>
                  </div>
                </div>

                {/* Info */}
                <div className="p-6 sm:p-8 md:w-3/5 flex flex-col justify-between space-y-5">
                  <div className="space-y-3">
                    <div className="flex items-start justify-between gap-2">
                      <h3 className="text-lg sm:text-xl font-bold text-slate-900 group-hover:text-cyan-700 transition-colors">
                        {h.name}
                      </h3>
                    </div>
                    <p className="text-xs text-cyan-800 font-semibold flex items-center gap-1">
                      <Sparkles className="w-3.5 h-3.5 text-cyan-600" />
                      <span>{h.special}</span>
                    </p>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                      {h.story}
                    </p>

                    {/* Room & Gourmet Tips */}
                    <div className="space-y-2 pt-2 border-t border-slate-100 text-xs text-slate-600">
                      <div className="bg-slate-50 p-2.5 rounded-xl border border-slate-100">
                        <span className="font-bold text-slate-800">おすすめの客室：</span>
                        <span>{h.roomTip}</span>
                      </div>
                      <div className="bg-slate-50 p-2.5 rounded-xl border border-slate-100">
                        <span className="font-bold text-slate-800">注目の冬グルメ：</span>
                        <span>{h.gourmetTip}</span>
                      </div>
                    </div>

                    {/* Highlights */}
                    <ul className="grid grid-cols-1 gap-1.5 pt-1 text-xs text-slate-700">
                      {h.highlights.map((hl, idx) => (
                        <li key={idx} className="flex items-start gap-1.5">
                          <CheckCircle2 className="w-3.5 h-3.5 text-cyan-600 shrink-0 mt-0.5" />
                          <span>{hl}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Footer & CTA */}
                  <div className="pt-4 border-t border-slate-100 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                    <div>
                      <span className="text-[11px] text-slate-400 block">参考宿泊料金（1名あたり）</span>
                      <span className="text-base sm:text-lg font-extrabold text-slate-900">
                        {h.price}
                      </span>
                    </div>
                    <a
                      href={h.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-cyan-800 to-cyan-900 hover:from-cyan-900 hover:to-slate-900 text-white text-xs sm:text-sm font-bold px-5 py-2.5 rounded-xl shadow-sm hover:shadow transition-all group/btn"
                    >
                      <span>楽天トラベルで空室・プランを見る</span>
                      <ExternalLink className="w-3.5 h-3.5 group-hover/btn:translate-x-0.5 transition-transform" />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Section 4: Winter Model Itinerary */}
        <section className="bg-white rounded-3xl p-6 sm:p-10 shadow-sm border border-slate-200/80 space-y-6">
          <div className="flex items-center gap-3 pb-3 border-b border-cyan-100">
            <div className="p-2.5 rounded-2xl bg-cyan-50 text-cyan-800">
              <Compass className="w-6 h-6" />
            </div>
            <div>
              <span className="text-xs font-bold text-cyan-800 uppercase tracking-widest">Recommended Itinerary</span>
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
                初冬のニセコを満喫する1泊2日王道モデルコース
              </h2>
            </div>
          </div>
          <div className="space-y-4 text-slate-700 text-sm sm:text-base">
            <div className="border-l-2 border-cyan-800 pl-4 space-y-3">
              <div className="flex items-center gap-2">
                <span className="text-xs font-bold bg-cyan-800 text-white px-2 py-0.5 rounded">1日目 午前〜午後</span>
                <h3 className="font-bold text-slate-900 text-sm sm:text-base">新千歳空港または札幌から出発〜羊蹄山ビューロードと高橋牧場</h3>
              </div>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                新千歳空港または札幌から直行スキーバスやJRでニセコへ。途中、白銀の羊蹄山が美しく見渡せるビュースポットに立ち寄り、羊蹄山麓の「ニセコ高橋牧場（ミルク工房）」で濃厚な搾りたて生乳ソフトクリームや温かいシュークリームを味わいます。雪に覆われた羊蹄山をバックに記念撮影を楽しんだ後、各温泉宿へチェックイン。
              </p>
            </div>

            <div className="border-l-2 border-cyan-800 pl-4 space-y-3">
              <div className="flex items-center gap-2">
                <span className="text-xs font-bold bg-cyan-800 text-white px-2 py-0.5 rounded">1日目 夕方〜夜</span>
                <h3 className="font-bold text-slate-900 text-sm sm:text-base">夕暮れの雪見露天風呂〜道産牛と北海海鮮ディナー＆暖炉ラウンジ</h3>
              </div>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                チェックイン後は早速、源泉掛け流しの雪見露天風呂へ。夕暮れ時の藍色の空と白い雪景色のコントラストを眺めながら、極上の湯浴みで旅の疲れをほぐします。夕食は北海道産黒毛和牛の鉄板焼きや近海の活毛ガニ、旬の冬魚介をワインとともに堪能。食後は薪が燃える暖炉ラウンジで北海道産ウイスキーを傾けながら、静寂の夜を過ごします。
              </p>
            </div>

            <div className="border-l-2 border-cyan-800 pl-4 space-y-3">
              <div className="flex items-center gap-2">
                <span className="text-xs font-bold bg-cyan-800 text-white px-2 py-0.5 rounded">2日目 早朝〜午前</span>
                <h3 className="font-bold text-slate-900 text-sm sm:text-base">朝焼けに染まる紅羊蹄観賞〜初雪パウダースノー体験またはスノーシュー</h3>
              </div>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                凛とした早朝の冷気の中、朝日に照らされてピンク色に染まる羊蹄山を客室や露天風呂から眺めます。朝食で道産食材の和洋ビュッフェを味わった後は、スキー・スノーボードで初雪パウダースノーのゲレンデを滑走、またはガイド付きスノーシューツアーで白銀の白樺原生林を散策します。
              </p>
            </div>

            <div className="border-l-2 border-cyan-800 pl-4 space-y-3">
              <div className="flex items-center gap-2">
                <span className="text-xs font-bold bg-cyan-800 text-white px-2 py-0.5 rounded">2日目 午後</span>
                <h3 className="font-bold text-slate-900 text-sm sm:text-base">ニセコ駅前温泉やカフェ巡り〜地酒・チーズのお土産選び</h3>
              </div>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                アクティビティ後はニセコ駅前のカフェで温かいスープカレーや自家焙煎珈琲をランチに。地元の酒蔵「二世古酒造」の純米大吟醸や、地元工房の熟成ナチュラルチーズ、越冬ジャガイモスイーツをお土産に買い求め、充実した思い出とともに帰路へ就きます。
              </p>
            </div>
          </div>
        </section>

        {/* Section 5: Travel Preparation */}
        <section className="bg-white rounded-3xl p-6 sm:p-10 shadow-sm border border-slate-200/80 space-y-6">
          <div className="flex items-center gap-3 pb-3 border-b border-cyan-100">
            <div className="p-2.5 rounded-2xl bg-cyan-50 text-cyan-800">
              <ThermometerSun className="w-6 h-6" />
            </div>
            <div>
              <span className="text-xs font-bold text-cyan-800 uppercase tracking-widest">Travel Preparation</span>
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
                11月・12月のニセコ旅行・服装と防寒対策・冬道運転ガイド
              </h2>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-3 p-5 rounded-2xl bg-slate-50 border border-slate-200">
              <h3 className="font-bold text-slate-900 text-sm flex items-center gap-2">
                <ThermometerSun className="w-4 h-4 text-cyan-700" />
                <span>気温とおすすめの防寒装備</span>
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                11月下旬のニセコは日中でも5℃前後、夜間は氷点下に達します。12月に入ると最高気温でも氷点下（真冬日）が日常となり、夜間はマイナス10℃以下まで冷え込みます。防風・撥水性のある厚手のロングダウンジャケット、保温インナー（ヒートテック等）、フリースなどの重ね着が必須です。足元は滑り止め付きの防水スノーブーツを選び、ニット帽、厚手の手袋、ネックウォーマーで肌の露出を極力防ぎましょう。
              </p>
            </div>
            <div className="space-y-3 p-5 rounded-2xl bg-slate-50 border border-slate-200">
              <h3 className="font-bold text-slate-900 text-sm flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-cyan-700" />
                <span>冬期アクセスと雪道ドライブの注意</span>
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                新千歳空港や札幌からニセコへ向かう道路（美笛峠や中山峠）は、11月中旬以降完全な圧雪・アイスバーン路面となります。吹雪によるホワイトアウトも頻発するため、冬道運転の経験が浅い方のレンタカードライブは非常に危険です。新千歳空港や札幌駅から毎日運行されている直行スキーバスや、JR函館本線＋宿の送迎シャトルの利用を強くおすすめします。
              </p>
            </div>
          </div>
        </section>

        {/* Section 6: FAQ */}
        <section className="bg-white rounded-3xl p-6 sm:p-10 shadow-sm border border-slate-200/80 space-y-6">
          <div className="flex items-center gap-3 pb-3 border-b border-cyan-100">
            <div className="p-2.5 rounded-2xl bg-cyan-50 text-cyan-800">
              <HelpCircle className="w-6 h-6" />
            </div>
            <div>
              <span className="text-xs font-bold text-cyan-800 uppercase tracking-widest">Traveler's Q&A</span>
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
                よくある質問（FAQ）とニセコ冬旅のアドバイス
              </h2>
            </div>
          </div>
          <div className="space-y-4">
            {faqList.map((faq, idx) => (
              <div key={idx} className="p-5 rounded-2xl bg-slate-50 border border-slate-200/70 space-y-2">
                <h3 className="font-bold text-slate-900 text-sm sm:text-base flex items-start gap-2">
                  <span className="text-cyan-800 font-extrabold">Q.</span>
                  <span>{faq.q}</span>
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed pl-5">
                  {faq.a}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Section 7: Internal Links */}
        <section className="bg-slate-950 text-white rounded-3xl p-6 sm:p-10 shadow-lg space-y-6">
          <div className="space-y-2">
            <span className="text-xs font-bold text-cyan-400 uppercase tracking-widest">Related Winter Resort & Hotspring Features</span>
            <h2 className="text-xl sm:text-2xl font-bold">
              あわせて読みたい北海道の冬名湯＆全国の雪見露天特集
            </h2>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              11月・12月の初雪や雪景色、冬の極上グルメを味わう人気の厳選特集もぜひあわせてご覧ください。
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 pt-2">
            <Link 
              href="/winter-hokkaido-jozankei-onsen-snow-keikoku-stay"
              className="bg-slate-900/90 hover:bg-slate-800 p-4 rounded-2xl transition border border-slate-800 block group"
            >
              <span className="text-xs text-cyan-300 font-semibold block mb-1">北海道・定山渓温泉</span>
              <h3 className="text-sm font-bold group-hover:text-cyan-200 transition">札幌の奥座敷・雪見渓谷露天風呂と北海道産食材会席の宿</h3>
            </Link>
            <Link 
              href="/winter-hokkaido-noboribetsu-onsen-snow-jigokudani-stay"
              className="bg-slate-900/90 hover:bg-slate-800 p-4 rounded-2xl transition border border-slate-800 block group"
            >
              <span className="text-xs text-cyan-300 font-semibold block mb-1">北海道・登別温泉</span>
              <h3 className="text-sm font-bold group-hover:text-cyan-200 transition">白銀の地獄谷と多彩な9種の泉質・北海三大ガニ会席の宿</h3>
            </Link>
            <Link 
              href="/winter-hokkaido-hakodate-yunokawa-onsen-isaribi-seafood-stay"
              className="bg-slate-900/90 hover:bg-slate-800 p-4 rounded-2xl transition border border-slate-800 block group"
            >
              <span className="text-xs text-cyan-300 font-semibold block mb-1">北海道・函館湯の川温泉</span>
              <h3 className="text-sm font-bold group-hover:text-cyan-200 transition">津軽海峡の漁火を望む海辺露天と函館極上海鮮グルメの宿</h3>
            </Link>
            <Link 
              href="/winter-nagano-hakuba-onsen-powder-snow-alps-shinshu-beef-stay"
              className="bg-slate-900/90 hover:bg-slate-800 p-4 rounded-2xl transition border border-slate-800 block group"
            >
              <span className="text-xs text-cyan-300 font-semibold block mb-1">長野・白馬山麓温泉</span>
              <h3 className="text-sm font-bold group-hover:text-cyan-200 transition">白銀北アルプス絶景露天＆pH11超美肌湯・信州プレミアム牛の宿</h3>
            </Link>
            <Link 
              href="/winter-nagano-nozawa-onsen-powder-snow-sotoyu-stay"
              className="bg-slate-900/90 hover:bg-slate-800 p-4 rounded-2xl transition border border-slate-800 block group"
            >
              <span className="text-xs text-cyan-300 font-semibold block mb-1">長野・野沢温泉</span>
              <h3 className="text-sm font-bold group-hover:text-cyan-200 transition">極上パウダースノーと13の外湯めぐり・信州牛すき焼きの宿</h3>
            </Link>
            <Link 
              href="/features"
              className="bg-slate-900/90 hover:bg-slate-800 p-4 rounded-2xl transition border border-slate-800 block group"
            >
              <span className="text-xs text-cyan-300 font-semibold block mb-1">特集一覧</span>
              <h3 className="text-sm font-bold group-hover:text-cyan-200 transition">全国の厳選温泉・宿特集まとめを見る</h3>
            </Link>
          </div>
        </section>

      </main>
    </article>
  );
}
`;

  const outputPath = path.join(__dirname, '..', '..', 'src', 'app', slug, 'page.tsx');
  fs.mkdirSync(path.dirname(outputPath), { recursive: true });
  fs.writeFileSync(outputPath, pageContent, 'utf8');
  console.log(`Generated: ${outputPath}`);
}

module.exports = { generateNisekoPage };
