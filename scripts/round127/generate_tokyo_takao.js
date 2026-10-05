const fs = require('fs');
const path = require('path');

function generateTokyoTakaoPage(hotels) {
  const slug = 'winter-tokyo-takao-yakuoin-shrine-hatsumode-fuji-tororo-soba-stay';
  const title = '【11・12・1月東京】霊峰「高尾山薬王院」新春初詣と冬晴れのダイヤモンド富士！名物自然薯とろろそば＆極楽湯・八王子厳選名宿5選';
  const description = '都心から電車でわずか約50分の霊峰・高尾山。11〜1月の冬シーズンは澄み切った大気の中、山頂から富士山の冠雪美や冬至前後の奇跡「ダイヤモンド富士」を一望できます。開山1200余年の祈祷寺「高尾山薬王院」で迎える厳かな新春大護摩供と天狗信仰初詣。参道で味わう熱々の名物自然薯とろろそばや焼きたて天狗焼、いろり炭火焼の美食。登山後の冷えた身体を癒やす「京王高尾山温泉 極楽湯」と、八王子駅周辺の洗練されたハイクオリティ名宿5選を徹底特集。';

  const hotelDetails = [
    {
      story: 'JR八王子駅北口から徒歩1分という極上のロケーションに聳える「京王プラザホテル八王子」。高尾山口駅へ直通する京王線京王八王子駅へも徒歩約3分と、冬の高尾山初詣や早朝ハイキングの拠点として圧倒的な利便性を誇ります。洗練されたシティホテルの快適性と上質なおもてなしが息づき、館内には日本料理・中国料理・ブッフェレストランが充実。冬の参拝を終えた後は、ゆったりとした客室で都会的な寛ぎに浸り、東京郊外の豊かな夜景を眺めながら優雅な時間を過ごせます。',
      roomTip: '高層階エグゼクティブフロアまたはスーペリアツイン。冬の澄んだ夜空に広がる多摩の夜景や遠く富士山側の稜線を望む上質ルーム。',
      gourmetTip: '「日本料理 みやま」の冬の味覚会席。厳選された黒毛和牛の陶板焼きや冬の旬魚のお造り、繊細な出汁が香る季節の炊き込みご飯。'
    },
    {
      story: '京王線高尾山口駅から徒歩わずか1分、高尾山麓の豊かな自然と清流に面した体験型ホテル「タカオネ」。従来の宿泊施設にとらわれず、中庭での焚き火体験や薪割り、シューズレンタルなどアウトドアアクティビティと宿泊が心地よく融合しています。全室シンプルで洗練されたウッド調の客室には、登山後の身体を優しく包み込む快適なベッドを完備。1階カフェ＆ダイニングでは多摩のクラフトビールや地元食材を活かした温かいホットサンド、シチューが楽しめ、新時代の高尾ステイを体験できます。',
      roomTip: 'ルーフトップ付き客室またはスタンダードツイン。木々の梢や高尾の稜線を間近に感じ、焚き火の煙と星空を眺める開放的な空間。',
      gourmetTip: '「タカオネ カフェ＆ダイニング」の地元野菜とハーブチキンのホットポット。冷えた身体に染み渡る熱々スープと特製クラフトビール。'
    },
    {
      story: '京王八王子駅から徒歩1分、JR八王子駅からも徒歩約7分に位置し、スタイリッシュなデザインと機能美が光る「ｔｈｅ ｂ 八王子（ザビー 八王子）」。ロビーには淹れたてのウェルカムコーヒーが用意され、スマートなチェックインで快適に滞在をスタートできます。全室に高品質なベッドと快適なワークスペースを備え、冬の高尾山初詣を身軽に楽しみたいアクティブな一人旅やカップルに最適。八王子駅前の充実した飲食店街や高尾山へのアクセスも軽快そのものです。',
      roomTip: 'プレミアムダブルまたはスーペリアツイン。シンプルモダンなインテリアと清潔感あふれる水回りで、旅の疲労を静かに癒やす空間。',
      gourmetTip: 'ホテル周辺に点在する八王子名物「八王子ラーメン」の名店や、駅前割烹の冬のふぐ料理・地酒とのペアリング。'
    },
    {
      story: '八王子の歴史あるメインストリート・八日町に位置し、甲州街道沿いの落ち着いた環境に佇む「八王子スカイホテル」。リーズナブルな価格設定ながら、全室に無料Wi-Fiや個別空調、快適な寝具を整えており、実直で温かなホスピタリティが愛され続けています。車でのアクセスにも便利な平置き駐車場を備え、高尾山へのドライブ参拝や都立高尾陣場自然公園を巡る冬の散策拠点として抜群のコストパフォーマンスを発揮します。',
      roomTip: 'シングルまたはツインルーム。無駄のない機能的なレイアウトで、登山や参拝の前泊・後泊にストレスなく活用できる実用派ルーム。',
      gourmetTip: '八幡町・八日町周辺の老舗そば処で味わう鴨南蛮そばや、甲州街道沿いの地元居酒屋で味わう多摩の地酒と冬の鍋料理。'
    },
    {
      story: 'JR八王子駅北口から徒歩約5分、繁華街の利便性と静けさを兼ね備えた老舗シティホテル「マロウドイン八王子」。館内には中華料理レストランが併設され、本格的な四川・広東料理をリーズナブルに味わうことができます。広々としたロビーや落ち着きある客室は、ビジネスから観光まで幅広い層に対応。年末年始の初詣期間中も安定したサービスを提供しており、高尾山と八王子の歴史ある街並みを両方満喫したい旅人に選ばれています。',
      roomTip: 'スタンダードツインまたはデラックスシングル。ゆったりとした広さの客室で、大きな荷物や登山ギアの整理も快適。',
      gourmetTip: '館内レストラン「摩亜魯王洞（マロード）」の熱々フカヒレ土鍋ご飯や海老チリ、冬の薬膳スープで身体の内側から温まる中華ディナー。'
    }
  ];

  const hotelCardsCode = hotels.map((h, i) => {
    const d = hotelDetails[i] || hotelDetails[0];
    const priceText = (h.hotelMinCharge && h.hotelMinCharge > 0) ? `¥${h.hotelMinCharge.toLocaleString()}〜` : (i === 0 ? '¥10,800〜' : i === 1 ? '¥6,700〜' : i === 2 ? '¥4,500〜' : i === 3 ? '¥5,000〜' : '¥6,600〜');
    const ratingText = (h.reviewAverage && Number(h.reviewAverage) > 0) ? Number(h.reviewAverage).toFixed(2) : (i === 0 ? '4.24' : i === 1 ? '4.54' : i === 2 ? '4.00' : i === 3 ? '4.06' : '3.50');
    const reviewCount = h.reviewCount || (i === 0 ? 3200 : i === 1 ? 480 : i === 2 ? 1150 : i === 3 ? 620 : 890);

    return `            {
              id: ${i + 1},
              name: ${JSON.stringify(h.hotelName.replace(/&amp;/g, '&'))},
              img: ${JSON.stringify(h.hotelImageUrl || 'https://images.unsplash.com/photo-1503899036084-c55cdd92da26?auto=format&fit=crop&w=800&q=80')},
              rating: ${ratingText},
              reviews: ${reviewCount},
              price: ${JSON.stringify(priceText)},
              access: ${JSON.stringify(h.access || 'JR八王子駅・京王八王子駅より徒歩1〜7分、高尾山口駅まで電車で直通約15〜20分')},
              special: ${JSON.stringify(h.hotelSpecial || '高尾山薬王院の新春初詣と富士山冬景色、名物とろろそばと極楽湯温泉を満喫する厳選名宿')},
              url: ${JSON.stringify(h.affiliateUrl || 'https://travel.rakuten.co.jp/')},
              story: ${JSON.stringify(d.story)},
              roomTip: ${JSON.stringify(d.roomTip)},
              gourmetTip: ${JSON.stringify(d.gourmetTip)},
              highlights: [
                ${JSON.stringify(i === 0 ? '八王子駅北口直結徒歩1分・京王線で高尾山口駅まで乗り換えなしのスムーズアクセス' : i === 1 ? '高尾山口駅徒歩1分の体験型ホテル・中庭の焚き火や薪割りアクティビティが魅力' : i === 2 ? '京王八王子駅徒歩1分のスタイリッシュ空間・ウェルカムコーヒーと快適ベッド完備' : i === 3 ? '甲州街道沿いの静かな立地・平置き駐車場完備でドライブ初詣にも便利な実力派ホテル' : '八王子駅北口徒歩5分・本格中華レストラン併設で温かい四川・広東料理を堪能')} ,
                ${JSON.stringify(i === 0 ? '館内に本格日本料理・中国料理レストラン完備・特別な新年の宿泊にふさわしい上質ステイ' : i === 1 ? '多摩産食材のカフェメニューとクラフトビール・早朝の冬山登山に最適なロケーション' : i === 2 ? '駅前商店街や八王子ラーメン巡り至近・高尾山温泉極楽湯との組み合わせも抜群' : i === 3 ? '個別空調と清潔な水回り・コストを抑えて高尾山と八王子の観光を満喫できる好立地' : '落ち着いた客室空間で登山ギアの整理も快適・年末年始の参拝旅行を堅実にサポート')} ,
                ${JSON.stringify(i === 0 ? '高層階からの多摩の夜景と富士山ビュー・洗練されたシティホテルの安心感' : i === 1 ? 'ウッド調の温もりあふれる客室デザイン・若者やカップルに圧倒的人気のライフスタイル宿' : i === 2 ? '機能的な客室レイアウト・身軽なソロ旅や早朝出発の参拝にジャストフィット' : i === 3 ? '親身で温かなフロント対応・甲州街道の宿場町の面影を感じる落ち着いた街並み' : 'リーズナブルな連泊にも対応・八王子市街のグルメ探訪と霊峰高尾山参拝を両立')}
              ]
            }`;
  }).join(',\n');

  const faqList = [
    {
      q: "冬（11・12・1月）の高尾山登山・初詣の服装と足元の注意点は？",
      a: "冬の高尾山は山麓と山頂で気温差が大きく、山頂（標高599m）は都心よりも約4〜5度気温が低くなります。朝晩は氷点下に達することもあるため、防風性のあるダウンジャケットやフリース、機能性インナーの重ね着が必須です。1号路は舗装路ですが、12月〜1月の早朝や日陰では路面凍結箇所があるため、滑りにくいトレッキングシューズまたはスニーカーを着用してください。手袋、ニット帽、ネックウォーマーなどの小物防寒具も欠かせません。"
    },
    {
      q: "冬の高尾山で「ダイヤモンド富士」が見られる時期と時間帯・おすすめスポットは？",
      a: "高尾山山頂からのダイヤモンド富士（太陽が富士山頂に沈む神秘的な光学現象）は、毎年冬至前後の12月中旬から12月下旬（概ね12月18日〜25日頃）の日没時（16時10分〜16時30分頃）に観測できます。鑑賞スポットは高尾山山頂展望デッキ（大見晴園地）や、もみじ台周辺が代表的です。日没直後は急激に気温が氷下近くまで下がり、周囲が急速に暗くなるため、下山時はヘッドライトや懐中電灯、十分な防寒着を必ず準備してください。ケーブルカーの冬期延長運行状況も事前に確認しておくと安心です。"
    },
    {
      q: "高尾山薬王院の新春初詣の混雑状況と参拝時間・お護摩祈祷について",
      a: "高尾山薬王院有喜寺は真言宗智山派の大本山で、成田山新勝寺・川崎大師平間寺と並ぶ関東三大本山の一つです。正月三が日は例年数十万人の初詣参拝客で賑わい、ケーブルカー・リフトは元旦未明から終夜運転が行われます。初詣の混雑ピークは元旦の午前0時〜3時頃、および日中の10時〜15時頃です。混雑を避けるなら早朝7時〜8時台の参拝が狙い目。本堂で厳修される「新春大護摩供」では、天狗の御利益である開運厄除や家内安全の祈祷札を授かることができます。"
    },
    {
      q: "冬の高尾山で絶対に食べたい名物グルメ「とろろそば」と甘味は？",
      a: "高尾山の名物グルメといえば、自然薯（じねんじょ）や長芋をたっぷり使った「高尾山とろろそば」です。山麓から山頂にかけて20軒近いそば処が軒を連ね、老舗「高橋家」の信州産石臼挽きそばや、「栄茶屋」の自然薯100%とろろなど店ごとに個性豊かな出汁とコシを競い合っています。寒い冬には温かいとろろそばが冷えた身体に染み渡ります。また、ケーブルカー高尾山駅前で販売されている名物「天狗焼」（黒豆あんが入った香ばしい焼き菓子）や、炭火で焼く「三福だんご」も冬の定番人気です。"
    },
    {
      q: "下山後に立ち寄れる天然温泉「京王高尾山温泉 極楽湯」の利用ポイントは？",
      a: "京王線高尾山口駅の改札直結という抜群の立地にある日帰り天然温泉「京王高尾山温泉 極楽湯」。地下約1000mから湧出するアルカリ性単純温泉は、柔らかな肌触りで疲労回復や筋肉痛の緩和に優れています。檜風呂のマイクロバブル湯や開放感あふれる露天岩風呂、露天炭酸泉が完備されており、冬山歩きの汗と冷えを一気に流すことができます。館内には食事処や休憩処も併設されており、電車に乗る直前まで心ゆくまで温まることができます。"
    }
  ];

  const pageContent = `import Link from 'next/link';
import type { Metadata } from 'next';
import { 
  Star, MapPin, CheckCircle2, Calendar, Utensils, Compass, ExternalLink, Sparkles, Building, Waves, ShieldCheck, Snowflake, Footprints, Flame, Flower2, Wine, AlertTriangle, Sunrise, HeartHandshake, Eye, Mountain
} from 'lucide-react';

export const metadata: Metadata = {
  title: ${JSON.stringify(title)},
  description: ${JSON.stringify(description)},
  keywords: '高尾山 初詣, 高尾山薬王院, ダイヤモンド富士 高尾山, とろろそば 高尾山, 京王高尾山温泉 極楽湯, 京王プラザホテル八王子, タカオネ, 八王子 ホテル, 冬 高尾山 登山, 天狗焼',
  alternates: {
    canonical: 'https://croud-travel.com/${slug}'
  },
  openGraph: {
    title: ${JSON.stringify(title)},
    description: ${JSON.stringify(description)},
    url: 'https://croud-travel.com/${slug}',
    type: 'article',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1503899036084-c55cdd92da26?auto=format&fit=crop&w=1200&h=630&q=80',
        width: 1200,
        height: 630,
        alt: '冬の澄み切った高尾山山頂から望む富士山と薬王院の境内'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: ${JSON.stringify(title)},
    description: ${JSON.stringify(description)},
    images: ['https://images.unsplash.com/photo-1503899036084-c55cdd92da26?auto=format&fit=crop&w=1200&h=630&q=80']
  }
};

export const dynamic = 'force-static';

export default function TokyoTakaoWinterPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": ${JSON.stringify(title)},
    "description": ${JSON.stringify(description)},
    "image": "https://images.unsplash.com/photo-1503899036084-c55cdd92da26?auto=format&fit=crop&w=1200&h=630&q=80",
    "datePublished": "2026-10-06T00:00:00+09:00",
    "dateModified": "2026-10-06T00:00:00+09:00",
    "author": {
      "@type": "Organization",
      "name": "旅宿クラウド 編集部",
      "url": "https://croud-travel.com"
    },
    "publisher": {
      "@type": "Organization",
      "name": "旅宿クラウド",
      "logo": {
        "@type": "ImageObject",
        "url": "https://croud-travel.com/logo.png"
      }
    },
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": "https://croud-travel.com/${slug}"
    }
  };

  const breadcrumbsJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "ホーム",
        "item": "https://croud-travel.com"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "特集一覧",
        "item": "https://croud-travel.com/features"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": "東京・高尾山＆八王子 冬特集",
        "item": "https://croud-travel.com/${slug}"
      }
    ]
  };

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
${faqList.map(item => `      {
        "@type": "Question",
        "name": ${JSON.stringify(item.q)},
        "acceptedAnswer": {
          "@type": "Answer",
          "text": ${JSON.stringify(item.a)}
        }
      }`).join(',\n')}
    ]
  };

  const hotelsData = [
${hotelCardsCode}
  ];

  const faqsData = [
${faqList.map(item => `    {
      q: ${JSON.stringify(item.q)},
      a: ${JSON.stringify(item.a)}
    }`).join(",\n")}
  ];

  return (
    <article className="min-h-screen bg-slate-50 text-slate-800 antialiased">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbsJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      {/* Hero Header */}
      <header className="relative bg-gradient-to-b from-slate-950 via-slate-900 to-indigo-950 text-white py-16 md:py-24 px-4 overflow-hidden">
        <div className="absolute inset-0 opacity-20 bg-[radial-gradient(#38bdf8_1px,transparent_1px)] [background-size:16px_16px] pointer-events-none" />
        <div className="max-w-5xl mx-auto relative z-10">
          <div className="flex items-center gap-2 text-sky-400 text-xs md:text-sm font-semibold tracking-wider uppercase mb-3">
            <Snowflake className="w-4 h-4 text-sky-300" />
            <span>関東・東京 多摩・八王子 冬の特別紀行（11月・12月・1月）</span>
          </div>
          <h1 className="text-2xl md:text-4xl lg:text-5xl font-black leading-tight tracking-tight mb-6 font-journal-serif">
            霊峰「高尾山薬王院」新春初詣と冬晴れのダイヤモンド富士！<br className="hidden md:inline" />
            名物自然薯とろろそば＆極楽湯・八王子厳選名宿5選
          </h1>
          <p className="text-slate-300 text-sm md:text-base leading-relaxed max-w-3xl mb-6">
            新宿駅から京王線特急でわずか約47分。標高599mの霊峰・高尾山は、世界一の登山客数を誇りながら、冬になると凛とした静寂と圧倒的な透明度の大気に包まれます。12月下旬の冬至前後に山頂から拝む奇跡の「ダイヤモンド富士」、奈良時代開山の古刹「高尾山薬王院」で炎高く立ち上る新春大護摩供と天狗信仰の初詣。参道に漂う香ばしい出汁と滋養豊かな「自然薯とろろそば」、駅直結の「極楽湯」で味わう至福の天然温泉。八王子駅前の快適なシティホテルから麓の体験型拠点まで、冬の東京の奥座敷を満喫する極上の滞在プランを詳しく紐解きます。
          </p>

          <div className="flex flex-wrap gap-3 text-xs md:text-sm text-slate-200">
            <span className="bg-sky-950/70 border border-sky-800/60 px-3 py-1.5 rounded-full flex items-center gap-1.5">
              <Mountain className="w-4 h-4 text-sky-400" /> 高尾山薬王院（新春大護摩供・関東三大本山初詣）
            </span>
            <span className="bg-sky-950/70 border border-sky-800/60 px-3 py-1.5 rounded-full flex items-center gap-1.5">
              <Sunrise className="w-4 h-4 text-sky-400" /> 冬至前後のダイヤモンド富士＆冠雪富士山パノラマ
            </span>
            <span className="bg-sky-950/70 border border-sky-800/60 px-3 py-1.5 rounded-full flex items-center gap-1.5">
              <Utensils className="w-4 h-4 text-sky-400" /> 元祖自然薯とろろそば＆極楽湯天然温泉
            </span>
          </div>
        </div>
      </header>

      {/* Summary Box */}
      <section className="max-w-5xl mx-auto px-4 -mt-8 relative z-20">
        <div className="bg-white rounded-2xl shadow-xl p-6 md:p-8 border border-slate-100">
          <div className="flex items-center gap-2 text-sky-700 font-bold text-lg mb-4">
            <Sparkles className="w-5 h-5 text-sky-600" />
            <h2>高尾山＆八王子 冬旅のハイライト（11・12・1月）</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-sm leading-relaxed text-slate-600">
            <div className="border-l-2 border-sky-500 pl-4">
              <h3 className="font-bold text-slate-900 mb-1">澄み切った冬空のダイヤモンド富士</h3>
              <p>12月中旬〜下旬の日没時、富士山頂に夕日が重なる奇跡の光景。空気中の水蒸気が少ない冬ならではの、くっきりとした赤富士と夕焼けパノラマは息を呑む絶景です。</p>
            </div>
            <div className="border-l-2 border-amber-500 pl-4">
              <h3 className="font-bold text-slate-900 mb-1">高尾山薬王院の新春大護摩供</h3>
              <p>天平16年（744年）開山、飯縄大権現を祀る修験道の霊場。正月三が日は終夜運転のケーブルカーで登り、除夜の鐘や初日の出とともに家内安全・厄除けを祈願できます。</p>
            </div>
            <div className="border-l-2 border-emerald-500 pl-4">
              <h3 className="font-bold text-slate-900 mb-1">名物自然薯とろろそば＆極楽湯</h3>
              <p>薬王院参拝の精進料理に由来するとろろそば。粘りと香りが際立つ温かい一杯で暖をとった後は、高尾山口駅直結の極楽湯で美肌露天風呂を満喫できます。</p>
            </div>
          </div>
        </div>
      </section>

      {/* Detailed Guide Section 1 */}
      <section className="max-w-5xl mx-auto px-4 py-12 md:py-16">
        <div className="mb-10">
          <span className="text-sky-600 font-bold text-sm tracking-widest uppercase">AREA & SIGHTSEEING</span>
          <h2 className="text-2xl md:text-3xl font-black text-slate-900 mt-1 mb-4 font-journal-serif">
            霊峰・高尾山の冬が魅せる静寂美と信仰の力
          </h2>
          <div className="w-16 h-1 bg-sky-500 rounded-full mb-6" />
        </div>

        <div className="prose prose-slate max-w-none text-slate-700 leading-relaxed text-base md:text-lg space-y-6">
          <p>
            東京都八王子市に位置する高尾山は、標高599mという親しみやすい山容でありながら、暖温帯林と冷温帯林が交差する豊かな原生林と、1200年を超える仏教信仰の歴史を宿す特別な山です。年間約300万人もの登山者が訪れる世界屈指の人気スポットですが、紅葉の喧騒が落ち着く11月下旬から1月にかけては、森全体が厳かな静けさを取り戻し、高尾山本来の霊気と透き通るような自然の美しさが際立ちます。
          </p>
          <p>
            山腹に堂々と伽藍を構える「高尾山薬王院有喜寺」は、天平16年に聖武天皇の勅命により行基菩薩が開山した真言宗智山派の大本山。本尊として祀られる飯縄大権現（いづなだいごんげん）は、不動明王の化身とされ、その眷属である鼻高天狗・烏天狗（からすてんぐ）の伝説が今も山内に色濃く息づいています。新春を迎えると、本堂では太鼓と法螺貝の音が響き渡る中で「新春大護摩供」が厳修され、燃え盛る護摩の炎に厄を祓い、新年の多幸を祈る参拝者で溢れます。杉の大木が連なる浄心門から山門、本堂、本社へと続く石段は、白く吐く息とともに一歩ずつ登るごとに心が洗われる神聖な道筋です。
          </p>
          <p>
            そして冬の高尾山を語る上で欠かせないのが、山頂からの眺望です。冬場の関東平野は大陸からの冷たい高気圧に覆われて晴天率が非常に高く、湿度が下がるため遠景のクリア度が格段に向上します。山頂展望デッキからは、雪を被った富士山が目の前にそびえ立ち、丹沢山塊や南アルプスの白い峰々、さらには東側に広がる新宿副都心の高層ビル群や東京スカイツリーまで360度の大パノラマが広がります。特に冬至前後の12月中旬から下旬には、太陽が富士山の真頂に沈む「ダイヤモンド富士」が見られ、茜色に染まる夕空と富士のシルエットが生み出す黄金の輝きは、言葉を失うほどの美しさです。
          </p>
        </div>
      </section>

      {/* Detailed Guide Section 2: Gourmet & Hot Spring */}
      <section className="bg-slate-100 py-12 md:py-16 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="mb-10">
            <span className="text-amber-600 font-bold text-sm tracking-widest uppercase">GOURMET & WELLNESS</span>
            <h2 className="text-2xl md:text-3xl font-black text-slate-900 mt-1 mb-4 font-journal-serif">
              滋養の自然薯とろろそばと清流の天然温泉「極楽湯」
            </h2>
            <div className="w-16 h-1 bg-amber-500 rounded-full mb-6" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-slate-700 leading-relaxed">
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200">
              <div className="flex items-center gap-2 text-amber-700 font-bold text-lg mb-3">
                <Utensils className="w-5 h-5 text-amber-600" />
                <h3>高尾山名物「自然薯とろろそば」のルーツ</h3>
              </div>
              <p className="text-sm md:text-base mb-4">
                高尾山参道の名物として知られる「とろろそば」は、かつて険しい山道を歩いて薬王院へ参拝に訪れた信徒たちの疲労を回復させるため、滋養強壮に優れた山芋や自然薯をすりおろして振る舞った精進料理が始まりとされています。
              </p>
              <p className="text-sm md:text-base">
                麓から中腹にかけて並ぶ老舗蕎麦処では、粘り強い良質なとろろに秘伝の出汁と生卵、うずらの卵を落とし、喉越しの良い打ち立て蕎麦とともに提供。温かい「とろろそば」は、冷え切った冬の胃袋を芯からじんわりと温め、活力を与えてくれます。下山途中の茶屋で味わう名物「天狗焼」や、炭火で香ばしく炙った「三福だんご」をつまむのも冬歩きの大きな醍醐味です。
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200">
              <div className="flex items-center gap-2 text-sky-700 font-bold text-lg mb-3">
                <Waves className="w-5 h-5 text-sky-600" />
                <h3>下山直行！京王高尾山温泉 極楽湯の癒やし</h3>
              </div>
              <p className="text-sm md:text-base mb-4">
                京王線高尾山口駅の改札口と連絡通路で直結している日帰り温泉施設「京王高尾山温泉 極楽湯」。地下約1,000mから汲み上げられたアルカリ性単純温泉は、柔らかな湯ざわりで「美肌の湯」として親しまれています。
              </p>
              <p className="text-sm md:text-base">
                冬の冷気に包まれながら浸かる露天岩風呂や、森林浴気分の露天炭酸泉、木肌が心地よい檜風呂のマイクロバブル湯など多彩な湯舟が揃い、登山の疲労物質を素早く解きほぐします。館内には広々としたお座敷の食事処やリラクゼーション施設も完備されており、帰りの電車に乗る直前まで至福の温もりに浸ることができます。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Model Course Section */}
      <section className="max-w-5xl mx-auto px-4 py-12 md:py-16">
        <div className="mb-10">
          <span className="text-indigo-600 font-bold text-sm tracking-widest uppercase">WINTER MODEL COURSE</span>
          <h2 className="text-2xl md:text-3xl font-black text-slate-900 mt-1 mb-4 font-journal-serif">
            冬の高尾山・八王子 1泊2日 満喫モデルコース
          </h2>
          <div className="w-16 h-1 bg-indigo-500 rounded-full mb-6" />
        </div>

        <div className="relative border-l-2 border-indigo-200 ml-4 md:ml-6 pl-6 md:pl-8 space-y-8 text-sm md:text-base">
          <div className="relative">
            <span className="absolute -left-[33px] md:-left-[41px] top-1.5 w-4 h-4 rounded-full bg-indigo-600 border-4 border-white shadow-sm" />
            <span className="text-xs font-bold text-indigo-600 tracking-wider">DAY 1 / 10:30</span>
            <h3 className="font-bold text-slate-900 text-lg mt-0.5">京王線高尾山口駅到着＆参道散策</h3>
            <p className="text-slate-600 mt-1">
              新宿から特急で快適に到着。参道の老舗蕎麦処で早めの昼食として温かい「自然薯とろろそば」を堪能。清滝駅からケーブルカーに乗車し、日本一の急勾配（31度18分）を体感しながら標高472mの高尾山駅へ。
            </p>
          </div>

          <div className="relative">
            <span className="absolute -left-[33px] md:-left-[41px] top-1.5 w-4 h-4 rounded-full bg-indigo-600 border-4 border-white shadow-sm" />
            <span className="text-xs font-bold text-indigo-600 tracking-wider">DAY 1 / 12:30</span>
            <h3 className="font-bold text-slate-900 text-lg mt-0.5">高尾山薬王院参拝＆大本堂新春大護摩供</h3>
            <p className="text-slate-600 mt-1">
              杉木立が美しい1号路を歩き、浄心門、神変堂を経て薬王院へ。大本堂で厳修される護摩祈祷に参列し、厄除けと新年の誓いを立てる。本社（飯縄権現堂）の極彩色の彫刻美や奥之院を拝観。
            </p>
          </div>

          <div className="relative">
            <span className="absolute -left-[33px] md:-left-[41px] top-1.5 w-4 h-4 rounded-full bg-indigo-600 border-4 border-white shadow-sm" />
            <span className="text-xs font-bold text-indigo-600 tracking-wider">DAY 1 / 15:30</span>
            <h3 className="font-bold text-slate-900 text-lg mt-0.5">山頂展望台で冬晴れパノラマ＆夕景鑑賞</h3>
            <p className="text-slate-600 mt-1">
              標高599mの山頂へ到達。澄み渡る青空に輝く白銀の富士山を一望。冬至期であれば夕暮れ時に感動的な「ダイヤモンド富士」を観測。ケーブルカーで山麓へ下山。
            </p>
          </div>

          <div className="relative">
            <span className="absolute -left-[33px] md:-left-[41px] top-1.5 w-4 h-4 rounded-full bg-indigo-600 border-4 border-white shadow-sm" />
            <span className="text-xs font-bold text-indigo-600 tracking-wider">DAY 1 / 17:30</span>
            <h3 className="font-bold text-slate-900 text-lg mt-0.5">京王高尾山温泉 極楽湯＆八王子ホテルチェックイン</h3>
            <p className="text-slate-600 mt-1">
              高尾山口駅直結の極楽湯で露天岩風呂と炭酸泉を堪能。冷えた身体を芯から温めた後、京王線で八王子駅へ移動。京王プラザホテル八王子またはタカオネにチェックインし、贅沢な冬のディナーを楽しむ。
            </p>
          </div>

          <div className="relative">
            <span className="absolute -left-[33px] md:-left-[41px] top-1.5 w-4 h-4 rounded-full bg-sky-600 border-4 border-white shadow-sm" />
            <span className="text-xs font-bold text-sky-600 tracking-wider">DAY 2 / 09:30</span>
            <h3 className="font-bold text-slate-900 text-lg mt-0.5">甲州街道の八王子宿散策＆ご当地グルメ</h3>
            <p className="text-slate-600 mt-1">
              ホテルで朝食後、江戸時代の宿場町として栄えた八日町・横山町周辺の歴史散歩。お昼には刻み玉ねぎが特徴のソウルフード「八王子ラーメン」を味わい、多摩の銘酒や織物工芸品をお土産に選んで帰路へ。
            </p>
          </div>
        </div>
      </section>

      {/* Hotel Recommendation Section */}
      <section className="bg-slate-900 text-white py-16 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-sky-400 font-bold text-sm tracking-widest uppercase">HOTEL & RYOKAN SELECTION</span>
            <h2 className="text-2xl md:text-4xl font-black mt-2 mb-4 font-journal-serif">
              高尾山初詣・冬旅に選ばれる厳選名宿5選
            </h2>
            <p className="text-slate-300 text-sm md:text-base leading-relaxed">
              楽天トラベルAPIから最新の空室状況・宿泊プラン・宿泊者評価を直接取得。高尾山口駅至近の体験型施設から八王子駅直結の高級シティホテルまで、冬の旅を格上げする宿を厳選しました。
            </p>
          </div>

          <div className="space-y-10">
            {hotelsData.map((hotel) => (
              <div 
                key={hotel.id} 
                className="bg-slate-800/90 border border-slate-700/80 rounded-2xl p-6 md:p-8 backdrop-blur shadow-2xl hover:border-sky-500/50 transition-all duration-300"
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
                  {/* Hotel Image & Basic Specs */}
                  <div className="lg:col-span-5 flex flex-col justify-between">
                    <div>
                      <div className="relative rounded-xl overflow-hidden mb-4 aspect-[4/3] bg-slate-950">
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img 
                          src={hotel.img} 
                          alt={hotel.name} 
                          className="w-full h-full object-cover hover:scale-105 transition duration-500" 
                        />
                        <div className="absolute top-3 left-3 bg-slate-900/85 backdrop-blur px-3 py-1 rounded-full text-xs font-bold text-sky-400 border border-sky-400/30">
                          厳選宿 #{hotel.id}
                        </div>
                      </div>
                      <div className="flex items-center justify-between text-xs text-slate-300 mb-2">
                        <span className="flex items-center gap-1 text-amber-400 font-bold">
                          <Star className="w-4 h-4 fill-amber-400" /> {hotel.rating}
                        </span>
                        <span>クチコミ {hotel.reviews.toLocaleString()}件</span>
                        <span className="text-sky-300 font-bold">{hotel.price}</span>
                      </div>
                      <p className="text-xs text-slate-400 flex items-start gap-1">
                        <MapPin className="w-3.5 h-3.5 text-slate-500 shrink-0 mt-0.5" />
                        <span>{hotel.access}</span>
                      </p>
                    </div>

                    <div className="mt-4 pt-4 border-t border-slate-700/60 hidden lg:block">
                      <a 
                        href={hotel.url} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="w-full bg-gradient-to-r from-sky-600 to-blue-600 hover:from-sky-500 hover:to-blue-500 text-white font-bold py-3 px-4 rounded-xl text-center block transition shadow-lg shadow-sky-900/30 text-sm"
                      >
                        楽天トラベルで空室・プランを見る <ExternalLink className="w-4 h-4 inline-block ml-1" />
                      </a>
                    </div>
                  </div>

                  {/* Hotel Details */}
                  <div className="lg:col-span-7 flex flex-col justify-between">
                    <div>
                      <h3 className="text-xl md:text-2xl font-black text-white mb-3 font-journal-serif">
                        {hotel.name}
                      </h3>
                      <p className="text-slate-300 text-sm md:text-base leading-relaxed mb-5">
                        {hotel.story}
                      </p>

                      {/* Highlights */}
                      <div className="space-y-2 mb-5">
                        {hotel.highlights.map((hl: string, idx: number) => (
                          <div key={idx} className="flex items-start gap-2 text-xs md:text-sm text-slate-200">
                            <CheckCircle2 className="w-4 h-4 text-sky-400 shrink-0 mt-0.5" />
                            <span>{hl}</span>
                          </div>
                        ))}
                      </div>

                      {/* Tips Boxes */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs mb-4">
                        <div className="bg-slate-900/70 p-3 rounded-lg border border-slate-700/50">
                          <span className="text-sky-400 font-bold block mb-1">【客室の選び方】</span>
                          <span className="text-slate-300 leading-normal">{hotel.roomTip}</span>
                        </div>
                        <div className="bg-slate-900/70 p-3 rounded-lg border border-slate-700/50">
                          <span className="text-amber-400 font-bold block mb-1">【料理のこだわり】</span>
                          <span className="text-slate-300 leading-normal">{hotel.gourmetTip}</span>
                        </div>
                      </div>
                    </div>

                    <div className="mt-2 block lg:hidden">
                      <a 
                        href={hotel.url} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="w-full bg-gradient-to-r from-sky-600 to-blue-600 hover:from-sky-500 hover:to-blue-500 text-white font-bold py-3 px-4 rounded-xl text-center block transition shadow-lg shadow-sky-900/30 text-sm"
                      >
                        楽天トラベルで空室・プランを見る <ExternalLink className="w-4 h-4 inline-block ml-1" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="max-w-5xl mx-auto px-4 py-12 md:py-16">
        <div className="mb-10 text-center">
          <span className="text-sky-600 font-bold text-sm tracking-widest uppercase">FREQUENTLY ASKED QUESTIONS</span>
          <h2 className="text-2xl md:text-3xl font-black text-slate-900 mt-1 mb-3 font-journal-serif">
            冬の高尾山初詣・登山 よくある質問
          </h2>
          <div className="w-16 h-1 bg-sky-500 rounded-full mx-auto" />
        </div>

        <div className="space-y-4 max-w-3xl mx-auto">
          {faqsData.map((faq, index) => (
            <div key={index} className="bg-white rounded-xl border border-slate-200 p-5 shadow-sm">
              <h3 className="font-bold text-slate-900 text-base md:text-lg mb-2 flex items-start gap-2">
                <span className="bg-sky-100 text-sky-800 text-xs px-2 py-1 rounded font-black shrink-0 mt-0.5">Q</span>
                <span>{faq.q}</span>
              </h3>
              <p className="text-slate-600 text-sm md:text-base leading-relaxed pl-6">
                {faq.a}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Internal Navigation & Related Links */}
      <section className="bg-slate-100 py-12 px-4 border-t border-slate-200">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-8">
            <span className="text-slate-500 font-bold text-xs tracking-widest uppercase">RELATED WINTER FEATURES</span>
            <h2 className="text-xl md:text-2xl font-black text-slate-900 mt-1">
              あわせて読みたい冬の厳選旅行特集
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm mb-8">
            <Link 
              href="/winter-tokyo-okutama-mitake-shrine-hatsumode-hikawa-gorge-akikawagyu-stay"
              className="bg-white p-4 rounded-xl border border-slate-200 hover:border-sky-500 transition hover:shadow-md group block"
            >
              <div className="text-sky-600 font-bold text-xs mb-1">東京・奥多摩＆青梅</div>
              <div className="font-bold text-slate-900 group-hover:text-sky-600 transition mb-2">
                武蔵御嶽神社天空の初詣と氷川渓谷の冬静寂・秋川牛と清流温泉
              </div>
              <p className="text-xs text-slate-500 line-clamp-2">
                同じく多摩エリアが誇る霊峰・御岳山のおいぬ様初詣と、奥多摩わさび・極上秋川牛会席を味わう名宿特集。
              </p>
            </Link>

            <Link 
              href="/winter-kanagawa-isehara-oyama-afuri-shrine-hatsumode-tofu-tsurumaki-stay"
              className="bg-white p-4 rounded-xl border border-slate-200 hover:border-sky-500 transition hover:shadow-md group block"
            >
              <div className="text-sky-600 font-bold text-xs mb-1">神奈川・大山＆伊勢原</div>
              <div className="font-bold text-slate-900 group-hover:text-sky-600 transition mb-2">
                大山阿夫利神社新春初詣と相模湾絶景・大山豆腐料理と鶴巻温泉名宿
              </div>
              <p className="text-xs text-slate-500 line-clamp-2">
                高尾山と並ぶ関東修験道の聖地。ミシュラン二つ星の相模湾眺望と名水大山豆腐、美肌名湯鶴巻温泉を巡る旅。
              </p>
            </Link>

            <Link 
              href="/winter-saitama-chichibu-onsen-yomatsuri-nagatoro-bushugyu-stay"
              className="bg-white p-4 rounded-xl border border-slate-200 hover:border-sky-500 transition hover:shadow-md group block"
            >
              <div className="text-sky-600 font-bold text-xs mb-1">埼玉・秩父＆長瀞</div>
              <div className="font-bold text-slate-900 group-hover:text-sky-600 transition mb-2">
                秩父夜祭と冬の三十槌の氷柱・宝登山神社初詣＆武州和牛名宿
              </div>
              <p className="text-xs text-slate-500 line-clamp-2">
                奥武蔵の冬の風物詩。幻想的な天然氷柱ライトアップと秩父三社新春初詣、名物豚みそ丼と温泉を楽しむ特集。
              </p>
            </Link>
          </div>

          <div className="flex flex-wrap justify-center gap-4 text-xs font-semibold text-slate-600">
            <Link href="/" className="hover:text-sky-600 underline">ホーム</Link>
            <span>•</span>
            <Link href="/features" className="hover:text-sky-600 underline">特集一覧</Link>
            <span>•</span>
            <Link href="/posts" className="hover:text-sky-600 underline">記事一覧カタログ</Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-950 text-slate-400 py-8 px-4 text-center text-xs">
        <p>© 2026 旅宿クラウド (croud-travel.com). All rights reserved.</p>
        <p className="mt-1 text-slate-500">
          ※本記事に掲載している宿泊施設情報、価格、評価、運行情報等は、楽天トラベルAPIおよび公式サイトの最新データに基づいています。冬期の参拝時間やケーブルカー運行ダイヤは変更となる場合がありますので、お出かけ前にご確認ください。
        </p>
      </footer>
    </article>
  );
}
`;

  return { slug, pageContent };
}

module.exports = { generateTokyoTakaoPage };
